import type { Metadata } from 'next'
import Link from 'next/link'
import { MODELS_BY_CATEGORY, PHASE1_SUBURBS } from '@/data'

export const metadata: Metadata = {
  title: 'Google Pixel Repair Index — All Models & Repairs | iTech Repairs Melbourne',
  description: 'Complete Google Pixel repair index — all Pixel models, screen repairs, battery replacements. iTech Repairs Melbourne — same-day service, lifetime warranty.',
  alternates: { canonical: 'https://www.itechrepairs.com.au/google-pixel-repair-index' },
  robots: 'index, follow',
}

export default function Page() {
  const models = (MODELS_BY_CATEGORY.pixel ?? []).sort((a, b) => a.priority - b.priority)

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-charcoal text-white py-10 md:py-14">
        <div className="container-page">
          <nav className="text-sm text-gray-400 mb-3 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/repair-index" className="hover:text-white">Repair Index</Link>
            <span>/</span>
            <span className="text-white">Google Pixel Repair Index</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl font-extrabold mb-3">Google Pixel Repair Index — Melbourne</h1>
          <p className="text-gray-300 text-sm max-w-2xl">
            All Google Pixel repair pages — Pixel 9, 8, 7, 6 and older, with screen, battery and more.
          </p>
        </div>
      </section>

      <div className="container-page py-10 space-y-10">
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-4">Google Pixel Models — Repair Hubs</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {models.map(model => (
              <Link key={model.slug} href={`/${model.repairHubSlug}`} className="text-sm text-gray-700 hover:text-primary hover:underline border border-gray-200 px-3 py-2 rounded-lg bg-gray-50">
                {model.displayName}
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-4">Google Pixel Screen Repairs</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {models.map(model => (
              <Link key={model.slug} href={`/${model.slug}-screen-repair-melbourne`} className="text-sm text-gray-700 hover:text-primary hover:underline border border-gray-200 px-3 py-2 rounded-lg bg-gray-50">
                {model.displayName} Screen
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-4">Google Pixel Repair by Suburb</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {PHASE1_SUBURBS.map(s => (
              <Link key={s.slug} href={`/pixel-repair-${s.slug}`} className="text-sm text-gray-700 hover:text-primary hover:underline border border-gray-200 px-3 py-2 rounded-lg bg-gray-50">
                Pixel Repair {s.displayName}
              </Link>
            ))}
          </div>
        </section>

        <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
          <Link href="/google-pixel-repair-melbourne" className="text-sm text-primary hover:underline">Google Pixel Repair Melbourne →</Link>
          <Link href="/repair-index" className="text-sm text-primary hover:underline">Repair Index →</Link>
          <Link href="/contact" className="text-sm text-primary hover:underline">Contact Us →</Link>
        </div>
      </div>
    </div>
  )
}
