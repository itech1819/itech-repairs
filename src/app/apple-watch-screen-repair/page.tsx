import type { Metadata } from 'next'
import Link from 'next/link'
import { business, primaryLocation } from '@/data'
import { generateFAQSchema } from '@/lib/seo'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'

export const metadata: Metadata = {
  title: 'Apple Watch Screen Repair Melbourne | From $149',
  description:
    'Apple Watch screen repair in Melbourne from $149. All Series 5-9, Ultra and SE models. On-the-spot repair, lifetime warranty. Walk in Braybrook or Spotswood.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/apple-watch-screen-repair',
  },
  openGraph: {
    title: 'Apple Watch Screen Repair Melbourne | From $149',
    description: 'Apple Watch screen repair in Melbourne from $149. All Series 5-9, Ultra and SE models. On-the-spot repair, lifetime warranty. Walk in Braybrook or Spotswood.',
    url: 'https://www.itechrepairs.com.au/apple-watch-screen-repair',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Apple Watch Screen Repair Melbourne',
  description:
    'Apple Watch screen repair in Melbourne from $149. Cracked or shattered display replaced with high-quality glass. All Series 5–9, Ultra, Ultra 2, SE and SE 2 models supported.',
  provider: {
    '@type': 'RepairShop',
    name: business.name,
    telephone: business.phone,
  },
  areaServed: { '@type': 'City', name: 'Melbourne' },
  serviceType: 'Apple Watch Screen Repair',
  offers: {
    '@type': 'Offer',
    price: '149',
    priceCurrency: 'AUD',
    priceSpecification: { '@type': 'UnitPriceSpecification', price: '149', priceCurrency: 'AUD' },
  },
}

const faqs = [
  {
    question: 'How much does Apple Watch screen repair cost?',
    answer: 'Apple Watch screen repair starts from $149 depending on the model and series. Series 9 and Ultra models may cost more due to their larger, higher-resolution displays. We provide a firm quote before any work begins.',
    category: 'general',
  },
  {
    question: 'How long does Apple Watch screen repair take?',
    answer: 'Most Apple Watch screen repairs are completed same day in 1–2 hours. Walk in to our Braybrook or Spotswood store and we will assess your watch on the spot.',
    category: 'general',
  },
  {
    question: 'What Apple Watch models can you repair?',
    answer: 'We repair Apple Watch Series 5, Series 6, Series 7, Series 8, Series 9, Apple Watch Ultra, Ultra 2, Apple Watch SE, and SE 2. If you have an older model, call us and we will check parts availability.',
    category: 'general',
  },
  {
    question: 'Is there a warranty on Apple Watch screen repair?',
    answer: 'Yes — every Apple Watch screen repair at iTech Repairs comes with a lifetime warranty on parts and labour. If the same fault returns, we fix it for free.',
    category: 'general',
  },
  {
    question: 'Do I need an appointment?',
    answer: 'No appointment needed. Walk in to our Braybrook or Spotswood store any day between 9am and 9pm. We will assess your Apple Watch on the spot and give you a free quote.',
    category: 'general',
  },
]

const faqSchema = generateFAQSchema(faqs)

const supportedModels = [
  { name: 'Apple Watch Series 5', href: '/apple-watch-series-5-screen-repair' },
  { name: 'Apple Watch Series 6', href: '/apple-watch-series-6-screen-repair' },
  { name: 'Apple Watch Series 7', href: '/apple-watch-series-7-screen-repair' },
  { name: 'Apple Watch Series 8', href: '/apple-watch-series-8-screen-repair' },
  { name: 'Apple Watch Series 9', href: '/apple-watch-series-9-screen-repair' },
  { name: 'Apple Watch Ultra', href: '/apple-watch-ultra-screen-repair' },
  { name: 'Apple Watch Ultra 2', href: '/apple-watch-ultra-2-screen-repair' },
  { name: 'Apple Watch SE', href: '/apple-watch-se-screen-repair' },
  { name: 'Apple Watch SE 2', href: '/apple-watch-se-2-screen-repair' },
]

export default function AppleWatchScreenRepairPage() {
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
            <li className="text-charcoal font-medium">Screen Repair</li>
          </ol>
        </div>
      </nav>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Apple Watch Screen Repair Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              From $149 · All Series 5–9, Ultra &amp; SE Models · Lifetime Warranty
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Cracked or shattered Apple Watch screen? We replace Apple Watch displays for all models including Series 5 through 9, Ultra, Ultra 2, SE and SE 2. On-the-spot same-day repair with a lifetime warranty and cheapest price guarantee.
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
              { label: 'From $149', sub: 'Screen Repair' },
              { label: '1–2 Hours', sub: 'Same Day' },
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

      {/* Service Details */}
      <section className="section-padding">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              What Apple Watch Screen Damage Do We Fix?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { title: 'Cracked Screen', desc: 'Visible cracks on the Apple Watch display glass repaired with high-quality replacement glass.' },
                { title: 'Shattered Display', desc: 'Fully shattered Apple Watch screen with broken glass and display failure — full display assembly replacement.' },
                { title: 'Digitizer Replacement', desc: 'Touch not responding or registering incorrectly? We replace the digitizer layer for full touch functionality.' },
                { title: 'Display Assembly', desc: 'Dark screen, dead pixels, or colour issues? Full display assembly replacement restores full visual output.' },
                { title: 'Scratched Glass', desc: 'Deep scratches affecting readability replaced with clear, scratch-free display glass.' },
                { title: 'Screen Separation', desc: 'Screen lifting away from the watch body? We re-seal and replace the display assembly properly.' },
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

      {/* Supported Models */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Apple Watch Models We Repair
            </h2>
            <p className="text-charcoal-light text-lg">
              Screen repair available for all major Apple Watch models.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {supportedModels.map((model) => (
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

      {/* Why Choose iTech */}
      <section className="section-padding">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8 text-center">
              Why Choose iTech Repairs?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Same Day Screen Repair', body: 'Most Apple Watch screen repairs are completed same day in 1–2 hours. Walk in any time — no appointments needed.' },
                { title: 'Lifetime Warranty', body: 'Every screen repair comes with a lifetime warranty on parts and labour. If the same fault returns, we fix it free.' },
                { title: 'Cheapest Price Guaranteed', body: 'We offer the cheapest Apple Watch screen repair prices in Melbourne. Found a lower written quote? We will match it.' },
                { title: 'All Models Supported', body: 'From Series 5 to Series 9, Ultra, Ultra 2, SE and SE 2 — we stock quality screen parts for every Apple Watch generation.' },
                { title: 'Free Diagnostic', body: 'Not sure what is wrong? We offer a free diagnostic before any repair work begins. No obligation, no fee.' },
                { title: 'Local Melbourne Store', body: 'Walk in to our Braybrook or Spotswood store, 7 days a week 9am–9pm. No appointments necessary.' },
              ].map((point) => (
                <div key={point.title} className="p-6 rounded-xl bg-gray-surface border border-gray-border">
                  <h3 className="font-bold text-charcoal mb-2">{point.title}</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">{point.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Apple Watch Screen Repair FAQ
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
            <h2 className="text-2xl font-bold text-charcoal mb-4">Related Apple Watch Services</h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/apple-watch-repair-melbourne" className="px-4 py-2 bg-white hover:bg-primary hover:text-white border border-gray-border rounded-full text-sm font-medium text-charcoal transition-colors">
              Apple Watch Repair Melbourne
            </Link>
            <Link href="/apple-watch-battery-replacement" className="px-4 py-2 bg-white hover:bg-primary hover:text-white border border-gray-border rounded-full text-sm font-medium text-charcoal transition-colors">
              Apple Watch Battery Replacement
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
            Cracked Apple Watch Screen? We Can Fix It Today.
          </h2>
          <p className="text-lg text-red-100 mb-8 max-w-xl mx-auto">
            Walk in to our Braybrook or Spotswood store — no appointment needed. Same-day Apple Watch screen repair from $149 with a lifetime warranty.
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
