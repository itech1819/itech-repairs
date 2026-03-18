import { business, locations, primaryLocation } from '@/data'
import type { BusinessLocation } from '@/types'
export { generateBreadcrumbSchema } from '@/lib/seo'
export { generateFAQSchema } from '@/lib/seo'

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function buildOpeningHoursSpec() {
  return business.openingHours
    .filter((oh) => oh.isOpen)
    .map((oh) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: oh.days,
      opens: oh.hours.split('–')[0]?.trim() ?? '09:00',
      closes: oh.hours.split('–')[1]?.trim() ?? '18:00',
    }))
}

// ---------------------------------------------------------------------------
// Organization schema (for homepage)
// ---------------------------------------------------------------------------

export function generateOrganizationSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'iTech Repairs',
    url: 'https://www.itechrepairs.com.au',
    telephone: business.phone,
    logo: 'https://www.itechrepairs.com.au/logo.png',
    areaServed: business.schema.areaServed,
    location: locations.map((loc) => ({
      '@type': 'PostalAddress',
      streetAddress: loc.address,
      addressLocality: loc.suburb,
      addressRegion: loc.state,
      postalCode: loc.postcode,
      addressCountry: loc.country,
    })),
  }
}

// ---------------------------------------------------------------------------
// Website schema (for homepage)
// ---------------------------------------------------------------------------

export function generateWebsiteSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'iTech Repairs',
    url: 'https://www.itechrepairs.com.au',
    inLanguage: 'en-AU',
    publisher: {
      '@type': 'Organization',
      name: 'iTech Repairs',
    },
  }
}

// ---------------------------------------------------------------------------
// Per-location RepairShop schema
// ---------------------------------------------------------------------------

export function generateRepairShopSchema(location: BusinessLocation): object {
  const openingHoursSpec = buildOpeningHoursSpec()

  return {
    '@context': 'https://schema.org',
    '@type': 'RepairShop',
    name: location.name,
    telephone: location.phone,
    url: 'https://www.itechrepairs.com.au',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: location.address,
      addressLocality: location.suburb,
      addressRegion: location.state,
      postalCode: location.postcode,
      addressCountry: location.country,
    },
    openingHoursSpecification: openingHoursSpec,
    sameAs: [location.googleBusinessProfileUrl],
    areaServed: 'Western Melbourne, VIC, Australia',
    parentOrganization: {
      '@type': 'Organization',
      name: 'iTech Repairs',
    },
  }
}

// ---------------------------------------------------------------------------
// Service schema (flexible, for repair / model hub / category / location pages)
// ---------------------------------------------------------------------------

export function generateServiceSchema(params: {
  name: string
  description: string
  serviceType: string
  areaServed?: string
  providerLocation?: BusinessLocation
}): object {
  const loc = params.providerLocation ?? primaryLocation

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: params.name,
    description: params.description,
    serviceType: params.serviceType,
    areaServed: params.areaServed ?? business.schema.areaServed,
    provider: {
      '@type': 'RepairShop',
      name: business.name,
      telephone: loc.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: loc.address,
        addressLocality: loc.suburb,
        addressRegion: loc.state,
        postalCode: loc.postcode,
        addressCountry: loc.country,
      },
    },
  }
}

// ---------------------------------------------------------------------------
// Offer schema (for repair pages with pricing)
// ---------------------------------------------------------------------------

export function generateOfferSchema(params: {
  name: string
  priceDisplay: string
  startingPrice: number | null
  currency: string
  url: string
}): object {
  const offer: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: params.name,
    availability: 'https://schema.org/InStock',
    priceCurrency: params.currency,
    url: params.url,
  }

  if (params.startingPrice !== null) {
    offer.price = params.startingPrice
    offer.priceSpecification = {
      '@type': 'PriceSpecification',
      price: params.startingPrice,
      priceCurrency: params.currency,
      description: params.priceDisplay,
    }
  }

  return offer
}

// ---------------------------------------------------------------------------
// AggregateRating schema (for LocalBusiness — only when data is available)
// ---------------------------------------------------------------------------

export function generateAggregateRatingSchema(params: {
  ratingValue: number
  reviewCount: number
}): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    ratingValue: params.ratingValue,
    reviewCount: params.reviewCount,
    bestRating: 5,
    worstRating: 1,
  }
}
