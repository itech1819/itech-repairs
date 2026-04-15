import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SUBURB_SERVICE_PAGES, getSuburbServicePage } from '@/data/suburbServicePages'
import SuburbServicePageComponent from './SuburbServicePage'
import { canonicalNested } from '@/lib/canonicalUrl'

// ---------------------------------------------------------------------------
// Static params — one per slug in the data file
// ---------------------------------------------------------------------------

export function generateStaticParams(): { 'suburb-service': string }[] {
  return SUBURB_SERVICE_PAGES.map((p) => ({ 'suburb-service': p.slug }))
}

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export async function generateMetadata({
  params,
}: {
  params: Promise<{ 'suburb-service': string }>
}): Promise<Metadata> {
  const { 'suburb-service': suburbService } = await params
  const page = getSuburbServicePage(suburbService)

  if (!page) {
    return { title: 'Not Found' }
  }

  // Title: keyword + hooks, cascading to fit ≤65 chars (layout template appends " | iTech Repairs")
  const keyword = `${page.device} ${page.service} ${page.suburb}`
  const hooks = ['Cheapest Guaranteed', '15-Min Fix']
  let title = keyword
  for (const hook of hooks) {
    const next = `${title} | ${hook}`
    if (next.length <= 65) title = next
    else break
  }

  const description = `Need ${page.device} ${page.service} in ${page.suburb}? iTech Repairs offers 15-minute on-the-spot repairs, cheapest price guaranteed and lifetime warranty. Walk in today — open 7 days.`

  return {
    title,
    description,
    alternates: {
      canonical: canonicalNested('suburb-repairs', page.slug),
    },
    robots: { index: true, follow: true },
  }
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function Page({
  params,
}: {
  params: Promise<{ 'suburb-service': string }>
}) {
  const { 'suburb-service': suburbService } = await params
  const page = getSuburbServicePage(suburbService)

  if (!page) {
    notFound()
  }

  return <SuburbServicePageComponent page={page} />
}
