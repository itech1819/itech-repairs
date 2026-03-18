import {
  ALL_MODELS,
  MODEL_BY_SLUG,
  MODELS_BY_CATEGORY,
  SUBURB_BY_SLUG,
  PHASE1_SUBURBS,
  ALL_REPAIR_SLUGS_BY_CATEGORY,
  getRepairBySlug,
} from '@/data'
import type { ParsedSlug, DeviceCategory } from '@/types'

/**
 * The 5 device slugs used in location page URL patterns.
 * NOTE: pixel uses 'pixel' (not 'google-pixel') → pixel-repair-[suburb]
 * NOTE: macbook uses 'macbook' → macbook-repair-[suburb]
 */
export const DEVICE_SLUGS = ['iphone', 'samsung', 'macbook', 'ipad', 'pixel'] as const

export type DeviceSlug = (typeof DEVICE_SLUGS)[number]

/**
 * Map from device slug → DeviceCategory.
 * The device slugs are identical to the DeviceCategory values for all 5 devices.
 */
const DEVICE_SLUG_TO_CATEGORY: Record<DeviceSlug, DeviceCategory> = {
  iphone: 'iphone',
  samsung: 'samsung',
  macbook: 'macbook',
  ipad: 'ipad',
  pixel: 'pixel',
}

// ---------------------------------------------------------------------------
// Builder helpers
// ---------------------------------------------------------------------------

/**
 * Builds the canonical slug for a repair detail page.
 * Pattern: `${modelSlug}-${repairSlug}-melbourne`
 * Example: `iphone-15-pro-screen-replacement-melbourne`
 */
export function buildRepairPageSlug(modelSlug: string, repairSlug: string): string {
  return `${modelSlug}-${repairSlug}-melbourne`
}

/**
 * Builds the canonical slug for a model hub page.
 * Pattern: `${modelSlug}-repair-melbourne`
 * Example: `iphone-15-pro-repair-melbourne`
 */
export function buildModelHubSlug(modelSlug: string): string {
  return `${modelSlug}-repair-melbourne`
}

/**
 * Builds the canonical slug for a suburb location page.
 * Pattern: `${deviceSlug}-repair-${suburbSlug}`
 * Example: `iphone-repair-richmond`, `pixel-repair-fitzroy`
 */
export function buildLocationSlug(deviceSlug: string, suburbSlug: string): string {
  return `${deviceSlug}-repair-${suburbSlug}`
}

// ---------------------------------------------------------------------------
// parseSlug — critical routing function
// ---------------------------------------------------------------------------

/**
 * Parses any slug from the [slug] dynamic route and returns a typed ParsedSlug
 * describing exactly what page it corresponds to.
 *
 * Resolution order:
 *  1. Location pages  — `${deviceSlug}-repair-${suburbSlug}`
 *  2. Model hub pages — `${modelSlug}-repair-melbourne`
 *  3. Repair pages    — `${modelSlug}-${repairSlug}-melbourne`
 *  4. not-found
 */
export function parseSlug(slug: string): ParsedSlug {
  // ── 1. Location pages ──────────────────────────────────────────────────
  // Pattern: ${deviceSlug}-repair-${suburbSlug}
  for (const deviceSlug of DEVICE_SLUGS) {
    const prefix = `${deviceSlug}-repair-`
    if (slug.startsWith(prefix)) {
      const suburbSlug = slug.slice(prefix.length)
      if (suburbSlug.length > 0) {
        const suburb = SUBURB_BY_SLUG.get(suburbSlug)
        if (suburb) {
          return {
            type: 'location',
            deviceCategory: DEVICE_SLUG_TO_CATEGORY[deviceSlug],
            suburb,
          }
        }
      }
    }
  }

  // ── 2. Model hub pages ─────────────────────────────────────────────────
  // Pattern: ${modelSlug}-repair-melbourne
  const MODEL_HUB_SUFFIX = '-repair-melbourne'
  if (slug.endsWith(MODEL_HUB_SUFFIX)) {
    const modelSlug = slug.slice(0, slug.length - MODEL_HUB_SUFFIX.length)
    const model = MODEL_BY_SLUG.get(modelSlug)
    if (model) {
      return {
        type: 'model-hub',
        deviceCategory: model.brand,
        model,
      }
    }
  }

  // ── 3. Repair pages ────────────────────────────────────────────────────
  // Pattern: ${modelSlug}-${repairSlug}-melbourne
  if (slug.endsWith('-melbourne')) {
    const withoutSuffix = slug.slice(0, slug.length - '-melbourne'.length)

    // Try every known model slug as a prefix to extract the repair slug remainder
    for (const model of ALL_MODELS) {
      const modelPrefix = `${model.slug}-`
      if (withoutSuffix.startsWith(modelPrefix)) {
        const repairSlug = withoutSuffix.slice(modelPrefix.length)
        if (repairSlug.length > 0 && model.supportedRepairSlugs.includes(repairSlug)) {
          const repair = getRepairBySlug(repairSlug)
          if (repair) {
            return {
              type: 'repair',
              deviceCategory: model.brand,
              model,
              repair,
            }
          }
        }
      }
    }
  }

  // ── 4. Suburb-device pages ──────────────────────────────────────────────
  // Pattern: ${suburbSlug}-${deviceSlug}-repair
  // Examples: braybrook-iphone-repair, footscray-samsung-repair
  for (const [suburbSlug, suburb] of SUBURB_BY_SLUG) {
    const prefix = `${suburbSlug}-`
    if (slug.startsWith(prefix)) {
      const remainder = slug.slice(prefix.length)
      for (const deviceSlug of DEVICE_SLUGS) {
        if (remainder === `${deviceSlug}-repair`) {
          return {
            type: 'suburb-device',
            suburb,
            deviceCategory: DEVICE_SLUG_TO_CATEGORY[deviceSlug],
          }
        }
      }
      // ── 5. Suburb-repair pages ──────────────────────────────────────────────
      // Pattern: ${suburbSlug}-${deviceSlug}-${repairSlug}
      // Examples: braybrook-iphone-screen-repair, footscray-iphone-battery-replacement
      for (const deviceSlug of DEVICE_SLUGS) {
        const devicePrefix = `${deviceSlug}-`
        if (remainder.startsWith(devicePrefix)) {
          const repairSlug = remainder.slice(devicePrefix.length)
          const repair = getRepairBySlug(repairSlug)
          if (repair) {
            return {
              type: 'suburb-repair',
              suburb,
              deviceCategory: DEVICE_SLUG_TO_CATEGORY[deviceSlug],
              repair,
            }
          }
        }
      }
    }
  }

  // ── 6. Not found ───────────────────────────────────────────────────────
  return { type: 'not-found' }
}

// ---------------------------------------------------------------------------
// Static slug generators — used in generateStaticParams
// ---------------------------------------------------------------------------

/**
 * Returns all repair page slugs.
 * Total: 3,003 slugs across all categories.
 * (iPhone: 990, Samsung: 725, Pixel: 435, iPad: 325, MacBook: 528)
 */
export function getAllRepairPageSlugs(): string[] {
  const slugs: string[] = []
  for (const model of ALL_MODELS) {
    for (const repairSlug of model.supportedRepairSlugs) {
      slugs.push(buildRepairPageSlug(model.slug, repairSlug))
    }
  }
  return slugs
}

/**
 * Returns all model hub page slugs.
 * Total: 110 slugs (iPhone: 33, Samsung: 25, Pixel: 15, iPad: 13, MacBook: 24).
 */
export function getAllModelHubSlugs(): string[] {
  return ALL_MODELS.map((model) => buildModelHubSlug(model.slug))
}

/**
 * Returns all location page slugs.
 * Total: 50 slugs (5 devices × 10 Phase 1 suburbs).
 */
export function getAllLocationSlugs(): string[] {
  const slugs: string[] = []
  for (const deviceSlug of DEVICE_SLUGS) {
    for (const suburb of PHASE1_SUBURBS) {
      slugs.push(buildLocationSlug(deviceSlug, suburb.slug))
    }
  }
  return slugs
}

/**
 * Returns all suburb-device page slugs (suburb-first iPhone only for now).
 * Pattern: ${suburbSlug}-iphone-repair
 */
export function getAllSuburbDeviceSlugs(): string[] {
  return PHASE1_SUBURBS.map((suburb) => `${suburb.slug}-iphone-repair`)
}

/**
 * Returns all suburb-repair page slugs (suburb-first iPhone only).
 * Pattern: ${suburbSlug}-iphone-${repairSlug}
 * Targets: 5 most common iPhone repairs
 */
export function getAllSuburbRepairSlugs(): string[] {
  const targetRepairs = ['screen-repair', 'battery-replacement', 'charging-port-repair', 'water-damage-repair', 'camera-repair']
  const slugs: string[] = []
  for (const suburb of PHASE1_SUBURBS) {
    for (const repairSlug of targetRepairs) {
      slugs.push(`${suburb.slug}-iphone-${repairSlug}`)
    }
  }
  return slugs
}

/**
 * Returns every slug that goes into the [slug] dynamic route.
 */
export function getAllDynamicSlugs(): string[] {
  return [
    ...getAllRepairPageSlugs(),
    ...getAllModelHubSlugs(),
    ...getAllLocationSlugs(),
    // Structure A suburb pages removed — redirected to /suburb-repairs/* (Structure B)
  ]
}
