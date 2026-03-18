import type { Metadata } from 'next'
import Link from 'next/link'
import { MODELS_BY_CATEGORY, PHASE1_SUBURBS } from '@/data'

export const metadata: Metadata = {
  title: 'MacBook Repair Index — All Models & Repairs | iTech Repairs Melbourne',
  description: 'Complete MacBook repair index — all MacBook Air and Pro models, screen repairs, battery replacements, keyboard repairs. iTech Repairs Melbourne.',
  alternates: { canonical: 'https://www.itechrepairs.com.au/macbook-repair-index' },
  robots: 'index, follow',
}

export default function Page() {
  const models = (MODELS_BY_CATEGORY.macbook ?? []).sort((a, b) => a.priority - b.priority)

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-charcoal text-white py-10 md:py-14">
        <div className="container-page">
          <nav className="text-sm text-gray-400 mb-3 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/repair-index" className="hover:text-white">Repair Index</Link>
            <span>/</span>
            <span className="text-white">MacBook Repair Index</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl font-extrabold mb-3">MacBook Repair Index — Melbourne</h1>
          <p className="text-gray-300 text-sm max-w-2xl">
            All MacBook repair pages — Air and Pro models, screen, battery, keyboard and charging repairs.
          </p>
        </div>
      </section>

      <div className="container-page py-10 space-y-10">
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-4">MacBook Models — Repair Hubs</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {models.map(model => (
              <Link key={model.slug} href={`/${model.repairHubSlug}`} className="text-sm text-gray-700 hover:text-primary hover:underline border border-gray-200 px-3 py-2 rounded-lg bg-gray-50">
                {model.displayName}
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-4">MacBook Screen Repairs</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {models.map(model => (
              <Link key={model.slug} href={`/${model.slug}-screen-repair-melbourne`} className="text-sm text-gray-700 hover:text-primary hover:underline border border-gray-200 px-3 py-2 rounded-lg bg-gray-50">
                {model.displayName} Screen
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-4">MacBook Battery Replacements</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {models.map(model => (
              <Link key={model.slug} href={`/${model.slug}-battery-replacement-melbourne`} className="text-sm text-gray-700 hover:text-primary hover:underline border border-gray-200 px-3 py-2 rounded-lg bg-gray-50">
                {model.displayName} Battery
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-4">MacBook Repair by Suburb</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {PHASE1_SUBURBS.map(s => (
              <Link key={s.slug} href={`/macbook-repair-${s.slug}`} className="text-sm text-gray-700 hover:text-primary hover:underline border border-gray-200 px-3 py-2 rounded-lg bg-gray-50">
                MacBook Repair {s.displayName}
              </Link>
            ))}
          </div>
        </section>

        <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
          <Link href="/macbook-repair-melbourne" className="text-sm text-primary hover:underline">MacBook Repair Melbourne →</Link>
          <Link href="/repair-index" className="text-sm text-primary hover:underline">Repair Index →</Link>
          <Link href="/contact" className="text-sm text-primary hover:underline">Contact Us →</Link>
        </div>
      </div>
    </div>
  )
}
