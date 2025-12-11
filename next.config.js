/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',        // GitHub Pages uyumlu statik export
  trailingSlash: true,     // /en/ -> /en/index.html üretir
  images: { unoptimized: true }, // export modunda
  experimental: {
    optimizePackageImports: ['react', 'react-dom']
  }
};
