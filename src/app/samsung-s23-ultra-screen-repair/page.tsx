import type { Metadata } from 'next'
import Link from 'next/link'
import { business, primaryLocation } from '@/data'
import { generateFAQSchema } from '@/lib/seo'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'

export const metadata: Metadata = {
  title: { absolute: 'Samsung S23 Ultra Screen Repair Melbourne – From $249 | 15 Min | Lifetime Warranty | iTech Repairs' },
  description:
    'Samsung S23 Ultra screen smashed? AMOLED display replaced in Melbourne from $249. 15-minute on-the-spot repair, cheapest price guaranteed, lifetime warranty. Walk in Braybrook or Spotswood — no booking needed.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/samsung-s23-ultra-screen-repair',
  },
  openGraph: {
    title: 'Samsung S23 Ultra Screen Repair Melbourne – From $249 | 15 Min | Lifetime Warranty | iTech Repairs',
    description: 'Samsung S23 Ultra screen smashed? AMOLED display replaced in Melbourne from $249. 15-minute repair, cheapest price guaranteed, lifetime warranty. Walk in today.',
    url: 'https://www.itechrepairs.com.au/samsung-s23-ultra-screen-repair',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Samsung Galaxy S23 Ultra Screen Repair Melbourne',
  description:
    'Samsung S23 Ultra screen repair in Melbourne from $249. AMOLED curved display replacement with lifetime warranty. Walk in to Braybrook or Spotswood.',
  provider: {
    '@type': 'RepairShop',
    name: business.name,
    telephone: business.phone,
  },
  areaServed: { '@type': 'City', name: 'Melbourne' },
  serviceType: 'Samsung Screen Repair',
  offers: {
    '@type': 'Offer',
    price: '249',
    priceCurrency: 'AUD',
  },
}

const faqs = [
  {
    question: 'How much does Samsung S23 Ultra screen repair cost?',
    answer: 'Samsung S23 Ultra screen repair starts from $249 in Melbourne. We provide a free quote before starting any work.',
    category: 'general' as const,
  },
  {
    question: 'How long does the repair take?',
    answer: 'Most Samsung S23 Ultra screen repairs are completed within 30–45 minutes at our Braybrook or Spotswood store.',
    category: 'general' as const,
  },
  {
    question: 'Do you fix Samsung curved screens?',
    answer: 'Yes. We specialise in curved AMOLED screen repairs including the S23 Ultra\'s distinctive curved edge display.',
    category: 'general' as const,
  },
  {
    question: 'Will my S Pen still work after screen repair?',
    answer: 'Yes. Screen replacement does not affect S Pen functionality.',
    category: 'general' as const,
  },
]

const faqSchema = generateFAQSchema(faqs)

export default function SamsungS23UltraScreenRepairPage() {
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
            <li>
              <Link href="/samsung-repair-melbourne" className="hover:text-primary transition-colors">
                Samsung Repair Melbourne
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal font-medium">Samsung S23 Ultra Screen Repair</li>
          </ol>
        </div>
      </nav>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Samsung Galaxy S23 Ultra Screen Repair Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              From $249 · Curved AMOLED Display · 30–45 Minutes · Lifetime Warranty
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Cracked or broken Samsung S23 Ultra screen? Walk in to our Braybrook or Spotswood store for a fast AMOLED screen replacement. S Pen functionality preserved. Lifetime warranty on parts and labour. No appointment needed.
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
              { label: 'From $249', sub: 'Screen Repair' },
              { label: '30–45 Min', sub: 'Turnaround' },
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

      {/* Why Choose iTech */}
      <section className="section-padding">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8 text-center">
              Why Choose iTech Repairs for Samsung S23 Ultra Screen?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Curved Screen Specialists', body: 'We specialise in curved AMOLED screen repairs including the S23 Ultra\'s distinctive curved edge display.' },
                { title: 'Lifetime Warranty', body: 'Every screen repair comes with a lifetime warranty on parts and labour — no questions asked.' },
                { title: 'S Pen Preserved', body: 'Screen replacement does not affect S Pen functionality. All features remain fully operational.' },
                { title: 'AMOLED Quality', body: 'We use high-quality AMOLED replacement panels that restore the S23 Ultra\'s vivid display and colour accuracy.' },
                { title: 'Fast 30-Minute Service', body: 'Most S23 Ultra screen repairs are completed in 30–45 minutes while you wait in-store.' },
                { title: 'Walk-ins Welcome', body: 'No appointment needed. Visit our Braybrook or Spotswood store any day.' },
              ].map((point) => (
                <div key={point.title} className="p-6 rounded-xl bg-white border border-gray-border">
                  <h3 className="font-bold text-charcoal mb-2">{point.title}</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">{point.body}</p>
                </div>
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
              Samsung S23 Ultra Screen Repair FAQ
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
            <h2 className="text-2xl font-bold text-charcoal mb-4">Related Samsung Repair Services</h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/samsung-repair-melbourne" className="px-4 py-2 bg-white hover:bg-primary hover:text-white border border-gray-border rounded-full text-sm font-medium text-charcoal transition-colors">
              Samsung Repair Melbourne
            </Link>
            <Link href="/iphone-repair-melbourne" className="px-4 py-2 bg-white hover:bg-primary hover:text-white border border-gray-border rounded-full text-sm font-medium text-charcoal transition-colors">
              iPhone Repair Melbourne
            </Link>
            <Link href="/phone-repair-near-me" className="px-4 py-2 bg-white hover:bg-primary hover:text-white border border-gray-border rounded-full text-sm font-medium text-charcoal transition-colors">
              Phone Repair Near Me
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary text-white py-16">
        <div className="container-page text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cracked Samsung S23 Ultra Screen? Fix It Today.
          </h2>
          <p className="text-lg text-red-100 mb-8 max-w-xl mx-auto">
            Walk in to our Braybrook or Spotswood store — no appointment needed. Samsung S23 Ultra screen repair from $249 with a lifetime warranty.
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
