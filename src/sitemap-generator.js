// src/sitemap-generator.js
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { resolve } = require('path');

const routes = [
  '/',
  '/about',
  '/exe',
  '/contact',
  '/events',
  '/projects'
];

const hostname = 'https://www.levelstair.com';

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname });
  const writeStream = createWriteStream(resolve(__dirname, '../public', 'sitemap.xml'));

  sitemap.pipe(writeStream);

  routes.forEach(route => {
    sitemap.write({ url: route, changefreq: 'monthly', priority: 0.8 });
  });

  sitemap.end();

  await streamToPromise(sitemap);
  console.log('Sitemap generated successfully!');
}

generateSitemap().catch(console.error);