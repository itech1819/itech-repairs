import type { Metadata } from 'next'
import Link from 'next/link'
import { IPHONE_PROBLEMS } from '@/data/problems'
import { business } from '@/data'

export const metadata: Metadata = {
  title: 'iPhone Problems & Repair Guide Melbourne | iTech Repairs',
  description: 'Common iPhone problems explained — green screen, not charging, stuck on Apple logo, water damage and more. On the spot 15 minute repairs at iTech Repairs, open 7 days.',
  alternates: { canonical: 'https://www.itechrepairs.com.au/iphone-problems' },
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
            <Link href="/iphone-repair-melbourne" className="hover:text-white">iPhone Repair Melbourne</Link>
            <span>/</span>
            <span className="text-white">iPhone Problems</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4">
            iPhone Problems — Common Issues &amp; Repair Guide for Melbourne
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mb-6 leading-relaxed">
            Is your iPhone not turning on, showing a green screen, stuck on the Apple logo, or won&apos;t charge? Browse our iPhone problem guide to understand what&apos;s wrong — and how we fix it same day.
          </p>
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

      {/* Problem Cards Grid */}
      <section className="py-10 md:py-14 bg-white">
        <div className="container-page">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Common iPhone Problems We Fix</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {IPHONE_PROBLEMS.map((problem) => (
              <Link
                key={problem.slug}
                href={`/${problem.slug}`}
                className="card p-5 hover:border-primary group"
              >
                <h3 className="font-bold text-gray-900 group-hover:text-primary mb-2">{problem.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{problem.symptom}</p>
                <span className="text-primary text-sm font-semibold group-hover:underline">Fix This →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="py-10 bg-gray-50">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-4">How We Fix iPhone Problems in Melbourne</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At iTech Repairs, we diagnose and fix all iPhone problems at our Braybrook and Spotswood stores. Walk in without an appointment — we&apos;ll assess your iPhone for free and quote you before starting any work.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Most common iPhone problems including screen issues, charging faults, and battery problems are resolved same day — many in just 15–20 minutes while you wait.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Free assessment, no obligation',
                'On the spot 15 minute repairs for most problems',
                'Lifetime warranty on all repairs',
                'Cheapest prices in Melbourne guaranteed',
                'Walk in — no appointment needed',
                'All iPhone models supported',
              ].map(item => (
                <div key={item} className="flex items-center gap-2 text-gray-700 text-sm">
                  <span className="text-primary font-bold">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-10 bg-white">
        <div className="container-page">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Explore iPhone Repair Services</h2>
          <div className="flex flex-wrap gap-2">
            <Link href="/iphone-repair-melbourne" className="text-sm text-primary hover:underline border border-gray-200 px-3 py-1.5 rounded-full">
              iPhone Repair Melbourne
            </Link>
            <Link href="/iphone-repair-braybrook" className="text-sm text-primary hover:underline border border-gray-200 px-3 py-1.5 rounded-full">
              iPhone Repair Braybrook
            </Link>
            <Link href="/iphone-repair-spotswood" className="text-sm text-primary hover:underline border border-gray-200 px-3 py-1.5 rounded-full">
              iPhone Repair Spotswood
            </Link>
            <Link href="/contact" className="text-sm text-primary hover:underline border border-gray-200 px-3 py-1.5 rounded-full">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-primary text-white">
        <div className="container-page text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">Found Your iPhone Problem?</h2>
          <p className="text-white/80 mb-6 text-sm">
            Walk in today — no appointment needed. Free assessment, then we fix it while you wait.
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
