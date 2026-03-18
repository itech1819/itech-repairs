/**
 * Buy-back pricing bands for the iPhone quote calculator.
 *
 * Competitor benchmark reference (public Mobile Guru ranges — March 2026):
 *   iPhone 17 Pro Max: up to $2,000 cash | iPhone 17 Pro: up to $1,810
 *   iPhone 16 Pro Max: up to $1,460      | iPhone 16 Pro: up to $1,260
 *   iPhone 16 Plus: up to $955           | iPhone 16: up to $905
 *   iPhone 16e: up to $610               | iPhone 15 Pro Max: up to $1,040
 *   iPhone 15 Pro: up to $920            | iPhone 15 Plus: up to $810
 *   iPhone 15: up to $720
 *
 * PRICING RULES:
 *   - Use "up to" and range wording — do NOT make hard guarantees.
 *   - Actual offers depend on inspection at store.
 *   - These bands guide copy only; admin may update ranges here without touching UI.
 */

export type ConditionKey = 'sealed' | 'brand-new' | 'excellent' | 'good' | 'cracked' | 'not-turning-on'

export interface PriceBand {
  condition: ConditionKey
  label: string
  description: string
  multiplier: number // applied to the model's basePriceExcellent
}

export interface BuybackModel {
  modelSlug: string
  displayName: string
  storageOptions: string[]
  /** Base payout (AUD) for "Excellent" condition, 128GB or base storage */
  basePriceExcellent: number
  /** Storage premium per tier above base (AUD) */
  storagePremium: number
}

/** Condition bands — multipliers applied to basePriceExcellent */
export const CONDITION_BANDS: PriceBand[] = [
  {
    condition: 'sealed',
    label: 'Sealed / Unopened',
    description: 'Factory sealed, never opened.',
    multiplier: 1.15,
  },
  {
    condition: 'brand-new',
    label: 'Brand New (open box)',
    description: 'Opened but unused or used less than a week.',
    multiplier: 1.08,
  },
  {
    condition: 'excellent',
    label: 'Excellent',
    description: 'Minor wear only. Screen and body in great condition.',
    multiplier: 1.0,
  },
  {
    condition: 'good',
    label: 'Good',
    description: 'Visible scratches on body. Screen fully functional.',
    multiplier: 0.75,
  },
  {
    condition: 'cracked',
    label: 'Cracked Screen',
    description: 'Screen cracked or smashed. Body otherwise intact.',
    multiplier: 0.50,
  },
  {
    condition: 'not-turning-on',
    label: 'Not Turning On',
    description: 'Device does not power on. Cause unknown.',
    multiplier: 0.25,
  },
]

/** iPhone models with benchmark-informed base prices (AUD) */
export const BUYBACK_MODELS: BuybackModel[] = [
  { modelSlug: 'iphone-17-pro-max', displayName: 'iPhone 17 Pro Max', storageOptions: ['256GB', '512GB', '1TB'], basePriceExcellent: 1650, storagePremium: 120 },
  { modelSlug: 'iphone-17-pro', displayName: 'iPhone 17 Pro', storageOptions: ['128GB', '256GB', '512GB', '1TB'], basePriceExcellent: 1480, storagePremium: 100 },
  { modelSlug: 'iphone-air', displayName: 'iPhone Air', storageOptions: ['128GB', '256GB', '512GB'], basePriceExcellent: 1100, storagePremium: 80 },
  { modelSlug: 'iphone-17', displayName: 'iPhone 17', storageOptions: ['128GB', '256GB', '512GB'], basePriceExcellent: 950, storagePremium: 80 },
  { modelSlug: 'iphone-16-pro-max', displayName: 'iPhone 16 Pro Max', storageOptions: ['256GB', '512GB', '1TB'], basePriceExcellent: 1180, storagePremium: 100 },
  { modelSlug: 'iphone-16-pro', displayName: 'iPhone 16 Pro', storageOptions: ['128GB', '256GB', '512GB', '1TB'], basePriceExcellent: 1020, storagePremium: 90 },
  { modelSlug: 'iphone-16-plus', displayName: 'iPhone 16 Plus', storageOptions: ['128GB', '256GB', '512GB'], basePriceExcellent: 780, storagePremium: 70 },
  { modelSlug: 'iphone-16', displayName: 'iPhone 16', storageOptions: ['128GB', '256GB', '512GB'], basePriceExcellent: 720, storagePremium: 70 },
  { modelSlug: 'iphone-16e', displayName: 'iPhone 16e', storageOptions: ['128GB', '256GB'], basePriceExcellent: 490, storagePremium: 50 },
  { modelSlug: 'iphone-15-pro-max', displayName: 'iPhone 15 Pro Max', storageOptions: ['256GB', '512GB', '1TB'], basePriceExcellent: 840, storagePremium: 80 },
  { modelSlug: 'iphone-15-pro', displayName: 'iPhone 15 Pro', storageOptions: ['128GB', '256GB', '512GB', '1TB'], basePriceExcellent: 740, storagePremium: 70 },
  { modelSlug: 'iphone-15-plus', displayName: 'iPhone 15 Plus', storageOptions: ['128GB', '256GB', '512GB'], basePriceExcellent: 650, storagePremium: 60 },
  { modelSlug: 'iphone-15', displayName: 'iPhone 15', storageOptions: ['128GB', '256GB', '512GB'], basePriceExcellent: 580, storagePremium: 60 },
  { modelSlug: 'iphone-14-pro-max', displayName: 'iPhone 14 Pro Max', storageOptions: ['128GB', '256GB', '512GB', '1TB'], basePriceExcellent: 550, storagePremium: 50 },
  { modelSlug: 'iphone-14-pro', displayName: 'iPhone 14 Pro', storageOptions: ['128GB', '256GB', '512GB', '1TB'], basePriceExcellent: 450, storagePremium: 40 },
  { modelSlug: 'iphone-14-plus', displayName: 'iPhone 14 Plus', storageOptions: ['128GB', '256GB', '512GB'], basePriceExcellent: 380, storagePremium: 35 },
  { modelSlug: 'iphone-14', displayName: 'iPhone 14', storageOptions: ['128GB', '256GB', '512GB'], basePriceExcellent: 320, storagePremium: 35 },
  { modelSlug: 'iphone-13-pro-max', displayName: 'iPhone 13 Pro Max', storageOptions: ['128GB', '256GB', '512GB', '1TB'], basePriceExcellent: 380, storagePremium: 35 },
  { modelSlug: 'iphone-13-pro', displayName: 'iPhone 13 Pro', storageOptions: ['128GB', '256GB', '512GB', '1TB'], basePriceExcellent: 310, storagePremium: 30 },
  { modelSlug: 'iphone-13', displayName: 'iPhone 13', storageOptions: ['128GB', '256GB', '512GB'], basePriceExcellent: 250, storagePremium: 25 },
  { modelSlug: 'iphone-12-pro-max', displayName: 'iPhone 12 Pro Max', storageOptions: ['128GB', '256GB', '512GB'], basePriceExcellent: 220, storagePremium: 20 },
  { modelSlug: 'iphone-12-pro', displayName: 'iPhone 12 Pro', storageOptions: ['128GB', '256GB', '512GB'], basePriceExcellent: 180, storagePremium: 18 },
  { modelSlug: 'iphone-12', displayName: 'iPhone 12', storageOptions: ['64GB', '128GB', '256GB'], basePriceExcellent: 140, storagePremium: 15 },
  { modelSlug: 'iphone-11-pro-max', displayName: 'iPhone 11 Pro Max', storageOptions: ['64GB', '256GB', '512GB'], basePriceExcellent: 120, storagePremium: 12 },
  { modelSlug: 'iphone-11-pro', displayName: 'iPhone 11 Pro', storageOptions: ['64GB', '256GB', '512GB'], basePriceExcellent: 100, storagePremium: 10 },
  { modelSlug: 'iphone-11', displayName: 'iPhone 11', storageOptions: ['64GB', '128GB', '256GB'], basePriceExcellent: 80, storagePremium: 8 },
]

export const BUYBACK_MODEL_MAP = new Map(BUYBACK_MODELS.map((m) => [m.modelSlug, m]))
export const CONDITION_MAP = new Map(CONDITION_BANDS.map((c) => [c.condition, c]))

/**
 * Estimates a price range for a given model, storage tier index, and condition.
 * Returns [low, high] in AUD.
 * These are estimates only — actual offers depend on in-store assessment.
 */
export function estimatePriceRange(
  modelSlug: string,
  storageIndex: number,
  condition: ConditionKey
): [number, number] | null {
  const model = BUYBACK_MODEL_MAP.get(modelSlug)
  const band = CONDITION_MAP.get(condition)
  if (!model || !band) return null

  const base = model.basePriceExcellent + model.storagePremium * storageIndex
  const mid = Math.round(base * band.multiplier)
  const low = Math.round(mid * 0.88)
  const high = Math.round(mid * 1.08)

  return [low, high]
}
