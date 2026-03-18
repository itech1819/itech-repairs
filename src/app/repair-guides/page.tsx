import Link from 'next/link'
import type { Metadata } from 'next'
import { repairGuides } from '@/data/repairGuides'

export const metadata: Metadata = {
  title: 'Repair Guides & Troubleshooting Tips | iTech Repairs Melbourne',
  description:
    'Expert repair guides for iPhone, Samsung, MacBook, iPad and Google Pixel. Melbourne cheapest repairs — lifetime warranty, 15 min on-the-spot service at iTech Repairs.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/repair-guides',
  },
}

const deviceLabels: Record<string, string> = {
  iphone: 'iPhone',
  samsung: 'Samsung',
  macbook: 'MacBook',
  ipad: 'iPad',
  pixel: 'Google Pixel',
  general: 'General',
}

const repairTypeLabels: Record<string, string> = {
  screen: 'Screen',
  battery: 'Battery',
  charging: 'Charging',
  camera: 'Camera',
  water: 'Water Damage',
  biometric: 'Face ID / Fingerprint',
  keyboard: 'Keyboard',
  trackpad: 'Trackpad',
  general: 'General',
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function RepairGuidesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gray-900 text-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-3">
              Repair Guides
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Phone &amp; Laptop Repair Guides
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Expert troubleshooting guides for iPhone, Samsung, MacBook, iPad and Google Pixel.
              Learn what causes common faults — and how iTech Repairs fixes them in Melbourne with a
              lifetime warranty and cheapest price guaranteed.
            </p>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-14 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {repairGuides.map((guide) => (
              <article
                key={guide.slug}
                className="flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                {/* Card top accent */}
                <div className="h-1.5 bg-red-600" />

                <div className="flex flex-col flex-1 p-6">
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-block bg-red-50 text-red-700 text-xs font-medium px-2.5 py-1 rounded-full">
                      {deviceLabels[guide.device] ?? guide.device}
                    </span>
                    <span className="inline-block bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full">
                      {repairTypeLabels[guide.repairType] ?? guide.repairType}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-gray-900 font-bold text-lg leading-snug mb-3">
                    <Link
                      href={`/repair-guides/${guide.slug}`}
                      className="hover:text-red-600 transition-colors"
                    >
                      {guide.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">
                    {guide.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <time
                      dateTime={guide.datePublished}
                      className="text-gray-400 text-xs"
                    >
                      {formatDate(guide.datePublished)}
                    </time>
                    <Link
                      href={`/repair-guides/${guide.slug}`}
                      className="text-red-600 hover:text-red-700 text-sm font-semibold transition-colors"
                    >
                      Read guide →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-14 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4">
            Ready to get your device repaired?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto mb-8">
            Walk into iTech Repairs in Melbourne — no appointment needed. Most repairs are done in
            15 minutes with a lifetime warranty and cheapest price guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+61432933273"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-7 py-3.5 rounded-full transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clipRule="evenodd"
                />
              </svg>
              Call 0432 933 273
            </a>
            <Link
              href="/iphone-repair-melbourne"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-full transition-colors border border-white/20"
            >
              View All Repair Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
