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
    "revision": "bdd79072708118a0a8b0e8142ab6c609"
  },
  {
    "url": "AllowDrop.html",
    "revision": "43b06ed80d761c3f38dd485729ab0a4f"
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
    "url": "assets/js/11.7641491e.js",
    "revision": "2e11fd2703a4663e51383cedf98b211a"
  },
  {
    "url": "assets/js/12.28a3bf22.js",
    "revision": "1c3899c048b62682de7b362b28dffcbf"
  },
  {
    "url": "assets/js/13.4e38a7bb.js",
    "revision": "0874fcee324e57cb89140329a95f42a3"
  },
  {
    "url": "assets/js/14.9b512fc8.js",
    "revision": "f26e8aff2cffe5dbe5b0716dca2e3976"
  },
  {
    "url": "assets/js/15.59dfed6b.js",
    "revision": "9bd127a44bf8f02781899076a966fd72"
  },
  {
    "url": "assets/js/16.f8b227c3.js",
    "revision": "56f3602758746eddd3740393de3ff4fa"
  },
  {
    "url": "assets/js/17.d8625d8c.js",
    "revision": "1cf650b51c25bb56cde63f06d9ec1bed"
  },
  {
    "url": "assets/js/18.e46ebe8b.js",
    "revision": "d4f1f83d62588b5e1744216e792f05d3"
  },
  {
    "url": "assets/js/19.bb617581.js",
    "revision": "547eb31457190ee7fd7d6202291e05d8"
  },
  {
    "url": "assets/js/20.3c726ae3.js",
    "revision": "1b72c9dfb225c9cdd9ff9e4491c9bbc6"
  },
  {
    "url": "assets/js/21.4ef0762f.js",
    "revision": "22ce33e0900cd63fa61c338953369c27"
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
    "url": "assets/js/9.56db311b.js",
    "revision": "ea78fe36cf37d5b8e6337e6812866efc"
  },
  {
    "url": "assets/js/app.94d437cb.js",
    "revision": "85838b6f7324582425a045893cb13bc3"
  },
  {
    "url": "categories/C# Control Properties/index.html",
    "revision": "88974b2e3eab41c82e8cf8022a27410d"
  },
  {
    "url": "categories/Cpp 教學/index.html",
    "revision": "dc19110555c1f2cb717aa6fdcba3e99a"
  },
  {
    "url": "categories/Discord 機器人/index.html",
    "revision": "0355cc0f1f30b7bbb2fa2d384825dc6e"
  },
  {
    "url": "categories/index.html",
    "revision": "7086c03be2263f0fcbcabe83b098b70e"
  },
  {
    "url": "categories/Windows 作業系統研究/index.html",
    "revision": "9e13fecbba8de0d6a2c2ea29a9b0d032"
  },
  {
    "url": "categories/個人部落格/index.html",
    "revision": "8b11b316381b220c8c2c34f427b78b91"
  },
  {
    "url": "cpp/helloWorld.html",
    "revision": "7579d53b358554d3bc240a0c56db8d3e"
  },
  {
    "url": "cpp/index.html",
    "revision": "d34c31cf522a60495aa4a8c0dbb8fc54"
  },
  {
    "url": "cpp/setting.html",
    "revision": "07c272e2a2ea48f97928862d18e7193d"
  },
  {
    "url": "example.html",
    "revision": "28c3819ca90a34d036ef7ff5a0bf7956"
  },
  {
    "url": "firstDiscordBot.html",
    "revision": "0a916fa7a570e87e200e46e5971c4684"
  },
  {
    "url": "hero.jpg",
    "revision": "4c6a9a8235891032d10da26dac0706fd"
  },
  {
    "url": "index.html",
    "revision": "47042c69c2bf60331b4875f8d406d3f2"
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
    "revision": "65dc9c6e52923176b5e695c09e1c7f8e"
  },
  {
    "url": "tag/C#/index.html",
    "revision": "6bfebf88d3211291c1a7863bef9f688a"
  },
  {
    "url": "tag/Cloud Storage/index.html",
    "revision": "24884ae4dfcded3e52b7a3ef2ddc5cc4"
  },
  {
    "url": "tag/Cpp/index.html",
    "revision": "d533d203ec634ce358cf4eac7dbf869f"
  },
  {
    "url": "tag/Discord/index.html",
    "revision": "d2e5777cc9e1ddb96271882e307782f7"
  },
  {
    "url": "tag/File/index.html",
    "revision": "f4972eed8710aa6555c0f7044de339e1"
  },
  {
    "url": "tag/index.html",
    "revision": "088de11df0d9cd4e28329e63fd09e478"
  },
  {
    "url": "tag/Microsoft/index.html",
    "revision": "4b37fa7df4db3a0905d16114ce257a96"
  },
  {
    "url": "tag/Properties/index.html",
    "revision": "ba95390805969cfe3ee90af076bb9463"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "4057f23ff42ecb275bb68ee998cbab41"
  },
  {
    "url": "tag/Website/index.html",
    "revision": "062b70c968410805f69cab4b5ace1f1b"
  },
  {
    "url": "tag/Windows/index.html",
    "revision": "f2d6330494b5e990010f70ca277f2301"
  },
  {
    "url": "timeline/index.html",
    "revision": "41577028cd0af27bffb602f33d003519"
  },
  {
    "url": "usingOneDrive.html",
    "revision": "40ed77226688d2eaf3ece4e28503ea56"
  },
  {
    "url": "windowsBetterLook.html",
    "revision": "3e6b0832ec52833b1f06530cac6b2ad5"
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
