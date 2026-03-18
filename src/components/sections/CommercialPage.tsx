import Link from 'next/link'
import type { CommercialPage } from '@/data/commercial'
import { business } from '@/data'

interface Props {
  page: CommercialPage
}

export default function CommercialPageComponent({ page }: Props) {
  return (
    <div>
      {/* Hero */}
      <section className="bg-charcoal text-white py-12 md:py-16">
        <div className="container-page">
          <nav className="text-sm text-gray-400 mb-4 flex flex-wrap items-center gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">{page.h1}</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3">
            {page.h1}
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mb-4">
            {page.subtitle}
          </p>
          <p className="text-gray-400 text-sm max-w-2xl mb-6 leading-relaxed">
            {page.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={business.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3 rounded-lg transition-colors text-sm sm:text-base"
            >
              Call {business.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-lg transition-colors text-sm sm:text-base"
            >
              {page.ctaText}
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-10 md:py-14 bg-white">
        <div className="container-page">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
            Why Choose iTech Repairs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {page.features.map((feature) => (
              <div key={feature.title} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-10 bg-gray-50">
        <div className="container-page">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Our Melbourne Stores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Braybrook</h3>
              <p className="text-gray-600 text-sm">16 W Central Park Ave<br />Braybrook VIC 3019</p>
              <a
                href="https://maps.google.com/?q=16+W+Central+Park+Ave+Braybrook+VIC+3019"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-xs hover:underline mt-2 inline-block"
              >
                Get Directions →
              </a>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Spotswood</h3>
              <p className="text-gray-600 text-sm">31 McLister St<br />Spotswood VIC 3015</p>
              <a
                href="https://maps.google.com/?q=31+McLister+St+Spotswood+VIC+3015"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-xs hover:underline mt-2 inline-block"
              >
                Get Directions →
              </a>
            </div>
          </div>
          <div className="text-center mt-5 text-sm text-gray-600">
            <strong>Hours:</strong> 7 Days 9am–9pm
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="py-8 bg-white border-y border-gray-100">
        <div className="container-page">
          <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-gray-700">
            <span className="flex items-center gap-2"><span className="text-primary">✓</span> Lifetime Warranty</span>
            <span className="flex items-center gap-2"><span className="text-primary">✓</span> No Appointment Needed</span>
            <span className="flex items-center gap-2"><span className="text-primary">✓</span> 15–20 Min Repairs</span>
            <span className="flex items-center gap-2"><span className="text-primary">✓</span> Cheapest Prices Guaranteed</span>
            <span className="flex items-center gap-2"><span className="text-primary">✓</span> Walk In Today</span>
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="py-10 bg-gray-50">
        <div className="container-page">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Explore Our Services</h2>
          <div className="flex flex-wrap gap-2">
            <Link href="/iphone-repair-melbourne" className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">
              iPhone Repair Melbourne
            </Link>
            <Link href="/samsung-repair-melbourne" className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">
              Samsung Repair Melbourne
            </Link>
            <Link href="/iphone-repair-braybrook" className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">
              iPhone Repair Braybrook
            </Link>
            <Link href="/iphone-repair-spotswood" className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">
              iPhone Repair Spotswood
            </Link>
            <Link href="/contact" className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-primary text-white">
        <div className="container-page text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">Ready to Get Your Phone Fixed?</h2>
          <p className="text-white/80 mb-6 text-sm">
            Walk in today — no appointment needed. Most repairs done in 15–20 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={business.phoneHref}
              className="inline-flex items-center justify-center bg-white text-primary font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors text-sm"
            >
              Call {business.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-primary transition-colors text-sm"
            >
              {page.ctaText}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
