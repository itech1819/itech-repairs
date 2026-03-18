import type { Metadata } from 'next'
import Link from 'next/link'
import { business, primaryLocation } from '@/data'
import { generateFAQSchema } from '@/lib/seo'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'

export const metadata: Metadata = {
  title: 'iPhone 13 Pro Max Screen Replacement Melbourne | From $179',
  description:
    'iPhone 13 Pro Max screen replacement in Melbourne from $179. Genuine or OEM-grade OLED screen. Same-day repair at Braybrook & Spotswood. Lifetime warranty.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/iphone-13-pro-max-screen-repair',
  },
  openGraph: {
    title: 'iPhone 13 Pro Max Screen Replacement Melbourne | From $179',
    description: 'iPhone 13 Pro Max screen replacement in Melbourne from $179. Genuine or OEM-grade OLED screen. Same-day repair at Braybrook & Spotswood. Lifetime warranty.',
    url: 'https://www.itechrepairs.com.au/iphone-13-pro-max-screen-repair',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'iPhone 13 Pro Max Screen Replacement Melbourne',
  description:
    'iPhone 13 Pro Max screen replacement in Melbourne from $179. Genuine or OEM-grade OLED panel. Same-day repair at Braybrook & Spotswood with lifetime warranty.',
  provider: {
    '@type': 'RepairShop',
    name: business.name,
    telephone: business.phone,
  },
  areaServed: { '@type': 'City', name: 'Melbourne' },
  serviceType: 'iPhone Screen Replacement',
  offers: {
    '@type': 'Offer',
    price: '179',
    priceCurrency: 'AUD',
  },
}

const faqs = [
  {
    question: 'How much does iPhone 13 Pro Max screen replacement cost in Melbourne?',
    answer: 'iPhone 13 Pro Max screen replacement starts from $179. We provide a firm quote before any work begins.',
    category: 'general' as const,
  },
  {
    question: 'How long does iPhone 13 Pro Max screen replacement take?',
    answer: 'Most iPhone 13 Pro Max screen replacements are completed in 15–30 minutes while you wait.',
    category: 'general' as const,
  },
  {
    question: 'Will my Face ID still work after screen replacement?',
    answer: 'Yes. We use a screen transfer process that preserves your Face ID functionality.',
    category: 'general' as const,
  },
  {
    question: 'Do you use genuine Apple screens?',
    answer: 'We use genuine or OEM-grade OLED panels that match the original display quality, brightness, and colour accuracy.',
    category: 'general' as const,
  },
]

const faqSchema = generateFAQSchema(faqs)

export default function Iphone13ProMaxScreenRepairPage() {
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
              <Link href="/iphone-repair-melbourne" className="hover:text-primary transition-colors">
                iPhone Repair Melbourne
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal font-medium">iPhone 13 Pro Max Screen Replacement</li>
          </ol>
        </div>
      </nav>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              iPhone 13 Pro Max Screen Replacement Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              From $179 · OLED Display · 15–30 Minutes · Lifetime Warranty
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Cracked or shattered iPhone 13 Pro Max screen? Walk in to our Braybrook or Spotswood store for a fast, same-day screen replacement using genuine or OEM-grade OLED panels. Face ID preserved. Lifetime warranty included.
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
              { label: 'From $179', sub: 'Screen Replacement' },
              { label: '15–30 Min', sub: 'Turnaround' },
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
              Why Choose iTech Repairs for iPhone 13 Pro Max Screen?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Same-Day Repair', body: 'iPhone 13 Pro Max screen replacements completed in 15–30 minutes while you wait in-store.' },
                { title: 'Lifetime Warranty', body: 'Every screen replacement comes with a lifetime warranty on parts and labour — no questions asked.' },
                { title: 'Face ID Preserved', body: 'We use a careful screen transfer process to ensure your Face ID continues working after replacement.' },
                { title: 'OEM-Grade OLED Panels', body: 'We use genuine or OEM-grade OLED panels matching the original display quality, brightness, and colour accuracy.' },
                { title: 'Cheapest Price Guaranteed', body: 'From $179 — competitive pricing with no hidden fees. We provide a firm quote before starting work.' },
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
              iPhone 13 Pro Max Screen Replacement FAQ
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
            <h2 className="text-2xl font-bold text-charcoal mb-4">Related iPhone Repair Services</h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/iphone-repair-melbourne" className="px-4 py-2 bg-white hover:bg-primary hover:text-white border border-gray-border rounded-full text-sm font-medium text-charcoal transition-colors">
              iPhone Repair Melbourne
            </Link>
            <Link href="/iphone-screen-repair-melbourne" className="px-4 py-2 bg-white hover:bg-primary hover:text-white border border-gray-border rounded-full text-sm font-medium text-charcoal transition-colors">
              iPhone Screen Repair Melbourne
            </Link>
            <Link href="/iphone-battery-replacement" className="px-4 py-2 bg-white hover:bg-primary hover:text-white border border-gray-border rounded-full text-sm font-medium text-charcoal transition-colors">
              iPhone Battery Replacement
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary text-white py-16">
        <div className="container-page text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cracked iPhone 13 Pro Max Screen? Fix It Today.
          </h2>
          <p className="text-lg text-red-100 mb-8 max-w-xl mx-auto">
            Walk in to our Braybrook or Spotswood store — no appointment needed. iPhone 13 Pro Max screen replacement from $179 with a lifetime warranty.
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
