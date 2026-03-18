import Link from 'next/link'

import type { Model, Suburb, Brand } from '@/types'
import { business, locations, locationFAQs, PHASE1_SUBURBS, MODELS_BY_CATEGORY, getRepairBySlug } from '@/data'
import {
  buildRepairPageSlug,
  buildModelHubSlug,
  buildLocationSlug,
  DEVICE_SLUGS,
} from '@/lib/slug'
import { generateRepairShopSchema } from '@/lib/schema'
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo'
import SchemaScript from '@/components/seo/SchemaScript'
import { getLocationBreadcrumbs } from '@/lib/breadcrumbs'
import Breadcrumbs from '@/components/layout/Breadcrumbs'

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface LocationPageProps {
  deviceSlug: string
  deviceDisplayName: string
  suburb: Suburb
  brand: Brand
  topModels: Model[]
}

// ---------------------------------------------------------------------------
// Priority repair slugs to surface in the "Popular Repairs" grid
// ---------------------------------------------------------------------------

const PRIORITY_REPAIR_SLUGS_BY_DEVICE: Record<string, string[]> = {
  iphone: [
    'screen-replacement',
    'battery-replacement',
    'charging-port-repair',
    'back-glass-repair',
    'camera-repair',
    'water-damage-repair',
  ],
  samsung: [
    'screen-replacement',
    'battery-replacement',
    'charging-port-repair',
    'back-cover-replacement',
    'camera-repair',
    'water-damage-repair',
  ],
  pixel: [
    'screen-repair',
    'battery-replacement',
    'charging-port-repair',
    'camera-repair',
    'water-damage-repair',
    'back-glass-repair',
  ],
  ipad: [
    'screen-repair',
    'lcd-replacement',
    'battery-replacement',
    'charging-port-repair',
    'water-damage-repair',
    'back-glass-repair',
  ],
  macbook: [
    'screen-replacement',
    'battery-replacement',
    'keyboard-replacement',
    'charging-port-repair',
    'water-damage-repair',
    'ssd-upgrade',
  ],
}

// ---------------------------------------------------------------------------
// Suburb trust copy with suburb name interpolated
// ---------------------------------------------------------------------------

function getSuburbTrustCopy(
  deviceDisplayName: string,
  suburbDisplayName: string,
  region: string,
): string {
  return `Residents of ${suburbDisplayName} and the wider ${region} area choose iTech Repairs for fast, reliable ${deviceDisplayName} repairs. Our Braybrook store is a short drive away — most customers arrive, get their device repaired, and are back home within the hour for common repairs like screen replacements and battery changes. We offer a lifetime warranty on every repair, free walk-in diagnostics, and honest pricing with no surprises. No appointment needed — walk in any time during business hours.`
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function LocationPage({
  deviceSlug,
  deviceDisplayName,
  suburb,
  brand,
  topModels,
}: LocationPageProps) {
  const breadcrumbs = getLocationBreadcrumbs(deviceSlug, suburb)

  // Priority repair slugs for this device
  const priorityRepairSlugs =
    PRIORITY_REPAIR_SLUGS_BY_DEVICE[deviceSlug] ??
    PRIORITY_REPAIR_SLUGS_BY_DEVICE['iphone']

  // Top model for linking to repair pages (first model in category)
  const topModel = topModels[0]

  // Popular repair cards — use top model's repair pages
  const popularRepairs = topModel
    ? priorityRepairSlugs
        .filter((slug) => topModel.supportedRepairSlugs.includes(slug))
        .slice(0, 6)
        .map((repairSlug) => {
          const repair = getRepairBySlug(repairSlug)
          if (!repair) return null
          return {
            repair,
            href: `/${buildRepairPageSlug(topModel.slug, repairSlug)}`,
          }
        })
        .filter(Boolean) as { repair: NonNullable<ReturnType<typeof getRepairBySlug>>; href: string }[]
    : []

  // Nearby suburbs (other Phase-1 suburbs for same device, excluding current)
  const nearbySuburbLinks = PHASE1_SUBURBS.filter((s) => s.slug !== suburb.slug)
    .slice(0, 8)
    .map((s) => ({
      href: `/${buildLocationSlug(deviceSlug, s.slug)}`,
      label: `${deviceDisplayName} Repair ${s.displayName}`,
    }))

  // Trust copy
  const trustCopy = getSuburbTrustCopy(deviceDisplayName, suburb.displayName, suburb.region)

  // JSON-LD schemas — use matching physical location if suburb matches a store, else primary
  const matchedLocation =
    locations.find((l) => l.suburb.toLowerCase() === suburb.displayName.toLowerCase()) ??
    locations.find((l) => l.isPrimary)!
  const localBusinessSchema = generateRepairShopSchema(matchedLocation)
  const faqSchema = generateFAQSchema(locationFAQs)
  const breadcrumbSchema = generateBreadcrumbSchema(
    breadcrumbs.map((b) => ({ name: b.label, url: `https://www.itechrepairs.com.au${b.href}` })),
  )

  // Service schema for location (custom, not using generateServiceSchema which requires a repair)
  const locationServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${deviceDisplayName} Repair ${suburb.displayName}`,
    description: `Professional ${deviceDisplayName} repairs serving ${suburb.displayName} and ${suburb.region}. Screen repair, battery replacement, charging port repair & more. On the spot 15 minute repairs, lifetime warranty.`,
    provider: {
      '@type': business.schema.type,
      name: business.name,
      telephone: business.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: business.address,
        addressLocality: business.suburb,
        addressRegion: business.state,
        postalCode: business.postcode,
        addressCountry: business.country,
      },
    },
    areaServed: [
      { '@type': 'City', name: 'Melbourne' },
      { '@type': 'Place', name: suburb.displayName },
      { '@type': 'Place', name: suburb.region },
    ],
    serviceType: `${deviceDisplayName} Repair`,
  }

  return (
    <>
      {/* JSON-LD */}
      <SchemaScript schema={[localBusinessSchema, locationServiceSchema, faqSchema, breadcrumbSchema]} />

      <div className="min-h-screen bg-white">
        {/* ── Breadcrumbs ── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        {/* ── Page Header ── */}
        <header className="bg-white border-b border-gray-100 py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              {deviceDisplayName} Repair {suburb.displayName}
            </h1>
            <p className="mt-3 text-lg text-gray-600">
              On the spot 15 minute repairs
              {' · '}Lifetime warranty
              {' · '}Serving {suburb.region}
            </p>
          </div>
        </header>

        {/* ── Hero ── */}
        <section className="bg-gray-900 text-white py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                {deviceDisplayName} Repair in {suburb.displayName}, Melbourne
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                {suburb.slug === 'braybrook'
                  ? `You're in the right place — our Braybrook store is right here at ${matchedLocation.address}. Walk in any time for on the spot 15 minute repairs with lifetime warranty.`
                  : suburb.slug === 'spotswood'
                  ? `You're local — our Spotswood store is at ${matchedLocation.address}. Walk in any time for on the spot 15 minute repairs with lifetime warranty.`
                  : `Serving ${suburb.displayName} and all ${suburb.region}. Just a short drive from ${suburb.displayName} to our Braybrook or Spotswood store. Most repairs completed in 15 minutes on the spot.`}
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  '15 Minute Repairs',
                  'Lifetime Warranty',
                  'Walk-ins Welcome',
                  'Melbourne Based',
                ].map((badge) => (
                  <span
                    key={badge}
                    className="bg-red-600 text-white text-sm font-semibold px-3 py-1.5 rounded-full"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={`tel:${business.phone}`}
                  className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition-colors"
                >
                  Call Now — {business.phoneDisplay}
                </a>
                <a
                  href={matchedLocation.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-gray-900 hover:bg-gray-100 font-bold px-6 py-3 rounded-lg transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Trust Badges Bar ── */}
        <section className="bg-red-600 text-white py-4">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap justify-center sm:justify-between gap-4 text-sm font-semibold">
              <span>Lifetime Warranty</span>
              <span>15 Min Repairs</span>
              <span>No Fix, No Fee</span>
              <span>Genuine-Grade Parts</span>
              <span>Walk-ins Welcome</span>
            </div>
          </div>
        </section>

        <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-16">

          {/* ── Why Suburb Residents Choose iTech ── */}
          <section className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why {suburb.displayName} Residents Choose iTech Repairs
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">{trustCopy}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Short Drive from ' + suburb.displayName,
                  desc: `Our Braybrook store is easily accessible from ${suburb.displayName}. Most customers arrive, get repaired, and are home within the hour.`,
                },
                {
                  title: 'Lifetime Warranty',
                  desc: 'Every repair carries a lifetime warranty on parts and labour. If the same fault returns, we fix it at no charge.',
                },
                {
                  title: 'On The Spot 15 Minute Repairs',
                  desc: 'Walk in any time during business hours. Most screen and battery repairs are done on the spot in 15 minutes.',
                },
                {
                  title: 'Free Diagnostic',
                  desc: 'Bring your device in for a free assessment. No charge, no obligation — we diagnose and quote before starting.',
                },
                {
                  title: 'No Appointment Needed',
                  desc: 'Open 7 days 9am–9pm. Walk in any time for immediate service.',
                },
                {
                  title: 'Consistent Pricing',
                  desc: 'Same pricing for all customers regardless of which suburb you travel from. No travel fees or surcharges.',
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

          {/* ── Popular Repairs in Suburb ── */}
          {popularRepairs.length > 0 && topModel && (
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Popular {deviceDisplayName} Repairs in {suburb.displayName}
              </h2>
              <p className="text-gray-600 mb-6">
                The most common {deviceDisplayName} repairs we perform for {suburb.displayName} customers:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {popularRepairs.map(({ repair, href }) => (
                  <Link
                    key={repair.slug}
                    href={href}
                    className="group border border-gray-200 rounded-xl p-5 hover:border-red-300 hover:shadow-md transition-all bg-white"
                  >
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors mb-2">
                      {repair.displayName}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3 line-clamp-2">{repair.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">{repair.estimatedTime}</span>
                      <span className="text-xs text-red-600 font-medium group-hover:underline">
                        View details →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* ── All Models We Repair ── */}
          {topModels.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                All {deviceDisplayName} Models We Repair
              </h2>
              <p className="text-gray-600 mb-6">
                We repair all {brand.displayName} models for {suburb.displayName} customers:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {topModels.map((m) => (
                  <Link
                    key={m.slug}
                    href={`/${buildModelHubSlug(m.slug)}`}
                    className="group border border-gray-200 rounded-xl p-4 hover:border-red-300 hover:shadow-sm transition-all bg-white text-center"
                  >
                    <span className="text-sm font-semibold text-gray-800 group-hover:text-red-600 transition-colors block">
                      {m.displayName}
                    </span>
                    <span className="text-xs text-gray-400 mt-1 block group-hover:text-red-400">
                      View repairs →
                    </span>
                  </Link>
                ))}
              </div>
              <div className="mt-4">
                <Link
                  href={`/${brand.categoryPageSlug}`}
                  className="text-red-600 hover:underline font-semibold text-sm"
                >
                  View all {brand.displayName} repairs →
                </Link>
              </div>
            </section>
          )}

          {/* ── Nearby Suburbs ── */}
          {nearbySuburbLinks.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Nearby Suburbs We Also Serve
              </h2>
              <p className="text-gray-600 mb-6">
                We serve customers from all surrounding Western Melbourne suburbs. Find {deviceDisplayName} repair pages for nearby areas:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {nearbySuburbLinks.map((link) => (
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
          )}

          {/* ── FAQ Section ── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Frequently Asked Questions — {deviceDisplayName} Repair {suburb.displayName}
            </h2>
            <div className="space-y-4">
              {locationFAQs.map((faq) => (
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

          {/* ── SEO Content Section ── */}
          <section className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {deviceDisplayName} Screen Repair {suburb.displayName} — Fast, Affordable &amp; Guaranteed
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                If you&apos;re searching for <strong>{deviceDisplayName.toLowerCase()} screen repair in {suburb.displayName}</strong>, iTech Repairs is your closest and most trusted option. Serving {suburb.displayName} and the wider {suburb.region}, we&apos;ve built a reputation for on the spot 15 minute repairs, the cheapest prices in Melbourne, and a genuine lifetime warranty on every job. Most {suburb.displayName} customers arrive at our Braybrook or Spotswood store and walk out repaired within the hour — often in under 20 minutes.
              </p>
              <p>
                Our technicians carry parts for every {deviceDisplayName} model in stock, which means no waiting days for a part to arrive. Whether you have a cracked screen, a dead battery, a broken charging port, or water damage, we can assess and repair your device on the spot. We quote upfront before any work begins, so there are no hidden costs or surprises.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-4">
                {deviceDisplayName} Battery Replacement {suburb.displayName}
              </h3>
              <p>
                Battery problems are one of the most common reasons {suburb.displayName} residents visit us. If your {deviceDisplayName} is draining fast, shutting down unexpectedly, or running warm, a battery replacement can restore it to like-new performance. We complete most {deviceDisplayName.toLowerCase()} battery replacements in 15–20 minutes, using premium-grade cells backed by our lifetime warranty.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-4">
                Phone Repair {suburb.displayName} — All Brands Welcome
              </h3>
              <p>
                iTech Repairs serves {suburb.displayName} customers with repairs for all major brands — iPhone, Samsung Galaxy, Google Pixel, iPad, and MacBook. Whether you need an iPhone screen repair, a Samsung battery replacement, or a MacBook charging port fix, our technicians are trained and equipped for all of them. We carry parts for all major models and complete most repairs on the spot while you wait.
              </p>
              <p>
                Open 7 days a week from 9am to 9pm, our stores are easy to reach from {suburb.displayName}. No appointment is needed — simply walk in, describe the issue, and we&apos;ll have your device assessed and quoted within minutes. Our cheapest price guarantee means if you find a verified lower price elsewhere for the same repair with the same warranty, we will beat it.
              </p>
              <p>
                If you&apos;re looking to sell your old device rather than repair it, we also buy iPhones, Samsung phones, and other devices for instant cash — in any condition. Visit our{' '}
                <Link href="/sell-my-device" className="text-red-600 hover:underline font-medium">sell my device page</Link>
                {' '}for more details, or bring your phone in for an on-the-spot valuation.
              </p>
            </div>
            {/* Internal links */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { label: `${deviceDisplayName} Screen Repair`, href: deviceSlug === 'iphone' ? '/iphone-screen-repair' : `/${brand.categoryPageSlug}` },
                { label: `${deviceDisplayName} Battery Replacement`, href: deviceSlug === 'iphone' ? '/iphone-battery-replacement' : `/${brand.categoryPageSlug}` },
                { label: `${deviceDisplayName} Charging Port Repair`, href: deviceSlug === 'iphone' ? '/iphone-charging-port-repair' : `/${brand.categoryPageSlug}` },
                { label: 'Sell My Device', href: '/sell-my-device' },
                { label: 'Sell My iPhone', href: '/sell-my-iphone' },
                { label: `All ${deviceDisplayName} Repairs`, href: `/${brand.categoryPageSlug}` },
              ].map(({ label, href }) => (
                <Link key={href + label} href={href} className="text-sm text-red-600 hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">
                  {label}
                </Link>
              ))}
            </div>
          </section>

          {/* ── CTA Banner ── */}
          <section className="bg-red-600 text-white rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              {deviceDisplayName} Repair Near {suburb.displayName} — Visit Us Today
            </h2>
            <p className="text-red-100 text-lg mb-8 max-w-xl mx-auto">
              A short drive from {suburb.displayName}. Walk in any time — no appointment needed. On the spot 15 minute repairs with lifetime warranty.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${business.phone}`}
                className="bg-white text-red-600 hover:bg-red-50 font-bold px-8 py-3 rounded-lg transition-colors"
              >
                Call {business.phoneDisplay}
              </a>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(`${business.address}, ${business.suburb} VIC ${business.postcode}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-red-700 font-bold px-8 py-3 rounded-lg transition-colors"
              >
                Get Directions
              </a>
            </div>
            <p className="mt-6 text-red-200 text-sm">
              {matchedLocation.address}, {matchedLocation.suburb} VIC {matchedLocation.postcode}
              {' · '}7 Days 9am–9pm
            </p>
          </section>

        </main>
      </div>
    </>
  )
}
