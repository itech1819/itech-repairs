import type { Metadata } from 'next'
import Link from 'next/link'
import { primaryLocation } from '@/data'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'

export const metadata: Metadata = {
  title: 'Sony Xperia 1 II Water Damage Repair Melbourne | From $99',
  description:
    'Sony Xperia 1 II water damage repair in Melbourne starting From $99. Lifetime warranty on parts and labour. Walk in to Braybrook or Spotswood — no appointment needed.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/sony-xperia-1-ii-water-damage-repair',
  },
  openGraph: {
    title: 'Sony Xperia 1 II Water Damage Repair Melbourne | From $99',
    description: 'Sony Xperia 1 II water damage repair Melbourne. Lifetime warranty.',
    url: 'https://www.itechrepairs.com.au/sony-xperia-1-ii-water-damage-repair',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Sony Xperia 1 II Water Damage Repair Melbourne',
  provider: {
    '@type': 'LocalBusiness',
    name: 'iTech Repairs',
  },
  offers: {
    '@type': 'Offer',
    price: '99',
    priceCurrency: 'AUD',
  },
}

const relatedServices = [
  { name: 'Screen Replacement', href: '/sony-xperia-1-ii-screen-replacement' },
  { name: 'Battery Replacement', href: '/sony-xperia-1-ii-battery-replacement' },
  { name: 'Charging Port Repair', href: '/sony-xperia-1-ii-charging-port-repair' },
  { name: 'Free Diagnostic', href: '/sony-xperia-1-ii-free-device-inspection' },
]

export default function SonyXperia1IiWaterDamageRepairPage() {
  return (
    <>
      <SchemaScript schema={[localBusinessSchema, serviceSchema]} />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-gray-surface border-b border-gray-border py-3">
        <div className="container-page">
          <ol className="flex items-center gap-2 text-sm text-charcoal-light">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/sony-phone-repair-melbourne" className="hover:text-primary transition-colors">Sony Repairs</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/sony-xperia-1-ii-repair" className="hover:text-primary transition-colors">Sony Xperia 1 II</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal font-medium">Water Damage Repair</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Sony Xperia 1 II Water Damage Repair Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-2">Starting at <strong>From $99</strong></p>
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
            Our technicians specialise in Sony Xperia 1 II water damage repair using
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
            Other Sony Xperia 1 II Repairs
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
            Book Your Sony Xperia 1 II Water Damage Repair Today
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
