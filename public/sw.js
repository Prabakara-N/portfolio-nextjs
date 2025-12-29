// Empty service worker - prevents 404 errors
// Add caching logic here if you want offline PWA support
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
