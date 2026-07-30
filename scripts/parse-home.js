const fs = require('fs');
const html = fs.readFileSync('scripts/home.html', 'utf8');
const iframes = [...html.matchAll(/iframe[^>]+src="([^"]+)"/g)].map((m) => m[1]);
const carousel = [...html.matchAll(/swiper-slide-image[^>]+src="([^"]+)"/g)].map((m) => m[1]);
const gallery = [
  ...[...html.matchAll(/e-gallery-image[^>]+src="([^"]+)"/g)].map((m) => m[1]),
  ...[...html.matchAll(/data-thumbnail="([^"]+)"/g)].map((m) => m[1]),
  ...[...html.matchAll(/href="(https:\/\/www\.instagram\.com[^"]+)"/g)].map((m) => m[1]),
];
console.log('IFRAMES:', [...new Set(iframes)]);
console.log('CAROUSEL:', [...new Set(carousel)]);
console.log('GALLERY:', [...new Set(gallery)]);
