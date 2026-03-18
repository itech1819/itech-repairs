import type { Metadata } from 'next'
import Link from 'next/link'
import { business } from '@/data'

export const metadata: Metadata = {
  title: 'Google Pixel Data Recovery Melbourne | iTech Repairs',
  description: 'Google Pixel data recovery Melbourne — recover photos, contacts and messages from Pixel phones. Water damage, broken screen, factory reset. Same day service.',
  alternates: { canonical: 'https://www.itechrepairs.com.au/pixel-data-recovery' },
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
            <span className="text-white">Google Pixel Data Recovery</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4">
            Google Pixel Data Recovery Melbourne
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mb-6 leading-relaxed">
            Lost data on your Google Pixel? Whether your screen is broken, phone won&apos;t boot, was water-damaged, or you need to recover deleted photos — iTech Repairs Melbourne recovers data from all Google Pixel models. Same-day service, 99% success rate, no data — no fee.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-primary/20 border border-primary/40 text-primary-light text-xs font-semibold px-3 py-1.5 rounded-full">Same Day Recovery</span>
            <span className="bg-primary/20 border border-primary/40 text-primary-light text-xs font-semibold px-3 py-1.5 rounded-full">99% Success Rate</span>
            <span className="bg-primary/20 border border-primary/40 text-primary-light text-xs font-semibold px-3 py-1.5 rounded-full">No Data, No Fee</span>
            <span className="bg-primary/20 border border-primary/40 text-primary-light text-xs font-semibold px-3 py-1.5 rounded-full">All Pixel Models</span>
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

      {/* What We Recover */}
      <section className="py-12 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Can Recover</h2>
              <ul className="space-y-2">
                {[
                  'Photos and videos from Google Photos local storage',
                  'Contacts and call history',
                  'SMS and MMS messages',
                  'WhatsApp and other messaging app chats',
                  'Google Keep notes and reminders',
                  'Documents and downloaded files',
                  'App data and game progress',
                  'Voice recordings and audio',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-gray-700">
                    <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Recovery Scenarios</h2>
              <ul className="space-y-2">
                {[
                  'Google Pixel with cracked or unresponsive screen',
                  'Pixel that will not turn on or boot loop',
                  'Water-damaged Pixel phone',
                  'Accidentally deleted photos or contacts',
                  'Factory reset Pixel without Google backup',
                  'Pixel with storage failure or corruption error',
                  'Pixel with Titan M security chip fault',
                  'Lost data after Android OS update',
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Pixel Recovery Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">1</div>
              <h3 className="font-bold text-gray-900 mb-2">Bring Your Pixel</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Walk in to Braybrook or Spotswood with your Google Pixel in any condition. No appointment needed.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">2</div>
              <h3 className="font-bold text-gray-900 mb-2">Free Assessment</h3>
              <p className="text-gray-600 text-sm leading-relaxed">We assess what data is recoverable and provide a transparent fixed-price quote before starting.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">3</div>
              <h3 className="font-bold text-gray-900 mb-2">Data Delivered</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Recovered data transferred to USB or your new device. Most Pixel jobs completed same day.</p>
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
              { q: 'Can you recover data from a Pixel with a broken screen?', a: 'Yes. If the Pixel is still powered on, we use USB debugging and screen mirroring to access the device without needing the touchscreen.' },
              { q: 'Google Pixel has encrypted storage — does that affect recovery?', a: 'Google Pixel uses full-disk encryption. Recovery requires either unlocking the device with the PIN/biometric, or in advanced cases, working at the chip level. We handle both scenarios.' },
              { q: 'How long does Pixel data recovery take?', a: 'Standard Pixel data recovery is completed same day. Complex cases involving water damage or chip-level recovery may take 1–3 business days.' },
              { q: 'What if my Pixel has no Google backup?', a: 'We recover directly from the device storage regardless of whether a Google backup exists. No cloud backup is required.' },
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
            <Link href="/google-pixel-repair-melbourne" className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">Google Pixel Repair Melbourne</Link>
            <Link href="/data-recovery-melbourne" className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">Data Recovery Melbourne</Link>
            <Link href="/android-data-recovery" className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">Android Data Recovery</Link>
            <Link href="/pixel-water-damage-repair" className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">Pixel Water Damage Repair</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-primary text-white">
        <div className="container-page text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">Recover Your Google Pixel Data Today</h2>
          <p className="text-white/80 mb-6 text-sm">Walk in to Braybrook or Spotswood — open 7 days, 9am–9pm. No appointment needed.</p>
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
