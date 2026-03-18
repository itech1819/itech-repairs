import type { Metadata } from 'next'
import Link from 'next/link'
import { business, primaryLocation } from '@/data'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'

export const metadata: Metadata = {
  title: 'Apple Watch Ultra 2 Repair Melbourne',
  description:
    'Apple Watch Ultra 2 repair in Melbourne. Screen repair, battery replacement and diagnostics for the Ultra 2 49mm model. Lifetime warranty. Walk in Braybrook or Spotswood.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/apple-watch-ultra-2-repair',
  },
  openGraph: {
    title: 'Apple Watch Ultra 2 Repair Melbourne',
    description: 'Apple Watch Ultra 2 repair in Melbourne. Screen repair, battery replacement and diagnostics for the Ultra 2 49mm model. Lifetime warranty. Walk in Braybrook or Spotswood.',
    url: 'https://www.itechrepairs.com.au/apple-watch-ultra-2-repair',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const repairServices = [
  { name: 'Screen Repair', desc: 'Cracked Ultra 2 Micro LED display? Assessed and repaired.', href: '/apple-watch-ultra-2-screen-repair', price: 'From $149' },
  { name: 'Battery Replacement', desc: 'Ultra 2 battery draining early? We assess and replace.', href: '/apple-watch-ultra-2-battery-replacement', price: 'From $99' },
  { name: 'Charging Issues', desc: 'Apple Watch Ultra 2 not charging? Free diagnostic included.', href: '/apple-watch-ultra-2-charging-port-repair', price: 'Free check' },
  { name: 'Water Damage', desc: 'Free water damage assessment and corrosion cleaning.', href: '/apple-watch-ultra-2-water-damage-repair', price: 'Free check' },
  { name: 'Free Diagnostic', desc: 'Full device assessment with written quote, no obligation.', href: '/apple-watch-ultra-2-free-device-inspection', price: 'Free' },
  { name: 'Get a Quote', desc: 'Describe your issue and get a fast response.', href: '/contact', price: 'Free' },
]

export default function AppleWatchUltra2RepairPage() {
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
            <li className="text-charcoal font-medium">Ultra 2</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Apple Watch Ultra 2 Repair Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Screen Repair · Battery Replacement · Free Diagnostic · Lifetime Warranty
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Expert Apple Watch Ultra 2 repair in Melbourne. The Ultra 2 brings a brighter 3000-nit display and the S9 chip in the same rugged 49mm titanium case. We assess and repair Ultra 2 screens, batteries, and charging issues. Walk in for a free diagnostic.
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
              { label: 'Free', sub: 'Diagnostic' },
              { label: 'Same Day', sub: 'Most Repairs' },
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

      {/* Repair Services Grid */}
      <section className="section-padding">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Apple Watch Ultra 2 Repair Services
            </h2>
            <p className="text-charcoal-light text-lg">
              All repair services available for Apple Watch Ultra 2.
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
            <h2 className="text-3xl font-bold text-charcoal mb-4">About Apple Watch Ultra 2</h2>
            <p className="text-charcoal-light leading-relaxed mb-4">
              The Apple Watch Ultra 2, released in 2023, upgraded the original Ultra with the S9 chip, a brighter 3000-nit display with Double Tap gesture support, and improved precision dual-frequency GPS. It retains the same rugged 49mm titanium case with flat sapphire-crystal display.
            </p>
            <p className="text-charcoal-light leading-relaxed">
              The Ultra 2 is a high-value watch and repairs should be performed by experienced technicians with quality parts. We offer a free diagnostic and written quote before any repair work begins, with a lifetime warranty on all repairs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary text-white py-16">
        <div className="container-page text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Apple Watch Ultra 2 Repair in Melbourne?
          </h2>
          <p className="text-lg text-red-100 mb-8 max-w-xl mx-auto">
            Walk in to our Braybrook or Spotswood store for a free diagnostic. Lifetime warranty on all repairs.
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
