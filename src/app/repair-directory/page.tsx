import type { Metadata } from 'next'
import Link from 'next/link'
import { brands } from '@/data'

export const metadata: Metadata = {
  title: 'Repair Directory | All Devices & Models | iTech Repairs Melbourne',
  description:
    'Browse all repair services at iTech Repairs Melbourne. Find iPhone, Samsung, iPad, MacBook and Google Pixel repair pages for every model.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/repair-directory',
  },
  robots: { index: true, follow: true },
}

const directoryLinks = [
  { label: 'iPhone Repair Directory', href: '/iphone-repair-directory', desc: 'All iPhone models' },
  { label: 'Samsung Repair Directory', href: '/samsung-repair-directory', desc: 'All Samsung models' },
  { label: 'iPad Repair Directory', href: '/ipad-repair-directory', desc: 'All iPad models' },
  { label: 'MacBook Repair Directory', href: '/macbook-repair-directory', desc: 'All MacBook models' },
  { label: 'Google Pixel Repair Directory', href: '/google-pixel-repair-directory', desc: 'All Pixel models' },
]

export default function RepairDirectoryPage() {
  return (
    <div className="container-page section-padding">
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center gap-2 text-sm text-charcoal-light">
          <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-charcoal font-medium">Repair Directory</li>
        </ol>
      </nav>

      <h1 className="text-3xl font-bold text-charcoal mb-4">Repair Directory</h1>
      <p className="text-charcoal-light mb-10 max-w-2xl">
        Browse all device repair pages at iTech Repairs Melbourne. Select a device category below to see all models and repair services available.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {directoryLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="bg-white border border-gray-border rounded-2xl p-6 hover:border-primary group transition-colors"
          >
            <h2 className="font-bold text-charcoal text-lg group-hover:text-primary transition-colors mb-1">
              {link.label}
            </h2>
            <p className="text-sm text-charcoal-light">{link.desc}</p>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {brands.map((brand) => (
          <Link
            key={brand.slug}
            href={`/${brand.categoryPageSlug}`}
            className="text-sm text-primary hover:underline font-medium"
          >
            {brand.categoryDisplayName} →
          </Link>
        ))}
      </div>
    </div>
  )
}
