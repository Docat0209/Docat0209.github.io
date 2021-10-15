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
    "revision": "c7e887d1166986dc35f0dbf2afd7371a"
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
    "url": "assets/js/12.f0abe51c.js",
    "revision": "d41b65f31bfc7437203b5b6baf826d9e"
  },
  {
    "url": "assets/js/13.bf9261ec.js",
    "revision": "df43d2d7d6ef29df6fade24e8c72292c"
  },
  {
    "url": "assets/js/14.67c76720.js",
    "revision": "edbcea87ee206cbe72c5aa23148c0ef8"
  },
  {
    "url": "assets/js/15.b711a9d0.js",
    "revision": "78a0ffe052b71dcd21517659a6178c36"
  },
  {
    "url": "assets/js/16.cb5a4c31.js",
    "revision": "0a5965276bf11f48764abafd1daef25d"
  },
  {
    "url": "assets/js/17.5682a400.js",
    "revision": "dc02e2ff9c8dcd582eb45a8bf48a7056"
  },
  {
    "url": "assets/js/18.e6b3a1b3.js",
    "revision": "91b17842d6e89253e2108b26eab7431b"
  },
  {
    "url": "assets/js/19.2d53f2df.js",
    "revision": "5f507237f728bbeb9fff49dbff07614a"
  },
  {
    "url": "assets/js/2.0547dd0f.js",
    "revision": "39c760bb237cd30e1e9f377a549ec5dc"
  },
  {
    "url": "assets/js/20.a948b89a.js",
    "revision": "04cd32d27eb43c77adeeb8e632325eba"
  },
  {
    "url": "assets/js/21.bff02295.js",
    "revision": "d24c77b8b48c6737f2091c47bc651d03"
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
    "url": "assets/js/app.cc80938a.js",
    "revision": "1691997d64e46ae6e302995641c45e26"
  },
  {
    "url": "categories/C# Control Properties/index.html",
    "revision": "dbd8cc8f6ee850aaaa51edefe12383cd"
  },
  {
    "url": "categories/Cpp 教學/index.html",
    "revision": "0628dffa066fb7a45716557d65152964"
  },
  {
    "url": "categories/Discord 機器人/index.html",
    "revision": "b5d637d58a7633ba2beb46889d438da2"
  },
  {
    "url": "categories/index.html",
    "revision": "1aae750cee642839451551c90420febc"
  },
  {
    "url": "categories/Windows 作業系統研究/index.html",
    "revision": "f0143952803017815cc78078c6321e55"
  },
  {
    "url": "categories/個人部落格/index.html",
    "revision": "a66f0f2454612d138c2800a7831d8924"
  },
  {
    "url": "Cpp/helloWorld.html",
    "revision": "227614e211b43473118865ba95cb083a"
  },
  {
    "url": "Cpp/setting.html",
    "revision": "dccff522bad393c8c4c6054bb5255126"
  },
  {
    "url": "CSharp/Winform/Control/pannel.html",
    "revision": "0239e53c759d44cdd04494ad33736782"
  },
  {
    "url": "CSharp/Winform/Properties/AllowDrop.html",
    "revision": "ce54c20997c07dcf5a711ecaad8a553c"
  },
  {
    "url": "DiscordBot/firstDiscordBot.html",
    "revision": "90be760de2caef57e1420176b92519d3"
  },
  {
    "url": "example.html",
    "revision": "d29dea0da3d02196a4dd2c668e705d90"
  },
  {
    "url": "hero.jpg",
    "revision": "4c6a9a8235891032d10da26dac0706fd"
  },
  {
    "url": "index.html",
    "revision": "156494f79c7ad7e63c44428b1d7aa903"
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
    "url": "tag/C#/index.html",
    "revision": "bdac4db785edef96086ede11648cf024"
  },
  {
    "url": "tag/Cloud Storage/index.html",
    "revision": "96ca91266174af82e62364c8002a9112"
  },
  {
    "url": "tag/Cpp/index.html",
    "revision": "c821a9779a4370b3c47263fcd05b4d2c"
  },
  {
    "url": "tag/Discord/index.html",
    "revision": "9d8eca05d281b6f93f8206a9526fd4bf"
  },
  {
    "url": "tag/File/index.html",
    "revision": "fa7023454be1568aae80254c29fd5457"
  },
  {
    "url": "tag/index.html",
    "revision": "c0611ece1460b3ea55ae6f028c507534"
  },
  {
    "url": "tag/Microsoft/index.html",
    "revision": "670674ac6625a391c676ecb305a05017"
  },
  {
    "url": "tag/Properties/index.html",
    "revision": "f151e722131ac46394e76e81c11f64cf"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "0674521bfa8a1cd57f3b3ee80c51f410"
  },
  {
    "url": "tag/Website/index.html",
    "revision": "e8530c164d1ba5b032f414206c133bf3"
  },
  {
    "url": "tag/Windows/index.html",
    "revision": "2a252480e03057751f6747675f99db0d"
  },
  {
    "url": "timeline/index.html",
    "revision": "d99115be7030be528fabd66fc18d7cae"
  },
  {
    "url": "Website/personalBlog.html",
    "revision": "2ff72c932e04806a47af473d45d22272"
  },
  {
    "url": "Windows/usingOneDrive.html",
    "revision": "09a57866d69037080e528f94275f26b6"
  },
  {
    "url": "Windows/windowsBetterLook.html",
    "revision": "dc5624613f3a3b936a8d712d8aff5955"
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
