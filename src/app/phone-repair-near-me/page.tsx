import type { Metadata } from 'next'
import Link from 'next/link'
import { business, primaryLocation } from '@/data'
import { generateFAQSchema } from '@/lib/seo'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'

export const metadata: Metadata = {
  title: "Phone Repair Near Me Melbourne | Walk In — No Appointment",
  description:
    "Looking for phone repair near you in Melbourne? iTech Repairs in Braybrook and Spotswood offers walk-in iPhone, Samsung and iPad repair. Same-day. Lifetime warranty.",
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/phone-repair-near-me',
  },
  openGraph: {
    title: "Phone Repair Near Me Melbourne | Walk In — No Appointment",
    description: "Looking for phone repair near you in Melbourne? iTech Repairs in Braybrook and Spotswood offers walk-in iPhone, Samsung and iPad repair. Same-day. Lifetime warranty.",
    url: 'https://www.itechrepairs.com.au/phone-repair-near-me',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: "Phone Repair Near Me — Melbourne's West",
  description:
    "Walk-in phone repair in Melbourne's western suburbs. iPhone, Samsung and iPad repair at Braybrook and Spotswood. Same-day service with lifetime warranty.",
  provider: {
    '@type': 'RepairShop',
    name: business.name,
    telephone: business.phone,
  },
  areaServed: { '@type': 'City', name: 'Melbourne' },
  serviceType: 'Mobile Phone Repair',
  offers: {
    '@type': 'Offer',
    price: '79',
    priceCurrency: 'AUD',
  },
}

const faqs = [
  {
    question: 'Where is the nearest phone repair shop?',
    answer: 'iTech Repairs has two Melbourne locations — Braybrook and Spotswood. Both stores are walk-in friendly with no appointment needed.',
    category: 'general' as const,
  },
  {
    question: 'Do you offer same-day phone repair?',
    answer: 'Yes. Most repairs including screen replacement and battery replacement are completed in 15–30 minutes on the same day.',
    category: 'general' as const,
  },
  {
    question: 'What areas do you service?',
    answer: 'We serve all of Melbourne\'s western suburbs including Footscray, Yarraville, Williamstown, Altona, Sunshine, Maidstone, Maribyrnong and surrounds.',
    category: 'general' as const,
  },
  {
    question: 'How much does phone repair cost near me?',
    answer: 'iPhone screen repair starts from $79 and battery replacement starts from $79. Walk in for a free quote with no obligation.',
    category: 'general' as const,
  },
]

const faqSchema = generateFAQSchema(faqs)

const suburbs = [
  'Braybrook',
  'Spotswood',
  'Footscray',
  'Yarraville',
  'Williamstown',
  'Altona',
  'Sunshine',
  'Maidstone',
  'Maribyrnong',
]

export default function PhoneRepairNearMePage() {
  return (
    <>
      <SchemaScript schema={[localBusinessSchema, serviceSchema, faqSchema]} />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-gray-surface border-b border-gray-border py-3">
        <div className="container-page">
          <ol className="flex items-center gap-2 text-sm text-charcoal-light">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal font-medium">Phone Repair Near Me</li>
          </ol>
        </div>
      </nav>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Phone Repair Near Me — Melbourne&apos;s West
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              From $79 · Braybrook &amp; Spotswood · Same Day · Lifetime Warranty
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Looking for phone repair near you in Melbourne? iTech Repairs has two convenient locations in Braybrook and Spotswood, serving all of Melbourne&apos;s western suburbs. Walk in any day — no appointment needed. iPhone, Samsung, iPad and MacBook repair.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+61390016199"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
              >
                Call 03 9001 6199
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-charcoal transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white border-b border-gray-border py-6">
        <div className="container-page">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { label: 'From $79', sub: 'Screen Repair' },
              { label: '15–30 Min', sub: 'Same-Day Repair' },
              { label: 'Lifetime', sub: 'Warranty' },
              { label: '2 Stores', sub: 'Melbourne West' },
            ].map((stat) => (
              <div key={stat.label} className="py-3">
                <div className="text-xl font-bold text-primary">{stat.label}</div>
                <div className="text-sm text-charcoal-light mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suburbs Served */}
      <section className="section-padding">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Suburbs We Serve
            </h2>
            <p className="text-charcoal-light text-lg mb-8 leading-relaxed">
              Our Braybrook and Spotswood stores are easily accessible from all of Melbourne&apos;s western suburbs. We&apos;re just minutes away from:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {suburbs.map((suburb) => (
                <div key={suburb} className="card p-4 text-center text-sm font-medium text-charcoal">
                  {suburb}
                </div>
              ))}
            </div>
            <p className="text-charcoal-light leading-relaxed">
              Not on the list? We&apos;re still close by. Both stores are centrally located in Melbourne&apos;s west and are accessible by car or public transport. Call us on{' '}
              <a href="tel:+61390016199" className="text-primary hover:underline font-medium">
                03 9001 6199
              </a>{' '}
              to confirm the nearest location for you.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8 text-center">
              Phone Repair Services Near You
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'iPhone Screen Repair', body: 'All iPhone models from iPhone 6 to iPhone 16 Pro Max. From $79. Done in 15–30 minutes.', href: '/iphone-screen-repair-melbourne' },
                { title: 'iPhone Battery Replacement', body: 'Restore all-day battery life. From $79. Done in 15–20 minutes.', href: '/iphone-battery-replacement' },
                { title: 'Samsung Screen Repair', body: 'All Samsung Galaxy models including S and A series. AMOLED specialists.', href: '/samsung-repair-melbourne' },
                { title: 'iPad Repair', body: 'Screen, battery, and charging port repairs for all iPad models.', href: '/ipad-repair-melbourne' },
                { title: 'MacBook Repair', body: 'Screen, battery, keyboard, and logic board repairs for MacBook and MacBook Pro.', href: '/macbook-repair-melbourne' },
                { title: 'Water Damage Repair', body: 'Free water damage assessment for all devices. No fix, no fee.', href: '/iphone-water-damage-repair-melbourne' },
              ].map((service) => (
                <Link key={service.title} href={service.href} className="card p-6 hover:border-primary group">
                  <h3 className="font-bold text-charcoal group-hover:text-primary transition-colors mb-2">{service.title}</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">{service.body}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Phone Repair Near Me FAQ
            </h2>
          </div>
          <div className="max-w-3xl mx-auto divide-y divide-gray-border">
            {faqs.map((faq) => (
              <details key={faq.question} className="py-5 group">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="font-semibold text-charcoal pr-4">{faq.question}</span>
                  <span className="text-primary flex-shrink-0 group-open:rotate-180 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-charcoal-light leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary text-white py-16">
        <div className="container-page text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Phone Repair Near You? Walk In Today.
          </h2>
          <p className="text-lg text-red-100 mb-8 max-w-xl mx-auto">
            iTech Repairs in Braybrook and Spotswood — no appointment needed. Same-day repairs from $79 with lifetime warranty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+61390016199"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl text-lg hover:bg-red-50 transition-colors"
            >
              Call 03 9001 6199
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-primary transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
