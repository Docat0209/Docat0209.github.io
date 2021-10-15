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
    "revision": "6946f79adbd5e912c30b7b6324409342"
  },
  {
    "url": "AllowDrop.html",
    "revision": "786430433fa7d6345fabf26072236a08"
  },
  {
    "url": "assets/css/0.styles.407c2502.css",
    "revision": "06f15ff6853dd3fae12539b83cf3c288"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.e1a06156.js",
    "revision": "4c650cf3da5047cb43430050ddfedb34"
  },
  {
    "url": "assets/js/10.8df0aba4.js",
    "revision": "bd2d16dedadddaac88f9ae318c101978"
  },
  {
    "url": "assets/js/11.e11c3028.js",
    "revision": "39be4772a55e3747497365550a3d36f0"
  },
  {
    "url": "assets/js/12.d3a224aa.js",
    "revision": "09435e8cba5d6cd3170763c5f3569b95"
  },
  {
    "url": "assets/js/13.550698ce.js",
    "revision": "4a22238a38ae13cd18f2e2a4bd65cc5d"
  },
  {
    "url": "assets/js/14.e01a2030.js",
    "revision": "1974f82054c58a6f233e71f483c16e69"
  },
  {
    "url": "assets/js/15.547bd369.js",
    "revision": "a2909199e2959a917c3666ebbd91803c"
  },
  {
    "url": "assets/js/16.8c7d3402.js",
    "revision": "ebaa0f0cdaa777a90c27ef7cc907392c"
  },
  {
    "url": "assets/js/17.a5d87d3e.js",
    "revision": "6e1c4fd713313c1c69583e3435e8b884"
  },
  {
    "url": "assets/js/18.07f5a684.js",
    "revision": "ab504db8d66d264e74ef09682a15b867"
  },
  {
    "url": "assets/js/19.08273d1e.js",
    "revision": "356d3e96b708504f12b79bcebc686532"
  },
  {
    "url": "assets/js/2.89c914a8.js",
    "revision": "8e04481558f68409ffb5a2dac4272cba"
  },
  {
    "url": "assets/js/20.c3d1a0d5.js",
    "revision": "b983e3259c935031d8cc6859399f8256"
  },
  {
    "url": "assets/js/21.9894b959.js",
    "revision": "6a3c66c4b941af37182dc6f1d56a6b29"
  },
  {
    "url": "assets/js/22.fc8bc687.js",
    "revision": "057ad4fd917e070af58528782a95405e"
  },
  {
    "url": "assets/js/4.ef16faea.js",
    "revision": "27c6acef36e707ae775e29fa3de30786"
  },
  {
    "url": "assets/js/5.24a7589a.js",
    "revision": "1606ac90a9eb8a024d66e2313e3bc7ea"
  },
  {
    "url": "assets/js/6.1d5a2d65.js",
    "revision": "9360279a9dc674588bb7c253ef0b6c1d"
  },
  {
    "url": "assets/js/7.dd711204.js",
    "revision": "87afad0dca8b819e6cf051d1abd2d226"
  },
  {
    "url": "assets/js/8.936d257a.js",
    "revision": "8a4f824d4d2b8827e0fc30353b784729"
  },
  {
    "url": "assets/js/9.ea4834e5.js",
    "revision": "f39a1dbf6fc672bf7b2d6fcba25c2008"
  },
  {
    "url": "assets/js/app.d598dd81.js",
    "revision": "8ecf85dc920752c27786125ea36cc704"
  },
  {
    "url": "categories/C# Control Properties/index.html",
    "revision": "36cd40bd39d62f12f07e4c810035c06a"
  },
  {
    "url": "categories/Cpp 教學/index.html",
    "revision": "5b8ebe066c5f16cc00da3c6119571b58"
  },
  {
    "url": "categories/Discord 機器人/index.html",
    "revision": "2665f71929d4ebd5a33dbf776704d672"
  },
  {
    "url": "categories/index.html",
    "revision": "8946e3198ca166e7e207deebd028e0a4"
  },
  {
    "url": "categories/Windows 作業系統研究/index.html",
    "revision": "968c094db8c958bd3160719e27d894aa"
  },
  {
    "url": "categories/個人部落格/index.html",
    "revision": "a8edccebff8c21d73e42457ec557215c"
  },
  {
    "url": "cpp/helloWorld.html",
    "revision": "c5ede22ac02db294aa9c00d2a8fc2bb0"
  },
  {
    "url": "cpp/index.html",
    "revision": "3294754965aeb689071796a9a0bbf945"
  },
  {
    "url": "cpp/setting.html",
    "revision": "a84f4e2fdf1c2908cc807be36cc738e0"
  },
  {
    "url": "example.html",
    "revision": "ce2a8d5242f8fccf714d4a82a13e6773"
  },
  {
    "url": "firstDiscordBot.html",
    "revision": "c47bbef6010bac346eface9557a548c0"
  },
  {
    "url": "hero.jpg",
    "revision": "4c6a9a8235891032d10da26dac0706fd"
  },
  {
    "url": "index.html",
    "revision": "7abbda23baa33dc25a7415df0a9fefb3"
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
    "revision": "c3a2e4a9e3767178c82d1df6f51080ae"
  },
  {
    "url": "tag/C#/index.html",
    "revision": "74fca2b678a5c6397736150b57f5057a"
  },
  {
    "url": "tag/Cloud Storage/index.html",
    "revision": "db17261ec589760cc0423f94f169d4bb"
  },
  {
    "url": "tag/Cpp/index.html",
    "revision": "81a5b9e2c000e8acfbd21ffab947867c"
  },
  {
    "url": "tag/Discord/index.html",
    "revision": "7f92bbdee701151d213d40a05800e77e"
  },
  {
    "url": "tag/File/index.html",
    "revision": "16ed2bf809084261b56257e38623ac29"
  },
  {
    "url": "tag/index.html",
    "revision": "371b9e93563e2d0086cb950bf29c89e6"
  },
  {
    "url": "tag/Microsoft/index.html",
    "revision": "03394b60c25e54c99444bd13bc077112"
  },
  {
    "url": "tag/Properties/index.html",
    "revision": "d4cb80161c417682a1ba75fda96ca4b7"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "ea63550049fcf3fe928cf697b1884a1b"
  },
  {
    "url": "tag/Website/index.html",
    "revision": "40e9244c3b0ddbdc5c8168624cef4bc3"
  },
  {
    "url": "tag/Windows/index.html",
    "revision": "041a0532dde948b107292bf7b246fd3b"
  },
  {
    "url": "timeline/index.html",
    "revision": "dce72ea031c7e7529e9f2e086223ca65"
  },
  {
    "url": "usingOneDrive.html",
    "revision": "3801afefc495ddfa1ae2598213606a8e"
  },
  {
    "url": "windowsBetterLook.html",
    "revision": "87de0e39eba714ce15fce2952dd305d8"
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
