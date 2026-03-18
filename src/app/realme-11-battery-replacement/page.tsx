import type { Metadata } from 'next'
import Link from 'next/link'
import { primaryLocation } from '@/data'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'

export const metadata: Metadata = {
  title: 'Realme 11 Battery Replacement Melbourne | From $69',
  description:
    'Realme 11 battery replacement in Melbourne starting From $69. Lifetime warranty on parts and labour. Walk in to Braybrook or Spotswood — no appointment needed.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/realme-11-battery-replacement',
  },
  openGraph: {
    title: 'Realme 11 Battery Replacement Melbourne | From $69',
    description: 'Realme 11 battery replacement Melbourne. Lifetime warranty.',
    url: 'https://www.itechrepairs.com.au/realme-11-battery-replacement',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Realme 11 Battery Replacement Melbourne',
  provider: {
    '@type': 'LocalBusiness',
    name: 'iTech Repairs',
  },
  offers: {
    '@type': 'Offer',
    price: '69',
    priceCurrency: 'AUD',
  },
}

const relatedServices = [
  { name: 'Screen Replacement', href: '/realme-11-screen-replacement' },
  { name: 'Charging Port Repair', href: '/realme-11-charging-port-repair' },
  { name: 'Water Damage Repair', href: '/realme-11-water-damage-repair' },
  { name: 'Free Diagnostic', href: '/realme-11-free-device-inspection' },
]

export default function Realme11BatteryReplacementPage() {
  return (
    <>
      <SchemaScript schema={[localBusinessSchema, serviceSchema]} />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-gray-surface border-b border-gray-border py-3">
        <div className="container-page">
          <ol className="flex items-center gap-2 text-sm text-charcoal-light">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/realme-phone-repair-melbourne" className="hover:text-primary transition-colors">Realme Repairs</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/realme-11-repair" className="hover:text-primary transition-colors">Realme 11</Link></li>
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
              Realme 11 Battery Replacement Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-2">Starting at <strong>From $69</strong></p>
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
            Our technicians specialise in Realme 11 battery replacement using
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
            Other Realme 11 Repairs
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
            Book Your Realme 11 Battery Replacement Today
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
