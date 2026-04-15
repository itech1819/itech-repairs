import type { Metadata } from 'next'
import Link from 'next/link'
import { business } from '@/data'
import { generateFAQSchema } from '@/lib/seo'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'
import { primaryLocation } from '@/data'

export const metadata: Metadata = {
  title: { absolute: 'Apple Watch Repair Melbourne – Screen, Battery & More | Cheapest Price | Lifetime Warranty | iTech Repairs' },
  description:
    'Expert Apple Watch repairs in Melbourne — screen, battery, charging and more. 15-minute on-the-spot repairs, cheapest price guaranteed, lifetime warranty. Walk in Braybrook or Spotswood — no booking needed.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/apple-watch-repair-melbourne',
  },
  openGraph: {
    title: 'Apple Watch Repair Melbourne – Screen, Battery & More | Cheapest Price | Lifetime Warranty | iTech Repairs',
    description: 'Expert Apple Watch repairs in Melbourne — screen, battery, charging and more. 15-minute repairs, cheapest price guaranteed, lifetime warranty. Walk in today.',
    url: 'https://www.itechrepairs.com.au/apple-watch-repair-melbourne',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Apple Watch Repair Melbourne',
  description:
    'Expert Apple Watch repair services in Melbourne. Screen repair, battery replacement, charging port repair and more for all Apple Watch models including Series 5–9, Ultra, and SE.',
  provider: {
    '@type': 'ElectronicsStore',
    name: business.name,
    telephone: business.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address,
      addressLocality: business.suburb,
      addressRegion: business.state,
      postalCode: business.postcode,
    },
  },
  areaServed: { '@type': 'City', name: 'Melbourne' },
  serviceType: 'Apple Watch Repair',
}

const appleWatchFAQs = [
  {
    question: 'How much does Apple Watch screen repair cost?',
    answer: 'Apple Watch screen repair starts from $149 depending on the model. Series 9 and Ultra models may cost more due to the larger, higher-resolution displays. We provide a firm quote before any work begins.',
    category: 'general',
  },
  {
    question: 'How long does Apple Watch repair take?',
    answer: 'Most Apple Watch screen and battery repairs are completed on the spot in around 30–60 minutes. More complex repairs such as crown replacement or water damage assessment may take longer.',
    category: 'general',
  },
  {
    question: 'What Apple Watch models do you repair?',
    answer: 'We repair Apple Watch Series 5, Series 6, Series 7, Series 8, Series 9, Apple Watch Ultra, Ultra 2, Apple Watch SE, and SE 2. If you have an older model, call us and we will let you know if parts are available.',
    category: 'general',
  },
  {
    question: 'Is there a warranty on Apple Watch repairs?',
    answer: 'Yes — all Apple Watch repairs at iTech Repairs come with a lifetime warranty on parts and labour. If the same fault returns, we fix it for free.',
    category: 'general',
  },
  {
    question: 'Can you fix a water damaged Apple Watch?',
    answer: 'We offer a free water damage assessment for all Apple Watch models. While Apple Watch has water resistance ratings, water damage can still occur — especially with older models or if the seals are compromised. We will assess your watch and advise on the best course of action.',
    category: 'general',
  },
  {
    question: 'Do I need an appointment?',
    answer: 'No appointment is needed. Simply walk in to our Braybrook or Spotswood store any day between 9am and 9pm. We will assess your Apple Watch on the spot and give you a free quote.',
    category: 'general',
  },
]

const faqSchema = generateFAQSchema(appleWatchFAQs)

const appleWatchModels = [
  { name: 'Apple Watch Series 5', href: '/apple-watch-series-5-repair' },
  { name: 'Apple Watch Series 6', href: '/apple-watch-series-6-repair' },
  { name: 'Apple Watch Series 7', href: '/apple-watch-series-7-repair' },
  { name: 'Apple Watch Series 8', href: '/apple-watch-series-8-repair' },
  { name: 'Apple Watch Series 9', href: '/apple-watch-series-9-repair' },
  { name: 'Apple Watch Ultra', href: '/apple-watch-ultra-repair' },
  { name: 'Apple Watch Ultra 2', href: '/apple-watch-ultra-2-repair' },
  { name: 'Apple Watch SE', href: '/apple-watch-se-repair' },
  { name: 'Apple Watch SE 2', href: '/apple-watch-se-2-repair' },
]

const repairServices = [
  { name: 'Screen Repair', price: 'From $149', time: '30–60 min', description: 'Cracked or shattered Apple Watch display replaced with high-quality glass. Restores full touch and display functionality.', href: '/apple-watch-screen-repair' },
  { name: 'Battery Replacement', price: 'From $99', time: '30–45 min', description: 'Genuine-quality battery replacement to restore all-day battery life. Ideal if your watch drains quickly or won\'t charge.', href: '/apple-watch-battery-replacement' },
  { name: 'Charging Port Repair', price: 'From $89', time: '30–45 min', description: 'Fix charging issues caused by damaged magnetic charging connections or debris. Includes full diagnostic.', href: '/apple-watch-charging-port-repair' },
  { name: 'Water Damage Assessment', price: 'Free', time: '15–20 min', description: 'Free assessment to determine extent of water damage and recommend repair options.', href: '/apple-watch-water-damage-repair' },
  { name: 'Crown & Button Repair', price: 'From $119', time: '45–60 min', description: 'Repair or replacement of the Digital Crown or side button if stuck, unresponsive, or damaged.', href: '/contact' },
  { name: 'Full Diagnostic', price: 'Free', time: '15 min', description: 'Comprehensive free diagnostic to identify all faults with your Apple Watch before any repair work begins.', href: '/apple-watch-free-device-inspection' },
]

const whyChoosePoints = [
  {
    title: 'All Major Apple Watch Models Supported',
    body: 'From the Apple Watch Series 5 through to the latest Series 9, Ultra 2, and SE 2 — we stock quality parts and have the expertise to repair every Apple Watch generation.',
  },
  {
    title: 'Lifetime Warranty on All Repairs',
    body: 'Every Apple Watch repair at iTech Repairs comes with a lifetime warranty on both parts and labour. If the same fault returns, we fix it free — no questions asked.',
  },
  {
    title: 'On The Spot Same-Day Repairs',
    body: 'Most Apple Watch screen and battery replacements are completed on the spot while you wait. Walk in any time — no appointments needed.',
  },
  {
    title: 'Cheapest Price Guaranteed',
    body: 'We offer the cheapest Apple Watch repair prices in Melbourne. Found a lower written quote? We will match it. Quality repairs should not cost a fortune.',
  },
  {
    title: 'Free Diagnostics & No Fix, No Fee',
    body: 'Not sure what\'s wrong with your Apple Watch? Our free diagnostic service will identify the problem before any work begins. If we can\'t fix it, you don\'t pay.',
  },
  {
    title: 'Melbourne\'s Trusted Repair Technicians',
    body: 'Locally owned and operated in Braybrook, serving all of Western Melbourne. Our technicians are experienced with Apple Watch\'s compact, precision hardware.',
  },
]

export default function AppleWatchRepairMelbournePage() {
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
            <li className="text-charcoal font-medium">Apple Watch Repair Melbourne</li>
          </ol>
        </div>
      </nav>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Apple Watch Repair Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Series 5–9 · Ultra &amp; Ultra 2 · SE &amp; SE 2 · Lifetime Warranty
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Expert Apple Watch repairs for every model. Cracked screen? Dead battery? Crown not
              working? Walk in to our Braybrook or Spotswood store for on-the-spot Apple Watch
              repairs with a lifetime warranty and cheapest price guarantee.
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
              { label: '9 Models', sub: 'Supported' },
              { label: '6 Repairs', sub: 'Available' },
              { label: 'Lifetime', sub: 'Warranty' },
              { label: 'Same Day', sub: 'Service' },
            ].map((stat) => (
              <div key={stat.label} className="py-3">
                <div className="text-xl font-bold text-primary">{stat.label}</div>
                <div className="text-sm text-charcoal-light mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apple Watch Models */}
      <section className="section-padding">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Apple Watch Models We Repair
            </h2>
            <p className="text-charcoal-light text-lg">
              We repair all major Apple Watch models from Series 5 onwards.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {appleWatchModels.map((model) => (
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

      {/* Repair Services */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Apple Watch Repair Services &amp; Pricing
            </h2>
            <p className="text-charcoal-light text-lg">
              Transparent pricing on all Apple Watch repair services. Free quote before any work begins.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {repairServices.map((service) => (
              <Link key={service.name} href={service.href} className="card p-6 hover:border-primary group">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-charcoal group-hover:text-primary transition-colors">{service.name}</h3>
                  <span className="text-primary font-bold text-sm whitespace-nowrap ml-2">{service.price}</span>
                </div>
                <p className="text-xs text-charcoal-light mb-2 leading-relaxed">{service.description}</p>
                <p className="text-xs text-charcoal-light">Est. time: {service.time}</p>
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
              Why Choose iTech Repairs for Apple Watch?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyChoosePoints.map((point) => (
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
              Apple Watch Repair FAQ
            </h2>
          </div>
          <div className="max-w-3xl mx-auto divide-y divide-gray-border">
            {appleWatchFAQs.map((faq) => (
              <details key={faq.question} className="py-5 group">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="font-semibold text-charcoal pr-4">{faq.question}</span>
                  <span className="text-primary flex-shrink-0 group-open:rotate-180 transition-transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
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

      {/* Internal links */}
      <section className="section-padding">
        <div className="container-page">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-charcoal mb-4">Other Repair Services</h2>
            <p className="text-charcoal-light">We repair all Apple devices and more.</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/iphone-repair-melbourne"
              className="px-4 py-2 bg-white hover:bg-primary hover:text-white border border-gray-border rounded-full text-sm font-medium text-charcoal transition-colors"
            >
              iPhone Repair Melbourne
            </Link>
            <Link
              href="/ipad-repair-melbourne"
              className="px-4 py-2 bg-white hover:bg-primary hover:text-white border border-gray-border rounded-full text-sm font-medium text-charcoal transition-colors"
            >
              iPad Repair Melbourne
            </Link>
            <Link
              href="/sell-my-device"
              className="px-4 py-2 bg-white hover:bg-primary hover:text-white border border-gray-border rounded-full text-sm font-medium text-charcoal transition-colors"
            >
              Sell My Device
            </Link>
          </div>
        </div>
      </section>
      {/* Model × Service Quick Links */}
      <section className="section-padding bg-gray-surface" id="model-service-grid">
        <div className="container-page">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-charcoal mb-2">
              Repair by Model
            </h2>
            <p className="text-charcoal-light">
              Select your Apple Watch model and repair type for model-specific pricing.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-charcoal text-white">
                  <th className="text-left p-3 rounded-tl-lg">Model</th>
                  <th className="p-3">Screen</th>
                  <th className="p-3">Battery</th>
                  <th className="p-3">Charging</th>
                  <th className="p-3">Water</th>
                  <th className="p-3 rounded-tr-lg">Diagnostic</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Series 5', slug: 'apple-watch-series-5' },
                  { name: 'Series 6', slug: 'apple-watch-series-6' },
                  { name: 'Series 7', slug: 'apple-watch-series-7' },
                  { name: 'Series 8', slug: 'apple-watch-series-8' },
                  { name: 'Series 9', slug: 'apple-watch-series-9' },
                  { name: 'Ultra',    slug: 'apple-watch-ultra' },
                  { name: 'Ultra 2',  slug: 'apple-watch-ultra-2' },
                  { name: 'SE',       slug: 'apple-watch-se' },
                  { name: 'SE 2',     slug: 'apple-watch-se-2' },
                ].map((m) => (
                  <tr key={m.slug} className="border-b border-gray-border hover:bg-white transition-colors">
                    <td className="p-3 font-medium text-charcoal">{m.name}</td>
                    {[
                      { svc: 'screen-repair', label: 'Screen' },
                      { svc: 'battery-replacement', label: 'Battery' },
                      { svc: 'charging-port-repair', label: 'Charging' },
                      { svc: 'water-damage-repair', label: 'Water' },
                      { svc: 'free-device-inspection', label: 'Free' },
                    ].map((s) => (
                      <td key={s.svc} className="p-3 text-center">
                        <Link href={`/${m.slug}-${s.svc}`} className="text-primary hover:underline text-xs font-medium">
                          {s.label}
                        </Link>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>


      {/* CTA Banner */}
      <section className="bg-primary text-white py-16">
        <div className="container-page text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Your Apple Watch Repaired Today?
          </h2>
          <p className="text-lg text-red-100 mb-8 max-w-xl mx-auto">
            Walk in to our Braybrook or Spotswood store — no appointment needed. On-the-spot Apple
            Watch repairs with a lifetime warranty and cheapest price guaranteed.
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
