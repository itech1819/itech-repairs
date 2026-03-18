import { getAllDeviceProblemParams } from '@/data/deviceProblems'
import { generateSitemapXml, BASE_URL } from '@/lib/sitemapHelpers'

export const dynamic = 'force-static'

export function GET() {
  const params = getAllDeviceProblemParams()
  const entries = params.map(({ device, problem }) => ({
    url: `${BASE_URL}/help/${device}/${problem}`,
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: 0.65,
  }))
  return new Response(generateSitemapXml(entries), {
    headers: { 'Content-Type': 'application/xml', 'Cache-Control': 'public, max-age=86400' },
  })
}
