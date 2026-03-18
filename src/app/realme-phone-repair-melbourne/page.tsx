import type { Metadata } from 'next'
import Link from 'next/link'
import { business } from '@/data'
import { generateFAQSchema } from '@/lib/seo'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'
import { primaryLocation } from '@/data'

export const metadata: Metadata = {
  title: 'Realme Phone Repair Melbourne | Screen & Battery | iTech Repairs',
  description:
    'Expert Realme phone repair in Melbourne. Screen replacement, battery replacement and charging port repair for Realme 13 Pro, 12, Narzo, and all models. Lifetime warranty. Walk in today.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/realme-phone-repair-melbourne',
  },
  openGraph: {
    title: 'Realme Phone Repair Melbourne | Screen & Battery | iTech Repairs',
    description: 'Expert Realme phone repair in Melbourne. Screen replacement, battery and charging port repair. Lifetime warranty. Walk in today.',
    url: 'https://www.itechrepairs.com.au/realme-phone-repair-melbourne',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Realme Phone Repair Melbourne',
  description: 'Expert Realme phone repair in Melbourne. Screen repair, battery replacement, and charging port repair for all Realme models.',
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
  serviceType: 'Realme Phone Repair',
}

const faqs = [
  {
    question: 'How much does Realme screen repair cost in Melbourne?',
    answer: 'Realme screen repair is very affordable. Realme 13 Pro and 12 Pro series AMOLED screens cost slightly more than the budget Narzo series LCD screens. Walk in or call for a free specific quote.',
    category: 'general',
  },
  {
    question: 'What Realme models do you repair?',
    answer: 'We repair all popular Realme models including Realme 13 Pro, Realme 13 Pro Plus, Realme 12, Realme 12 Plus, Realme Narzo 70 Pro, and older models. Call us to check availability for your specific model.',
    category: 'general',
  },
  {
    question: 'How long does Realme repair take?',
    answer: 'Most Realme screen and battery repairs are completed on the spot in 15–30 minutes. Walk in any day between 9am and 9pm — no appointment needed.',
    category: 'general',
  },
  {
    question: 'Is there a warranty on Realme repairs?',
    answer: 'Yes — all Realme repairs come with a lifetime warranty on parts and labour. If the same fault returns after our repair, we fix it free.',
    category: 'general',
  },
  {
    question: 'Can you fix my Realme if it won\'t charge?',
    answer: 'Yes. Realme is known for its SUPERVOOC fast charging — if your Realme won\'t charge or charges slowly, it\'s usually a port issue or degraded battery. We\'ll diagnose it free and fix it on the spot.',
    category: 'general',
  },
  {
    question: 'Do I need an appointment for Realme repair?',
    answer: 'No appointment needed. Walk in to our Braybrook or Spotswood store any day between 9am and 9pm for a free diagnostic and same-day repair.',
    category: 'general',
  },
]

const faqSchema = generateFAQSchema(faqs)

const models = [
  { name: 'Realme 13 Pro Plus', slug: 'realme-13-pro-plus' },
  { name: 'Realme 13 Pro', slug: 'realme-13-pro' },
  { name: 'Realme 12 Plus', slug: 'realme-12-plus' },
  { name: 'Realme 12', slug: 'realme-12' },
  { name: 'Realme Narzo 70 Pro', slug: 'realme-narzo-70-pro' },
  { name: 'Realme Narzo 70', slug: 'realme-narzo-70' },
  { name: 'Realme C67', slug: 'realme-c67' },
  { name: 'Realme C55', slug: 'realme-c55' },
  { name: 'Realme 11 Pro', slug: 'realme-11-pro' },
  { name: 'Realme 11', slug: 'realme-11' },
  { name: 'Realme 10 Pro+', slug: 'realme-10-pro' },
  { name: 'Realme 9 Pro+', slug: 'realme-9-pro' },
  { name: 'Realme 9', slug: 'realme-9' },
  { name: 'Realme 8 Pro', slug: 'realme-8-pro' },
  { name: 'Realme 8', slug: 'realme-8' },
  { name: 'Realme GT 2 Pro', slug: 'realme-gt-2-pro' },
  { name: 'Realme GT Neo 3', slug: 'realme-gt-neo-3' },
  { name: 'Realme C35', slug: 'realme-c35' },
  { name: 'Realme Narzo 50 Pro', slug: 'realme-narzo-50-pro' },
]

const repairServices = [
  { name: 'Screen Repair', price: 'From $69', time: '15–30 min', description: 'Replace cracked Realme screens. AMOLED replacements for Pro series, IPS LCD for Narzo and C series.' },
  { name: 'Battery Replacement', price: 'From $59', time: '15–20 min', description: 'Replace worn Realme batteries. Restore SUPERVOOC fast charging capability and all-day battery life.' },
  { name: 'Charging Port Repair', price: 'From $59', time: '15–20 min', description: 'Fix damaged USB-C or micro-USB charging ports on all Realme models.' },
  { name: 'Camera Repair', price: 'From $69', time: '20–30 min', description: 'Repair or replace cameras on all Realme models including the periscope telephoto on Pro series.' },
  { name: 'Water Damage Repair', price: 'From $79', time: '30–60 min', description: 'Professional assessment and repair for Realme phones exposed to water or liquid.' },
  { name: 'Full Diagnostic', price: 'Free', time: '15 min', description: 'Free diagnostic to identify all faults with your Realme before any repair begins.' },
]

const whyChoosePoints = [
  { title: 'All Realme Series Covered', body: 'From the flagship Realme 13 Pro Plus to the budget Narzo and C series — we repair the full Realme lineup available in Australia.' },
  { title: 'Lifetime Warranty', body: 'Every Realme repair includes a lifetime warranty. If the fault returns, we fix it free.' },
  { title: 'On-The-Spot Service', body: 'Walk in and most Realme repairs are completed while you wait. Fast, affordable service with no long waits.' },
  { title: 'Cheapest Price Guaranteed', body: 'We offer the most competitive Realme repair prices in Melbourne and will match any genuine lower quote.' },
  { title: 'Free Diagnostics', body: 'Walk in for a free Realme diagnostic — we identify the issue before you commit to any repair.' },
  { title: 'Open 7 Days', body: 'Braybrook and Spotswood stores open every day from 9am to 9pm. No appointment required.' },
]

export default function RealmePhoneRepairMelbournePage() {
  return (
    <>
      <SchemaScript schema={[localBusinessSchema, serviceSchema, faqSchema]} />

      <nav aria-label="Breadcrumb" className="bg-gray-surface border-b border-gray-border py-3">
        <div className="container-page">
          <ol className="flex items-center gap-2 text-sm text-charcoal-light">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal font-medium">Realme Phone Repair Melbourne</li>
          </ol>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Realme Phone Repair Melbourne</h1>
            <p className="text-xl text-gray-300 mb-6">Realme Pro · Narzo · C Series · All Models · Lifetime Warranty</p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Professional Realme phone repairs in Melbourne. Cracked Realme 13 Pro screen, dead
              battery in your Narzo, or charging port damage — walk in for on-the-spot repair with
              lifetime warranty and cheapest price guarantee.
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
            {[{ label: '8+ Models', sub: 'Supported' }, { label: '6 Repairs', sub: 'Available' }, { label: 'Cheapest', sub: 'Price Guaranteed' }, { label: 'Lifetime', sub: 'Warranty' }].map((stat) => (
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
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Realme Models We Repair</h2>
            <p className="text-charcoal-light text-lg">All Realme Pro, Narzo, and C series phones welcome.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {models.map((model) => (
              <Link key={model.name} href={`/${model.slug}-repair`} className="card p-4 text-center text-sm font-medium text-charcoal hover:text-primary hover:border-primary transition-colors">{model.name}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Realme Repair Services &amp; Pricing</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8 text-center">Why Choose iTech Repairs for Realme?</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Realme Repair FAQ</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Your Realme Repaired Today?</h2>
          <p className="text-lg text-red-100 mb-8 max-w-xl mx-auto">Walk in to our Braybrook or Spotswood store — no appointment needed. On-the-spot Realme repairs with lifetime warranty.</p>
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
