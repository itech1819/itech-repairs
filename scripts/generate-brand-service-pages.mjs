/**
 * Phase 2: Complete secondary brand linking architecture
 *
 * 1. Overwrites all 95 secondary brand MODEL pages so service cards link to
 *    model-specific service pages  (/{modelSlug}-{serviceSlug})
 * 2. Creates 475 model-specific SERVICE pages (95 models × 5 services)
 *
 * Service slugs (as requested):
 *   screen-replacement | battery-replacement | charging-port-repair
 *   water-damage-repair | free-device-inspection
 *
 * Run: node scripts/generate-brand-service-pages.mjs
 */

import { writeFileSync, mkdirSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const appDir = join(__dirname, '../src/app')

function write(dirPath, content, force = false) {
  if (!existsSync(dirPath)) mkdirSync(dirPath, { recursive: true })
  const filePath = join(dirPath, 'page.tsx')
  if (existsSync(filePath) && !force) {
    return false
  }
  writeFileSync(filePath, content, 'utf8')
  return true
}

// ============================================================
// BRAND + MODEL DATA
// ============================================================

const SERVICES = [
  { slug: 'screen-replacement',    name: 'Screen Replacement',    h1: 'Screen Replacement Melbourne',   metaVerb: 'screen replacement' },
  { slug: 'battery-replacement',   name: 'Battery Replacement',   h1: 'Battery Replacement Melbourne',  metaVerb: 'battery replacement' },
  { slug: 'charging-port-repair',  name: 'Charging Port Repair',  h1: 'Charging Port Repair Melbourne', metaVerb: 'charging port repair' },
  { slug: 'water-damage-repair',   name: 'Water Damage Repair',   h1: 'Water Damage Repair Melbourne',  metaVerb: 'water damage repair' },
  { slug: 'free-device-inspection',name: 'Free Diagnostic',       h1: 'Free Diagnostic Melbourne',      metaVerb: 'free diagnostic' },
]

const brands = [
  {
    brandName: 'OnePlus',
    hubSlug: 'oneplus-phone-repair-melbourne',
    pricing: { 'screen-replacement': 'From $89', 'battery-replacement': 'From $79', 'charging-port-repair': 'From $69', 'water-damage-repair': 'From $89', 'free-device-inspection': 'Free' },
    models: [
      { name: 'OnePlus 13',       slug: 'oneplus-13' },
      { name: 'OnePlus 12',       slug: 'oneplus-12' },
      { name: 'OnePlus 11',       slug: 'oneplus-11' },
      { name: 'OnePlus 10 Pro',   slug: 'oneplus-10-pro' },
      { name: 'OnePlus Nord 4',   slug: 'oneplus-nord-4' },
      { name: 'OnePlus Nord CE 4',slug: 'oneplus-nord-ce-4' },
      { name: 'OnePlus Nord 3',   slug: 'oneplus-nord-3' },
      { name: 'OnePlus Nord CE 3',slug: 'oneplus-nord-ce-3' },
    ],
  },
  {
    brandName: 'Nothing',
    hubSlug: 'nothing-phone-repair-melbourne',
    pricing: { 'screen-replacement': 'From $89', 'battery-replacement': 'From $79', 'charging-port-repair': 'From $69', 'water-damage-repair': 'From $89', 'free-device-inspection': 'Free' },
    models: [
      { name: 'Nothing Phone (3a)',     slug: 'nothing-phone-3a' },
      { name: 'Nothing Phone (3a) Pro', slug: 'nothing-phone-3a-pro' },
      { name: 'Nothing Phone (2a)',     slug: 'nothing-phone-2a' },
      { name: 'Nothing Phone (2a) Plus',slug: 'nothing-phone-2a-plus' },
      { name: 'Nothing Phone (2)',      slug: 'nothing-phone-2' },
      { name: 'Nothing Phone (1)',      slug: 'nothing-phone-1' },
    ],
  },
  {
    brandName: 'Sony',
    hubSlug: 'sony-phone-repair-melbourne',
    pricing: { 'screen-replacement': 'From $99', 'battery-replacement': 'From $79', 'charging-port-repair': 'From $69', 'water-damage-repair': 'From $99', 'free-device-inspection': 'Free' },
    models: [
      { name: 'Sony Xperia 1 VI',  slug: 'sony-xperia-1-vi' },
      { name: 'Sony Xperia 5 VI',  slug: 'sony-xperia-5-vi' },
      { name: 'Sony Xperia 10 VI', slug: 'sony-xperia-10-vi' },
      { name: 'Sony Xperia 1 V',   slug: 'sony-xperia-1-v' },
      { name: 'Sony Xperia 5 V',   slug: 'sony-xperia-5-v' },
      { name: 'Sony Xperia 10 V',  slug: 'sony-xperia-10-v' },
      { name: 'Sony Xperia 1 IV',  slug: 'sony-xperia-1-iv' },
      { name: 'Sony Xperia Pro-I', slug: 'sony-xperia-pro-i' },
    ],
  },
  {
    brandName: 'Oppo',
    hubSlug: 'oppo-phone-repair-melbourne',
    pricing: { 'screen-replacement': 'From $89', 'battery-replacement': 'From $79', 'charging-port-repair': 'From $69', 'water-damage-repair': 'From $89', 'free-device-inspection': 'Free' },
    models: [
      { name: 'Oppo Find X8',     slug: 'oppo-find-x8' },
      { name: 'Oppo Find X7',     slug: 'oppo-find-x7' },
      { name: 'Oppo Find X6 Pro', slug: 'oppo-find-x6-pro' },
      { name: 'Oppo Reno 12',     slug: 'oppo-reno-12' },
      { name: 'Oppo Reno 11',     slug: 'oppo-reno-11' },
      { name: 'Oppo Reno 10',     slug: 'oppo-reno-10' },
      { name: 'Oppo Reno 8',      slug: 'oppo-reno-8' },
      { name: 'Oppo A78',         slug: 'oppo-a78' },
      { name: 'Oppo A58',         slug: 'oppo-a58' },
      { name: 'Oppo A38',         slug: 'oppo-a38' },
      { name: 'Oppo F25 Pro',     slug: 'oppo-f25-pro' },
      { name: 'Oppo F23',         slug: 'oppo-f23' },
    ],
  },
  {
    brandName: 'Xiaomi',
    hubSlug: 'xiaomi-phone-repair-melbourne',
    pricing: { 'screen-replacement': 'From $79', 'battery-replacement': 'From $69', 'charging-port-repair': 'From $69', 'water-damage-repair': 'From $79', 'free-device-inspection': 'Free' },
    models: [
      { name: 'Xiaomi 14 Ultra',   slug: 'xiaomi-14-ultra' },
      { name: 'Xiaomi 14',         slug: 'xiaomi-14' },
      { name: 'Xiaomi 13 Pro',     slug: 'xiaomi-13-pro' },
      { name: 'Xiaomi 13',         slug: 'xiaomi-13' },
      { name: 'Redmi Note 13 Pro', slug: 'redmi-note-13-pro' },
      { name: 'Redmi Note 13',     slug: 'redmi-note-13' },
      { name: 'Redmi 13C',         slug: 'redmi-13c' },
      { name: 'POCO X6 Pro',       slug: 'poco-x6-pro' },
      { name: 'POCO X6',           slug: 'poco-x6' },
      { name: 'POCO M6 Pro',       slug: 'poco-m6-pro' },
    ],
  },
  {
    brandName: 'Huawei',
    hubSlug: 'huawei-phone-repair-melbourne',
    pricing: { 'screen-replacement': 'From $89', 'battery-replacement': 'From $79', 'charging-port-repair': 'From $69', 'water-damage-repair': 'From $89', 'free-device-inspection': 'Free' },
    models: [
      { name: 'Huawei P60 Pro',    slug: 'huawei-p60-pro' },
      { name: 'Huawei P50 Pro',    slug: 'huawei-p50-pro' },
      { name: 'Huawei P40 Pro',    slug: 'huawei-p40-pro' },
      { name: 'Huawei Mate 50 Pro',slug: 'huawei-mate-50-pro' },
      { name: 'Huawei Mate 40 Pro',slug: 'huawei-mate-40-pro' },
      { name: 'Huawei Nova 12',    slug: 'huawei-nova-12' },
      { name: 'Huawei Nova 11',    slug: 'huawei-nova-11' },
      { name: 'Huawei Y90',        slug: 'huawei-y90' },
      { name: 'Huawei Y70',        slug: 'huawei-y70' },
      { name: 'Huawei Y60',        slug: 'huawei-y60' },
    ],
  },
  {
    brandName: 'Motorola',
    hubSlug: 'motorola-phone-repair-melbourne',
    pricing: { 'screen-replacement': 'From $79', 'battery-replacement': 'From $69', 'charging-port-repair': 'From $59', 'water-damage-repair': 'From $79', 'free-device-inspection': 'Free' },
    models: [
      { name: 'Motorola Edge 50 Pro',   slug: 'motorola-edge-50-pro' },
      { name: 'Motorola Edge 50',       slug: 'motorola-edge-50' },
      { name: 'Motorola Edge 40 Pro',   slug: 'motorola-edge-40-pro' },
      { name: 'Moto G85',              slug: 'moto-g85' },
      { name: 'Moto G84',              slug: 'moto-g84' },
      { name: 'Moto G54',              slug: 'moto-g54' },
      { name: 'Moto G34',              slug: 'moto-g34' },
      { name: 'Motorola Razr 50',      slug: 'motorola-razr-50' },
      { name: 'Motorola Razr 40 Ultra',slug: 'motorola-razr-40-ultra' },
      { name: 'Moto G Power',          slug: 'moto-g-power' },
    ],
  },
  {
    brandName: 'Nokia',
    hubSlug: 'nokia-phone-repair-melbourne',
    pricing: { 'screen-replacement': 'From $69', 'battery-replacement': 'From $59', 'charging-port-repair': 'From $55', 'water-damage-repair': 'From $69', 'free-device-inspection': 'Free' },
    models: [
      { name: 'Nokia G42',  slug: 'nokia-g42' },
      { name: 'Nokia G22',  slug: 'nokia-g22' },
      { name: 'Nokia G21',  slug: 'nokia-g21' },
      { name: 'Nokia C32',  slug: 'nokia-c32' },
      { name: 'Nokia C22',  slug: 'nokia-c22' },
      { name: 'Nokia XR21', slug: 'nokia-xr21' },
      { name: 'Nokia XR20', slug: 'nokia-xr20' },
      { name: 'Nokia G60',  slug: 'nokia-g60' },
    ],
  },
  {
    brandName: 'LG',
    hubSlug: 'lg-phone-repair-melbourne',
    pricing: { 'screen-replacement': 'From $79', 'battery-replacement': 'From $69', 'charging-port-repair': 'From $65', 'water-damage-repair': 'From $79', 'free-device-inspection': 'Free' },
    models: [
      { name: 'LG G8 ThinQ',   slug: 'lg-g8-thinq' },
      { name: 'LG V60 ThinQ',  slug: 'lg-v60-thinq' },
      { name: 'LG Velvet',     slug: 'lg-velvet' },
      { name: 'LG Wing',       slug: 'lg-wing' },
      { name: 'LG G7 ThinQ',   slug: 'lg-g7-thinq' },
      { name: 'LG V50 ThinQ',  slug: 'lg-v50-thinq' },
      { name: 'LG K52',        slug: 'lg-k52' },
      { name: 'LG K42',        slug: 'lg-k42' },
    ],
  },
  {
    brandName: 'Asus',
    hubSlug: 'asus-phone-repair-melbourne',
    pricing: { 'screen-replacement': 'From $99', 'battery-replacement': 'From $79', 'charging-port-repair': 'From $69', 'water-damage-repair': 'From $99', 'free-device-inspection': 'Free' },
    models: [
      { name: 'Asus ROG Phone 8 Pro',  slug: 'asus-rog-phone-8-pro' },
      { name: 'Asus ROG Phone 8',      slug: 'asus-rog-phone-8' },
      { name: 'Asus ROG Phone 7 Pro',  slug: 'asus-rog-phone-7-pro' },
      { name: 'Asus ZenFone 11 Ultra', slug: 'asus-zenfone-11-ultra' },
      { name: 'Asus ZenFone 10',       slug: 'asus-zenfone-10' },
      { name: 'Asus ZenFone 9',        slug: 'asus-zenfone-9' },
      { name: 'Asus ROG Phone 6 Pro',  slug: 'asus-rog-phone-6-pro' },
    ],
  },
  {
    brandName: 'Realme',
    hubSlug: 'realme-phone-repair-melbourne',
    pricing: { 'screen-replacement': 'From $79', 'battery-replacement': 'From $69', 'charging-port-repair': 'From $59', 'water-damage-repair': 'From $79', 'free-device-inspection': 'Free' },
    models: [
      { name: 'Realme 13 Pro Plus',  slug: 'realme-13-pro-plus' },
      { name: 'Realme 13 Pro',       slug: 'realme-13-pro' },
      { name: 'Realme 12 Plus',      slug: 'realme-12-plus' },
      { name: 'Realme 12',           slug: 'realme-12' },
      { name: 'Realme Narzo 70 Pro', slug: 'realme-narzo-70-pro' },
      { name: 'Realme Narzo 70',     slug: 'realme-narzo-70' },
      { name: 'Realme C67',          slug: 'realme-c67' },
      { name: 'Realme C55',          slug: 'realme-c55' },
    ],
  },
]

// ============================================================
// HELPERS
// ============================================================

function functionName(slug) {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('') + 'Page'
}

function escape(s) {
  return s.replace(/'/g, "\\'")
}

// ============================================================
// TEMPLATE: Model page (force-overwrite existing ones)
// ============================================================

function modelPageContent(model, brand) {
  const { name: modelName, slug: modelSlug } = model
  const { brandName, hubSlug, pricing } = brand

  const servicesCode = SERVICES
    .map(s => {
      const price = pricing[s.slug] || 'From $79'
      return `  { name: '${escape(s.name)}', price: '${price}', href: '/${modelSlug}-${s.slug}', serviceSlug: '${s.slug}' },`
    })
    .join('\n')

  return `import type { Metadata } from 'next'
import Link from 'next/link'
import { business, primaryLocation } from '@/data'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'

export const metadata: Metadata = {
  title: '${escape(modelName)} Repair Melbourne | Screen, Battery & More',
  description:
    '${escape(modelName)} repair in Melbourne. Screen replacement, battery replacement, charging port repair, water damage repair and free diagnostic. Lifetime warranty. Walk in Braybrook or Spotswood.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/${modelSlug}-repair',
  },
  openGraph: {
    title: '${escape(modelName)} Repair Melbourne | Screen, Battery & More',
    description: '${escape(modelName)} repair in Melbourne. Lifetime warranty. Walk in today.',
    url: 'https://www.itechrepairs.com.au/${modelSlug}-repair',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const services = [
${servicesCode}
]

export default function ${functionName(modelSlug + '-repair')}() {
  return (
    <>
      <SchemaScript schema={[localBusinessSchema]} />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-gray-surface border-b border-gray-border py-3">
        <div className="container-page">
          <ol className="flex items-center gap-2 text-sm text-charcoal-light">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/${hubSlug}" className="hover:text-primary transition-colors">${escape(brandName)} Repairs</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal font-medium">${escape(modelName)}</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              ${escape(modelName)} Repair Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Screen Replacement · Battery Replacement · Charging Port · Lifetime Warranty
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Expert ${escape(modelName)} repairs in Melbourne. Walk in to our Braybrook or Spotswood store any time — no appointment needed. Every repair comes with a lifetime warranty on parts and labour.
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
              ${escape(modelName)} Repair Services
            </h2>
            <p className="text-charcoal-light text-lg">
              Select a repair to see pricing and availability for ${escape(modelName)} in Melbourne.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {services.map((service) => (
              <Link key={service.serviceSlug} href={service.href} className="card p-6 hover:border-primary group">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-charcoal group-hover:text-primary transition-colors">{service.name}</h3>
                  <span className="text-primary font-bold text-sm whitespace-nowrap ml-2">{service.price}</span>
                </div>
                <p className="text-sm text-charcoal-light">Lifetime warranty · Walk-in welcome</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16">
        <div className="container-page text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Your ${escape(modelName)} Repaired Today?
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
              All ${escape(brandName)} Repairs
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
// TEMPLATE: Model+service page
// ============================================================

function modelServicePageContent(model, service, brand) {
  const { name: modelName, slug: modelSlug } = model
  const { slug: serviceSlug, name: serviceName, h1: serviceH1, metaVerb } = service
  const { brandName, hubSlug, pricing } = brand
  const pageSlug = `${modelSlug}-${serviceSlug}`
  const price = pricing[serviceSlug] || 'From $79'

  // Other services (the 4 remaining ones)
  const others = SERVICES
    .filter(s => s.slug !== serviceSlug)
    .map(s => `      { name: '${escape(s.name)}', href: '/${modelSlug}-${s.slug}', price: '${pricing[s.slug] || 'Free'}' },`)
    .join('\n')

  return `import type { Metadata } from 'next'
import Link from 'next/link'
import { business, primaryLocation } from '@/data'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'

export const metadata: Metadata = {
  title: '${escape(modelName)} ${escape(serviceH1)} | ${price}',
  description:
    '${escape(modelName)} ${escape(metaVerb)} in Melbourne. ${price}. Lifetime warranty on parts and labour. Walk in Braybrook or Spotswood — no appointment needed.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/${pageSlug}',
  },
  openGraph: {
    title: '${escape(modelName)} ${escape(serviceH1)} | ${price}',
    description: '${escape(modelName)} ${escape(metaVerb)} in Melbourne. ${price}. Lifetime warranty. Walk in today.',
    url: 'https://www.itechrepairs.com.au/${pageSlug}',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const relatedServices = [
${others}
]

export default function ${functionName(pageSlug)}() {
  return (
    <>
      <SchemaScript schema={[localBusinessSchema]} />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-gray-surface border-b border-gray-border py-3">
        <div className="container-page">
          <ol className="flex items-center gap-2 text-sm text-charcoal-light">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/${hubSlug}" className="hover:text-primary transition-colors">${escape(brandName)} Repairs</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/${modelSlug}-repair" className="hover:text-primary transition-colors">${escape(modelName)}</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal font-medium">${escape(serviceName)}</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              ${escape(modelName)} ${escape(serviceH1)}
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              ${price} · Lifetime Warranty · Same Day · Walk In Welcome
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Expert ${escape(modelName)} ${escape(metaVerb)} in Melbourne. Walk in to our Braybrook or Spotswood store — no appointment needed. Every repair includes a lifetime warranty on parts and labour.
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
              { label: '${price}', sub: '${escape(serviceName)}' },
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

      {/* About This Repair */}
      <section className="section-padding">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-charcoal mb-4">
              ${escape(modelName)} ${escape(serviceName)} in Melbourne
            </h2>
            <p className="text-charcoal-light leading-relaxed mb-4">
              Our technicians specialise in ${escape(modelName)} repairs in Melbourne. We use quality replacement parts and follow precise repair procedures so your device works exactly as intended after service.
            </p>
            <p className="text-charcoal-light leading-relaxed">
              Every repair comes with a lifetime warranty. If the same fault returns, we fix it free — no questions asked.
            </p>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-charcoal mb-6 text-center">
            Other ${escape(modelName)} Repairs
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
            Book Your ${escape(modelName)} ${escape(serviceName)} Today
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
              All ${escape(modelName)} Repairs
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
// RUN
// ============================================================

let modelUpdated = 0
let serviceCreated = 0

console.log('\n=== Phase 1: Overwrite model pages with model-specific service links ===')
for (const brand of brands) {
  for (const model of brand.models) {
    const dir = join(appDir, `${model.slug}-repair`)
    const ok = write(dir, modelPageContent(model, brand), true) // force overwrite
    if (ok) modelUpdated++
  }
}
console.log(`  Model pages updated: ${modelUpdated}`)

console.log('\n=== Phase 2: Create model-specific service pages ===')
for (const brand of brands) {
  for (const model of brand.models) {
    for (const service of SERVICES) {
      const pageSlug = `${model.slug}-${service.slug}`
      const dir = join(appDir, pageSlug)
      const ok = write(dir, modelServicePageContent(model, service, brand))
      if (ok) serviceCreated++
    }
  }
}
console.log(`  Service pages created: ${serviceCreated}`)

console.log(`\nTotal: ${modelUpdated} model pages updated, ${serviceCreated} service pages created`)
