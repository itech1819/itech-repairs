import type { Metadata } from 'next'
import Link from 'next/link'
import { business } from '@/data'

export const metadata: Metadata = {
  title: 'Samsung Black Screen Repair Melbourne | iTech Repairs',
  description: 'Samsung screen gone black but phone is still on? On-the-spot Samsung screen repair at iTech Repairs Melbourne. Walk in Braybrook or Spotswood. Lifetime warranty.',
  alternates: { canonical: 'https://www.itechrepairs.com.au/samsung-black-screen-repair' },
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
            <span className="text-white">Samsung Black Screen Repair</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4">
            Samsung Black Screen Repair Melbourne
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mb-6 leading-relaxed">
            Samsung phone showing a black screen but still vibrating, ringing, or making sounds? This is almost always a display fault — a failed AMOLED panel, a loose display ribbon cable, or damage from a drop. Our Melbourne technicians diagnose and replace Samsung screens on the spot in 15–30 minutes.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-primary/20 border border-primary/40 text-primary-light text-xs font-semibold px-3 py-1.5 rounded-full">On-The-Spot Repair</span>
            <span className="bg-primary/20 border border-primary/40 text-primary-light text-xs font-semibold px-3 py-1.5 rounded-full">15–30 Minutes</span>
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
                  'Failed Samsung AMOLED display panel after a drop',
                  'Loose or damaged display flex cable on Samsung Galaxy',
                  'Impact damage cracking the display backlight layer',
                  'One UI software crash causing a black screen freeze',
                  'Water damage reaching the Samsung display assembly',
                  'Burn-in damage on older AMOLED screens progressing to failure',
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
                  'Display ribbon cable inspection and reseating',
                  'Force restart — hold Volume Down + Power for 10 seconds',
                  'Full hardware diagnostics to identify root cause',
                  'Same-day on-the-spot repair with lifetime warranty',
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
            {['Galaxy S25 Ultra', 'Galaxy S24 Ultra', 'Galaxy S23 Ultra', 'Galaxy S22+', 'Galaxy S21 FE', 'Galaxy A55', 'Galaxy A54', 'Galaxy A35', 'Galaxy A14', 'Galaxy Z Fold 6', 'Galaxy Z Flip 6', 'All Samsung Galaxy models'].map(model => (
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
            <Link href="/samsung-water-damage-repair" className="text-sm text-primary hover:underline border border-gray-200 bg-gray-50 px-3 py-1.5 rounded-full">Samsung Water Damage Repair</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-primary text-white">
        <div className="container-page text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">Fix Your Samsung Black Screen Today</h2>
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
