// محرك المصفوفة الخلفي - Service Worker
self.addEventListener('install', (event) => {
    console.log('Matrix Application Installed');
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('Matrix Application Activated');
});

self.addEventListener('fetch', (event) => {
    // تمرير الطلبات للإنترنت مباشرة لضمان وصول التحديثات فوراً
    event.respondWith(fetch(event.request));
});
