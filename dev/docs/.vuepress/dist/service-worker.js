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
    "revision": "b58d58d59d38239963ade1994153960a"
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
    "url": "assets/js/14.73af5987.js",
    "revision": "b06bfb3c1a96b6e0cbe30924ed24e9f5"
  },
  {
    "url": "assets/js/15.59dfed6b.js",
    "revision": "9bd127a44bf8f02781899076a966fd72"
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
    "url": "assets/js/app.55ac2726.js",
    "revision": "01d4fa6d620c5aa4f4aad30e7e03d6dc"
  },
  {
    "url": "categories/Cpp 教學/index.html",
    "revision": "455120bcc082eeff7b770a79e49a5fd7"
  },
  {
    "url": "categories/CSharp 元件屬性/index.html",
    "revision": "eff787cd6ed598deba616a691726e1eb"
  },
  {
    "url": "categories/Discord 機器人/index.html",
    "revision": "cf91eed59b9f6d37c08dee8f4ad575d4"
  },
  {
    "url": "categories/index.html",
    "revision": "7e3fc2e7f43a2f0cdcc480afd0bccabb"
  },
  {
    "url": "categories/Windows 作業系統研究/index.html",
    "revision": "6097c417109ad86a19666cd7cbc09b1e"
  },
  {
    "url": "categories/個人部落格/index.html",
    "revision": "98acfe02f93d9de4df1167a7035421ad"
  },
  {
    "url": "Cpp/helloWorld.html",
    "revision": "a11a725b1abbdc7d3f81ff2fc5181430"
  },
  {
    "url": "Cpp/setting.html",
    "revision": "47fad61073f132ff1c77db5bfeadb13b"
  },
  {
    "url": "csharp/AllowDrop.html",
    "revision": "800b25895845c515ceaa973fd32f6c69"
  },
  {
    "url": "discord/firstDiscordBot.html",
    "revision": "121f8c094b66384a61e2d0f2ab2de7d7"
  },
  {
    "url": "example.html",
    "revision": "462c3bbfed67e5713b3f97f9c69d7467"
  },
  {
    "url": "images.jpg",
    "revision": "f7ff51d3a538576da7e0e792ac0c49a8"
  },
  {
    "url": "index.html",
    "revision": "22d81e8ca06a8d59ed8d5726dcc0951e"
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
    "revision": "b58d58d59d38239963ade1994153960a"
  },
  {
    "url": "tag/Cloud Storage/index.html",
    "revision": "8abd3ed4edda7334ebb71f392a2c7ec7"
  },
  {
    "url": "tag/Cpp/index.html",
    "revision": "475d1fe40c59c8ed290b8f4051e42dc2"
  },
  {
    "url": "tag/Discord/index.html",
    "revision": "5309419a15e760e3f3c2d0c2ad0ea9bb"
  },
  {
    "url": "tag/File/index.html",
    "revision": "d54540919ce268c19f11044bfafb0bd7"
  },
  {
    "url": "tag/index.html",
    "revision": "c539b347b49d531ef10160501a54c967"
  },
  {
    "url": "tag/Microsoft/index.html",
    "revision": "2c9a1b505dfbc099ee7baa54db3d1ef5"
  },
  {
    "url": "tag/Properties/index.html",
    "revision": "fcd5057673a8612f19dd3128f75a8b8f"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "892243190ee371b00d9d64d7f9027e50"
  },
  {
    "url": "tag/Website/index.html",
    "revision": "3001e9c48a5e91a699e137061893ded4"
  },
  {
    "url": "tag/Windows/index.html",
    "revision": "2ebd8bc04a4d9255745d8cddd9dffb8f"
  },
  {
    "url": "timeline/index.html",
    "revision": "61c0e7066816b9a78018a095b5e33a8b"
  },
  {
    "url": "website/personalBlog.html",
    "revision": "1dc31137b1a698e13b93bc5e627d0d0b"
  },
  {
    "url": "windows/usingOneDrive.html",
    "revision": "3aab4bd9ba32d17a7b3488eab1627d44"
  },
  {
    "url": "windows/windowsBetterLook.html",
    "revision": "682fbe89731926e72714ec34a924ad2e"
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
