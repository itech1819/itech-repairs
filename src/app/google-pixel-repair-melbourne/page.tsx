import type { Metadata } from 'next'
import Link from 'next/link'
import { MODELS_BY_CATEGORY, PIXEL_REPAIR_SLUGS, categoryFAQs, suburbs, business, repairServices } from '@/data'
import { generateFAQSchema } from '@/lib/seo'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'
import { primaryLocation } from '@/data'

export const metadata: Metadata = {
  title: 'Google Pixel Repair Melbourne | Cheapest Guaranteed',
  description:
    'Need Google Pixel repair in Melbourne? Screen, battery, charging port & more — 15-minute on-the-spot repairs, lifetime warranty and cheapest price guaranteed. All Pixel 5 to Pixel 9 Pro. Open 7 days.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/google-pixel-repair-melbourne',
  },
  openGraph: {
    title: 'Google Pixel Repair Melbourne | Cheapest Price Guaranteed | 15-Min Fix',
    description: 'Need Google Pixel repair in Melbourne? Screen, battery, charging port & more — 15-minute on-the-spot repairs, lifetime warranty and cheapest price guaranteed. All Pixel 5 to Pixel 9 Pro. Open 7 days.',
    url: 'https://www.itechrepairs.com.au/google-pixel-repair-melbourne',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)
const faqSchema = generateFAQSchema(categoryFAQs)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Google Pixel Repair Melbourne',
  description:
    'Expert Google Pixel repair services in Melbourne. Screen repair, battery replacement, charging port repair and more for all Pixel models.',
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
  serviceType: 'Google Pixel Repair',
}

const PIXEL_REPAIR_TO_SERVICE: Record<string, string> = {
  'screen-repair': '/google-pixel-screen-repair',
  'screen-replacement': '/google-pixel-screen-repair',
  'battery-replacement': '/google-pixel-battery-replacement',
  'charging-port-repair': '/google-pixel-charging-port-repair',
  'charging-port-replacement': '/google-pixel-charging-port-repair',
  'camera-repair': '/google-pixel-camera-repair',
  'rear-camera-replacement': '/google-pixel-camera-repair',
  'front-camera-replacement': '/google-pixel-camera-repair',
  'camera-lens-replacement': '/google-pixel-camera-repair',
  'water-damage-assessment': '/google-pixel-water-damage-repair',
  'water-damage-repair': '/google-pixel-water-damage-repair',
  'diagnostic': '/google-pixel-free-device-inspection',
  'inspection': '/google-pixel-free-device-inspection',
  'insurance-report': '/google-pixel-insurance-damage-report',
}

const pixelModels = MODELS_BY_CATEGORY.pixel ?? []
const pixelRepairs = repairServices.filter((r) => PIXEL_REPAIR_SLUGS.includes(r.slug))

export default function GooglePixelRepairMelbournePage() {
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
            <li className="text-charcoal font-medium">Google Pixel Repairs Melbourne</li>
          </ol>
        </div>
      </nav>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Google Pixel Repair Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              All Pixel Models · 29+ Repair Services · On The Spot 15 Min Repairs
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Expert Google Pixel repairs for every model from the Pixel 6a to the latest Pixel 10
              Pro XL. Screen repair, battery replacement, charging port repair and more — with a
              lifetime warranty on all parts and labour.
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
              { label: '15 Models', sub: 'Supported' },
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

      {/* All Pixel Models */}
      <section className="section-padding">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              All Google Pixel Models We Repair
            </h2>
            <p className="text-charcoal-light text-lg">
              Select your Pixel model to see all available repair services and pricing.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {pixelModels.map((model) => (
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

      {/* Google Pixel Repair Services */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Google Pixel Repair Services
            </h2>
            <p className="text-charcoal-light text-lg">
              29 repair services available for all Google Pixel models.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {pixelRepairs.map((repair) => (
              <Link
                key={repair.slug}
                href={PIXEL_REPAIR_TO_SERVICE[repair.slug] ?? '/google-pixel-repair-melbourne'}
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
              Why Trust iTech Repairs for Your Google Pixel?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: 'All Pixel Models Supported',
                  body: 'From the Pixel 6a to the latest Pixel 10 Pro XL and Pixel 10 Pro Fold — we stock parts and have the expertise for every Pixel generation.',
                },
                {
                  title: 'Lifetime Warranty on All Repairs',
                  body: 'Every Google Pixel repair comes with a lifetime warranty on both parts and labour. If the same fault returns, we fix it free.',
                },
                {
                  title: 'On The Spot 15 Minute Repairs',
                  body: 'Screen and battery replacements done on the spot in around 15 minutes. Walk in any time — no appointments needed.',
                },
                {
                  title: 'Tensor Chip Expertise',
                  body: 'Our technicians are experienced with Pixel\'s Tensor G2, G3, and G4 architecture ensuring repairs don\'t affect AI and computational photography features.',
                },
                {
                  title: 'Camera Performance Preserved',
                  body: 'Pixel is famous for its camera. We use precision parts and calibration to ensure all camera modes including Night Sight and Pro Res remain fully functional after repair.',
                },
                {
                  title: 'Melbourne\'s Trusted Technicians',
                  body: 'Locally owned and operated in Braybrook, serving Western Melbourne with professional, honest service for all Google Pixel devices.',
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
              Google Pixel repairs for customers across Western Melbourne. Find your suburb below.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {suburbs.map((suburb) => (
              <Link
                key={suburb.slug}
                href={`/pixel-repair-${suburb.slug}`}
                className="px-4 py-2 bg-white hover:bg-primary hover:text-white border border-gray-border rounded-full text-sm font-medium text-charcoal transition-colors"
              >
                Pixel Repair {suburb.displayName}
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
              Google Pixel Repair FAQ
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
            Need Your Google Pixel Repaired Today?
          </h2>
          <p className="text-lg text-red-100 mb-8 max-w-xl mx-auto">
            Walk in to our Braybrook store — no appointment needed. Most Pixel repairs completed
            on the spot in 15 minutes with a lifetime warranty.
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
