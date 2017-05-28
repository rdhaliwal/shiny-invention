var CACHE_NAME = 'shiny-invention-v1';
var CACHE_ASSET_REGISTER = [
  '/app',
  // '/dist/*'
  // ,
  '/dist/app.js',
  '/dist/styles.css'
];

self.addEventListener('install', (event) => {
  console.log('Installing Service Worker');
  event.waitUntil(
    caches.open(CACHE_NAME)
          .then((cache) => cache.addAll(CACHE_ASSET_REGISTER))
          .then(() => console.log('Successfully installed assets to cache'))
          .catch(() => console.log('Failed to instal assets to cache'))
  );
});

// Intercept all fetch requests
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
          .then((response) => response || fetch(event.request))
  );
});
