const V="osembo-pwa-2",SHELL=["./","index.html","app.html","manifest.webmanifest","icons/icon-192.png","icons/icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{const r=e.request,u=new URL(r.url);
  if(r.method!=="GET"||u.origin!==location.origin)return; /* Firebase and other sites go straight to the network */
  e.respondWith((async()=>{const net=fetch(r).then(x=>{if(x.ok){const c=x.clone();caches.open(V).then(k=>k.put(r,c))}return x});
    const hit=await caches.match(r,{ignoreSearch:true});if(!hit)return net.catch(()=>caches.match("app.html"));
    return Promise.race([net,new Promise(ok=>setTimeout(()=>ok(hit),3000))]).catch(()=>hit)})())});
