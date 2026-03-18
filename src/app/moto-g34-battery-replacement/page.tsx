import type { Metadata } from 'next'
import Link from 'next/link'
import { business, primaryLocation } from '@/data'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'

export const metadata: Metadata = {
  title: 'Moto G34 Battery Replacement Melbourne | From $69',
  description:
    'Moto G34 battery replacement in Melbourne. From $69. Lifetime warranty on parts and labour. Walk in Braybrook or Spotswood — no appointment needed.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/moto-g34-battery-replacement',
  },
  openGraph: {
    title: 'Moto G34 Battery Replacement Melbourne | From $69',
    description: 'Moto G34 battery replacement in Melbourne. From $69. Lifetime warranty. Walk in today.',
    url: 'https://www.itechrepairs.com.au/moto-g34-battery-replacement',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Moto G34 Battery Replacement Melbourne',
  description: 'Professional Moto G34 battery replacement in Melbourne. Lifetime warranty on parts and labour. Walk in Braybrook or Spotswood.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'iTech Repairs',
    url: 'https://www.itechrepairs.com.au',
  },
  areaServed: { '@type': 'City', name: 'Melbourne' },
  serviceType: 'Battery Replacement',
  offers: {
    '@type': 'Offer',
    price: '59',
    priceCurrency: 'AUD',
    priceSpecification: { '@type': 'UnitPriceSpecification', price: '59', priceCurrency: 'AUD', unitText: 'starting price' },
  },
}

const relatedServices = [
      { name: 'Screen Replacement', href: '/moto-g34-screen-replacement', price: 'From $79' },
      { name: 'Charging Port Repair', href: '/moto-g34-charging-port-repair', price: 'From $59' },
      { name: 'Water Damage Repair', href: '/moto-g34-water-damage-repair', price: 'From $79' },
      { name: 'Free Diagnostic', href: '/moto-g34-free-device-inspection', price: 'Free' },
]

export default function MotoG34BatteryReplacementPage() {
  return (
    <>
      <SchemaScript schema={[localBusinessSchema, serviceSchema]} />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-gray-surface border-b border-gray-border py-3">
        <div className="container-page">
          <ol className="flex items-center gap-2 text-sm text-charcoal-light">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/motorola-phone-repair-melbourne" className="hover:text-primary transition-colors">Motorola Repairs</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/moto-g34-repair" className="hover:text-primary transition-colors">Moto G34</Link></li>
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
              Moto G34 Battery Replacement Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              From $69 · Lifetime Warranty · Same Day · Walk In Welcome
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Expert Moto G34 battery replacement in Melbourne. Walk in to our Braybrook or Spotswood store — no appointment needed. Every repair includes a lifetime warranty on parts and labour.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${business.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
              >
                Call {business.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-charcoal transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white border-b border-gray-border py-6">
        <div className="container-page">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { label: 'From $69', sub: 'Battery Replacement' },
              { label: 'Same Day', sub: 'Service' },
              { label: 'Lifetime', sub: 'Warranty' },
              { label: 'Walk-ins', sub: 'Welcome' },
            ].map((stat) => (
              <div key={stat.label} className="py-3">
                <div className="text-xl font-bold text-primary">{stat.label}</div>
                <div className="text-sm text-charcoal-light mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About This Repair */}
      <section className="section-padding">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-charcoal mb-4">
              Moto G34 Battery Replacement in Melbourne
            </h2>
            <p className="text-charcoal-light leading-relaxed mb-4">
              Our technicians specialise in Moto G34 repairs in Melbourne. We use quality replacement parts and follow precise repair procedures so your device works exactly as intended after service.
            </p>
            <p className="text-charcoal-light leading-relaxed">
              Every repair comes with a lifetime warranty. If the same fault returns, we fix it free — no questions asked.
            </p>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-charcoal mb-6 text-center">
            Other Moto G34 Repairs
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {relatedServices.map((s) => (
              <Link key={s.name} href={s.href} className="card p-4 text-center hover:border-primary group">
                <div className="font-semibold text-sm text-charcoal group-hover:text-primary transition-colors">{s.name}</div>
                <div className="text-xs text-primary font-bold mt-1">{s.price}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16">
        <div className="container-page text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Book Your Moto G34 Battery Replacement Today
          </h2>
          <p className="text-lg text-red-100 mb-8 max-w-xl mx-auto">
            Walk in to our Braybrook or Spotswood store — no appointment needed. Lifetime warranty on all repairs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${business.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl text-lg hover:bg-red-50 transition-colors"
            >
              Call {business.phoneDisplay}
            </a>
            <Link
              href="/moto-g34-repair"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-primary transition-colors"
            >
              All Moto G34 Repairs
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
