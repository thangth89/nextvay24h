const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  
  async redirects() {
    return [
      // Chỉ redirect từ www → non-www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.vay24h.pro.vn',
          },
        ],
        destination: 'https://vay24h.pro.vn/:path*',
        permanent: true,
      },
    ];
  },

  // Cấu hình bảo mật headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },

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
