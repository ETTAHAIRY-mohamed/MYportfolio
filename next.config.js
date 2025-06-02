/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/porfolio-1',
  images: {
    unoptimized: true,
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;


