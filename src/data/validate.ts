import { iphoneModels, samsungModels, pixelModels, ipadModels, macbookModels, ALL_MODELS, MODEL_BY_SLUG } from './models'
import {
  IPHONE_REPAIR_SLUGS,
  SAMSUNG_REPAIR_SLUGS,
  PIXEL_REPAIR_SLUGS,
  IPAD_REPAIR_SLUGS,
  MACBOOK_REPAIR_SLUGS,
  repairServices,
} from './repairs'
import { suburbs } from './suburbs'
import { brands } from './brands'

// ─── Expected counts ──────────────────────────────────────────────────────────

const EXPECTED_COUNTS = {
  models: {
    iphone: 33,
    samsung: 25,
    pixel: 15,
    ipad: 13,
    macbook: 24,
    total: 110,
  },
  repairs: {
    iphone: 30,
    samsung: 29,
    pixel: 29,
    ipad: 25,
    macbook: 22,
  },
  // Page count breakdown:
  // - 5 category pages (one per brand)
  // - 110 model hub pages (one per model)
  // - repair pages = sum of (models × repairs per category)
  //   iPhone:  33 × 30 = 990
  //   Samsung: 25 × 29 = 725
  //   Pixel:   15 × 29 = 435
  //   iPad:    13 × 25 = 325
  //   MacBook: 24 × 22 = 528
  //   Subtotal: 3003
  // - location pages = 10 suburbs × (5 category pages) + 4 suburb detail pages
  //   = 50 suburb-category combos + 4 suburb standalone = 54
  //   OR: simply 10 suburbs × 5 brands + 4 supplementary = 54
  // Total: 5 + 110 + 3003 + 54 = 3172
  totalPages: 3172,
} as const

// ─── Validation result types ──────────────────────────────────────────────────

interface ValidationResult {
  passed: boolean
  errors: string[]
  stats: {
    modelCounts: Record<string, number>
    repairCounts: Record<string, number>
    uniqueModelSlugs: number
    duplicateModelSlugs: string[]
    pageCount: {
      categoryPages: number
      modelHubPages: number
      repairPages: number
      locationPages: number
      total: number
    }
    suburbCount: number
    brandCount: number
    expectedTotal: number
    pageCountMatch: boolean
  }
}

// ─── Main validation function ─────────────────────────────────────────────────

export function runValidation(): ValidationResult {
  const errors: string[] = []

  // ── 1. Check all model slugs are unique ────────────────────────────────────
  const allSlugs = ALL_MODELS.map((m) => m.slug)
  const slugSet = new Set<string>()
  const duplicateSlugs: string[] = []

  for (const slug of allSlugs) {
    if (slugSet.has(slug)) {
      duplicateSlugs.push(slug)
    }
    slugSet.add(slug)
  }

  if (duplicateSlugs.length > 0) {
    errors.push(`Duplicate model slugs found: ${duplicateSlugs.join(', ')}`)
  }

  // ── 2. Check repair slugs are unique within each category ─────────────────
  const repairSlugSets: Record<string, { slugs: string[]; dupes: string[] }> = {
    iphone: { slugs: IPHONE_REPAIR_SLUGS, dupes: [] },
    samsung: { slugs: SAMSUNG_REPAIR_SLUGS, dupes: [] },
    pixel: { slugs: PIXEL_REPAIR_SLUGS, dupes: [] },
    ipad: { slugs: IPAD_REPAIR_SLUGS, dupes: [] },
    macbook: { slugs: MACBOOK_REPAIR_SLUGS, dupes: [] },
  }

  for (const [category, { slugs }] of Object.entries(repairSlugSets)) {
    const seen = new Set<string>()
    const dupes: string[] = []
    for (const slug of slugs) {
      if (seen.has(slug)) {
        dupes.push(slug)
      }
      seen.add(slug)
    }
    if (dupes.length > 0) {
      errors.push(`Duplicate repair slugs in ${category}: ${dupes.join(', ')}`)
    }
    repairSlugSets[category].dupes = dupes
  }

  // ── 3. Verify model counts ─────────────────────────────────────────────────
  const modelCounts: Record<string, number> = {
    iphone: iphoneModels.length,
    samsung: samsungModels.length,
    pixel: pixelModels.length,
    ipad: ipadModels.length,
    macbook: macbookModels.length,
    total: ALL_MODELS.length,
  }

  if (modelCounts.iphone !== EXPECTED_COUNTS.models.iphone) {
    errors.push(
      `iPhone model count mismatch: expected ${EXPECTED_COUNTS.models.iphone}, got ${modelCounts.iphone}`
    )
  }
  if (modelCounts.samsung !== EXPECTED_COUNTS.models.samsung) {
    errors.push(
      `Samsung model count mismatch: expected ${EXPECTED_COUNTS.models.samsung}, got ${modelCounts.samsung}`
    )
  }
  if (modelCounts.pixel !== EXPECTED_COUNTS.models.pixel) {
    errors.push(
      `Pixel model count mismatch: expected ${EXPECTED_COUNTS.models.pixel}, got ${modelCounts.pixel}`
    )
  }
  if (modelCounts.ipad !== EXPECTED_COUNTS.models.ipad) {
    errors.push(
      `iPad model count mismatch: expected ${EXPECTED_COUNTS.models.ipad}, got ${modelCounts.ipad}`
    )
  }
  if (modelCounts.macbook !== EXPECTED_COUNTS.models.macbook) {
    errors.push(
      `MacBook model count mismatch: expected ${EXPECTED_COUNTS.models.macbook}, got ${modelCounts.macbook}`
    )
  }
  if (modelCounts.total !== EXPECTED_COUNTS.models.total) {
    errors.push(
      `Total model count mismatch: expected ${EXPECTED_COUNTS.models.total}, got ${modelCounts.total}`
    )
  }

  // ── 4. Verify repair slug counts ───────────────────────────────────────────
  const repairCounts: Record<string, number> = {
    iphone: IPHONE_REPAIR_SLUGS.length,
    samsung: SAMSUNG_REPAIR_SLUGS.length,
    pixel: PIXEL_REPAIR_SLUGS.length,
    ipad: IPAD_REPAIR_SLUGS.length,
    macbook: MACBOOK_REPAIR_SLUGS.length,
  }

  if (repairCounts.iphone !== EXPECTED_COUNTS.repairs.iphone) {
    errors.push(
      `iPhone repair slug count mismatch: expected ${EXPECTED_COUNTS.repairs.iphone}, got ${repairCounts.iphone}`
    )
  }
  if (repairCounts.samsung !== EXPECTED_COUNTS.repairs.samsung) {
    errors.push(
      `Samsung repair slug count mismatch: expected ${EXPECTED_COUNTS.repairs.samsung}, got ${repairCounts.samsung}`
    )
  }
  if (repairCounts.pixel !== EXPECTED_COUNTS.repairs.pixel) {
    errors.push(
      `Pixel repair slug count mismatch: expected ${EXPECTED_COUNTS.repairs.pixel}, got ${repairCounts.pixel}`
    )
  }
  if (repairCounts.ipad !== EXPECTED_COUNTS.repairs.ipad) {
    errors.push(
      `iPad repair slug count mismatch: expected ${EXPECTED_COUNTS.repairs.ipad}, got ${repairCounts.ipad}`
    )
  }
  if (repairCounts.macbook !== EXPECTED_COUNTS.repairs.macbook) {
    errors.push(
      `MacBook repair slug count mismatch: expected ${EXPECTED_COUNTS.repairs.macbook}, got ${repairCounts.macbook}`
    )
  }

  // ── 5. Verify that all repair slugs in model.supportedRepairSlugs exist in repairServices ──
  const knownRepairSlugs = new Set(repairServices.map((r) => r.slug))
  for (const model of ALL_MODELS) {
    for (const slug of model.supportedRepairSlugs) {
      if (!knownRepairSlugs.has(slug)) {
        errors.push(
          `Model "${model.slug}" references unknown repair slug: "${slug}"`
        )
      }
    }
  }

  // ── 6. Verify MODEL_BY_SLUG map is consistent ──────────────────────────────
  for (const model of ALL_MODELS) {
    const found = MODEL_BY_SLUG.get(model.slug)
    if (!found) {
      errors.push(`Model "${model.slug}" not found in MODEL_BY_SLUG map`)
    }
  }

  // ── 7. Compute total page count ────────────────────────────────────────────
  //
  // Page taxonomy:
  // ┌─────────────────────────────────────────────────────────────────────────┐
  // │ Type              │ Count                                               │
  // ├───────────────────┼─────────────────────────────────────────────────────┤
  // │ Category pages    │ 5  (one per brand)                                  │
  // │ Model hub pages   │ 110 (one per model)                                 │
  // │ Repair pages      │ Σ (models × repairs per category)                  │
  // │   iPhone          │ 33 × 30 = 990                                       │
  // │   Samsung         │ 25 × 29 = 725                                       │
  // │   Pixel           │ 15 × 29 = 435                                       │
  // │   iPad            │ 13 × 25 = 325                                       │
  // │   MacBook         │ 24 × 22 = 528                                       │
  // │   Subtotal        │ 3003                                                │
  // │ Location pages    │ 10 suburbs × 5 brands = 50 suburb-category combos   │
  // │                   │ + 4 supplementary suburb pages = 54                 │
  // │ Grand total       │ 5 + 110 + 3003 + 54 = 3172                         │
  // └─────────────────────────────────────────────────────────────────────────┘

  const categoryPages = brands.length // 5
  const modelHubPages = ALL_MODELS.length // 110

  const repairPagesIphone = iphoneModels.length * IPHONE_REPAIR_SLUGS.length
  const repairPagesSamsung = samsungModels.length * SAMSUNG_REPAIR_SLUGS.length
  const repairPagesPixel = pixelModels.length * PIXEL_REPAIR_SLUGS.length
  const repairPagesIpad = ipadModels.length * IPAD_REPAIR_SLUGS.length
  const repairPagesMacbook = macbookModels.length * MACBOOK_REPAIR_SLUGS.length
  const repairPages =
    repairPagesIphone +
    repairPagesSamsung +
    repairPagesPixel +
    repairPagesIpad +
    repairPagesMacbook

  // Location pages: 10 suburbs × 5 brands = 50 suburb-category landing pages
  // + 4 suburb detail/overview pages = 54 total location pages
  const suburbCategoryPages = suburbs.length * brands.length // 10 × 5 = 50
  const suburbDetailPages = 4
  const locationPages = suburbCategoryPages + suburbDetailPages // 54

  const totalPages = categoryPages + modelHubPages + repairPages + locationPages

  const pageCount = {
    categoryPages,
    modelHubPages,
    repairPages,
    locationPages,
    total: totalPages,
  }

  const pageCountMatch = totalPages === EXPECTED_COUNTS.totalPages

  if (!pageCountMatch) {
    errors.push(
      `Total page count mismatch: expected ${EXPECTED_COUNTS.totalPages}, computed ${totalPages}. ` +
      `Breakdown: ${categoryPages} category + ${modelHubPages} model-hub + ${repairPages} repair + ${locationPages} location`
    )
  }

  // ── 8. Verify brands.repairCount and brands.modelCount match actual data ───
  const actualModelCounts: Record<string, number> = {
    iphone: iphoneModels.length,
    samsung: samsungModels.length,
    pixel: pixelModels.length,
    ipad: ipadModels.length,
    macbook: macbookModels.length,
  }
  const actualRepairCounts: Record<string, number> = {
    iphone: IPHONE_REPAIR_SLUGS.length,
    samsung: SAMSUNG_REPAIR_SLUGS.length,
    pixel: PIXEL_REPAIR_SLUGS.length,
    ipad: IPAD_REPAIR_SLUGS.length,
    macbook: MACBOOK_REPAIR_SLUGS.length,
  }

  for (const brand of brands) {
    const cat = brand.deviceCategory
    if (brand.modelCount !== actualModelCounts[cat]) {
      errors.push(
        `Brand "${brand.slug}" modelCount (${brand.modelCount}) does not match actual count (${actualModelCounts[cat]})`
      )
    }
    if (brand.repairCount !== actualRepairCounts[cat]) {
      errors.push(
        `Brand "${brand.slug}" repairCount (${brand.repairCount}) does not match actual count (${actualRepairCounts[cat]})`
      )
    }
  }

  // ── Build stats ────────────────────────────────────────────────────────────
  const stats = {
    modelCounts,
    repairCounts,
    uniqueModelSlugs: slugSet.size,
    duplicateModelSlugs: duplicateSlugs,
    pageCount,
    suburbCount: suburbs.length,
    brandCount: brands.length,
    expectedTotal: EXPECTED_COUNTS.totalPages,
    pageCountMatch,
  }

  return {
    passed: errors.length === 0,
    errors,
    stats,
  }
}

// ─── Console runner (call directly for debugging) ──────────────────────────────

export function printValidationReport(): void {
  const result = runValidation()

  console.log('\n═══════════════════════════════════════════════════')
  console.log('  iTech Repairs — Data Validation Report')
  console.log('═══════════════════════════════════════════════════\n')

  console.log('Model counts:')
  for (const [key, value] of Object.entries(result.stats.modelCounts)) {
    console.log(`  ${key}: ${value}`)
  }

  console.log('\nRepair slug counts:')
  for (const [key, value] of Object.entries(result.stats.repairCounts)) {
    console.log(`  ${key}: ${value}`)
  }

  console.log('\nPage count breakdown:')
  console.log(`  Category pages:   ${result.stats.pageCount.categoryPages}`)
  console.log(`  Model hub pages:  ${result.stats.pageCount.modelHubPages}`)
  console.log(`  Repair pages:     ${result.stats.pageCount.repairPages}`)
  console.log(`  Location pages:   ${result.stats.pageCount.locationPages}`)
  console.log(`  ─────────────────────────────────`)
  console.log(`  Total:            ${result.stats.pageCount.total}`)
  console.log(`  Expected:         ${result.stats.expectedTotal}`)
  console.log(`  Match:            ${result.stats.pageCountMatch ? 'YES ✓' : 'NO ✗'}`)

  console.log(`\nUnique model slugs: ${result.stats.uniqueModelSlugs}`)

  if (result.stats.duplicateModelSlugs.length > 0) {
    console.log(`\nDuplicate slugs found: ${result.stats.duplicateModelSlugs.join(', ')}`)
  }

  if (result.errors.length === 0) {
    console.log('\n✓ All validation checks passed.\n')
  } else {
    console.log(`\n✗ ${result.errors.length} error(s) found:\n`)
    for (const err of result.errors) {
      console.log(`  - ${err}`)
    }
  }

  console.log('═══════════════════════════════════════════════════\n')
}
