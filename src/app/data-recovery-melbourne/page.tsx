import type { Metadata } from 'next'
import Link from 'next/link'
import { business } from '@/data'

export const metadata: Metadata = {
  title: 'Data Recovery Melbourne | iPhone & Android | Same Day | iTech Repairs',
  description: 'Professional data recovery in Melbourne for iPhone and Android. Same day recovery, 99% success rate, cheapest price guaranteed. Walk in Braybrook or Spotswood.',
  alternates: { canonical: 'https://www.itechrepairs.com.au/data-recovery-melbourne' },
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
            <span className="text-white">Data Recovery Melbourne</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4">
            Data Recovery Melbourne
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mb-6 leading-relaxed">
            Lost your photos, contacts, messages, or files? iTech Repairs is Melbourne&apos;s trusted data recovery specialist for iPhone and Android. We recover data from water-damaged phones, cracked screens, failed storage chips, and more — with a 99% success rate and a no data, no fee guarantee.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-primary/20 border border-primary/40 text-primary-light text-xs font-semibold px-3 py-1.5 rounded-full">Same Day Recovery</span>
            <span className="bg-primary/20 border border-primary/40 text-primary-light text-xs font-semibold px-3 py-1.5 rounded-full">99% Success Rate</span>
            <span className="bg-primary/20 border border-primary/40 text-primary-light text-xs font-semibold px-3 py-1.5 rounded-full">No Data, No Fee</span>
            <span className="bg-primary/20 border border-primary/40 text-primary-light text-xs font-semibold px-3 py-1.5 rounded-full">Cheapest Price Guaranteed</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={business.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3 rounded-lg transition-colors text-sm sm:text-base"
            >
              Call {business.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-lg transition-colors text-sm sm:text-base"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-page">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Data Recovery Services in Melbourne</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">We recover data from iPhones, Android phones, iPads, and tablets. Whether your device is water-damaged, has a cracked screen, or simply won&apos;t turn on, our specialists can extract your data.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/iphone-data-recovery" className="group bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-200 rounded-xl p-6 transition-colors">
              <div className="text-2xl mb-3">📱</div>
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary">iPhone Data Recovery</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Recover photos, contacts, messages and apps from all iPhone models including water-damaged and broken screen iPhones.</p>
            </Link>
            <Link href="/android-data-recovery" className="group bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-200 rounded-xl p-6 transition-colors">
              <div className="text-2xl mb-3">🤖</div>
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary">Android Data Recovery</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Samsung Galaxy, Google Pixel, and all Android phones. Recover deleted photos, contacts, messages, and more.</p>
            </Link>
            <Link href="/iphone-water-damage-data-recovery" className="group bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-200 rounded-xl p-6 transition-colors">
              <div className="text-2xl mb-3">💧</div>
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary">Water Damage Data Recovery</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Extract data from iPhones and Android phones damaged by water, swimming pools, rain, or liquid spills.</p>
            </Link>
            <Link href="/iphone-photo-recovery" className="group bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-200 rounded-xl p-6 transition-colors">
              <div className="text-2xl mb-3">🖼️</div>
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary">Photo Recovery</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Recover accidentally deleted photos, or photos lost when a phone was damaged, reset, or stolen.</p>
            </Link>
            <Link href="/iphone-motherboard-data-recovery" className="group bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-200 rounded-xl p-6 transition-colors">
              <div className="text-2xl mb-3">🔧</div>
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary">Motherboard Data Recovery</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Advanced logic board and NAND chip data recovery for devices that won&apos;t turn on due to hardware failure.</p>
            </Link>
            <Link href="/iphone-storage-failure-data-recovery" className="group bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-200 rounded-xl p-6 transition-colors">
              <div className="text-2xl mb-3">💾</div>
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary">Storage Failure Recovery</h3>
              <p className="text-gray-600 text-sm leading-relaxed">NAND flash storage failure recovery using micro-soldering techniques to access data at chip level.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 bg-gray-50">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How Our Data Recovery Process Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">1</div>
              <h3 className="font-bold text-gray-900 mb-2">Bring Your Device</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Walk in to our Braybrook or Spotswood store with your device. No appointment needed — we are open 7 days, 9am–9pm.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">2</div>
              <h3 className="font-bold text-gray-900 mb-2">Free Assessment</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Our specialist runs a free diagnostic to determine what data is recoverable and provide a fixed price quote with no surprises.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">3</div>
              <h3 className="font-bold text-gray-900 mb-2">Data Recovered</h3>
              <p className="text-gray-600 text-sm leading-relaxed">We extract your data and transfer it to a USB drive or cloud service. Same-day recovery for most cases. No data — no fee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Recover */}
      <section className="py-12 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Data We Can Recover</h2>
              <ul className="space-y-2">
                {['Photos and videos', 'Contacts and call history', 'SMS and iMessage messages', 'WhatsApp and social media chats', 'Notes and reminders', 'Voice memos and audio files', 'Documents and files', 'App data and game saves'].map(item => (
                  <li key={item} className="flex items-start gap-2 text-gray-700">
                    <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Devices We Recover From</h2>
              <ul className="space-y-2">
                {['All iPhone models (iPhone 6 through iPhone 17)', 'Samsung Galaxy S and A series', 'Google Pixel (all models)', 'iPads (all models)', 'Other Android phones and tablets', 'Water-damaged or physically broken devices', 'Devices that will not turn on', 'Factory-reset devices (limited recovery)'].map(item => (
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

      {/* FAQ */}
      <section className="py-12 bg-gray-50">
        <div className="container-page max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'How much does data recovery cost?',
                a: 'We offer the cheapest data recovery price in Melbourne, guaranteed. Standard data recovery starts from $89. Advanced cases requiring micro-soldering or chip-off recovery are quoted individually after a free assessment. You only pay if we successfully recover your data.',
              },
              {
                q: 'How long does data recovery take?',
                a: 'Most standard data recovery jobs — including deleted photo recovery and water damage extraction — are completed same day. Advanced logic board or NAND chip recovery may take 1–3 business days depending on the extent of the damage.',
              },
              {
                q: 'What is your success rate?',
                a: 'Our success rate is 99% for standard data recovery. We have recovered data from phones that were submerged in water for days, run over by cars, and completely shattered. The only cases we cannot recover from are devices with catastrophic NAND chip destruction.',
              },
              {
                q: 'Will I lose my data if you cannot recover it?',
                a: 'We never make a fault worse. If we assess your device and determine recovery is not possible, we return it to you in the same condition — and you pay nothing.',
              },
              {
                q: 'Do I need to make an appointment?',
                a: 'No appointment is needed. Walk in to either our Braybrook or Spotswood store any day of the week between 9am and 9pm and a specialist will assess your device immediately.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-primary text-white">
        <div className="container-page text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">Need Your Data Recovered Today?</h2>
          <p className="text-white/80 mb-6 text-sm max-w-xl mx-auto">
            Walk in to our Braybrook or Spotswood store. Free assessment, same-day recovery, no data — no fee.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={business.phoneHref}
              className="inline-flex items-center justify-center bg-white text-primary font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors text-sm"
            >
              Call {business.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-primary transition-colors text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
