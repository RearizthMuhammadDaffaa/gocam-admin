// // Nama cache dan daftar file yang akan di-cache
// const CACHE_NAME = 'rental-kamera-cache-v1';
// const urlsToCache = [
//   '/',
//   '/index.html',
//   '/src/main.jsx',
//   '/manifest.json',
//   '/public/android-launchericon-192-192.png',
//   'https://fonts.googleapis.com/icon?family=Material+Icons',
//   'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap',
// ];

// // Daftar file yang tidak perlu dicache (API atau resource dinamis)
// const nonCacheableUrls = [
//   '/login',
//   '/transaksi',
//   'https://gocam-api.vercel.app/transaksi'
// ];

// // TTL: 10 detik
// const TTL = 10 * 1000; // 10 detik dalam milidetik

// // Install event: cache resource saat pertama kali Service Worker diinstall
// self.addEventListener('install', (event) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       console.log('Opened cache');
//       return cache.addAll(urlsToCache);
//     })
//   );
// });

// self.addEventListener('fetch', (event) => {
//   const requestUrl = new URL(event.request.url);

//   // Jika URL ada di daftar nonCacheableUrls, ambil langsung dari jaringan (jangan dicache)
//   if (nonCacheableUrls.some((url) => requestUrl.pathname.includes(url))) {
//     return event.respondWith(fetch(event.request));
//   }

//   // Hanya simpan GET request ke cache
//   if (event.request.method !== 'GET') {
//     return event.respondWith(fetch(event.request));
//   }

//   event.respondWith(
//     caches.match(event.request).then((cachedResponse) => {
//       const currentTime = Date.now();

//       // Jika ada cache dan TTL belum habis, kembalikan cache
//       if (cachedResponse) {
//         const cachedTime = cachedResponse.headers.get('sw-cache-time') || currentTime;
//         if (currentTime - cachedTime < TTL) {
//           return cachedResponse;
//         }
//       }

//       // Jika TTL habis atau tidak ada cache, ambil dari jaringan dan perbarui cache
//       return fetch(event.request).then((networkResponse) => {
//         const responseClone = networkResponse.clone();
        
//         caches.open(CACHE_NAME).then((cache) => {
//           const headers = new Headers(responseClone.headers);
//           headers.append('sw-cache-time', Date.now()); // Tambahkan waktu simpan ke header

//           // Buat respons baru dengan header tambahan
//           cache.put(event.request, new Response(responseClone.body, { headers }));
//         });

//         return networkResponse;
//       }).catch(() => {
//         // Jika offline dan tidak ada cache, tampilkan halaman offline jika tersedia
//         return caches.match('/offline.html');
//       });
//     })
//   );
// });

// // Activate event: membersihkan cache lama jika ada
// self.addEventListener('activate', (event) => {
//   const cacheWhitelist = [CACHE_NAME];
//   event.waitUntil(
//     caches.keys().then((cacheNames) => {
//       return Promise.all(
//         cacheNames.map((cacheName) => {
//           if (!cacheWhitelist.includes(cacheName)) {
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
// });
