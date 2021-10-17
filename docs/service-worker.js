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
    "revision": "b10ea3ab8259e553bfe89f8b6b2e72b9"
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
    "url": "assets/js/11.61b8fb76.js",
    "revision": "8709d1d65cdf4c4a43ac33440ba27072"
  },
  {
    "url": "assets/js/12.61afdefa.js",
    "revision": "cc4e5fd8fc27ddefa022b996fa3176d9"
  },
  {
    "url": "assets/js/13.2ff57abb.js",
    "revision": "ced3cc604e14537a9bd09d309471c398"
  },
  {
    "url": "assets/js/14.43ed751f.js",
    "revision": "738573f4db66f2fa2f77e7487a138156"
  },
  {
    "url": "assets/js/15.bbdc1e35.js",
    "revision": "05302e1c2002dd444cf6d47e875a0e06"
  },
  {
    "url": "assets/js/16.a4d51998.js",
    "revision": "6a195c4fa109349689b94f9eeecac546"
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
    "url": "assets/js/app.91dadd0b.js",
    "revision": "3768f30cd2c5510d0905a5cba8a49c6d"
  },
  {
    "url": "categories/Cpp 教學/index.html",
    "revision": "4a596d1c034a613a5bcc1b8b17470acc"
  },
  {
    "url": "categories/CSharp 元件屬性/index.html",
    "revision": "a881724874a40d2b54e1889aa3e17a6f"
  },
  {
    "url": "categories/Discord 機器人/index.html",
    "revision": "484a7a26ef6be3a4b9724ae09325aa3a"
  },
  {
    "url": "categories/index.html",
    "revision": "a22130829d488b59b7f2dc4f01ba358a"
  },
  {
    "url": "categories/Windows 作業系統研究/index.html",
    "revision": "33e0f38a56c65fa8b850b003a20babe3"
  },
  {
    "url": "categories/個人部落格/index.html",
    "revision": "ee7ed41ab841f59afb649b9c2eb06e4a"
  },
  {
    "url": "Cpp/helloWorld.html",
    "revision": "ccdb26c7397f0a6557a43f1474416247"
  },
  {
    "url": "Cpp/setting.html",
    "revision": "d7ec20765e5dfa8e76371eab5b7666b7"
  },
  {
    "url": "csharp/AllowDrop.html",
    "revision": "81cf7ecaee8465d95ec4c5fa34d97f77"
  },
  {
    "url": "discord/firstDiscordBot.html",
    "revision": "0df87e43add6e7a2b3370fac1466738b"
  },
  {
    "url": "example.html",
    "revision": "722455adbcfaed47457ff95155944362"
  },
  {
    "url": "images.jpg",
    "revision": "f7ff51d3a538576da7e0e792ac0c49a8"
  },
  {
    "url": "index.html",
    "revision": "d0323440bb4384eabe89ab7518e232c0"
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
    "revision": "97e027cedf6b02654237deddd7c91667"
  },
  {
    "url": "tag/Cloud Storage/index.html",
    "revision": "9243779b54860ee4938c1664ed574998"
  },
  {
    "url": "tag/Cpp/index.html",
    "revision": "ea65c67431b4fed1b7e3302d53c1abe9"
  },
  {
    "url": "tag/Discord/index.html",
    "revision": "86d621a366c67fbe79eec99e15da6d18"
  },
  {
    "url": "tag/File/index.html",
    "revision": "78c9fbd9ac394cd30ccf61b256adfcdc"
  },
  {
    "url": "tag/index.html",
    "revision": "16c4fd62c06528510044c0553235f1e4"
  },
  {
    "url": "tag/Microsoft/index.html",
    "revision": "10a1630c3287b6c8bd4a0788b78669fe"
  },
  {
    "url": "tag/Properties/index.html",
    "revision": "9436a579f00eccf0369d8c53a9e9e76f"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "08dff026bf44b39022910ee042eb11bf"
  },
  {
    "url": "tag/Website/index.html",
    "revision": "c5bc4768f37c11442726b2cec82bfc0f"
  },
  {
    "url": "tag/Windows/index.html",
    "revision": "ff3c101ef6f3ef08162de3505434f47f"
  },
  {
    "url": "timeline/index.html",
    "revision": "de3a43446c3d4212b4f1835066a530b7"
  },
  {
    "url": "website/personalBlog.html",
    "revision": "4ded4a0f804ee3cdf149775b6cf00f9e"
  },
  {
    "url": "windows/usingOneDrive.html",
    "revision": "877cde3241a50c3c71e2363b0137d466"
  },
  {
    "url": "windows/windowsBetterLook.html",
    "revision": "2e409b01369cad4285a5f2827261d066"
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
