/* Osembo service worker. Change VERSION whenever you upload a new app.html so every device refreshes. */
const VERSION="osembo-v3";
const CORE=["index.html","app.html","manifest.webmanifest","icons/osembo-192.png","icons/osembo-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(VERSION).then(c=>Promise.all(CORE.map(u=>c.add(u).catch(()=>{})))).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==VERSION).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{const r=e.request;if(r.method!=="GET")return;const u=new URL(r.url);if(u.origin!==location.origin)return;
  const page=r.mode==="navigate"||/\.html?$/.test(u.pathname);
  if(page){e.respondWith(fetch(r).then(res=>{const c=res.clone();caches.open(VERSION).then(x=>x.put(r,c));return res}).catch(()=>caches.match(r).then(m=>m||caches.match("app.html"))));return}
  e.respondWith(caches.match(r).then(m=>{const n=fetch(r).then(res=>{if(res.ok){const c=res.clone();caches.open(VERSION).then(x=>x.put(r,c))}return res}).catch(()=>m);return m||n}))});
