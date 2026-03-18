import type { Metadata } from 'next'
import { BRAND_SERVICE_BY_SLUG } from '@/data/brandServicePages'
import BrandServicePage from '@/components/sections/BrandServicePage'

const page = BRAND_SERVICE_BY_SLUG.get('samsung-insurance-damage-report')!

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: 'https://www.itechrepairs.com.au/samsung-insurance-damage-report' },
  robots: 'index, follow',
}

export default function Page() {
  return <BrandServicePage page={page} />
}
