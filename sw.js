/* Offline shell for the owner-operated, browser-local cashier. */
const CACHE = 'sentra-private-v6';
const APP_FILES = ['/', '/manifest.webmanifest', '/sentra-icon.svg'];
self.addEventListener('install', event => { event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(APP_FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('sentra-private-') && k!==CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', event => { const req=event.request;if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;
if(req.mode==='navigate'){event.respondWith(fetch(req).then(async resp=>{if(resp.ok&&resp.type==='basic'&&!resp.redirected){const cache=await caches.open(CACHE);await cache.put('/',resp.clone());}return resp;}).catch(()=>caches.match('/').then(r=>r||Response.error())));}
else{event.respondWith(caches.match(req).then(cached=>cached||fetch(req)));} });