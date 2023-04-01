const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), l = [
  e + "/_app/immutable/entry/app.114f42e6.js",
  e + "/_app/immutable/chunks/0.0d1092c2.js",
  e + "/_app/immutable/chunks/1.a44f69f0.js",
  e + "/_app/immutable/chunks/2.09f92aaf.js",
  e + "/_app/immutable/chunks/_layout.da46b06b.js",
  e + "/_app/immutable/chunks/index.33fbba09.js",
  e + "/_app/immutable/chunks/singletons.f57aeb51.js",
  e + "/_app/immutable/entry/start.8321eb7c.js",
  e + "/_app/immutable/entry/error.svelte.4a04853e.js",
  e + "/_app/immutable/entry/layout.svelte.b56ece7e.js",
  e + "/_app/immutable/entry/_layout.js.984db11e.js",
  e + "/_app/immutable/entry/_page.svelte.3717b407.js"
], p = [
  e + "/.nojekyll",
  e + "/favicon.png"
], r = [
  e + "/"
], u = "1680353969397", n = `cache-${u}`, i = [
  ...l,
  // the app itself
  ...p,
  // everything in `static`
  ...r
  // prerendered pages
];
self.addEventListener("install", (a) => {
  async function t() {
    await (await caches.open(n)).addAll(i);
  }
  a.waitUntil(t());
});
self.addEventListener("activate", (a) => {
  async function t() {
    for (const s of await caches.keys())
      s !== n && await caches.delete(s);
  }
  a.waitUntil(t());
});
self.addEventListener("fetch", (a) => {
  if (a.request.method !== "GET")
    return;
  async function t() {
    const s = new URL(a.request.url), c = await caches.open(n);
    if (i.includes(s.pathname))
      return c.match(a.request);
    try {
      return await fetch(a.request);
    } catch {
      return c.match(a.request);
    }
  }
  a.respondWith(t());
});
