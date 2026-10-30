// My Finances offline-first service worker — v1.7.2
// Works on GitHub Pages root sites and subdirectory project sites.
const CACHE_NAME = 'rico-finances-v1.7.2';
const CACHE_PREFIX = 'rico-finances-';
const APP_SHELL = [
  './', './index.html', './styles.css', './icons.js', './analyst.js',
  './manifest.webmanifest', './version.json',
  './my-finances-icon-192.png', './my-finances-icon-512.png', './my-finances-maskable-512.png',
  './my-finances-apple-touch-icon.png', './favicon-48.png'
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache=await caches.open(CACHE_NAME);
    // Complete local assets before activating. Failure leaves old worker running.
    await cache.addAll(APP_SHELL.map(path => new Request(path, { cache:'reload' })));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names=await caches.keys();
    await Promise.all(names.filter(name => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME)
      .map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request=event.request;
  if (request.method !== 'GET') return;
  const url=new URL(request.url);
  if (url.origin !== self.location.origin) return;
  const scope=new URL(self.registration.scope);
  if (!url.pathname.startsWith(scope.pathname)) return;

  if (url.pathname === scope.pathname + 'version.json') {
    event.respondWith((async () => {
      try {
        const response = await fetch(request, {cache:'no-store'});
        if (response.ok) return response;
        throw new Error('No online version');
      } catch (_) {
        return (await caches.match('./version.json')) ||
          new Response('{}', {status:503, headers:{'Content-Type':'application/json'}});
      }
    })());
    return;
  }

  if (request.mode === 'navigate') {
    // New code becomes available on connection; offline gets the installed app.
    event.respondWith((async () => {
      try {
        const fresh=await fetch(request, {cache:'no-store'});
        if (fresh.ok) return fresh;
        throw new Error('No fresh page');
      } catch (_error) {
        return (await caches.match('./index.html')) ||
               (await caches.match('./')) ||
               new Response('My Finances requires one successful online installation.',
                 {status:503, headers:{'Content-Type':'text/plain; charset=utf-8'}});
      }
    })());
    return;
  }
  // Same-origin app files: cache-first, with network recovery for not-yet-cached extras.
  event.respondWith((async () => {
    const cached=await caches.match(request, {ignoreSearch:true});
    if (cached) return cached;
    try {
      const fresh=await fetch(request);
      // Cache only same-origin successful responses, without touching other apps.
      if (fresh.ok && fresh.type === 'basic') {
        const cache=await caches.open(CACHE_NAME);
        await cache.put(request, fresh.clone());
      }
      return fresh;
    } catch (_error) {
      return new Response('', {status:503, statusText:'Offline'});
    }
  })());
});
