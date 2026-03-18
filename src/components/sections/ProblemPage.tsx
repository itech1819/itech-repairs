import Link from 'next/link'
import type { Problem } from '@/data/problems'
import { business } from '@/data'
import { getLastUpdated } from '@/data/freshness'
import LastUpdated from '@/components/sections/LastUpdated'

interface Props {
  problem: Problem
}

export default function ProblemPage({ problem }: Props) {
  const lastUpdated = getLastUpdated(`/${problem.slug}`)
  return (
    <div>
      {/* Hero */}
      <section className="bg-charcoal text-white py-12 md:py-16">
        <div className="container-page">
          <nav className="text-sm text-gray-400 mb-4 flex flex-wrap items-center gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/iphone-repair-melbourne" className="hover:text-white">iPhone Repair Melbourne</Link>
            <span>/</span>
            <Link href="/iphone-problems" className="hover:text-white">iPhone Problems</Link>
            <span>/</span>
            <span className="text-white">{problem.name}</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4">
            {problem.h1}
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mb-4 leading-relaxed">
            {problem.intro}
          </p>
          {lastUpdated && (
            <div className="mb-6">
              <LastUpdated isoDate={lastUpdated} />
            </div>
          )}
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

      {/* Main content */}
      <section className="py-10 md:py-14 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Common Causes */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Common Causes</h2>
                <ul className="space-y-2">
                  {problem.causes.map((cause) => (
                    <li key={cause} className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-500 font-bold mt-0.5 flex-shrink-0">•</span>
                      <span>{cause}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* How We Fix It */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">How We Fix It</h2>
                <ul className="space-y-2">
                  {problem.solutions.map((solution) => (
                    <li key={solution} className="flex items-start gap-2 text-gray-700">
                      <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Models Affected */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Models Affected</h2>
                <div className="flex flex-wrap gap-2">
                  {problem.affectedModels.map((model) => (
                    <span
                      key={model}
                      className="bg-gray-100 text-gray-700 text-sm px-3 py-1.5 rounded-full border border-gray-200"
                    >
                      {model}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="bg-gray-surface rounded-xl p-5 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Fix This Today</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-semibold">Walk In — No Appointment</div>
                    <div className="text-gray-500">7 Days: 9am–9pm</div>
                  </div>
                  <div>
                    <div className="font-semibold">Braybrook</div>
                    <div className="text-gray-500">16 W Central Park Ave, VIC 3019</div>
                  </div>
                  <div>
                    <div className="font-semibold">Spotswood</div>
                    <div className="text-gray-500">31 McLister St, VIC 3015</div>
                  </div>
                  <a
                    href={business.phoneHref}
                    className="block text-center bg-primary text-white font-bold px-4 py-2.5 rounded-lg hover:bg-primary-dark transition-colors text-sm mt-2"
                  >
                    Call {business.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">Lifetime Warranty</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Every repair at iTech Repairs includes a lifetime warranty on parts and labour.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-10 bg-gray-50">
        <div className="container-page">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Explore iPhone Repair Services</h2>
          <div className="flex flex-wrap gap-2">
            <Link href="/iphone-repair-melbourne" className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">
              iPhone Repair Melbourne
            </Link>
            <Link href="/iphone-problems" className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">
              All iPhone Problems
            </Link>
            <Link href={problem.repairLink} className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">
              {problem.repairLinkText}
            </Link>
            <Link href="/contact" className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Sell Instead CTA */}
      <section className="py-8 bg-amber-50 border-t border-amber-100">
        <div className="container-page">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">Not Worth Repairing?</p>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Sell Your Damaged iPhone Instead</h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              If your iPhone is too damaged or the repair cost is not worth it, you can{' '}
              <a href="https://iphonebuyers.com.au/sell-damaged-iphone" className="font-semibold text-gray-800 hover:underline" target="_blank" rel="noopener">
                sell your broken iPhone for instant cash
              </a>{' '}
              instead.
            </p>
            <a
              href="https://iphonebuyers.com.au/sell-damaged-iphone"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Sell Your Damaged iPhone
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-primary text-white">
        <div className="container-page text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">Ready to Fix Your iPhone?</h2>
          <p className="text-white/80 mb-6 text-sm">
            Walk in today — no appointment needed. Most repairs done in 15–20 minutes.
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
