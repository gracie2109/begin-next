/** @type {import('next').NextConfig} */
const Redis = require('ioredis');

const nextConfig = {
  reactStrictMode: true,
  experimental:{
    appDir: true
  }
}


module.exports = {
  nextConfig,
}