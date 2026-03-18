import type { Metadata } from 'next'
import Link from 'next/link'
import { MODELS_BY_CATEGORY } from '@/data'
import { buildModelHubSlug } from '@/lib/slug'

export const metadata: Metadata = {
  title: 'iPhone Repair Directory | All Models | iTech Repairs Melbourne',
  description:
    'Browse all iPhone repair pages at iTech Repairs Melbourne. Find screen repair, battery replacement and more for every iPhone model.',
  alternates: { canonical: 'https://www.itechrepairs.com.au/iphone-repair-directory' },
  robots: { index: true, follow: true },
}

const models = [...(MODELS_BY_CATEGORY.iphone ?? [])].sort((a, b) => a.priority - b.priority)

export default function IPhoneRepairDirectoryPage() {
  return (
    <div className="container-page section-padding">
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center gap-2 text-sm text-charcoal-light">
          <li><Link href="/" className="hover:text-primary">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/repair-directory" className="hover:text-primary">Repair Directory</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-charcoal font-medium">iPhone</li>
        </ol>
      </nav>
      <h1 className="text-3xl font-bold text-charcoal mb-3">iPhone Repair Directory</h1>
      <p className="text-charcoal-light mb-2 max-w-xl">
        All iPhone models repaired at iTech Repairs Melbourne. Walk in to our Braybrook or Spotswood store — most repairs completed in 15 minutes.
      </p>
      <p className="text-sm text-charcoal-light mb-10">
        <Link href="/iphone-repair-melbourne" className="text-primary hover:underline">← View iPhone Repairs Overview</Link>
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {models.map((model) => (
          <Link
            key={model.slug}
            href={`/${buildModelHubSlug(model.slug)}`}
            className="bg-white border border-gray-border rounded-xl p-4 hover:border-primary group transition-colors text-center"
          >
            <span className="text-sm font-semibold text-charcoal group-hover:text-primary transition-colors block">
              {model.displayName}
            </span>
            <span className="text-xs text-charcoal-light mt-1 block">View repairs →</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
