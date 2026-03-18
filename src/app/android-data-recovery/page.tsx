import type { Metadata } from 'next'
import Link from 'next/link'
import { business } from '@/data'

export const metadata: Metadata = {
  title: 'Android Data Recovery Melbourne | Samsung & Pixel | iTech Repairs',
  description: 'Android data recovery Melbourne for Samsung Galaxy, Google Pixel and all Android phones. Recover deleted photos, contacts, messages. Same day service.',
  alternates: { canonical: 'https://www.itechrepairs.com.au/android-data-recovery' },
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
            <span className="text-white">Android Data Recovery</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4">
            Android Data Recovery Melbourne
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mb-6 leading-relaxed">
            Lost data on your Samsung Galaxy, Google Pixel, or other Android phone? iTech Repairs recovers deleted photos, contacts, messages, WhatsApp chats, and more from all Android devices. Same-day service, 99% success rate, no data — no fee.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-primary/20 border border-primary/40 text-primary-light text-xs font-semibold px-3 py-1.5 rounded-full">Same Day Recovery</span>
            <span className="bg-primary/20 border border-primary/40 text-primary-light text-xs font-semibold px-3 py-1.5 rounded-full">99% Success Rate</span>
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

      {/* What We Recover */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Can Recover from Android Phones</h2>
              <ul className="space-y-2">
                {[
                  'Deleted or lost photos and videos',
                  'Contacts and call history',
                  'SMS text messages and MMS',
                  'WhatsApp and Messenger chats',
                  'Instagram and Snapchat content',
                  'Notes, reminders and calendar events',
                  'Documents and downloaded files',
                  'App data from games and productivity apps',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-gray-700">
                    <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Android Brands We Support</h2>
              <ul className="space-y-2">
                {[
                  'Samsung Galaxy S series (S21, S22, S23, S24, S25)',
                  'Samsung Galaxy A series',
                  'Google Pixel (all models)',
                  'OnePlus',
                  'Oppo and Realme',
                  'Motorola',
                  'Huawei and Honor',
                  'Sony Xperia',
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How Android Data Recovery Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">1</div>
              <h3 className="font-bold text-gray-900 mb-2">Bring Your Android</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Walk in to our Braybrook or Spotswood store. Bring your Android phone in whatever condition it is in — working, broken, or water-damaged.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">2</div>
              <h3 className="font-bold text-gray-900 mb-2">Free Diagnostic</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Our specialist assesses what data is recoverable and gives you a fixed price quote. No surprises — you approve before we start.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">3</div>
              <h3 className="font-bold text-gray-900 mb-2">Data Recovered</h3>
              <p className="text-gray-600 text-sm leading-relaxed">We extract your data and deliver it on a USB drive or via secure cloud transfer. Most jobs are completed same day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Causes */}
      <section className="py-12 bg-white">
        <div className="container-page max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Reasons for Android Data Loss</h2>
          <ul className="space-y-2">
            {[
              'Accidental deletion of photos or contacts',
              'Factory reset without a backup',
              'Water damage to the phone',
              'Cracked screen making the phone unusable',
              'Phone stolen and remotely wiped',
              'Failed OS update corrupting user data',
              'Physical damage from a drop causing the phone not to turn on',
              'SD card failure or corruption',
            ].map(cause => (
              <li key={cause} className="flex items-start gap-2 text-gray-700">
                <span className="text-red-500 font-bold mt-0.5 flex-shrink-0">•</span>
                <span>{cause}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-gray-50">
        <div className="container-page max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'Can you recover data from a broken Android screen?', a: 'Yes. If your Android phone has a cracked or unresponsive screen but the device is still powered on, we can mirror the screen using USB debugging and extract your data without needing to touch the screen.' },
              { q: 'Can you recover data after a factory reset?', a: 'In some cases, yes. Android devices that have been factory reset do not always immediately overwrite data — our specialist tools can scan for residual data. Success rates depend on how long ago the reset occurred and what has been written to storage since.' },
              { q: 'How long does Android data recovery take?', a: 'Standard Android data recovery is completed same day in most cases. Complex jobs involving water damage or logic board faults may take 1–3 business days.' },
              { q: 'Do you recover data from Samsung phones?', a: 'Yes, Samsung Galaxy is our most common Android data recovery device. We recover from all Samsung Galaxy S, A, and Note series models.' },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="container-page">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related Services</h2>
          <div className="flex flex-wrap gap-2">
            <Link href="/data-recovery-melbourne" className="text-sm text-primary hover:underline border border-gray-200 bg-gray-50 px-3 py-1.5 rounded-full">Data Recovery Melbourne</Link>
            <Link href="/iphone-data-recovery" className="text-sm text-primary hover:underline border border-gray-200 bg-gray-50 px-3 py-1.5 rounded-full">iPhone Data Recovery</Link>
            <Link href="/samsung-data-recovery" className="text-sm text-primary hover:underline border border-gray-200 bg-gray-50 px-3 py-1.5 rounded-full">Samsung Data Recovery</Link>
            <Link href="/pixel-data-recovery" className="text-sm text-primary hover:underline border border-gray-200 bg-gray-50 px-3 py-1.5 rounded-full">Google Pixel Data Recovery</Link>
            <Link href="/iphone-water-damage-repair" className="text-sm text-primary hover:underline border border-gray-200 bg-gray-50 px-3 py-1.5 rounded-full">iPhone Water Damage Repair</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-primary text-white">
        <div className="container-page text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">Recover Your Android Data Today</h2>
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
