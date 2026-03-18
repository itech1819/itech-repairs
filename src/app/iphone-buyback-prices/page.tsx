import type { Metadata } from 'next'
import Link from 'next/link'
import { BUYBACK_MODELS, CONDITION_BANDS } from '@/data/buybackPricing'
import { business } from '@/data'

export const metadata: Metadata = {
  title: 'iPhone Buyback Prices Melbourne – Highest Prices Paid | iTech Repairs',
  description:
    'See the latest iPhone buyback prices in Melbourne. Get instant cash offers for used, brand new or sealed iPhones with some of the highest prices paid.',
  alternates: { canonical: 'https://www.itechrepairs.com.au/iphone-buyback-prices' },
  robots: 'index, follow',
}

// Top models to show in the price table
const TABLE_MODELS = [
  { name: 'iPhone 17 Pro Max', upTo: 2000 },
  { name: 'iPhone 17 Pro', upTo: 1810 },
  { name: 'iPhone Air', upTo: 1400 },
  { name: 'iPhone 17', upTo: 1200 },
  { name: 'iPhone 16 Pro Max', upTo: 1460 },
  { name: 'iPhone 16 Pro', upTo: 1260 },
  { name: 'iPhone 16 Plus', upTo: 955 },
  { name: 'iPhone 16', upTo: 905 },
  { name: 'iPhone 16e', upTo: 610 },
  { name: 'iPhone 15 Pro Max', upTo: 1040 },
  { name: 'iPhone 15 Pro', upTo: 920 },
  { name: 'iPhone 15 Plus', upTo: 810 },
  { name: 'iPhone 15', upTo: 720 },
  { name: 'iPhone 14 Pro Max', upTo: 660 },
  { name: 'iPhone 14 Pro', upTo: 545 },
  { name: 'iPhone 14', upTo: 385 },
  { name: 'iPhone 13 Pro Max', upTo: 460 },
  { name: 'iPhone 13 Pro', upTo: 375 },
  { name: 'iPhone 13', upTo: 300 },
  { name: 'iPhone 12 Pro Max', upTo: 265 },
  { name: 'iPhone 12', upTo: 170 },
  { name: 'iPhone 11 Pro Max', upTo: 145 },
  { name: 'iPhone 11', upTo: 95 },
]

export default function IphoneBuybackPricesPage() {
  return (
    <div>
      {/* Hero + above-fold CTA */}
      <section className="bg-charcoal text-white py-12 md:py-16">
        <div className="container-page">
          <nav className="text-sm text-gray-400 mb-4 flex flex-wrap items-center gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/sell-my-iphone" className="hover:text-white">Sell My iPhone</Link>
            <span>/</span>
            <span className="text-white">iPhone Buyback Prices</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4">
            iPhone Buyback Prices Melbourne
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mb-3 leading-relaxed">
            See our latest iPhone buyback price guide. iTech Repairs pays some of the highest prices
            for iPhones in Melbourne — new, used, cracked, or sealed.
          </p>
          <p className="text-gray-400 text-xs mb-6">
            Prices shown are indicative maximum offers for devices in excellent condition.
            Final offers confirmed after in-store inspection.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={business.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Call {business.phoneDisplay} — Get a Quote
            </a>
            <Link
              href="/how-much-is-my-iphone-worth"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Use the Quote Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* Price table */}
      <section className="py-12 bg-white">
        <div className="container-page">
          <h2 className="text-xl font-bold text-gray-900 mb-2">iPhone Buyback Price Guide</h2>
          <p className="text-gray-500 text-sm mb-6">
            Maximum cash offers for devices in excellent condition, base storage.
            Higher storage and sealed/new devices attract higher offers.
          </p>

          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-5 py-3.5 font-semibold text-gray-700">iPhone Model</th>
                  <th className="text-right px-5 py-3.5 font-semibold text-gray-700">Max Cash Offer</th>
                  <th className="text-center px-5 py-3.5 font-semibold text-gray-700 hidden sm:table-cell">Get Quote</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {TABLE_MODELS.map(({ name, upTo }, i) => (
                  <tr key={name} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                    <td className="px-5 py-3.5 font-medium text-gray-800">{name}</td>
                    <td className="px-5 py-3.5 text-right font-bold text-green-700">
                      Up to ${upTo.toLocaleString()}
                    </td>
                    <td className="px-5 py-3.5 text-center hidden sm:table-cell">
                      <Link href="/how-much-is-my-iphone-worth" className="text-xs text-primary hover:underline font-medium">
                        Get estimate →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-gray-400 mt-4">
            * All prices are indicative maximum offers for excellent condition devices with base storage.
            Final offers depend on in-store assessment of model, storage, condition, battery health, and lock status.
            Prices updated March 2026.
          </p>
        </div>
      </section>

      {/* Condition impact */}
      <section className="py-12 bg-gray-50">
        <div className="container-page">
          <h2 className="text-xl font-bold text-gray-900 mb-2">How Condition Affects Your Offer</h2>
          <p className="text-gray-500 text-sm mb-6">
            Device condition is one of the biggest factors in your cash offer.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CONDITION_BANDS.map((band) => (
              <div key={band.condition} className="bg-white rounded-xl p-4 border border-gray-200">
                <div className="font-semibold text-gray-900 text-sm mb-1">{band.label}</div>
                <div className="text-gray-500 text-xs mb-2">{band.description}</div>
                <div className="text-primary text-sm font-bold">
                  {band.multiplier >= 1
                    ? `Premium offer (+${Math.round((band.multiplier - 1) * 100)}%)`
                    : band.multiplier === 1
                    ? 'Standard excellent rate'
                    : `~${Math.round(band.multiplier * 100)}% of excellent rate`}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to sell */}
      <section className="py-12 bg-white">
        <div className="container-page max-w-3xl">
          <h2 className="text-xl font-bold text-gray-900 mb-6">How to Sell Your iPhone at iTech Repairs</h2>
          <ol className="space-y-5">
            {[
              ['Walk In', 'Visit our Braybrook (16 W Central Park Ave) or Spotswood (31 McLister St) store. No appointment needed.'],
              ['Device Assessment', 'Our technician assesses your iPhone — model, storage, condition, battery health, and lock status.'],
              ['Instant Cash Offer', 'We provide a cash offer on the spot. If you have a better offer elsewhere, show us and we will try to beat it.'],
              ['Same-Day Payment', 'Accept the offer and receive cash or bank transfer payment immediately.'],
            ].map(([title, desc], i) => (
              <li key={title} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{title}</div>
                  <div className="text-gray-600 text-sm">{desc}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Related links */}
      <section className="py-10 bg-gray-50">
        <div className="container-page">
          <h2 className="text-base font-bold text-gray-900 mb-4">Related Sell Pages</h2>
          <div className="flex flex-wrap gap-2">
            {[
              ['/sell-my-iphone', 'Sell My iPhone'],
              ['/cash-for-iphone-melbourne', 'Cash for iPhone Melbourne'],
              ['/sell-sealed-iphone', 'Sell Sealed iPhone'],
              ['/sell-brand-new-iphone-17-pro-max', 'Sell iPhone 17 Pro Max'],
              ['/how-much-is-my-iphone-worth', 'iPhone Quote Calculator'],
              ['/iphone-buyers-melbourne', 'iPhone Buyers Melbourne'],
              ['/sell-broken-iphone', 'Sell Broken iPhone'],
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
          <h2 className="text-xl font-bold mb-3">Get Your Instant iPhone Quote Today</h2>
          <p className="text-white/80 mb-5 text-sm">Walk in to Braybrook or Spotswood &mdash; no appointment needed. Cash paid on the spot.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={business.phoneHref} className="inline-flex items-center justify-center bg-white text-primary font-bold px-6 py-3 rounded-lg hover:bg-gray-100 text-sm">
              Call {business.phoneDisplay}
            </a>
            <Link href="/how-much-is-my-iphone-worth" className="inline-flex items-center justify-center border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-primary text-sm">
              Use Quote Calculator
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
