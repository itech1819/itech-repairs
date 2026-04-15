import type { Metadata } from 'next'
import { IPHONE_SERVICE_BY_SLUG } from '@/data/iphoneServicePages'
import IphoneServicePage from '@/components/sections/IphoneServicePage'

const page = IPHONE_SERVICE_BY_SLUG.get('iphone-back-glass-repair')!

export const metadata: Metadata = {
  title: { absolute: 'iPhone Back Glass Repair Melbourne – 15 Min | Cheapest Price | Lifetime Warranty | iTech Repairs' },
  description:
    'Cracked iPhone back glass in Melbourne? Fixed in 15 minutes — cheapest price guaranteed, lifetime warranty. Wireless charging re-tested after every repair. Walk in Braybrook or Spotswood — no booking needed.',
  alternates: { canonical: 'https://www.itechrepairs.com.au/iphone-back-glass-repair' },
}

export default function Page() {
  return <IphoneServicePage page={page} />
}
