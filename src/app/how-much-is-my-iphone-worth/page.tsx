import type { Metadata } from 'next'
import Link from 'next/link'
import IphoneQuoteCalculator from '@/components/sections/IphoneQuoteCalculator'
import { business } from '@/data'

export const metadata: Metadata = {
  title: 'How Much Is My iPhone Worth? Melbourne iPhone Valuations | iTech Repairs',
  description:
    'Wondering how much your iPhone is worth? Use our free iPhone quote calculator or walk in to iTech Repairs in Melbourne for an instant cash valuation.',
  alternates: { canonical: 'https://www.itechrepairs.com.au/how-much-is-my-iphone-worth' },
  robots: 'index, follow',
}

export default function HowMuchIsMyIphoneWorthPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-charcoal text-white py-12 md:py-16">
        <div className="container-page">
          <nav className="text-sm text-gray-400 mb-4 flex flex-wrap items-center gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/sell-my-iphone" className="hover:text-white">Sell My iPhone</Link>
            <span>/</span>
            <span className="text-white">How Much Is My iPhone Worth?</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4">
            How Much Is My iPhone Worth?
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mb-6 leading-relaxed">
            Get an instant estimate using our iPhone quote calculator — then walk in to our
            Braybrook or Spotswood stores for a confirmed cash offer on the spot.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={business.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Call {business.phoneDisplay}
            </a>
            <Link
              href="/sell-my-iphone"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Sell My iPhone
            </Link>
          </div>
        </div>
      </section>

      {/* Calculator + info */}
      <section className="py-12 bg-gray-50">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <IphoneQuoteCalculator />
            </div>
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-3">How We Calculate Your Offer</h2>
                <ul className="space-y-3 text-sm text-gray-700">
                  {[
                    ['Model & Generation', 'Newer models command higher prices.'],
                    ['Storage Capacity', 'Higher storage = higher offer, generally.'],
                    ['Screen Condition', 'Uncracked screens are worth significantly more.'],
                    ['Body Condition', 'Dents and damage reduce the offer.'],
                    ['Battery Health', 'Higher battery health increases value.'],
                    ['Lock Status', 'iCloud-locked devices receive a lower offer.'],
                  ].map(([title, desc]) => (
                    <li key={title} className="flex gap-2">
                      <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                      <span><strong>{title}</strong> — {desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">Repair First = Higher Value</h3>
                <p className="text-gray-700 text-xs leading-relaxed mb-3">
                  A cracked screen or degraded battery can significantly reduce your offer.
                  In some cases, repairing before selling increases the resale value by more than the repair cost.
                </p>
                <Link href="/iphone-repair-melbourne" className="text-xs text-primary underline font-medium">
                  iPhone Repair Melbourne &rarr;
                </Link>
              </div>
              <div className="bg-gray-surface rounded-xl p-4 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3 text-sm">Walk-In Stores</h3>
                <div className="space-y-2 text-xs text-gray-600">
                  <div><strong>Braybrook</strong> &mdash; 16 W Central Park Ave VIC 3019</div>
                  <div><strong>Spotswood</strong> &mdash; 31 McLister St VIC 3015</div>
                  <div className="text-gray-500">7 Days: 9am&ndash;9pm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What affects value */}
      <section className="py-12 bg-white">
        <div className="container-page">
          <h2 className="text-xl font-bold text-gray-900 mb-6">What Affects Your iPhone&rsquo;s Value?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Sealed or Brand New', text: 'A factory-sealed iPhone is worth the most. Brand new open-box is also highly valued.' },
              { title: 'Excellent Condition', text: 'Minor wear only — screen and body intact. Achieves close to maximum value.' },
              { title: 'Good Condition', text: 'Visible scratches but fully functional. Reduces value slightly.' },
              { title: 'Cracked Screen', text: 'A cracked screen significantly reduces the offer. Repairing first may be worthwhile.' },
              { title: 'Not Turning On', text: 'Non-functional iPhones still have parts value. We still buy them.' },
              { title: 'iCloud / Account Locked', text: 'Locked devices receive a lower offer. Unlocking first increases the value.' },
            ].map(({ title, text }) => (
              <div key={title} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <div className="font-semibold text-gray-900 text-sm mb-1">{title}</div>
                <div className="text-gray-600 text-sm">{text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-10 bg-gray-50">
        <div className="container-page">
          <h2 className="text-base font-bold text-gray-900 mb-4">Related Sell Pages</h2>
          <div className="flex flex-wrap gap-2">
            {[
              ['/sell-my-iphone', 'Sell My iPhone'],
              ['/cash-for-iphone-melbourne', 'Cash for iPhone Melbourne'],
              ['/sell-sealed-iphone', 'Sell Sealed iPhone'],
              ['/sell-brand-new-iphone-17-pro-max', 'Sell iPhone 17 Pro Max'],
              ['/iphone-buyback-prices', 'iPhone Buyback Prices'],
              ['/iphone-buyers-melbourne', 'iPhone Buyers Melbourne'],
            ].map(([href, label]) => (
              <Link key={href} href={href} className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-primary text-white">
        <div className="container-page text-center">
          <h2 className="text-xl font-bold mb-3">Ready to Sell Your iPhone?</h2>
          <p className="text-white/80 mb-5 text-sm">Walk in to Braybrook or Spotswood for an instant cash offer &mdash; no appointment needed.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={business.phoneHref} className="inline-flex items-center justify-center bg-white text-primary font-bold px-6 py-3 rounded-lg hover:bg-gray-100 text-sm">
              Call {business.phoneDisplay}
            </a>
            <Link href="/sell-my-iphone" className="inline-flex items-center justify-center border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-primary text-sm">
              Sell My iPhone
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
