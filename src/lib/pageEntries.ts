/**
 * pageEntries.ts
 *
 * Pre-computed page entry registry for all 3,172 Phase 1 static pages.
 *
 * This is the single source of truth powering:
 *   - generateStaticParams()
 *   - generateMetadata()
 *   - sitemap generation
 *   - breadcrumbs
 *   - internal linking
 *   - page templates
 *
 * Computed once at module load — never in per-request code.
 */

import {
  ALL_MODELS,
  MODELS_BY_CATEGORY,
  PHASE1_SUBURBS,
  brands,
} from '@/lib/lookupMaps'
import {
  buildModelHubSlug,
  buildRepairPageSlug,
  buildLocationSlug,
  DEVICE_SLUGS,
} from '@/lib/slug'
import type { DeviceCategory } from '@/types'

// ---------------------------------------------------------------------------
// Entry types
// ---------------------------------------------------------------------------

export interface CategoryEntry {
  type: 'category'
  slug: string
  deviceCategory: DeviceCategory
  displayName: string
  categoryDisplayName: string
}

export interface ModelHubEntry {
  type: 'model-hub'
  slug: string
  deviceCategory: DeviceCategory
  modelSlug: string
  modelDisplayName: string
}

export interface RepairPageEntry {
  type: 'repair'
  slug: string
  deviceCategory: DeviceCategory
  modelSlug: string
  repairSlug: string
}

export interface LocationPageEntry {
  type: 'location'
  slug: string
  deviceCategory: DeviceCategory
  deviceSlug: string
  suburbSlug: string
  suburbDisplayName: string
}

export interface UtilityPageEntry {
  type: 'utility'
  slug: string
  displayName: string
  priority: number
}

export type SeoPageEntry =
  | CategoryEntry
  | ModelHubEntry
  | RepairPageEntry
  | LocationPageEntry

// ---------------------------------------------------------------------------
// Category entries (5)
// ---------------------------------------------------------------------------

export const categoryEntries: CategoryEntry[] = brands.map((brand) => ({
  type: 'category',
  slug: brand.categoryPageSlug,
  deviceCategory: brand.deviceCategory,
  displayName: brand.displayName,
  categoryDisplayName: brand.categoryDisplayName,
}))

// ---------------------------------------------------------------------------
// Model hub entries (110)
// ---------------------------------------------------------------------------

export const modelHubEntries: ModelHubEntry[] = ALL_MODELS.map((model) => ({
  type: 'model-hub',
  slug: buildModelHubSlug(model.slug),
  deviceCategory: model.brand,
  modelSlug: model.slug,
  modelDisplayName: model.displayName,
}))

// ---------------------------------------------------------------------------
// Repair page entries (3,003)
//   iPhone: 33 × 30 = 990
//   Samsung: 25 × 29 = 725
//   Pixel:  15 × 29 = 435
//   iPad:   13 × 25 = 325
//   MacBook: 24 × 22 = 528
//   Total: 3,003
// ---------------------------------------------------------------------------

export const repairPageEntries: RepairPageEntry[] = (() => {
  const entries: RepairPageEntry[] = []
  for (const model of ALL_MODELS) {
    for (const repairSlug of model.supportedRepairSlugs) {
      entries.push({
        type: 'repair',
        slug: buildRepairPageSlug(model.slug, repairSlug),
        deviceCategory: model.brand,
        modelSlug: model.slug,
        repairSlug,
      })
    }
  }
  return entries
})()

// ---------------------------------------------------------------------------
// Location page entries (50)
//   5 device slugs × 10 Phase 1 suburbs = 50
// ---------------------------------------------------------------------------

export const locationPageEntries: LocationPageEntry[] = (() => {
  const entries: LocationPageEntry[] = []
  for (const deviceSlug of DEVICE_SLUGS) {
    const deviceCategory = deviceSlug as DeviceCategory
    for (const suburb of PHASE1_SUBURBS) {
      entries.push({
        type: 'location',
        slug: buildLocationSlug(deviceSlug, suburb.slug),
        deviceCategory,
        deviceSlug,
        suburbSlug: suburb.slug,
        suburbDisplayName: suburb.displayName,
      })
    }
  }
  return entries
})()

// ---------------------------------------------------------------------------
// Utility page entries (4)
// ---------------------------------------------------------------------------

export const utilityPageEntries: UtilityPageEntry[] = [
  { type: 'utility', slug: 'contact', displayName: 'Contact', priority: 1 },
  { type: 'utility', slug: 'about', displayName: 'About', priority: 2 },
  { type: 'utility', slug: 'warranty', displayName: 'Warranty', priority: 3 },
  { type: 'utility', slug: 'privacy', displayName: 'Privacy Policy', priority: 4 },
]

// ---------------------------------------------------------------------------
// Combined — all SEO entries (3,168 dynamic + 5 category = 3,173 total)
// ---------------------------------------------------------------------------

export const allSeoPageEntries: SeoPageEntry[] = [
  ...categoryEntries,
  ...modelHubEntries,
  ...repairPageEntries,
  ...locationPageEntries,
]

// ---------------------------------------------------------------------------
// Slug sets for fast O(1) validation
// ---------------------------------------------------------------------------

export const allSeoSlugs: Set<string> = new Set(allSeoPageEntries.map((e) => e.slug))

// ---------------------------------------------------------------------------
// Summary totals (useful for validation and CI checks)
// ---------------------------------------------------------------------------

export const PAGE_TOTALS = {
  categoryPages: categoryEntries.length,        // 5
  modelHubPages: modelHubEntries.length,        // 110
  repairPages: repairPageEntries.length,        // 3,003
  locationPages: locationPageEntries.length,    // 50
  utilityPages: utilityPageEntries.length,      // 4
  total: allSeoPageEntries.length + utilityPageEntries.length, // 3,172
} as const

// ---------------------------------------------------------------------------
// Lookup maps over entries
// ---------------------------------------------------------------------------

/** O(1) slug → entry lookup for routing */
export const ENTRY_BY_SLUG: Map<string, SeoPageEntry> = new Map(
  allSeoPageEntries.map((entry) => [entry.slug, entry]),
)

/** All repair entries for a given model slug */
export function getRepairEntriesForModel(modelSlug: string): RepairPageEntry[] {
  return repairPageEntries.filter((e) => e.modelSlug === modelSlug)
}

/** All model hub entries for a given device category */
export function getModelHubEntriesForCategory(category: DeviceCategory): ModelHubEntry[] {
  return modelHubEntries.filter((e) => e.deviceCategory === category)
}

/** All location entries for a given device slug */
export function getLocationEntriesForDevice(deviceSlug: string): LocationPageEntry[] {
  return locationPageEntries.filter((e) => e.deviceSlug === deviceSlug)
}

// ---------------------------------------------------------------------------
// generateStaticParams shape — used in Next.js [slug]/page.tsx
// ---------------------------------------------------------------------------

export function getAllDynamicStaticParams(): { slug: string }[] {
  return [...modelHubEntries, ...repairPageEntries, ...locationPageEntries].map((e) => ({
    slug: e.slug,
  }))
}
