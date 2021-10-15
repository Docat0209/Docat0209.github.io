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
    "revision": "5dcc44358a5fd6995a7d0d659064b15b"
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
    "url": "assets/js/18.689115f2.js",
    "revision": "d4f1f83d62588b5e1744216e792f05d3"
  },
  {
    "url": "assets/js/19.7f51e2d5.js",
    "revision": "729c92d9bc02317bc74f5d65477a34d7"
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
    "url": "assets/js/app.441e99d5.js",
    "revision": "92862bc3cb9ec776e57d784d82d10995"
  },
  {
    "url": "categories/Cpp 教學/index.html",
    "revision": "1cde14a78e99707a5b4b504d161c6d43"
  },
  {
    "url": "categories/CSharp 元件屬性/index.html",
    "revision": "2f8a17042e236137e0dcddc27e2347fc"
  },
  {
    "url": "categories/Discord 機器人/index.html",
    "revision": "852d6b8abff7037f522007fcc45c8bf7"
  },
  {
    "url": "categories/index.html",
    "revision": "b7d96affa37df37b7264b983ea23805b"
  },
  {
    "url": "categories/Windows 作業系統研究/index.html",
    "revision": "610d5abbceee92572be4a916b4357cd2"
  },
  {
    "url": "categories/個人部落格/index.html",
    "revision": "39101bd47eba4006bbfa67077ee2d0d1"
  },
  {
    "url": "cpp/helloWorld.html",
    "revision": "b192e33182c646cf5feb9f475a05b62e"
  },
  {
    "url": "cpp/setting.html",
    "revision": "1e37dcce01e769ac410d2f1b274c6f26"
  },
  {
    "url": "csharp/AllowDrop.html",
    "revision": "f62a0a5e7e04b7b56e4b7a957d480c54"
  },
  {
    "url": "discord/firstDiscordBot.html",
    "revision": "097749f44f395a0ec2c40d87817431aa"
  },
  {
    "url": "example.html",
    "revision": "14d6adb3727d57e332dc9a89322cacc0"
  },
  {
    "url": "hero.jpg",
    "revision": "4c6a9a8235891032d10da26dac0706fd"
  },
  {
    "url": "index.html",
    "revision": "8ba70552c2f77580c44e6672619aa89f"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "892e3fa3d114a9377ab16098ec050c8c"
  },
  {
    "url": "js/setting.js",
    "revision": "caddb0b6361490b1fb95d757c4eadcbb"
  },
  {
    "url": "page.png",
    "revision": "7e6372bfa176e4475de86be57f1f5dcd"
  },
  {
    "url": "tag/C#/index.html",
    "revision": "fb4574f0e16c7a577020c668e8b529b6"
  },
  {
    "url": "tag/Cloud Storage/index.html",
    "revision": "9c039aec6a1dbf860950ac24cdf4cd96"
  },
  {
    "url": "tag/Cpp/index.html",
    "revision": "f01402ee2782b868b093dfb3399e0bda"
  },
  {
    "url": "tag/Discord/index.html",
    "revision": "0fbd8ab688b14115a75c54d7c5fc3857"
  },
  {
    "url": "tag/File/index.html",
    "revision": "2d71faf3866c0d58caa18642fcec019d"
  },
  {
    "url": "tag/index.html",
    "revision": "2a0d21705d4b7b0b91b478ba31069e44"
  },
  {
    "url": "tag/Microsoft/index.html",
    "revision": "ffa2ea8b8e601f253f65d5c354f5a013"
  },
  {
    "url": "tag/Properties/index.html",
    "revision": "3cd7d992c0f41cf5ca2798a34dff7955"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "6d0eb8c0921a292592fa9560294fd98a"
  },
  {
    "url": "tag/Website/index.html",
    "revision": "ac5b6ca4c8b21d055578c200f1b159cf"
  },
  {
    "url": "tag/Windows/index.html",
    "revision": "cb30e3f75058d7ff38cdddc5db759251"
  },
  {
    "url": "timeline/index.html",
    "revision": "373ae09a6b4096a47f59e2c16fa80617"
  },
  {
    "url": "website/personalBlog.html",
    "revision": "0460ec416ef253d0aad613d60d4d51b3"
  },
  {
    "url": "windows/usingOneDrive.html",
    "revision": "920b75b6e38a7728fcd4773a66d06abf"
  },
  {
    "url": "windows/windowsBetterLook.html",
    "revision": "fa5bd1ccdef070270fe0f40219234c13"
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
