const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), l = [
  e + "/_app/immutable/entry/app.d45cacc6.js",
  e + "/_app/immutable/chunks/0.0d1092c2.js",
  e + "/_app/immutable/chunks/1.ecf02f99.js",
  e + "/_app/immutable/chunks/2.09f92aaf.js",
  e + "/_app/immutable/chunks/_layout.da46b06b.js",
  e + "/_app/immutable/chunks/index.33fbba09.js",
  e + "/_app/immutable/chunks/singletons.88d8fc19.js",
  e + "/_app/immutable/entry/start.8319ca69.js",
  e + "/_app/immutable/entry/error.svelte.3a621493.js",
  e + "/_app/immutable/entry/layout.svelte.b56ece7e.js",
  e + "/_app/immutable/entry/_layout.js.984db11e.js",
  e + "/_app/immutable/entry/_page.svelte.3717b407.js"
], p = [
  e + "/favicon.png"
], r = [
  e + "/"
], u = "1680352392644", c = `cache-${u}`, i = [
  ...l,
  // the app itself
  ...p,
  // everything in `static`
  ...r
  // prerendered pages
];
self.addEventListener("install", (a) => {
  async function t() {
    await (await caches.open(c)).addAll(i);
  }
  a.waitUntil(t());
});
self.addEventListener("activate", (a) => {
  async function t() {
    for (const s of await caches.keys())
      s !== c && await caches.delete(s);
  }
  a.waitUntil(t());
});
self.addEventListener("fetch", (a) => {
  if (a.request.method !== "GET")
    return;
  async function t() {
    const s = new URL(a.request.url), n = await caches.open(c);
    if (i.includes(s.pathname))
      return n.match(a.request);
    try {
      return await fetch(a.request);
    } catch {
      return n.match(a.request);
    }
  }
  a.respondWith(t());
});
