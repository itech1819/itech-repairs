import type { Metadata } from 'next'
import Link from 'next/link'
import { MODELS_BY_CATEGORY } from '@/data'
import { IPHONE_PROBLEMS } from '@/data/problems'
import { PHASE1_SUBURBS } from '@/data'

export const metadata: Metadata = {
  title: 'iPhone Repair Index — All Models, Repairs & Suburbs | iTech Repairs',
  description: 'Complete iPhone repair index — all models from iPhone 17 to older, all repair types, iPhone problems, and suburb-specific pages. iTech Repairs Melbourne.',
  alternates: { canonical: 'https://www.itechrepairs.com.au/iphone-repair-index' },
  robots: 'index, follow',
}

const iphoneRepairTypes = [
  { slug: 'screen-repair', label: 'Screen Repair' },
  { slug: 'screen-replacement', label: 'Screen Replacement' },
  { slug: 'battery-replacement', label: 'Battery Replacement' },
  { slug: 'charging-port-repair', label: 'Charging Port Repair' },
  { slug: 'back-glass-replacement', label: 'Back Glass Replacement' },
  { slug: 'camera-repair', label: 'Camera Repair' },
  { slug: 'water-damage-repair', label: 'Water Damage Repair' },
  { slug: 'speaker-repair', label: 'Speaker Repair' },
]

const suburbRepairLinks = [
  { slug: 'screen-repair', label: 'Screen Repair' },
  { slug: 'battery-replacement', label: 'Battery Replacement' },
  { slug: 'charging-port-repair', label: 'Charging Port Repair' },
]

export default function Page() {
  const models = (MODELS_BY_CATEGORY.iphone ?? []).sort((a, b) => a.priority - b.priority)

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-charcoal text-white py-10 md:py-14">
        <div className="container-page">
          <nav className="text-sm text-gray-400 mb-3 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/repair-index" className="hover:text-white">Repair Index</Link>
            <span>/</span>
            <span className="text-white">iPhone Repair Index</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl font-extrabold mb-3">iPhone Repair Index — Melbourne</h1>
          <p className="text-gray-300 text-sm max-w-2xl">
            All iPhone repair pages — by model, repair type, problem, and Melbourne suburb.
          </p>
        </div>
      </section>

      <div className="container-page py-10 space-y-10">
        {/* By Model */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-4">iPhone Models — Repair Hubs</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {models.map(model => (
              <Link key={model.slug} href={`/${model.repairHubSlug}`} className="text-sm text-gray-700 hover:text-primary hover:underline border border-gray-200 px-3 py-2 rounded-lg bg-gray-50">
                {model.displayName}
              </Link>
            ))}
          </div>
        </section>

        {/* By Repair Type — Top Models */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-4">iPhone Screen Repairs by Model</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {models.slice(0, 12).map(model => (
              <Link key={model.slug} href={`/${model.slug}-screen-repair-melbourne`} className="text-sm text-gray-700 hover:text-primary hover:underline border border-gray-200 px-3 py-2 rounded-lg bg-gray-50">
                {model.displayName} Screen
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-4">iPhone Battery Replacements by Model</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {models.slice(0, 12).map(model => (
              <Link key={model.slug} href={`/${model.slug}-battery-replacement-melbourne`} className="text-sm text-gray-700 hover:text-primary hover:underline border border-gray-200 px-3 py-2 rounded-lg bg-gray-50">
                {model.displayName} Battery
              </Link>
            ))}
          </div>
        </section>

        {/* iPhone Problems */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-4">iPhone Problems</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {IPHONE_PROBLEMS.map(p => (
              <Link key={p.slug} href={`/${p.slug}`} className="text-sm text-gray-700 hover:text-primary hover:underline border border-gray-200 px-3 py-2 rounded-lg bg-gray-50">
                {p.name}
              </Link>
            ))}
          </div>
        </section>

        {/* By Suburb */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-4">iPhone Repair by Suburb</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {PHASE1_SUBURBS.map(s => (
              <Link key={s.slug} href={`/iphone-repair-${s.slug}`} className="text-sm text-gray-700 hover:text-primary hover:underline border border-gray-200 px-3 py-2 rounded-lg bg-gray-50">
                iPhone Repair {s.displayName}
              </Link>
            ))}
          </div>
        </section>

        {/* Suburb-specific repair types */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-4">iPhone Screen Repair by Suburb</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {PHASE1_SUBURBS.map(s => (
              <Link key={s.slug} href={`/${s.slug}-iphone-screen-repair`} className="text-sm text-gray-700 hover:text-primary hover:underline border border-gray-200 px-3 py-2 rounded-lg bg-gray-50">
                {s.displayName} Screen Repair
              </Link>
            ))}
          </div>
        </section>

        <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
          <Link href="/iphone-repair-melbourne" className="text-sm text-primary hover:underline">iPhone Repair Melbourne →</Link>
          <Link href="/repair-directory" className="text-sm text-primary hover:underline">Full Repair Directory →</Link>
          <Link href="/contact" className="text-sm text-primary hover:underline">Contact Us →</Link>
        </div>
      </div>
    </div>
  )
}
