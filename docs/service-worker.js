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
    "revision": "44c65b43bfeda8892f8c44af80730ed4"
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
    "url": "assets/js/13.6153d12a.js",
    "revision": "1e87382fc6fdfd4a50ef293949b2c57c"
  },
  {
    "url": "assets/js/14.b5a31769.js",
    "revision": "bd025769319c711076f7032416e1499e"
  },
  {
    "url": "assets/js/15.f4061ab2.js",
    "revision": "38f406eba042a3d0a7215951266961e2"
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
    "url": "assets/js/18.d9998086.js",
    "revision": "22c8dec77cd11fb6f17204e1ca2c158a"
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
    "url": "assets/js/app.912439cb.js",
    "revision": "42f27344261e1da5048f15372052ce76"
  },
  {
    "url": "categories/Cpp 教學/index.html",
    "revision": "2277eb9f0a356e74777116fc6cc7f874"
  },
  {
    "url": "categories/CSharp 元件屬性/index.html",
    "revision": "8a97e28c441d5e0515d5d5a217051cd6"
  },
  {
    "url": "categories/Discord 機器人/index.html",
    "revision": "76c8dd7069c931756d531efa723e38f0"
  },
  {
    "url": "categories/index.html",
    "revision": "5f17313b2cd4c922dfaf5b677f8fefda"
  },
  {
    "url": "categories/Windows 作業系統研究/index.html",
    "revision": "94859256fad7f90b30fb8345e5cc21f3"
  },
  {
    "url": "categories/個人部落格/index.html",
    "revision": "d960b5c75e5458b5288156f33a417717"
  },
  {
    "url": "cpp/helloWorld.html",
    "revision": "f05c469298f65f0b13c6eb917a3d62c0"
  },
  {
    "url": "cpp/setting.html",
    "revision": "42a9a64d54f36a04caace4984b54ac7e"
  },
  {
    "url": "csharp/AllowDrop.html",
    "revision": "54f6cd09d59669ae5d162cb954036307"
  },
  {
    "url": "discord/firstDiscordBot.html",
    "revision": "e95a0e2a296ad4d46e1967658cd03854"
  },
  {
    "url": "example.html",
    "revision": "5245d89564ea0c54209d4e8e0dddb5cb"
  },
  {
    "url": "images.jpg",
    "revision": "f7ff51d3a538576da7e0e792ac0c49a8"
  },
  {
    "url": "index.html",
    "revision": "e6ed5b61c53491f8e22bafcbd8fe3c4b"
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
    "revision": "f3c5f435e2bca3cd8b15c57721396173"
  },
  {
    "url": "tag/Cloud Storage/index.html",
    "revision": "36c666696d2531f04e4d915c3e670812"
  },
  {
    "url": "tag/Cpp/index.html",
    "revision": "6a585a4de41bd01259ffafe534e4ddbb"
  },
  {
    "url": "tag/Discord/index.html",
    "revision": "b5adc66b96b8a19a4f533a6e8f0682ee"
  },
  {
    "url": "tag/File/index.html",
    "revision": "cfed8b41e36a95b911bb8d4677053b26"
  },
  {
    "url": "tag/index.html",
    "revision": "92e44b99bd298d83e3900deb9955fd05"
  },
  {
    "url": "tag/Microsoft/index.html",
    "revision": "4f774531439be309ea653bcb2734f93d"
  },
  {
    "url": "tag/Properties/index.html",
    "revision": "545963f4f06e9783439fe3d0d5599005"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "90f614599be45c05521236f0dc82886c"
  },
  {
    "url": "tag/Website/index.html",
    "revision": "01e8b5d5a4b71e9ee08189d793fe4a2a"
  },
  {
    "url": "tag/Windows/index.html",
    "revision": "39abaa9642939db1b755e0e48c156d2f"
  },
  {
    "url": "timeline/index.html",
    "revision": "cd4da9fc4ee0a55d992997ad2940cef7"
  },
  {
    "url": "website/personalBlog.html",
    "revision": "1d79fa4dd7a7918efc359596f388535f"
  },
  {
    "url": "windows/usingOneDrive.html",
    "revision": "e1addd12b09fec8b4ba1c2bed7187906"
  },
  {
    "url": "windows/windowsBetterLook.html",
    "revision": "0cb9db740a3f4e45b577cf992489a7d3"
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
