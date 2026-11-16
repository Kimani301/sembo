/* Osembo service worker: always fetches the newest app when online, keeps an offline copy.
   Change the number below every time you upload a new version of the app. */
const CACHE = "osembo-v9";

self.addEventListener("install", e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.add(new Request("./", { cache: "reload" }))).catch(() => {}));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET") return;
  const u = new URL(r.url);
  if (u.origin !== location.origin) return;            // never touch the AI, database or other sites
  if (u.pathname.endsWith("/sw.js")) return;

  // The app page: network first (so updates arrive), cached copy only when offline
  if (r.mode === "navigate" || r.destination === "document") {
    e.respondWith(
      fetch(r, { cache: "no-store" }).then(res => {
        if (res && res.ok) { const cp = res.clone(); caches.open(CACHE).then(c => c.put(r, cp)).catch(() => {}); }
        return res;
      }).catch(() =>
        caches.match(r, { ignoreSearch: true }).then(m => m || caches.match("./")).then(m => m || new Response("You are offline and the app is not saved on this phone yet.", { status: 503 }))
      )
    );
    return;
  }

  // Icons and other files: use the saved copy, refresh it in the background
  e.respondWith(
    caches.match(r).then(m => {
      const net = fetch(r).then(res => {
        if (res && res.ok) { const cp = res.clone(); caches.open(CACHE).then(c => c.put(r, cp)).catch(() => {}); }
        return res;
      }).catch(() => m);
      return m || net;
    })
  );
});
