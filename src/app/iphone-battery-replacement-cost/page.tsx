import type { Metadata } from 'next'
import Link from 'next/link'
import { business, primaryLocation } from '@/data'
import { generateFAQSchema } from '@/lib/seo'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'

export const metadata: Metadata = {
  title: 'iPhone Battery Replacement Cost Melbourne | From $69',
  description:
    'iPhone battery replacement cost in Melbourne from $69. All models. 15 minute service, lifetime warranty. See our full price guide and book today.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/iphone-battery-replacement-cost',
  },
  openGraph: {
    title: 'iPhone Battery Replacement Cost Melbourne | From $69',
    description: 'iPhone battery replacement cost in Melbourne from $69. All models. 15 minute service, lifetime warranty. See our full price guide and book today.',
    url: 'https://www.itechrepairs.com.au/iphone-battery-replacement-cost',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const faqs = [
  {
    question: 'How much does iPhone battery replacement cost in Melbourne?',
    answer: 'iPhone battery replacement in Melbourne starts from $69 for older models. Newer models like iPhone 14 and 15 series cost slightly more due to the complexity of accessing the battery. See our model-by-model pricing table above.',
    category: 'pricing',
  },
  {
    question: 'How do I know if my iPhone battery needs replacing?',
    answer: 'Signs your iPhone battery needs replacing include: battery draining faster than usual, battery health below 80% (Settings > Battery > Battery Health), iPhone shutting down unexpectedly, or the phone only working when plugged in. A free battery health check at our store will confirm.',
    category: 'pricing',
  },
  {
    question: 'How long does iPhone battery replacement take?',
    answer: 'iPhone battery replacement typically takes 15 minutes for most models. Walk in any time and we will replace your battery on the spot while you wait.',
    category: 'pricing',
  },
  {
    question: 'Is there a warranty on the replacement battery?',
    answer: 'Yes — every iPhone battery replacement at iTech Repairs comes with a lifetime warranty. If the new battery develops a fault, we replace it for free.',
    category: 'pricing',
  },
  {
    question: 'Is it worth replacing an iPhone battery?',
    answer: 'If your iPhone is otherwise in good condition and the battery health has dropped below 80%, a battery replacement is almost always worth it. At $69–$89, a new battery can extend your phone\'s life by another 2–3 years — far cheaper than buying a new phone.',
    category: 'pricing',
  },
]

const faqSchema = generateFAQSchema(faqs)

const modelPricing = [
  { model: 'iPhone 15 series', from: 'From $89', turnaround: '15 minutes' },
  { model: 'iPhone 14 series', from: 'From $89', turnaround: '15 minutes' },
  { model: 'iPhone 13 series', from: 'From $79', turnaround: '15 minutes' },
  { model: 'iPhone 12 series', from: 'From $79', turnaround: '15 minutes' },
  { model: 'iPhone 11 / XR', from: 'From $69', turnaround: '15 minutes' },
  { model: 'iPhone X / XS / XS Max', from: 'From $69', turnaround: '15 minutes' },
  { model: 'iPhone 8 / 8 Plus', from: 'From $69', turnaround: '15 minutes' },
  { model: 'iPhone 7 / 7 Plus', from: 'From $69', turnaround: '15 minutes' },
]

const batterySignals = [
  { title: 'Battery Health Below 80%', desc: 'Check Settings > Battery > Battery Health. Below 80% means your battery capacity is significantly reduced.' },
  { title: 'Phone Draining Fast', desc: 'If your iPhone is running out of charge well before the end of the day despite low usage, the battery needs replacing.' },
  { title: 'Unexpected Shutdowns', desc: 'Phone shutting off at 20%, 30% or even higher charge levels is a sign of a degraded battery cell.' },
  { title: 'Battery Bulging', desc: 'A swollen battery is a safety concern — if your iPhone back is bulging or the screen is lifting, bring it in immediately.' },
  { title: 'Slow Performance', desc: 'iOS throttles performance on iPhones with degraded batteries. A new battery restores full processing speed.' },
  { title: 'Only Works Plugged In', desc: 'If your iPhone shuts off without the charger, the battery has almost no usable capacity left.' },
]

export default function IphoneBatteryReplacementCostPage() {
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
              <Link href="/iphone-battery-replacement" className="hover:text-primary transition-colors">iPhone Battery Replacement</Link>
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
              iPhone Battery Replacement Cost Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              From $69 · All Models · 15 Minute Service · Lifetime Warranty
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              iPhone battery replacement in Melbourne starts from $69. Our 15-minute battery replacement service is one of the most popular repairs we do — fast, affordable, and backed by a lifetime warranty. See our model-by-model price guide below.
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
              { label: 'From $69', sub: 'Battery Replacement' },
              { label: '15 Minutes', sub: 'Turnaround' },
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
              iPhone Battery Replacement Cost by Model
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-charcoal text-white">
                    <th className="text-left p-4 rounded-tl-lg">iPhone Model</th>
                    <th className="text-left p-4">Battery Replacement Cost</th>
                    <th className="text-left p-4 rounded-tr-lg">Turnaround</th>
                  </tr>
                </thead>
                <tbody>
                  {modelPricing.map((row, i) => (
                    <tr key={row.model} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-surface'}>
                      <td className="p-4 font-medium text-charcoal border-b border-gray-border">{row.model}</td>
                      <td className="p-4 font-bold text-primary border-b border-gray-border">{row.from}</td>
                      <td className="p-4 text-charcoal-light border-b border-gray-border">{row.turnaround}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-charcoal-light mt-4">
              * Starting prices. Walk in for a free battery health check and firm written quote.
            </p>
          </div>
        </div>
      </section>

      {/* Signs Battery Needs Replacing */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-charcoal mb-6">
              Signs Your iPhone Battery Needs Replacing
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {batterySignals.map((item) => (
                <div key={item.title} className="card p-5">
                  <h3 className="font-bold text-charcoal mb-2">{item.title}</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              iPhone Battery Replacement Cost FAQ
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
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-charcoal mb-4">Related iPhone Services</h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/iphone-battery-replacement" className="px-4 py-2 bg-white hover:bg-primary hover:text-white border border-gray-border rounded-full text-sm font-medium text-charcoal transition-colors">
              iPhone Battery Replacement
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
            iPhone Battery Dying? Replace It Today for $69.
          </h2>
          <p className="text-lg text-red-100 mb-8 max-w-xl mx-auto">
            Walk in to our Braybrook or Spotswood store — 15-minute iPhone battery replacement with a lifetime warranty from $69.
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
