// Minimal service worker – only so the app can be installed. It caches NOTHING: every request (app files,
// Supabase API, stock data) goes straight to the network, so no stale records are ever shown.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => { /* network only – the browser handles the request */ });
