if (typeof importScripts === "function") {
  // eslint-disable-next-line no-undef
  importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js"
  );
  /* global workbox */
  if (workbox) {
    console.log("Workbox is loaded");
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    // eslint-disable-next-line no-restricted-globals
    workbox.precaching.precacheAndRoute([
      { revision: "01ab09f3608b0304237b68f9f0c0f054", url: "script.js" },
      {
        revision: "54c319fb8635fedbf69b38f932ca6a11",
        url: "style-product.css",
      },
    ]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: "PRODUCTION",
        })
      )
    );
  } else {
    // console.log('Workbox could not be loaded. No Offline support');
  }
}
