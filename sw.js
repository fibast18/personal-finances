const CACHE_NAME = 'rico-finances-v1.6.5';
const ASSETS = [
    './',
    './index.html',
    './Rico ID.JPG',
    'https://cdn.tailwindcss.com',
    'https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js',
    'https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.js'
];

// Install event: cache all essential assets immediately on first load
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        }).then(() => self.skipWaiting())
    );
});

// Activate event: clean up old cached versions
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch event: serve from cache first, fall back to network
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request).then((networkResponse) => {
                // Optionally cache newly fetched local assets dynamically
                return networkResponse;
            }).catch(() => {
                // Fallback for offline navigation if needed
                if (event.request.mode === 'navigate') {
                    return caches.match('./index.html');
                }
            });
        })
    );
});
