import type { Metadata } from 'next'
import Link from 'next/link'
import { MODELS_BY_CATEGORY, SAMSUNG_REPAIR_SLUGS, categoryFAQs, suburbs, business, repairServices } from '@/data'
import { generateFAQSchema } from '@/lib/seo'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'
import { primaryLocation } from '@/data'

export const metadata: Metadata = {
  title: 'Samsung Repair Melbourne | Screen, Battery & Charging Port | Cheapest Price Guaranteed',
  description:
    'Samsung Galaxy screen repair, battery replacement and more in Melbourne. All S, A, Z Fold and Z Flip models. Cheapest price guaranteed, on-the-spot repairs, lifetime warranty.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/samsung-repair-melbourne',
  },
  openGraph: {
    title: 'Samsung Repair Melbourne | Screen, Battery & Charging Port | Cheapest Price Guaranteed',
    description: 'Samsung Galaxy screen repair, battery replacement and more in Melbourne. All S, A, Z Fold and Z Flip models. Cheapest price guaranteed, on-the-spot repairs, lifetime warranty.',
    url: 'https://www.itechrepairs.com.au/samsung-repair-melbourne',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)
const faqSchema = generateFAQSchema(categoryFAQs)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Samsung Repair Melbourne',
  description:
    'Expert Samsung repair services in Melbourne. Screen repair, battery replacement, charging port repair and more for all Samsung Galaxy models.',
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
  serviceType: 'Samsung Repair',
}

const SAMSUNG_REPAIR_TO_SERVICE: Record<string, string> = {
  'screen-repair': '/samsung-screen-repair',
  'screen-replacement': '/samsung-screen-repair',
  'battery-replacement': '/samsung-battery-replacement',
  'charging-port-repair': '/samsung-charging-port-repair',
  'charging-port-replacement': '/samsung-charging-port-repair',
  'back-glass-repair': '/samsung-back-glass-repair',
  'back-cover-replacement': '/samsung-back-glass-repair',
  'camera-repair': '/samsung-camera-repair',
  'rear-camera-replacement': '/samsung-camera-repair',
  'front-camera-replacement': '/samsung-camera-repair',
  'camera-lens-replacement': '/samsung-camera-repair',
  'speaker-repair': '/samsung-speaker-repair',
  'loudspeaker-replacement': '/samsung-speaker-repair',
  'earpiece-replacement': '/samsung-speaker-repair',
  'microphone-replacement': '/samsung-microphone-repair',
  'water-damage-assessment': '/samsung-water-damage-repair',
  'water-damage-repair': '/samsung-water-damage-repair',
  'diagnostic': '/samsung-free-device-inspection',
  'inspection': '/samsung-free-device-inspection',
  'insurance-report': '/samsung-insurance-damage-report',
}

const samsungModels = MODELS_BY_CATEGORY.samsung ?? []
const samsungRepairs = repairServices.filter((r) => SAMSUNG_REPAIR_SLUGS.includes(r.slug))

export default function SamsungRepairMelbournePage() {
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
            <li className="text-charcoal font-medium">Samsung Repairs Melbourne</li>
          </ol>
        </div>
      </nav>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Samsung Repair Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              All Samsung Models · 29 Repair Services · On The Spot 15 Min Repairs
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Professional Samsung Galaxy repairs in Melbourne. All models including Galaxy S, A
              series, Z Fold and Z Flip — screen repair, battery replacement, charging port and more.
              Lifetime warranty on all parts and labour.
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
              { label: '25 Models', sub: 'Supported' },
              { label: '29 Repairs', sub: 'Available' },
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

      {/* All Samsung Models */}
      <section className="section-padding">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              All Samsung Models We Repair
            </h2>
            <p className="text-charcoal-light text-lg">
              Select your Samsung model to see all available repair services and pricing.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {samsungModels.map((model) => (
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

      {/* Samsung Repair Services */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Samsung Repair Services
            </h2>
            <p className="text-charcoal-light text-lg">
              29 repair services available for all Samsung Galaxy models.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {samsungRepairs.map((repair) => (
              <Link
                key={repair.slug}
                href={SAMSUNG_REPAIR_TO_SERVICE[repair.slug] ?? '/samsung-repair-melbourne'}
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
              Why Trust iTech Repairs for Your Samsung?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: 'All Galaxy Models Supported',
                  body: 'Galaxy S series, A series, Z Fold, Z Flip and older Note models — we stock parts for all popular Samsung devices.',
                },
                {
                  title: 'Lifetime Warranty on All Repairs',
                  body: 'Every Samsung repair comes with a lifetime warranty on both parts and labour. If the same fault returns, we fix it free.',
                },
                {
                  title: 'On The Spot 15 Minute Repairs',
                  body: 'Screen and battery replacements done on the spot in around 15 minutes. Walk in — no appointments needed.',
                },
                {
                  title: 'Free Diagnostic',
                  body: 'Not sure what\'s wrong? Walk in for a free diagnostic with no obligation to proceed with any repair.',
                },
                {
                  title: 'AMOLED Screen Specialists',
                  body: 'We use quality replacement panels that match Samsung\'s original AMOLED display specifications for vivid colour.',
                },
                {
                  title: 'Melbourne\'s Trusted Technicians',
                  body: 'Locally based in Braybrook, we\'ve repaired thousands of Samsung devices across Western Melbourne.',
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
              Samsung repairs for customers across Western Melbourne.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {suburbs.map((suburb) => (
              <Link
                key={suburb.slug}
                href={`/samsung-repair-${suburb.slug}`}
                className="px-4 py-2 bg-white hover:bg-primary hover:text-white border border-gray-border rounded-full text-sm font-medium text-charcoal transition-colors"
              >
                Samsung Repair {suburb.displayName}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Samsung Repair FAQ
            </h2>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Your Samsung Repaired Today?
          </h2>
          <p className="text-lg text-red-100 mb-8 max-w-xl mx-auto">
            Walk in to our Braybrook store — no appointment needed. Most Samsung repairs completed
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
