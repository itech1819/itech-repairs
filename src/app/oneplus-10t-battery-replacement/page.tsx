import type { Metadata } from 'next'
import Link from 'next/link'
import { primaryLocation } from '@/data'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'

export const metadata: Metadata = {
  title: 'OnePlus 10T Battery Replacement Melbourne | From $79',
  description:
    'OnePlus 10T battery replacement in Melbourne starting From $79. Lifetime warranty on parts and labour. Walk in to Braybrook or Spotswood — no appointment needed.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/oneplus-10t-battery-replacement',
  },
  openGraph: {
    title: 'OnePlus 10T Battery Replacement Melbourne | From $79',
    description: 'OnePlus 10T battery replacement Melbourne. Lifetime warranty.',
    url: 'https://www.itechrepairs.com.au/oneplus-10t-battery-replacement',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'OnePlus 10T Battery Replacement Melbourne',
  provider: {
    '@type': 'LocalBusiness',
    name: 'iTech Repairs',
  },
  offers: {
    '@type': 'Offer',
    price: '79',
    priceCurrency: 'AUD',
  },
}

const relatedServices = [
  { name: 'Screen Replacement', href: '/oneplus-10t-screen-replacement' },
  { name: 'Charging Port Repair', href: '/oneplus-10t-charging-port-repair' },
  { name: 'Water Damage Repair', href: '/oneplus-10t-water-damage-repair' },
  { name: 'Free Diagnostic', href: '/oneplus-10t-free-device-inspection' },
]

export default function Oneplus10tBatteryReplacementPage() {
  return (
    <>
      <SchemaScript schema={[localBusinessSchema, serviceSchema]} />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-gray-surface border-b border-gray-border py-3">
        <div className="container-page">
          <ol className="flex items-center gap-2 text-sm text-charcoal-light">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/oneplus-phone-repair-melbourne" className="hover:text-primary transition-colors">OnePlus Repairs</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/oneplus-10t-repair" className="hover:text-primary transition-colors">OnePlus 10T</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal font-medium">Battery Replacement</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              OnePlus 10T Battery Replacement Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-2">Starting at <strong>From $79</strong></p>
            <p className="text-gray-400 mb-6">Lifetime warranty · Same-day repair · No fix no fee</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Book Repair</Link>
              <Link href="tel:+61390016199" className="btn-outline-white">Call Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Detail */}
      <section className="section-padding bg-white">
        <div className="container-page max-w-3xl">
          <h2 className="text-2xl font-bold text-charcoal mb-4">
            About This Service
          </h2>
          <p className="text-charcoal-light mb-4">
            Our technicians specialise in OnePlus 10T battery replacement using
            genuine or OEM-grade components. Every repair comes with a lifetime warranty on parts
            and labour, and most jobs are completed same-day.
          </p>
          <ul className="space-y-2 text-charcoal-light">
            <li>✓ Genuine or OEM-grade parts</li>
            <li>✓ Lifetime warranty on parts and labour</li>
            <li>✓ Same-day turnaround in most cases</li>
            <li>✓ No fix, no fee guarantee</li>
            <li>✓ Walk-in welcome at Braybrook &amp; Spotswood</li>
          </ul>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <h2 className="text-xl font-bold text-charcoal mb-6 text-center">
            Other OnePlus 10T Repairs
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {relatedServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors text-sm font-medium"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white text-center">
        <div className="container-page max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">
            Book Your OnePlus 10T Battery Replacement Today
          </h2>
          <p className="mb-6 opacity-90">
            Walk in to our Braybrook or Spotswood store — no appointment needed.
          </p>
          <Link href="/contact" className="btn-white">Get a Free Quote</Link>
        </div>
      </section>
    </>
  )
}
