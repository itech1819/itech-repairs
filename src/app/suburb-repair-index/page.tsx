import type { Metadata } from 'next'
import Link from 'next/link'
import { suburbs } from '@/data'

export const metadata: Metadata = {
  title: 'Suburb Repair Index — iPhone Repair Across Melbourne | iTech Repairs',
  description: 'iPhone repair pages for all Melbourne suburbs. Braybrook, Footscray, Richmond, Carlton and 70+ more suburbs served by iTech Repairs — walk in, same-day service.',
  alternates: { canonical: 'https://www.itechrepairs.com.au/suburb-repair-index' },
  robots: 'index, follow',
}

export default function Page() {
  // Sort suburbs alphabetically
  const sortedSuburbs = [...suburbs].sort((a, b) => a.displayName.localeCompare(b.displayName))

  // Group by first letter
  const grouped: Record<string, typeof suburbs> = {}
  for (const suburb of sortedSuburbs) {
    const letter = suburb.displayName[0].toUpperCase()
    if (!grouped[letter]) grouped[letter] = []
    grouped[letter].push(suburb)
  }

  const letters = Object.keys(grouped).sort()

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-charcoal text-white py-10 md:py-14">
        <div className="container-page">
          <nav className="text-sm text-gray-400 mb-3 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/repair-index" className="hover:text-white">Repair Index</Link>
            <span>/</span>
            <span className="text-white">Suburb Repair Index</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl font-extrabold mb-3">iPhone Repair by Melbourne Suburb</h1>
          <p className="text-gray-300 text-sm max-w-2xl">
            We serve customers from over 76 Melbourne suburbs. Find iPhone repair pages for your suburb below — or walk in to Braybrook or Spotswood, no appointment needed.
          </p>
        </div>
      </section>

      <div className="container-page py-10">
        {/* Alphabet quick nav */}
        <div className="flex flex-wrap gap-2 mb-8">
          {letters.map(letter => (
            <a key={letter} href={`#letter-${letter}`} className="text-sm font-bold text-primary hover:underline border border-gray-200 px-2 py-1 rounded">
              {letter}
            </a>
          ))}
        </div>

        <div className="space-y-8">
          {letters.map(letter => (
            <section key={letter} id={`letter-${letter}`}>
              <h2 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">{letter}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                {grouped[letter].map(suburb => (
                  <Link
                    key={suburb.slug}
                    href={`/iphone-repair-${suburb.slug}`}
                    className="text-sm text-gray-700 hover:text-primary hover:underline border border-gray-200 px-3 py-2 rounded-lg bg-gray-50"
                  >
                    {suburb.displayName}
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-8 mt-8 border-t border-gray-200">
          <Link href="/iphone-repair-melbourne" className="text-sm text-primary hover:underline">iPhone Repair Melbourne →</Link>
          <Link href="/repair-index" className="text-sm text-primary hover:underline">Repair Index →</Link>
          <Link href="/contact" className="text-sm text-primary hover:underline">Contact Us →</Link>
        </div>
      </div>
    </div>
  )
}
