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
    "revision": "c79e315b031ed5d7ff2acea808b07bd8"
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
    "url": "assets/js/13.6e8df26c.js",
    "revision": "adb28f28a2479296f54260f76fb123de"
  },
  {
    "url": "assets/js/14.120c382a.js",
    "revision": "4ac07ce90df5b42e6f1c084cc020019a"
  },
  {
    "url": "assets/js/15.a26194ae.js",
    "revision": "2f0c531ee6af73216f447b6d49e8c9f5"
  },
  {
    "url": "assets/js/16.be1a0505.js",
    "revision": "98e6be0ca6e7345579b272298171807f"
  },
  {
    "url": "assets/js/17.0b4ecf6f.js",
    "revision": "72a32382fe72a92085bed06e6eedf2c1"
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
    "url": "assets/js/app.5cd4c210.js",
    "revision": "ff23318b242229f9292fe51e01cf842d"
  },
  {
    "url": "categories/Cpp 教學/index.html",
    "revision": "6c0cf075afa41fd3f45618b06eb9c017"
  },
  {
    "url": "categories/CSharp 元件屬性/index.html",
    "revision": "e622858642031d11d1320b5bcf7d43a2"
  },
  {
    "url": "categories/Discord 機器人/index.html",
    "revision": "b4c3297da8738dd1158604ae0fcc5fc8"
  },
  {
    "url": "categories/index.html",
    "revision": "aa364abadea2de3a4566d8fe1611308b"
  },
  {
    "url": "categories/Windows 作業系統研究/index.html",
    "revision": "8edb10146ed3b6b467661887afa14b01"
  },
  {
    "url": "categories/個人部落格/index.html",
    "revision": "a0261bf5d00c276ba4966ed636f3c94c"
  },
  {
    "url": "cpp/helloWorld.html",
    "revision": "6cc108d66c3dca2e892febd1ea89a382"
  },
  {
    "url": "cpp/setting.html",
    "revision": "4fd3b2326bf3ae79c62824667e484b96"
  },
  {
    "url": "csharp/AllowDrop.html",
    "revision": "aca724a379b121790d2e536623c9d84d"
  },
  {
    "url": "discord/firstDiscordBot.html",
    "revision": "e8851658c7446bdce580e156d7254405"
  },
  {
    "url": "example.html",
    "revision": "8d9095507e7312ca33ab514f01821850"
  },
  {
    "url": "hero.jpg",
    "revision": "4c6a9a8235891032d10da26dac0706fd"
  },
  {
    "url": "images.jpg",
    "revision": "2b97d85e229a700842d93a84a83b305a"
  },
  {
    "url": "index.html",
    "revision": "8d998580c48f712bad91988c1badd245"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "c369da51cb8ee3d77d148d43e1dc40cc"
  },
  {
    "url": "js/setting.js",
    "revision": "e8b0ef9b5de2b76b25bcfb99f80e11d9"
  },
  {
    "url": "page.png",
    "revision": "7e6372bfa176e4475de86be57f1f5dcd"
  },
  {
    "url": "tag/C#/index.html",
    "revision": "4dd8a26456a678041a15fbbc1ce92aa6"
  },
  {
    "url": "tag/Cloud Storage/index.html",
    "revision": "f31bad9925803f99c139e542c912f2a9"
  },
  {
    "url": "tag/Cpp/index.html",
    "revision": "4f460c3418539b44fe575a523145c4f0"
  },
  {
    "url": "tag/Discord/index.html",
    "revision": "40dab7af6813d74332923ca97777a684"
  },
  {
    "url": "tag/File/index.html",
    "revision": "1ba54874748487c911571088ad585f84"
  },
  {
    "url": "tag/index.html",
    "revision": "4068ee923227cc977deedfb911e14169"
  },
  {
    "url": "tag/Microsoft/index.html",
    "revision": "d759a91ecfc516cd7b3a7b729449128c"
  },
  {
    "url": "tag/Properties/index.html",
    "revision": "1eb7a6f5d54b43e03c5399cb288bc959"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "c82bd146f7c72b9b34f523f10c369093"
  },
  {
    "url": "tag/Website/index.html",
    "revision": "b1a20d0e4f7799608c50781992b9d69d"
  },
  {
    "url": "tag/Windows/index.html",
    "revision": "1e3c78715cccde7d451709a5004213c3"
  },
  {
    "url": "timeline/index.html",
    "revision": "59cf8ca93bb6397a472f7f0bc48217a9"
  },
  {
    "url": "website/personalBlog.html",
    "revision": "918b970c021db81ffb81e6bcee1018f8"
  },
  {
    "url": "windows/usingOneDrive.html",
    "revision": "c55b36fa99bb590680ecc8318485d667"
  },
  {
    "url": "windows/windowsBetterLook.html",
    "revision": "02dfec1252f603b548046b087021d7ea"
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
