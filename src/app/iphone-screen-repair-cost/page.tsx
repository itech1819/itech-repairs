import type { Metadata } from 'next'
import Link from 'next/link'
import { business, primaryLocation } from '@/data'
import { generateFAQSchema } from '@/lib/seo'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'

export const metadata: Metadata = {
  title: 'iPhone Screen Repair Cost Melbourne | From $79',
  description:
    'How much does iPhone screen repair cost in Melbourne? See our price guide — from $79 for older models. All iPhones from 6 to 17 Pro Max. Cheapest price guaranteed.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/iphone-screen-repair-cost',
  },
  openGraph: {
    title: 'iPhone Screen Repair Cost Melbourne | From $79',
    description: 'How much does iPhone screen repair cost in Melbourne? See our price guide — from $79 for older models. All iPhones from 6 to 17 Pro Max. Cheapest price guaranteed.',
    url: 'https://www.itechrepairs.com.au/iphone-screen-repair-cost',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const faqs = [
  {
    question: 'How much does iPhone screen repair cost in Melbourne?',
    answer: 'iPhone screen repair in Melbourne starts from $79 for older models (iPhone 8 and earlier). More recent OLED models cost more — iPhone 11/XR from $79, iPhone 12/13 series from $89–$99, iPhone 14 from $119, iPhone 15/16 Pro Max from $139–$149.',
    category: 'pricing',
  },
  {
    question: 'Why does iPhone screen repair cost vary by model?',
    answer: 'Newer iPhone models use OLED displays which are more expensive to manufacture and replace than older LCD displays. Larger Pro Max models also cost more due to their bigger screen size. The S-series face ID components integrated into the display on newer models also affect cost.',
    category: 'pricing',
  },
  {
    question: 'How long does iPhone screen repair take?',
    answer: 'iPhone screen repair takes 15–30 minutes for most models. Walk in and we will have your phone repaired while you wait.',
    category: 'pricing',
  },
  {
    question: 'Is there a warranty on iPhone screen repair?',
    answer: 'Yes — every iPhone screen repair at iTech Repairs comes with a lifetime warranty. If the screen develops a fault (not caused by new physical damage), we replace it for free.',
    category: 'pricing',
  },
]

const faqSchema = generateFAQSchema(faqs)

const modelPricing = [
  { model: 'iPhone 16 Pro Max', from: 'From $149', note: 'OLED Super Retina XDR' },
  { model: 'iPhone 15 Pro / Pro Max', from: 'From $139', note: 'OLED Super Retina XDR' },
  { model: 'iPhone 14 series', from: 'From $119', note: 'OLED and Super Retina XDR' },
  { model: 'iPhone 13 series', from: 'From $99', note: 'Super Retina XDR OLED' },
  { model: 'iPhone 12 series', from: 'From $89', note: 'Super Retina XDR OLED' },
  { model: 'iPhone 11 / XR', from: 'From $79', note: 'Liquid Retina LCD' },
  { model: 'Older models (X, XS, 8, 7, etc.)', from: 'From $69', note: 'LCD and OLED variants' },
]

export default function IphoneScreenRepairCostPage() {
  return (
    <>
      <SchemaScript schema={[localBusinessSchema, faqSchema]} />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-gray-surface border-b border-gray-border py-3">
        <div className="container-page">
          <ol className="flex items-center gap-2 text-sm text-charcoal-light">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/iphone-screen-repair" className="hover:text-primary transition-colors">iPhone Screen Repair</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal font-medium">Cost</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              iPhone Screen Repair Cost Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              From $79 · All Models · Cheapest Price Guaranteed · Lifetime Warranty
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              How much does iPhone screen repair cost in Melbourne? See our full model-by-model price guide below. Prices start from $79 for older models. We repair all iPhones from the 6S through to the latest 16 Pro Max.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${business.phone}`}
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
              { label: 'From $79', sub: 'Screen Repair' },
              { label: '15–30 Min', sub: 'Turnaround' },
              { label: 'Cheapest', sub: 'Price Guarantee' },
              { label: 'Lifetime', sub: 'Warranty' },
            ].map((stat) => (
              <div key={stat.label} className="py-3">
                <div className="text-xl font-bold text-primary">{stat.label}</div>
                <div className="text-sm text-charcoal-light mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Model Pricing Table */}
      <section className="section-padding">
        <div className="container-page">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              iPhone Screen Repair Cost by Model
            </h2>
            <p className="text-charcoal-light text-lg mb-8 leading-relaxed">
              Prices shown are starting prices. The final cost depends on your exact iPhone model, the damage extent, and whether additional components need repair. We provide a firm written quote before any work begins.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-charcoal text-white">
                    <th className="text-left p-4 rounded-tl-lg">iPhone Model</th>
                    <th className="text-left p-4">Screen Repair Cost</th>
                    <th className="text-left p-4 rounded-tr-lg">Display Type</th>
                  </tr>
                </thead>
                <tbody>
                  {modelPricing.map((row, i) => (
                    <tr key={row.model} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-surface'}>
                      <td className="p-4 font-medium text-charcoal border-b border-gray-border">{row.model}</td>
                      <td className="p-4 font-bold text-primary border-b border-gray-border">{row.from}</td>
                      <td className="p-4 text-charcoal-light border-b border-gray-border">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-charcoal-light mt-4">
              * Starting prices. Walk in for a free diagnostic and firm written quote for your specific model.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              iPhone Screen Repair Cost FAQ
            </h2>
          </div>
          <div className="max-w-3xl mx-auto divide-y divide-gray-border">
            {faqs.map((faq) => (
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

      {/* Related Links */}
      <section className="section-padding">
        <div className="container-page">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-charcoal mb-4">Related iPhone Services</h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/iphone-screen-repair" className="px-4 py-2 bg-white hover:bg-primary hover:text-white border border-gray-border rounded-full text-sm font-medium text-charcoal transition-colors">
              iPhone Screen Repair
            </Link>
            <Link href="/iphone-repair-cost" className="px-4 py-2 bg-white hover:bg-primary hover:text-white border border-gray-border rounded-full text-sm font-medium text-charcoal transition-colors">
              Full iPhone Repair Cost Guide
            </Link>
            <Link href="/iphone-repair-melbourne" className="px-4 py-2 bg-white hover:bg-primary hover:text-white border border-gray-border rounded-full text-sm font-medium text-charcoal transition-colors">
              iPhone Repair Melbourne
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary text-white py-16">
        <div className="container-page text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cracked iPhone Screen? Get a Free Quote Today.
          </h2>
          <p className="text-lg text-red-100 mb-8 max-w-xl mx-auto">
            Walk in to our Braybrook or Spotswood store for a free diagnostic and firm written quote. iPhone screen repair from $79 with lifetime warranty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${business.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl text-lg hover:bg-red-50 transition-colors"
            >
              Call {business.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-primary transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
