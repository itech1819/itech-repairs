import Link from 'next/link'
import type { SellPage } from '@/data/sellPages'
import { business } from '@/data'
import SellQuoteForm from '@/components/ui/SellQuoteForm'

interface Props {
  page: SellPage
}

export default function SellPageComponent({ page }: Props) {
  return (
    <div>
      {/* Hero */}
      <section className="bg-charcoal text-white py-12 md:py-16">
        <div className="container-page">
          <nav className="text-sm text-gray-400 mb-4 flex flex-wrap items-center gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/sell-my-phone" className="hover:text-white">Sell My Phone</Link>
            {page.type !== 'device' && page.slug !== 'sell-my-phone' && (
              <>
                <span>/</span>
                <span className="text-white">{page.deviceName}</span>
              </>
            )}
          </nav>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4">
            {page.h1}
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mb-6 leading-relaxed">
            {page.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={business.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3 rounded-lg transition-colors text-sm sm:text-base"
            >
              Call {business.phoneDisplay} — Get a Quote
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-lg transition-colors text-sm sm:text-base"
            >
              Send Us a Message
            </Link>
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container-page">
          <div className="max-w-2xl mx-auto">
            <SellQuoteForm compact />
          </div>
        </div>
      </section>

      {/* How it works + sidebar */}
      <section className="py-10 md:py-14 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-10">

              {/* How the process works */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">How Our Buy-Back Process Works</h2>
                <ol className="space-y-4">
                  {[
                    { step: '1', title: 'Walk In', desc: 'Visit iTech Repairs at Braybrook (16 W Central Park Ave) or Spotswood (31 McLister St). No appointment needed.' },
                    { step: '2', title: 'Device Assessment', desc: 'Our technicians assess your device — checking model, condition, screen, battery, and functionality — in just a few minutes.' },
                    { step: '3', title: 'Instant Quote', desc: 'We give you an instant cash offer based on the model and condition. No hidden fees, no pressure.' },
                    { step: '4', title: 'Get Paid', desc: 'Accept the offer and receive your cash payment on the spot. Same-day, every day.' },
                  ].map(({ step, title, desc }) => (
                    <li key={step} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {step}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">{title}</div>
                        <div className="text-gray-600 text-sm mt-0.5">{desc}</div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Devices accepted */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Devices We Buy</h2>
                <ul className="space-y-2">
                  {[
                    'All iPhone models (iPhone 17 series to older iPhones)',
                    'Samsung Galaxy phones (S series, A series, Z Fold & Flip)',
                    'Google Pixel phones (all generations)',
                    'iPads (Pro, Air, Mini, and standard)',
                    'MacBooks (Air and Pro, all generations)',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Condition evaluation */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Device Condition Evaluation</h2>
                <p className="text-gray-600 text-sm mb-4">
                  We assess each device individually. The price we offer depends on:
                </p>
                <ul className="space-y-2">
                  {[
                    'Model and storage capacity',
                    'Screen condition (perfect, minor scratches, cracked, or smashed)',
                    'Body condition (marks, dents, or damage)',
                    'Functionality (powers on, charging, cameras, buttons)',
                    'Battery health percentage',
                    'Whether the device is iCloud / account locked',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="text-gray-400 mt-0.5 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Comparison table for value/comparison pages */}
              {page.type === 'value' && page.slug === 'mobile-buyers-alternative' && (
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">How We Compare</h2>
                  <p className="text-gray-600 text-sm mb-5">
                    When selling a phone in Melbourne, you have several options. Here is how iTech Repairs compares to typical alternatives:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="text-left px-4 py-3 font-semibold text-gray-700">Feature</th>
                          <th className="text-center px-4 py-3 font-semibold text-primary">iTech Repairs</th>
                          <th className="text-center px-4 py-3 font-semibold text-gray-500">Online Buyers</th>
                          <th className="text-center px-4 py-3 font-semibold text-gray-500">Carrier Trade-In</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {[
                          ['Instant cash payment', '✓', '✗', '✗ (store credit)'],
                          ['Walk-in, no appointment', '✓', '✗ (post/courier)', '✓'],
                          ['Accepts all conditions', '✓', 'Varies', 'Limited'],
                          ['Price beat guarantee', '✓', '✗', '✗'],
                          ['Same-day payment', '✓', 'Days to weeks', '✗'],
                          ['Repair also available', '✓', '✗', '✗'],
                        ].map(([feature, us, online, carrier]) => (
                          <tr key={feature} className="bg-white">
                            <td className="px-4 py-3 text-gray-700">{feature}</td>
                            <td className="px-4 py-3 text-center text-primary font-semibold">{us}</td>
                            <td className="px-4 py-3 text-center text-gray-500">{online}</td>
                            <td className="px-4 py-3 text-center text-gray-500">{carrier}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Repair before sell */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <h2 className="text-lg font-bold text-gray-900 mb-2">Repair First to Get a Higher Price?</h2>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  Repairing a cracked screen or replacing a degraded battery before selling can significantly increase the value of your device.
                  Our technicians can give you a repair quote — if the repair cost is less than the value increase, it may be worth it.
                </p>
                <div className="flex flex-wrap gap-2">
                  {page.repairLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm text-primary hover:underline border border-amber-300 bg-white px-3 py-1.5 rounded-full"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              {/* Payment */}
              <div className="bg-gray-surface rounded-xl p-5 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Payment Methods</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Instant Cash</li>
                  <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Bank Transfer</li>
                  <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Same-Day Payment</li>
                </ul>
              </div>

              {/* Locations */}
              <div className="bg-gray-surface rounded-xl p-5 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Our Stores</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-semibold">Braybrook</div>
                    <div className="text-gray-500">16 W Central Park Ave, VIC 3019</div>
                    <div className="text-gray-500">7 Days: 9am–9pm</div>
                  </div>
                  <div>
                    <div className="font-semibold">Spotswood</div>
                    <div className="text-gray-500">31 McLister St, VIC 3015</div>
                    <div className="text-gray-500">7 Days: 9am–9pm</div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <a
                href={business.phoneHref}
                className="block text-center bg-primary text-white font-bold px-4 py-3 rounded-lg hover:bg-primary-dark transition-colors text-sm"
              >
                Call {business.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="block text-center border border-gray-300 text-gray-700 font-semibold px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors text-sm"
              >
                Send a Message
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related pages */}
      <section className="py-10 bg-gray-50">
        <div className="container-page">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related Services</h2>
          <div className="flex flex-wrap gap-2">
            <Link href="/sell-my-phone" className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">
              Sell My Phone
            </Link>
            <Link href="/sell-my-iphone" className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">
              Sell My iPhone
            </Link>
            <Link href="/sell-broken-iphone" className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">
              Sell Broken iPhone
            </Link>
            <Link href="/iphone-repair-melbourne" className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">
              iPhone Repair Melbourne
            </Link>
            <Link href="/contact" className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-10 bg-primary text-white">
        <div className="container-page text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">Ready to Sell Your {page.deviceName}?</h2>
          <p className="text-white/80 mb-6 text-sm">
            Walk in to Braybrook or Spotswood today — no appointment needed.
            Get an instant cash offer in minutes.
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
              Get a Quote Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
