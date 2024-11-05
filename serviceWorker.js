// Nama cache dan daftar file yang akan di-cache
const CACHE_NAME = 'rental-kamera-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/src/main.jsx',
  '/manifest.json',
  '/public/android-launchericon-192-192.png',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap',
];

// Install event: cache resource saat pertama kali Service Worker diinstall
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event: mencoba mengambil dari cache jika ada, jika tidak maka akan mengambil dari jaringan
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cache jika ada
        if (response) {
          return response;
        }
        // Fetch dari jaringan jika tidak ada di cache
        return fetch(event.request).then((networkResponse) => {
          // Tambahkan response jaringan ke cache
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        });
      })
      .catch(() => caches.match('/offline.html')) // Menampilkan halaman offline jika ada kesalahan
  );
});

// Activate event: membersihkan cache lama jika ada
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
