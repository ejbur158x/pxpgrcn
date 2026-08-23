// Service worker for Pixel Purge: Reincarnation.
// The game itself is a single self-contained index.html (all sprites,
// sounds, and music are embedded inline) — so the only things that
// actually need caching for full offline play are this shell of files.
// Bump CACHE_VERSION any time index.html changes so returning devices
// pick up the new version instead of serving a stale cached copy.

const CACHE_VERSION = 'pixel-purge-v1';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-512-maskable.png',
  './apple-touch-icon.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_VERSION)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).catch(() => {
        // offline and not cached — for navigations, fall back to the
        // cached app shell itself so the game still opens
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
