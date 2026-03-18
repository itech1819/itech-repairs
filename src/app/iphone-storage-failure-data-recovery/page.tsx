import type { Metadata } from 'next'
import Link from 'next/link'
import { business } from '@/data'

export const metadata: Metadata = {
  title: 'iPhone Storage Failure Data Recovery Melbourne | iTech Repairs',
  description: 'Data recovery from iPhones with NAND storage failure in Melbourne. We recover data even when iPhone won\'t turn on. Specialist micro-soldering team.',
  alternates: { canonical: 'https://www.itechrepairs.com.au/iphone-storage-failure-data-recovery' },
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
            <span className="text-white">iPhone Storage Failure Data Recovery</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4">
            iPhone Storage Failure Data Recovery Melbourne
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mb-6 leading-relaxed">
            iPhone NAND flash storage failure is one of the most severe data loss scenarios — the phone will not boot, error messages indicate storage corruption, or the device is stuck on the Apple logo. iTech Repairs Melbourne specialises in NAND-level data recovery using micro-soldering and chip-off techniques. No data — no fee.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-primary/20 border border-primary/40 text-primary-light text-xs font-semibold px-3 py-1.5 rounded-full">NAND Chip Recovery</span>
            <span className="bg-primary/20 border border-primary/40 text-primary-light text-xs font-semibold px-3 py-1.5 rounded-full">Micro-Soldering Specialists</span>
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

      {/* About NAND Failure */}
      <section className="py-12 bg-white">
        <div className="container-page max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What is iPhone NAND Storage Failure?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            NAND flash storage is the chip inside your iPhone that stores all your data — photos, messages, apps, contacts, and the iOS operating system itself. Unlike a traditional hard drive, NAND has no moving parts, but it can still fail due to physical damage from drops, water ingress causing corrosion, age and write cycle exhaustion, or manufacturing defects.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            When the NAND chip fails, the iPhone cannot boot past the Apple logo, shows an &quot;iPhone unavailable&quot; or &quot;no space available&quot; error, or simply does not turn on at all despite the battery and charging port being functional.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Standard data recovery software cannot access a failed NAND chip. Recovery requires physical access to the chip via micro-soldering — either repairing the chip&apos;s connection to the board, or in the most severe cases, performing a chip-off extraction.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-12 bg-gray-50">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">NAND Failure Symptoms We Recover From</h2>
              <ul className="space-y-2">
                {[
                  'iPhone stuck on Apple logo and cannot complete boot',
                  'iTunes error 4013, 4014, or 9 during restore',
                  '"iPhone not available" or storage error messages',
                  'No service / SIM not recognized with storage corruption',
                  'iPhone won\'t turn on after a drop',
                  'Boot loop that cannot be fixed by DFU restore',
                  'Gradual slowdown then complete failure',
                  'Random data corruption — apps crashing, files missing',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-gray-700">
                    <span className="text-red-500 font-bold mt-0.5 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our NAND Recovery Methods</h2>
              <ul className="space-y-2">
                {[
                  'NAND chip re-balling — restore failed solder connections',
                  'NAND chip reflow — restore intermittent connections',
                  'Chip-off NAND extraction with specialist programmer',
                  'NAND data imaging and file system reconstruction',
                  'Logic board schematic-level repair to restore NAND access',
                  'Corrosion removal and pad restoration',
                  'Data transfer to donor board for functional access',
                  'Full data verification before delivery',
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
      <section className="py-12 bg-white">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Recovery Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">1</div>
              <h3 className="font-bold text-gray-900 mb-2">Bring Your Device</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Walk in to Braybrook or Spotswood with your iPhone in whatever state it is in. Our specialist will assess it immediately at no charge.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">2</div>
              <h3 className="font-bold text-gray-900 mb-2">NAND Diagnosis</h3>
              <p className="text-gray-600 text-sm leading-relaxed">We diagnose the extent of NAND failure and determine the best recovery method. We provide a fixed quote — you approve before we start.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">3</div>
              <h3 className="font-bold text-gray-900 mb-2">Data Delivered</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Recovered data is delivered on a USB drive. NAND recovery takes 1–5 business days depending on complexity. No data — no fee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-gray-50">
        <div className="container-page max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'Can data be recovered if iTunes gave an error 4013 or 4014?', a: 'Yes. Error 4013 and 4014 indicate a NAND communication failure during a restore attempt. In most cases the data on the chip is intact and can be recovered with the right tools.' },
              { q: 'My iPhone is stuck on the Apple logo — is this a NAND problem?', a: 'It could be. Boot loop and Apple logo freezes can be caused by NAND corruption. We diagnose the exact cause before starting recovery.' },
              { q: 'How long does NAND recovery take?', a: 'NAND storage recovery typically takes 1–3 business days. Complex chip-off cases may take up to 5 business days. We keep you updated throughout the process.' },
              { q: 'What is the success rate for NAND recovery?', a: 'Our success rate for NAND recovery depends on the type of failure. Physical solder failures have a very high success rate. Severe chip destruction may limit what is recoverable. We assess and tell you the likelihood before starting.' },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="container-page">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related Services</h2>
          <div className="flex flex-wrap gap-2">
            <Link href="/iphone-motherboard-data-recovery" className="text-sm text-primary hover:underline border border-gray-200 bg-gray-50 px-3 py-1.5 rounded-full">Motherboard Data Recovery</Link>
            <Link href="/iphone-data-recovery" className="text-sm text-primary hover:underline border border-gray-200 bg-gray-50 px-3 py-1.5 rounded-full">iPhone Data Recovery</Link>
            <Link href="/data-recovery-melbourne" className="text-sm text-primary hover:underline border border-gray-200 bg-gray-50 px-3 py-1.5 rounded-full">Data Recovery Melbourne</Link>
            <Link href="/iphone-water-damage-repair" className="text-sm text-primary hover:underline border border-gray-200 bg-gray-50 px-3 py-1.5 rounded-full">iPhone Water Damage Repair</Link>
            <Link href="/iphone-repair-melbourne" className="text-sm text-primary hover:underline border border-gray-200 bg-gray-50 px-3 py-1.5 rounded-full">iPhone Repair Melbourne</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-primary text-white">
        <div className="container-page text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">NAND Storage Recovery Melbourne</h2>
          <p className="text-white/80 mb-6 text-sm">Melbourne&apos;s NAND and micro-soldering data recovery specialists. Free assessment — no data, no fee.</p>
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
