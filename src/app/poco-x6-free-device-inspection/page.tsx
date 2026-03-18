import type { Metadata } from 'next'
import Link from 'next/link'
import { business, primaryLocation } from '@/data'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'

export const metadata: Metadata = {
  title: 'POCO X6 Free Diagnostic Melbourne | Free',
  description:
    'POCO X6 free diagnostic in Melbourne. Free. Lifetime warranty on parts and labour. Walk in Braybrook or Spotswood — no appointment needed.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/poco-x6-free-device-inspection',
  },
  openGraph: {
    title: 'POCO X6 Free Diagnostic Melbourne | Free',
    description: 'POCO X6 free diagnostic in Melbourne. Free. Lifetime warranty. Walk in today.',
    url: 'https://www.itechrepairs.com.au/poco-x6-free-device-inspection',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'POCO X6 Free Diagnostic Melbourne',
  description: 'Professional POCO X6 free diagnostic in Melbourne. Lifetime warranty on parts and labour. Walk in Braybrook or Spotswood.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'iTech Repairs',
    url: 'https://www.itechrepairs.com.au',
  },
  areaServed: { '@type': 'City', name: 'Melbourne' },
  serviceType: 'Free Diagnostic',
  offers: {
    '@type': 'Offer',
    price: '69',
    priceCurrency: 'AUD',
    priceSpecification: { '@type': 'UnitPriceSpecification', price: '69', priceCurrency: 'AUD', unitText: 'starting price' },
  },
}

const relatedServices = [
      { name: 'Screen Replacement', href: '/poco-x6-screen-replacement', price: 'From $79' },
      { name: 'Battery Replacement', href: '/poco-x6-battery-replacement', price: 'From $69' },
      { name: 'Charging Port Repair', href: '/poco-x6-charging-port-repair', price: 'From $69' },
      { name: 'Water Damage Repair', href: '/poco-x6-water-damage-repair', price: 'From $79' },
]

export default function PocoX6FreeDeviceInspectionPage() {
  return (
    <>
      <SchemaScript schema={[localBusinessSchema, serviceSchema]} />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-gray-surface border-b border-gray-border py-3">
        <div className="container-page">
          <ol className="flex items-center gap-2 text-sm text-charcoal-light">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/xiaomi-phone-repair-melbourne" className="hover:text-primary transition-colors">Xiaomi Repairs</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/poco-x6-repair" className="hover:text-primary transition-colors">POCO X6</Link></li>
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
              POCO X6 Free Diagnostic Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Free · Lifetime Warranty · Same Day · Walk In Welcome
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Expert POCO X6 free diagnostic in Melbourne. Walk in to our Braybrook or Spotswood store — no appointment needed. Every repair includes a lifetime warranty on parts and labour.
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
              { label: 'Free', sub: 'Free Diagnostic' },
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
              POCO X6 Free Diagnostic in Melbourne
            </h2>
            <p className="text-charcoal-light leading-relaxed mb-4">
              Our technicians specialise in POCO X6 repairs in Melbourne. We use quality replacement parts and follow precise repair procedures so your device works exactly as intended after service.
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
            Other POCO X6 Repairs
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
            Book Your POCO X6 Free Diagnostic Today
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
              href="/poco-x6-repair"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-primary transition-colors"
            >
              All POCO X6 Repairs
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
