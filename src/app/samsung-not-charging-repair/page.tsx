import type { Metadata } from 'next'
import Link from 'next/link'
import { business } from '@/data'

export const metadata: Metadata = {
  title: 'Samsung Not Charging Repair Melbourne | iTech Repairs',
  description: 'Samsung phone not charging? On-the-spot charging port repair and battery replacement at iTech Repairs Melbourne. Walk in Braybrook or Spotswood. Cheapest price guaranteed.',
  alternates: { canonical: 'https://www.itechrepairs.com.au/samsung-not-charging-repair' },
}

export default function Page() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-charcoal text-white py-12 md:py-16">
        <div className="container-page">
          <nav className="text-sm text-gray-400 mb-4 flex flex-wrap items-center gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/samsung-repair-melbourne" className="hover:text-white">Samsung Repair Melbourne</Link>
            <span>/</span>
            <span className="text-white">Samsung Not Charging Repair</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4">
            Samsung Not Charging Repair Melbourne
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mb-6 leading-relaxed">
            Samsung phone not charging, charging slowly, or only charging at a certain angle? These are signs of a blocked or damaged USB-C charging port, a worn battery, or a faulty cable. At iTech Repairs Melbourne, we clean, repair, or replace Samsung charging ports on the spot — most jobs completed in 15–20 minutes.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-primary/20 border border-primary/40 text-primary-light text-xs font-semibold px-3 py-1.5 rounded-full">On-The-Spot Repair</span>
            <span className="bg-primary/20 border border-primary/40 text-primary-light text-xs font-semibold px-3 py-1.5 rounded-full">15–20 Minutes</span>
            <span className="bg-primary/20 border border-primary/40 text-primary-light text-xs font-semibold px-3 py-1.5 rounded-full">Lifetime Warranty</span>
            <span className="bg-primary/20 border border-primary/40 text-primary-light text-xs font-semibold px-3 py-1.5 rounded-full">Cheapest Price Guaranteed</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={business.phoneHref} className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3 rounded-lg transition-colors text-sm sm:text-base">
              Call {business.phoneDisplay}
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-lg transition-colors text-sm sm:text-base">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Causes & Solutions */}
      <section className="py-12 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Causes</h2>
              <ul className="space-y-2">
                {[
                  'USB-C charging port blocked with pocket lint and debris',
                  'Physically damaged USB-C port from cable insertions',
                  'Faulty or non-certified Samsung charging cable',
                  'Degraded battery no longer accepting a full charge',
                  'Charging IC chip failure on the One UI logic board',
                  'Samsung Wireless charging coil damage (Galaxy S/Z models)',
                ].map(cause => (
                  <li key={cause} className="flex items-start gap-2 text-gray-700">
                    <span className="text-red-500 font-bold mt-0.5 flex-shrink-0">•</span>
                    <span>{cause}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Fix It</h2>
              <ul className="space-y-2">
                {[
                  'Free charging port cleaning — resolves most cases',
                  'USB-C charging port replacement',
                  'Battery replacement to restore charge acceptance',
                  'Cable and charger testing — upgrade to Samsung 25W charger',
                  'Logic board diagnostics for charging IC faults',
                ].map(sol => (
                  <li key={sol} className="flex items-start gap-2 text-gray-700">
                    <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span>{sol}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Models */}
      <section className="py-10 bg-gray-50">
        <div className="container-page">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Samsung Models We Repair</h2>
          <div className="flex flex-wrap gap-2">
            {['Galaxy S25 Ultra', 'Galaxy S24 Ultra', 'Galaxy S23', 'Galaxy S22', 'Galaxy S21', 'Galaxy A55', 'Galaxy A54', 'Galaxy A35', 'Galaxy A15', 'Galaxy Z Fold 6', 'Galaxy Z Flip 6', 'All Samsung Galaxy models'].map(model => (
              <span key={model} className="bg-white border border-gray-200 text-gray-700 text-sm px-3 py-1.5 rounded-full">{model}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="container-page">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related Samsung Services</h2>
          <div className="flex flex-wrap gap-2">
            <Link href="/samsung-repair-melbourne" className="text-sm text-primary hover:underline border border-gray-200 bg-gray-50 px-3 py-1.5 rounded-full">Samsung Repair Melbourne</Link>
            <Link href="/samsung-charging-port-repair" className="text-sm text-primary hover:underline border border-gray-200 bg-gray-50 px-3 py-1.5 rounded-full">Samsung Charging Port Repair</Link>
            <Link href="/samsung-battery-replacement" className="text-sm text-primary hover:underline border border-gray-200 bg-gray-50 px-3 py-1.5 rounded-full">Samsung Battery Replacement</Link>
            <Link href="/samsung-screen-repair" className="text-sm text-primary hover:underline border border-gray-200 bg-gray-50 px-3 py-1.5 rounded-full">Samsung Screen Repair</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-primary text-white">
        <div className="container-page text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">Fix Your Samsung Charging Issue Today</h2>
          <p className="text-white/80 mb-6 text-sm">Walk in — no appointment needed. Open 7 days, 9am–9pm at Braybrook and Spotswood.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={business.phoneHref} className="inline-flex items-center justify-center bg-white text-primary font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors text-sm">
              Call {business.phoneDisplay}
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-primary transition-colors text-sm">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
