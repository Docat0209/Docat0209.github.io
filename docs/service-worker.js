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
    "revision": "708491a1eb41893ddda2c9eeb4608d47"
  },
  {
    "url": "AllowDrop.html",
    "revision": "a2b5a6f3ca3105228d8d70fcc534aa19"
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
    "url": "assets/js/13.28f69f48.js",
    "revision": "08a6d302feac0970d13f1abebde602d5"
  },
  {
    "url": "assets/js/14.dd57e6eb.js",
    "revision": "773f43e0a98260e124eeb9ef93a29490"
  },
  {
    "url": "assets/js/15.78ddbed0.js",
    "revision": "2b222e89546dac744793162a44ea8450"
  },
  {
    "url": "assets/js/16.2b1f28f9.js",
    "revision": "72b4789b65e2c88dad9e9737fc0508b3"
  },
  {
    "url": "assets/js/17.d1f20b88.js",
    "revision": "a37b3447daa14501a09845b62fc2dffa"
  },
  {
    "url": "assets/js/18.30ff17a4.js",
    "revision": "f7bf68400e40223d33ecc1e36525c8cc"
  },
  {
    "url": "assets/js/19.ad313d92.js",
    "revision": "0d613c6ec4fb8feeecb87ccacfd700d2"
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
    "url": "assets/js/app.e1d0bf2a.js",
    "revision": "f27d07191ef93c9d43f29d59d4b1715f"
  },
  {
    "url": "categories/C# Control Properties/index.html",
    "revision": "c046a1cdfa678d6dc68c166fc5797526"
  },
  {
    "url": "categories/Cpp 教學/index.html",
    "revision": "b3afba97d3d9980594ca6618fcd1930f"
  },
  {
    "url": "categories/Discord 機器人/index.html",
    "revision": "83b5d274cc2953b3c8f68a8216c46e16"
  },
  {
    "url": "categories/index.html",
    "revision": "5200388c44c08008e9391524fcce6b1b"
  },
  {
    "url": "categories/Windows 作業系統研究/index.html",
    "revision": "489bda38741d5a73e6e92f19bf8172e6"
  },
  {
    "url": "categories/個人部落格/index.html",
    "revision": "6eca2a201cbe4ffa5ad639b5c4d1c70f"
  },
  {
    "url": "cpp/helloWorld.html",
    "revision": "ba1c198b7d5416d6d360a6ae855b30c9"
  },
  {
    "url": "cpp/index.html",
    "revision": "48a7a0b49ad4ad15a3f8815a7d6cba7d"
  },
  {
    "url": "cpp/setting.html",
    "revision": "a39801f73f2f7f3df574187a9df83572"
  },
  {
    "url": "example.html",
    "revision": "ebe61bd60b7b6b5cb234624cf9a6875c"
  },
  {
    "url": "firstDiscordBot.html",
    "revision": "1ce37d6b40eb5ad256bbecc56adf3d76"
  },
  {
    "url": "hero.jpg",
    "revision": "4c6a9a8235891032d10da26dac0706fd"
  },
  {
    "url": "index.html",
    "revision": "68efc85cf74cb99d50dc3867652aae09"
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
    "revision": "2b434ec5f0a10803620fb6c2a63eb414"
  },
  {
    "url": "tag/C#/index.html",
    "revision": "7ba1291b37cd9e4d230e5f48afd3d0ed"
  },
  {
    "url": "tag/Cloud Storage/index.html",
    "revision": "9458b2d3ea01989648b8ceb53e507719"
  },
  {
    "url": "tag/Cpp/index.html",
    "revision": "b8003b99093296bb91d398d7311f3dfb"
  },
  {
    "url": "tag/Discord/index.html",
    "revision": "0073a344fe6c32fa65a3a9f0ddfa4edd"
  },
  {
    "url": "tag/File/index.html",
    "revision": "45dc1a2d80ac9c3297c7aa6f37fc2493"
  },
  {
    "url": "tag/index.html",
    "revision": "1e50d6192c0eca8473e3513355323f49"
  },
  {
    "url": "tag/Microsoft/index.html",
    "revision": "48c5052dcb481c503d069b00d9f988ba"
  },
  {
    "url": "tag/Properties/index.html",
    "revision": "419cb660fef224dfe7742904c6fb681f"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "5aaa0fe9157c44d8568c21674b3c0a48"
  },
  {
    "url": "tag/Website/index.html",
    "revision": "6ace06e7c6e05063f8fa8213698f09ce"
  },
  {
    "url": "tag/Windows/index.html",
    "revision": "55fd5e34e1358c530727407fb1ca5656"
  },
  {
    "url": "timeline/index.html",
    "revision": "115c1b05cdd72de41131a0533a4dc156"
  },
  {
    "url": "usingOneDrive.html",
    "revision": "b4c1623190445f613e88205c808a4cb5"
  },
  {
    "url": "windowsBetterLook.html",
    "revision": "bfee0aba970007ea17d1fce3547b06f8"
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
