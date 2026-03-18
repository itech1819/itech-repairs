/**
 * Generates:
 *  1. Secondary-brand model pages  (~95 pages)  e.g. /oneplus-13-repair
 *  2. Apple Watch model+service pages (~45 pages) e.g. /apple-watch-series-5-screen-repair
 *
 * Run with:  node scripts/generate-brand-model-pages.mjs
 */

import { writeFileSync, mkdirSync, existsSync } from 'fs'
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

function write(dirPath, content) {
  if (!existsSync(dirPath)) mkdirSync(dirPath, { recursive: true })
  const filePath = join(dirPath, 'page.tsx')
  if (existsSync(filePath)) {
    // Skip if already exists so we don't overwrite hand-crafted pages
    console.log(`  SKIP (exists): ${filePath}`)
    return false
  }
  writeFileSync(filePath, content, 'utf8')
  console.log(`  CREATED: ${filePath}`)
  return true
}

// ============================================================
// DATA
// ============================================================

const secondaryBrands = [
  {
    brandName: 'OnePlus',
    hubSlug: 'oneplus-phone-repair-melbourne',
    services: [
      { name: 'Screen Repair',        price: 'From $89', desc: 'Quality AMOLED replacement preserving 120Hz refresh and colour accuracy.' },
      { name: 'Battery Replacement',  price: 'From $79', desc: 'Restore all-day battery life and SuperVOOC fast-charging capability.' },
      { name: 'Charging Port Repair', price: 'From $69', desc: 'Fix USB-C ports that are loose, damaged or failing to charge.' },
      { name: 'Camera Repair',        price: 'From $89', desc: 'Replace or repair front and rear cameras on all OnePlus models.' },
      { name: 'Free Diagnostic',      price: 'Free',     desc: 'Full assessment and written quote — you only pay if we fix it.' },
    ],
    models: [
      'OnePlus 13', 'OnePlus 12', 'OnePlus 11', 'OnePlus 10 Pro',
      'OnePlus Nord 4', 'OnePlus Nord CE 4', 'OnePlus Nord 3', 'OnePlus Nord CE 3',
    ],
  },
  {
    brandName: 'Nothing',
    hubSlug: 'nothing-phone-repair-melbourne',
    services: [
      { name: 'Screen Repair',        price: 'From $89', desc: 'Cracked Nothing Phone display replaced — Glyph interface preserved.' },
      { name: 'Battery Replacement',  price: 'From $79', desc: 'Replace a worn Nothing Phone battery and restore full-day battery life.' },
      { name: 'Charging Port Repair', price: 'From $69', desc: 'Repair damaged USB-C charging port on any Nothing Phone model.' },
      { name: 'Camera Repair',        price: 'From $89', desc: 'Fix blurry or broken front and rear cameras on Nothing Phone.' },
      { name: 'Free Diagnostic',      price: 'Free',     desc: 'Free assessment with written quote — no obligation.' },
    ],
    models: [
      'Nothing Phone (3a)', 'Nothing Phone (3a) Pro',
      'Nothing Phone (2a)', 'Nothing Phone (2a) Plus',
      'Nothing Phone (2)', 'Nothing Phone (1)',
    ],
  },
  {
    brandName: 'Sony',
    hubSlug: 'sony-phone-repair-melbourne',
    services: [
      { name: 'Screen Repair',        price: 'From $99', desc: 'Sony Xperia 4K display replaced with precision parts for full colour accuracy.' },
      { name: 'Battery Replacement',  price: 'From $79', desc: 'Replace a degraded Sony Xperia battery and restore full stamina mode performance.' },
      { name: 'Charging Port Repair', price: 'From $69', desc: 'Fix USB-C charging port issues on all Sony Xperia models.' },
      { name: 'Camera Repair',        price: 'From $99', desc: 'Repair Sony\'s triple-lens camera system — lenses, sensors and autofocus.' },
      { name: 'Free Diagnostic',      price: 'Free',     desc: 'Free assessment with written quote — no obligation.' },
    ],
    models: [
      'Sony Xperia 1 VI', 'Sony Xperia 5 VI', 'Sony Xperia 10 VI',
      'Sony Xperia 1 V', 'Sony Xperia 5 V', 'Sony Xperia 10 V',
      'Sony Xperia 1 IV', 'Sony Xperia Pro-I',
    ],
  },
  {
    brandName: 'Oppo',
    hubSlug: 'oppo-phone-repair-melbourne',
    services: [
      { name: 'Screen Repair',        price: 'From $89', desc: 'Oppo screen replaced with quality parts. Full touch sensitivity restored.' },
      { name: 'Battery Replacement',  price: 'From $79', desc: 'Replace a draining Oppo battery and restore SUPERVOOC fast charging.' },
      { name: 'Charging Port Repair', price: 'From $69', desc: 'Repair damaged USB-C charging ports on all Oppo models.' },
      { name: 'Camera Repair',        price: 'From $79', desc: 'Fix rear or front cameras on all Oppo Find and Reno models.' },
      { name: 'Free Diagnostic',      price: 'Free',     desc: 'Free assessment with written quote — no obligation.' },
    ],
    models: [
      'Oppo Find X8', 'Oppo Find X7', 'Oppo Find X6 Pro',
      'Oppo Reno 12', 'Oppo Reno 11', 'Oppo Reno 10', 'Oppo Reno 8',
      'Oppo A78', 'Oppo A58', 'Oppo A38', 'Oppo F25 Pro', 'Oppo F23',
    ],
  },
  {
    brandName: 'Xiaomi',
    hubSlug: 'xiaomi-phone-repair-melbourne',
    services: [
      { name: 'Screen Repair',        price: 'From $79', desc: 'Quality AMOLED replacement for Xiaomi, Redmi and POCO models.' },
      { name: 'Battery Replacement',  price: 'From $69', desc: 'Replace a worn battery and restore full-day performance on your Xiaomi device.' },
      { name: 'Charging Port Repair', price: 'From $69', desc: 'Fix USB-C charging port issues on any Xiaomi, Redmi or POCO model.' },
      { name: 'Camera Repair',        price: 'From $79', desc: 'Repair Leica-tuned and standard cameras on all Xiaomi models.' },
      { name: 'Free Diagnostic',      price: 'Free',     desc: 'Free assessment with written quote — no obligation.' },
    ],
    models: [
      'Xiaomi 14 Ultra', 'Xiaomi 14', 'Xiaomi 13 Pro', 'Xiaomi 13',
      'Redmi Note 13 Pro', 'Redmi Note 13', 'Redmi 13C',
      'POCO X6 Pro', 'POCO X6', 'POCO M6 Pro',
    ],
  },
  {
    brandName: 'Huawei',
    hubSlug: 'huawei-phone-repair-melbourne',
    services: [
      { name: 'Screen Repair',        price: 'From $89', desc: 'Huawei curved or flat AMOLED display replaced with genuine-grade parts.' },
      { name: 'Battery Replacement',  price: 'From $79', desc: 'Replace degraded Huawei battery and restore fast charging performance.' },
      { name: 'Charging Port Repair', price: 'From $69', desc: 'Fix USB-C charging ports on all Huawei P-series, Mate and Nova models.' },
      { name: 'Camera Repair',        price: 'From $89', desc: 'Repair Leica multi-lens camera systems on Huawei P and Mate series.' },
      { name: 'Free Diagnostic',      price: 'Free',     desc: 'Free assessment with written quote — no obligation.' },
    ],
    models: [
      'Huawei P60 Pro', 'Huawei P50 Pro', 'Huawei P40 Pro',
      'Huawei Mate 50 Pro', 'Huawei Mate 40 Pro',
      'Huawei Nova 12', 'Huawei Nova 11',
      'Huawei Y90', 'Huawei Y70', 'Huawei Y60',
    ],
  },
  {
    brandName: 'Motorola',
    hubSlug: 'motorola-phone-repair-melbourne',
    services: [
      { name: 'Screen Repair',        price: 'From $79', desc: 'Cracked Motorola screen replaced — pOLED and IPS panels available.' },
      { name: 'Battery Replacement',  price: 'From $69', desc: 'Replace a worn Motorola battery and restore all-day battery life.' },
      { name: 'Charging Port Repair', price: 'From $59', desc: 'Fix charging port on Motorola Edge, Razr and Moto G series.' },
      { name: 'Camera Repair',        price: 'From $79', desc: 'Repair camera systems on all Motorola Edge, Razr and Moto models.' },
      { name: 'Free Diagnostic',      price: 'Free',     desc: 'Free assessment with written quote — no obligation.' },
    ],
    models: [
      'Motorola Edge 50 Pro', 'Motorola Edge 50', 'Motorola Edge 40 Pro',
      'Moto G85', 'Moto G84', 'Moto G54', 'Moto G34',
      'Motorola Razr 50', 'Motorola Razr 40 Ultra', 'Moto G Power',
    ],
  },
  {
    brandName: 'Nokia',
    hubSlug: 'nokia-phone-repair-melbourne',
    services: [
      { name: 'Screen Repair',        price: 'From $69', desc: 'Replace cracked Nokia screen using quality display assembly.' },
      { name: 'Battery Replacement',  price: 'From $59', desc: 'Restore Nokia battery performance and full-day stamina.' },
      { name: 'Charging Port Repair', price: 'From $55', desc: 'Fix USB-C charging port on Nokia G, C and XR series.' },
      { name: 'Camera Repair',        price: 'From $69', desc: 'Repair ZEISS-tuned cameras on Nokia phones.' },
      { name: 'Free Diagnostic',      price: 'Free',     desc: 'Free assessment with written quote — no obligation.' },
    ],
    models: [
      'Nokia G42', 'Nokia G22', 'Nokia G21',
      'Nokia C32', 'Nokia C22',
      'Nokia XR21', 'Nokia XR20', 'Nokia G60',
    ],
  },
  {
    brandName: 'LG',
    hubSlug: 'lg-phone-repair-melbourne',
    services: [
      { name: 'Screen Repair',        price: 'From $79', desc: 'Quality LG OLED and LCD display replacements available for all models.' },
      { name: 'Battery Replacement',  price: 'From $69', desc: 'Replace a worn LG battery and restore full performance.' },
      { name: 'Charging Port Repair', price: 'From $65', desc: 'Fix USB-C charging port on LG G, V and K series phones.' },
      { name: 'Camera Repair',        price: 'From $79', desc: 'Fix wide, ultra-wide and telephoto cameras on LG flagship phones.' },
      { name: 'Free Diagnostic',      price: 'Free',     desc: 'Free assessment with written quote — no obligation.' },
    ],
    models: [
      'LG G8 ThinQ', 'LG V60 ThinQ', 'LG Velvet', 'LG Wing',
      'LG G7 ThinQ', 'LG V50 ThinQ', 'LG K52', 'LG K42',
    ],
  },
  {
    brandName: 'Asus',
    hubSlug: 'asus-phone-repair-melbourne',
    services: [
      { name: 'Screen Repair',        price: 'From $99', desc: 'Asus ROG and ZenFone display replaced — 144Hz gaming display performance preserved.' },
      { name: 'Battery Replacement',  price: 'From $79', desc: 'Replace dual-battery system on ROG Phone or single battery on ZenFone.' },
      { name: 'Charging Port Repair', price: 'From $69', desc: 'Fix side-mounted or bottom USB-C ports on Asus ROG and ZenFone.' },
      { name: 'Camera Repair',        price: 'From $89', desc: 'Repair cameras on all Asus ROG and ZenFone models.' },
      { name: 'Free Diagnostic',      price: 'Free',     desc: 'Free assessment with written quote — no obligation.' },
    ],
    models: [
      'Asus ROG Phone 8 Pro', 'Asus ROG Phone 8', 'Asus ROG Phone 7 Pro',
      'Asus ZenFone 11 Ultra', 'Asus ZenFone 10', 'Asus ZenFone 9',
      'Asus ROG Phone 6 Pro',
    ],
  },
  {
    brandName: 'Realme',
    hubSlug: 'realme-phone-repair-melbourne',
    services: [
      { name: 'Screen Repair',        price: 'From $79', desc: 'Replace cracked Realme AMOLED or IPS display at an affordable price.' },
      { name: 'Battery Replacement',  price: 'From $69', desc: 'Restore Realme battery life and SUPERVOOC fast-charging speed.' },
      { name: 'Charging Port Repair', price: 'From $59', desc: 'Fix USB-C charging port on all Realme and Narzo models.' },
      { name: 'Camera Repair',        price: 'From $79', desc: 'Repair cameras on all Realme 12, C and Narzo series.' },
      { name: 'Free Diagnostic',      price: 'Free',     desc: 'Free assessment with written quote — no obligation.' },
    ],
    models: [
      'Realme 13 Pro Plus', 'Realme 13 Pro', 'Realme 12 Plus', 'Realme 12',
      'Realme Narzo 70 Pro', 'Realme Narzo 70', 'Realme C67', 'Realme C55',
    ],
  },
]

// ============================================================
// APPLE WATCH MODEL+SERVICE PAGES
// ============================================================

const appleWatchModels = [
  { name: 'Apple Watch Series 5', slug: 'apple-watch-series-5', year: 2019 },
  { name: 'Apple Watch Series 6', slug: 'apple-watch-series-6', year: 2020 },
  { name: 'Apple Watch Series 7', slug: 'apple-watch-series-7', year: 2021 },
  { name: 'Apple Watch Series 8', slug: 'apple-watch-series-8', year: 2022 },
  { name: 'Apple Watch Series 9', slug: 'apple-watch-series-9', year: 2023 },
  { name: 'Apple Watch Ultra', slug: 'apple-watch-ultra', year: 2022 },
  { name: 'Apple Watch Ultra 2', slug: 'apple-watch-ultra-2', year: 2023 },
  { name: 'Apple Watch SE', slug: 'apple-watch-se', year: 2020 },
  { name: 'Apple Watch SE 2', slug: 'apple-watch-se-2', year: 2022 },
]

const appleWatchServices = [
  {
    slug: 'screen-repair',
    name: 'Screen Repair',
    price: 'From $149',
    desc: 'Cracked or shattered display replaced same day.',
    h1Suffix: 'Screen Repair Melbourne',
    metaDesc: 'screen repair',
  },
  {
    slug: 'battery-replacement',
    name: 'Battery Replacement',
    price: 'From $99',
    desc: 'Dead or draining battery replaced — restore all-day wearable stamina.',
    h1Suffix: 'Battery Replacement Melbourne',
    metaDesc: 'battery replacement',
  },
  {
    slug: 'charging-port-repair',
    name: 'Charging Port Repair',
    price: 'Free check',
    desc: 'Apple Watch not charging? We diagnose and repair the charging module.',
    h1Suffix: 'Charging Repair Melbourne',
    metaDesc: 'charging repair',
  },
  {
    slug: 'water-damage-repair',
    name: 'Water Damage Repair',
    price: 'Free check',
    desc: 'Corrosion cleaning and component repair after liquid exposure.',
    h1Suffix: 'Water Damage Repair Melbourne',
    metaDesc: 'water damage repair',
  },
  {
    slug: 'free-device-inspection',
    name: 'Free Diagnostic',
    price: 'Free',
    desc: 'Full device assessment with written quote — no obligation to proceed.',
    h1Suffix: 'Free Diagnostic Melbourne',
    metaDesc: 'free diagnostic',
  },
]

// ============================================================
// TEMPLATE: secondary brand model page
// ============================================================

function modelPageContent(modelName, modelSlug, brand) {
  const { brandName, hubSlug, services } = brand
  const functionName = modelSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('') + 'RepairPage'

  const servicesCode = services
    .map(s => `  { name: '${s.name}', price: '${s.price}', href: '/${hubSlug}', desc: '${s.desc}' },`)
    .join('\n')

  return `import type { Metadata } from 'next'
import Link from 'next/link'
import { business, primaryLocation } from '@/data'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'

export const metadata: Metadata = {
  title: '${modelName} Repair Melbourne | Screen, Battery & More',
  description:
    '${modelName} repair in Melbourne. Screen repair, battery replacement, charging port repair and more. Lifetime warranty on all repairs. Walk in Braybrook or Spotswood — no appointment needed.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/${modelSlug}-repair',
  },
  openGraph: {
    title: '${modelName} Repair Melbourne | Screen, Battery & More',
    description: '${modelName} repair in Melbourne. Screen repair, battery replacement, and more. Lifetime warranty. Walk in today.',
    url: 'https://www.itechrepairs.com.au/${modelSlug}-repair',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const services = [
${servicesCode}
]

export default function ${functionName}() {
  return (
    <>
      <SchemaScript schema={[localBusinessSchema]} />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-gray-surface border-b border-gray-border py-3">
        <div className="container-page">
          <ol className="flex items-center gap-2 text-sm text-charcoal-light">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/${hubSlug}" className="hover:text-primary transition-colors">${brandName} Repairs</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal font-medium">${modelName}</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              ${modelName} Repair Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Screen Repair · Battery Replacement · Charging Port · Lifetime Warranty
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Expert ${modelName} repairs in Melbourne. Walk in to our Braybrook or Spotswood store any time — no appointment needed. Every repair comes with a lifetime warranty on parts and labour.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={\`tel:\${business.phone}\`}
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
              >
                Call {business.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-charcoal transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white border-b border-gray-border py-6">
        <div className="container-page">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { label: 'Same Day', sub: 'Repair' },
              { label: 'Lifetime', sub: 'Warranty' },
              { label: 'Cheapest', sub: 'Price' },
              { label: 'Walk-ins', sub: 'Welcome' },
            ].map((stat) => (
              <div key={stat.label} className="py-3">
                <div className="text-xl font-bold text-primary">{stat.label}</div>
                <div className="text-sm text-charcoal-light mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Services */}
      <section className="section-padding">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              ${modelName} Repair Services
            </h2>
            <p className="text-charcoal-light text-lg">
              All repairs available for ${modelName} in Melbourne.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {services.map((service) => (
              <Link key={service.name} href={service.href} className="card p-6 hover:border-primary group">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-charcoal group-hover:text-primary transition-colors">{service.name}</h3>
                  <span className="text-primary font-bold text-sm whitespace-nowrap ml-2">{service.price}</span>
                </div>
                <p className="text-sm text-charcoal-light leading-relaxed">{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16">
        <div className="container-page text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Your ${modelName} Repaired Today?
          </h2>
          <p className="text-lg text-red-100 mb-8 max-w-xl mx-auto">
            Walk in to our Braybrook or Spotswood store — no appointment needed. Lifetime warranty on all repairs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={\`tel:\${business.phone}\`}
              className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl text-lg hover:bg-red-50 transition-colors"
            >
              Call {business.phoneDisplay}
            </a>
            <Link
              href="/${hubSlug}"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-primary transition-colors"
            >
              All ${brandName} Repairs
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
`
}

// ============================================================
// TEMPLATE: Apple Watch model+service page
// ============================================================

function awServicePageContent(model, service) {
  const { name: modelName, slug: modelSlug } = model
  const { slug: serviceName, name: serviceDisplayName, price, h1Suffix } = service
  const pageSlug = `${modelSlug}-${serviceName}`
  const functionName = pageSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('') + 'Page'

  // Other services for this model (the remaining 4)
  const otherServices = appleWatchServices
    .filter(s => s.slug !== serviceName)
    .map(s => `      { name: '${s.name}', href: '/${modelSlug}-${s.slug}', price: '${s.price}' },`)
    .join('\n')

  return `import type { Metadata } from 'next'
import Link from 'next/link'
import { business, primaryLocation } from '@/data'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'

export const metadata: Metadata = {
  title: '${modelName} ${h1Suffix} | ${price}',
  description:
    '${modelName} ${service.metaDesc} in Melbourne. ${price}. Lifetime warranty on parts and labour. Walk in Braybrook or Spotswood — no appointment needed.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/${pageSlug}',
  },
  openGraph: {
    title: '${modelName} ${h1Suffix} | ${price}',
    description: '${modelName} ${service.metaDesc} in Melbourne. ${price}. Lifetime warranty. Walk in today.',
    url: 'https://www.itechrepairs.com.au/${pageSlug}',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const relatedServices = [
${otherServices}
]

export default function ${functionName}() {
  return (
    <>
      <SchemaScript schema={[localBusinessSchema]} />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-gray-surface border-b border-gray-border py-3">
        <div className="container-page">
          <ol className="flex items-center gap-2 text-sm text-charcoal-light">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/apple-watch-repair-melbourne" className="hover:text-primary transition-colors">Apple Watch Repairs</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/${modelSlug}-repair" className="hover:text-primary transition-colors">${modelName}</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal font-medium">${serviceDisplayName}</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              ${modelName} ${h1Suffix}
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              ${price} · Lifetime Warranty · Same Day · Walk In Welcome
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Expert ${modelName} ${service.metaDesc} in Melbourne. Walk in to our Braybrook or Spotswood store — no appointment needed. Every repair comes with a lifetime warranty on parts and labour.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={\`tel:\${business.phone}\`}
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
              >
                Call {business.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-charcoal transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white border-b border-gray-border py-6">
        <div className="container-page">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { label: '${price}', sub: '${serviceDisplayName}' },
              { label: 'Same Day', sub: 'Service' },
              { label: 'Lifetime', sub: 'Warranty' },
              { label: 'Walk-ins', sub: 'Welcome' },
            ].map((stat) => (
              <div key={stat.label} className="py-3">
                <div className="text-xl font-bold text-primary">{stat.label}</div>
                <div className="text-sm text-charcoal-light mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-charcoal mb-4">
              About This Repair
            </h2>
            <p className="text-charcoal-light leading-relaxed mb-4">
              Our technicians specialise in ${modelName} repairs in Melbourne. We use quality replacement parts and follow precise repair procedures to ensure your ${modelName} works exactly as intended after service.
            </p>
            <p className="text-charcoal-light leading-relaxed">
              Every ${modelName} ${service.metaDesc} at iTech Repairs comes with a lifetime warranty on both parts and labour. If the same fault returns, we fix it at no extra cost.
            </p>
          </div>
        </div>
      </section>

      {/* Other Services for This Model */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-charcoal mb-6 text-center">
            Other ${modelName} Repairs
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {relatedServices.map((s) => (
              <Link key={s.name} href={s.href} className="card p-4 text-center hover:border-primary group">
                <div className="font-semibold text-sm text-charcoal group-hover:text-primary transition-colors">{s.name}</div>
                <div className="text-xs text-primary font-bold mt-1">{s.price}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16">
        <div className="container-page text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Book Your ${modelName} ${serviceDisplayName} Today
          </h2>
          <p className="text-lg text-red-100 mb-8 max-w-xl mx-auto">
            Walk in to our Braybrook or Spotswood store — no appointment needed. Lifetime warranty on all repairs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={\`tel:\${business.phone}\`}
              className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl text-lg hover:bg-red-50 transition-colors"
            >
              Call {business.phoneDisplay}
            </a>
            <Link
              href="/${modelSlug}-repair"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-primary transition-colors"
            >
              All ${modelName} Repairs
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
`
}

// ============================================================
// RUN GENERATION
// ============================================================

let created = 0
let skipped = 0

console.log('\n=== Generating secondary brand model pages ===')
for (const brand of secondaryBrands) {
  for (const modelName of brand.models) {
    const modelSlug = toSlug(modelName)
    const dir = join(appDir, `${modelSlug}-repair`)
    const content = modelPageContent(modelName, modelSlug, brand)
    const ok = write(dir, content)
    if (ok) created++; else skipped++
  }
}

console.log('\n=== Generating Apple Watch model+service pages ===')
for (const model of appleWatchModels) {
  for (const service of appleWatchServices) {
    const pageSlug = `${model.slug}-${service.slug}`
    const dir = join(appDir, pageSlug)
    const content = awServicePageContent(model, service)
    const ok = write(dir, content)
    if (ok) created++; else skipped++
  }
}

console.log(`\nDone. Created: ${created}  Skipped (already exists): ${skipped}`)
