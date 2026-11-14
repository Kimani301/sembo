/* Osembo service worker: makes the app installable and lets it open with no internet.
   Change the version number below whenever you upload a new app.html so phones pick it up. */
const VERSION = "osembo-v3";
const CORE = ["./", "./index.html", "./app.html", "./manifest.webmanifest",
  "./icons/icon-192.png", "./icons/icon-512.png", "./icons/icon-maskable-512.png", "./icons/apple-touch-icon.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => Promise.all(CORE.map(u => c.add(u).catch(() => {})))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET") return;
  const url = new URL(r.url);
  if (url.origin !== location.origin) return;            // Firebase, fonts and the AI go straight to the network
  if (r.mode === "navigate") {                           // pages: newest first, saved copy when offline
    e.respondWith(fetch(r).then(res => { const cp = res.clone(); caches.open(VERSION).then(c => c.put(r, cp)); return res; })
      .catch(() => caches.match(r).then(m => m || caches.match(url.pathname.endsWith("index.html") ? "./index.html" : "./app.html"))));
    return;
  }
  e.respondWith(caches.match(r).then(m => {              // files: saved copy now, refresh in the background
    const net = fetch(r).then(res => { if (res.ok) { const cp = res.clone(); caches.open(VERSION).then(c => c.put(r, cp)); } return res; }).catch(() => m);
    return m || net;
  }));
});
