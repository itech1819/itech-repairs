/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 86400,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: '/iphone-repair', destination: '/iphone-repair-melbourne', permanent: true },
      { source: '/macbook-repair', destination: '/macbook-repair-melbourne', permanent: true },
      { source: '/samsung-repair', destination: '/samsung-repair-melbourne', permanent: true },
      { source: '/ipad-repair', destination: '/ipad-repair-melbourne', permanent: true },
      { source: '/google-pixel-repair', destination: '/google-pixel-repair-melbourne', permanent: true },
    ];
  },
};

module.exports = nextConfig;
