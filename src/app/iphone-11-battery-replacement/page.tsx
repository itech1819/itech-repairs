import type { Metadata } from 'next'
import Link from 'next/link'
import { business, primaryLocation } from '@/data'
import { generateFAQSchema } from '@/lib/seo'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'

export const metadata: Metadata = {
  title: 'iPhone 11 Battery Replacement Melbourne | From $89',
  description:
    'iPhone 11 battery replacement in Melbourne from $89. Same-day service, lifetime warranty on parts and labour. Walk in to Braybrook or Spotswood — no appointment needed.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/iphone-11-battery-replacement',
  },
  openGraph: {
    title: 'iPhone 11 Battery Replacement Melbourne | From $89',
    description: 'iPhone 11 battery replacement in Melbourne from $89. Same-day service, lifetime warranty on parts and labour. Walk in to Braybrook or Spotswood — no appointment needed.',
    url: 'https://www.itechrepairs.com.au/iphone-11-battery-replacement',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'iPhone 11 Battery Replacement Melbourne',
  description:
    'iPhone 11 battery replacement in Melbourne from $89. Same-day service at Braybrook & Spotswood. Lifetime warranty on parts and labour.',
  provider: {
    '@type': 'RepairShop',
    name: business.name,
    telephone: business.phone,
  },
  areaServed: { '@type': 'City', name: 'Melbourne' },
  serviceType: 'iPhone Battery Replacement',
  offers: {
    '@type': 'Offer',
    price: '89',
    priceCurrency: 'AUD',
  },
}

const faqs = [
  {
    question: 'How much does iPhone 11 battery replacement cost in Melbourne?',
    answer: 'iPhone 11 battery replacement starts from $89. We give you a firm quote before any work begins — no hidden fees.',
    category: 'general' as const,
  },
  {
    question: 'How long does iPhone 11 battery replacement take?',
    answer: 'Most iPhone 11 battery replacements are completed in 15–20 minutes while you wait in-store.',
    category: 'general' as const,
  },
  {
    question: 'Will my data be lost during battery replacement?',
    answer: 'No. Battery replacement does not require wiping or restoring your device. Your data, apps, and settings remain intact.',
    category: 'general' as const,
  },
  {
    question: 'How do I know if my iPhone 11 battery needs replacing?',
    answer: 'Signs include: battery draining within a few hours, phone shutting down unexpectedly, battery health below 80% in Settings, or the phone running hot.',
    category: 'general' as const,
  },
]

const faqSchema = generateFAQSchema(faqs)

export default function Iphone11BatteryReplacementPage() {
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
            <li className="text-charcoal font-medium">iPhone 11 Battery Replacement</li>
          </ol>
        </div>
      </nav>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              iPhone 11 Battery Replacement Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              From $89 · 15–20 Minutes · Same Day · Lifetime Warranty
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Is your iPhone 11 battery draining fast or shutting down unexpectedly? Walk in to our Braybrook or Spotswood store for a fast iPhone 11 battery replacement. Done in 15–20 minutes with a lifetime warranty and no hidden fees.
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
              { label: 'From $89', sub: 'Battery Replacement' },
              { label: '15–20 Min', sub: 'Turnaround' },
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

      {/* Signs Battery Needs Replacing */}
      <section className="section-padding">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Signs Your iPhone 11 Battery Needs Replacing
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { title: 'Battery Draining Fast', desc: 'iPhone 11 running out of charge within a few hours, even with light use.' },
                { title: 'Unexpected Shutdowns', desc: 'Phone turning off suddenly even when the battery indicator shows charge remaining.' },
                { title: 'Battery Health Below 80%', desc: 'Check Settings > Battery > Battery Health & Charging. Below 80% means degraded performance.' },
                { title: 'Phone Running Hot', desc: 'Excessive heat during normal use or while charging can indicate a degraded battery.' },
              ].map((item) => (
                <div key={item.title} className="card p-5">
                  <h3 className="font-bold text-charcoal mb-2">{item.title}</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose iTech */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8 text-center">
              Why Choose iTech Repairs for iPhone 11 Battery?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Fast 15-Minute Service', body: 'iPhone 11 battery replacements completed in 15–20 minutes while you wait in-store.' },
                { title: 'Lifetime Warranty', body: 'Every battery replacement includes a lifetime warranty on parts and labour.' },
                { title: 'Data Safe', body: 'Battery replacement does not touch your data. Apps, photos, and settings remain intact.' },
                { title: 'Free Battery Health Check', body: 'Not sure if you need a replacement? We offer a free battery health diagnostic.' },
                { title: 'Cheapest Price Guaranteed', body: 'From $89 — firm quote with no hidden fees before any work begins.' },
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
      <section className="section-padding">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              iPhone 11 Battery Replacement FAQ
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
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-charcoal mb-4">Related iPhone Battery Services</h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/iphone-battery-replacement" className="px-4 py-2 bg-white hover:bg-primary hover:text-white border border-gray-border rounded-full text-sm font-medium text-charcoal transition-colors">
              iPhone Battery Replacement
            </Link>
            <Link href="/iphone-12-battery-replacement" className="px-4 py-2 bg-white hover:bg-primary hover:text-white border border-gray-border rounded-full text-sm font-medium text-charcoal transition-colors">
              iPhone 12 Battery Replacement
            </Link>
            <Link href="/iphone-13-pro-battery-replacement" className="px-4 py-2 bg-white hover:bg-primary hover:text-white border border-gray-border rounded-full text-sm font-medium text-charcoal transition-colors">
              iPhone 13 Pro Battery Replacement
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary text-white py-16">
        <div className="container-page text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            iPhone 11 Battery Draining Fast? Fix It Today.
          </h2>
          <p className="text-lg text-red-100 mb-8 max-w-xl mx-auto">
            Walk in to our Braybrook or Spotswood store — no appointment needed. iPhone 11 battery replacement from $89 with a lifetime warranty.
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
