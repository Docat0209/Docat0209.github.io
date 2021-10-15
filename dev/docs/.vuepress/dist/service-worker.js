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
    "revision": "176ba33350c5627f54a00f3aa8476117"
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
    "url": "assets/js/14.120c382a.js",
    "revision": "4ac07ce90df5b42e6f1c084cc020019a"
  },
  {
    "url": "assets/js/15.93387ce4.js",
    "revision": "ddf28c842eaac45b658dbf5bcb634f43"
  },
  {
    "url": "assets/js/16.5cf12258.js",
    "revision": "d28f67cff08efd67431fac429dfcc2a4"
  },
  {
    "url": "assets/js/17.d8625d8c.js",
    "revision": "1cf650b51c25bb56cde63f06d9ec1bed"
  },
  {
    "url": "assets/js/18.3b464f14.js",
    "revision": "7e97f2f0d5bfc1ed590033666ffb2763"
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
    "url": "assets/js/app.ffac462d.js",
    "revision": "1b986321bfc727e025cf0dc546b97369"
  },
  {
    "url": "categories/Cpp 教學/index.html",
    "revision": "b5cf8d0cf80195bc62be4d7a138b4548"
  },
  {
    "url": "categories/CSharp 元件屬性/index.html",
    "revision": "e3635267760796ae2eca429a3d6791e3"
  },
  {
    "url": "categories/Discord 機器人/index.html",
    "revision": "b3619dc7b142ed62dca419ec64f2c363"
  },
  {
    "url": "categories/index.html",
    "revision": "8501315fc076a28ea692729e2bb5c111"
  },
  {
    "url": "categories/Windows 作業系統研究/index.html",
    "revision": "578df67bad15391a3cb9eeefe2a37746"
  },
  {
    "url": "categories/個人部落格/index.html",
    "revision": "a281be1cdc4af8e5d09610c3f501c15f"
  },
  {
    "url": "cpp/helloWorld.html",
    "revision": "d707f43e91942944c69b3accb19e2773"
  },
  {
    "url": "cpp/setting.html",
    "revision": "898d5c27c5ed97c1fafbcb8cc37d3482"
  },
  {
    "url": "csharp/AllowDrop.html",
    "revision": "3d164f1de9fc81785719e4408f0772f8"
  },
  {
    "url": "discord/firstDiscordBot.html",
    "revision": "128065ae144aa02ffdb2586fbcde0943"
  },
  {
    "url": "example.html",
    "revision": "604bfffa59eff4832c7d7f51466d0bd2"
  },
  {
    "url": "hero.jpg",
    "revision": "4c6a9a8235891032d10da26dac0706fd"
  },
  {
    "url": "index.html",
    "revision": "cd90912c3250d2020e2e2daf33a49539"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "b213c91cc0866cdec5c3eadc9968a1cd"
  },
  {
    "url": "js/setting.js",
    "revision": "9e72b1b68fb0b64382f5243b198b7ec6"
  },
  {
    "url": "page.png",
    "revision": "7e6372bfa176e4475de86be57f1f5dcd"
  },
  {
    "url": "tag/C#/index.html",
    "revision": "1e16f04c5eb61bade706e1c1140e8da7"
  },
  {
    "url": "tag/Cloud Storage/index.html",
    "revision": "049f5710d47e9a7a59f90dbe924c03f3"
  },
  {
    "url": "tag/Cpp/index.html",
    "revision": "463debc7680399ea6f990102120b9e23"
  },
  {
    "url": "tag/Discord/index.html",
    "revision": "9e5717249951cfbd586896d7e4d05dfd"
  },
  {
    "url": "tag/File/index.html",
    "revision": "e20b46b3f1b4390f8f0cc8e6314f19e2"
  },
  {
    "url": "tag/index.html",
    "revision": "951c7c863f9e8ff07a4526ae8641c873"
  },
  {
    "url": "tag/Microsoft/index.html",
    "revision": "cce8569dec23f3efcd5a0814d0a95253"
  },
  {
    "url": "tag/Properties/index.html",
    "revision": "f25c0f90b57309b1a876794ff842805b"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "30b1381d12d39fdfd9386479c33b84b8"
  },
  {
    "url": "tag/Website/index.html",
    "revision": "f5ebe16daae45cda3a17cf8f7192b37b"
  },
  {
    "url": "tag/Windows/index.html",
    "revision": "a928ae56073040715769b009e8782b2a"
  },
  {
    "url": "timeline/index.html",
    "revision": "de9741ca473e25c0c322cd86b96ddc63"
  },
  {
    "url": "website/personalBlog.html",
    "revision": "1d820215fe4f1b0647ae62af52686236"
  },
  {
    "url": "windows/usingOneDrive.html",
    "revision": "bbe5afec7cb041e6c40b473fc1fa731c"
  },
  {
    "url": "windows/windowsBetterLook.html",
    "revision": "e0bca76465a459d3af20fc3ede626c35"
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
