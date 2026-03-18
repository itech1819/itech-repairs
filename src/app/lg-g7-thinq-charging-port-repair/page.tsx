import type { Metadata } from 'next'
import Link from 'next/link'
import { business, primaryLocation } from '@/data'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'

export const metadata: Metadata = {
  title: 'LG G7 ThinQ Charging Port Repair Melbourne | From $65',
  description:
    'LG G7 ThinQ charging port repair in Melbourne. From $65. Lifetime warranty on parts and labour. Walk in Braybrook or Spotswood — no appointment needed.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/lg-g7-thinq-charging-port-repair',
  },
  openGraph: {
    title: 'LG G7 ThinQ Charging Port Repair Melbourne | From $65',
    description: 'LG G7 ThinQ charging port repair in Melbourne. From $65. Lifetime warranty. Walk in today.',
    url: 'https://www.itechrepairs.com.au/lg-g7-thinq-charging-port-repair',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'LG G7 ThinQ Charging Port Repair Melbourne',
  description: 'Professional LG G7 ThinQ charging port repair in Melbourne. Lifetime warranty on parts and labour. Walk in Braybrook or Spotswood.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'iTech Repairs',
    url: 'https://www.itechrepairs.com.au',
  },
  areaServed: { '@type': 'City', name: 'Melbourne' },
  serviceType: 'Charging Port Repair',
  offers: {
    '@type': 'Offer',
    price: '69',
    priceCurrency: 'AUD',
    priceSpecification: { '@type': 'UnitPriceSpecification', price: '69', priceCurrency: 'AUD', unitText: 'starting price' },
  },
}

const relatedServices = [
      { name: 'Screen Replacement', href: '/lg-g7-thinq-screen-replacement', price: 'From $79' },
      { name: 'Battery Replacement', href: '/lg-g7-thinq-battery-replacement', price: 'From $69' },
      { name: 'Water Damage Repair', href: '/lg-g7-thinq-water-damage-repair', price: 'From $79' },
      { name: 'Free Diagnostic', href: '/lg-g7-thinq-free-device-inspection', price: 'Free' },
]

export default function LgG7ThinqChargingPortRepairPage() {
  return (
    <>
      <SchemaScript schema={[localBusinessSchema, serviceSchema]} />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-gray-surface border-b border-gray-border py-3">
        <div className="container-page">
          <ol className="flex items-center gap-2 text-sm text-charcoal-light">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/lg-phone-repair-melbourne" className="hover:text-primary transition-colors">LG Repairs</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/lg-g7-thinq-repair" className="hover:text-primary transition-colors">LG G7 ThinQ</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal font-medium">Charging Port Repair</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              LG G7 ThinQ Charging Port Repair Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              From $65 · Lifetime Warranty · Same Day · Walk In Welcome
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Expert LG G7 ThinQ charging port repair in Melbourne. Walk in to our Braybrook or Spotswood store — no appointment needed. Every repair includes a lifetime warranty on parts and labour.
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
              { label: 'From $65', sub: 'Charging Port Repair' },
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
              LG G7 ThinQ Charging Port Repair in Melbourne
            </h2>
            <p className="text-charcoal-light leading-relaxed mb-4">
              Our technicians specialise in LG G7 ThinQ repairs in Melbourne. We use quality replacement parts and follow precise repair procedures so your device works exactly as intended after service.
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
            Other LG G7 ThinQ Repairs
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
            Book Your LG G7 ThinQ Charging Port Repair Today
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
              href="/lg-g7-thinq-repair"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-primary transition-colors"
            >
              All LG G7 ThinQ Repairs
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
