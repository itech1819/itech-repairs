/**
 * Fixes brand hub pages:
 *  1. Model card links: #models → /{modelSlug}-repair
 *  2. Service card links: #services → /{brandServiceSlug} (or /contact for unavailable)
 *
 * Also fixes Apple Watch model pages:
 *  Service card links: /apple-watch-{service} → /{modelSlug}-{service}
 */

import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const appDir = join(__dirname, '../src/app')

function toSlug(name) {
  return name
    .toLowerCase()
    .replace(/[()]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

// ============================================================
// HUB PAGE FIXES
// ============================================================

const brandHubs = [
  {
    file: 'oneplus-phone-repair-melbourne/page.tsx',
    hubSlug: 'oneplus-phone-repair-melbourne',
    models: ['OnePlus 13', 'OnePlus 12', 'OnePlus 11', 'OnePlus 10 Pro', 'OnePlus Nord 4', 'OnePlus Nord CE 4', 'OnePlus Nord 3', 'OnePlus Nord CE 3'],
  },
  {
    file: 'nothing-phone-repair-melbourne/page.tsx',
    hubSlug: 'nothing-phone-repair-melbourne',
    models: ['Nothing Phone (3a)', 'Nothing Phone (3a) Pro', 'Nothing Phone (2a)', 'Nothing Phone (2a) Plus', 'Nothing Phone (2)', 'Nothing Phone (1)'],
  },
  {
    file: 'sony-phone-repair-melbourne/page.tsx',
    hubSlug: 'sony-phone-repair-melbourne',
    models: ['Sony Xperia 1 VI', 'Sony Xperia 5 VI', 'Sony Xperia 10 VI', 'Sony Xperia 1 V', 'Sony Xperia 5 V', 'Sony Xperia 10 V', 'Sony Xperia 1 IV', 'Sony Xperia Pro-I'],
  },
  {
    file: 'oppo-phone-repair-melbourne/page.tsx',
    hubSlug: 'oppo-phone-repair-melbourne',
    models: ['Oppo Find X8', 'Oppo Find X7', 'Oppo Find X6 Pro', 'Oppo Reno 12', 'Oppo Reno 11', 'Oppo Reno 10', 'Oppo Reno 8', 'Oppo A78', 'Oppo A58', 'Oppo A38', 'Oppo F25 Pro', 'Oppo F23'],
  },
  {
    file: 'xiaomi-phone-repair-melbourne/page.tsx',
    hubSlug: 'xiaomi-phone-repair-melbourne',
    models: ['Xiaomi 14 Ultra', 'Xiaomi 14', 'Xiaomi 13 Pro', 'Xiaomi 13', 'Redmi Note 13 Pro', 'Redmi Note 13', 'Redmi 13C', 'POCO X6 Pro', 'POCO X6', 'POCO M6 Pro'],
  },
  {
    file: 'huawei-phone-repair-melbourne/page.tsx',
    hubSlug: 'huawei-phone-repair-melbourne',
    models: ['Huawei P60 Pro', 'Huawei P50 Pro', 'Huawei P40 Pro', 'Huawei Mate 50 Pro', 'Huawei Mate 40 Pro', 'Huawei Nova 12', 'Huawei Nova 11', 'Huawei Y90', 'Huawei Y70', 'Huawei Y60'],
  },
  {
    file: 'motorola-phone-repair-melbourne/page.tsx',
    hubSlug: 'motorola-phone-repair-melbourne',
    models: ['Motorola Edge 50 Pro', 'Motorola Edge 50', 'Motorola Edge 40 Pro', 'Moto G85', 'Moto G84', 'Moto G54', 'Moto G34', 'Motorola Razr 50', 'Motorola Razr 40 Ultra', 'Moto G Power'],
  },
  {
    file: 'nokia-phone-repair-melbourne/page.tsx',
    hubSlug: 'nokia-phone-repair-melbourne',
    models: ['Nokia G42', 'Nokia G22', 'Nokia G21', 'Nokia C32', 'Nokia C22', 'Nokia XR21', 'Nokia XR20', 'Nokia G60'],
  },
  {
    file: 'lg-phone-repair-melbourne/page.tsx',
    hubSlug: 'lg-phone-repair-melbourne',
    models: ['LG G8 ThinQ', 'LG V60 ThinQ', 'LG Velvet', 'LG Wing', 'LG G7 ThinQ', 'LG V50 ThinQ', 'LG K52', 'LG K42'],
  },
  {
    file: 'asus-phone-repair-melbourne/page.tsx',
    hubSlug: 'asus-phone-repair-melbourne',
    models: ['Asus ROG Phone 8 Pro', 'Asus ROG Phone 8', 'Asus ROG Phone 7 Pro', 'Asus ZenFone 11 Ultra', 'Asus ZenFone 10', 'Asus ZenFone 9', 'Asus ROG Phone 6 Pro'],
  },
  {
    file: 'realme-phone-repair-melbourne/page.tsx',
    hubSlug: 'realme-phone-repair-melbourne',
    models: ['Realme 13 Pro Plus', 'Realme 13 Pro', 'Realme 12 Plus', 'Realme 12', 'Realme Narzo 70 Pro', 'Realme Narzo 70', 'Realme C67', 'Realme C55'],
  },
]

for (const hub of brandHubs) {
  const filePath = join(appDir, hub.file)
  let src = readFileSync(filePath, 'utf8')
  const original = src

  // ── Replace the models array (string[]) with { name, slug }[] ───────────────
  const modelItems = hub.models.map(name => `  { name: '${name}', slug: '${toSlug(name)}' },`).join('\n')
  const newModelsArray = `const models = [\n${modelItems}\n]`

  // Match either single or multi-line models array
  src = src.replace(/const models = \[[\s\S]*?\]/m, newModelsArray)

  // ── Replace model card href ─────────────────────────────────────────────────
  // From: href="/{hubSlug}#models"  (or any variant)
  // To:   href={`/${model.slug}-repair`}
  // Also update {model} reference to {model.name}
  src = src.replace(
    /href="\/[^"]*#models"/g,
    'href={`/${model.slug}-repair`}'
  )
  // Fix the key and display: model → model.name
  src = src.replace(/<Link key=\{model\}/g, '<Link key={model.name}')
  src = src.replace(/>\{model\}<\/Link>/g, '>{model.name}</Link>')

  // ── Replace service card href ───────────────────────────────────────────────
  // From: href="/{hubSlug}#services"
  // To:   href="/contact"  (no dedicated service pages for secondary brands)
  src = src.replace(
    /href="\/[^"]*#services"/g,
    'href="/contact"'
  )

  if (src !== original) {
    writeFileSync(filePath, src, 'utf8')
    console.log(`FIXED: ${hub.file}`)
  } else {
    console.log(`NO CHANGE: ${hub.file}`)
  }
}

// ============================================================
// APPLE WATCH MODEL PAGE FIXES
// Fix service card hrefs: /apple-watch-{service} → /{modelSlug}-{service}
// ============================================================

const awModels = [
  { file: 'apple-watch-series-5-repair/page.tsx', slug: 'apple-watch-series-5' },
  { file: 'apple-watch-series-6-repair/page.tsx', slug: 'apple-watch-series-6' },
  { file: 'apple-watch-series-7-repair/page.tsx', slug: 'apple-watch-series-7' },
  { file: 'apple-watch-series-8-repair/page.tsx', slug: 'apple-watch-series-8' },
  { file: 'apple-watch-series-9-repair/page.tsx', slug: 'apple-watch-series-9' },
  { file: 'apple-watch-ultra-repair/page.tsx', slug: 'apple-watch-ultra' },
  { file: 'apple-watch-ultra-2-repair/page.tsx', slug: 'apple-watch-ultra-2' },
  { file: 'apple-watch-se-repair/page.tsx', slug: 'apple-watch-se' },
  { file: 'apple-watch-se-2-repair/page.tsx', slug: 'apple-watch-se-2' },
]

const awServiceMap = [
  { from: '/apple-watch-screen-repair',           to: (s) => `/${s}-screen-repair` },
  { from: '/apple-watch-battery-replacement',     to: (s) => `/${s}-battery-replacement` },
  { from: '/apple-watch-charging-port-repair',    to: (s) => `/${s}-charging-port-repair` },
  { from: '/apple-watch-water-damage-repair',     to: (s) => `/${s}-water-damage-repair` },
  { from: '/apple-watch-free-device-inspection',  to: (s) => `/${s}-free-device-inspection` },
]

for (const model of awModels) {
  const filePath = join(appDir, model.file)
  let src = readFileSync(filePath, 'utf8')
  const original = src

  for (const mapping of awServiceMap) {
    const escapedFrom = mapping.from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    src = src.replace(
      new RegExp(`href: '${escapedFrom}'`, 'g'),
      `href: '${mapping.to(model.slug)}'`
    )
  }

  if (src !== original) {
    writeFileSync(filePath, src, 'utf8')
    console.log(`FIXED: ${model.file}`)
  } else {
    console.log(`NO CHANGE: ${model.file}`)
  }
}

console.log('\nAll link fixes applied.')
