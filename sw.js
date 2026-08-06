// Deliberately minimal. Chrome's install-prompt criteria want an active
// service worker with a fetch handler, but this app is a live reader for
// wiki content that changes — caching pages would mean showing stale
// articles offline instead of nothing, which is worse. So this just
// passes every request straight through to the network.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
