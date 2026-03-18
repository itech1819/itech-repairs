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

  // Title target: "{Device} {Service} {Suburb} | 15 Min Repairs | iTech Repairs" ≤60 chars
  const rawTitle = `${page.device} ${page.service} ${page.suburb} | 15 Min | iTech Repairs`
  const title = rawTitle.length <= 60 ? rawTitle : `${page.device} ${page.service} ${page.suburb} | iTech Repairs`

  // Description 140-160 chars
  const description = `Need ${page.device} ${page.service} in ${page.suburb}? Visit iTech Repairs near ${page.suburb} for fast 15-minute repairs, lifetime warranty and cheapest price guarantee.`

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
