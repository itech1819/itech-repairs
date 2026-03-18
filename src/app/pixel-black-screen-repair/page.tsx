import type { Metadata } from 'next'
import Link from 'next/link'
import { business } from '@/data'

export const metadata: Metadata = {
  title: 'Google Pixel Black Screen Repair Melbourne | iTech Repairs',
  description: 'Google Pixel screen gone black but still on? On-the-spot Pixel screen repair at iTech Repairs Melbourne. Walk in Braybrook or Spotswood. Lifetime warranty.',
  alternates: { canonical: 'https://www.itechrepairs.com.au/pixel-black-screen-repair' },
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
            <Link href="/google-pixel-repair-melbourne" className="hover:text-white">Google Pixel Repair Melbourne</Link>
            <span>/</span>
            <span className="text-white">Pixel Black Screen Repair</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4">
            Google Pixel Black Screen Repair Melbourne
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mb-6 leading-relaxed">
            Google Pixel screen gone black but you can still hear calls or feel vibrations? This indicates a display fault rather than a power issue. Google Pixel OLED screens are high quality but can fail after a drop or develop faults over time. Our Melbourne technicians replace Pixel screens on the spot — most repairs completed in 20–30 minutes.
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
                  'Failed Google Pixel OLED panel after a drop',
                  'Loose display ribbon cable inside the device',
                  'Drop damage to the display backlight or connection points',
                  'Water damage reaching the Google Pixel display assembly',
                  'Android software crash causing a black-screen hang',
                  'Known Google Pixel 6/7 display fault (official Google issue)',
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
                  'OLED screen replacement with genuine-quality Pixel display',
                  'Display cable inspection and reseating',
                  'Force restart — hold Power button for 30 seconds (try first)',
                  'Full hardware diagnostics to confirm screen vs logic board',
                  'Lifetime warranty on all screen replacements',
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
          <h2 className="text-xl font-bold text-gray-900 mb-4">Google Pixel Models We Repair</h2>
          <div className="flex flex-wrap gap-2">
            {['Pixel 9 Pro XL', 'Pixel 9 Pro', 'Pixel 9', 'Pixel 8 Pro', 'Pixel 8', 'Pixel 7 Pro', 'Pixel 7a', 'Pixel 6 Pro', 'Pixel 6a', 'Pixel 5', 'All Google Pixel models'].map(model => (
              <span key={model} className="bg-white border border-gray-200 text-gray-700 text-sm px-3 py-1.5 rounded-full">{model}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="container-page">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related Pixel Services</h2>
          <div className="flex flex-wrap gap-2">
            <Link href="/google-pixel-repair-melbourne" className="text-sm text-primary hover:underline border border-gray-200 bg-gray-50 px-3 py-1.5 rounded-full">Google Pixel Repair Melbourne</Link>
            <Link href="/google-pixel-screen-repair" className="text-sm text-primary hover:underline border border-gray-200 bg-gray-50 px-3 py-1.5 rounded-full">Pixel Screen Repair</Link>
            <Link href="/google-pixel-water-damage-repair" className="text-sm text-primary hover:underline border border-gray-200 bg-gray-50 px-3 py-1.5 rounded-full">Pixel Water Damage Repair</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-primary text-white">
        <div className="container-page text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">Fix Your Pixel Black Screen Today</h2>
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
