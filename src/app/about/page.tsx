import type { Metadata } from 'next'
import Link from 'next/link'
import { business } from '@/data'
import { generateLocalBusinessSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'About iTech Repairs Melbourne | Expert Phone & Laptop Repair',
  description:
    'Learn about iTech Repairs — Melbourne\'s trusted phone and laptop repair specialists in Braybrook. On the spot 15 minute repairs, lifetime warranty, walk-ins welcome.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/about',
  },
}

const localBusinessSchema = generateLocalBusinessSchema()

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-gray-surface border-b border-gray-border py-3">
        <div className="container-page">
          <ol className="flex items-center gap-2 text-sm text-charcoal-light">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal font-medium">About Us</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              About iTech Repairs
            </h1>
            <p className="text-xl text-gray-300">
              Melbourne&apos;s trusted repair specialists for iPhones, Samsung phones, iPads, and MacBooks.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding">
        <div className="container-page">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-charcoal mb-4">Who We Are</h2>
                  <p className="text-charcoal-light leading-relaxed">
                    iTech Repairs is a locally owned and operated device repair shop located in Braybrook,
                    Melbourne. We specialise in fast, professional repairs for iPhones, Samsung Galaxy
                    phones, Google Pixel devices, iPads, and MacBooks.
                  </p>
                  <p className="text-charcoal-light leading-relaxed mt-4">
                    Our mission is simple: get your device back to perfect condition as quickly as possible,
                    using quality parts, at a fair price — with a guarantee that stands behind our work
                    for the lifetime of the repair.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-charcoal mb-4">Our Promise</h2>
                  <ul className="space-y-3">
                    {[
                      'Lifetime warranty on all parts and labour',
                      'Free diagnostic assessment — no obligation',
                      'No fix, no fee policy',
                      'Honest pricing with no hidden charges',
                      'Walk-ins always welcome',
                      'On the spot 15 minute repairs',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-charcoal-light">
                        <span className="flex-shrink-0 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">✓</span>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-surface rounded-2xl p-8 border border-gray-border">
                  <h3 className="text-xl font-bold text-charcoal mb-6">Store Information</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-semibold text-charcoal">Address</p>
                      <p className="text-charcoal-light mt-1">
                        {business.address}<br />
                        {business.suburb} VIC {business.postcode}
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal">Phone</p>
                      <a href={`tel:${business.phone}`} className="text-primary hover:underline mt-1 inline-block">
                        {business.phoneDisplay}
                      </a>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal">Email</p>
                      <a href={`mailto:${business.email}`} className="text-primary hover:underline mt-1 inline-block">
                        {business.email}
                      </a>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal">Opening Hours</p>
                      <ul className="text-charcoal-light mt-1 space-y-1">
                        {business.openingHours.map((oh) => (
                          <li key={oh.days} className="flex justify-between gap-4">
                            <span>{oh.days}</span>
                            <span className={oh.isOpen ? 'font-medium text-charcoal' : ''}>{oh.hours}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-primary rounded-2xl p-8 text-white text-center">
                  <h3 className="text-xl font-bold mb-3">Walk In Today</h3>
                  <p className="text-red-100 mb-6 text-sm leading-relaxed">
                    No appointment needed. Our technicians are available during all business hours
                    for walk-in diagnostics and on the spot 15 minute repairs.
                  </p>
                  <a
                    href={`tel:${business.phone}`}
                    className="inline-flex items-center gap-2 bg-white text-primary font-bold px-6 py-3 rounded-lg hover:bg-red-50 transition-colors"
                  >
                    Call {business.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Repair */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Devices We Repair</h2>
            <p className="text-charcoal-light text-lg max-w-2xl mx-auto">
              We repair all major phone, tablet, and laptop brands. Select a device to see all supported models and services.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { label: 'iPhone Repairs', href: '/iphone-repair-melbourne', desc: '33 models · 30 repairs' },
              { label: 'Samsung Repairs', href: '/samsung-repair-melbourne', desc: '25 models · 29 repairs' },
              { label: 'iPad Repairs', href: '/ipad-repair-melbourne', desc: '13 models · 25 repairs' },
              { label: 'MacBook Repairs', href: '/macbook-repair-melbourne', desc: '24 models · 22 repairs' },
              { label: 'Google Pixel Repairs', href: '/google-pixel-repair-melbourne', desc: '15 models · 29 repairs' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="card p-6 text-center hover:border-primary group"
              >
                <h3 className="font-bold text-charcoal group-hover:text-primary transition-colors mb-2">
                  {item.label}
                </h3>
                <p className="text-xs text-charcoal-light">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
