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
    "revision": "391760417fbdf1904afa1fccc74432e6"
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
    "url": "assets/js/12.2e3437d9.js",
    "revision": "56785cbed1689de1defbe6fdb5f980a8"
  },
  {
    "url": "assets/js/13.d00ada3a.js",
    "revision": "cef66e8ad3b12c230cf0531450d334bb"
  },
  {
    "url": "assets/js/14.1e6d6f5a.js",
    "revision": "aa3bd5b5b7ae6437c504303d057d2fc5"
  },
  {
    "url": "assets/js/15.97d9729e.js",
    "revision": "e2bb4ee60dcb90420e4397b91e6ca1aa"
  },
  {
    "url": "assets/js/16.8c7d3402.js",
    "revision": "ebaa0f0cdaa777a90c27ef7cc907392c"
  },
  {
    "url": "assets/js/17.9bdeb502.js",
    "revision": "c6ee0802af13b4deb7c95ddbb11439ea"
  },
  {
    "url": "assets/js/18.aa33c054.js",
    "revision": "8dddb81bdb0e10dd4de3dc3fc8c0a129"
  },
  {
    "url": "assets/js/19.d31d7511.js",
    "revision": "87fc6d1e5089ba4d292213b25a22327e"
  },
  {
    "url": "assets/js/2.89c914a8.js",
    "revision": "8e04481558f68409ffb5a2dac4272cba"
  },
  {
    "url": "assets/js/20.8811e873.js",
    "revision": "875ade3ec3a963d32bbc9306a0f8b3a6"
  },
  {
    "url": "assets/js/21.4ef0762f.js",
    "revision": "22ce33e0900cd63fa61c338953369c27"
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
    "url": "assets/js/9.68f192a7.js",
    "revision": "8603eae4bfb46b5625ca97d4b3b06cf6"
  },
  {
    "url": "assets/js/app.24d8d397.js",
    "revision": "78fd2f9dcf9218214ba728a237eb5dfc"
  },
  {
    "url": "categories/Cpp 教學/index.html",
    "revision": "c6faa0d50c6153a1bc2a54d1fe5da835"
  },
  {
    "url": "categories/CSharp 元件屬性/index.html",
    "revision": "1b1b28d6362f4acde1cf38d726a7a4bc"
  },
  {
    "url": "categories/Discord 機器人/index.html",
    "revision": "88f4ebca50998b9a73b2a254d279bbd2"
  },
  {
    "url": "categories/index.html",
    "revision": "4fcd9e7dcb435e88f905398b1495dadc"
  },
  {
    "url": "categories/Windows 作業系統研究/index.html",
    "revision": "adf17865dfe87f982b9c6dbc0cdff968"
  },
  {
    "url": "categories/個人部落格/index.html",
    "revision": "e9b50d6969036e1a3d4e45d9c68fd31f"
  },
  {
    "url": "cpp/helloWorld.html",
    "revision": "86d9ba9b8557825c74c00f745a8fe596"
  },
  {
    "url": "cpp/setting.html",
    "revision": "b366092e7dfd3a70e0b3834119f1f318"
  },
  {
    "url": "csharp/AllowDrop.html",
    "revision": "2a063aa78097ab848e79620e598ce891"
  },
  {
    "url": "discord/firstDiscordBot.html",
    "revision": "5acde46b6a466c5b529e4a30005570e9"
  },
  {
    "url": "example.html",
    "revision": "ba8256a5595b874d40df4a9264cef518"
  },
  {
    "url": "hero.jpg",
    "revision": "4c6a9a8235891032d10da26dac0706fd"
  },
  {
    "url": "index.html",
    "revision": "37a01ab159078ffe1a44475ee6916201"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "45000dbf83d9ff2a0eb627d3d5953c7c"
  },
  {
    "url": "page.png",
    "revision": "7e6372bfa176e4475de86be57f1f5dcd"
  },
  {
    "url": "tag/C#/index.html",
    "revision": "dcfa1d994225c76432836ce0c81150a6"
  },
  {
    "url": "tag/Cloud Storage/index.html",
    "revision": "e24a35b1865a3b0ebb8dfa41dae08e6a"
  },
  {
    "url": "tag/Cpp/index.html",
    "revision": "c6c4c5a76d68df4a1b4beaf3b0368521"
  },
  {
    "url": "tag/Discord/index.html",
    "revision": "ea2e4952b5144cea884011634dc2721e"
  },
  {
    "url": "tag/File/index.html",
    "revision": "9986db987525be7f134aa8938a9ee415"
  },
  {
    "url": "tag/index.html",
    "revision": "029f6bcecb287ec7fbf478a5c4987ad1"
  },
  {
    "url": "tag/Microsoft/index.html",
    "revision": "f9b03f6b43d06dcfe6825984428e80f6"
  },
  {
    "url": "tag/Properties/index.html",
    "revision": "34e5362b8cf3b338fb95f9d827f0d4d6"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "b88a7753c250539eee02f1f4f2bfe60a"
  },
  {
    "url": "tag/Website/index.html",
    "revision": "7fd93f828edf5de6f0c096a79a9ab4a8"
  },
  {
    "url": "tag/Windows/index.html",
    "revision": "c142e3e346870a499444d80636e04d27"
  },
  {
    "url": "timeline/index.html",
    "revision": "e8607e534851829c2710dab1cdb6b171"
  },
  {
    "url": "website/personalBlog.html",
    "revision": "6249432a52b502c06682fccfcf8e3fa5"
  },
  {
    "url": "windows/usingOneDrive.html",
    "revision": "07630447fbc2ffa77675e9ac3853582c"
  },
  {
    "url": "windows/windowsBetterLook.html",
    "revision": "e96d49d35d47771813738e490a5f7c7f"
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
