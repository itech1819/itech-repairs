import type { Metadata } from 'next'
import { BRAND_SERVICE_BY_SLUG } from '@/data/brandServicePages'
import BrandServicePage from '@/components/sections/BrandServicePage'

const page = BRAND_SERVICE_BY_SLUG.get('macbook-free-device-inspection')!

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: 'https://www.itechrepairs.com.au/macbook-free-device-inspection' },
  robots: 'index, follow',
}

export default function Page() {
  return <BrandServicePage page={page} />
}
