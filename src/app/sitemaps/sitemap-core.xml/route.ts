import { getCoreEntries, generateSitemapXml } from '@/lib/sitemapHelpers'

export const dynamic = 'force-static'

export function GET() {
  return new Response(generateSitemapXml(getCoreEntries()), {
    headers: { 'Content-Type': 'application/xml', 'Cache-Control': 'public, max-age=86400' },
  })
}
