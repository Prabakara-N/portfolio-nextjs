// Self-destroying service worker.
// Purpose: clean up any old caching service worker that was previously
// registered on this origin so it stops serving stale chunks/HTML.
// It has NO fetch handler, deletes all caches, unregisters itself, and
// reloads open tabs once so visitors get the live site.

self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      // Delete every cache this origin holds.
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));

      // Remove this service worker registration entirely.
      await self.registration.unregister();

      // Force-refresh any controlled tabs so they reload without the SW.
      const clients = await self.clients.matchAll({ type: "window" });
      clients.forEach((client) => client.navigate(client.url));
    })()
  );
});
