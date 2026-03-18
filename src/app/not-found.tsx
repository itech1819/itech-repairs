import Link from 'next/link'
import { PHONE_DISPLAY, PHONE_NUMBER, CATEGORY_PAGE_SLUGS } from '@/lib/constants'

const categoryLinks = [
  { href: '/iphone-repair-melbourne', label: 'iPhone Repair' },
  { href: '/samsung-repair-melbourne', label: 'Samsung Repair' },
  { href: '/ipad-repair-melbourne', label: 'iPad Repair' },
  { href: '/macbook-repair-melbourne', label: 'MacBook Repair' },
  { href: '/google-pixel-repair-melbourne', label: 'Google Pixel Repair' },
]

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero section */}
      <section className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* Error code */}
          <p className="text-8xl font-extrabold text-blue-600 mb-4 leading-none">404</p>

          {/* Heading */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>

          {/* Subheading */}
          <p className="text-lg text-gray-600 mb-8">
            Sorry, we couldn&apos;t find that page. It may have been moved or no longer exists.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
            >
              Back to Homepage
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Popular categories */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
              Popular Repair Services
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {categoryLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium py-1 transition-colors"
                  >
                    <span className="text-blue-400">›</span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-blue-700 text-white py-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-2">Need help finding a repair service?</h2>
          <p className="text-blue-200 mb-6">
            Call our team directly and we&apos;ll point you in the right direction.
          </p>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-colors text-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            {PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </main>
  )
}
