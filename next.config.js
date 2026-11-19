const basePath = "/MYportfolio";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  images: {
    unoptimized: true,
  },
  // Exposé au code client pour préfixer les fichiers statiques (voir src/lib/assets.ts)
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;
