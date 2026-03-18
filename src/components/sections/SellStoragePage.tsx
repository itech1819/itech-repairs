import Link from 'next/link'
import type { SellStoragePage } from '@/data/sellStoragePages'
import { business } from '@/data'

interface Props {
  page: SellStoragePage
}

export default function SellStoragePageComponent({ page }: Props) {
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
            <Link href={page.modelSellHref} className="hover:text-white">Sell {page.modelName}</Link>
            <span>/</span>
            <span className="text-white">{page.storage}</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4">
            {page.h1}
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mb-2 leading-relaxed">
            {page.intro}
          </p>
          <p className="text-gray-400 text-xs mb-6">
            Indicative maximum offer. Final offer confirmed in-store after device inspection.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={business.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Call {business.phoneDisplay} — Get a Quote
            </a>
            <Link href="/how-much-is-my-iphone-worth" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
              Use Quote Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* How it works + storage value */}
      <section className="py-12 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Why Storage Size Affects Your Offer</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Higher storage capacity means your {page.modelName} is worth more. The {page.storage} model
                  is worth more than lower storage variants — and our cash offer reflects that.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We offer up to <strong className="text-green-700">${page.upToPrice.toLocaleString()}</strong> for
                  a {page.modelName} {page.storage} in excellent condition. Bring your device in for an
                  in-store inspection to get your confirmed cash offer.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">How to Sell Your {page.modelName} {page.storage}</h2>
                <ol className="space-y-4">
                  {[
                    ['Walk In', `Visit iTech Repairs at Braybrook (16 W Central Park Ave) or Spotswood (31 McLister St). No appointment needed.`],
                    ['Device Check', `Our technician inspects your ${page.modelName} ${page.storage} — screen, body, battery, and functionality.`],
                    ['Instant Cash Offer', `We provide a confirmed cash offer. If you have a better price elsewhere, show us and we'll try to beat it.`],
                    ['Same-Day Payment', `Accept and receive cash or bank transfer immediately.`],
                  ].map(([title, desc], i) => (
                    <li key={title} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">{i + 1}</div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">{title}</div>
                        <div className="text-gray-600 text-sm">{desc}</div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">Repair First to Maximise Value?</h3>
                <p className="text-gray-700 text-sm mb-3">
                  A cracked screen can significantly reduce your offer. Repairing it first may increase the resale value by more than the repair cost.
                </p>
                <Link href={page.repairHref} className="text-sm text-primary underline font-medium">
                  {page.modelName} Repair Melbourne &rarr;
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center">
                <div className="text-xs text-green-600 font-semibold uppercase tracking-wider mb-1">Max Offer</div>
                <div className="text-3xl font-extrabold text-green-700">Up to ${page.upToPrice.toLocaleString()}</div>
                <div className="text-xs text-gray-500 mt-1">{page.modelName} {page.storage} — Excellent condition</div>
              </div>
              <div className="bg-gray-surface rounded-xl p-5 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Payment Methods</h3>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Instant Cash</li>
                  <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Bank Transfer</li>
                  <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Same-Day Payment</li>
                </ul>
              </div>
              <a href={business.phoneHref} className="block text-center bg-primary text-white font-bold px-4 py-3 rounded-lg hover:bg-primary-dark transition-colors text-sm">
                Call {business.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="py-10 bg-gray-50">
        <div className="container-page">
          <h2 className="text-base font-bold text-gray-900 mb-4">Related Pages</h2>
          <div className="flex flex-wrap gap-2">
            <Link href={page.modelSellHref} className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">Sell My {page.modelName}</Link>
            <Link href="/sell-my-iphone" className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">Sell My iPhone</Link>
            <Link href="/cash-for-iphone-melbourne" className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">Cash for iPhone Melbourne</Link>
            <Link href="/iphone-buyback-prices" className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">iPhone Buyback Prices</Link>
            <Link href="/how-much-is-my-iphone-worth" className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">iPhone Quote Calculator</Link>
            <Link href={page.repairHref} className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">{page.modelName} Repair</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-primary text-white">
        <div className="container-page text-center">
          <h2 className="text-xl font-bold mb-3">Sell Your {page.modelName} {page.storage} Today</h2>
          <p className="text-white/80 mb-5 text-sm">Walk in to Braybrook or Spotswood &mdash; no appointment needed. Instant cash on the spot.</p>
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
