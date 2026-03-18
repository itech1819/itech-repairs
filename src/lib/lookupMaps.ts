/**
 * lookupMaps.ts
 *
 * Centralised re-export of all lookup maps and helper functions.
 * Provides a single import point for O(1) data access across route
 * templates, metadata generators, sitemap, and internal linking.
 *
 * Import from here — never rebuild maps ad-hoc in route files.
 */

// ---------------------------------------------------------------------------
// Model lookups
// ---------------------------------------------------------------------------

export {
  ALL_MODELS,
  ALL_MODEL_SLUGS,
  MODEL_BY_SLUG,
  MODELS_BY_CATEGORY,
  getModelBySlug,
  getModelsByCategory,
  iphoneModels,
  samsungModels,
  pixelModels,
  ipadModels,
  macbookModels,
} from '@/data/models'

// ---------------------------------------------------------------------------
// Repair lookups
// ---------------------------------------------------------------------------

export {
  repairServices,
  REPAIR_BY_SLUG,
  getRepairBySlug,
  getRepairsForCategories,
  ALL_REPAIR_SLUGS_BY_CATEGORY,
  IPHONE_REPAIR_SLUGS,
  SAMSUNG_REPAIR_SLUGS,
  PIXEL_REPAIR_SLUGS,
  IPAD_REPAIR_SLUGS,
  MACBOOK_REPAIR_SLUGS,
} from '@/data/repairs'

// ---------------------------------------------------------------------------
// Suburb lookups
// ---------------------------------------------------------------------------

export {
  suburbs,
  SUBURB_BY_SLUG,
  PHASE1_SUBURBS,
  getSuburbBySlug,
} from '@/data/suburbs'

// ---------------------------------------------------------------------------
// Brand lookups
// ---------------------------------------------------------------------------

export {
  brands,
  getBrandByCategory,
  getBrandByCategoryPageSlug,
} from '@/data/brands'

// ---------------------------------------------------------------------------
// Business info
// ---------------------------------------------------------------------------

export { business } from '@/data/business'
