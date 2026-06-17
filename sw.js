// ═══════════════════════════════════════════════════
// Service Worker — ADP 2026 EPS Football
// Cache-first : l'outil fonctionne hors connexion
// ═══════════════════════════════════════════════════
const CACHE = 'adp2026-v1';
const ASSETS = [
  './',
  './index.html',
  'https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Outfit:wght@300;400;500;600&family=JetBrains+Mono:wght@400;600&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js'
];

// Installation : mise en cache des ressources essentielles
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => {
      // On tente de cacher chaque ressource individuellement (évite qu'une seule erreur plante tout)
      return Promise.allSettled(ASSETS.map(url => c.add(url).catch(()=>{})));
    }).then(() => self.skipWaiting())
  );
});

// Activation : nettoyage des anciens caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch : cache-first avec fallback réseau
self.addEventListener('fetch', e => {
  if(e.request.method !== 'GET') return;
  // Les appels API Anthropic ne sont jamais cachés
  if(e.request.url.includes('api.anthropic.com')) return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      if(cached) return cached;
      return fetch(e.request).then(resp => {
        if(resp && resp.status === 200 && resp.type !== 'opaque'){
          const clone = resp.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return resp;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
