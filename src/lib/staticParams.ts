import {
  getAllRepairPageSlugs,
  getAllModelHubSlugs,
  getAllLocationSlugs,
  getAllDynamicSlugs,
} from '@/lib/slug'

// ---------------------------------------------------------------------------
// generateStaticParams helpers for Next.js App Router
// ---------------------------------------------------------------------------

/**
 * Static params for all repair detail pages.
 * Returns 3,003 entries (one per model × supported repair combination).
 *
 * Usage in page.tsx:
 *   export async function generateStaticParams() {
 *     return getRepairPageStaticParams()
 *   }
 */
export function getRepairPageStaticParams(): { slug: string }[] {
  return getAllRepairPageSlugs().map((slug) => ({ slug }))
}

/**
 * Static params for all model hub pages.
 * Returns 110 entries (33 iPhone + 25 Samsung + 15 Pixel + 13 iPad + 24 MacBook).
 *
 * Usage in page.tsx:
 *   export async function generateStaticParams() {
 *     return getModelHubStaticParams()
 *   }
 */
export function getModelHubStaticParams(): { slug: string }[] {
  return getAllModelHubSlugs().map((slug) => ({ slug }))
}

/**
 * Static params for all suburb location pages.
 * Returns 50 entries (5 devices × 10 Phase 1 suburbs).
 *
 * Usage in page.tsx:
 *   export async function generateStaticParams() {
 *     return getLocationPageStaticParams()
 *   }
 */
export function getLocationPageStaticParams(): { slug: string }[] {
  return getAllLocationSlugs().map((slug) => ({ slug }))
}

/**
 * Combined static params for the [slug] catch-all dynamic route.
 * Returns 3,163 entries:
 *   - 3,003 repair pages
 *   -   110 model hub pages
 *   -    50 location pages
 *
 * Usage in app/[slug]/page.tsx:
 *   export async function generateStaticParams() {
 *     return getAllDynamicStaticParams()
 *   }
 */
export function getAllDynamicStaticParams(): { slug: string }[] {
  return getAllDynamicSlugs().map((slug) => ({ slug }))
}

// ---------------------------------------------------------------------------
// Development / CI validation utility
// ---------------------------------------------------------------------------

export interface SlugValidationResult {
  valid: boolean
  totalSlugs: number
  duplicates: string[]
  duplicateCount: number
  breakdown: {
    repairPages: number
    modelHubPages: number
    locationPages: number
  }
}

/**
 * Validates that every slug in the [slug] dynamic route is unique.
 *
 * In a correctly-built dataset there should be zero duplicates.
 * Useful as a build-time assertion or in CI tests.
 *
 * @example
 * const result = validateSlugUniqueness()
 * if (!result.valid) {
 *   console.error('Duplicate slugs found:', result.duplicates)
 * }
 */
export function validateSlugUniqueness(): SlugValidationResult {
  const repairSlugs = getAllRepairPageSlugs()
  const modelHubSlugs = getAllModelHubSlugs()
  const locationSlugs = getAllLocationSlugs()

  const all = [...repairSlugs, ...modelHubSlugs, ...locationSlugs]
  const seen = new Set<string>()
  const duplicates: string[] = []

  for (const slug of all) {
    if (seen.has(slug)) {
      duplicates.push(slug)
    } else {
      seen.add(slug)
    }
  }

  return {
    valid: duplicates.length === 0,
    totalSlugs: all.length,
    duplicates,
    duplicateCount: duplicates.length,
    breakdown: {
      repairPages: repairSlugs.length,
      modelHubPages: modelHubSlugs.length,
      locationPages: locationSlugs.length,
    },
  }
}
