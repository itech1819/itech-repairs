import type { Metadata } from 'next'
import Link from 'next/link'
import { business } from '@/data'
import { generateFAQSchema } from '@/lib/seo'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'
import { primaryLocation } from '@/data'

export const metadata: Metadata = {
  title: 'Motorola Phone Repair Melbourne | Screen & Battery | iTech Repairs',
  description:
    'Expert Motorola and Moto G phone repair in Melbourne. Screen replacement, battery, charging port and water damage repair for all Motorola models. Lifetime warranty. Walk in today.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/motorola-phone-repair-melbourne',
  },
  openGraph: {
    title: 'Motorola Phone Repair Melbourne | Screen & Battery | iTech Repairs',
    description: 'Expert Motorola phone repair in Melbourne. Screen replacement, battery, charging port and water damage repair. Lifetime warranty. Walk in today.',
    url: 'https://www.itechrepairs.com.au/motorola-phone-repair-melbourne',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Motorola Phone Repair Melbourne',
  description: 'Expert Motorola phone repair in Melbourne. Screen repair, battery replacement, charging port repair, and water damage assessment for all Motorola and Moto G models.',
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
  serviceType: 'Motorola Phone Repair',
}

const faqs = [
  {
    question: 'How much does Motorola screen repair cost in Melbourne?',
    answer: 'Motorola screen repair prices vary by model. Motorola Edge 50 Pro with curved OLED display costs more than Moto G series screens. We provide a free upfront quote before any work begins.',
    category: 'general',
  },
  {
    question: 'What Motorola models do you repair?',
    answer: 'We repair all popular Motorola models including the Edge 50 series, Moto G85, Moto G54, Moto G84, and the Razr fold series. Call us to check parts availability for older models.',
    category: 'general',
  },
  {
    question: 'How long does Motorola repair take?',
    answer: 'Most Motorola screen and battery repairs are completed on the spot in 15–30 minutes. Walk in any day between 9am and 9pm — no appointment needed.',
    category: 'general',
  },
  {
    question: 'Do you repair Motorola Razr foldable phones?',
    answer: 'Yes, we can assess and repair Motorola Razr foldable phones. Foldable screen repairs are more complex and costly than standard displays. We\'ll provide a detailed assessment before proceeding.',
    category: 'general',
  },
  {
    question: 'Is there a warranty on Motorola repairs?',
    answer: 'Yes — all Motorola repairs come with a lifetime warranty on parts and labour. If the same fault returns, we repair it free of charge.',
    category: 'general',
  },
  {
    question: 'Can you fix water damage on a Motorola phone?',
    answer: 'Yes. Many Motorola phones have water resistance ratings, but liquid can still cause damage — especially on older models. We offer a free assessment and professional water damage repair service.',
    category: 'general',
  },
]

const faqSchema = generateFAQSchema(faqs)

const models = [
  { name: 'Motorola Edge 50 Pro', slug: 'motorola-edge-50-pro' },
  { name: 'Motorola Edge 50', slug: 'motorola-edge-50' },
  { name: 'Motorola Edge 40 Pro', slug: 'motorola-edge-40-pro' },
  { name: 'Moto G85', slug: 'moto-g85' },
  { name: 'Moto G84', slug: 'moto-g84' },
  { name: 'Moto G54', slug: 'moto-g54' },
  { name: 'Moto G34', slug: 'moto-g34' },
  { name: 'Motorola Razr 50', slug: 'motorola-razr-50' },
  { name: 'Motorola Razr 40 Ultra', slug: 'motorola-razr-40-ultra' },
  { name: 'Moto G Power', slug: 'moto-g-power' },
  { name: 'Motorola Edge 60 Pro', slug: 'motorola-edge-60-pro' },
  { name: 'Motorola Edge 30 Pro', slug: 'motorola-edge-30-pro' },
  { name: 'Motorola Edge 30', slug: 'motorola-edge-30' },
  { name: 'Motorola Edge 20 Pro', slug: 'motorola-edge-20-pro' },
  { name: 'Moto G73', slug: 'moto-g73' },
  { name: 'Moto G72', slug: 'moto-g72' },
  { name: 'Moto G62', slug: 'moto-g62' },
  { name: 'Moto G52', slug: 'moto-g52' },
  { name: 'Moto G42', slug: 'moto-g42' },
  { name: 'Moto G32', slug: 'moto-g32' },
  { name: 'Motorola Razr 2022', slug: 'motorola-razr-2022' },
  { name: 'Moto E32', slug: 'moto-e32' },
]

const repairServices = [
  { name: 'Screen Repair', price: 'From $79', time: '15–30 min', description: 'Replace cracked or shattered Motorola screens. Quality OLED replacements available for Edge series models.' },
  { name: 'Battery Replacement', price: 'From $69', time: '15–20 min', description: 'Replace worn Motorola batteries. Fix rapid drain, failure to charge, or swelling issues.' },
  { name: 'Charging Port Repair', price: 'From $69', time: '20–30 min', description: 'Fix loose, damaged, or clogged USB-C charging ports on any Motorola model.' },
  { name: 'Water Damage Repair', price: 'From $89', time: '30–60 min', description: 'Professional assessment and repair for Motorola phones exposed to water or liquid.' },
  { name: 'Camera Repair', price: 'From $79', time: '20–30 min', description: 'Repair or replace front and rear cameras on all Motorola Edge and Moto G models.' },
  { name: 'Full Diagnostic', price: 'Free', time: '15 min', description: 'Comprehensive free diagnostic to identify all faults before any Motorola repair begins.' },
]

const whyChoosePoints = [
  { title: 'Edge, Moto G & Razr Covered', body: 'We repair the full Motorola range from budget Moto G phones to the premium Edge 50 Pro and the iconic Razr foldable series.' },
  { title: 'Lifetime Warranty', body: 'Every Motorola repair comes with a lifetime warranty. If the same fault returns, we fix it free — no questions asked.' },
  { title: 'On-The-Spot Service', body: 'Most Motorola repairs are done while you wait. Walk in and we\'ll have your phone fixed in minutes.' },
  { title: 'Cheapest Price Guaranteed', body: 'We offer the most competitive Motorola repair prices in Melbourne and will match any genuine lower quote.' },
  { title: 'Free Diagnostics', body: 'Walk in for a free Motorola diagnostic. We\'ll tell you exactly what\'s wrong and what it will cost to fix.' },
  { title: 'Open 7 Days', body: 'Both Braybrook and Spotswood stores are open every day from 9am to 9pm. No appointment ever needed.' },
]

export default function MotorolaPhoneRepairMelbournePage() {
  return (
    <>
      <SchemaScript schema={[localBusinessSchema, serviceSchema, faqSchema]} />

      <nav aria-label="Breadcrumb" className="bg-gray-surface border-b border-gray-border py-3">
        <div className="container-page">
          <ol className="flex items-center gap-2 text-sm text-charcoal-light">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal font-medium">Motorola Phone Repair Melbourne</li>
          </ol>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Motorola Phone Repair Melbourne</h1>
            <p className="text-xl text-gray-300 mb-6">Edge Series · Moto G · Razr · All Models · Lifetime Warranty</p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Professional Motorola phone repairs in Melbourne. Cracked Edge 50 Pro screen, flat Moto G
              battery, or damaged Razr display — walk in for on-the-spot repair with a lifetime
              warranty and cheapest price guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${business.phone}`} className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors">
                Call {business.phoneDisplay}
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-charcoal transition-colors">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-gray-border py-6">
        <div className="container-page">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[{ label: '10+ Models', sub: 'Supported' }, { label: '6 Repairs', sub: 'Available' }, { label: 'Cheapest', sub: 'Price Guaranteed' }, { label: 'Lifetime', sub: 'Warranty' }].map((stat) => (
              <div key={stat.label} className="py-3">
                <div className="text-xl font-bold text-primary">{stat.label}</div>
                <div className="text-sm text-charcoal-light mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Motorola Models We Repair</h2>
            <p className="text-charcoal-light text-lg">All Motorola Edge, Moto G, and Razr phones welcome.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {models.map((model) => (
              <Link key={model.name} href={`/${model.slug}-repair`} className="card p-4 text-center text-sm font-medium text-charcoal hover:text-primary hover:border-primary transition-colors">{model.name}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Motorola Repair Services &amp; Pricing</h2>
            <p className="text-charcoal-light text-lg">Transparent pricing. Free quote before any work begins.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {repairServices.map((service) => (
              <Link key={service.name} href="/contact" className="card p-6 hover:border-primary group">
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

      <section className="section-padding">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8 text-center">Why Choose iTech Repairs for Motorola?</h2>
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

      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Motorola Repair FAQ</h2>
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

      <section className="bg-primary text-white py-16">
        <div className="container-page text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Your Motorola Repaired Today?</h2>
          <p className="text-lg text-red-100 mb-8 max-w-xl mx-auto">Walk in to our Braybrook or Spotswood store — no appointment needed. On-the-spot Motorola repairs with lifetime warranty.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${business.phone}`} className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl text-lg hover:bg-red-50 transition-colors">
              Call {business.phoneDisplay}
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-primary transition-colors">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
