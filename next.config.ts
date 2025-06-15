const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  
  // Cấu hình hình ảnh
  images: {
    domains: ['vay24h.pro.vn'],
    formats: ['image/webp', 'image/avif'],
  },

  // Tối ưu hóa
  compress: true,
  poweredByHeader: false,
  
  // Environment variables
  env: {
    SITE_URL: 'https://vay24h.pro.vn',
  },
};

module.exports = withMDX(nextConfig);
