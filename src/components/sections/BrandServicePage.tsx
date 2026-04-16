import Link from 'next/link'
import type { BrandServicePageData } from '@/data/brandServicePages'
import { business } from '@/data'
import { samsungModels, pixelModels, ipadModels, macbookModels } from '@/data/models'
import { buildRepairPageSlug } from '@/lib/slug'
import type { Model } from '@/types'

/** Return the correct model list for this page's brand, derived from models.ts. */
function getBrandModels(hubHref: string): Model[] {
  if (hubHref.startsWith('/samsung')) return samsungModels
  if (hubHref.startsWith('/google-pixel')) return pixelModels
  if (hubHref.startsWith('/ipad')) return ipadModels
  if (hubHref.startsWith('/macbook')) return macbookModels
  return []
}

interface Props {
  page: BrandServicePageData
}

export default function BrandServicePage({ page }: Props) {
  const brandModels = getBrandModels(page.hubHref)

  return (
    <>
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-gray-surface border-b border-gray-border py-3">
        <div className="container-page">
          <ol className="flex items-center gap-2 text-sm text-charcoal-light flex-wrap">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href={page.hubHref} className="hover:text-primary transition-colors">{page.hubLabel}</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal font-medium">{page.h1}</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">{page.h1}</h1>
            <p className="text-xl text-gray-300 mb-6">{page.intro}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {['On The Spot 15 Min Repairs', 'Lifetime Warranty', 'Walk-ins Welcome', 'Open 7 Days 9am–9pm'].map((badge) => (
                <span key={badge} className="bg-primary text-white text-sm font-semibold px-4 py-1.5 rounded-full">{badge}</span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${business.phone}`} className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors">
                Call {business.phoneDisplay}
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-charcoal transition-colors">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-primary text-white py-4">
        <div className="container-page">
          <div className="flex flex-wrap justify-center sm:justify-between gap-4 text-sm font-semibold">
            <span>✓ Lifetime Warranty</span>
            <span>✓ On The Spot 15 Min Repairs</span>
            <span>✓ No Fix, No Fee</span>
            <span>✓ Cheapest Price Guaranteed</span>
            <span>✓ Walk-ins Welcome</span>
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-charcoal mb-4">Common Symptoms</h2>
          <p className="text-charcoal-light mb-8">Recognise any of these? Walk in and we&apos;ll diagnose and fix it on the spot.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {page.symptoms.map((s) => (
              <div key={s.title} className="card p-5">
                <h3 className="font-bold text-charcoal mb-2">{s.title}</h3>
                <p className="text-sm text-charcoal-light leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-charcoal mb-8 text-center">Why Choose iTech Repairs?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {page.benefits.map((b) => (
              <div key={b.title} className="p-6 rounded-xl bg-white border border-gray-border">
                <h3 className="font-bold text-charcoal mb-2">{b.title}</h3>
                <p className="text-sm text-charcoal-light leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16">
        <div className="container-page text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Walk In Today — No Appointment Needed</h2>
          <p className="text-lg text-red-100 mb-8 max-w-xl mx-auto">Visit our Braybrook or Spotswood store any time. Open 7 days 9am–9pm. Most repairs completed on the spot in 15 minutes with a lifetime warranty.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${business.phone}`} className="inline-flex items-center justify-center bg-white text-primary font-bold px-8 py-4 rounded-xl text-lg hover:bg-red-50 transition-colors">
              Call {business.phoneDisplay}
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-primary transition-colors">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="container-page max-w-3xl">
          <h2 className="text-3xl font-bold text-charcoal mb-8">Frequently Asked Questions</h2>
          <div className="divide-y divide-gray-border">
            {page.faqs.map((faq) => (
              <details key={faq.question} className="py-5 group">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="font-semibold text-charcoal pr-4">{faq.question}</span>
                  <span className="text-primary flex-shrink-0 group-open:rotate-180 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-charcoal-light leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Model links — derived from single source of truth in models.ts */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-charcoal mb-4">Book by Model</h2>
          <p className="text-charcoal-light mb-6">Select your model for model-specific pricing and availability:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {brandModels.map((model) => (
              <Link
                key={model.slug}
                href={`/${buildRepairPageSlug(model.slug, page.repairSlug)}`}
                className="card p-4 text-center text-sm font-medium text-charcoal hover:text-primary hover:border-primary transition-colors"
              >
                {model.displayName}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-8 bg-white border-t border-gray-border">
        <div className="container-page">
          <p className="text-xs font-semibold text-charcoal-light uppercase tracking-wider mb-3">Related Services</p>
          <div className="flex flex-wrap gap-2">
            {page.relatedServices.map((s) => (
              <Link key={s.href} href={s.href} className="text-sm text-primary hover:underline border border-gray-border bg-gray-surface px-3 py-1.5 rounded-full">
                {s.label}
              </Link>
            ))}
            <Link href={page.hubHref} className="text-sm text-primary hover:underline border border-gray-border bg-gray-surface px-3 py-1.5 rounded-full">
              {page.hubLabel}
            </Link>
            <Link href="/sell-my-device" className="text-sm text-primary hover:underline border border-gray-border bg-gray-surface px-3 py-1.5 rounded-full">
              Sell My Device
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
