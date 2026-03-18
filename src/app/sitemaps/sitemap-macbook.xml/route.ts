import { getMacbookEntries, generateSitemapXml } from '@/lib/sitemapHelpers'

export const dynamic = 'force-static'

export function GET() {
  return new Response(generateSitemapXml(getMacbookEntries()), {
    headers: { 'Content-Type': 'application/xml', 'Cache-Control': 'public, max-age=86400' },
  })
}
