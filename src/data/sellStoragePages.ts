/**
 * Model + storage sell pages.
 * Pattern: sell-iphone-{model}-{storage}
 * e.g.  sell-iphone-17-pro-max-256gb
 */

export interface SellStoragePage {
  slug: string
  modelSlug: string
  modelName: string
  storage: string
  metaTitle: string
  metaDescription: string
  h1: string
  intro: string
  repairHref: string
  modelSellHref: string
  upToPrice: number
}

interface StorageEntry {
  label: string
  slugSuffix: string
}

function makeStoragePage(
  modelSlug: string,
  modelName: string,
  storage: StorageEntry,
  upToPrice: number,
  repairSlug: string
): SellStoragePage {
  const slug = `sell-iphone-${modelSlug}-${storage.slugSuffix}`
  return {
    slug,
    modelSlug,
    modelName,
    storage: storage.label,
    metaTitle: `Sell ${modelName} ${storage.label} Melbourne – Instant Cash | Highest Prices Paid`,
    metaDescription: `Sell your ${modelName} ${storage.label} today for instant cash. iTech Repairs pays some of the highest prices for ${modelName} ${storage.label} in Melbourne. Walk in today.`,
    h1: `Sell ${modelName} ${storage.label} in Melbourne — Instant Cash`,
    intro: `Looking to sell your ${modelName} ${storage.label}? iTech Repairs pays competitive cash prices for ${modelName} ${storage.label} in Melbourne — any condition. Walk in to our Braybrook or Spotswood stores for an instant offer. Up to $${upToPrice.toLocaleString()} for excellent condition.`,
    repairHref: `/${repairSlug}-repair-melbourne`,
    modelSellHref: `/sell-my-iphone-${modelSlug}`,
    upToPrice,
  }
}

const SELL_STORAGE_MODELS = [
  {
    modelSlug: 'iphone-17-pro-max', modelName: 'iPhone 17 Pro Max',
    repairSlug: 'iphone-17-pro-max',
    storages: [
      { label: '256GB', slugSuffix: '256gb', upTo: 1900 },
      { label: '512GB', slugSuffix: '512gb', upTo: 2050 },
      { label: '1TB', slugSuffix: '1tb', upTo: 2200 },
    ],
  },
  {
    modelSlug: 'iphone-17-pro', modelName: 'iPhone 17 Pro',
    repairSlug: 'iphone-17-pro',
    storages: [
      { label: '128GB', slugSuffix: '128gb', upTo: 1480 },
      { label: '256GB', slugSuffix: '256gb', upTo: 1620 },
      { label: '512GB', slugSuffix: '512gb', upTo: 1750 },
      { label: '1TB', slugSuffix: '1tb', upTo: 1860 },
    ],
  },
  {
    modelSlug: 'iphone-16-pro-max', modelName: 'iPhone 16 Pro Max',
    repairSlug: 'iphone-16-pro-max',
    storages: [
      { label: '256GB', slugSuffix: '256gb', upTo: 1350 },
      { label: '512GB', slugSuffix: '512gb', upTo: 1460 },
      { label: '1TB', slugSuffix: '1tb', upTo: 1580 },
    ],
  },
  {
    modelSlug: 'iphone-16-pro', modelName: 'iPhone 16 Pro',
    repairSlug: 'iphone-16-pro',
    storages: [
      { label: '128GB', slugSuffix: '128gb', upTo: 1020 },
      { label: '256GB', slugSuffix: '256gb', upTo: 1150 },
      { label: '512GB', slugSuffix: '512gb', upTo: 1260 },
      { label: '1TB', slugSuffix: '1tb', upTo: 1380 },
    ],
  },
  {
    modelSlug: 'iphone-15-pro-max', modelName: 'iPhone 15 Pro Max',
    repairSlug: 'iphone-15-pro-max',
    storages: [
      { label: '256GB', slugSuffix: '256gb', upTo: 950 },
      { label: '512GB', slugSuffix: '512gb', upTo: 1040 },
      { label: '1TB', slugSuffix: '1tb', upTo: 1130 },
    ],
  },
  {
    modelSlug: 'iphone-15-pro', modelName: 'iPhone 15 Pro',
    repairSlug: 'iphone-15-pro',
    storages: [
      { label: '128GB', slugSuffix: '128gb', upTo: 740 },
      { label: '256GB', slugSuffix: '256gb', upTo: 830 },
      { label: '512GB', slugSuffix: '512gb', upTo: 920 },
    ],
  },
]

export const SELL_STORAGE_PAGES: SellStoragePage[] = SELL_STORAGE_MODELS.flatMap(({ modelSlug, modelName, repairSlug, storages }) =>
  storages.map(({ label, slugSuffix, upTo }) =>
    makeStoragePage(modelSlug, modelName, { label, slugSuffix }, upTo, repairSlug)
  )
)

export const SELL_STORAGE_BY_SLUG = new Map(SELL_STORAGE_PAGES.map((p) => [p.slug, p]))
