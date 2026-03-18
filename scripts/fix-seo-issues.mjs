/**
 * SEO Fix Script — post-deployment issues
 *
 * Fix 1 (Priority 1 — Critical): Update Apple Watch service hub pages so the
 *   "models" section links to model+SERVICE pages instead of model hub pages.
 *   Prevents orphan pages that are only reachable via sitemap.
 *
 * Fix 2 (Priority 2 — High): Inject Service + Offer schema into all 570 generated
 *   secondary brand model and model+service pages.
 *
 * Fix 3 (Priority 3 — Medium): Add model+service link section to Apple Watch hub page.
 *
 * Run: node scripts/fix-seo-issues.mjs
 */

import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const appDir = join(__dirname, '../src/app')

function patch(relPath, patchFn) {
  const filePath = join(appDir, relPath)
  const original = readFileSync(filePath, 'utf8')
  const updated = patchFn(original)
  if (updated !== original) {
    writeFileSync(filePath, updated, 'utf8')
    console.log(`  FIXED: ${relPath}`)
    return true
  }
  console.log(`  SKIPPED (no change): ${relPath}`)
  return false
}

// ============================================================
// FIX 1 — Apple Watch service hub pages
// Update model card links to point to model+service pages,
// and ADD a model+service grid if missing.
// ============================================================

const AW_MODELS = [
  { name: 'Apple Watch Series 5', slug: 'apple-watch-series-5' },
  { name: 'Apple Watch Series 6', slug: 'apple-watch-series-6' },
  { name: 'Apple Watch Series 7', slug: 'apple-watch-series-7' },
  { name: 'Apple Watch Series 8', slug: 'apple-watch-series-8' },
  { name: 'Apple Watch Series 9', slug: 'apple-watch-series-9' },
  { name: 'Apple Watch Ultra',    slug: 'apple-watch-ultra' },
  { name: 'Apple Watch Ultra 2',  slug: 'apple-watch-ultra-2' },
  { name: 'Apple Watch SE',       slug: 'apple-watch-se' },
  { name: 'Apple Watch SE 2',     slug: 'apple-watch-se-2' },
]

const AW_SERVICES = [
  { file: 'apple-watch-screen-repair',          svcSlug: 'screen-repair',           label: 'Screen Repair' },
  { file: 'apple-watch-battery-replacement',    svcSlug: 'battery-replacement',     label: 'Battery Replacement' },
  { file: 'apple-watch-charging-port-repair',   svcSlug: 'charging-port-repair',    label: 'Charging Repair' },
  { file: 'apple-watch-water-damage-repair',    svcSlug: 'water-damage-repair',     label: 'Water Damage Repair' },
  { file: 'apple-watch-free-device-inspection', svcSlug: 'free-device-inspection',  label: 'Free Diagnostic' },
]

// The model section to inject (for pages that lack it entirely)
function buildModelSection(svcSlug) {
  const items = AW_MODELS
    .map(m => `            { name: '${m.name}', href: '/${m.slug}-${svcSlug}' },`)
    .join('\n')

  return `
      {/* Apple Watch Models */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Apple Watch Models We Repair
            </h2>
            <p className="text-charcoal-light text-lg">
              Select your Apple Watch model to see model-specific pricing and availability.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {[
${items}
            ].map((model) => (
              <Link
                key={model.name}
                href={model.href}
                className="card p-4 text-center text-sm font-medium text-charcoal hover:text-primary hover:border-primary transition-colors"
              >
                {model.name}
              </Link>
            ))}
          </div>
        </div>
      </section>`
}

console.log('\n=== Fix 1: Apple Watch service hub model links ===')

for (const svc of AW_SERVICES) {
  patch(`${svc.file}/page.tsx`, (src) => {
    // Strategy A: page already has supportedModels — rewrite the href values
    if (src.includes('const supportedModels')) {
      // Replace each href that ends in -repair' with the model+service href
      for (const m of AW_MODELS) {
        const oldHref = `href: '/${m.slug}-repair'`
        const newHref = `href: '/${m.slug}-${svc.svcSlug}'`
        src = src.replaceAll(oldHref, newHref)
      }
      return src
    }

    // Strategy B: page has no model section at all — inject one before the CTA banner
    const ctaMarker = '\n      {/* CTA'
    if (src.includes(ctaMarker)) {
      return src.replace(ctaMarker, buildModelSection(svc.svcSlug) + '\n\n      {/* CTA')
    }

    // Strategy C: inject before </> closing
    return src.replace(/(\s*<\/>\s*)$/, buildModelSection(svc.svcSlug) + '\n    </>')
  })
}

// ============================================================
// FIX 2 — Service + Offer schema on all generated pages
// Add serviceSchema inline to each generated page.
// Pages affected:
//   - 95 secondary brand MODEL pages (/{modelSlug}-repair)
//   - 475 secondary brand MODEL+SERVICE pages (/{modelSlug}-{serviceSlug})
//   - 45 Apple Watch MODEL+SERVICE pages
// ============================================================

const SECONDARY_MODELS = [
  { name:'OnePlus 13',slug:'oneplus-13',price:'89'}, { name:'OnePlus 12',slug:'oneplus-12',price:'89'},
  { name:'OnePlus 11',slug:'oneplus-11',price:'89'}, { name:'OnePlus 10 Pro',slug:'oneplus-10-pro',price:'89'},
  { name:'OnePlus Nord 4',slug:'oneplus-nord-4',price:'89'}, { name:'OnePlus Nord CE 4',slug:'oneplus-nord-ce-4',price:'89'},
  { name:'OnePlus Nord 3',slug:'oneplus-nord-3',price:'89'}, { name:'OnePlus Nord CE 3',slug:'oneplus-nord-ce-3',price:'89'},
  { name:'Nothing Phone (3a)',slug:'nothing-phone-3a',price:'89'}, { name:'Nothing Phone (3a) Pro',slug:'nothing-phone-3a-pro',price:'89'},
  { name:'Nothing Phone (2a)',slug:'nothing-phone-2a',price:'89'}, { name:'Nothing Phone (2a) Plus',slug:'nothing-phone-2a-plus',price:'89'},
  { name:'Nothing Phone (2)',slug:'nothing-phone-2',price:'89'}, { name:'Nothing Phone (1)',slug:'nothing-phone-1',price:'89'},
  { name:'Sony Xperia 1 VI',slug:'sony-xperia-1-vi',price:'99'}, { name:'Sony Xperia 5 VI',slug:'sony-xperia-5-vi',price:'99'},
  { name:'Sony Xperia 10 VI',slug:'sony-xperia-10-vi',price:'99'}, { name:'Sony Xperia 1 V',slug:'sony-xperia-1-v',price:'99'},
  { name:'Sony Xperia 5 V',slug:'sony-xperia-5-v',price:'99'}, { name:'Sony Xperia 10 V',slug:'sony-xperia-10-v',price:'79'},
  { name:'Sony Xperia 1 IV',slug:'sony-xperia-1-iv',price:'99'}, { name:'Sony Xperia Pro-I',slug:'sony-xperia-pro-i',price:'99'},
  { name:'Oppo Find X8',slug:'oppo-find-x8',price:'89'}, { name:'Oppo Find X7',slug:'oppo-find-x7',price:'89'},
  { name:'Oppo Find X6 Pro',slug:'oppo-find-x6-pro',price:'89'}, { name:'Oppo Reno 12',slug:'oppo-reno-12',price:'89'},
  { name:'Oppo Reno 11',slug:'oppo-reno-11',price:'89'}, { name:'Oppo Reno 10',slug:'oppo-reno-10',price:'79'},
  { name:'Oppo Reno 8',slug:'oppo-reno-8',price:'79'}, { name:'Oppo A78',slug:'oppo-a78',price:'69'},
  { name:'Oppo A58',slug:'oppo-a58',price:'69'}, { name:'Oppo A38',slug:'oppo-a38',price:'69'},
  { name:'Oppo F25 Pro',slug:'oppo-f25-pro',price:'79'}, { name:'Oppo F23',slug:'oppo-f23',price:'69'},
  { name:'Xiaomi 14 Ultra',slug:'xiaomi-14-ultra',price:'89'}, { name:'Xiaomi 14',slug:'xiaomi-14',price:'79'},
  { name:'Xiaomi 13 Pro',slug:'xiaomi-13-pro',price:'79'}, { name:'Xiaomi 13',slug:'xiaomi-13',price:'79'},
  { name:'Redmi Note 13 Pro',slug:'redmi-note-13-pro',price:'69'}, { name:'Redmi Note 13',slug:'redmi-note-13',price:'69'},
  { name:'Redmi 13C',slug:'redmi-13c',price:'59'}, { name:'POCO X6 Pro',slug:'poco-x6-pro',price:'79'},
  { name:'POCO X6',slug:'poco-x6',price:'69'}, { name:'POCO M6 Pro',slug:'poco-m6-pro',price:'69'},
  { name:'Huawei P60 Pro',slug:'huawei-p60-pro',price:'89'}, { name:'Huawei P50 Pro',slug:'huawei-p50-pro',price:'89'},
  { name:'Huawei P40 Pro',slug:'huawei-p40-pro',price:'79'}, { name:'Huawei Mate 50 Pro',slug:'huawei-mate-50-pro',price:'89'},
  { name:'Huawei Mate 40 Pro',slug:'huawei-mate-40-pro',price:'89'}, { name:'Huawei Nova 12',slug:'huawei-nova-12',price:'79'},
  { name:'Huawei Nova 11',slug:'huawei-nova-11',price:'79'}, { name:'Huawei Y90',slug:'huawei-y90',price:'69'},
  { name:'Huawei Y70',slug:'huawei-y70',price:'69'}, { name:'Huawei Y60',slug:'huawei-y60',price:'59'},
  { name:'Motorola Edge 50 Pro',slug:'motorola-edge-50-pro',price:'79'}, { name:'Motorola Edge 50',slug:'motorola-edge-50',price:'79'},
  { name:'Motorola Edge 40 Pro',slug:'motorola-edge-40-pro',price:'79'}, { name:'Moto G85',slug:'moto-g85',price:'69'},
  { name:'Moto G84',slug:'moto-g84',price:'69'}, { name:'Moto G54',slug:'moto-g54',price:'69'},
  { name:'Moto G34',slug:'moto-g34',price:'59'}, { name:'Motorola Razr 50',slug:'motorola-razr-50',price:'89'},
  { name:'Motorola Razr 40 Ultra',slug:'motorola-razr-40-ultra',price:'89'}, { name:'Moto G Power',slug:'moto-g-power',price:'59'},
  { name:'Nokia G42',slug:'nokia-g42',price:'69'}, { name:'Nokia G22',slug:'nokia-g22',price:'69'},
  { name:'Nokia G21',slug:'nokia-g21',price:'59'}, { name:'Nokia C32',slug:'nokia-c32',price:'59'},
  { name:'Nokia C22',slug:'nokia-c22',price:'59'}, { name:'Nokia XR21',slug:'nokia-xr21',price:'69'},
  { name:'Nokia XR20',slug:'nokia-xr20',price:'69'}, { name:'Nokia G60',slug:'nokia-g60',price:'69'},
  { name:'LG G8 ThinQ',slug:'lg-g8-thinq',price:'79'}, { name:'LG V60 ThinQ',slug:'lg-v60-thinq',price:'79'},
  { name:'LG Velvet',slug:'lg-velvet',price:'79'}, { name:'LG Wing',slug:'lg-wing',price:'89'},
  { name:'LG G7 ThinQ',slug:'lg-g7-thinq',price:'69'}, { name:'LG V50 ThinQ',slug:'lg-v50-thinq',price:'69'},
  { name:'LG K52',slug:'lg-k52',price:'59'}, { name:'LG K42',slug:'lg-k42',price:'59'},
  { name:'Asus ROG Phone 8 Pro',slug:'asus-rog-phone-8-pro',price:'99'}, { name:'Asus ROG Phone 8',slug:'asus-rog-phone-8',price:'99'},
  { name:'Asus ROG Phone 7 Pro',slug:'asus-rog-phone-7-pro',price:'99'}, { name:'Asus ZenFone 11 Ultra',slug:'asus-zenfone-11-ultra',price:'89'},
  { name:'Asus ZenFone 10',slug:'asus-zenfone-10',price:'89'}, { name:'Asus ZenFone 9',slug:'asus-zenfone-9',price:'79'},
  { name:'Asus ROG Phone 6 Pro',slug:'asus-rog-phone-6-pro',price:'89'},
  { name:'Realme 13 Pro Plus',slug:'realme-13-pro-plus',price:'79'}, { name:'Realme 13 Pro',slug:'realme-13-pro',price:'79'},
  { name:'Realme 12 Plus',slug:'realme-12-plus',price:'69'}, { name:'Realme 12',slug:'realme-12',price:'69'},
  { name:'Realme Narzo 70 Pro',slug:'realme-narzo-70-pro',price:'69'}, { name:'Realme Narzo 70',slug:'realme-narzo-70',price:'69'},
  { name:'Realme C67',slug:'realme-c67',price:'59'}, { name:'Realme C55',slug:'realme-c55',price:'59'},
]

const SECONDARY_SERVICES = [
  { slug: 'screen-replacement',    label: 'Screen Replacement',   type: 'ScreenRepair' },
  { slug: 'battery-replacement',   label: 'Battery Replacement',  type: 'BatteryReplacement' },
  { slug: 'charging-port-repair',  label: 'Charging Port Repair', type: 'ChargingPortRepair' },
  { slug: 'water-damage-repair',   label: 'Water Damage Repair',  type: 'WaterDamageRepair' },
  { slug: 'free-device-inspection',label: 'Free Diagnostic',      type: 'DeviceDiagnostic' },
]

// Build serviceSchema code string to inject
function buildServiceSchemaCode(modelName, modelSlug, serviceName, price, pageSlug) {
  const priceDisplay = price === '0' ? '0' : price
  return `
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: '${modelName} ${serviceName} Melbourne',
  description: 'Professional ${modelName} ${serviceName.toLowerCase()} in Melbourne. Lifetime warranty on parts and labour. Walk in Braybrook or Spotswood.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'iTech Repairs',
    url: 'https://www.itechrepairs.com.au',
  },
  areaServed: { '@type': 'City', name: 'Melbourne' },
  serviceType: '${serviceName}',${priceDisplay !== 'Free' && priceDisplay !== '0' ? `
  offers: {
    '@type': 'Offer',
    price: '${priceDisplay}',
    priceCurrency: 'AUD',
    priceSpecification: { '@type': 'UnitPriceSpecification', price: '${priceDisplay}', priceCurrency: 'AUD', unitText: 'starting price' },
  },` : ''}
}`
}

function buildModelRepairSchemaCode(modelName, modelSlug) {
  return `
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: '${modelName} Repair Melbourne',
  description: 'Expert ${modelName} repairs in Melbourne. Screen replacement, battery replacement, charging port repair, water damage repair and free diagnostics. Lifetime warranty.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'iTech Repairs',
    url: 'https://www.itechrepairs.com.au',
  },
  areaServed: { '@type': 'City', name: 'Melbourne' },
  serviceType: 'Phone Repair',
}`
}

console.log('\n=== Fix 2: Inject Service schema into generated pages ===')

let schemaFixed = 0

// Helper: inject schema into a generated page
function injectSchema(filePath, schemaCode) {
  const src = readFileSync(filePath, 'utf8')

  // Skip if already has serviceSchema
  if (src.includes('const serviceSchema')) return false

  // Insert after localBusinessSchema declaration
  const insertAfter = 'const localBusinessSchema = generateRepairShopSchema(primaryLocation)'
  if (!src.includes(insertAfter)) return false

  let updated = src.replace(insertAfter, insertAfter + '\n' + schemaCode)

  // Update SchemaScript to include serviceSchema
  updated = updated.replace(
    'SchemaScript schema={[localBusinessSchema]}',
    'SchemaScript schema={[localBusinessSchema, serviceSchema]}'
  )

  if (updated !== src) {
    writeFileSync(filePath, updated, 'utf8')
    return true
  }
  return false
}

// Patch secondary brand MODEL pages
for (const model of SECONDARY_MODELS) {
  const filePath = join(appDir, `${model.slug}-repair`, 'page.tsx')
  const schemaCode = buildModelRepairSchemaCode(model.name, model.slug)
  try {
    if (injectSchema(filePath, schemaCode)) schemaFixed++
  } catch (e) {
    console.log(`  SKIP (not found): ${model.slug}-repair`)
  }
}

// Patch secondary brand MODEL+SERVICE pages
for (const model of SECONDARY_MODELS) {
  for (const svc of SECONDARY_SERVICES) {
    const pageSlug = `${model.slug}-${svc.slug}`
    const filePath = join(appDir, pageSlug, 'page.tsx')
    const schemaCode = buildServiceSchemaCode(model.name, model.slug, svc.label, model.price, pageSlug)
    try {
      if (injectSchema(filePath, schemaCode)) schemaFixed++
    } catch (e) {
      console.log(`  SKIP (not found): ${pageSlug}`)
    }
  }
}

// Patch Apple Watch MODEL+SERVICE pages
const AW_MODEL_SLUGS = [
  { name:'Apple Watch Series 5',slug:'apple-watch-series-5',price:'149'},
  { name:'Apple Watch Series 6',slug:'apple-watch-series-6',price:'149'},
  { name:'Apple Watch Series 7',slug:'apple-watch-series-7',price:'149'},
  { name:'Apple Watch Series 8',slug:'apple-watch-series-8',price:'149'},
  { name:'Apple Watch Series 9',slug:'apple-watch-series-9',price:'149'},
  { name:'Apple Watch Ultra',   slug:'apple-watch-ultra',   price:'199'},
  { name:'Apple Watch Ultra 2', slug:'apple-watch-ultra-2', price:'199'},
  { name:'Apple Watch SE',      slug:'apple-watch-se',      price:'129'},
  { name:'Apple Watch SE 2',    slug:'apple-watch-se-2',    price:'129'},
]
const AW_SVC_SLUGS = [
  { slug:'screen-repair',          label:'Screen Repair' },
  { slug:'battery-replacement',    label:'Battery Replacement' },
  { slug:'charging-port-repair',   label:'Charging Port Repair' },
  { slug:'water-damage-repair',    label:'Water Damage Repair' },
  { slug:'free-device-inspection', label:'Free Diagnostic' },
]
for (const m of AW_MODEL_SLUGS) {
  for (const s of AW_SVC_SLUGS) {
    const pageSlug = `${m.slug}-${s.slug}`
    const filePath = join(appDir, pageSlug, 'page.tsx')
    const schemaCode = buildServiceSchemaCode(m.name, m.slug, s.label, m.price, pageSlug)
    try {
      if (injectSchema(filePath, schemaCode)) schemaFixed++
    } catch (e) {}
  }
}

console.log(`  Schema injected into ${schemaFixed} pages`)

// ============================================================
// FIX 3 — Apple Watch hub page: add model+service cross-links
// ============================================================

console.log('\n=== Fix 3: Apple Watch hub — add model+service matrix ===')

patch('apple-watch-repair-melbourne/page.tsx', (src) => {
  // Only add if not already present
  if (src.includes('model-service-grid') || src.includes('series-5-screen-repair')) return src

  const gridSection = `
      {/* Model × Service Quick Links */}
      <section className="section-padding bg-gray-surface" id="model-service-grid">
        <div className="container-page">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-charcoal mb-2">
              Repair by Model
            </h2>
            <p className="text-charcoal-light">
              Select your Apple Watch model and repair type for model-specific pricing.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-charcoal text-white">
                  <th className="text-left p-3 rounded-tl-lg">Model</th>
                  <th className="p-3">Screen</th>
                  <th className="p-3">Battery</th>
                  <th className="p-3">Charging</th>
                  <th className="p-3">Water</th>
                  <th className="p-3 rounded-tr-lg">Diagnostic</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Series 5', slug: 'apple-watch-series-5' },
                  { name: 'Series 6', slug: 'apple-watch-series-6' },
                  { name: 'Series 7', slug: 'apple-watch-series-7' },
                  { name: 'Series 8', slug: 'apple-watch-series-8' },
                  { name: 'Series 9', slug: 'apple-watch-series-9' },
                  { name: 'Ultra',    slug: 'apple-watch-ultra' },
                  { name: 'Ultra 2',  slug: 'apple-watch-ultra-2' },
                  { name: 'SE',       slug: 'apple-watch-se' },
                  { name: 'SE 2',     slug: 'apple-watch-se-2' },
                ].map((m) => (
                  <tr key={m.slug} className="border-b border-gray-border hover:bg-white transition-colors">
                    <td className="p-3 font-medium text-charcoal">{m.name}</td>
                    {[
                      { svc: 'screen-repair', label: 'Screen' },
                      { svc: 'battery-replacement', label: 'Battery' },
                      { svc: 'charging-port-repair', label: 'Charging' },
                      { svc: 'water-damage-repair', label: 'Water' },
                      { svc: 'free-device-inspection', label: 'Free' },
                    ].map((s) => (
                      <td key={s.svc} className="p-3 text-center">
                        <Link href={\`/\${m.slug}-\${s.svc}\`} className="text-primary hover:underline text-xs font-medium">
                          {s.label}
                        </Link>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>`

  // Insert before the CTA banner
  return src.replace(/(\s*{\/\* CTA Banner \*\/})/, gridSection + '\n$1')
})

console.log('\nAll SEO fixes complete.')
