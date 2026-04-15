import type { Metadata } from 'next'
import { IPHONE_SERVICE_BY_SLUG } from '@/data/iphoneServicePages'
import IphoneServicePage from '@/components/sections/IphoneServicePage'

const page = IPHONE_SERVICE_BY_SLUG.get('iphone-charging-port-repair')!

export const metadata: Metadata = {
  title: { absolute: 'iPhone Charging Port Repair Melbourne – 15 Min | Cheapest Price | Lifetime Warranty | iTech Repairs' },
  description:
    'iPhone not charging in Melbourne? Fixed in 15 minutes — ultrasonic clean or full port replacement. Cheapest price guaranteed, lifetime warranty. Walk in Braybrook or Spotswood — no booking needed.',
  alternates: { canonical: 'https://www.itechrepairs.com.au/iphone-charging-port-repair' },
}

export default function Page() {
  return <IphoneServicePage page={page} />
}
