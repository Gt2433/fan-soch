// This service worker intentionally does NOT cache anything.
// Its only job is to satisfy the browser's requirement for an
// installable "Add to Home Screen" app. Every request always goes
// straight to the network, so the app never shows an old, stale
// version — it always reflects whatever is currently on GitHub Pages.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
