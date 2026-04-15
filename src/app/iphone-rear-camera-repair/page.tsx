import type { Metadata } from 'next'
import { IPHONE_SERVICE_BY_SLUG } from '@/data/iphoneServicePages'
import IphoneServicePage from '@/components/sections/IphoneServicePage'

const page = IPHONE_SERVICE_BY_SLUG.get('iphone-rear-camera-repair')!

export const metadata: Metadata = {
  title: { absolute: 'iPhone Rear Camera Repair Melbourne – 15 Min | Cheapest Price | Lifetime Warranty | iTech Repairs' },
  description:
    'Blurry or broken iPhone rear camera in Melbourne? Fixed in 15 minutes — cheapest price guaranteed, lifetime warranty. All models. Walk in Braybrook or Spotswood — no booking needed.',
  alternates: { canonical: 'https://www.itechrepairs.com.au/iphone-rear-camera-repair' },
}

export default function Page() {
  return <IphoneServicePage page={page} />
}
