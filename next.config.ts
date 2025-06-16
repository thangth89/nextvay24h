const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

  // Cấu hình ảnh
  images: {
    domains: ['vay24h.pro.vn'],
    formats: ['image/webp', 'image/avif'],
  },

  // Tối ưu hóa
  compress: true,
  poweredByHeader: false,

  // Biến môi trường
  env: {
    SITE_URL: 'https://vay24h.pro.vn',
  },

  // Redirect www → non-www
  async redirects() {
    return [
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
};

module.exports = withMDX(nextConfig);
