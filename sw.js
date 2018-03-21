var currentStaticCacheName = 'restaurant-static-v1';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(currentStaticCacheName).then(function(cache) {
      return cache.addAll([
        '/',
        'js/main.js',
        'js/restaurant_info.js',
        'js/dbhelper.js',
        'css/styles.css',
        'img/1.jpg',
        'img/2.jpg',
        'img/3.jpg',
        'img/4.jpg',
        'img/5.jpg',
        'img/6.jpg',
        'img/7.jpg',
        'img/8.jpg',
        'img/9.jpg',
        'img/10.jpg'
      ]);
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames
          .filter(function(cacheName) {
            return (
              cacheName.startsWith('restaurant-') && cacheName != currentStaticCacheName
            );
          })
          .map(function(cacheName) {
            return caches.delete(cacheName);
          })
      );
    })
  );
});
