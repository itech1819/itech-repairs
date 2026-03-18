import type { Metadata } from 'next'
import Link from 'next/link'
import { getRecentUpdates, formatLastUpdated, type PageCategory } from '@/data/freshness'
import { business } from '@/data'

export const metadata: Metadata = {
  title: 'Recent Updates – Melbourne Repair Pages | iTech Repairs',
  description:
    'See which repair pages, suburb pages, problem guides and repair guides have been recently updated at iTech Repairs Melbourne.',
  alternates: { canonical: 'https://www.itechrepairs.com.au/recent-updates' },
  robots: 'index, follow',
}

const CATEGORY_LABELS: Record<PageCategory, string> = {
  repair: 'Repair Page',
  model: 'Model Page',
  suburb: 'Suburb Page',
  problem: 'Problem Page',
  guide: 'Repair Guide',
  commercial: 'Commercial',
  core: 'Core Page',
}

const CATEGORY_COLOURS: Record<PageCategory, string> = {
  repair: 'bg-blue-100 text-blue-700',
  model: 'bg-indigo-100 text-indigo-700',
  suburb: 'bg-green-100 text-green-700',
  problem: 'bg-red-100 text-red-700',
  guide: 'bg-yellow-100 text-yellow-700',
  commercial: 'bg-purple-100 text-purple-700',
  core: 'bg-gray-100 text-gray-600',
}

export default function RecentUpdatesPage() {
  const all = getRecentUpdates(100)

  return (
    <div>
      {/* Header */}
      <section className="bg-charcoal text-white py-12">
        <div className="container-page">
          <nav className="text-sm text-gray-400 mb-4 flex flex-wrap items-center gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Recent Updates</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Recently Updated Pages
          </h1>
          <p className="text-gray-300 text-base max-w-2xl">
            Our repair information is regularly verified and updated by our technicians.
            Below is a log of recently updated pages across repair services, suburb pages,
            problem guides and more.
          </p>
        </div>
      </section>

      {/* Update list */}
      <section className="py-12 bg-white">
        <div className="container-page">
          <div className="divide-y divide-gray-100">
            {all.map((entry) => (
              <div key={entry.slug} className="py-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <div className="flex-1 min-w-0">
                  <Link
                    href={entry.slug}
                    className="font-semibold text-gray-900 hover:text-primary text-sm truncate block"
                  >
                    {entry.label}
                  </Link>
                  <span className="text-gray-400 text-xs">{entry.slug}</span>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full ${CATEGORY_COLOURS[entry.category]}`}
                  >
                    {CATEGORY_LABELS[entry.category]}
                  </span>
                  <span className="text-xs text-gray-500 whitespace-nowrap">
                    {formatLastUpdated(entry.lastUpdated)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {all.length === 0 && (
            <p className="text-gray-500 text-sm">No updates recorded yet.</p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-primary text-white">
        <div className="container-page text-center">
          <h2 className="text-xl font-bold mb-3">Need a Repair Today?</h2>
          <p className="text-white/80 mb-5 text-sm">
            Walk in to our Braybrook or Spotswood stores — no appointment needed.
            Most repairs completed in 15 minutes.
          </p>
          <a
            href={business.phoneHref}
            className="inline-flex items-center justify-center bg-white text-primary font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors text-sm"
          >
            Call {business.phoneDisplay}
          </a>
        </div>
      </section>
    </div>
  )
}
