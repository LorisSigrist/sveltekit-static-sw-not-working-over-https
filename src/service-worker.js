/// <reference types="@sveltejs/kit" />
import { build, files, version, prerendered } from '$service-worker';
 
// Create a unique cache name for this deployment
const CACHE = `cache-${version}`;
 
const ASSETS = [
  ...build, // the app itself
  ...files,  // everything in `static`
  ...prerendered, // prerendered pages
];
 
self.addEventListener('install', (event) => {
  // Create a new cache and add all files to it
  async function addFilesToCache() {
    const cache = await caches.open(CACHE);
    await cache.addAll(ASSETS);
  }
 
  event.waitUntil(addFilesToCache());
});
 
self.addEventListener('activate', (event) => {
  // Remove previous cached data from disk
  async function deleteOldCaches() {
    for (const key of await caches.keys()) {
      if (key !== CACHE) await caches.delete(key);
    }
  }
 
  event.waitUntil(deleteOldCaches());
});
 
self.addEventListener('fetch', (event) => {
  // ignore POST requests etc
  if (event.request.method !== 'GET') return;
 
  async function respond() {
    const url = new URL(event.request.url);
    const cache = await caches.open(CACHE);
 
    // `build`/`files`/`prerendered` can always be served from the cache
    if (ASSETS.includes(url.pathname)) {
      return cache.match(event.request);
    }
 
    // for everything else, try the network first, but
    // fall back to the cache if we're offline
    try {
      const response = await fetch(event.request);
      return response;
    } catch {
      return cache.match(event.request);
    }
  }
 
  event.respondWith(respond());
});