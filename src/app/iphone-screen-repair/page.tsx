import type { Metadata } from 'next'
import { IPHONE_SERVICE_BY_SLUG } from '@/data/iphoneServicePages'
import IphoneServicePage from '@/components/sections/IphoneServicePage'

const page = IPHONE_SERVICE_BY_SLUG.get('iphone-screen-repair')!

export const metadata: Metadata = {
  title: { absolute: 'iPhone Screen Repair Melbourne – From $79 | 15 Min | Lifetime Warranty | iTech Repairs' },
  description:
    'Cracked iPhone screen in Melbourne? Replaced in 15 minutes from $79. Cheapest price guaranteed, lifetime warranty. All models from iPhone 6 to 17 Pro Max. Walk in Braybrook or Spotswood — no booking needed.',
  alternates: { canonical: 'https://www.itechrepairs.com.au/iphone-screen-repair' },
}

export default function Page() {
  return <IphoneServicePage page={page} />
}
