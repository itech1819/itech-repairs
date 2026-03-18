import { generateSitemapIndexXml, BASE_URL } from '@/lib/sitemapHelpers'

export const dynamic = 'force-static'

const SITEMAP_NAMES = ['core', 'services', 'iphone', 'samsung', 'ipad', 'macbook', 'pixel', 'problems', 'device-problems', 'commercial', 'suburbs', 'directories', 'blog', 'suburb-services', 'brands', 'data-recovery', 'standalone-device-problems']

export function GET() {
  const urls = SITEMAP_NAMES.map(name => `${BASE_URL}/sitemaps/sitemap-${name}.xml`)
  const xml = generateSitemapIndexXml(urls)
  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml', 'Cache-Control': 'public, max-age=86400' },
  })
}
