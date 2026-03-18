/**
 * Expands model coverage across all secondary brands to match/exceed Repair Mate.
 *
 * For each new model:
 *  1. Generates /{modelSlug}-repair/page.tsx
 *  2. Generates /{modelSlug}-{serviceSlug}/page.tsx × 5 services
 *  3. Updates hub page models array to include new model cards
 *  4. Outputs new sitemap entries to add
 *
 * Run: node scripts/expand-brand-models.mjs
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
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

function write(dirPath, content, force = false) {
  if (!existsSync(dirPath)) mkdirSync(dirPath, { recursive: true })
  const filePath = join(dirPath, 'page.tsx')
  if (existsSync(filePath) && !force) return false
  writeFileSync(filePath, content, 'utf8')
  return true
}

function fnName(slug) {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('') + 'Page'
}

function esc(s) { return s.replace(/'/g, "\\'") }

// ============================================================
// SERVICES
// ============================================================
const SERVICES = [
  { slug: 'screen-replacement',     name: 'Screen Replacement',   price: (p) => p['screen-replacement']     || 'From $89' },
  { slug: 'battery-replacement',    name: 'Battery Replacement',  price: (p) => p['battery-replacement']    || 'From $79' },
  { slug: 'charging-port-repair',   name: 'Charging Port Repair', price: (p) => p['charging-port-repair']   || 'From $69' },
  { slug: 'water-damage-repair',    name: 'Water Damage Repair',  price: (p) => p['water-damage-repair']    || 'From $89' },
  { slug: 'free-device-inspection', name: 'Free Diagnostic',      price: () => 'Free' },
]

// ============================================================
// EXPANSION DATA — only NEW models (not already on site)
// ============================================================
const EXPANSION = [
  {
    brandName: 'OnePlus',
    hubFile: 'oneplus-phone-repair-melbourne/page.tsx',
    hubSlug: 'oneplus-phone-repair-melbourne',
    pricing: { 'screen-replacement': 'From $89', 'battery-replacement': 'From $79', 'charging-port-repair': 'From $69', 'water-damage-repair': 'From $89' },
    newModels: [
      'OnePlus 13R', 'OnePlus 12R', 'OnePlus 11R', 'OnePlus 10T',
      'OnePlus 9 Pro', 'OnePlus 9', 'OnePlus 8T', 'OnePlus 8 Pro', 'OnePlus 8',
      'OnePlus 7T Pro', 'OnePlus 7T',
      'OnePlus Nord 2T', 'OnePlus Nord CE 2', 'OnePlus Nord CE 2 Lite',
    ],
  },
  {
    brandName: 'Sony',
    hubFile: 'sony-phone-repair-melbourne/page.tsx',
    hubSlug: 'sony-phone-repair-melbourne',
    pricing: { 'screen-replacement': 'From $99', 'battery-replacement': 'From $79', 'charging-port-repair': 'From $69', 'water-damage-repair': 'From $99' },
    newModels: [
      'Sony Xperia 5 IV', 'Sony Xperia 5 III',
      'Sony Xperia 1 III', 'Sony Xperia 1 II',
      'Sony Xperia 10 IV', 'Sony Xperia 10 III', 'Sony Xperia 10 II',
    ],
  },
  {
    brandName: 'Oppo',
    hubFile: 'oppo-phone-repair-melbourne/page.tsx',
    hubSlug: 'oppo-phone-repair-melbourne',
    pricing: { 'screen-replacement': 'From $89', 'battery-replacement': 'From $79', 'charging-port-repair': 'From $69', 'water-damage-repair': 'From $89' },
    newModels: [
      'Oppo Find X6', 'Oppo Find X5 Pro', 'Oppo Find X3 Pro',
      'Oppo Reno 11 F', 'Oppo Reno 9 Pro', 'Oppo Reno 8 Pro', 'Oppo Reno 8T',
      'Oppo Reno 7', 'Oppo Reno 6', 'Oppo Reno 5', 'Oppo Reno 4',
      'Oppo A96', 'Oppo A74', 'Oppo A72', 'Oppo A54', 'Oppo A53', 'Oppo A52',
      'Oppo A16', 'Oppo A15', 'Oppo A9 2020',
    ],
  },
  {
    brandName: 'Xiaomi',
    hubFile: 'xiaomi-phone-repair-melbourne/page.tsx',
    hubSlug: 'xiaomi-phone-repair-melbourne',
    pricing: { 'screen-replacement': 'From $79', 'battery-replacement': 'From $69', 'charging-port-repair': 'From $69', 'water-damage-repair': 'From $79' },
    newModels: [
      'Xiaomi 13 Lite', 'Xiaomi 12 Pro', 'Xiaomi 12',
      'Xiaomi 11 Ultra', 'Xiaomi 11', 'Xiaomi 10T Pro', 'Xiaomi 10T',
      'Redmi Note 12 Pro', 'Redmi Note 12',
      'Redmi Note 11 Pro', 'Redmi Note 11',
      'Redmi Note 10 Pro', 'Redmi Note 10',
      'Redmi 10', 'Redmi 10C', 'Redmi 9',
      'POCO X5 Pro', 'POCO X5', 'POCO F5',
    ],
  },
  {
    brandName: 'Huawei',
    hubFile: 'huawei-phone-repair-melbourne/page.tsx',
    hubSlug: 'huawei-phone-repair-melbourne',
    pricing: { 'screen-replacement': 'From $89', 'battery-replacement': 'From $79', 'charging-port-repair': 'From $69', 'water-damage-repair': 'From $89' },
    newModels: [
      'Huawei P40', 'Huawei P40 Lite',
      'Huawei P30 Pro', 'Huawei P30', 'Huawei P30 Lite',
      'Huawei P20 Pro',
      'Huawei Mate 30 Pro', 'Huawei Mate 20 Pro',
      'Huawei Nova 10 Pro',
    ],
  },
  {
    brandName: 'Motorola',
    hubFile: 'motorola-phone-repair-melbourne/page.tsx',
    hubSlug: 'motorola-phone-repair-melbourne',
    pricing: { 'screen-replacement': 'From $79', 'battery-replacement': 'From $69', 'charging-port-repair': 'From $59', 'water-damage-repair': 'From $79' },
    newModels: [
      'Motorola Edge 60 Pro', 'Motorola Edge 30 Pro', 'Motorola Edge 30', 'Motorola Edge 20 Pro',
      'Moto G73', 'Moto G72', 'Moto G62', 'Moto G52', 'Moto G42', 'Moto G32',
      'Motorola Razr 2022', 'Moto E32',
    ],
  },
  {
    brandName: 'Nokia',
    hubFile: 'nokia-phone-repair-melbourne/page.tsx',
    hubSlug: 'nokia-phone-repair-melbourne',
    pricing: { 'screen-replacement': 'From $69', 'battery-replacement': 'From $59', 'charging-port-repair': 'From $55', 'water-damage-repair': 'From $69' },
    newModels: [
      'Nokia 8.3 5G', 'Nokia 7.2', 'Nokia 6.2',
      'Nokia 5.4', 'Nokia 5.3', 'Nokia 4.2', 'Nokia 3.4', 'Nokia G11',
    ],
  },
  {
    brandName: 'LG',
    hubFile: 'lg-phone-repair-melbourne/page.tsx',
    hubSlug: 'lg-phone-repair-melbourne',
    pricing: { 'screen-replacement': 'From $79', 'battery-replacement': 'From $69', 'charging-port-repair': 'From $65', 'water-damage-repair': 'From $79' },
    newModels: [
      'LG G6', 'LG G5', 'LG V40 ThinQ', 'LG V30', 'LG V20',
      'LG K61', 'LG K51', 'LG K41',
    ],
  },
  {
    brandName: 'Asus',
    hubFile: 'asus-phone-repair-melbourne/page.tsx',
    hubSlug: 'asus-phone-repair-melbourne',
    pricing: { 'screen-replacement': 'From $99', 'battery-replacement': 'From $79', 'charging-port-repair': 'From $69', 'water-damage-repair': 'From $99' },
    newModels: [
      'Asus ROG Phone 7', 'Asus ROG Phone 6', 'Asus ROG Phone 5s',
      'Asus ZenFone 8', 'Asus ZenFone 7',
    ],
  },
  {
    brandName: 'Realme',
    hubFile: 'realme-phone-repair-melbourne/page.tsx',
    hubSlug: 'realme-phone-repair-melbourne',
    pricing: { 'screen-replacement': 'From $79', 'battery-replacement': 'From $69', 'charging-port-repair': 'From $59', 'water-damage-repair': 'From $79' },
    newModels: [
      'Realme 11 Pro', 'Realme 11', 'Realme 10 Pro+',
      'Realme 9 Pro+', 'Realme 9 Pro', 'Realme 9',
      'Realme 8 Pro', 'Realme 8',
      'Realme GT 2 Pro', 'Realme GT Neo 3',
      'Realme C35', 'Realme Narzo 50 Pro',
    ],
  },
]

// ============================================================
// TEMPLATES
// ============================================================

function modelPageContent(modelName, modelSlug, brand) {
  const { brandName, hubSlug, pricing } = brand
  const servicesCode = SERVICES
    .map(s => `  { name: '${esc(s.name)}', price: '${s.price(pricing)}', href: '/${modelSlug}-${s.slug}', serviceSlug: '${s.slug}' },`)
    .join('\n')

  return `import type { Metadata } from 'next'
import Link from 'next/link'
import { primaryLocation } from '@/data'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'

export const metadata: Metadata = {
  title: '${esc(modelName)} Repair Melbourne | Screen, Battery & More',
  description:
    '${esc(modelName)} repair in Melbourne. Screen replacement, battery replacement, charging port repair, water damage repair and free diagnostic. Lifetime warranty. Walk in Braybrook or Spotswood.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/${modelSlug}-repair',
  },
  openGraph: {
    title: '${esc(modelName)} Repair Melbourne | Screen, Battery & More',
    description: '${esc(modelName)} repair in Melbourne. Lifetime warranty. Walk in today.',
    url: 'https://www.itechrepairs.com.au/${modelSlug}-repair',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const services = [
${servicesCode}
]

export default function ${fnName(modelSlug + '-repair')}() {
  return (
    <>
      <SchemaScript schema={[localBusinessSchema]} />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-gray-surface border-b border-gray-border py-3">
        <div className="container-page">
          <ol className="flex items-center gap-2 text-sm text-charcoal-light">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/${hubSlug}" className="hover:text-primary transition-colors">${esc(brandName)} Repairs</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal font-medium">${esc(modelName)}</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              ${esc(modelName)} Repair Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Screen Replacement · Battery Replacement · Charging Port · Lifetime Warranty
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Book Repair</Link>
              <Link href="tel:+61390016199" className="btn-outline-white">Call Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-charcoal mb-8 text-center">
            ${esc(modelName)} Repair Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((svc) => (
              <Link
                key={svc.serviceSlug}
                href={svc.href}
                className="card p-6 hover:shadow-md transition-shadow group"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-charcoal group-hover:text-primary transition-colors">
                    {svc.name}
                  </h3>
                  <span className="text-primary font-bold text-sm">{svc.price}</span>
                </div>
                <p className="text-sm text-charcoal-light">
                  Professional ${esc(modelName)} {svc.name.toLowerCase()} with lifetime warranty.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why iTech */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-charcoal mb-4">Why iTech Repairs?</h2>
          <p className="text-charcoal-light mb-6">
            We use genuine or OEM-grade parts for every ${esc(modelName)} repair. Most repairs are
            completed same-day. All work is backed by a lifetime warranty on parts and labour.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-charcoal">
            <span>✓ Lifetime Warranty</span>
            <span>✓ Same-Day Repairs</span>
            <span>✓ No Fix No Fee</span>
            <span>✓ Walk-In Welcome</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white text-center">
        <div className="container-page max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">Ready to Fix Your ${esc(modelName)}?</h2>
          <p className="mb-6 opacity-90">Walk in to our Braybrook or Spotswood store — no appointment needed.</p>
          <Link href="/contact" className="btn-white">Get a Quote</Link>
        </div>
      </section>
    </>
  )
}
`
}

function servicePageContent(modelName, modelSlug, serviceName, serviceSlug, brand) {
  const { brandName, hubSlug, pricing } = brand
  const price = SERVICES.find(s => s.slug === serviceSlug)?.price(pricing) ?? 'From $79'

  const siblingServices = SERVICES
    .filter(s => s.slug !== serviceSlug)
    .map(s => `  { name: '${esc(s.name)}', href: '/${modelSlug}-${s.slug}' },`)
    .join('\n')

  return `import type { Metadata } from 'next'
import Link from 'next/link'
import { primaryLocation } from '@/data'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'

export const metadata: Metadata = {
  title: '${esc(modelName)} ${esc(serviceName)} Melbourne | ${price}',
  description:
    '${esc(modelName)} ${esc(serviceName.toLowerCase())} in Melbourne starting ${price}. Lifetime warranty on parts and labour. Walk in to Braybrook or Spotswood — no appointment needed.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/${modelSlug}-${serviceSlug}',
  },
  openGraph: {
    title: '${esc(modelName)} ${esc(serviceName)} Melbourne | ${price}',
    description: '${esc(modelName)} ${esc(serviceName.toLowerCase())} Melbourne. Lifetime warranty.',
    url: 'https://www.itechrepairs.com.au/${modelSlug}-${serviceSlug}',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: '${esc(modelName)} ${esc(serviceName)} Melbourne',
  provider: {
    '@type': 'LocalBusiness',
    name: 'iTech Repairs',
  },
  offers: {
    '@type': 'Offer',
    price: '${price.replace('From $', '')}',
    priceCurrency: 'AUD',
  },
}

const relatedServices = [
${siblingServices}
]

export default function ${fnName(modelSlug + '-' + serviceSlug)}() {
  return (
    <>
      <SchemaScript schema={[localBusinessSchema, serviceSchema]} />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-gray-surface border-b border-gray-border py-3">
        <div className="container-page">
          <ol className="flex items-center gap-2 text-sm text-charcoal-light">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/${hubSlug}" className="hover:text-primary transition-colors">${esc(brandName)} Repairs</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/${modelSlug}-repair" className="hover:text-primary transition-colors">${esc(modelName)}</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal font-medium">${esc(serviceName)}</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              ${esc(modelName)} ${esc(serviceName)} Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-2">Starting at <strong>${price}</strong></p>
            <p className="text-gray-400 mb-6">Lifetime warranty · Same-day repair · No fix no fee</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Book Repair</Link>
              <Link href="tel:+61390016199" className="btn-outline-white">Call Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Detail */}
      <section className="section-padding bg-white">
        <div className="container-page max-w-3xl">
          <h2 className="text-2xl font-bold text-charcoal mb-4">
            About This Service
          </h2>
          <p className="text-charcoal-light mb-4">
            Our technicians specialise in ${esc(modelName)} ${esc(serviceName.toLowerCase())} using
            genuine or OEM-grade components. Every repair comes with a lifetime warranty on parts
            and labour, and most jobs are completed same-day.
          </p>
          <ul className="space-y-2 text-charcoal-light">
            <li>✓ Genuine or OEM-grade parts</li>
            <li>✓ Lifetime warranty on parts and labour</li>
            <li>✓ Same-day turnaround in most cases</li>
            <li>✓ No fix, no fee guarantee</li>
            <li>✓ Walk-in welcome at Braybrook &amp; Spotswood</li>
          </ul>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <h2 className="text-xl font-bold text-charcoal mb-6 text-center">
            Other ${esc(modelName)} Repairs
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {relatedServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors text-sm font-medium"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white text-center">
        <div className="container-page max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">
            Book Your ${esc(modelName)} ${esc(serviceName)} Today
          </h2>
          <p className="mb-6 opacity-90">
            Walk in to our Braybrook or Spotswood store — no appointment needed.
          </p>
          <Link href="/contact" className="btn-white">Get a Free Quote</Link>
        </div>
      </section>
    </>
  )
}
`
}

// ============================================================
// MAIN
// ============================================================

let totalModels = 0
let totalPages = 0
const allNewSlugs = []

for (const brand of EXPANSION) {
  console.log(`\n=== ${brand.brandName} ===`)
  let brandModels = 0

  for (const modelName of brand.newModels) {
    const modelSlug = toSlug(modelName)
    allNewSlugs.push(modelSlug)

    // Model page
    const modelDir = join(appDir, `${modelSlug}-repair`)
    const created = write(modelDir, modelPageContent(modelName, modelSlug, brand))
    if (created) {
      process.stdout.write(`  + ${modelSlug}-repair\n`)
      totalPages++
    } else {
      process.stdout.write(`  ~ ${modelSlug}-repair (exists)\n`)
    }

    // Service pages
    for (const svc of SERVICES) {
      const svcDir = join(appDir, `${modelSlug}-${svc.slug}`)
      const svcCreated = write(svcDir, servicePageContent(modelName, modelSlug, svc.name, svc.slug, brand))
      if (svcCreated) totalPages++
    }

    brandModels++
    totalModels++
  }

  // ── Update hub page model array ───────────────────────────────────────────
  const hubPath = join(appDir, brand.hubFile)
  if (existsSync(hubPath)) {
    let src = readFileSync(hubPath, 'utf8')
    const original = src

    // Build new model items for the hub
    const newItems = brand.newModels
      .map(n => `  { name: '${esc(n)}', slug: '${toSlug(n)}' },`)
      .join('\n')

    // Insert before the closing ] of the models array
    src = src.replace(
      /(const models = \[[\s\S]*?)(]\s*\n)/m,
      `$1${newItems}\n$2`
    )

    if (src !== original) {
      writeFileSync(hubPath, src, 'utf8')
      console.log(`  HUB UPDATED: ${brand.hubFile} (+${brandModels} models)`)
    } else {
      console.log(`  HUB NO CHANGE: ${brand.hubFile}`)
    }
  } else {
    console.log(`  HUB NOT FOUND: ${brand.hubFile}`)
  }
}

// ============================================================
// OUTPUT SITEMAP SLUGS
// ============================================================
console.log('\n============================================================')
console.log(`TOTAL NEW MODELS: ${totalModels}`)
console.log(`TOTAL NEW PAGES : ${totalPages}`)
console.log('\nAdd the following to sitemapHelpers.ts getBrandRepairEntries():')
console.log('// Expansion models — model pages')
allNewSlugs.forEach(s => console.log(`  entry('/${s}-repair', 0.65),`))

console.log('\n// Expansion models — service pages')
allNewSlugs.forEach(s => {
  const services = ['screen-replacement','battery-replacement','charging-port-repair','water-damage-repair','free-device-inspection']
  services.forEach(sv => console.log(`  entry('/${s}-${sv}', 0.60),`))
})
