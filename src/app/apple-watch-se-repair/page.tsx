import type { Metadata } from 'next'
import Link from 'next/link'
import { business, primaryLocation } from '@/data'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'

export const metadata: Metadata = {
  title: 'Apple Watch SE Repair Melbourne | Affordable Repairs',
  description:
    'Apple Watch SE repair in Melbourne. Screen repair from $149, battery replacement from $99. Affordable Apple Watch repairs with lifetime warranty. Walk in today.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/apple-watch-se-repair',
  },
  openGraph: {
    title: 'Apple Watch SE Repair Melbourne | Affordable Repairs',
    description: 'Apple Watch SE repair in Melbourne. Screen repair from $149, battery replacement from $99. Affordable Apple Watch repairs with lifetime warranty. Walk in today.',
    url: 'https://www.itechrepairs.com.au/apple-watch-se-repair',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const repairServices = [
  { name: 'Screen Repair', desc: 'Cracked Apple Watch SE display? Replaced same day.', href: '/apple-watch-se-screen-repair', price: 'From $149' },
  { name: 'Battery Replacement', desc: 'Apple Watch SE battery draining fast? Replaced in 30–45 min.', href: '/apple-watch-se-battery-replacement', price: 'From $99' },
  { name: 'Charging Issues', desc: 'Apple Watch SE not charging? Free diagnostic included.', href: '/apple-watch-se-charging-port-repair', price: 'Free check' },
  { name: 'Water Damage', desc: 'Free water damage assessment and corrosion cleaning.', href: '/apple-watch-se-water-damage-repair', price: 'Free check' },
  { name: 'Free Diagnostic', desc: 'Full device assessment with written quote, no obligation.', href: '/apple-watch-se-free-device-inspection', price: 'Free' },
  { name: 'Get a Quote', desc: 'Describe your issue and get a fast response.', href: '/contact', price: 'Free' },
]

export default function AppleWatchSERepairPage() {
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
            <li className="text-charcoal font-medium">SE</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Apple Watch SE Repair Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Screen Repair · Battery Replacement · Affordable Pricing · Lifetime Warranty
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Expert Apple Watch SE repair in Melbourne. The Apple Watch SE is Apple&apos;s affordable entry-level watch — and we keep our repair prices affordable too. Screen repair, battery replacement, and diagnostics all available with a lifetime warranty.
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
              { label: 'Affordable', sub: 'Pricing' },
              { label: 'Same Day', sub: 'Repair' },
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
              Apple Watch SE Repair Services
            </h2>
            <p className="text-charcoal-light text-lg">
              All repair services available for Apple Watch SE (1st generation).
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
            <h2 className="text-3xl font-bold text-charcoal mb-4">About Apple Watch SE (1st Generation)</h2>
            <p className="text-charcoal-light leading-relaxed mb-4">
              The Apple Watch SE, released in 2020, was Apple&apos;s first budget-friendly Apple Watch offering core features — fall detection, compass, altimeter, and heart rate monitoring — at a lower price point. Available in 40mm and 44mm, it uses the S5 chip and features an LTPO1 display.
            </p>
            <p className="text-charcoal-light leading-relaxed">
              The SE is a popular model and now several years old, making battery replacements and screen repairs increasingly common. Our technicians stock quality SE replacement parts and offer the same lifetime warranty as on higher-end models.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary text-white py-16">
        <div className="container-page text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Apple Watch SE Repair in Melbourne?
          </h2>
          <p className="text-lg text-red-100 mb-8 max-w-xl mx-auto">
            Walk in to our Braybrook or Spotswood store — no appointment needed. Affordable repairs with lifetime warranty.
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
