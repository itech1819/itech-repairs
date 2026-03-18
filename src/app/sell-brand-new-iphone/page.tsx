import type { Metadata } from 'next'
import { SELL_PAGE_BY_SLUG } from '@/data/sellPages'
import SellPageComponent from '@/components/sections/SellPage'

const page = SELL_PAGE_BY_SLUG.get('sell-brand-new-iphone')!

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: `https://www.itechrepairs.com.au/sell-brand-new-iphone` },
}

export default function Page() {
  return <SellPageComponent page={page} />
}
