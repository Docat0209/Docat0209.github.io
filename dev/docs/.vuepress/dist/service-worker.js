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
    "revision": "21fdfedc5f58883655f8bac88a875364"
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
    "url": "assets/js/12.28a3bf22.js",
    "revision": "1c3899c048b62682de7b362b28dffcbf"
  },
  {
    "url": "assets/js/13.fb00cf36.js",
    "revision": "284a17369963d5c110a8cd08e53a9cab"
  },
  {
    "url": "assets/js/14.584de8f6.js",
    "revision": "f593ecdf60abfaf06ac9b05cc9ccb044"
  },
  {
    "url": "assets/js/15.5d224e1c.js",
    "revision": "da9dc09649c749ad98366efad1207623"
  },
  {
    "url": "assets/js/16.5cf12258.js",
    "revision": "d28f67cff08efd67431fac429dfcc2a4"
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
    "url": "assets/js/19.17e22de8.js",
    "revision": "a9466aed43dcaf6588894e65e255c604"
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
    "url": "assets/js/app.f5872ea9.js",
    "revision": "1781e4c5b39bfc7851f256bfa6bee74d"
  },
  {
    "url": "categories/Cpp 教學/index.html",
    "revision": "dcef34976419e5e6d363cfeaf6e91463"
  },
  {
    "url": "categories/CSharp 元件屬性/index.html",
    "revision": "f08b4d6097751288f120ee14a5a8d088"
  },
  {
    "url": "categories/Discord 機器人/index.html",
    "revision": "6ab1b7eeeaf306fa6d0a9d963854fe06"
  },
  {
    "url": "categories/index.html",
    "revision": "2ed2fad2f78d42c5ec1e2379cc7e4abf"
  },
  {
    "url": "categories/Windows 作業系統研究/index.html",
    "revision": "a91471302e5627048316db82538ea513"
  },
  {
    "url": "categories/個人部落格/index.html",
    "revision": "0dcdd3797551907d051fe36e13bbed60"
  },
  {
    "url": "cpp/helloWorld.html",
    "revision": "1bbeec6ef89361b5a9bd677f4792dc42"
  },
  {
    "url": "cpp/setting.html",
    "revision": "4078c2621bacf5577d052c3220441c08"
  },
  {
    "url": "csharp/AllowDrop.html",
    "revision": "ae66ca45ad1d65d9d6e9702071112d17"
  },
  {
    "url": "discord/firstDiscordBot.html",
    "revision": "da2f0da253eb607e1264f87b38256b8b"
  },
  {
    "url": "example.html",
    "revision": "557046360470350ba8f89973726f9e88"
  },
  {
    "url": "hero.jpg",
    "revision": "4c6a9a8235891032d10da26dac0706fd"
  },
  {
    "url": "index.html",
    "revision": "265708cc296629f0df56f6b589bbe62e"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "9c9eea8c1d0deecb03bc3742a664d3d1"
  },
  {
    "url": "page.png",
    "revision": "7e6372bfa176e4475de86be57f1f5dcd"
  },
  {
    "url": "tag/C#/index.html",
    "revision": "3e24dab17566720228ec0090daf8ce40"
  },
  {
    "url": "tag/Cloud Storage/index.html",
    "revision": "820e57c14272126f4c057acc92c6d26c"
  },
  {
    "url": "tag/Cpp/index.html",
    "revision": "0c3d0e21e23bbfb8579901a0ee1b09f8"
  },
  {
    "url": "tag/Discord/index.html",
    "revision": "27bd5036a521b10ff62308c112d2af1d"
  },
  {
    "url": "tag/File/index.html",
    "revision": "eb4faf02489e696e1fd7ac9fe0a7e828"
  },
  {
    "url": "tag/index.html",
    "revision": "80623591735a385fcb1712c0031887de"
  },
  {
    "url": "tag/Microsoft/index.html",
    "revision": "89fd73a57cc8dd6fcdcfc5da014bf353"
  },
  {
    "url": "tag/Properties/index.html",
    "revision": "d57d49da4d05d8a1ed03aaaa34ce0be6"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "b67570281e35a80c6b714e59c55a8430"
  },
  {
    "url": "tag/Website/index.html",
    "revision": "810ef1f9e2a7c0a6e30b3523e3676e1b"
  },
  {
    "url": "tag/Windows/index.html",
    "revision": "c490be57a4de95a48515b2ce0acf3b01"
  },
  {
    "url": "timeline/index.html",
    "revision": "5501fde750206e479607438b42569839"
  },
  {
    "url": "website/personalBlog.html",
    "revision": "8d9fadd947528e34f06755d6b84e1292"
  },
  {
    "url": "windows/usingOneDrive.html",
    "revision": "2d86d01ce4422502f9f9301d55fea72e"
  },
  {
    "url": "windows/windowsBetterLook.html",
    "revision": "6cd2e87046f1fc6330358d03d3b5ae2b"
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
