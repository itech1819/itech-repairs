import type { Metadata } from 'next'
import Link from 'next/link'
import { business, primaryLocation } from '@/data'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'

export const metadata: Metadata = {
  title: 'Apple Watch Series 5 Repair Melbourne',
  description:
    'Apple Watch Series 5 repair in Melbourne. Screen repair from $149, battery replacement from $99. Lifetime warranty, same-day service. Walk in Braybrook or Spotswood.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/apple-watch-series-5-repair',
  },
  openGraph: {
    title: 'Apple Watch Series 5 Repair Melbourne',
    description: 'Apple Watch Series 5 repair in Melbourne. Screen repair from $149, battery replacement from $99. Lifetime warranty, same-day service. Walk in Braybrook or Spotswood.',
    url: 'https://www.itechrepairs.com.au/apple-watch-series-5-repair',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const repairServices = [
  { name: 'Screen Repair', desc: 'Cracked or shattered Series 5 display replaced same day.', href: '/apple-watch-series-5-screen-repair', price: 'From $149' },
  { name: 'Battery Replacement', desc: 'Series 5 battery draining fast? Replaced in 30–45 minutes.', href: '/apple-watch-series-5-battery-replacement', price: 'From $99' },
  { name: 'Charging Issues', desc: 'Apple Watch Series 5 not charging? Free diagnostic included.', href: '/apple-watch-series-5-charging-port-repair', price: 'Free check' },
  { name: 'Water Damage', desc: 'Free water damage assessment and corrosion cleaning.', href: '/apple-watch-series-5-water-damage-repair', price: 'Free check' },
  { name: 'Free Diagnostic', desc: 'Full device assessment with written quote, no obligation.', href: '/apple-watch-series-5-free-device-inspection', price: 'Free' },
  { name: 'Get a Quote', desc: 'Describe your issue and get a fast response.', href: '/contact', price: 'Free' },
]

export default function AppleWatchSeries5RepairPage() {
  return (
    <>
      <SchemaScript schema={[localBusinessSchema]} />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-gray-surface border-b border-gray-border py-3">
        <div className="container-page">
          <ol className="flex items-center gap-2 text-sm text-charcoal-light">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/apple-watch-repair-melbourne" className="hover:text-primary transition-colors">Apple Watch Repairs</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal font-medium">Series 5</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Apple Watch Series 5 Repair Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Screen Repair · Battery Replacement · Same Day · Lifetime Warranty
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Expert Apple Watch Series 5 repair in Melbourne. The Series 5 introduced an always-on display — we have the parts and expertise to repair cracked screens, dead batteries, and charging issues for this model. Walk in to our Braybrook or Spotswood store today.
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

      {/* Repair Services Grid */}
      <section className="section-padding">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Apple Watch Series 5 Repair Services
            </h2>
            <p className="text-charcoal-light text-lg">
              All repair services available for Apple Watch Series 5.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {repairServices.map((service) => (
              <Link key={service.name} href={service.href} className="card p-6 hover:border-primary group">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-charcoal group-hover:text-primary transition-colors">{service.name}</h3>
                  <span className="text-primary font-bold text-sm whitespace-nowrap ml-2">{service.price}</span>
                </div>
                <p className="text-sm text-charcoal-light leading-relaxed">{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About This Model */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-charcoal mb-4">About Apple Watch Series 5</h2>
            <p className="text-charcoal-light leading-relaxed mb-4">
              The Apple Watch Series 5, released in 2019, was a landmark model introducing the always-on Retina LTPO display — the first Apple Watch to show the time at all times without raising your wrist. It came in 40mm and 44mm sizes and was available in aluminium, stainless steel, and titanium.
            </p>
            <p className="text-charcoal-light leading-relaxed">
              Common repair needs for the Series 5 include cracked always-on display screens, degraded batteries after 4–6 years of use, and charging contact issues. Our technicians are experienced with Series 5 components and stock quality replacement parts.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary text-white py-16">
        <div className="container-page text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Apple Watch Series 5 Repair in Melbourne?
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
              href="/apple-watch-repair-melbourne"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-primary transition-colors"
            >
              All Apple Watch Repairs
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
