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
    "revision": "12faaee985c67f0237674618194abe16"
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
    "url": "assets/js/16.be1a0505.js",
    "revision": "98e6be0ca6e7345579b272298171807f"
  },
  {
    "url": "assets/js/17.26e12584.js",
    "revision": "6b8adf7d586fed940895407076ee7a18"
  },
  {
    "url": "assets/js/18.aa33c054.js",
    "revision": "8dddb81bdb0e10dd4de3dc3fc8c0a129"
  },
  {
    "url": "assets/js/19.4c46484a.js",
    "revision": "c2c6b7af022d0653a6f927260282ba38"
  },
  {
    "url": "assets/js/2.89c914a8.js",
    "revision": "8e04481558f68409ffb5a2dac4272cba"
  },
  {
    "url": "assets/js/20.fa54d951.js",
    "revision": "1b72c9dfb225c9cdd9ff9e4491c9bbc6"
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
    "url": "assets/js/app.17ff54a9.js",
    "revision": "08726965953b70eeb3b09923ca071ad8"
  },
  {
    "url": "categories/Cpp 教學/index.html",
    "revision": "aa49e2da53ced0efc877b6615bb6c6d9"
  },
  {
    "url": "categories/CSharp 元件屬性/index.html",
    "revision": "1f2b125cfa09770e42bd7949c102c944"
  },
  {
    "url": "categories/Discord 機器人/index.html",
    "revision": "a8c59eb592a8da019ef2fb2e0e06b658"
  },
  {
    "url": "categories/index.html",
    "revision": "a4bb22e30f2bc82fcf64520235bb3614"
  },
  {
    "url": "categories/Windows 作業系統研究/index.html",
    "revision": "0532d868581ad62907527117eede3440"
  },
  {
    "url": "categories/個人部落格/index.html",
    "revision": "1ca1da7b1aea00d015ae2ae8fb54fcb1"
  },
  {
    "url": "cpp/helloWorld.html",
    "revision": "667cf605b099b4119c8775219710c15f"
  },
  {
    "url": "cpp/setting.html",
    "revision": "884c77e3b0501c294b3f9267aee1f1f4"
  },
  {
    "url": "csharp/AllowDrop.html",
    "revision": "3b0c22dcdf1a32fcd8ee3fdcf971ccca"
  },
  {
    "url": "discord/firstDiscordBot.html",
    "revision": "f655888bad6c805303aa4be310215d48"
  },
  {
    "url": "example.html",
    "revision": "de90e077370eeef814e8efab3c58a1ed"
  },
  {
    "url": "hero.jpg",
    "revision": "4c6a9a8235891032d10da26dac0706fd"
  },
  {
    "url": "index.html",
    "revision": "f6c4834b91c61773ba87835afb73325f"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "892e3fa3d114a9377ab16098ec050c8c"
  },
  {
    "url": "page.png",
    "revision": "7e6372bfa176e4475de86be57f1f5dcd"
  },
  {
    "url": "tag/C#/index.html",
    "revision": "12faaee985c67f0237674618194abe16"
  },
  {
    "url": "tag/Cloud Storage/index.html",
    "revision": "62110928fc43c47b7cf227b8a5fb8eb1"
  },
  {
    "url": "tag/Cpp/index.html",
    "revision": "70e7c5cd4edff7ad3dcdc392c0a217d7"
  },
  {
    "url": "tag/Discord/index.html",
    "revision": "ff4ec341e5925d7777cd707a3f18caa2"
  },
  {
    "url": "tag/File/index.html",
    "revision": "a214cbc20ee929e0584aa7736c90e952"
  },
  {
    "url": "tag/index.html",
    "revision": "54ac6761b9a9cc461afd1d316058bf55"
  },
  {
    "url": "tag/Microsoft/index.html",
    "revision": "ae59ad89d7d83e0e11c991391fec78a8"
  },
  {
    "url": "tag/Properties/index.html",
    "revision": "a255e321c6cd354850499f02558e2a52"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "e9d46dbb21ad99e40b19778e47c6adaf"
  },
  {
    "url": "tag/Website/index.html",
    "revision": "d5a46d29323d959fbf5787dff93f9137"
  },
  {
    "url": "tag/Windows/index.html",
    "revision": "519971e47e19fc6315236a0dcfed9122"
  },
  {
    "url": "timeline/index.html",
    "revision": "f881a2b0ccbcbf2077828696efd50f8a"
  },
  {
    "url": "website/personalBlog.html",
    "revision": "55289328c9d59b8c958057244db2a99a"
  },
  {
    "url": "windows/usingOneDrive.html",
    "revision": "0f033da2e92f23d6452eeb70c11918c7"
  },
  {
    "url": "windows/windowsBetterLook.html",
    "revision": "e32e6d3d3b8d6a37447f04ba02154c5f"
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
