'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8183aa57a23658efe7ba7aebe60816bc",
".git/config": "76717d5175b35750fb8ca9fb5ce0704f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b75509d7d5b007af280268919401b076",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "101abd45118c468f3513381d8668dddc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "27f65c9898a3fc190c2940af98c48a56",
".git/logs/refs/heads/main": "05871a02aa1e74607aa42846bb935464",
".git/logs/refs/remotes/origin/main": "17075ed28907e540ff6bdfe20feb8867",
".git/objects/0c/8f196d2f13ff7daa8b30bd38e65ecd245582de": "57d0854d37f5cf69e297c01906711755",
".git/objects/0d/3a106846ab86040fbe91fe9bf67257a268fac9": "3daedd5aaf08d5949837b7927faee113",
".git/objects/0e/c2dcab6e67af1ee96952b4683ee4cd0d1a7b16": "008debe989cf9e8e57b6c1fccc1a739a",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/11/1916ecf2bce0e797858d8c01fc56a930383d87": "d342e93c6681d19c3e365ee78e900e27",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1b/644751e1e51b90df751d0fe27185c88d9199df": "d5f105fcc3a40af0c2117979af94f80e",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/6b9cbe7f1a1303c147a7cfa5561e12e22a2954": "d4a6d107186365142bcf65c962ca7ff7",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/2d/af05afc2f61d2b7f24f5929f236dda192b3176": "9e742cf6cdfd3558c7fdb0421ccb085d",
".git/objects/43/ebca834783313ee236d09552960a62d32ad451": "5130f9f38b9e124ebeb8df7b957d6f9b",
".git/objects/45/dc8a20658bd09ecb8ca1c88f94fe80cc4ca286": "3777040b10a836277a4dcd49b2f159fa",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/53/bd13f478b9ac126f740bc0add0f4b299116502": "032518ab96f795df71898f827b22845e",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/61/ee4425723413a3915ea07780e109ee926d2fe9": "5ff951b19eec9b8f992cf13d586f39bf",
".git/objects/62/236fe9fb5b6ee5ae81f379743711feb5f795d8": "d8416d31f1a37650400d951d98cb0e10",
".git/objects/62/87b36843cad24e906b94f28bb3096ae0505dbb": "58dc4e92fc2311addd74929d08c0b271",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/69/742a56ce5539beaf77fcb08baca9dd5f8da282": "1672fb678f03ba13b73280b8029c8e4f",
".git/objects/6a/c4d13d05b2f758efb9a8196da7fc8584097ae9": "c67396bcbe5fe0bf105ebf74baf12d9e",
".git/objects/70/cb1885bbf272e03164fee5d2c9b3fe6cf872f8": "4cb97e367fd9ba0841bad4f64326cb39",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/75/1561687af49e1d8e5d7ba3bd866c8ed20e8a1c": "eab21a9924d93e465b16aa14c4ca3c39",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/da8e63eb56596557fb756b72b3aea51e8813a9": "8bd3d0782c2be77016bcd7fd373f1ae4",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9a/37ad7fc1f5bb16ff6b29ecb7bbd05b3b842f98": "07f7ea3f8b5532f406c10b24a61bb327",
".git/objects/9b/a7f6a0a1778d18002665b906d56a2dab8ada2f": "8de30c4b8a6726dceaa59dd99b76127d",
".git/objects/9f/79a8f4abad94bd0b8aabf07b52e77ef8d5d29b": "147194425435d89d4860994dccc87e5e",
".git/objects/a0/677b3836c5b12a26b212d1f54be10ee30efdd6": "71cf92efc1b486d252d7d39a7830dcd1",
".git/objects/a2/5c59f2b2efbec6b43966ce5b3e1c06916281a8": "f3fd96995daabe62bfae11ac99d62b56",
".git/objects/a9/691351295749b7c08fc5367e2416c5aaa197f6": "01c216986d0c901ffad84a48598b71f9",
".git/objects/b0/7d43ca7eb102dc260a51038790383baae2be15": "1d9d2e898730e01b48258b0ed1f930e3",
".git/objects/b2/e23b183b7d3fadad40192dbd7189adbb87443c": "f194b37141afcc6a731bb03f8332ec20",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cc/6cb56b26d0395f7dc9c632fbb8afeee9a28f44": "e286b56e899ac4b11da67bab888fba65",
".git/objects/d0/719d4a2874e7118afc28809d38b46f72fe26ec": "54a16cf111e7b76e4d9186bbe6d5cc29",
".git/objects/d0/f5fce5cda6f6eff2e70184e9ca2ff7d62660ed": "053268de4445211f0bc84a06de7a8dbf",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/629d8eb29f251ac66e3a74b45ce0e7f982acfe": "3f81eebdae0a389f4b618136d02965a2",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/d9c7c0f4f8d5c2d3356755eae94355ff504ae0": "823a91a4d21fefb36affb215bac8d746",
".git/objects/d5/f8b039721840072368b721646c37efb6f4a3ed": "427c7862dd541c73469fab5a0c91f9fe",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/a4307acc69f9b1b1a4605e401e95a5969feb63": "dbb2c59d251957b0bfc47005db63117e",
".git/objects/da/a4dcfcf7cc35819f0554c60b7c9187f001b345": "a277dd4ee62ff3f28c3dfa5d3459b62a",
".git/objects/e7/fc3bd33ec2fa68b09ea39832d1e1bcd92be1f0": "19d0dacc16a2f1364ab3ff92d3ad1065",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/c09eff45eab23dadc7cb7ff12d06f3fa62550a": "60669e0dcfa872c426ff23d4e85f7c22",
".git/objects/fe/b923193313be2c33af92df86fc627fc96aa89c": "48d3914d107178d5a36ac94eb3d8b760",
".git/ORIG_HEAD": "9bc74ede12227d2d42cb0e32feb1adb8",
".git/refs/heads/main": "08e937bcff5fe9c843086b2ef839da4a",
".git/refs/remotes/origin/main": "08e937bcff5fe9c843086b2ef839da4a",
"android-chrome-192x192.png": "b5c1fa360540d48a63e3e51e5bd3fc51",
"android-chrome-512x512.png": "e8c39170bd4ce2bc4f93431923c98d88",
"apple-touch-icon.png": "28bc8d484def0c8a7c6d6bf0fd4a44cf",
"assets/AssetManifest.bin": "7272ab71ebd7a23685122695afb9eae4",
"assets/AssetManifest.bin.json": "ead6762609fe20565d9dca7f55ce93b6",
"assets/AssetManifest.json": "ffa1fa7305531e4178c9618d94774f1e",
"assets/assets/college_logo.png": "2743764498749e288ca83616c0b117b0",
"assets/assets/mulearn_logo.png": "2c8adae1f5216ecb30ef9794677bcf6e",
"assets/assets/programmer.gif": "5083e0a2a7dcaae07c142e8b87036a27",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "b9d972fa7e3df39b67ec98603157613e",
"assets/NOTICES": "5ca0c29e2e0a780f97311bffafeb91e9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "27282d9cb486fb946550ad9d727eec29",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a3423f83a4cde014239296d34f656d57",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon-16x16.png": "b96f2abcd906164155cd1e7a38d8fd63",
"favicon-32x32.png": "a19059cbdd09789e57743907696fdb42",
"favicon.ico": "5ae03f7d16ae8decd399b85b55f76af3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "6f148b197664b2f5c6aa4f2df05425c2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/mulearn_logo.png": "2c8adae1f5216ecb30ef9794677bcf6e",
"index.html": "4da3b7d1579e3a8ed84b2f563f7ae290",
"/": "4da3b7d1579e3a8ed84b2f563f7ae290",
"main.dart.js": "4fd2213b19e2e5ff7a20a47ae126f01e",
"manifest.json": "fa4666d960068afffbbe5cea38d56f4e",
"README.md": "8f2d46c0831f4706aad6ed0cf67a5815",
"site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"version.json": "bfaa6ddedce465d6f83d58d788f61805"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
