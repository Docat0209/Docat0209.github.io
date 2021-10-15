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
    "revision": "5ccbba5e87039c2e127d6acb3a4646cd"
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
    "url": "assets/js/11.5600d954.js",
    "revision": "54c7e21a83b53c77b27e3b9186ebda9b"
  },
  {
    "url": "assets/js/12.ef0bbeef.js",
    "revision": "7d3d0b1c50cefaa8d8cdbde8ccdd2230"
  },
  {
    "url": "assets/js/13.2ff57abb.js",
    "revision": "ced3cc604e14537a9bd09d309471c398"
  },
  {
    "url": "assets/js/14.a1957764.js",
    "revision": "e9b5f8addbf727bf91e7f7f720c4d423"
  },
  {
    "url": "assets/js/15.bbdc1e35.js",
    "revision": "05302e1c2002dd444cf6d47e875a0e06"
  },
  {
    "url": "assets/js/16.424b7a09.js",
    "revision": "f6d8a001c28676951f420b8b28f742de"
  },
  {
    "url": "assets/js/17.5bdfdfe2.js",
    "revision": "15ca3bfd15ae4d74656540104befba2b"
  },
  {
    "url": "assets/js/18.97a1f576.js",
    "revision": "6ec6a232fb0d8e1a7795d42c685339ff"
  },
  {
    "url": "assets/js/19.20f11386.js",
    "revision": "8291e4ed93494019a94086ba5a62585d"
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
    "url": "assets/js/app.346e56d6.js",
    "revision": "a17fd01631343b0fd1326cd7313bc394"
  },
  {
    "url": "categories/Cpp 教學/index.html",
    "revision": "f40a7ab28cd784ccf393fd0d803773c1"
  },
  {
    "url": "categories/CSharp 元件屬性/index.html",
    "revision": "c822acd0c5ce5a45ac9e57e5b7a0b2ae"
  },
  {
    "url": "categories/Discord 機器人/index.html",
    "revision": "3609d8a916b22110aed28d3763aea438"
  },
  {
    "url": "categories/index.html",
    "revision": "3c0e15ba803fca0996a2b067c2faabf8"
  },
  {
    "url": "categories/Windows 作業系統研究/index.html",
    "revision": "592b7b90fd11e324eaeedb867f530d5f"
  },
  {
    "url": "categories/個人部落格/index.html",
    "revision": "4c8b42659043d6664f6d2f82e62b8596"
  },
  {
    "url": "cpp/helloWorld.html",
    "revision": "b3a8ac60680e0dff3ce64dd11d92813c"
  },
  {
    "url": "cpp/setting.html",
    "revision": "e4d3a8f9a2167f05016d1f3571bd1b6d"
  },
  {
    "url": "csharp/AllowDrop.html",
    "revision": "46ae808e101259875d84c9ffaa046767"
  },
  {
    "url": "discord/firstDiscordBot.html",
    "revision": "b46323f53313d970101cb506857745ce"
  },
  {
    "url": "example.html",
    "revision": "a4fb2d4c7bd6eec8eefda0c3e3e2bf7a"
  },
  {
    "url": "hero.jpg",
    "revision": "4c6a9a8235891032d10da26dac0706fd"
  },
  {
    "url": "index.html",
    "revision": "6e220fe5c4359ead4394a879716abd3a"
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
    "revision": "8ff560fef9a8038073d5c9ef9be93476"
  },
  {
    "url": "tag/Cloud Storage/index.html",
    "revision": "481318a69b3c584e841eaa6332fd347f"
  },
  {
    "url": "tag/Cpp/index.html",
    "revision": "5a853157e13c0df5628c5f79b32282bd"
  },
  {
    "url": "tag/Discord/index.html",
    "revision": "2e634fc51157ddde906764dbe5a75587"
  },
  {
    "url": "tag/File/index.html",
    "revision": "4a0c2fbc712e6cc881a0fe8ebbc3e79f"
  },
  {
    "url": "tag/index.html",
    "revision": "53851bd579fdc1d55ddcd24c9af41fde"
  },
  {
    "url": "tag/Microsoft/index.html",
    "revision": "50cc74b373757a248799270c8a3d7770"
  },
  {
    "url": "tag/Properties/index.html",
    "revision": "bad41761d7bfc5f6962bd1f9625f10ac"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "3db9e5b514a578b3fc4d21e4a5189e73"
  },
  {
    "url": "tag/Website/index.html",
    "revision": "1fb9029ce0477d5e2f5335df31d531aa"
  },
  {
    "url": "tag/Windows/index.html",
    "revision": "04c8236c116204bef9f47e7f038b7f3f"
  },
  {
    "url": "timeline/index.html",
    "revision": "87df9dd5fe8e441b78968c09f8ccb979"
  },
  {
    "url": "website/personalBlog.html",
    "revision": "e0c1a072e39ebc78c625e0a0a83407be"
  },
  {
    "url": "windows/usingOneDrive.html",
    "revision": "70552c73e9c74bfc58b10d44f1ed32d9"
  },
  {
    "url": "windows/windowsBetterLook.html",
    "revision": "5cf33c66ae27fa4015c2e3218c1423e8"
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
