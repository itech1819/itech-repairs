import type { Metadata } from 'next'
import Link from 'next/link'
import { business, primaryLocation } from '@/data'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'

export const metadata: Metadata = {
  title: 'Redmi Note 13 Pro Repair Melbourne | Screen, Battery & More',
  description:
    'Redmi Note 13 Pro repair in Melbourne. Screen replacement, battery replacement, charging port repair, water damage repair and free diagnostic. Lifetime warranty. Walk in Braybrook or Spotswood.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/redmi-note-13-pro-repair',
  },
  openGraph: {
    title: 'Redmi Note 13 Pro Repair Melbourne | Screen, Battery & More',
    description: 'Redmi Note 13 Pro repair in Melbourne. Lifetime warranty. Walk in today.',
    url: 'https://www.itechrepairs.com.au/redmi-note-13-pro-repair',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Redmi Note 13 Pro Repair Melbourne',
  description: 'Expert Redmi Note 13 Pro repairs in Melbourne. Screen replacement, battery replacement, charging port repair, water damage repair and free diagnostics. Lifetime warranty.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'iTech Repairs',
    url: 'https://www.itechrepairs.com.au',
  },
  areaServed: { '@type': 'City', name: 'Melbourne' },
  serviceType: 'Phone Repair',
}

const services = [
  { name: 'Screen Replacement', price: 'From $79', href: '/redmi-note-13-pro-screen-replacement', serviceSlug: 'screen-replacement' },
  { name: 'Battery Replacement', price: 'From $69', href: '/redmi-note-13-pro-battery-replacement', serviceSlug: 'battery-replacement' },
  { name: 'Charging Port Repair', price: 'From $69', href: '/redmi-note-13-pro-charging-port-repair', serviceSlug: 'charging-port-repair' },
  { name: 'Water Damage Repair', price: 'From $79', href: '/redmi-note-13-pro-water-damage-repair', serviceSlug: 'water-damage-repair' },
  { name: 'Free Diagnostic', price: 'Free', href: '/redmi-note-13-pro-free-device-inspection', serviceSlug: 'free-device-inspection' },
]

export default function RedmiNote13ProRepairPage() {
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
            <li className="text-charcoal font-medium">Redmi Note 13 Pro</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Redmi Note 13 Pro Repair Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Screen Replacement · Battery Replacement · Charging Port · Lifetime Warranty
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Expert Redmi Note 13 Pro repairs in Melbourne. Walk in to our Braybrook or Spotswood store any time — no appointment needed. Every repair comes with a lifetime warranty on parts and labour.
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
              { label: 'Same Day', sub: 'Repair' },
              { label: 'Lifetime', sub: 'Warranty' },
              { label: 'Cheapest', sub: 'Price' },
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

      {/* Repair Services */}
      <section className="section-padding">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Redmi Note 13 Pro Repair Services
            </h2>
            <p className="text-charcoal-light text-lg">
              Select a repair to see pricing and availability for Redmi Note 13 Pro in Melbourne.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {services.map((service) => (
              <Link key={service.serviceSlug} href={service.href} className="card p-6 hover:border-primary group">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-charcoal group-hover:text-primary transition-colors">{service.name}</h3>
                  <span className="text-primary font-bold text-sm whitespace-nowrap ml-2">{service.price}</span>
                </div>
                <p className="text-sm text-charcoal-light">Lifetime warranty · Walk-in welcome</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16">
        <div className="container-page text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Your Redmi Note 13 Pro Repaired Today?
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
              href="/xiaomi-phone-repair-melbourne"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-primary transition-colors"
            >
              All Xiaomi Repairs
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
