import type { Metadata } from 'next'
import { IPHONE_SERVICE_BY_SLUG } from '@/data/iphoneServicePages'
import IphoneServicePage from '@/components/sections/IphoneServicePage'

const page = IPHONE_SERVICE_BY_SLUG.get('iphone-battery-replacement')!

export const metadata: Metadata = {
  title: { absolute: 'iPhone Battery Replacement Melbourne – From $69 | 15 Min | Lifetime Warranty | iTech Repairs' },
  description:
    'iPhone battery draining fast? Replaced in Melbourne from $69 in 15 minutes. Cheapest price guaranteed, lifetime warranty. All models. Walk in Braybrook or Spotswood — no booking needed.',
  alternates: { canonical: 'https://www.itechrepairs.com.au/iphone-battery-replacement' },
}

export default function Page() {
  return <IphoneServicePage page={page} />
}
