/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "cdc93d1568534e779e04c9c3a5379f5d"
  },
  {
    "url": "AllowDrop.html",
    "revision": "36d026365e16c9363cb07858916606ba"
  },
  {
    "url": "assets/css/0.styles.9d444ee2.css",
    "revision": "cf33d469447ac1fa3f5cae9c287d28f3"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.42cee337.js",
    "revision": "0fbc88a1938d84d494f689cf97bb69eb"
  },
  {
    "url": "assets/js/10.ebd99979.js",
    "revision": "efaea060c3e191dbd67dc80c07ab1372"
  },
  {
    "url": "assets/js/11.4776ea81.js",
    "revision": "cf3e04e7a6759985a042895e9a6f7486"
  },
  {
    "url": "assets/js/12.f37f51ff.js",
    "revision": "aeb3a302a5e16f52a4c9133741698428"
  },
  {
    "url": "assets/js/13.1d8d4188.js",
    "revision": "93ad49ed0ec4084f92f1c06f1274ca91"
  },
  {
    "url": "assets/js/14.881a2796.js",
    "revision": "7b31c22031f190bb5aa8b489211d7255"
  },
  {
    "url": "assets/js/15.8082d2c8.js",
    "revision": "dc15034a86bac3759567f0c2dcabf7d7"
  },
  {
    "url": "assets/js/16.2b1f28f9.js",
    "revision": "72b4789b65e2c88dad9e9737fc0508b3"
  },
  {
    "url": "assets/js/17.7b46243a.js",
    "revision": "5f653cc42d6140dc91528a5c062b7df5"
  },
  {
    "url": "assets/js/18.adfbe8de.js",
    "revision": "2365070d618320d11c15a1ab45cdd4cb"
  },
  {
    "url": "assets/js/19.d8cc35d7.js",
    "revision": "cb4bfe3552dc37a9f9beed3b0207271c"
  },
  {
    "url": "assets/js/2.0547dd0f.js",
    "revision": "39c760bb237cd30e1e9f377a549ec5dc"
  },
  {
    "url": "assets/js/20.8106a8be.js",
    "revision": "6544970d748c56f56797cfb5273e6131"
  },
  {
    "url": "assets/js/21.0a13962d.js",
    "revision": "14cab3a54663c26f084f0605d98d5531"
  },
  {
    "url": "assets/js/22.0367fd95.js",
    "revision": "2b42ff58032c9dc819ee8e320c9af5d2"
  },
  {
    "url": "assets/js/4.de0bc6d4.js",
    "revision": "ef707903b2aef20935efd66a76739760"
  },
  {
    "url": "assets/js/5.e228c626.js",
    "revision": "a55f05c929c4c5c03b639968a03d7720"
  },
  {
    "url": "assets/js/6.de83fed2.js",
    "revision": "5c1a65d0adfaa2f9e547fa2556a76f94"
  },
  {
    "url": "assets/js/7.ea4c3df4.js",
    "revision": "e7d99c732ff99b011cc1b92404363cd5"
  },
  {
    "url": "assets/js/8.838dfa79.js",
    "revision": "b88d38c543bf3f3c38634c66d6b0b972"
  },
  {
    "url": "assets/js/9.a36dad5a.js",
    "revision": "f69e7d18f9117f87b18a28036fcc759f"
  },
  {
    "url": "assets/js/app.f7164f31.js",
    "revision": "370fc2959526ddeebf0228292ef5f1bf"
  },
  {
    "url": "categories/C# Control Properties/index.html",
    "revision": "cdc93d1568534e779e04c9c3a5379f5d"
  },
  {
    "url": "categories/Cpp 教學/index.html",
    "revision": "5b4cd78b119d10302309d16cf1a9be9b"
  },
  {
    "url": "categories/Discord 機器人/index.html",
    "revision": "ffdc6d7a4c2864ce4d713b1ecc8fb1a4"
  },
  {
    "url": "categories/index.html",
    "revision": "7875fc2baff85ea1fedc87792d4a4302"
  },
  {
    "url": "categories/Windows 作業系統研究/index.html",
    "revision": "e4b88ef46a330bee3ff7ff055cfb0c3f"
  },
  {
    "url": "categories/個人部落格/index.html",
    "revision": "db4dc472764ee6ab46ca2a01f13ccb0c"
  },
  {
    "url": "cpp/helloWorld.html",
    "revision": "4742b95766936766f9ff6bd30b5c1b10"
  },
  {
    "url": "cpp/index.html",
    "revision": "65d69744b6972c2f12c95d99d9812532"
  },
  {
    "url": "cpp/setting.html",
    "revision": "2a90c7dea7893e43e570f7de7d526c55"
  },
  {
    "url": "example.html",
    "revision": "8f16c51ca6c6963433ec4278877e109e"
  },
  {
    "url": "firstDiscordBot.html",
    "revision": "4bc452547f3ebe5cd0c7d1a4090b45f2"
  },
  {
    "url": "hero.jpg",
    "revision": "4c6a9a8235891032d10da26dac0706fd"
  },
  {
    "url": "index.html",
    "revision": "8283ee712815e504a7716f1254aad0f6"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "page.png",
    "revision": "7e6372bfa176e4475de86be57f1f5dcd"
  },
  {
    "url": "personalBlog.html",
    "revision": "d532f65a1b31132996bad1e7b0ef4225"
  },
  {
    "url": "tag/C#/index.html",
    "revision": "cdc93d1568534e779e04c9c3a5379f5d"
  },
  {
    "url": "tag/Cloud Storage/index.html",
    "revision": "8ab6cb18e3fc3c76091ee72b141f6461"
  },
  {
    "url": "tag/Cpp/index.html",
    "revision": "378709628666d9975fde5c470cae019d"
  },
  {
    "url": "tag/Discord/index.html",
    "revision": "0ef652956d150f415bc5f493e2bad3d4"
  },
  {
    "url": "tag/File/index.html",
    "revision": "7d1f02b9119a0b7951ba4a90a50328b1"
  },
  {
    "url": "tag/index.html",
    "revision": "5d8cd7cac34f07658c15b5ab3cbce860"
  },
  {
    "url": "tag/Microsoft/index.html",
    "revision": "a4789e9634e54b98e0179b13026933ae"
  },
  {
    "url": "tag/Properties/index.html",
    "revision": "987b462f136330c774cce08733379f22"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "eaf32e66539b80f3fe55b434e9d2c9ea"
  },
  {
    "url": "tag/Website/index.html",
    "revision": "bb714481d49c4ff434569fd0cbf6fc65"
  },
  {
    "url": "tag/Windows/index.html",
    "revision": "6881098a8d4db0115470e5e7b3e9408c"
  },
  {
    "url": "timeline/index.html",
    "revision": "e1dea33ee8b772cf14540ab896d60d5e"
  },
  {
    "url": "usingOneDrive.html",
    "revision": "7b10bff55dcffc14c1fbee5a14c7bcf9"
  },
  {
    "url": "windowsBetterLook.html",
    "revision": "d3834f2749ba5ac0b5515cdfc030ee51"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
