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
    "revision": "cbea793000e314a375812c1525b06e08"
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
    "url": "assets/js/1.966054d9.js",
    "revision": "f8c2e45ce8cf7d37a2e5834c84361ac9"
  },
  {
    "url": "assets/js/10.84b263b1.js",
    "revision": "b18590397111846f2af6c8b98bfa590c"
  },
  {
    "url": "assets/js/11.1cd68cd1.js",
    "revision": "db3958658942caae6b381e8500d515a1"
  },
  {
    "url": "assets/js/12.6bac1228.js",
    "revision": "e3999834bde7feec3aa6857bfaf8c7ef"
  },
  {
    "url": "assets/js/13.2ff57abb.js",
    "revision": "ced3cc604e14537a9bd09d309471c398"
  },
  {
    "url": "assets/js/14.11c3b3c5.js",
    "revision": "b3b4903013681858224e419b7c802747"
  },
  {
    "url": "assets/js/15.cebaa68f.js",
    "revision": "832697077c5e6ae8e2e982c6b87dd0d6"
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
    "url": "assets/js/3.00060a37.js",
    "revision": "ae800dc7ac146ba7364f048cf7433d56"
  },
  {
    "url": "assets/js/4.531e5c05.js",
    "revision": "c0f05e966431db26d9b921b5a476c633"
  },
  {
    "url": "assets/js/5.fa2fe95d.js",
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
    "url": "assets/js/app.cd20b650.js",
    "revision": "5d2ba7b1af95da7aa7b78c6cca442bbe"
  },
  {
    "url": "categories/Cpp 教學/index.html",
    "revision": "07b09d5f02a215a081c7a55d4e4badf7"
  },
  {
    "url": "categories/CSharp 元件屬性/index.html",
    "revision": "fb0a5f95d092c0bae6436bf82d0c877c"
  },
  {
    "url": "categories/Discord 機器人/index.html",
    "revision": "e37662afb537362d6424cc4640212222"
  },
  {
    "url": "categories/index.html",
    "revision": "5ae8fb2834faa75597f402c612bc75cf"
  },
  {
    "url": "categories/Windows 作業系統研究/index.html",
    "revision": "e45fd15bc0345842316c4e06da3d7acb"
  },
  {
    "url": "categories/個人部落格/index.html",
    "revision": "02acdee246b014c5ce345f5bc07e5eac"
  },
  {
    "url": "Cpp/helloWorld.html",
    "revision": "e4a08fe0be6f4b514095b7ad2557f940"
  },
  {
    "url": "Cpp/setting.html",
    "revision": "8c2fff369325a478d2ca52eebffb71ea"
  },
  {
    "url": "csharp/AllowDrop.html",
    "revision": "050e55f12d5ef1965a80ce885ad2af21"
  },
  {
    "url": "discord/firstDiscordBot.html",
    "revision": "4d72cf406f714d34b70af6f8e30d47c7"
  },
  {
    "url": "example.html",
    "revision": "549fa4ac518b851082273464a5e1b19f"
  },
  {
    "url": "images.jpg",
    "revision": "f7ff51d3a538576da7e0e792ac0c49a8"
  },
  {
    "url": "index.html",
    "revision": "2ccaac5e365ffcfc0deed157ca3b9279"
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
    "revision": "0c9510ada5caff7bd806c40ab8d7dd53"
  },
  {
    "url": "tag/Cloud Storage/index.html",
    "revision": "a3771b29c230e07fc124a96420b89564"
  },
  {
    "url": "tag/Cpp/index.html",
    "revision": "ef2d6f796aeee0dcc4159c6d972e3aa1"
  },
  {
    "url": "tag/Discord/index.html",
    "revision": "c7272d42de4489749e810c8b24cda458"
  },
  {
    "url": "tag/File/index.html",
    "revision": "b0c1c5d2db025e715e188eb22efa91ad"
  },
  {
    "url": "tag/index.html",
    "revision": "252eb901bef531b7cec45eb6e8db3e83"
  },
  {
    "url": "tag/Microsoft/index.html",
    "revision": "cac2f2402e276985a0812db218a4a4b3"
  },
  {
    "url": "tag/Properties/index.html",
    "revision": "2e2c121987d1c6f3e8f8564c99a3279d"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "a5e751129c21afc67efa52584a481786"
  },
  {
    "url": "tag/Website/index.html",
    "revision": "a7a432db5e8ddf5a700c752b6abfac8b"
  },
  {
    "url": "tag/Windows/index.html",
    "revision": "f3cc24e7957090d4e1cf759b09d354cc"
  },
  {
    "url": "timeline/index.html",
    "revision": "ba06c7d7943bf02dbc168c6e80b06c42"
  },
  {
    "url": "website/personalBlog.html",
    "revision": "bfb256958667b7640d3ac9e8b70c953a"
  },
  {
    "url": "windows/usingOneDrive.html",
    "revision": "ef3968fe218c24623d3931e7374bf196"
  },
  {
    "url": "windows/windowsBetterLook.html",
    "revision": "742bb7d7b5b46ec14a43a49d6e02f3c6"
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
