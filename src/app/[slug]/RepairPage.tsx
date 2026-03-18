import Link from 'next/link'

import type { Model, RepairService, Brand } from '@/types'
import type { InternalLink } from '@/lib/internalLinks'
import { business, repairFAQs, getRepairBySlug, MODELS_BY_CATEGORY, PHASE1_SUBURBS } from '@/data'
import { buildRepairPageSlug, buildModelHubSlug } from '@/lib/slug'
import { generateFAQSchema, generateBreadcrumbSchema, generateServiceSchema } from '@/lib/seo'
import { generateRepairShopSchema } from '@/lib/schema'
import { primaryLocation } from '@/data'
import SchemaScript from '@/components/seo/SchemaScript'
import { getRepairPageBreadcrumbs } from '@/lib/breadcrumbs'
import { getPriceDisplay, getRepairTime } from '@/data'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import { getDeviceRepairContent } from '@/lib/deviceContent'

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface RepairPageProps {
  model: Model
  repair: RepairService
  brand: Brand
  internalLinks: InternalLink[]
}

// ---------------------------------------------------------------------------
// What's included copy keyed by repair slug prefix
// ---------------------------------------------------------------------------

function getWhatsIncluded(repairSlug: string): string[] {
  if (repairSlug.includes('screen') || repairSlug.includes('display') || repairSlug.includes('lcd')) {
    return [
      'Full display assembly replacement (glass, digitiser, and panel)',
      'Touch accuracy and brightness calibration',
      'Biometric function verification (Face ID / Touch ID)',
      'Oleophobic coating on new glass surface',
      'Lifetime warranty on the replacement screen',
    ]
  }
  if (repairSlug.includes('battery')) {
    return [
      'Removal of old degraded battery cell',
      'Installation of premium-grade replacement battery',
      'Post-installation charge cycle and capacity test',
      'Performance throttling verification',
      'Lifetime warranty on the replacement battery',
    ]
  }
  if (repairSlug.includes('charging-port') || repairSlug.includes('charging')) {
    return [
      'Ultrasonic cleaning of debris and corrosion from the port',
      'Component-level assessment — repair or full replacement as required',
      'Multi-cable charging and data sync test',
      'Fast-charge and wireless charge verification (where applicable)',
      'Lifetime warranty on the repair',
    ]
  }
  if (repairSlug.includes('camera')) {
    return [
      'Removal and inspection of existing camera module',
      'Installation of matched replacement camera assembly',
      'Photo, video, autofocus, and optical zoom test',
      'Portrait mode and computational photography verification',
      'Lifetime warranty on the replacement camera',
    ]
  }
  if (repairSlug.includes('back-glass') || repairSlug.includes('back-cover')) {
    return [
      'Careful removal of cracked rear glass',
      'Professional adhesive application for new panel',
      'Wireless charging coil integrity check',
      'Full water resistance re-seal where applicable',
      'Lifetime warranty on the replacement glass',
    ]
  }
  if (repairSlug.includes('speaker') || repairSlug.includes('loudspeaker') || repairSlug.includes('earpiece')) {
    return [
      'Removal and replacement of the faulty speaker or earpiece assembly',
      'Audio output and call clarity testing',
      'Volume range verification across all profiles',
      'Lifetime warranty on the replacement component',
    ]
  }
  if (repairSlug.includes('water-damage')) {
    return [
      'Ultrasonic cleaning of logic board and affected components',
      'Corrosion removal and flux treatment',
      'Component-level assessment and targeted repairs',
      'Full functional test after drying and treatment',
      'Honest outcome assessment — no fix, no fee',
    ]
  }
  if (repairSlug.includes('keyboard')) {
    return [
      'Full keyboard deck removal and replacement',
      'Every key actuation and travel test',
      'Backlight uniformity verification',
      'Touch Bar and Touch ID test (where applicable)',
      'Lifetime warranty on the replacement keyboard',
    ]
  }
  // Generic fallback
  return [
    'Full diagnosis of the reported fault',
    'Replacement of the defective component with premium-grade part',
    'Comprehensive functional test covering all related device functions',
    'Quality check before device is returned',
    'Lifetime warranty on parts and labour',
  ]
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function RepairPage({ model, repair, brand, internalLinks }: RepairPageProps) {
  const breadcrumbs = getRepairPageBreadcrumbs(model, repair)

  // Price and repair time for this specific repair + model
  const priceDisplay = getPriceDisplay(model.brand, repair.slug)
  const repairTime = getRepairTime(model.brand, repair.slug)

  // Other repairs for this model (up to 8, excluding current)
  const otherRepairs = model.supportedRepairSlugs
    .filter((s) => s !== repair.slug)
    .slice(0, 8)
    .map((s) => getRepairBySlug(s))
    .filter(Boolean) as RepairService[]

  // Same repair on related models (same category, up to 4, excluding this model)
  const relatedModels = [...(MODELS_BY_CATEGORY[model.brand] ?? [])]
    .sort((a, b) => a.priority - b.priority)
    .filter((m) => m.slug !== model.slug && m.supportedRepairSlugs.includes(repair.slug))
    .slice(0, 4)

  // What's included bullets
  const included = getWhatsIncluded(repair.slug)

  // Device+repair specific content
  const deviceContent = getDeviceRepairContent(model.brand, repair.slug)

  // JSON-LD schemas
  const localBusinessSchema = generateRepairShopSchema(primaryLocation)
  const serviceSchema = generateServiceSchema(model, repair)
  const faqSchema = generateFAQSchema(repairFAQs)
  const breadcrumbSchema = generateBreadcrumbSchema(
    breadcrumbs.map((b) => ({ name: b.label, url: `https://www.itechrepairs.com.au${b.href}` })),
  )

  return (
    <>
      {/* JSON-LD */}
      <SchemaScript schema={[localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema]} />

      <div className="min-h-screen bg-white">
        {/* ── Breadcrumbs ── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        {/* ── Page Header ── */}
        <header className="bg-white border-b border-gray-100 py-5 sm:py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap items-start gap-3">
              <div className="flex-1 min-w-0">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  {model.displayName} {repair.displayName} Melbourne
                </h1>
                <p className="mt-2 text-base sm:text-lg text-gray-600">
                  {model.seoDescriptionBase}
                </p>
              </div>
              <span className="flex-shrink-0 bg-green-100 text-green-800 text-sm font-semibold px-3 py-1.5 rounded-full whitespace-nowrap mt-1">
                {repairTime.display}
              </span>
            </div>
          </div>
        </header>

        {/* ── Hero ── */}
        <section className="bg-gray-900 text-white py-10 sm:py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
                {model.displayName} {repair.displayName} in Melbourne
              </h2>
              <p className="text-gray-300 text-base sm:text-lg mb-5">
                Professional {repair.shortName.toLowerCase()} for your {model.displayName}. Completed on the spot at our Braybrook or Spotswood store with a lifetime warranty on all parts and labour.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {[repairTime.display, 'Lifetime Warranty', 'Walk-ins Welcome'].map((badge) => (
                  <span
                    key={badge}
                    className="bg-red-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${business.phone}`}
                  className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3.5 rounded-lg transition-colors"
                >
                  Call Now — {business.phoneDisplay}
                </a>
                <a
                  href={`mailto:${business.email}?subject=${encodeURIComponent(`${model.displayName} ${repair.displayName} Quote`)}`}
                  className="inline-flex items-center justify-center bg-white text-gray-900 hover:bg-gray-100 font-bold px-6 py-3.5 rounded-lg transition-colors"
                >
                  Get Free Quote
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

          {/* ── About This Repair ── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {model.displayName} {repair.displayName} in Melbourne
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-8">{deviceContent.intro}</p>

            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-3xl mb-2">⏱</div>
                <h3 className="font-bold text-gray-900 mb-1">Repair Time</h3>
                <p className="text-gray-600 text-sm">{repairTime.display}</p>
                {repairTime.sameDay && (
                  <p className="text-green-600 text-xs font-semibold mt-1">On the spot repair</p>
                )}
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-3xl mb-2">💰</div>
                <h3 className="font-bold text-gray-900 mb-1">Price</h3>
                <p className="text-red-600 font-bold text-lg">{priceDisplay}</p>
                <p className="text-gray-500 text-xs mt-1">Cheapest price guaranteed</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-3xl mb-2">🛡</div>
                <h3 className="font-bold text-gray-900 mb-1">Warranty</h3>
                <p className="text-gray-600 text-sm">{repair.warrantyPeriod}</p>
              </div>
            </div>
          </section>

          {/* ── Common Problems ── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Common {model.displayName} {repair.shortName} Problems
            </h2>
            <p className="text-gray-600 mb-6">
              These are the most common signs that your {model.displayName} needs a {repair.shortName.toLowerCase()}:
            </p>
            <ul className="space-y-3">
              {deviceContent.commonProblems.map((problem) => (
                <li key={problem} className="flex items-start gap-3 text-gray-700">
                  <span className="flex-shrink-0 w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-red-600 text-xs font-bold">!</span>
                  </span>
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ── Repair Process ── */}
          <section className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Our {model.displayName} {repair.displayName} Process
            </h2>
            <ol className="space-y-4">
              {deviceContent.repairProcess.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {i + 1}
                  </span>
                  <p className="text-gray-700 leading-relaxed pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* ── What's Included ── */}
          <section className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              What&apos;s Included in This Repair
            </h2>
            <ul className="space-y-3 mb-6">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <span className="flex-shrink-0 w-5 h-5 bg-red-600 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-gray-200 pt-4 flex flex-col sm:flex-row gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <span className="text-green-600 font-bold">✓</span>
                Premium-grade genuine replacement parts used in all repairs
              </span>
              <span className="flex items-center gap-2">
                <span className="text-green-600 font-bold">✓</span>
                {repair.warrantyPeriod}
              </span>
            </div>
          </section>

          {/* ── Why Choose iTech Repairs ── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose iTech Repairs for Your {model.displayName}?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">{deviceContent.whyChooseUs}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Cheapest Price Guaranteed', desc: 'We guarantee the lowest price for your repair — if you find a lower price locally, we\'ll match it.' },
                { title: 'Lifetime Warranty', desc: 'Every repair carries a lifetime warranty on parts and labour. Same fault returns? We fix it free.' },
                { title: '15 Minute On-The-Spot Repairs', desc: 'Most repairs are completed while you wait. Walk in, get repaired, walk out — no appointment needed.' },
                { title: 'Experienced Technicians', desc: 'Our technicians have serviced thousands of devices across all major brands and models.' },
              ].map((point) => (
                <div key={point.title} className="flex gap-3 p-4 bg-gray-50 rounded-xl">
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

          {/* ── Other Repairs for This Model ── */}
          {otherRepairs.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Other {model.displayName} Repairs
              </h2>
              <p className="text-gray-600 mb-6">
                We offer a full range of {model.displayName} repair services. See all available repairs:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {otherRepairs.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/${buildRepairPageSlug(model.slug, r.slug)}`}
                    className="group border border-gray-200 rounded-xl p-4 hover:border-red-300 hover:shadow-sm transition-all bg-white"
                  >
                    <span className="text-sm font-semibold text-gray-800 group-hover:text-red-600 transition-colors block mb-1">
                      {r.displayName}
                    </span>
                    <span className="text-xs text-red-500 font-medium">
                      {getPriceDisplay(model.brand, r.slug)}
                    </span>
                  </Link>
                ))}
              </div>
              <div className="mt-4">
                <Link
                  href={`/${buildModelHubSlug(model.slug)}`}
                  className="text-red-600 hover:underline font-semibold text-sm"
                >
                  View all {model.displayName} repair services →
                </Link>
              </div>
            </section>
          )}

          {/* ── Same Repair on Related Models ── */}
          {relatedModels.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Compare {repair.displayName} for Other {brand.displayName} Models
              </h2>
              <p className="text-gray-600 mb-6">
                We offer {repair.displayName} for all supported {brand.displayName} models:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {relatedModels.map((m) => (
                  <Link
                    key={m.slug}
                    href={`/${buildRepairPageSlug(m.slug, repair.slug)}`}
                    className="group border border-gray-200 rounded-xl p-4 hover:border-red-300 hover:shadow-sm transition-all bg-white text-center"
                  >
                    <span className="text-sm font-semibold text-gray-800 group-hover:text-red-600 transition-colors block">
                      {m.displayName}
                    </span>
                    <span className="text-xs text-gray-400 mt-1 block">
                      {repair.shortName} →
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* ── Internal Links Section ── */}
          {internalLinks.length > 0 && (
            <section className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Related Pages</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {internalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-gray-700 hover:text-red-600 hover:underline py-1 transition-colors flex items-center gap-2"
                  >
                    <span className="text-gray-300">→</span>
                    {link.label}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* ── FAQ Section ── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Frequently Asked Questions — {model.displayName} {repair.shortName}
            </h2>
            <div className="space-y-4">
              {repairFAQs.map((faq) => (
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

          {/* ── Suburbs We Serve ── */}
          <section className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Serving All Western Melbourne Suburbs
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Looking for {model.displayName} {repair.displayName} near me? Our Braybrook and Spotswood stores serve all of Melbourne&apos;s west. Customers visit us from:
            </p>
            <div className="flex flex-wrap gap-2">
              {PHASE1_SUBURBS.map((s) => (
                <span key={s.slug} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">
                  {s.displayName}
                </span>
              ))}
            </div>
          </section>

          {/* ── CTA Banner ── */}
          <section className="bg-red-600 text-white rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Book Your {model.displayName} {repair.shortName} Today
            </h2>
            <p className="text-red-100 text-lg mb-8 max-w-xl mx-auto">
              Walk in any time or call ahead. {repairTime.sameDay ? 'Most repairs completed in 15 minutes on the spot.' : 'We\'ll quote a turnaround time after assessment.'} Lifetime warranty on all repairs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${business.phone}`}
                className="bg-white text-red-600 hover:bg-red-50 font-bold px-8 py-3 rounded-lg transition-colors"
              >
                Call {business.phoneDisplay}
              </a>
              <a
                href={`mailto:${business.email}?subject=${encodeURIComponent(`${model.displayName} ${repair.displayName} Quote`)}`}
                className="border-2 border-white text-white hover:bg-red-700 font-bold px-8 py-3 rounded-lg transition-colors"
              >
                Get Free Quote
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
