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
    "revision": "0ad662645698b55e15b7e7117e8445e1"
  },
  {
    "url": "assets/css/0.styles.1f214639.css",
    "revision": "d14a3ff664e772c4cdda49443f319c59"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.f864d0da.js",
    "revision": "f8c2e45ce8cf7d37a2e5834c84361ac9"
  },
  {
    "url": "assets/js/10.84b263b1.js",
    "revision": "b18590397111846f2af6c8b98bfa590c"
  },
  {
    "url": "assets/js/11.4eee43fa.js",
    "revision": "8709d1d65cdf4c4a43ac33440ba27072"
  },
  {
    "url": "assets/js/12.07f9c27f.js",
    "revision": "cc4e5fd8fc27ddefa022b996fa3176d9"
  },
  {
    "url": "assets/js/13.6153d12a.js",
    "revision": "1e87382fc6fdfd4a50ef293949b2c57c"
  },
  {
    "url": "assets/js/14.43ed751f.js",
    "revision": "738573f4db66f2fa2f77e7487a138156"
  },
  {
    "url": "assets/js/15.1b9807a1.js",
    "revision": "44ab66e29b8669b64571ecaa30300a00"
  },
  {
    "url": "assets/js/16.a4d51998.js",
    "revision": "6a195c4fa109349689b94f9eeecac546"
  },
  {
    "url": "assets/js/17.4788d811.js",
    "revision": "b535b1b77f065e56c327555458ba1264"
  },
  {
    "url": "assets/js/18.4e90a16f.js",
    "revision": "fb049928870afd838b7d8be34cac09e6"
  },
  {
    "url": "assets/js/19.979cda23.js",
    "revision": "b66fc226ddd37dbe43459c4334926a2e"
  },
  {
    "url": "assets/js/20.71610c22.js",
    "revision": "5e01552e7abb78ccea0212f9d67592fa"
  },
  {
    "url": "assets/js/3.3fd6ad4b.js",
    "revision": "ae800dc7ac146ba7364f048cf7433d56"
  },
  {
    "url": "assets/js/4.21dc3ec8.js",
    "revision": "c0f05e966431db26d9b921b5a476c633"
  },
  {
    "url": "assets/js/5.a237b9f5.js",
    "revision": "5209c2035fd5aecc50fa7663ace87bb5"
  },
  {
    "url": "assets/js/6.fe65ccbf.js",
    "revision": "b40518296cae32e7a169f8d48c980e68"
  },
  {
    "url": "assets/js/7.9010dadc.js",
    "revision": "fac7d0ead5bb6c1b9ccdd9d54e4466e0"
  },
  {
    "url": "assets/js/8.9a6640bd.js",
    "revision": "4e2b1b6f0419cda0a59e10ebdf8b91b0"
  },
  {
    "url": "assets/js/9.3de9fb79.js",
    "revision": "d29e6581d6b8b4729e98b6da77428369"
  },
  {
    "url": "assets/js/app.bb11ae33.js",
    "revision": "d676dda6222f15694ff483500c869801"
  },
  {
    "url": "categories/C# Control Properties/index.html",
    "revision": "49ddf82a87f06c2058c725a10a126168"
  },
  {
    "url": "categories/Cpp 教學/index.html",
    "revision": "1a9fd0dccba7a103499a1f4341e14aff"
  },
  {
    "url": "categories/Discord 機器人/index.html",
    "revision": "b2caf6dc46e907888c2510a5b8488597"
  },
  {
    "url": "categories/index.html",
    "revision": "212c82745abf597650c269fc3733cb62"
  },
  {
    "url": "categories/Windows 作業系統研究/index.html",
    "revision": "a06ca7e6fb158aaf001dad10d0e254b9"
  },
  {
    "url": "categories/個人部落格/index.html",
    "revision": "7ad252e0861079e1c7cec7dd41e88470"
  },
  {
    "url": "cpp/helloWorld.html",
    "revision": "dde5cf3fee17a23a2cc464336e8eadbe"
  },
  {
    "url": "cpp/setting.html",
    "revision": "f371bea5b509bb1109d294fda0b60454"
  },
  {
    "url": "csharp/AllowDrop.html",
    "revision": "79fafa7db0914393130826246c2ce274"
  },
  {
    "url": "discord/firstDiscordBot.html",
    "revision": "04cce63e4c7cd78298ba9ef1e7ef9523"
  },
  {
    "url": "example.html",
    "revision": "ad7aa84701e7cf807d598b2a57d389ce"
  },
  {
    "url": "hero.jpg",
    "revision": "4c6a9a8235891032d10da26dac0706fd"
  },
  {
    "url": "index.html",
    "revision": "f286f9b602750480e9a4205fce8cbd1f"
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
    "revision": "624bff5acb590134f42bd6981dd69b25"
  },
  {
    "url": "tag/Cloud Storage/index.html",
    "revision": "8b8d97724b69f99a0f85d4cc587d6cf8"
  },
  {
    "url": "tag/Cpp/index.html",
    "revision": "38a31ddc997fadd31b91187e33c95514"
  },
  {
    "url": "tag/Discord/index.html",
    "revision": "eb2d970733f8e92041848b6e65b0a725"
  },
  {
    "url": "tag/File/index.html",
    "revision": "7d45afe81bd21a65ebb8b6155be8c98f"
  },
  {
    "url": "tag/index.html",
    "revision": "596c84ac7e0ab3d2ab45c4d3c524b2be"
  },
  {
    "url": "tag/Microsoft/index.html",
    "revision": "ab45420bfa583e971a73fce4b37c9f71"
  },
  {
    "url": "tag/Properties/index.html",
    "revision": "aee27a786cbb8d4cc21d67878b916351"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "978ed811ee32cc8bbc6fff128334a9de"
  },
  {
    "url": "tag/Website/index.html",
    "revision": "fdaab8649274f8af27c6dcb6680abebe"
  },
  {
    "url": "tag/Windows/index.html",
    "revision": "fb9c8e718d519f003e7f4ceee8898388"
  },
  {
    "url": "timeline/index.html",
    "revision": "6bbaa7f39d0690bab7aa4f42b4c8a7c1"
  },
  {
    "url": "website/personalBlog.html",
    "revision": "c2965961a9060fd25b54e915a7d89009"
  },
  {
    "url": "windows/usingOneDrive.html",
    "revision": "8e0af406c1b2f04b44ea2fc94c1b0f1b"
  },
  {
    "url": "windows/windowsBetterLook.html",
    "revision": "a6e6b74893850c45798cd15391bb946e"
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
