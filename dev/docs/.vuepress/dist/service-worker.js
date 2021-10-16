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
    "revision": "ab4e10d4a4fb0c967fd3a6c2947386da"
  },
  {
    "url": "assets/css/0.styles.b6c57b16.css",
    "revision": "5380d13430b0d534a00818017818c59f"
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
    "url": "assets/js/15.a26194ae.js",
    "revision": "2f0c531ee6af73216f447b6d49e8c9f5"
  },
  {
    "url": "assets/js/16.ac8de5e4.js",
    "revision": "854a688517a141782a902e77cf59d4e6"
  },
  {
    "url": "assets/js/17.9bdeb502.js",
    "revision": "c6ee0802af13b4deb7c95ddbb11439ea"
  },
  {
    "url": "assets/js/18.c00283eb.js",
    "revision": "f4f4c942fe891712901e257815bac799"
  },
  {
    "url": "assets/js/19.17e22de8.js",
    "revision": "a9466aed43dcaf6588894e65e255c604"
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
    "url": "assets/js/app.b82635e8.js",
    "revision": "f7ba9b251aa4533fb5fa03cbe358a3e8"
  },
  {
    "url": "categories/Cpp 教學/index.html",
    "revision": "a3fac5e99cae230032eed19d942f4538"
  },
  {
    "url": "categories/CSharp 元件屬性/index.html",
    "revision": "ba1268b41ca12af079f77b461b1c28b1"
  },
  {
    "url": "categories/Discord 機器人/index.html",
    "revision": "4f7c609375a85df82c625e22ba70a40e"
  },
  {
    "url": "categories/index.html",
    "revision": "5630372b76d2015b505598b8a65e73ff"
  },
  {
    "url": "categories/Windows 作業系統研究/index.html",
    "revision": "c206cd91964048f3ea6a750ae38da2cd"
  },
  {
    "url": "categories/個人部落格/index.html",
    "revision": "fa83892c2bf5b7639d69c422e39881df"
  },
  {
    "url": "cpp/helloWorld.html",
    "revision": "564f46544438b87a99e98f21b3ebf901"
  },
  {
    "url": "cpp/setting.html",
    "revision": "abb39b8e19cabd71a7056fef942bd913"
  },
  {
    "url": "csharp/AllowDrop.html",
    "revision": "6c503ea4c92d774b95ff1f33aa8623d6"
  },
  {
    "url": "discord/firstDiscordBot.html",
    "revision": "6149eb5043aaf62c61af0c95d299b400"
  },
  {
    "url": "example.html",
    "revision": "574ccc311201df80a80b903c6c0029ad"
  },
  {
    "url": "images.jpg",
    "revision": "d42854916344e794e8c2b8c86ad0965c"
  },
  {
    "url": "index.html",
    "revision": "1400fb2a90fbd3c36cee4cf91a0289a2"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "fdd340e934a1338f2f39129d941e80ae"
  },
  {
    "url": "js/setting.js",
    "revision": "edc4a3fe585aeb7bd04591a93b1f5618"
  },
  {
    "url": "page.png",
    "revision": "7e6372bfa176e4475de86be57f1f5dcd"
  },
  {
    "url": "snow.png",
    "revision": "95cc4bdc7a2589715ad781908c2a9979"
  },
  {
    "url": "tag/C#/index.html",
    "revision": "ab4e10d4a4fb0c967fd3a6c2947386da"
  },
  {
    "url": "tag/Cloud Storage/index.html",
    "revision": "819cbc227bcb40a45e289088b23ee7a4"
  },
  {
    "url": "tag/Cpp/index.html",
    "revision": "5217de9b26042db7b0af92c64f65d7ef"
  },
  {
    "url": "tag/Discord/index.html",
    "revision": "5bb3b602256eab83c59fbb8600f2ac71"
  },
  {
    "url": "tag/File/index.html",
    "revision": "187565ece4a539cea13e15ccb987e805"
  },
  {
    "url": "tag/index.html",
    "revision": "11b839228c7902158f8a4b17222ebf0e"
  },
  {
    "url": "tag/Microsoft/index.html",
    "revision": "bde588aa1779de2c532ffa9586bc386e"
  },
  {
    "url": "tag/Properties/index.html",
    "revision": "782dca4edde61465ab0b225a238654f8"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "f6d26f0088806d0ecd81fe7736f93e58"
  },
  {
    "url": "tag/Website/index.html",
    "revision": "45dd7f16c8eb0d082e041e1258923ad4"
  },
  {
    "url": "tag/Windows/index.html",
    "revision": "cf7d550b4631b50b788a6a0c3f9aed3a"
  },
  {
    "url": "timeline/index.html",
    "revision": "d1ea910f478979c70aea97f70955ae4c"
  },
  {
    "url": "website/personalBlog.html",
    "revision": "15c6ebdfa6fae4b0a7640b5367d60ba5"
  },
  {
    "url": "windows/usingOneDrive.html",
    "revision": "87403afa81fb6aa13ce53556c764aded"
  },
  {
    "url": "windows/windowsBetterLook.html",
    "revision": "c4c449185d06ddcccd7c4c5188ab5d7b"
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
