import type { Metadata } from 'next'
import Link from 'next/link'
import { business } from '@/data'

export const metadata: Metadata = {
  title: 'iPhone Motherboard Data Recovery Melbourne | iTech Repairs',
  description: 'Data recovery from failed iPhone motherboard in Melbourne. Logic board data recovery specialists. Micro-soldering experts. No data, no fee.',
  alternates: { canonical: 'https://www.itechrepairs.com.au/iphone-motherboard-data-recovery' },
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
            <Link href="/data-recovery-melbourne" className="hover:text-white">Data Recovery Melbourne</Link>
            <span>/</span>
            <span className="text-white">iPhone Motherboard Data Recovery</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4">
            iPhone Motherboard Data Recovery Melbourne
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mb-6 leading-relaxed">
            When your iPhone logic board has failed, data recovery requires specialist micro-soldering skills and professional tools. iTech Repairs Melbourne is a logic board data recovery specialist — we recover data from iPhones that other repair shops cannot. No data, no fee.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-primary/20 border border-primary/40 text-primary-light text-xs font-semibold px-3 py-1.5 rounded-full">Micro-Soldering Specialists</span>
            <span className="bg-primary/20 border border-primary/40 text-primary-light text-xs font-semibold px-3 py-1.5 rounded-full">Logic Board Recovery</span>
            <span className="bg-primary/20 border border-primary/40 text-primary-light text-xs font-semibold px-3 py-1.5 rounded-full">No Data, No Fee</span>
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

      {/* What We Do */}
      <section className="py-12 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Logic Board Failure Scenarios We Recover From</h2>
              <ul className="space-y-2">
                {[
                  'iPhone will not turn on despite new battery and charging port',
                  'Logic board short-circuit from water damage',
                  'PMIC (power management IC) failure',
                  'CPU or NAND damage from a severe drop',
                  'Corroded board contacts after liquid exposure',
                  'U2 / Tristar charging IC failure',
                  'Board showing no power draw on multimeter',
                  'iPhone boots to Apple logo then shuts off repeatedly',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-gray-700">
                    <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Motherboard Recovery Techniques</h2>
              <ul className="space-y-2">
                {[
                  'Ultrasonic board cleaning to remove corrosion',
                  'Micro-soldering for damaged IC chips and pads',
                  'Hot air rework for BGA chip reballing',
                  'Component-level diagnosis with oscilloscope and multimeter',
                  'NAND chip-off recovery for severely damaged boards',
                  'Logic board schematic-level fault tracing',
                  'Board jumper wires to restore severed traces',
                  'Data transfer to new or repaired board',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-gray-700">
                    <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 bg-gray-50">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Recovery Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">1</div>
              <h3 className="font-bold text-gray-900 mb-2">Board Diagnostics</h3>
              <p className="text-gray-600 text-sm leading-relaxed">We perform component-level diagnostics to identify exactly which part of the logic board has failed and what recovery method is needed.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">2</div>
              <h3 className="font-bold text-gray-900 mb-2">Board Repair / NAND Access</h3>
              <p className="text-gray-600 text-sm leading-relaxed">We repair the board to a functional state or perform chip-level NAND access to extract data directly from the storage chip.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">3</div>
              <h3 className="font-bold text-gray-900 mb-2">Data Delivered</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Your recovered data is delivered on a USB drive. Motherboard recovery typically takes 1–3 business days depending on complexity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-white">
        <div className="container-page max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'How is motherboard data recovery different from standard data recovery?', a: 'Standard data recovery accesses the phone through software. Motherboard recovery requires physical repair of the logic board — replacing failed components, removing corrosion, or directly accessing the NAND chip. It requires micro-soldering skills and specialised tools.' },
              { q: 'How long does it take?', a: 'Motherboard data recovery typically takes 1–3 business days depending on the extent of the board damage. We will give you an estimated timeframe after our initial assessment.' },
              { q: 'What if the board is too damaged to repair?', a: 'In extreme cases where the NAND storage chip itself is physically destroyed, recovery may not be possible. We will tell you this upfront after assessment — and you pay nothing if we cannot recover your data.' },
              { q: 'How much does logic board data recovery cost?', a: 'We offer the cheapest logic board data recovery prices in Melbourne, guaranteed. Pricing is quoted individually after a free assessment as complexity varies significantly case by case.' },
            ].map(({ q, a }) => (
              <div key={q} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="py-10 bg-gray-50 border-t border-gray-100">
        <div className="container-page">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related Services</h2>
          <div className="flex flex-wrap gap-2">
            <Link href="/iphone-data-recovery" className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">iPhone Data Recovery</Link>
            <Link href="/data-recovery-melbourne" className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">Data Recovery Melbourne</Link>
            <Link href="/iphone-storage-failure-data-recovery" className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">Storage Failure Recovery</Link>
            <Link href="/iphone-water-damage-repair" className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">iPhone Water Damage Repair</Link>
            <Link href="/iphone-repair-melbourne" className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">iPhone Repair Melbourne</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-primary text-white">
        <div className="container-page text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">Logic Board Data Recovery Melbourne</h2>
          <p className="text-white/80 mb-6 text-sm">Melbourne&apos;s micro-soldering specialists. Free assessment — no data, no fee.</p>
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
