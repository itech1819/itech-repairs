import { business } from '@/data'
import { buildRepairPageSlug, buildModelHubSlug } from '@/lib/slug'
import type { Model, RepairService, Suburb, Brand, FAQItem, DeviceCategory, BusinessLocation } from '@/types'

// ---------------------------------------------------------------------------
// Core metadata interface
// ---------------------------------------------------------------------------

export interface PageMetadata {
  title: string
  description: string
  canonical: string
  ogTitle: string
  ogDescription: string
  ogImage: string
  robots: string
}

// ---------------------------------------------------------------------------
// Display name helpers
// ---------------------------------------------------------------------------

/**
 * Converts a device slug into its human-readable display name for location pages.
 * pixel → Google Pixel, macbook → MacBook, iphone → iPhone, etc.
 */
function deviceSlugToDisplayName(deviceSlug: string): string {
  const map: Record<string, string> = {
    iphone: 'iPhone',
    samsung: 'Samsung',
    pixel: 'Google Pixel',
    ipad: 'iPad',
    macbook: 'MacBook',
  }
  return map[deviceSlug] ?? deviceSlug
}

// ---------------------------------------------------------------------------
// Page metadata generators
// ---------------------------------------------------------------------------

/**
 * Builds a meta title from ordered parts, fitting within maxLen characters.
 * Tries the full list first, drops trailing parts until it fits — no truncation with "…".
 * Target 65 chars: leaves ~15 chars for " | iTech Repairs" appended by the layout template.
 */
function buildTitle(parts: string[], maxLen = 65): string {
  for (let i = parts.length; i > 0; i--) {
    const candidate = parts.slice(0, i).join(' | ')
    if (candidate.length <= maxLen) return candidate
  }
  return parts[0].slice(0, maxLen)
}

/**
 * Generates metadata for an individual repair detail page.
 * Title: "[Model] [Repair] Melbourne | iTech Repairs" (≤60 chars)
 * Description: 140–160 chars with keyword + Melbourne + warranty + cheapest price
 */
export function generateRepairPageMeta(model: Model, repair: RepairService): PageMetadata {
  const keyword = `${model.displayName} ${repair.displayName} Melbourne`
  const title = buildTitle([keyword, 'Cheapest Guaranteed', '15-Min Fix'])
  const ogTitle = `${keyword} | Cheapest Price Guaranteed | 15-Min On-The-Spot Repair | iTech Repairs`
  const description = `Need ${model.displayName} ${repair.displayName} in Melbourne? Walk in today — 15-minute on-the-spot repairs, lifetime warranty and cheapest price guaranteed at iTech Repairs. Open 7 days.`
  const canonical = `/${buildRepairPageSlug(model.slug, repair.slug)}`

  return {
    title,
    description,
    canonical,
    ogTitle,
    ogDescription: description,
    ogImage: business.socialPreview.ogImage,
    robots: 'index, follow',
  }
}

/**
 * Generates metadata for a model hub page (all repairs for one model).
 * Title: "[Model] Repair Melbourne | Cheapest | iTech Repairs" (≤60 chars)
 */
export function generateModelHubMeta(model: Model): PageMetadata {
  const keyword = `${model.displayName} Repair Melbourne`
  const title = buildTitle([keyword, 'Cheapest Price Guaranteed', 'Open 7 Days'])
  const ogTitle = `${keyword} | Cheapest Price Guaranteed | 15-Min On-The-Spot Repairs | iTech Repairs`
  const description = `Need ${model.displayName} repair in Melbourne? Get screen, battery, charging port & more — 15-minute on-the-spot repairs, lifetime warranty and cheapest price guaranteed. Open 7 days.`
  const canonical = `/${buildModelHubSlug(model.slug)}`

  return {
    title,
    description,
    canonical,
    ogTitle,
    ogDescription: description,
    ogImage: business.socialPreview.ogImage,
    robots: 'index, follow',
  }
}

/**
 * Generates metadata for a suburb location page.
 * Title: "[Device] Repair [Suburb] Melbourne | iTech Repairs" (≤60 chars)
 */
export function generateLocationPageMeta(deviceSlug: string, suburb: Suburb): PageMetadata {
  const deviceDisplayName = deviceSlugToDisplayName(deviceSlug)
  const keyword = `${deviceDisplayName} Repair ${suburb.displayName}`
  const title = buildTitle([keyword, '15-Min Fix', 'Cheapest Guaranteed'])
  const ogTitle = `${keyword} | 15-Min On-The-Spot Repairs | Cheapest Price Guaranteed | iTech Repairs`
  const description = `Looking for ${deviceDisplayName} repair near ${suburb.displayName}? iTech Repairs offers 15-minute on-the-spot repairs, cheapest price guaranteed and lifetime warranty. Walk in today — open 7 days.`
  const canonical = `/${deviceSlug}-repair-${suburb.slug}`

  return {
    title,
    description,
    canonical,
    ogTitle,
    ogDescription: description,
    ogImage: business.socialPreview.ogImage,
    robots: 'index, follow',
  }
}

/**
 * Generates metadata for a brand/category hub page.
 * Title format: [Device] Repair Melbourne | 15 Minute Repairs | iTech Repairs
 */
export function generateCategoryPageMeta(brand: Brand): PageMetadata {
  const keyword = `${brand.displayName} Repair Melbourne`
  const title = buildTitle([keyword, 'Cheapest Price Guaranteed', '15-Min Fix'])
  const ogTitle = `${keyword} | Cheapest Price Guaranteed | 15-Min On-The-Spot Repairs | iTech Repairs`
  const description = `Need ${brand.displayName} repair in Melbourne? Get screen, battery, charging port & more with 15-minute on-the-spot service, cheapest price guaranteed and lifetime warranty. Open 7 days.`
  const canonical = `/${brand.categoryPageSlug}`

  return {
    title,
    description,
    canonical,
    ogTitle,
    ogDescription: description,
    ogImage: business.socialPreview.ogImage,
    robots: 'index, follow',
  }
}

/**
 * Generates metadata for the homepage.
 */
export function generateHomepageMeta(): PageMetadata {
  const title = 'Fast Phone & Laptop Repairs in Melbourne | iTech Repairs'
  const description =
    'On the spot 15 minute iPhone, Samsung, iPad & MacBook repairs in Melbourne. Cheapest repairs guaranteed. Lifetime warranty on all repairs. Walk-ins welcome at iTech Repairs.'

  return {
    title,
    description,
    canonical: '/',
    ogTitle: title,
    ogDescription: description,
    ogImage: business.socialPreview.ogImage,
    robots: 'index, follow',
  }
}

// ---------------------------------------------------------------------------
// Structured data (JSON-LD) generators
// ---------------------------------------------------------------------------

/**
 * Generates a full schema.org LocalBusiness JSON-LD object for the business.
 */
export function generateLocalBusinessSchema(): object {
  const openingHoursSpec = business.openingHours
    .filter((oh) => oh.isOpen)
    .map((oh) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: oh.days,
      opens: oh.hours.split('–')[0]?.trim() ?? '09:00',
      closes: oh.hours.split('–')[1]?.trim() ?? '18:00',
    }))

  return {
    '@context': 'https://schema.org',
    '@type': business.schema.type,
    name: business.name,
    description: business.tagline,
    url: 'https://www.itechrepairs.com.au',
    telephone: business.phone,
    email: business.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address,
      addressLocality: business.suburb,
      addressRegion: business.state,
      postalCode: business.postcode,
      addressCountry: business.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
    },
    areaServed: business.schema.areaServed,
    priceRange: business.schema.priceRange,
    currenciesAccepted: business.schema.currenciesAccepted,
    paymentAccepted: business.schema.paymentAccepted,
    openingHoursSpecification: openingHoursSpec,
    image: business.socialPreview.ogImage,
    sameAs: [],
  }
}

/**
 * Generates a schema.org LocalBusiness JSON-LD object for a specific physical location.
 */
export function generateLocationBusinessSchema(location: BusinessLocation): object {
  const openingHoursSpec = business.openingHours
    .filter((oh) => oh.isOpen)
    .map((oh) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: oh.days,
      opens: oh.hours.split('–')[0]?.trim() ?? '09:00',
      closes: oh.hours.split('–')[1]?.trim() ?? '18:00',
    }))

  return {
    '@context': 'https://schema.org',
    '@type': business.schema.type,
    name: location.name,
    description: business.tagline,
    url: 'https://www.itechrepairs.com.au',
    telephone: location.phone,
    email: business.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: location.address,
      addressLocality: location.suburb,
      addressRegion: location.state,
      postalCode: location.postcode,
      addressCountry: location.country,
    },
    areaServed: business.schema.areaServed,
    priceRange: business.schema.priceRange,
    currenciesAccepted: business.schema.currenciesAccepted,
    paymentAccepted: business.schema.paymentAccepted,
    openingHoursSpecification: openingHoursSpec,
    image: business.socialPreview.ogImage,
    sameAs: [location.googleBusinessProfileUrl],
  }
}

/**
 * Generates a schema.org Service JSON-LD object for a specific repair on a specific model.
 */
export function generateServiceSchema(model: Model, repair: RepairService): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${model.displayName} ${repair.displayName}`,
    description: repair.longDescription,
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
    areaServed: {
      '@type': 'City',
      name: business.city,
    },
    serviceType: repair.displayName,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      itemOffered: {
        '@type': 'Product',
        name: `${model.displayName} ${repair.displayName}`,
      },
    },
  }
}

/**
 * Generates a schema.org FAQPage JSON-LD object from an array of FAQ items.
 */
export function generateFAQSchema(faqs: FAQItem[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

/**
 * Generates a schema.org BreadcrumbList JSON-LD object.
 * items: ordered array of { name, url } from root to current page.
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
