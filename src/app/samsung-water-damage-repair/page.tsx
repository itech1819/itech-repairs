import type { Metadata } from 'next'
import { BRAND_SERVICE_BY_SLUG } from '@/data/brandServicePages'
import BrandServicePage from '@/components/sections/BrandServicePage'

const page = BRAND_SERVICE_BY_SLUG.get('samsung-water-damage-repair')!

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: 'https://www.itechrepairs.com.au/samsung-water-damage-repair' },
  robots: 'index, follow',
}

export default function Page() {
  return <BrandServicePage page={page} />
}
