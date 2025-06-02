/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/MYportfolio',
  images: {
    unoptimized: true,
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;


