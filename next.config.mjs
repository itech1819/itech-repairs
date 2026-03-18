/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  trailingSlash: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [],
  },
  experimental: {
    optimizePackageImports: ['react', 'react-dom'],
  },

  async redirects() {
    return [
      // ── HTTP → HTTPS redirects ───────────────────────────────────────────
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.itechrepairs.com.au' }],
        missing: [{ type: 'header', key: 'x-forwarded-proto', value: 'https' }],
        destination: 'https://www.itechrepairs.com.au/:path*',
        permanent: true,
      },
      // ── non-www → www canonical redirect ────────────────────────────────
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'itechrepairs.com.au' }],
        destination: 'https://www.itechrepairs.com.au/:path*',
        permanent: true,
      },

      // ── One-off page renames ────────────────────────────────────────────
      { source: '/about-itech-repairs',    destination: '/about',                          permanent: true },
      // /sell-my-device is now its own page — no redirect needed
      { source: '/services',               destination: '/iphone-repair-melbourne',         permanent: true },
      { source: '/blogs',                  destination: '/recent-updates',                  permanent: true },
      { source: '/repair/school-repairs',  destination: '/commercial-repair-index',         permanent: true },

      // ── /services/* ─────────────────────────────────────────────────────
      { source: '/services/iphone-battery-replacement',          destination: '/iphone-battery-replacement',    permanent: true },
      { source: '/services/iphone-battery-replacement/:slug*',   destination: '/iphone-battery-replacement',    permanent: true },
      { source: '/services/charging-port-repairs',               destination: '/iphone-charging-port-repair',   permanent: true },
      { source: '/services/charging-port-repairs/:slug*',        destination: '/iphone-charging-port-repair',   permanent: true },
      { source: '/services/back-glass-replacement',              destination: '/iphone-back-glass-repair',      permanent: true },
      { source: '/services/back-glass-replacement/:slug*',       destination: '/iphone-back-glass-repair',      permanent: true },
      { source: '/services/:slug*',                              destination: '/iphone-repair-melbourne',       permanent: true },

      // ── /about-itech-repairs/ (explicit with/without trailing slash) ────
      { source: '/about-itech-repairs/',                         destination: '/about',                         permanent: true },

      // ── /brands-we-fix/* ────────────────────────────────────────────────
      // Specific known old slugs from GSC (with and without trailing slash)
      { source: '/brands-we-fix/samsung-phone-repairs',          destination: '/samsung-repair-melbourne',      permanent: true },
      { source: '/brands-we-fix/samsung-phone-repairs/',         destination: '/samsung-repair-melbourne',      permanent: true },
      { source: '/brands-we-fix/mac-book-repair',                destination: '/macbook-repair-melbourne',      permanent: true },
      { source: '/brands-we-fix/mac-book-repair/',               destination: '/macbook-repair-melbourne',      permanent: true },
      { source: '/brands-we-fix/apple-iphone-repairs',           destination: '/iphone-repair-melbourne',       permanent: true },
      { source: '/brands-we-fix/apple-iphone-repairs/',          destination: '/iphone-repair-melbourne',       permanent: true },
      { source: '/brands-we-fix/google-pixel-repairs',           destination: '/google-pixel-repair-melbourne', permanent: true },
      { source: '/brands-we-fix/google-pixel-repairs/',          destination: '/google-pixel-repair-melbourne', permanent: true },
      { source: '/brands-we-fix/apple-watch-repair',             destination: '/apple-watch-repair-melbourne',  permanent: true },
      { source: '/brands-we-fix/apple-watch-repair/',            destination: '/apple-watch-repair-melbourne',  permanent: true },
      { source: '/brands-we-fix/iphone-repairs-melbourne',       destination: '/',                              permanent: true },
      { source: '/brands-we-fix/iphone-repairs-melbourne/',      destination: '/',                              permanent: true },
      { source: '/brands-we-fix/samsung-repairs-melbourne',      destination: '/samsung-repair-melbourne',      permanent: true },
      { source: '/brands-we-fix/ipad-repairs-melbourne',         destination: '/ipad-repair-melbourne',         permanent: true },
      { source: '/brands-we-fix/macbook-repairs-melbourne',      destination: '/macbook-repair-melbourne',      permanent: true },
      { source: '/brands-we-fix/google-pixel-repairs-melbourne', destination: '/google-pixel-repair-melbourne', permanent: true },
      { source: '/brands-we-fix/nothing-repair',               destination: '/nothing-phone-repair-melbourne',  permanent: true },
      { source: '/brands-we-fix/nothing-repair/',              destination: '/nothing-phone-repair-melbourne',  permanent: true },
      { source: '/brands-we-fix/sony-repair',                  destination: '/sony-phone-repair-melbourne',    permanent: true },
      { source: '/brands-we-fix/sony-repair/',                 destination: '/sony-phone-repair-melbourne',    permanent: true },
      { source: '/brands-we-fix/oneplus-repair',               destination: '/oneplus-phone-repair-melbourne', permanent: true },
      { source: '/brands-we-fix/oneplus-repair/',              destination: '/oneplus-phone-repair-melbourne', permanent: true },
      { source: '/brands-we-fix/asus',                         destination: '/asus-phone-repair-melbourne',    permanent: true },
      { source: '/brands-we-fix/asus/',                        destination: '/asus-phone-repair-melbourne',    permanent: true },
      { source: '/brands-we-fix/huawei-repairs-melbourne',     destination: '/huawei-phone-repair-melbourne',  permanent: true },
      { source: '/brands-we-fix/huawei-repairs-melbourne/',    destination: '/huawei-phone-repair-melbourne',  permanent: true },
      { source: '/brands-we-fix/iphone-13-pro-max-screen-repair',  destination: '/iphone-13-pro-max-screen-repair',  permanent: true },
      { source: '/brands-we-fix/iphone-13-pro-max-screen-repair/', destination: '/iphone-13-pro-max-screen-repair',  permanent: true },
      { source: '/brands-we-fix/samsung-s23-ultra-screen-repair',  destination: '/samsung-s23-ultra-screen-repair',  permanent: true },
      { source: '/brands-we-fix/samsung-s23-ultra-screen-repair/', destination: '/samsung-s23-ultra-screen-repair',  permanent: true },
      // Catch-all for any other brand (Nokia, etc.)
      { source: '/brands-we-fix/:slug*',   destination: '/iphone-repair-melbourne',         permanent: true },

      // ── /service/* ──────────────────────────────────────────────────────
      { source: '/service/iphone-repairs-melbourne',       destination: '/iphone-repair-melbourne',       permanent: true },
      { source: '/service/samsung-repairs-melbourne',      destination: '/samsung-repair-melbourne',      permanent: true },
      { source: '/service/ipad-repairs-melbourne',         destination: '/ipad-repair-melbourne',         permanent: true },
      { source: '/service/macbook-repairs-melbourne',      destination: '/macbook-repair-melbourne',      permanent: true },
      { source: '/service/google-pixel-repairs-melbourne', destination: '/google-pixel-repair-melbourne', permanent: true },
      { source: '/service/apple-watch-repairs',             destination: '/apple-watch-repair-melbourne',   permanent: true },
      { source: '/service/apple-watch-repairs/',            destination: '/apple-watch-repair-melbourne',   permanent: true },
      // Catch-all for other service pages
      { source: '/service/:slug*',         destination: '/iphone-repair-melbourne',         permanent: true },

      // ── /locations/* ────────────────────────────────────────────────────
      // Suburbs with dedicated static pages
      { source: '/locations/mobile-phone-repair-braybrook',       destination: '/braybrook-phone-repair',              permanent: true },
      { source: '/locations/mobile-phone-repair-spotswood',       destination: '/spotswood-phone-repair',              permanent: true },
      // Suburbs handled by dynamic route
      { source: '/locations/mobile-phone-repair-altona-north',    destination: '/altona-north-iphone-repair',          permanent: true },
      { source: '/locations/mobile-phone-repair-altona-meadows',  destination: '/altona-meadows-iphone-repair',        permanent: true },
      { source: '/locations/mobile-phone-repair-altona',          destination: '/altona-iphone-repair',                permanent: true },
      { source: '/locations/mobile-phone-repair-hoppers-crossing',destination: '/hoppers-crossing-iphone-repair',      permanent: true },
      { source: '/locations/mobile-phone-repair-sunshine-west',   destination: '/sunshine-west-iphone-repair',         permanent: true },
      { source: '/locations/mobile-phone-repair-sunshine',        destination: '/sunshine-iphone-repair',              permanent: true },
      { source: '/locations/mobile-phone-repair-footscray',       destination: '/footscray-iphone-repair',             permanent: true },
      { source: '/locations/mobile-phone-repair-yarraville',      destination: '/yarraville-iphone-repair',            permanent: true },
      { source: '/locations/mobile-phone-repair-williamstown',    destination: '/williamstown-iphone-repair',          permanent: true },
      { source: '/locations/mobile-phone-repair-werribee',        destination: '/werribee-iphone-repair',              permanent: true },
      { source: '/locations/mobile-phone-repair-st-albans',       destination: '/st-albans-iphone-repair',             permanent: true },
      { source: '/locations/mobile-phone-repair-deer-park',       destination: '/deer-park-iphone-repair',             permanent: true },
      { source: '/locations/mobile-phone-repair-point-cook',      destination: '/point-cook-iphone-repair',            permanent: true },
      { source: '/locations/mobile-phone-repair-tarneit',         destination: '/tarneit-iphone-repair',               permanent: true },
      { source: '/locations/mobile-phone-repair-truganina',       destination: '/truganina-iphone-repair',             permanent: true },
      { source: '/locations/mobile-phone-repair-caroline-springs',destination: '/caroline-springs-iphone-repair',      permanent: true },
      { source: '/locations/mobile-phone-repair-keilor-east',     destination: '/keilor-east-iphone-repair',           permanent: true },
      { source: '/locations/mobile-phone-repair-essendon',        destination: '/essendon-iphone-repair',              permanent: true },
      { source: '/locations/mobile-phone-repair-moonee-ponds',    destination: '/moonee-ponds-iphone-repair',          permanent: true },
      // Catch-all for any other location not listed above
      { source: '/locations/:slug*',       destination: '/iphone-repair-melbourne',         permanent: true },

      // ── /tag/* → relevant repair pages ─────────────────────────────────
      { source: '/tag/iphone-stuck-in-boot-loop',    destination: '/iphone-boot-loop-repair-melbourne',        permanent: true },
      { source: '/tag/iphone-screen-repair',         destination: '/iphone-repair-melbourne',                  permanent: true },
      { source: '/tag/iphone-battery',               destination: '/iphone-repair-melbourne',                  permanent: true },
      { source: '/tag/water-damage',                 destination: '/iphone-water-damage-repair-melbourne',     permanent: true },
      { source: '/tag/iphone-not-charging',          destination: '/iphone-not-charging-repair-melbourne',     permanent: true },
      // Catch-all for tags
      { source: '/tag/:slug*',             destination: '/iphone-repair-melbourne',         permanent: true },

      // ── /category/* ─────────────────────────────────────────────────────
      { source: '/category/iphone-repair', destination: '/iphone-repair-melbourne',         permanent: true },
      { source: '/category/samsung-repair',destination: '/samsung-repair-melbourne',        permanent: true },
      { source: '/category/ipad-repair',   destination: '/ipad-repair-melbourne',           permanent: true },
      { source: '/category/macbook-repair',destination: '/macbook-repair-melbourne',        permanent: true },
      { source: '/category/:slug*',        destination: '/iphone-repair-melbourne',         permanent: true },

      // ── /repair/* ───────────────────────────────────────────────────────
      { source: '/repair/:slug*',          destination: '/iphone-repair-melbourne',         permanent: true },

      // ── Structure A suburb pages → Structure B canonical ─────────────────────
      // A1: {suburb}-iphone-repair (10 slugs)
      { source: '/braybrook-iphone-repair',    destination: '/suburb-repairs/iphone-repair-braybrook',    permanent: true },
      { source: '/spotswood-iphone-repair',    destination: '/suburb-repairs/iphone-repair-spotswood',    permanent: true },
      { source: '/footscray-iphone-repair',    destination: '/suburb-repairs/iphone-repair-footscray',    permanent: true },
      { source: '/sunshine-iphone-repair',     destination: '/suburb-repairs/iphone-repair-sunshine',     permanent: true },
      { source: '/yarraville-iphone-repair',   destination: '/suburb-repairs/iphone-repair-yarraville',   permanent: true },
      { source: '/williamstown-iphone-repair', destination: '/suburb-repairs/iphone-repair-williamstown', permanent: true },
      { source: '/altona-iphone-repair',       destination: '/suburb-repairs/iphone-repair-altona',       permanent: true },
      { source: '/newport-iphone-repair',      destination: '/suburb-repairs/iphone-repair-newport',      permanent: true },
      { source: '/seddon-iphone-repair',       destination: '/suburb-repairs/iphone-repair-seddon',       permanent: true },
      { source: '/maribyrnong-iphone-repair',  destination: '/suburb-repairs/iphone-repair-maribyrnong',  permanent: true },
      // A2: {suburb}-iphone-screen-repair (10 slugs)
      { source: '/braybrook-iphone-screen-repair',    destination: '/suburb-repairs/iphone-screen-repair-braybrook',    permanent: true },
      { source: '/spotswood-iphone-screen-repair',    destination: '/suburb-repairs/iphone-screen-repair-spotswood',    permanent: true },
      { source: '/footscray-iphone-screen-repair',    destination: '/suburb-repairs/iphone-screen-repair-footscray',    permanent: true },
      { source: '/sunshine-iphone-screen-repair',     destination: '/suburb-repairs/iphone-screen-repair-sunshine',     permanent: true },
      { source: '/yarraville-iphone-screen-repair',   destination: '/suburb-repairs/iphone-screen-repair-yarraville',   permanent: true },
      { source: '/williamstown-iphone-screen-repair', destination: '/suburb-repairs/iphone-screen-repair-williamstown', permanent: true },
      { source: '/altona-iphone-screen-repair',       destination: '/suburb-repairs/iphone-screen-repair-altona',       permanent: true },
      { source: '/newport-iphone-screen-repair',      destination: '/suburb-repairs/iphone-screen-repair-newport',      permanent: true },
      { source: '/seddon-iphone-screen-repair',       destination: '/suburb-repairs/iphone-screen-repair-seddon',       permanent: true },
      { source: '/maribyrnong-iphone-screen-repair',  destination: '/suburb-repairs/iphone-screen-repair-maribyrnong',  permanent: true },
      // A2: {suburb}-iphone-battery-replacement (10 slugs)
      { source: '/braybrook-iphone-battery-replacement',    destination: '/suburb-repairs/iphone-battery-replacement-braybrook',    permanent: true },
      { source: '/spotswood-iphone-battery-replacement',    destination: '/suburb-repairs/iphone-battery-replacement-spotswood',    permanent: true },
      { source: '/footscray-iphone-battery-replacement',    destination: '/suburb-repairs/iphone-battery-replacement-footscray',    permanent: true },
      { source: '/sunshine-iphone-battery-replacement',     destination: '/suburb-repairs/iphone-battery-replacement-sunshine',     permanent: true },
      { source: '/yarraville-iphone-battery-replacement',   destination: '/suburb-repairs/iphone-battery-replacement-yarraville',   permanent: true },
      { source: '/williamstown-iphone-battery-replacement', destination: '/suburb-repairs/iphone-battery-replacement-williamstown', permanent: true },
      { source: '/altona-iphone-battery-replacement',       destination: '/suburb-repairs/iphone-battery-replacement-altona',       permanent: true },
      { source: '/newport-iphone-battery-replacement',      destination: '/suburb-repairs/iphone-battery-replacement-newport',      permanent: true },
      { source: '/seddon-iphone-battery-replacement',       destination: '/suburb-repairs/iphone-battery-replacement-seddon',       permanent: true },
      { source: '/maribyrnong-iphone-battery-replacement',  destination: '/suburb-repairs/iphone-battery-replacement-maribyrnong',  permanent: true },
      // A2: {suburb}-iphone-charging-port-repair (10 slugs)
      { source: '/braybrook-iphone-charging-port-repair',    destination: '/suburb-repairs/iphone-charging-port-repair-braybrook',    permanent: true },
      { source: '/spotswood-iphone-charging-port-repair',    destination: '/suburb-repairs/iphone-charging-port-repair-spotswood',    permanent: true },
      { source: '/footscray-iphone-charging-port-repair',    destination: '/suburb-repairs/iphone-charging-port-repair-footscray',    permanent: true },
      { source: '/sunshine-iphone-charging-port-repair',     destination: '/suburb-repairs/iphone-charging-port-repair-sunshine',     permanent: true },
      { source: '/yarraville-iphone-charging-port-repair',   destination: '/suburb-repairs/iphone-charging-port-repair-yarraville',   permanent: true },
      { source: '/williamstown-iphone-charging-port-repair', destination: '/suburb-repairs/iphone-charging-port-repair-williamstown', permanent: true },
      { source: '/altona-iphone-charging-port-repair',       destination: '/suburb-repairs/iphone-charging-port-repair-altona',       permanent: true },
      { source: '/newport-iphone-charging-port-repair',      destination: '/suburb-repairs/iphone-charging-port-repair-newport',      permanent: true },
      { source: '/seddon-iphone-charging-port-repair',       destination: '/suburb-repairs/iphone-charging-port-repair-seddon',       permanent: true },
      { source: '/maribyrnong-iphone-charging-port-repair',  destination: '/suburb-repairs/iphone-charging-port-repair-maribyrnong',  permanent: true },
      // A2: {suburb}-iphone-water-damage-repair (10 slugs)
      { source: '/braybrook-iphone-water-damage-repair',    destination: '/suburb-repairs/iphone-water-damage-repair-braybrook',    permanent: true },
      { source: '/spotswood-iphone-water-damage-repair',    destination: '/suburb-repairs/iphone-water-damage-repair-spotswood',    permanent: true },
      { source: '/footscray-iphone-water-damage-repair',    destination: '/suburb-repairs/iphone-water-damage-repair-footscray',    permanent: true },
      { source: '/sunshine-iphone-water-damage-repair',     destination: '/suburb-repairs/iphone-water-damage-repair-sunshine',     permanent: true },
      { source: '/yarraville-iphone-water-damage-repair',   destination: '/suburb-repairs/iphone-water-damage-repair-yarraville',   permanent: true },
      { source: '/williamstown-iphone-water-damage-repair', destination: '/suburb-repairs/iphone-water-damage-repair-williamstown', permanent: true },
      { source: '/altona-iphone-water-damage-repair',       destination: '/suburb-repairs/iphone-water-damage-repair-altona',       permanent: true },
      { source: '/newport-iphone-water-damage-repair',      destination: '/suburb-repairs/iphone-water-damage-repair-newport',      permanent: true },
      { source: '/seddon-iphone-water-damage-repair',       destination: '/suburb-repairs/iphone-water-damage-repair-seddon',       permanent: true },
      { source: '/maribyrnong-iphone-water-damage-repair',  destination: '/suburb-repairs/iphone-water-damage-repair-maribyrnong',  permanent: true },
      // A2: {suburb}-iphone-camera-repair (10 slugs)
      { source: '/braybrook-iphone-camera-repair',    destination: '/suburb-repairs/iphone-camera-repair-braybrook',    permanent: true },
      { source: '/spotswood-iphone-camera-repair',    destination: '/suburb-repairs/iphone-camera-repair-spotswood',    permanent: true },
      { source: '/footscray-iphone-camera-repair',    destination: '/suburb-repairs/iphone-camera-repair-footscray',    permanent: true },
      { source: '/sunshine-iphone-camera-repair',     destination: '/suburb-repairs/iphone-camera-repair-sunshine',     permanent: true },
      { source: '/yarraville-iphone-camera-repair',   destination: '/suburb-repairs/iphone-camera-repair-yarraville',   permanent: true },
      { source: '/williamstown-iphone-camera-repair', destination: '/suburb-repairs/iphone-camera-repair-williamstown', permanent: true },
      { source: '/altona-iphone-camera-repair',       destination: '/suburb-repairs/iphone-camera-repair-altona',       permanent: true },
      { source: '/newport-iphone-camera-repair',      destination: '/suburb-repairs/iphone-camera-repair-newport',      permanent: true },
      { source: '/seddon-iphone-camera-repair',       destination: '/suburb-repairs/iphone-camera-repair-seddon',       permanent: true },
      { source: '/maribyrnong-iphone-camera-repair',  destination: '/suburb-repairs/iphone-camera-repair-maribyrnong',  permanent: true },
    ]
  },
}

export default nextConfig
