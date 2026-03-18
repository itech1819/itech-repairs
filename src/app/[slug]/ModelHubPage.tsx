import Link from 'next/link'

import type { Model, RepairService, Brand } from '@/types'
import { business, modelFAQs } from '@/data'
import {
  buildRepairPageSlug,
  buildLocationSlug,
  DEVICE_SLUGS,
} from '@/lib/slug'
import { generateFAQSchema, generateBreadcrumbSchema, generateServiceSchema } from '@/lib/seo'
import { generateRepairShopSchema } from '@/lib/schema'
import { primaryLocation } from '@/data'
import SchemaScript from '@/components/seo/SchemaScript'
import { getModelHubBreadcrumbs } from '@/lib/breadcrumbs'
import { MODELS_BY_CATEGORY, PHASE1_SUBURBS, getPriceDisplay, getRepairTime } from '@/data'
import Breadcrumbs from '@/components/layout/Breadcrumbs'

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface ModelHubPageProps {
  model: Model
  repairs: RepairService[]
  brand: Brand
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Trust copy keyed by DeviceCategory */
const DEVICE_TRUST_COPY: Record<string, string> = {
  iphone: 'Our Apple-certified technicians have repaired thousands of iPhones across Melbourne. We use premium-grade parts matched to Apple\'s original specifications, and every repair is covered by our lifetime warranty on parts and labour. Most iPhone repairs are completed in 15–20 minutes while you wait — no appointment necessary.',
  samsung: 'We specialise in Samsung Galaxy repairs using display panels and components sourced to Samsung\'s quality standards. Our technicians are experienced across the full Galaxy range — from budget A-series to flagship S Ultra and Z Fold models. Walk in for on the spot 15 minute screen and battery repairs with our lifetime warranty guarantee.',
  pixel: 'Google Pixel devices require specialist knowledge and precision parts. Our technicians have hands-on experience across every Pixel generation and use components that preserve the Pixel\'s camera performance, Android updates, and Tensor chip functionality. Lifetime warranty on all Pixel repairs.',
  ipad: 'iPad repairs demand care — from Air to Pro models with Face ID and ProMotion displays. We use display assemblies calibrated for Apple\'s True Tone standard and test touch accuracy, brightness, and Pencil responsiveness after every repair. On the spot 15 minute repairs for most iPad models.',
  macbook: 'MacBook repairs require precision tooling and model-specific components. Our technicians are experienced with both Intel and Apple Silicon MacBooks and handle everything from screen replacements and keyboard repairs to logic board microsoldering. Most MacBook repairs are completed within the same or next business day.',
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function ModelHubPage({ model, repairs, brand }: ModelHubPageProps) {
  const breadcrumbs = getModelHubBreadcrumbs(model)

  // Related models in same category (excluding this model, top 6)
  const categoryModels = [...(MODELS_BY_CATEGORY[model.brand] ?? [])]
    .sort((a, b) => a.priority - b.priority)
    .filter((m) => m.slug !== model.slug)
    .slice(0, 6)

  // Device slug for location links
  const deviceSlug = DEVICE_SLUGS.find((d) => d === model.brand) ?? model.brand

  // Suburb location links for this device (first 8 Phase-1 suburbs)
  const locationLinks = PHASE1_SUBURBS.slice(0, 8).map((suburb) => ({
    href: `/${buildLocationSlug(deviceSlug, suburb.slug)}`,
    label: `${brand.displayName} Repair ${suburb.displayName}`,
  }))

  // Trust copy
  const trustCopy = DEVICE_TRUST_COPY[model.brand] ?? DEVICE_TRUST_COPY['iphone']

  // JSON-LD schemas — use the first applicable repair for the Service schema
  const primaryRepair = repairs[0]
  const localBusinessSchema = generateRepairShopSchema(primaryLocation)
  const serviceSchema = primaryRepair ? generateServiceSchema(model, primaryRepair) : null
  const faqSchema = generateFAQSchema(modelFAQs)
  const breadcrumbSchema = generateBreadcrumbSchema(
    breadcrumbs.map((b) => ({ name: b.label, url: `https://www.itechrepairs.com.au${b.href}` })),
  )

  return (
    <>
      {/* JSON-LD */}
      <SchemaScript
        schema={[
          localBusinessSchema,
          ...(serviceSchema ? [serviceSchema] : []),
          faqSchema,
          breadcrumbSchema,
        ]}
      />

      <div className="min-h-screen bg-white">
        {/* ── Breadcrumbs ── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        {/* ── Page Header ── */}
        <header className="bg-white border-b border-gray-100 py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              {model.displayName} Repair Melbourne
            </h1>
            <p className="mt-3 text-lg text-gray-600">
              {repairs.length} repair service{repairs.length !== 1 ? 's' : ''} available
              {' · '}On the spot 15 min repairs
              {' · '}Lifetime warranty
            </p>
          </div>
        </header>

        {/* ── Hero ── */}
        <section className="bg-gray-900 text-white py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Expert {model.displayName} Repairs in Melbourne
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                On the spot 15 minute repairs · Lifetime warranty on all parts &amp; labour · Walk-ins welcome at our Braybrook store
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                {['15 Minute Repairs', 'Lifetime Warranty', 'Walk-ins Welcome', 'Free Diagnostic'].map(
                  (badge) => (
                    <span
                      key={badge}
                      className="bg-red-600 text-white text-sm font-semibold px-3 py-1.5 rounded-full"
                    >
                      {badge}
                    </span>
                  ),
                )}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={`tel:${business.phone}`}
                  className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition-colors"
                >
                  Call {business.phoneDisplay}
                </a>
                <a
                  href={`/${brand.categoryPageSlug}`}
                  className="inline-flex items-center bg-white text-gray-900 hover:bg-gray-100 font-bold px-6 py-3 rounded-lg transition-colors"
                >
                  View All {brand.displayName} Repairs
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Trust Badges Bar ── */}
        <section className="bg-red-600 text-white py-4">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap justify-center sm:justify-between gap-4 text-sm font-semibold">
              <span>Cheapest Price Guaranteed</span>
              <span>Lifetime Warranty</span>
              <span>15 Min Repairs</span>
              <span>No Fix, No Fee</span>
              <span>Walk-ins Welcome</span>
            </div>
          </div>
        </section>

        <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-16">

          {/* ── Repair Services Grid ── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Available {model.displayName} Repair Services
            </h2>
            <p className="text-gray-600 mb-8">
              All repairs include a lifetime warranty on parts and labour. Most services are completed on the spot in 15 minutes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {repairs.map((repair) => {
                const priceDisplay = getPriceDisplay(model.brand, repair.slug)
                const repairTime = getRepairTime(model.brand, repair.slug)
                return (
                  <Link
                    key={repair.slug}
                    href={`/${buildRepairPageSlug(model.slug, repair.slug)}`}
                    className="group border border-gray-200 rounded-xl p-5 hover:border-red-300 hover:shadow-md transition-all bg-white"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                        {repair.displayName}
                      </h3>
                      <span className="text-sm font-bold text-red-600 whitespace-nowrap ml-2">
                        {priceDisplay}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-3 line-clamp-2">{repair.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">{repairTime.display}</span>
                      <span className="text-xs text-red-600 font-medium group-hover:underline">
                        View details →
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </section>

          {/* ── Why Choose iTech Repairs ── */}
          <section className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose iTech Repairs for Your {model.displayName}?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">{trustCopy}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Lifetime Warranty',
                  desc: 'Every repair at iTech Repairs carries a lifetime warranty on parts and labour. If the same fault returns, we fix it again at no charge.',
                },
                {
                  title: 'On The Spot 15 Minute Repairs',
                  desc: 'Most common repairs are completed while you wait — screen replacements in around 15 minutes, battery changes in 15–20 minutes.',
                },
                {
                  title: 'Premium Parts',
                  desc: 'We use high-quality replacement components that meet or exceed original manufacturer specifications for your device.',
                },
                {
                  title: 'Free Diagnostic',
                  desc: 'Unsure what\'s wrong? Walk in for a free diagnostic assessment. We identify the fault and quote you before any work begins.',
                },
                {
                  title: 'Walk-ins Welcome',
                  desc: 'No appointment necessary. Visit our Braybrook store 7 days 9am–9pm.',
                },
                {
                  title: 'Experienced Technicians',
                  desc: 'Our qualified technicians have serviced thousands of devices and stay current with the latest repair techniques and tooling.',
                },
              ].map((point) => (
                <div key={point.title} className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-red-600 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{point.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Location Links ── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Serving Melbourne &amp; Surrounds
            </h2>
            <p className="text-gray-600 mb-6">
              We serve customers from across Western Melbourne. Our Braybrook store is a short drive from all surrounding suburbs.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {locationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-700 hover:text-red-600 hover:underline py-1 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </section>

          {/* ── Related Models ── */}
          {categoryModels.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Related {brand.displayName} Models
              </h2>
              <p className="text-gray-600 mb-6">
                We repair all {brand.displayName} models. See repair services for other models:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
                {categoryModels.map((relatedModel) => (
                  <Link
                    key={relatedModel.slug}
                    href={`/${relatedModel.repairHubSlug}`}
                    className="group border border-gray-200 rounded-xl p-4 hover:border-red-300 hover:shadow-md transition-all bg-white text-center"
                  >
                    <span className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors text-sm">
                      {relatedModel.displayName}
                    </span>
                    <br />
                    <span className="text-xs text-gray-400 mt-1 group-hover:text-red-400">
                      Repair Melbourne →
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* ── FAQ Section ── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Frequently Asked Questions — {model.displayName} Repairs
            </h2>
            <div className="space-y-4">
              {modelFAQs.map((faq) => (
                <details
                  key={faq.question}
                  className="group border border-gray-200 rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-5 font-semibold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                    <span>{faq.question}</span>
                    <span className="ml-4 text-gray-400 group-open:rotate-180 transition-transform text-lg">
                      ↓
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* ── CTA Banner ── */}
          <section className="bg-red-600 text-white rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Ready to Book Your {model.displayName} Repair?
            </h2>
            <p className="text-red-100 text-lg mb-8 max-w-xl mx-auto">
              Walk in today or call ahead. Most {model.displayName} repairs are completed on the spot in 15 minutes with our lifetime warranty guarantee.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${business.phone}`}
                className="bg-white text-red-600 hover:bg-red-50 font-bold px-8 py-3 rounded-lg transition-colors"
              >
                Call {business.phoneDisplay}
              </a>
              <a
                href={`mailto:${business.email}`}
                className="border-2 border-white text-white hover:bg-red-700 font-bold px-8 py-3 rounded-lg transition-colors"
              >
                Email Us
              </a>
            </div>
            <p className="mt-6 text-red-200 text-sm">
              {business.address}, {business.suburb} VIC {business.postcode}
              {' · '}7 Days 9am–9pm
            </p>
          </section>

        </main>
      </div>
    </>
  )
}
