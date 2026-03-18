import type { Metadata } from 'next'
import Link from 'next/link'
import { business } from '@/data'

export const metadata: Metadata = {
  title: 'Samsung Screen Flickering Repair Melbourne | iTech Repairs',
  description: 'Samsung screen flickering or flashing? On-the-spot AMOLED screen repair at iTech Repairs Melbourne. Walk in Braybrook or Spotswood. Lifetime warranty.',
  alternates: { canonical: 'https://www.itechrepairs.com.au/samsung-screen-flickering-repair' },
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
            <span className="text-white">Samsung Screen Flickering Repair</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4">
            Samsung Screen Flickering Repair Melbourne
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mb-6 leading-relaxed">
            Samsung screen flickering, flashing, or strobing? Samsung AMOLED displays can develop flickering due to physical damage, a loose display cable, or One UI software bugs affecting the refresh rate driver. Our Melbourne technicians identify the cause and fix it on the spot — most screen replacements completed in 20–30 minutes.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-primary/20 border border-primary/40 text-primary-light text-xs font-semibold px-3 py-1.5 rounded-full">On-The-Spot Repair</span>
            <span className="bg-primary/20 border border-primary/40 text-primary-light text-xs font-semibold px-3 py-1.5 rounded-full">20–30 Minutes</span>
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
                  'Damaged AMOLED panel with failing sub-pixel layer',
                  'Loose or partially disconnected display flex cable',
                  'Physical drop damage stressing the display connector',
                  'One UI software bug affecting adaptive refresh rate (update first)',
                  'Third-party screen replacement with poor-quality AMOLED panel',
                  'Screen burn-in on older Galaxy models causing display instability',
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
                  'AMOLED screen replacement with genuine-quality Samsung display',
                  'Display flex cable inspection and reseating',
                  'One UI software update to resolve driver bugs first',
                  'Full display diagnostic before replacement',
                  'Lifetime warranty on all replacement screens',
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
            {['Galaxy S25 Ultra', 'Galaxy S24 Ultra', 'Galaxy S23+', 'Galaxy S22 Ultra', 'Galaxy S21', 'Galaxy A55', 'Galaxy A54', 'Galaxy A35', 'Galaxy Z Fold 6', 'Galaxy Z Flip 6', 'All Samsung Galaxy models'].map(model => (
              <span key={model} className="bg-white border border-gray-200 text-gray-700 text-sm px-3 py-1.5 rounded-full">{model}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="container-page">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related Samsung Services</h2>
          <div className="flex flex-wrap gap-2">
            <Link href="/samsung-repair-melbourne" className="text-sm text-primary hover:underline border border-gray-200 bg-gray-50 px-3 py-1.5 rounded-full">Samsung Repair Melbourne</Link>
            <Link href="/samsung-screen-repair" className="text-sm text-primary hover:underline border border-gray-200 bg-gray-50 px-3 py-1.5 rounded-full">Samsung Screen Repair</Link>
            <Link href="/samsung-black-screen-repair" className="text-sm text-primary hover:underline border border-gray-200 bg-gray-50 px-3 py-1.5 rounded-full">Samsung Black Screen Repair</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-primary text-white">
        <div className="container-page text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">Fix Your Samsung Screen Flickering Today</h2>
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
