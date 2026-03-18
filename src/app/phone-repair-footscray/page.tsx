import type { Metadata } from 'next'
import Link from 'next/link'
import { business, primaryLocation } from '@/data'
import { generateFAQSchema } from '@/lib/seo'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'

export const metadata: Metadata = {
  title: 'Phone Repair Footscray | iPhone & Samsung Repair Near You',
  description:
    'Phone repair near Footscray — iTech Repairs in Braybrook is just minutes away. iPhone, Samsung, iPad & MacBook repair. Cheapest prices guaranteed. Walk in today.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/phone-repair-footscray',
  },
  openGraph: {
    title: 'Phone Repair Footscray | iPhone & Samsung Repair Near You',
    description: 'Phone repair near Footscray — iTech Repairs in Braybrook is just minutes away. iPhone, Samsung, iPad & MacBook repair. Cheapest prices guaranteed. Walk in today.',
    url: 'https://www.itechrepairs.com.au/phone-repair-footscray',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Phone Repair Footscray',
  description:
    'Phone repair near Footscray at iTech Repairs Braybrook — just minutes away. iPhone, Samsung, iPad and MacBook repair with lifetime warranty.',
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
    question: 'Where can I get my phone repaired near Footscray?',
    answer: 'iTech Repairs in Braybrook is just minutes from Footscray. Walk in any day — no appointment needed.',
    category: 'general' as const,
  },
  {
    question: 'What phone repairs do you offer near Footscray?',
    answer: 'We repair iPhones, Samsung, iPad, MacBook and more. Services include screen replacement, battery replacement, charging port repair and water damage repair.',
    category: 'general' as const,
  },
  {
    question: 'How much does phone repair cost near Footscray?',
    answer: 'Screen repair starts from $79 and battery replacement from $79. Walk in for a free quote.',
    category: 'general' as const,
  },
]

const faqSchema = generateFAQSchema(faqs)

export default function PhoneRepairFootscrayPage() {
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
            <li className="text-charcoal font-medium">Phone Repair Footscray</li>
          </ol>
        </div>
      </nav>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Phone Repair Footscray
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              From $79 · Just Minutes from Footscray · Same Day · Lifetime Warranty
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Footscray residents — iTech Repairs in Braybrook is just a short drive away. Walk in for same-day iPhone, Samsung, iPad and MacBook repair with the cheapest prices guaranteed and lifetime warranty on every repair. No appointment needed.
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
              { label: 'Minutes Away', sub: 'From Footscray' },
              { label: 'Lifetime', sub: 'Warranty' },
              { label: 'Walk-ins', sub: 'Welcome' },
            ].map((stat) => (
              <div key={stat.label} className="py-3">
                <div className="text-xl font-bold text-primary">{stat.label}</div>
                <div className="text-sm text-charcoal-light mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Phone Repair Near Footscray — Braybrook Store
            </h2>
            <p className="text-charcoal-light text-lg mb-6 leading-relaxed">
              If you live or work in Footscray and need a phone repaired fast, our Braybrook store is just minutes away. We repair all major brands including iPhone, Samsung, iPad and MacBook with same-day turnaround and lifetime warranty on every repair.
            </p>
            <p className="text-charcoal-light text-lg mb-8 leading-relaxed">
              Footscray residents can walk in any day without an appointment. Our technicians will assess your device, provide a free quote, and have most repairs completed while you wait.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'iPhone Screen Repair', body: 'All iPhone models from iPhone 6 to iPhone 16 Pro Max. From $79.', href: '/iphone-screen-repair-melbourne' },
                { title: 'iPhone Battery Replacement', body: 'Restore battery life and performance. From $79.', href: '/iphone-battery-replacement' },
                { title: 'Samsung Screen Repair', body: 'All Samsung Galaxy models. AMOLED screen specialists.', href: '/samsung-repair-melbourne' },
                { title: 'iPad Repair', body: 'Screen, battery, and charging port repairs for all iPad models.', href: '/ipad-repair-melbourne' },
                { title: 'MacBook Repair', body: 'Screen, battery, keyboard, and logic board repairs.', href: '/macbook-repair-melbourne' },
                { title: 'Charging Port Repair', body: 'Fix charging issues for iPhone, Samsung, and iPad.', href: '/iphone-charging-port-repair' },
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
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Phone Repair Footscray FAQ
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

      {/* Related Links */}
      <section className="section-padding">
        <div className="container-page">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-charcoal mb-4">Other Nearby Repair Services</h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/phone-repair-yarraville" className="px-4 py-2 bg-white hover:bg-primary hover:text-white border border-gray-border rounded-full text-sm font-medium text-charcoal transition-colors">
              Phone Repair Yarraville
            </Link>
            <Link href="/phone-repair-near-me" className="px-4 py-2 bg-white hover:bg-primary hover:text-white border border-gray-border rounded-full text-sm font-medium text-charcoal transition-colors">
              Phone Repair Near Me
            </Link>
            <Link href="/braybrook-phone-repair" className="px-4 py-2 bg-white hover:bg-primary hover:text-white border border-gray-border rounded-full text-sm font-medium text-charcoal transition-colors">
              Braybrook Phone Repair
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary text-white py-16">
        <div className="container-page text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Phone Repair Near Footscray? Walk In Today.
          </h2>
          <p className="text-lg text-red-100 mb-8 max-w-xl mx-auto">
            iTech Repairs in Braybrook is just minutes from Footscray. No appointment needed. Same-day repairs from $79 with lifetime warranty.
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
