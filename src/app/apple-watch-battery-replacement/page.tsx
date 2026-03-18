import type { Metadata } from 'next'
import Link from 'next/link'
import { business, primaryLocation } from '@/data'
import { generateFAQSchema } from '@/lib/seo'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'

export const metadata: Metadata = {
  title: 'Apple Watch Battery Replacement Melbourne | From $99',
  description:
    'Apple Watch battery replacement in Melbourne from $99. Battery draining fast? We replace Apple Watch batteries for all models. Lifetime warranty. Walk in today.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/apple-watch-battery-replacement',
  },
  openGraph: {
    title: 'Apple Watch Battery Replacement Melbourne | From $99',
    description: 'Apple Watch battery replacement in Melbourne from $99. Battery draining fast? We replace Apple Watch batteries for all models. Lifetime warranty. Walk in today.',
    url: 'https://www.itechrepairs.com.au/apple-watch-battery-replacement',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Apple Watch Battery Replacement Melbourne',
  description:
    'Apple Watch battery replacement in Melbourne from $99. All Series 5–9, Ultra, Ultra 2, SE and SE 2 models. Same-day service with lifetime warranty.',
  provider: {
    '@type': 'RepairShop',
    name: business.name,
    telephone: business.phone,
  },
  areaServed: { '@type': 'City', name: 'Melbourne' },
  serviceType: 'Apple Watch Battery Replacement',
  offers: {
    '@type': 'Offer',
    price: '99',
    priceCurrency: 'AUD',
  },
}

const faqs = [
  {
    question: 'How much does Apple Watch battery replacement cost?',
    answer: 'Apple Watch battery replacement starts from $99 depending on the model. We provide a firm quote before any work begins — no hidden fees.',
    category: 'general',
  },
  {
    question: 'How do I know if my Apple Watch battery needs replacing?',
    answer: 'Signs that your Apple Watch battery needs replacing include: battery draining within a few hours, watch not holding charge overnight, battery health below 80% in Settings, watch shutting down unexpectedly, or the battery swelling under the screen.',
    category: 'general',
  },
  {
    question: 'How long does Apple Watch battery replacement take?',
    answer: 'Apple Watch battery replacement is typically completed in 30–45 minutes. Walk in and most repairs are done on the spot the same day.',
    category: 'general',
  },
  {
    question: 'What Apple Watch models do you replace batteries for?',
    answer: 'We replace batteries for Apple Watch Series 5, Series 6, Series 7, Series 8, Series 9, Apple Watch Ultra, Ultra 2, Apple Watch SE, and SE 2.',
    category: 'general',
  },
  {
    question: 'Is there a warranty on Apple Watch battery replacement?',
    answer: 'Yes — every Apple Watch battery replacement at iTech Repairs comes with a lifetime warranty. If the new battery fails or the same fault returns, we fix it for free.',
    category: 'general',
  },
  {
    question: 'Do I need an appointment for battery replacement?',
    answer: 'No appointment needed. Walk in to our Braybrook or Spotswood store any day between 9am and 9pm for on-the-spot battery replacement.',
    category: 'general',
  },
]

const faqSchema = generateFAQSchema(faqs)

export default function AppleWatchBatteryReplacementPage() {
  return (
    <>
      <SchemaScript schema={[localBusinessSchema, serviceSchema, faqSchema]} />

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
            <li>
              <Link href="/apple-watch-repair-melbourne" className="hover:text-primary transition-colors">
                Apple Watch Repairs
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal font-medium">Battery Replacement</li>
          </ol>
        </div>
      </nav>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Apple Watch Battery Replacement Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              From $99 · All Models · 30–45 Minutes · Lifetime Warranty
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Is your Apple Watch battery draining fast, not holding charge, or shutting down unexpectedly? Walk in to our Braybrook or Spotswood store for a fast Apple Watch battery replacement with a lifetime warranty and cheapest price guarantee.
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
              { label: 'From $99', sub: 'Battery Replacement' },
              { label: '30–45 Min', sub: 'Turnaround' },
              { label: 'Lifetime', sub: 'Warranty' },
              { label: 'Walk-ins', sub: 'Welcome' },
            ].map((stat) => (
              <div key={stat.label} className="py-3">
                <div className="text-xl font-bold text-primary">{stat.label}</div>
                <div className="text-sm text-charcoal-light mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signs Battery Needs Replacing */}
      <section className="section-padding">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Signs Your Apple Watch Battery Needs Replacing
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { title: 'Battery Draining Fast', desc: 'Watch running out of charge well before the end of the day, even with low usage.' },
                { title: 'Not Holding Charge', desc: 'Apple Watch dropping from full charge to empty far faster than when it was new.' },
                { title: 'Battery Health Below 80%', desc: 'Check Settings > Battery > Battery Health. Below 80% means reduced performance and capacity.' },
                { title: 'Unexpected Shutdowns', desc: 'Watch turning off suddenly even when the battery indicator shows charge remaining.' },
                { title: 'Screen Lifting or Swelling', desc: 'A swollen battery can push the screen away from the watch body — this is a safety concern requiring immediate repair.' },
                { title: 'Takes Too Long to Charge', desc: 'Watch taking unusually long to reach full charge, which can indicate a degraded battery cell.' },
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

      {/* Price Table by Model */}
      <section className="section-padding">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Apple Watch Battery Replacement Cost by Model
            </h2>
            <p className="text-charcoal-light text-lg mb-6">
              Transparent pricing — no surprises. All prices include parts, labour, and lifetime warranty.
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-charcoal text-white">
                    <th className="text-left p-4 rounded-tl-xl font-semibold">Model</th>
                    <th className="p-4 font-semibold text-center">Battery Price</th>
                    <th className="p-4 rounded-tr-xl font-semibold text-center">Turnaround</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-border">
                  {[
                    { model: 'Apple Watch Series 5', price: 'From $99', time: '30–45 min' },
                    { model: 'Apple Watch Series 6', price: 'From $99', time: '30–45 min' },
                    { model: 'Apple Watch Series 7', price: 'From $109', time: '30–45 min' },
                    { model: 'Apple Watch Series 8', price: 'From $109', time: '30–45 min' },
                    { model: 'Apple Watch Series 9', price: 'From $119', time: '30–45 min' },
                    { model: 'Apple Watch Ultra', price: 'From $129', time: '45–60 min' },
                    { model: 'Apple Watch Ultra 2', price: 'From $129', time: '45–60 min' },
                    { model: 'Apple Watch SE', price: 'From $99', time: '30–45 min' },
                    { model: 'Apple Watch SE 2', price: 'From $99', time: '30–45 min' },
                  ].map((row) => (
                    <tr key={row.model} className="bg-white hover:bg-gray-surface transition-colors">
                      <td className="p-4 font-medium text-charcoal">{row.model}</td>
                      <td className="p-4 text-center text-primary font-bold">{row.price}</td>
                      <td className="p-4 text-center text-charcoal-light">{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-charcoal-light mt-3">
              * Prices are starting prices. Final price confirmed after free assessment. All prices include lifetime warranty.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose iTech */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8 text-center">
              Why Choose iTech Repairs for Apple Watch Battery?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Fast 30-Minute Service', body: 'Apple Watch battery replacements completed in 30–45 minutes while you wait.' },
                { title: 'Lifetime Warranty', body: 'Every battery replacement comes with a lifetime warranty on parts and labour.' },
                { title: 'Cheapest Price Guaranteed', body: 'From $99 — we offer the cheapest Apple Watch battery replacement in Melbourne.' },
                { title: 'All Models Supported', body: 'We replace batteries for all Apple Watch models from Series 5 through to SE 2 and Ultra 2.' },
                { title: 'Free Battery Health Check', body: 'Not sure if your battery needs replacing? We offer a free battery health diagnostic.' },
                { title: 'Walk-ins Welcome', body: 'No appointment needed. Open 7 days 9am–9pm at Braybrook and Spotswood.' },
              ].map((point) => (
                <div key={point.title} className="p-6 rounded-xl bg-white border border-gray-border">
                  <h3 className="font-bold text-charcoal mb-2">{point.title}</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">{point.body}</p>
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
              Apple Watch Battery Replacement FAQ
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
            <h2 className="text-2xl font-bold text-charcoal mb-4">Related Apple Watch Services</h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/apple-watch-repair-melbourne" className="px-4 py-2 bg-white hover:bg-primary hover:text-white border border-gray-border rounded-full text-sm font-medium text-charcoal transition-colors">
              Apple Watch Repair Melbourne
            </Link>
            <Link href="/apple-watch-screen-repair" className="px-4 py-2 bg-white hover:bg-primary hover:text-white border border-gray-border rounded-full text-sm font-medium text-charcoal transition-colors">
              Apple Watch Screen Repair
            </Link>
          </div>
        </div>
      </section>

      {/* Apple Watch Models */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Apple Watch Models We Repair
            </h2>
            <p className="text-charcoal-light text-lg">
              Select your Apple Watch model to see model-specific pricing and availability.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {[
            { name: 'Apple Watch Series 5', href: '/apple-watch-series-5-battery-replacement' },
            { name: 'Apple Watch Series 6', href: '/apple-watch-series-6-battery-replacement' },
            { name: 'Apple Watch Series 7', href: '/apple-watch-series-7-battery-replacement' },
            { name: 'Apple Watch Series 8', href: '/apple-watch-series-8-battery-replacement' },
            { name: 'Apple Watch Series 9', href: '/apple-watch-series-9-battery-replacement' },
            { name: 'Apple Watch Ultra', href: '/apple-watch-ultra-battery-replacement' },
            { name: 'Apple Watch Ultra 2', href: '/apple-watch-ultra-2-battery-replacement' },
            { name: 'Apple Watch SE', href: '/apple-watch-se-battery-replacement' },
            { name: 'Apple Watch SE 2', href: '/apple-watch-se-2-battery-replacement' },
            ].map((model) => (
              <Link
                key={model.name}
                href={model.href}
                className="card p-4 text-center text-sm font-medium text-charcoal hover:text-primary hover:border-primary transition-colors"
              >
                {model.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary text-white py-16">
        <div className="container-page text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Apple Watch Battery Draining Fast? Fix It Today.
          </h2>
          <p className="text-lg text-red-100 mb-8 max-w-xl mx-auto">
            Walk in to our Braybrook or Spotswood store — no appointment needed. Apple Watch battery replacement from $99 with a lifetime warranty.
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
