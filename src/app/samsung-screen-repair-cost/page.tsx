import type { Metadata } from 'next'
import Link from 'next/link'
import { business, primaryLocation } from '@/data'
import { generateFAQSchema } from '@/lib/seo'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'

export const metadata: Metadata = {
  title: 'Samsung Screen Repair Cost Melbourne | Price Guide',
  description:
    'Samsung screen repair cost in Melbourne — full price guide for Galaxy S, A and Z series. From $89. Cheapest price guaranteed with lifetime warranty.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/samsung-screen-repair-cost',
  },
  openGraph: {
    title: 'Samsung Screen Repair Cost Melbourne | Price Guide',
    description: 'Samsung screen repair cost in Melbourne — full price guide for Galaxy S, A and Z series. From $89. Cheapest price guaranteed with lifetime warranty.',
    url: 'https://www.itechrepairs.com.au/samsung-screen-repair-cost',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const faqs = [
  {
    question: 'How much does Samsung screen repair cost in Melbourne?',
    answer: 'Samsung screen repair in Melbourne starts from $89 for Galaxy A series models. Samsung Galaxy S series screens start from $99, and the foldable Z Fold and Z Flip series cost more due to the specialised flexible OLED display. See our price guide above.',
    category: 'pricing',
  },
  {
    question: 'Why are Samsung Z Fold screen repairs more expensive?',
    answer: 'The Samsung Galaxy Z Fold uses a specialised flexible OLED display that is more complex and expensive to replace than a standard flat display. The inner foldable screen requires precise handling and higher-cost parts.',
    category: 'pricing',
  },
  {
    question: 'How long does Samsung screen repair take?',
    answer: 'Most Samsung screen repairs are completed in 30–60 minutes while you wait. Walk in to our Braybrook or Spotswood store and we will assess your phone on the spot.',
    category: 'pricing',
  },
  {
    question: 'Is there a warranty on Samsung screen repair?',
    answer: 'Yes — every Samsung screen repair at iTech Repairs comes with a lifetime warranty on parts and labour. If the same screen fault returns, we fix it for free.',
    category: 'pricing',
  },
]

const faqSchema = generateFAQSchema(faqs)

const modelPricing = [
  { model: 'Samsung Galaxy S25 Ultra', from: 'From $149', note: 'Dynamic AMOLED 2X' },
  { model: 'Samsung Galaxy S25 / S25+', from: 'From $119', note: 'Dynamic AMOLED 2X' },
  { model: 'Samsung Galaxy S24 series', from: 'From $109', note: 'Dynamic AMOLED 2X' },
  { model: 'Samsung Galaxy S23 series', from: 'From $99', note: 'Dynamic AMOLED 2X' },
  { model: 'Samsung Galaxy A55 / A54', from: 'From $99', note: 'Super AMOLED' },
  { model: 'Samsung Galaxy A35 / A34', from: 'From $89', note: 'Super AMOLED' },
  { model: 'Samsung Galaxy A series (other)', from: 'From $89', note: 'AMOLED / LCD variants' },
  { model: 'Samsung Galaxy Z Flip 6 / 5', from: 'POA', note: 'Flexible AMOLED — call for quote' },
  { model: 'Samsung Galaxy Z Fold 6 / 5', from: 'POA', note: 'Flexible AMOLED — call for quote' },
]

export default function SamsungScreenRepairCostPage() {
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
              <Link href="/samsung-screen-repair" className="hover:text-primary transition-colors">Samsung Screen Repair</Link>
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
              Samsung Screen Repair Cost Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              From $89 · Galaxy S, A &amp; Z Series · Cheapest Price Guaranteed · Lifetime Warranty
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              How much does Samsung screen repair cost in Melbourne? Here is our full price guide for Galaxy S, A, and Z series models. We repair all Samsung screens from A-series budget models to the latest S25 Ultra and Z Fold.
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
              { label: 'From $89', sub: 'Screen Repair' },
              { label: '30–60 Min', sub: 'Turnaround' },
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
              Samsung Screen Repair Cost by Model
            </h2>
            <p className="text-charcoal-light text-lg mb-8 leading-relaxed">
              Prices shown are starting prices. The final cost depends on your exact Samsung model and the damage extent. We always provide a firm written quote before any work begins.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-charcoal text-white">
                    <th className="text-left p-4 rounded-tl-lg">Samsung Model</th>
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
              * Starting prices. Walk in for a free diagnostic and firm written quote for your specific Samsung model.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Samsung Screen Repair Cost FAQ
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
            <h2 className="text-2xl font-bold text-charcoal mb-4">Related Samsung Services</h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/samsung-screen-repair" className="px-4 py-2 bg-white hover:bg-primary hover:text-white border border-gray-border rounded-full text-sm font-medium text-charcoal transition-colors">
              Samsung Screen Repair
            </Link>
            <Link href="/samsung-repair-melbourne" className="px-4 py-2 bg-white hover:bg-primary hover:text-white border border-gray-border rounded-full text-sm font-medium text-charcoal transition-colors">
              Samsung Repair Melbourne
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary text-white py-16">
        <div className="container-page text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cracked Samsung Screen? Get a Free Quote Today.
          </h2>
          <p className="text-lg text-red-100 mb-8 max-w-xl mx-auto">
            Walk in to our Braybrook or Spotswood store for a free diagnostic and firm written quote. Samsung screen repair from $89 with lifetime warranty.
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
