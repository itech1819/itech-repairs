import {
  MODELS_BY_CATEGORY,
  PHASE1_SUBURBS,
  brands,
  getRepairBySlug,
} from '@/data'
import {
  buildRepairPageSlug,
  buildModelHubSlug,
  buildLocationSlug,
  DEVICE_SLUGS,
} from '@/lib/slug'
import type { Model, DeviceCategory } from '@/types'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface InternalLink {
  href: string
  label: string
  type: 'model-hub' | 'category' | 'repair' | 'location'
}

// ---------------------------------------------------------------------------
// iPhone core service page back-links
// ---------------------------------------------------------------------------

const IPHONE_CORE_SERVICE_LINKS: Partial<Record<string, { href: string; label: string }>> = {
  'screen-repair': { href: '/iphone-screen-repair', label: 'iPhone Screen Repair — All Models' },
  'screen-replacement': { href: '/iphone-screen-replacement', label: 'iPhone Screen Replacement — All Models' },
  'battery-replacement': { href: '/iphone-battery-replacement', label: 'iPhone Battery Replacement — All Models' },
  'charging-port-repair': { href: '/iphone-charging-port-repair', label: 'iPhone Charging Port Repair — All Models' },
  'charging-port-replacement': { href: '/iphone-charging-port-repair', label: 'iPhone Charging Port Repair — All Models' },
  'back-glass-repair': { href: '/iphone-back-glass-repair', label: 'iPhone Back Glass Repair — All Models' },
  'back-cover-replacement': { href: '/iphone-back-cover-repair', label: 'iPhone Back Cover Repair — All Models' },
  'rear-camera-replacement': { href: '/iphone-rear-camera-repair', label: 'iPhone Rear Camera Repair — All Models' },
  'camera-repair': { href: '/iphone-rear-camera-repair', label: 'iPhone Camera Repair — All Models' },
  'front-camera-replacement': { href: '/iphone-front-camera-repair', label: 'iPhone Front Camera Repair — All Models' },
  'camera-lens-replacement': { href: '/iphone-camera-lens-repair', label: 'iPhone Camera Lens Repair — All Models' },
  'loudspeaker-replacement': { href: '/iphone-speaker-repair', label: 'iPhone Speaker Repair — All Models' },
  'speaker-repair': { href: '/iphone-speaker-repair', label: 'iPhone Speaker Repair — All Models' },
  'earpiece-replacement': { href: '/iphone-earpiece-repair', label: 'iPhone Earpiece Repair — All Models' },
  'microphone-replacement': { href: '/iphone-microphone-repair', label: 'iPhone Microphone Repair — All Models' },
  'volume-button-replacement': { href: '/iphone-volume-button-repair', label: 'iPhone Volume Button Repair — All Models' },
  'power-button-replacement': { href: '/iphone-volume-button-repair', label: 'iPhone Volume Button Repair — All Models' },
  'vibrator-replacement': { href: '/iphone-vibration-repair', label: 'iPhone Vibration / Haptic Motor Repair — All Models' },
  'proximity-sensor-replacement': { href: '/iphone-proximity-sensor-repair', label: 'iPhone Proximity Sensor Repair — All Models' },
  'face-id-repair': { href: '/iphone-face-id-repair', label: 'iPhone Face ID Repair — All Models' },
  'touch-screen-repair': { href: '/iphone-touchscreen-repair', label: 'iPhone Touch Screen Repair — All Models' },
  'ghost-touch-repair': { href: '/iphone-ghost-touch-repair', label: 'iPhone Ghost Touch Repair — All Models' },
  'water-damage-repair': { href: '/iphone-water-damage-repair', label: 'iPhone Water Damage Repair — All Models' },
  'water-damage-assessment': { href: '/iphone-water-damage-repair', label: 'iPhone Water Damage Repair — All Models' },
  'data-recovery': { href: '/iphone-data-recovery', label: 'iPhone Data Recovery — All Models' },
  'motherboard-repair': { href: '/iphone-motherboard-repair', label: 'iPhone Motherboard Repair — All Models' },
  'diagnostic': { href: '/iphone-diagnostic-service', label: 'Free iPhone Diagnostic — All Models' },
}

// ---------------------------------------------------------------------------
// Samsung core service page back-links
// ---------------------------------------------------------------------------

const SAMSUNG_CORE_SERVICE_LINKS: Partial<Record<string, { href: string; label: string }>> = {
  'screen-repair': { href: '/samsung-screen-repair', label: 'Samsung Screen Repair — All Models' },
  'screen-replacement': { href: '/samsung-screen-repair', label: 'Samsung Screen Repair — All Models' },
  'battery-replacement': { href: '/samsung-battery-replacement', label: 'Samsung Battery Replacement — All Models' },
  'charging-port-repair': { href: '/samsung-charging-port-repair', label: 'Samsung Charging Port Repair — All Models' },
  'back-glass-repair': { href: '/samsung-back-glass-repair', label: 'Samsung Back Glass Repair — All Models' },
  'camera-repair': { href: '/samsung-camera-repair', label: 'Samsung Camera Repair — All Models' },
  'speaker-repair': { href: '/samsung-speaker-repair', label: 'Samsung Speaker Repair — All Models' },
  'microphone-replacement': { href: '/samsung-microphone-repair', label: 'Samsung Microphone Repair — All Models' },
  'water-damage-repair': { href: '/samsung-water-damage-repair', label: 'Samsung Water Damage Repair — All Models' },
}

// ---------------------------------------------------------------------------
// iPad core service page back-links
// ---------------------------------------------------------------------------

const IPAD_CORE_SERVICE_LINKS: Partial<Record<string, { href: string; label: string }>> = {
  'screen-repair': { href: '/ipad-screen-repair', label: 'iPad Screen Repair — All Models' },
  'screen-replacement': { href: '/ipad-screen-repair', label: 'iPad Screen Repair — All Models' },
  'battery-replacement': { href: '/ipad-battery-replacement', label: 'iPad Battery Replacement — All Models' },
  'charging-port-repair': { href: '/ipad-charging-port-repair', label: 'iPad Charging Port Repair — All Models' },
  'camera-repair': { href: '/ipad-camera-repair', label: 'iPad Camera Repair — All Models' },
  'water-damage-repair': { href: '/ipad-water-damage-repair', label: 'iPad Water Damage Repair — All Models' },
}

// ---------------------------------------------------------------------------
// MacBook core service page back-links
// ---------------------------------------------------------------------------

const MACBOOK_CORE_SERVICE_LINKS: Partial<Record<string, { href: string; label: string }>> = {
  'screen-repair': { href: '/macbook-screen-repair', label: 'MacBook Screen Repair — All Models' },
  'screen-replacement': { href: '/macbook-screen-repair', label: 'MacBook Screen Repair — All Models' },
  'battery-replacement': { href: '/macbook-battery-replacement', label: 'MacBook Battery Replacement — All Models' },
  'keyboard-repair': { href: '/macbook-keyboard-repair', label: 'MacBook Keyboard Repair — All Models' },
  'trackpad-repair': { href: '/macbook-trackpad-repair', label: 'MacBook Trackpad Repair — All Models' },
  'water-damage-repair': { href: '/macbook-water-damage-repair', label: 'MacBook Water Damage Repair — All Models' },
}

// ---------------------------------------------------------------------------
// Google Pixel core service page back-links
// ---------------------------------------------------------------------------

const PIXEL_CORE_SERVICE_LINKS: Partial<Record<string, { href: string; label: string }>> = {
  'screen-repair': { href: '/google-pixel-screen-repair', label: 'Google Pixel Screen Repair — All Models' },
  'screen-replacement': { href: '/google-pixel-screen-repair', label: 'Google Pixel Screen Repair — All Models' },
  'battery-replacement': { href: '/google-pixel-battery-replacement', label: 'Google Pixel Battery Replacement — All Models' },
  'charging-port-repair': { href: '/google-pixel-charging-port-repair', label: 'Google Pixel Charging Port Repair — All Models' },
  'camera-repair': { href: '/google-pixel-camera-repair', label: 'Google Pixel Camera Repair — All Models' },
  'water-damage-repair': { href: '/google-pixel-water-damage-repair', label: 'Google Pixel Water Damage Repair — All Models' },
}

// ---------------------------------------------------------------------------
// Private helpers
// ---------------------------------------------------------------------------

/**
 * Returns the category page href for a given DeviceCategory.
 */
function getCategoryHref(category: DeviceCategory): string {
  const brand = brands.find((b) => b.deviceCategory === category)
  return brand ? `/${brand.categoryPageSlug}` : `/${category}-repair-melbourne`
}

/**
 * Returns the category label (e.g. "iPhone Repairs Melbourne") for a DeviceCategory.
 */
function getCategoryLabel(category: DeviceCategory): string {
  const brand = brands.find((b) => b.deviceCategory === category)
  return brand ? brand.categoryDisplayName : `${category} Repairs`
}

/**
 * Returns models for a category sorted by priority ascending (lower = higher priority).
 */
function getModelsByPriority(category: DeviceCategory): Model[] {
  return [...(MODELS_BY_CATEGORY[category] ?? [])].sort((a, b) => a.priority - b.priority)
}

/**
 * Priority repair slugs that should be surfaced first in related-repair links.
 */
const PRIORITY_REPAIR_SLUGS = ['screen-replacement', 'battery-replacement', 'charging-port-repair']

/**
 * Returns up to `count` Phase 1 suburb location links for the given device slug.
 */
function getSuburbLocationLinks(deviceSlug: string, count: number): InternalLink[] {
  return PHASE1_SUBURBS.slice(0, count).map((suburb) => ({
    href: `/${buildLocationSlug(deviceSlug, suburb.slug)}`,
    label: `${deviceSlugToDisplayName(deviceSlug)} Repair ${suburb.displayName}`,
    type: 'location' as const,
  }))
}

/**
 * Maps a DeviceCategory to its location-page device slug.
 * For all 5 categories the slug matches the category value.
 */
function categoryToDeviceSlug(category: DeviceCategory): string {
  // All DEVICE_SLUGS match their DeviceCategory value exactly.
  return category
}

/**
 * Human-readable name for a device slug (for location link labels).
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
// Public functions
// ---------------------------------------------------------------------------

/**
 * Returns internal links for a repair detail page.
 *
 * Includes:
 * - Model hub page
 * - Category page
 * - 3–4 related repairs (same model, priority slugs first, excluding the current one)
 * - 2 suburb location pages for this device
 */
export function getRepairPageInternalLinks(
  model: Model,
  currentRepairSlug: string,
): InternalLink[] {
  const links: InternalLink[] = []

  // Prepend core service page link for all brands
  const coreServiceMaps: Partial<Record<string, Partial<Record<string, { href: string; label: string }>>>> = {
    iphone: IPHONE_CORE_SERVICE_LINKS,
    samsung: SAMSUNG_CORE_SERVICE_LINKS,
    ipad: IPAD_CORE_SERVICE_LINKS,
    macbook: MACBOOK_CORE_SERVICE_LINKS,
    pixel: PIXEL_CORE_SERVICE_LINKS,
  }
  const coreServiceLink = coreServiceMaps[model.brand]?.[currentRepairSlug]
  if (coreServiceLink) {
    links.push({
      href: coreServiceLink.href,
      label: coreServiceLink.label,
      type: 'category',
    })
  }

  // Model hub
  links.push({
    href: `/${buildModelHubSlug(model.slug)}`,
    label: `${model.displayName} Repair Melbourne`,
    type: 'model-hub',
  })

  // Category page
  links.push({
    href: getCategoryHref(model.brand),
    label: getCategoryLabel(model.brand),
    type: 'category',
  })

  // Related repairs — priority slugs first, then fill from supported repairs
  const otherRepairs = model.supportedRepairSlugs.filter((s) => s !== currentRepairSlug)
  const priorityOthers = PRIORITY_REPAIR_SLUGS.filter((s) => otherRepairs.includes(s))
  const remainingOthers = otherRepairs.filter((s) => !PRIORITY_REPAIR_SLUGS.includes(s))
  const orderedOthers = [...priorityOthers, ...remainingOthers]
  const relatedRepairSlugs = orderedOthers.slice(0, 4)

  for (const repairSlug of relatedRepairSlugs) {
    const repair = getRepairBySlug(repairSlug)
    if (repair) {
      links.push({
        href: `/${buildRepairPageSlug(model.slug, repairSlug)}`,
        label: `${model.displayName} ${repair.displayName}`,
        type: 'repair',
      })
    }
  }

  // 2 suburb location pages
  const deviceSlug = categoryToDeviceSlug(model.brand)
  links.push(...getSuburbLocationLinks(deviceSlug, 2))

  return links
}

/**
 * Returns internal links for a model hub page.
 *
 * Includes:
 * - Category page
 * - All repair pages for this model
 * - 2 related model pages (adjacent by priority)
 * - 2 suburb location pages
 */
export function getModelHubInternalLinks(model: Model): InternalLink[] {
  const links: InternalLink[] = []

  // Category page
  links.push({
    href: getCategoryHref(model.brand),
    label: getCategoryLabel(model.brand),
    type: 'category',
  })

  // All repair pages for this model
  for (const repairSlug of model.supportedRepairSlugs) {
    const repair = getRepairBySlug(repairSlug)
    if (repair) {
      links.push({
        href: `/${buildRepairPageSlug(model.slug, repairSlug)}`,
        label: `${model.displayName} ${repair.displayName}`,
        type: 'repair',
      })
    }
  }

  // 2 adjacent model pages (by priority)
  const categoryModels = getModelsByPriority(model.brand)
  const currentIndex = categoryModels.findIndex((m) => m.slug === model.slug)
  const adjacentModels: Model[] = []

  if (currentIndex > 0) {
    adjacentModels.push(categoryModels[currentIndex - 1])
  }
  if (currentIndex < categoryModels.length - 1) {
    adjacentModels.push(categoryModels[currentIndex + 1])
  }
  // If we only got one (at start or end), pick one more in the other direction
  if (adjacentModels.length === 1 && categoryModels.length > 2) {
    if (currentIndex === 0 && currentIndex + 2 < categoryModels.length) {
      adjacentModels.push(categoryModels[currentIndex + 2])
    } else if (currentIndex === categoryModels.length - 1 && currentIndex - 2 >= 0) {
      adjacentModels.push(categoryModels[currentIndex - 2])
    }
  }

  for (const adjacent of adjacentModels.slice(0, 2)) {
    links.push({
      href: `/${buildModelHubSlug(adjacent.slug)}`,
      label: `${adjacent.displayName} Repair Melbourne`,
      type: 'model-hub',
    })
  }

  // 2 suburb location pages
  const deviceSlug = categoryToDeviceSlug(model.brand)
  links.push(...getSuburbLocationLinks(deviceSlug, 2))

  return links
}

/**
 * Returns internal links for a brand/category hub page.
 *
 * Includes:
 * - Top 10 model hub pages by priority
 * - 3 suburb location pages for this device
 */
export function getCategoryPageInternalLinks(category: DeviceCategory): InternalLink[] {
  const links: InternalLink[] = []

  // Top 10 model hubs by priority
  const topModels = getModelsByPriority(category).slice(0, 10)
  for (const model of topModels) {
    links.push({
      href: `/${buildModelHubSlug(model.slug)}`,
      label: `${model.displayName} Repair Melbourne`,
      type: 'model-hub',
    })
  }

  // 3 suburb location pages
  const deviceSlug = categoryToDeviceSlug(category)
  links.push(...getSuburbLocationLinks(deviceSlug, 3))

  return links
}

/**
 * Returns internal links for a suburb location page.
 *
 * Includes:
 * - Category page for this device
 * - Top 5 model hub pages by priority for this device
 * - 2–3 other suburb location pages for the same device
 */
export function getLocationPageInternalLinks(
  deviceSlug: string,
  suburb: { slug: string; displayName: string },
): InternalLink[] {
  const links: InternalLink[] = []

  // Resolve DeviceCategory from deviceSlug (they match 1:1)
  const category = deviceSlug as DeviceCategory

  // Category page
  links.push({
    href: getCategoryHref(category),
    label: getCategoryLabel(category),
    type: 'category',
  })

  // Top 5 model hub pages by priority
  const topModels = getModelsByPriority(category).slice(0, 5)
  for (const model of topModels) {
    links.push({
      href: `/${buildModelHubSlug(model.slug)}`,
      label: `${model.displayName} Repair Melbourne`,
      type: 'model-hub',
    })
  }

  // 2–3 other suburb pages (exclude current suburb)
  const otherSuburbs = PHASE1_SUBURBS.filter((s) => s.slug !== suburb.slug).slice(0, 3)
  const displayName = deviceSlugToDisplayName(deviceSlug)
  for (const otherSuburb of otherSuburbs) {
    links.push({
      href: `/${buildLocationSlug(deviceSlug, otherSuburb.slug)}`,
      label: `${displayName} Repair ${otherSuburb.displayName}`,
      type: 'location',
    })
  }

  return links
}
