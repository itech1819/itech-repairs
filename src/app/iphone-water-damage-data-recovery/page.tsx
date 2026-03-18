import type { Metadata } from 'next'
import Link from 'next/link'
import { business } from '@/data'

export const metadata: Metadata = {
  title: 'iPhone Water Damage Data Recovery Melbourne | iTech Repairs',
  description: 'Recover data from a water damaged iPhone in Melbourne. Screen not working? We extract photos, messages and contacts from damaged iPhones. Same day service.',
  alternates: { canonical: 'https://www.itechrepairs.com.au/iphone-water-damage-data-recovery' },
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
            <span className="text-white">iPhone Water Damage Data Recovery</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4">
            iPhone Water Damage Data Recovery Melbourne
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mb-6 leading-relaxed">
            Dropped your iPhone in water and can&apos;t access your photos, messages, or contacts? Do NOT charge it or turn it on — bring it straight to iTech Repairs Melbourne. Our specialists recover data from water-damaged iPhones with a 99% success rate. Same-day service, no data — no fee.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-primary/20 border border-primary/40 text-primary-light text-xs font-semibold px-3 py-1.5 rounded-full">Same Day Recovery</span>
            <span className="bg-primary/20 border border-primary/40 text-primary-light text-xs font-semibold px-3 py-1.5 rounded-full">99% Success Rate</span>
            <span className="bg-primary/20 border border-primary/40 text-primary-light text-xs font-semibold px-3 py-1.5 rounded-full">No Data, No Fee</span>
            <span className="bg-primary/20 border border-primary/40 text-primary-light text-xs font-semibold px-3 py-1.5 rounded-full">Emergency Service Available</span>
          </div>
          <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-4 mb-6 max-w-xl">
            <p className="text-red-300 text-sm font-semibold mb-1">Important — Do This Now:</p>
            <p className="text-red-200 text-sm">Do NOT charge the phone. Do NOT try to turn it on. Remove it from water immediately and bring it to us as soon as possible. Speed is critical for water damage recovery.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={business.phoneHref} className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3 rounded-lg transition-colors text-sm sm:text-base">
              Call {business.phoneDisplay} Now
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-lg transition-colors text-sm sm:text-base">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* What We Can Recover */}
      <section className="py-12 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Can Recover</h2>
              <ul className="space-y-2">
                {[
                  'Photos and videos from Camera Roll',
                  'iMessage and SMS messages',
                  'Contacts and call history',
                  'WhatsApp chats and media',
                  'Notes and reminders',
                  'Voice memos and recordings',
                  'Documents and app data',
                  'Emails and calendar events',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-gray-700">
                    <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Water Damage Scenarios We Handle</h2>
              <ul className="space-y-2">
                {[
                  'iPhone dropped in toilet or bathroom sink',
                  'iPhone dropped in swimming pool or ocean',
                  'iPhone caught in heavy rain',
                  'Liquid spill onto the phone',
                  'iPhone submerged in water for extended period',
                  'iPhone that got wet and now will not turn on',
                  'iPhone with screen blackout after water exposure',
                  'iPhone with corrosion on charging port after water',
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

      {/* How It Works */}
      <section className="py-12 bg-gray-50">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Water Damage Data Recovery Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">1</div>
              <h3 className="font-bold text-gray-900 mb-2">Bring It In Immediately</h3>
              <p className="text-gray-600 text-sm leading-relaxed">The faster you bring in your water-damaged iPhone, the better the recovery chances. Walk in without an appointment — we are open 7 days.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">2</div>
              <h3 className="font-bold text-gray-900 mb-2">Ultrasonic Cleaning</h3>
              <p className="text-gray-600 text-sm leading-relaxed">We disassemble the phone, clean the logic board with ultrasonic treatment, and remove corrosion to restore functionality and access your data.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">3</div>
              <h3 className="font-bold text-gray-900 mb-2">Data Extracted</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Once the board is functional, we extract all your data and transfer it to a USB drive or your new phone. Same-day service in most cases.</p>
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
              { q: 'My iPhone was submerged for a while — is it too late?', a: 'Not necessarily. We have recovered data from iPhones submerged for hours and in some cases days. The key is not attempting to charge it or turn it on, as this causes short-circuit damage. Bring it to us as soon as possible.' },
              { q: 'My iPhone has Face ID / screen lock — can you still recover data?', a: 'Face ID or PIN-locked phones can still be recovered in most cases. Our process restores board functionality, allowing you to unlock it via Face ID or PIN and create a backup.' },
              { q: 'What if the screen is completely black from water damage?', a: 'A black screen does not mean the data is gone. We can connect the phone to an external display adapter or restore the screen to access your data.' },
              { q: 'How much does water damage data recovery cost?', a: 'Pricing depends on the extent of the damage and what recovery method is required. We provide a free assessment and fixed quote before starting. No data recovered — no fee charged.' },
            ].map(({ q, a }) => (
              <div key={q} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-10 bg-gray-50 border-t border-gray-100">
        <div className="container-page">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related Services</h2>
          <div className="flex flex-wrap gap-2">
            <Link href="/iphone-data-recovery" className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">iPhone Data Recovery</Link>
            <Link href="/data-recovery-melbourne" className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">Data Recovery Melbourne</Link>
            <Link href="/iphone-water-damage-repair" className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">iPhone Water Damage Repair</Link>
            <Link href="/iphone-repair-melbourne" className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">iPhone Repair Melbourne</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-primary text-white">
        <div className="container-page text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">Don&apos;t Wait — Bring Your Water-Damaged iPhone In Now</h2>
          <p className="text-white/80 mb-6 text-sm">Every hour matters with water damage. Walk in today — open 7 days, 9am–9pm.</p>
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
