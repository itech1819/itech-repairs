import type { Metadata } from 'next'
import Link from 'next/link'
import { business, primaryLocation } from '@/data'
import { generateFAQSchema } from '@/lib/seo'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'

export const metadata: Metadata = {
  title: { absolute: 'iPhone Repair Cost Melbourne – Full Price Guide | Cheapest Guaranteed | iTech Repairs' },
  description:
    'iPhone repair cost in Melbourne — screen from $79, battery from $69, charging port from $79. Cheapest price guaranteed, 15-minute repairs, lifetime warranty. Walk in today — no booking needed.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/iphone-repair-cost',
  },
  openGraph: {
    title: 'iPhone Repair Cost Melbourne – Full Price Guide | Cheapest Guaranteed | iTech Repairs',
    description: 'iPhone repair cost in Melbourne — screen from $79, battery from $69, charging port from $79. Cheapest price guaranteed, 15-minute repairs, lifetime warranty. Walk in today.',
    url: 'https://www.itechrepairs.com.au/iphone-repair-cost',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const faqs = [
  {
    question: 'How much does iPhone screen repair cost?',
    answer: 'iPhone screen repair in Melbourne starts from $79 for older models and goes up to $149+ for the latest Pro Max models. The exact cost depends on your iPhone model — see our price table above for a guide.',
    category: 'pricing',
  },
  {
    question: 'Is there a price match guarantee?',
    answer: 'Yes — we offer a cheapest price guarantee on all iPhone repairs. If you have a lower written quote from a competitor for the same repair, we will match or beat it.',
    category: 'pricing',
  },
  {
    question: 'Do you use genuine Apple parts?',
    answer: 'We use premium quality replacement parts that meet or exceed OEM specifications, backed by our lifetime warranty. We provide a written quote detailing the parts to be used before any repair begins.',
    category: 'pricing',
  },
  {
    question: 'How long does iPhone repair take?',
    answer: 'Most iPhone repairs take 15–60 minutes. Screen replacements are typically 15–30 minutes. Battery replacements take around 15 minutes. Charging port repairs take 30–60 minutes. We will give you a time estimate when you walk in.',
    category: 'pricing',
  },
]

const faqSchema = generateFAQSchema(faqs)

const priceData = [
  { repair: 'Screen Repair', from: '$79', turnaround: '15–30 minutes' },
  { repair: 'Battery Replacement', from: '$69', turnaround: '15 minutes' },
  { repair: 'Charging Port Repair', from: '$89', turnaround: '30–60 minutes' },
  { repair: 'Back Glass Repair', from: '$99', turnaround: '1–2 hours' },
  { repair: 'Camera Repair', from: '$89', turnaround: '30–60 minutes' },
  { repair: 'Water Damage Assessment', from: 'Free', turnaround: 'Same day' },
  { repair: 'Speaker Repair', from: '$79', turnaround: '30 minutes' },
  { repair: 'Microphone Repair', from: '$79', turnaround: '30 minutes' },
]

const screenPriceByModel = [
  { model: 'iPhone 17 Pro Max / 17 Plus', screen: 'From $179', battery: 'From $89' },
  { model: 'iPhone 17 / 17 Pro', screen: 'From $159', battery: 'From $89' },
  { model: 'iPhone 16 Pro Max / 16 Plus', screen: 'From $169', battery: 'From $89' },
  { model: 'iPhone 16 / 16 Pro', screen: 'From $149', battery: 'From $89' },
  { model: 'iPhone 15 Pro Max / 15 Plus', screen: 'From $159', battery: 'From $89' },
  { model: 'iPhone 15 / 15 Pro', screen: 'From $139', battery: 'From $89' },
  { model: 'iPhone 14 Pro Max / 14 Plus', screen: 'From $149', battery: 'From $89' },
  { model: 'iPhone 14 / 14 Pro', screen: 'From $129', battery: 'From $89' },
  { model: 'iPhone 13 series', screen: 'From $109', battery: 'From $79' },
  { model: 'iPhone 12 series', screen: 'From $99', battery: 'From $79' },
  { model: 'iPhone 11 / XR', screen: 'From $79', battery: 'From $69' },
  { model: 'iPhone X / XS / XS Max', screen: 'From $89', battery: 'From $69' },
  { model: 'iPhone 8 / 8 Plus / SE', screen: 'From $79', battery: 'From $69' },
]

export default function IphoneRepairCostPage() {
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
              <Link href="/iphone-repair-melbourne" className="hover:text-primary transition-colors">iPhone Repair Melbourne</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal font-medium">Repair Cost</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              iPhone Repair Cost Melbourne — Price Guide
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Full 2026 Price Guide · Cheapest Price Guaranteed · Lifetime Warranty
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Wondering how much iPhone repair costs in Melbourne? Here is our full price guide for every common iPhone repair — screen replacement, battery replacement, charging port, back glass, camera and more. Walk in for a free diagnostic and quote.
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
              { label: 'From $79', sub: 'Screen Repair' },
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

      {/* Price Table */}
      <section className="section-padding">
        <div className="container-page">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              iPhone Repair Price Guide Melbourne
            </h2>
            <p className="text-charcoal-light text-lg mb-8 leading-relaxed">
              The prices below are starting prices. Your exact repair cost may vary depending on your iPhone model, the extent of the damage, and the parts required. We always provide a firm written quote before any work begins — no surprises.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-charcoal text-white">
                    <th className="text-left p-4 rounded-tl-lg">Repair Type</th>
                    <th className="text-left p-4">Starting From</th>
                    <th className="text-left p-4 rounded-tr-lg">Turnaround</th>
                  </tr>
                </thead>
                <tbody>
                  {priceData.map((row, i) => (
                    <tr key={row.repair} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-surface'}>
                      <td className="p-4 font-medium text-charcoal border-b border-gray-border">{row.repair}</td>
                      <td className="p-4 font-bold text-primary border-b border-gray-border">{row.from}</td>
                      <td className="p-4 text-charcoal-light border-b border-gray-border">{row.turnaround}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-charcoal-light mt-4">
              * All prices are starting prices. Final cost depends on your iPhone model and damage extent. Free diagnostic before any repair begins.
            </p>
          </div>
        </div>
      </section>

      {/* Model-by-Model Price Table */}
      <section className="section-padding">
        <div className="container-page">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              iPhone Repair Cost by Model — 2026
            </h2>
            <p className="text-charcoal-light text-lg mb-8 leading-relaxed">
              Prices vary by model because newer iPhones use more expensive OLED displays and have more complex internal assemblies. Here is a model-by-model guide to help you estimate your repair cost.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-charcoal text-white">
                    <th className="text-left p-4 rounded-tl-lg">iPhone Model</th>
                    <th className="text-left p-4">Screen Repair</th>
                    <th className="text-left p-4 rounded-tr-lg">Battery Replacement</th>
                  </tr>
                </thead>
                <tbody>
                  {screenPriceByModel.map((row, i) => (
                    <tr key={row.model} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-surface'}>
                      <td className="p-4 font-medium text-charcoal border-b border-gray-border">{row.model}</td>
                      <td className="p-4 font-bold text-primary border-b border-gray-border">{row.screen}</td>
                      <td className="p-4 text-charcoal-light border-b border-gray-border">{row.battery}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-charcoal-light mt-4">
              * Starting prices. Walk in for a free diagnostic and firm written quote. All prices include lifetime warranty.
            </p>
          </div>
        </div>
      </section>

      {/* What Affects Cost */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-charcoal mb-6">
              What Affects iPhone Repair Cost?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: 'iPhone Model', desc: 'Newer models with OLED displays (iPhone X and later) cost more to repair than older LCD models. Pro Max models with larger displays also cost more.' },
                { title: 'Parts Quality', desc: 'We use premium quality replacement parts backed by a lifetime warranty. We can discuss parts options and pricing when you visit.' },
                { title: 'Damage Extent', desc: 'A simple cracked screen costs less than a screen with additional internal damage. Our free diagnostic identifies all issues upfront.' },
              ].map((item) => (
                <div key={item.title} className="card p-5">
                  <h3 className="font-bold text-charcoal mb-2">{item.title}</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Cheapest */}
      <section className="section-padding">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Why iTech Repairs Offers the Cheapest iPhone Repair in Melbourne
            </h2>
            <p className="text-charcoal-light leading-relaxed mb-4">
              We operate a lean, efficient repair business focused on volume and customer satisfaction — not overcharging. We keep our pricing transparent, our parts inventory stocked, and our technicians skilled and fast.
            </p>
            <p className="text-charcoal-light leading-relaxed mb-4">
              Our cheapest price guarantee means if you find a lower written quote for the same iPhone repair from a legitimate repair business in Melbourne, we will match it. No fuss, no argument.
            </p>
            <p className="text-charcoal-light leading-relaxed">
              And because we include a lifetime warranty on every repair, you are not just getting the cheapest price — you are getting the best value.
            </p>
          </div>
        </div>
      </section>

      {/* Warranty */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Lifetime Warranty on All iPhone Repairs</h2>
            <p className="text-charcoal-light leading-relaxed text-lg">
              Every iPhone repair at iTech Repairs — whether it is a screen, battery, charging port, or any other component — comes with a lifetime warranty on parts and labour. If the same fault returns, we fix it for free. No time limits, no conditions.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              iPhone Repair Cost FAQ
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
            <h2 className="text-2xl font-bold text-charcoal mb-4">iPhone Repair Services</h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/iphone-screen-repair" className="px-4 py-2 bg-white hover:bg-primary hover:text-white border border-gray-border rounded-full text-sm font-medium text-charcoal transition-colors">
              iPhone Screen Repair
            </Link>
            <Link href="/iphone-battery-replacement" className="px-4 py-2 bg-white hover:bg-primary hover:text-white border border-gray-border rounded-full text-sm font-medium text-charcoal transition-colors">
              iPhone Battery Replacement
            </Link>
            <Link href="/iphone-charging-port-repair" className="px-4 py-2 bg-white hover:bg-primary hover:text-white border border-gray-border rounded-full text-sm font-medium text-charcoal transition-colors">
              iPhone Charging Port Repair
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
            Get a Free iPhone Repair Quote Today
          </h2>
          <p className="text-lg text-red-100 mb-8 max-w-xl mx-auto">
            Walk in to our Braybrook or Spotswood store — no appointment needed. Free diagnostic with a firm written quote before any work begins.
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
