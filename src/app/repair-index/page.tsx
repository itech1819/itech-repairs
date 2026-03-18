import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Repair Index — All Repair Pages | iTech Repairs Melbourne',
  description: 'Browse all repair pages at iTech Repairs Melbourne — iPhone, Samsung, iPad, MacBook, Google Pixel repairs. Find repair guides by device, model, problem or suburb.',
  alternates: { canonical: 'https://www.itechrepairs.com.au/repair-index' },
  robots: 'index, follow',
}

const deviceIndexes = [
  { href: '/iphone-repair-index', label: 'iPhone Repair Index', desc: 'All iPhone models, repairs, problems and suburb pages' },
  { href: '/samsung-repair-index', label: 'Samsung Repair Index', desc: 'All Samsung Galaxy models, repairs and suburb pages' },
  { href: '/ipad-repair-index', label: 'iPad Repair Index', desc: 'All iPad models and repair types' },
  { href: '/macbook-repair-index', label: 'MacBook Repair Index', desc: 'All MacBook models and repair types' },
  { href: '/google-pixel-repair-index', label: 'Google Pixel Repair Index', desc: 'All Google Pixel models and repairs' },
  { href: '/problem-repair-index', label: 'iPhone Problem Repair Index', desc: 'iPhone problems — green screen, not charging, water damage and more' },
  { href: '/commercial-repair-index', label: 'Commercial Repair Index', desc: 'Fast, cheap, same-day and emergency repair pages' },
  { href: '/suburb-repair-index', label: 'Suburb Repair Index', desc: 'iPhone repair pages for all Melbourne suburbs' },
]

const directories = [
  { href: '/repair-directory', label: 'Full Repair Directory' },
  { href: '/iphone-repair-directory', label: 'iPhone Repair Directory' },
  { href: '/samsung-repair-directory', label: 'Samsung Repair Directory' },
  { href: '/ipad-repair-directory', label: 'iPad Repair Directory' },
  { href: '/macbook-repair-directory', label: 'MacBook Repair Directory' },
  { href: '/google-pixel-repair-directory', label: 'Google Pixel Repair Directory' },
]

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-charcoal text-white py-10 md:py-14">
        <div className="container-page">
          <h1 className="text-2xl sm:text-3xl font-extrabold mb-3">iTech Repairs — Repair Index</h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl">
            Browse all repair pages by device, model, suburb, problem type or commercial intent. Use this index to navigate the full repair service library.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container-page">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Device Repair Indexes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {deviceIndexes.map(item => (
              <Link key={item.href} href={item.href} className="card p-4 hover:border-primary group">
                <div className="font-semibold text-gray-900 group-hover:text-primary mb-1">{item.label}</div>
                <div className="text-gray-500 text-sm">{item.desc}</div>
              </Link>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-5">Repair Directories</h2>
          <div className="flex flex-wrap gap-3">
            {directories.map(item => (
              <Link key={item.href} href={item.href} className="text-sm text-primary hover:underline border border-gray-200 px-3 py-2 rounded-lg bg-gray-50">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
