import type { Metadata } from 'next'
import Link from 'next/link'
import { primaryLocation } from '@/data'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'

export const metadata: Metadata = {
  title: 'Realme 8 Pro Free Diagnostic Melbourne | Free',
  description:
    'Realme 8 Pro free diagnostic in Melbourne starting Free. Lifetime warranty on parts and labour. Walk in to Braybrook or Spotswood — no appointment needed.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/realme-8-pro-free-device-inspection',
  },
  openGraph: {
    title: 'Realme 8 Pro Free Diagnostic Melbourne | Free',
    description: 'Realme 8 Pro free diagnostic Melbourne. Lifetime warranty.',
    url: 'https://www.itechrepairs.com.au/realme-8-pro-free-device-inspection',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Realme 8 Pro Free Diagnostic Melbourne',
  provider: {
    '@type': 'LocalBusiness',
    name: 'iTech Repairs',
  },
  offers: {
    '@type': 'Offer',
    price: 'Free',
    priceCurrency: 'AUD',
  },
}

const relatedServices = [
  { name: 'Screen Replacement', href: '/realme-8-pro-screen-replacement' },
  { name: 'Battery Replacement', href: '/realme-8-pro-battery-replacement' },
  { name: 'Charging Port Repair', href: '/realme-8-pro-charging-port-repair' },
  { name: 'Water Damage Repair', href: '/realme-8-pro-water-damage-repair' },
]

export default function Realme8ProFreeDeviceInspectionPage() {
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
            <li><Link href="/realme-8-pro-repair" className="hover:text-primary transition-colors">Realme 8 Pro</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal font-medium">Free Diagnostic</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Realme 8 Pro Free Diagnostic Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-2">Starting at <strong>Free</strong></p>
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
            Our technicians specialise in Realme 8 Pro free diagnostic using
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
            Other Realme 8 Pro Repairs
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
            Book Your Realme 8 Pro Free Diagnostic Today
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
