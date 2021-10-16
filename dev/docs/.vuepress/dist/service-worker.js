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
    "revision": "8f5d80e521b840af0d6cf2c0d7e23d97"
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
    "url": "assets/js/13.2ff57abb.js",
    "revision": "ced3cc604e14537a9bd09d309471c398"
  },
  {
    "url": "assets/js/14.73af5987.js",
    "revision": "b06bfb3c1a96b6e0cbe30924ed24e9f5"
  },
  {
    "url": "assets/js/15.ed9fd53c.js",
    "revision": "690b73339bc4c6e63f065dbb109da460"
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
    "url": "assets/js/app.ec38e7dd.js",
    "revision": "0929271f96fd3b124cca3966a0762d75"
  },
  {
    "url": "categories/Cpp 教學/index.html",
    "revision": "cc99e6223c933778c802e62a217fcc7e"
  },
  {
    "url": "categories/CSharp 元件屬性/index.html",
    "revision": "ea9da9e684cfe74ab1ccde910c67ac09"
  },
  {
    "url": "categories/Discord 機器人/index.html",
    "revision": "d55a4e21401ee863321b21f109d4b0e9"
  },
  {
    "url": "categories/index.html",
    "revision": "57ec3c68ba3cdcb5e5f8d44a7af9e29d"
  },
  {
    "url": "categories/Windows 作業系統研究/index.html",
    "revision": "a9d6352d5cbe65658f73ed813e9450af"
  },
  {
    "url": "categories/個人部落格/index.html",
    "revision": "82748144f9931b51804e94e27fbdaeb9"
  },
  {
    "url": "cpp/helloWorld.html",
    "revision": "e09530e250cf09a694db6d43e75b1a3f"
  },
  {
    "url": "cpp/setting.html",
    "revision": "be509e279145c619f67048781dad2f7e"
  },
  {
    "url": "csharp/AllowDrop.html",
    "revision": "aee1e51f6615f7bddc8fd4ba1ae26eeb"
  },
  {
    "url": "discord/firstDiscordBot.html",
    "revision": "b3c1e846162161edf4e1f0e8f323d48b"
  },
  {
    "url": "example.html",
    "revision": "c9e29036562b3f9050fac3c1ea5cfda9"
  },
  {
    "url": "images.jpg",
    "revision": "d42854916344e794e8c2b8c86ad0965c"
  },
  {
    "url": "index.html",
    "revision": "72671f630107124495d58e6d11044b02"
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
    "revision": "8f5d80e521b840af0d6cf2c0d7e23d97"
  },
  {
    "url": "tag/Cloud Storage/index.html",
    "revision": "27a0d510bcf2e710e92fddc28bad3da9"
  },
  {
    "url": "tag/Cpp/index.html",
    "revision": "28c15bc4e1b1f73490707d648a4f8583"
  },
  {
    "url": "tag/Discord/index.html",
    "revision": "3187ea6a0df6c7b2d19f4481a4a0298e"
  },
  {
    "url": "tag/File/index.html",
    "revision": "584e8f7e3553d18a430a7b65e8fb5659"
  },
  {
    "url": "tag/index.html",
    "revision": "0c9f5ae31524b1f2bbafcf47a59699ae"
  },
  {
    "url": "tag/Microsoft/index.html",
    "revision": "5b466e650efc4983925bd372216bcea4"
  },
  {
    "url": "tag/Properties/index.html",
    "revision": "7d1ab4a81e075b186d40c54316902d79"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "64174f5ddc62edf06a94d8c08d78025a"
  },
  {
    "url": "tag/Website/index.html",
    "revision": "b38090a351af2423bd9817a742a4ab67"
  },
  {
    "url": "tag/Windows/index.html",
    "revision": "baa2bb3d97e15f1ce0e250e85a1f1eff"
  },
  {
    "url": "timeline/index.html",
    "revision": "738561f54ef5294554b7f4c4470520f2"
  },
  {
    "url": "website/personalBlog.html",
    "revision": "98b06c019e8f25315260ee133300adb6"
  },
  {
    "url": "windows/usingOneDrive.html",
    "revision": "6492ce2d89ecda8369e034b537ba60bb"
  },
  {
    "url": "windows/windowsBetterLook.html",
    "revision": "432e24804e9e4dbe383c5ad21f9cf5bc"
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
