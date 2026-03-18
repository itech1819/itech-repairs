import { brands } from '@/data'
import { buildModelHubSlug } from '@/lib/slug'
import type { Model, RepairService, Brand, DeviceCategory } from '@/types'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface BreadcrumbItem {
  label: string
  href: string
  /** True for the last (current) item — rendered as non-linked text. */
  current?: boolean
}

// ---------------------------------------------------------------------------
// Private helpers
// ---------------------------------------------------------------------------

/** Home breadcrumb — shared by every trail. */
const HOME: BreadcrumbItem = { label: 'Home', href: '/' }

/**
 * Looks up the Brand record for a DeviceCategory.
 * Falls back to a reasonable default if somehow not found.
 */
function getBrand(category: DeviceCategory): Brand {
  const brand = brands.find((b) => b.deviceCategory === category)
  if (!brand) {
    // Fallback — should never happen with valid data
    return {
      slug: category,
      displayName: category,
      categoryPageSlug: `${category}-repair-melbourne`,
      categoryDisplayName: `${category} Repairs Melbourne`,
      homepagePriority: 99,
      iconName: category,
      deviceCategory: category,
      repairCount: 0,
      modelCount: 0,
    }
  }
  return brand
}

/**
 * Returns the display name for a device slug, used on location breadcrumbs.
 * e.g. 'pixel' → 'Google Pixel', 'macbook' → 'MacBook'
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

/**
 * Returns the category page slug for a device slug.
 * For 'pixel' this is 'google-pixel-repair-melbourne' (from brands data).
 */
function deviceSlugToCategoryPageSlug(deviceSlug: string): string {
  const category = deviceSlug as DeviceCategory
  const brand = brands.find((b) => b.deviceCategory === category)
  return brand ? brand.categoryPageSlug : `${deviceSlug}-repair-melbourne`
}

// ---------------------------------------------------------------------------
// Public breadcrumb generators
// ---------------------------------------------------------------------------

/**
 * Breadcrumb trail for a repair detail page.
 *
 * Home > [Brand] Repairs Melbourne > [Model] Repair Melbourne > [Repair Name]
 *
 * Example:
 *   Home > iPhone Repairs Melbourne > iPhone 15 Pro Repair Melbourne > Screen Replacement
 */
export function getRepairPageBreadcrumbs(model: Model, repair: RepairService): BreadcrumbItem[] {
  const brand = getBrand(model.brand)

  return [
    HOME,
    {
      label: brand.categoryDisplayName,
      href: `/${brand.categoryPageSlug}`,
    },
    {
      label: `${model.displayName} Repair Melbourne`,
      href: `/${buildModelHubSlug(model.slug)}`,
    },
    {
      label: repair.displayName,
      href: `/${model.slug}-${repair.slug}-melbourne`,
      current: true,
    },
  ]
}

/**
 * Breadcrumb trail for a model hub page.
 *
 * Home > [Brand] Repairs Melbourne > [Model] Repair Melbourne
 *
 * Example:
 *   Home > Samsung Repairs Melbourne > Samsung Galaxy S24 Repair Melbourne
 */
export function getModelHubBreadcrumbs(model: Model): BreadcrumbItem[] {
  const brand = getBrand(model.brand)

  return [
    HOME,
    {
      label: brand.categoryDisplayName,
      href: `/${brand.categoryPageSlug}`,
    },
    {
      label: `${model.displayName} Repair Melbourne`,
      href: `/${buildModelHubSlug(model.slug)}`,
      current: true,
    },
  ]
}

/**
 * Breadcrumb trail for a brand/category hub page.
 *
 * Home > [Brand] Repairs Melbourne
 *
 * Example:
 *   Home > iPad Repairs Melbourne
 */
export function getCategoryBreadcrumbs(brand: Brand): BreadcrumbItem[] {
  return [
    HOME,
    {
      label: brand.categoryDisplayName,
      href: `/${brand.categoryPageSlug}`,
      current: true,
    },
  ]
}

/**
 * Breadcrumb trail for a suburb location page.
 *
 * Home > [Device] Repairs Melbourne > [Device] Repair [Suburb]
 *
 * Example (iphone, Richmond):
 *   Home > iPhone Repairs Melbourne > iPhone Repair Richmond
 *
 * Example (pixel, Fitzroy):
 *   Home > Google Pixel Repairs Melbourne > Google Pixel Repair Fitzroy
 */
export function getLocationBreadcrumbs(
  deviceSlug: string,
  suburb: { displayName: string; slug: string },
): BreadcrumbItem[] {
  const displayName = deviceSlugToDisplayName(deviceSlug)
  const categoryPageSlug = deviceSlugToCategoryPageSlug(deviceSlug)

  return [
    HOME,
    {
      label: `${displayName} Repairs Melbourne`,
      href: `/${categoryPageSlug}`,
    },
    {
      label: `${displayName} Repair ${suburb.displayName}`,
      href: `/${deviceSlug}-repair-${suburb.slug}`,
      current: true,
    },
  ]
}
