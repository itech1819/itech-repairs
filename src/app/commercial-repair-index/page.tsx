import type { Metadata } from 'next'
import Link from 'next/link'
import { COMMERCIAL_PAGES } from '@/data/commercial'

export const metadata: Metadata = {
  title: 'Commercial Repair Index — Fast, Cheap, On The Spot iPhone Repair | iTech Repairs',
  description: 'Index of all commercial intent repair pages — cheap iPhone repair, on the spot 15 minute repairs, walk-in, emergency, fast and affordable phone repair Melbourne.',
  alternates: { canonical: 'https://www.itechrepairs.com.au/commercial-repair-index' },
  robots: 'index, follow',
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-charcoal text-white py-10 md:py-14">
        <div className="container-page">
          <nav className="text-sm text-gray-400 mb-3 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/repair-index" className="hover:text-white">Repair Index</Link>
            <span>/</span>
            <span className="text-white">Commercial Repair Index</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl font-extrabold mb-3">Commercial Repair Index</h1>
          <p className="text-gray-300 text-sm max-w-2xl">
            Cheap, fast, same-day, walk-in and emergency phone repair pages for Melbourne.
          </p>
        </div>
      </section>

      <div className="container-page py-10 space-y-10">
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-4">All Commercial Repair Pages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {COMMERCIAL_PAGES.map(p => (
              <Link key={p.slug} href={`/${p.slug}`} className="card p-4 hover:border-primary group">
                <div className="font-semibold text-gray-900 group-hover:text-primary mb-1">{p.h1}</div>
                <div className="text-gray-500 text-sm">{p.subtitle}</div>
              </Link>
            ))}
          </div>
        </section>

        <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
          <Link href="/iphone-repair-melbourne" className="text-sm text-primary hover:underline">iPhone Repair Melbourne →</Link>
          <Link href="/repair-index" className="text-sm text-primary hover:underline">Repair Index →</Link>
          <Link href="/contact" className="text-sm text-primary hover:underline">Contact Us →</Link>
        </div>
      </div>
    </div>
  )
}
