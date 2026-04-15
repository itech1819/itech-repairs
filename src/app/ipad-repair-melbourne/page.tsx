import type { Metadata } from 'next'
import Link from 'next/link'
import { MODELS_BY_CATEGORY, IPAD_REPAIR_SLUGS, categoryFAQs, suburbs, business, repairServices } from '@/data'
import { generateFAQSchema } from '@/lib/seo'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'
import { primaryLocation } from '@/data'

export const metadata: Metadata = {
  title: 'iPad Repair Melbourne | Cheapest Price Guaranteed',
  description:
    'Need iPad repair in Melbourne? Get screen, battery, charging port & more — 15-minute on-the-spot repairs, lifetime warranty and cheapest price guaranteed. All iPad Air, Pro & Mini models. Open 7 days.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/ipad-repair-melbourne',
  },
  openGraph: {
    title: 'iPad Repair Melbourne | Cheapest Price Guaranteed | 15-Min On-The-Spot Repairs',
    description: 'Need iPad repair in Melbourne? Get screen, battery, charging port & more — 15-minute on-the-spot repairs, lifetime warranty and cheapest price guaranteed. All iPad Air, Pro & Mini models. Open 7 days.',
    url: 'https://www.itechrepairs.com.au/ipad-repair-melbourne',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)
const faqSchema = generateFAQSchema(categoryFAQs)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'iPad Repair Melbourne',
  description:
    'Expert iPad repair services in Melbourne. Screen repair, battery replacement, charging port repair and more for all iPad models.',
  provider: {
    '@type': 'ElectronicsStore',
    name: business.name,
    telephone: business.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address,
      addressLocality: business.suburb,
      addressRegion: business.state,
      postalCode: business.postcode,
    },
  },
  areaServed: { '@type': 'City', name: 'Melbourne' },
  serviceType: 'iPad Repair',
}

const IPAD_REPAIR_TO_SERVICE: Record<string, string> = {
  'screen-repair': '/ipad-screen-repair',
  'screen-replacement': '/ipad-screen-repair',
  'lcd-replacement': '/ipad-screen-repair',
  'battery-replacement': '/ipad-battery-replacement',
  'charging-port-repair': '/ipad-charging-port-repair',
  'charging-port-replacement': '/ipad-charging-port-repair',
  'camera-repair': '/ipad-camera-repair',
  'rear-camera-replacement': '/ipad-camera-repair',
  'front-camera-replacement': '/ipad-camera-repair',
  'camera-lens-replacement': '/ipad-camera-repair',
  'touch-screen-repair': '/ipad-screen-repair',
  'ghost-touch-repair': '/ipad-screen-repair',
  'water-damage-assessment': '/ipad-water-damage-repair',
  'water-damage-repair': '/ipad-water-damage-repair',
  'diagnostic': '/ipad-free-device-inspection',
  'inspection': '/ipad-free-device-inspection',
  'insurance-report': '/ipad-insurance-damage-report',
}

const ipadModels = MODELS_BY_CATEGORY.ipad ?? []
const ipadRepairs = repairServices.filter((r) => IPAD_REPAIR_SLUGS.includes(r.slug))

export default function IPadRepairMelbournePage() {
  return (
    <>
      <SchemaScript schema={[localBusinessSchema, serviceSchema, faqSchema]} />

      {/* Breadcrumbs */}
      <nav
        aria-label="Breadcrumb"
        className="bg-gray-surface border-b border-gray-border py-3"
      >
        <div className="container-page">
          <ol className="flex items-center gap-2 text-sm text-charcoal-light">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal font-medium">iPad Repairs Melbourne</li>
          </ol>
        </div>
      </nav>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              iPad Repair Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              All iPad Models · 25 Repair Services · On The Spot 15 Min Repairs
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Professional iPad repairs in Melbourne for all models including iPad Air, iPad Pro, iPad
              Mini and standard iPad. Screen repair, battery replacement, charging port repair and
              more — lifetime warranty on all parts and labour.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${business.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
              >
                Call {business.phoneDisplay}
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
              { label: '13 Models', sub: 'Supported' },
              { label: '25 Repairs', sub: 'Available' },
              { label: '15 Minutes', sub: 'On The Spot' },
              { label: 'Lifetime', sub: 'Warranty' },
            ].map((stat) => (
              <div key={stat.label} className="py-3">
                <div className="text-xl font-bold text-primary">{stat.label}</div>
                <div className="text-sm text-charcoal-light mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All iPad Models */}
      <section className="section-padding">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              All iPad Models We Repair
            </h2>
            <p className="text-charcoal-light text-lg">
              Select your iPad model to see all available repair services and pricing.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {ipadModels.map((model) => (
              <Link
                key={model.id}
                href={`/${model.repairHubSlug}`}
                className="card p-4 text-center text-sm font-medium text-charcoal hover:text-primary hover:border-primary transition-colors"
              >
                {model.displayName}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* iPad Repair Services */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              iPad Repair Services
            </h2>
            <p className="text-charcoal-light text-lg">
              25 repair services available for all iPad models.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {ipadRepairs.map((repair) => (
              <Link
                key={repair.slug}
                href={IPAD_REPAIR_TO_SERVICE[repair.slug] ?? '/ipad-repair-melbourne'}
                className="card p-5 hover:border-primary group"
              >
                <h3 className="font-semibold text-charcoal text-sm group-hover:text-primary transition-colors mb-1">
                  {repair.displayName}
                </h3>
                <p className="text-xs text-charcoal-light">{repair.estimatedTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust iTech Repairs */}
      <section className="section-padding">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8 text-center">
              Why Trust iTech Repairs for Your iPad?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: 'All iPad Models Supported',
                  body: 'iPad Air, iPad Pro (all sizes), iPad Mini and standard iPad — every generation covered with parts in stock.',
                },
                {
                  title: 'Lifetime Warranty',
                  body: 'Every iPad repair comes with a lifetime warranty on parts and labour. Same fault returns? We fix it free.',
                },
                {
                  title: 'Screen Repair Specialists',
                  body: 'From glass-only replacement to full LCD assembly swaps — we handle the full range of iPad display repairs.',
                },
                {
                  title: 'Touch ID Preserved',
                  body: 'Our technicians carefully preserve Touch ID functionality when performing home button or screen repairs.',
                },
                {
                  title: 'Free Assessment',
                  body: 'Walk in for a free diagnostic — we\'ll identify the fault and quote you before any work begins.',
                },
                {
                  title: 'Locally Owned & Operated',
                  body: 'Melbourne-based in Braybrook, serving Western Melbourne customers with honest, expert service.',
                },
              ].map((point) => (
                <div key={point.title} className="p-6 rounded-xl bg-gray-surface border border-gray-border">
                  <h3 className="font-bold text-charcoal mb-2">{point.title}</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">{point.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Suburb Location Links */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Serving Melbourne &amp; Surrounds
            </h2>
            <p className="text-charcoal-light text-lg">
              iPad repairs for customers across Western Melbourne.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {suburbs.map((suburb) => (
              <Link
                key={suburb.slug}
                href={`/ipad-repair-${suburb.slug}`}
                className="px-4 py-2 bg-white hover:bg-primary hover:text-white border border-gray-border rounded-full text-sm font-medium text-charcoal transition-colors"
              >
                iPad Repair {suburb.displayName}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">iPad Repair FAQ</h2>
          </div>
          <div className="max-w-3xl mx-auto divide-y divide-gray-border">
            {categoryFAQs.map((faq) => (
              <details key={faq.question} className="py-5 group">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="font-semibold text-charcoal pr-4">{faq.question}</span>
                  <span className="text-primary flex-shrink-0 group-open:rotate-180 transition-transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Your iPad Repaired Today?</h2>
          <p className="text-lg text-red-100 mb-8 max-w-xl mx-auto">
            Walk in to our Braybrook store — no appointment needed. Most iPad repairs completed
            on the spot in 15 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${business.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl text-lg hover:bg-red-50 transition-colors"
            >
              Call {business.phoneDisplay}
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
