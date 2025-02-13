// src/sitemap-generator.js
const { SitemapBuilder } = require('react-router-sitemap');

const routes = [
  '/',
  '/about',
  '/exe',
  '/contact',
  '/events',
  '/projects'
];

const hostname = 'https://www.levelstair.com';

new SitemapBuilder(hostname, routes)
  .build()
  .save('./public/sitemap.xml');