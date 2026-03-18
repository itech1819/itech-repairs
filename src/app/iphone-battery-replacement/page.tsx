import type { Metadata } from 'next'
import { IPHONE_SERVICE_BY_SLUG } from '@/data/iphoneServicePages'
import IphoneServicePage from '@/components/sections/IphoneServicePage'

const page = IPHONE_SERVICE_BY_SLUG.get('iphone-battery-replacement')!

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: 'https://www.itechrepairs.com.au/iphone-battery-replacement' },
}

export default function Page() {
  return <IphoneServicePage page={page} />
}
