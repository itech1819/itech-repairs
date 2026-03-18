import type { Metadata } from 'next'
import { COMMERCIAL_PAGES } from '@/data/commercial'
import CommercialPageComponent from '@/components/sections/CommercialPage'

const page = COMMERCIAL_PAGES.find(p => p.slug === 'same-day-phone-repair-melbourne')!

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: `https://www.itechrepairs.com.au/${page.slug}` },
}

export default function Page() {
  return <CommercialPageComponent page={page} />
}
