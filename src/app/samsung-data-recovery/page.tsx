import type { Metadata } from 'next'
import Link from 'next/link'
import { business } from '@/data'

export const metadata: Metadata = {
  title: 'Samsung Data Recovery Melbourne | iTech Repairs',
  description: 'Samsung data recovery Melbourne — recover photos, contacts and messages from Samsung Galaxy phones. Water damage, broken screen, factory reset. Same day service.',
  alternates: { canonical: 'https://www.itechrepairs.com.au/samsung-data-recovery' },
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
            <span className="text-white">Samsung Data Recovery</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4">
            Samsung Data Recovery Melbourne
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mb-6 leading-relaxed">
            Lost data on your Samsung Galaxy? Whether your screen is smashed, phone won&apos;t turn on, was water-damaged, or accidentally factory reset — iTech Repairs Melbourne recovers photos, contacts, messages, and WhatsApp chats from all Samsung Galaxy models. Same-day service, 99% success rate, no data — no fee.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-primary/20 border border-primary/40 text-primary-light text-xs font-semibold px-3 py-1.5 rounded-full">Same Day Recovery</span>
            <span className="bg-primary/20 border border-primary/40 text-primary-light text-xs font-semibold px-3 py-1.5 rounded-full">99% Success Rate</span>
            <span className="bg-primary/20 border border-primary/40 text-primary-light text-xs font-semibold px-3 py-1.5 rounded-full">No Data, No Fee</span>
            <span className="bg-primary/20 border border-primary/40 text-primary-light text-xs font-semibold px-3 py-1.5 rounded-full">All Samsung Galaxy Models</span>
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
                  'Photos and videos from Samsung Gallery',
                  'Contacts and call history',
                  'SMS and MMS messages',
                  'WhatsApp, Messenger, and Telegram chats',
                  'Samsung Notes and calendar events',
                  'Documents and downloaded files',
                  'App data and game saves',
                  'Voice recordings and audio files',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-gray-700">
                    <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Samsung Recovery Scenarios</h2>
              <ul className="space-y-2">
                {[
                  'Cracked or smashed Samsung screen making phone inaccessible',
                  'Samsung that will not turn on or is stuck on Samsung logo',
                  'Water-damaged Samsung Galaxy phone',
                  'Samsung factory reset without a backup',
                  'Samsung boot loop preventing access to data',
                  'Failed One UI update wiping data',
                  'Stolen Samsung that was remotely wiped',
                  'UFS storage chip failure on Samsung Galaxy',
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Samsung Recovery Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">1</div>
              <h3 className="font-bold text-gray-900 mb-2">Bring Your Samsung</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Walk in to Braybrook or Spotswood — no appointment needed. Bring your Samsung in any condition.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">2</div>
              <h3 className="font-bold text-gray-900 mb-2">Free Assessment</h3>
              <p className="text-gray-600 text-sm leading-relaxed">We diagnose what data is recoverable and provide a fixed quote. You approve before we start any work.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">3</div>
              <h3 className="font-bold text-gray-900 mb-2">Data Delivered</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Your data is transferred to a USB drive or your new phone. Most Samsung jobs are completed same day.</p>
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
              { q: 'Can you recover data from a Samsung with a broken screen?', a: 'Yes. If your Samsung Galaxy has a cracked or unresponsive screen but the phone is still powered on, we can use USB debugging to mirror the screen and extract all your data without needing the touchscreen to work.' },
              { q: 'Can you recover data after a Samsung factory reset?', a: 'In some cases yes. Samsung uses encrypted UFS storage, which makes post-reset recovery more challenging than on older devices, but residual data may still be recoverable within a short window after the reset.' },
              { q: 'Do you recover data from Samsung Galaxy Z Fold and Flip?', a: 'Yes. We recover data from all Samsung Galaxy models including the Z Fold and Z Flip foldable series.' },
              { q: 'How much does Samsung data recovery cost?', a: 'Pricing starts from $89 and is confirmed after a free assessment. No data recovered — no fee charged.' },
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
            <Link href="/samsung-repair-melbourne" className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">Samsung Repair Melbourne</Link>
            <Link href="/data-recovery-melbourne" className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">Data Recovery Melbourne</Link>
            <Link href="/android-data-recovery" className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">Android Data Recovery</Link>
            <Link href="/samsung-water-damage-repair" className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">Samsung Water Damage Repair</Link>
            <Link href="/samsung-screen-repair" className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">Samsung Screen Repair</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-primary text-white">
        <div className="container-page text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">Recover Your Samsung Data Today</h2>
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
