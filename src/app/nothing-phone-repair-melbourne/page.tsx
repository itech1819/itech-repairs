import type { Metadata } from 'next'
import Link from 'next/link'
import { business } from '@/data'
import { generateFAQSchema } from '@/lib/seo'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'
import { primaryLocation } from '@/data'

export const metadata: Metadata = {
  title: 'Nothing Phone Repair Melbourne | Screen & Battery | iTech Repairs',
  description:
    'Expert Nothing Phone repair in Melbourne. Screen replacement, battery, charging port and back glass repair for Nothing Phone 3a, 2a, 2 and 1. Lifetime warranty. Walk in today.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/nothing-phone-repair-melbourne',
  },
  openGraph: {
    title: 'Nothing Phone Repair Melbourne | Screen & Battery | iTech Repairs',
    description: 'Expert Nothing Phone repair in Melbourne. Screen replacement, battery, charging port and back glass repair. Lifetime warranty. Walk in today.',
    url: 'https://www.itechrepairs.com.au/nothing-phone-repair-melbourne',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Nothing Phone Repair Melbourne',
  description: 'Expert Nothing Phone repair in Melbourne. Screen repair, battery replacement, charging port repair, and back glass repair for Nothing Phone (3a), (2a), (2), and (1).',
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
  serviceType: 'Nothing Phone Repair',
}

const faqs = [
  {
    question: 'How much does Nothing Phone screen repair cost in Melbourne?',
    answer: 'Nothing Phone screen repair prices vary by model. The Nothing Phone (3a) and (2a) with their transparent design and AMOLED displays have specific parts requirements. Call us or walk in for a free upfront quote.',
    category: 'general',
  },
  {
    question: 'What Nothing Phone models do you repair?',
    answer: 'We repair all Nothing Phone models including Nothing Phone (3a), Nothing Phone (2a), Nothing Phone (2), and Nothing Phone (1). The Glyph Interface LED matrix on the back is handled carefully during any repair.',
    category: 'general',
  },
  {
    question: 'Can you repair the Glyph Interface on Nothing Phone?',
    answer: 'The Glyph Interface LED matrix is an iconic feature of Nothing Phone. While we primarily repair screens, batteries, and charging ports, we take great care not to damage the Glyph system during repairs. Glyph functionality is tested after every repair.',
    category: 'general',
  },
  {
    question: 'How long does Nothing Phone repair take?',
    answer: 'Most Nothing Phone screen and battery repairs are completed on the spot in 30–60 minutes. Walk in any day between 9am and 9pm — no appointment needed.',
    category: 'general',
  },
  {
    question: 'Is there a warranty on Nothing Phone repairs?',
    answer: 'Yes — all Nothing Phone repairs come with a lifetime warranty on parts and labour. If the same fault returns, we fix it free.',
    category: 'general',
  },
  {
    question: 'Can you fix the transparent back on a Nothing Phone?',
    answer: 'Yes. The distinctive transparent back panel can crack on impact like any glass back. We can replace or repair the back glass on Nothing Phone models while preserving the unique transparent aesthetic.',
    category: 'general',
  },
]

const faqSchema = generateFAQSchema(faqs)

const models = [
  { name: 'Nothing Phone (3a)', slug: 'nothing-phone-3a' },
  { name: 'Nothing Phone (3a) Pro', slug: 'nothing-phone-3a-pro' },
  { name: 'Nothing Phone (2a)', slug: 'nothing-phone-2a' },
  { name: 'Nothing Phone (2a) Plus', slug: 'nothing-phone-2a-plus' },
  { name: 'Nothing Phone (2)', slug: 'nothing-phone-2' },
  { name: 'Nothing Phone (1)', slug: 'nothing-phone-1' },
]

const repairServices = [
  { name: 'Screen Repair', price: 'From $89', time: '30–60 min', description: 'Replace cracked or damaged Nothing Phone AMOLED displays. We preserve the unique design aesthetic during every repair.' },
  { name: 'Battery Replacement', price: 'From $79', time: '30–45 min', description: 'Replace worn or degraded Nothing Phone batteries. Restore all-day battery life and fast charging capability.' },
  { name: 'Charging Port Repair', price: 'From $69', time: '20–30 min', description: 'Fix damaged USB-C charging ports on all Nothing Phone models.' },
  { name: 'Back Glass Repair', price: 'From $89', time: '30–60 min', description: 'Repair or replace the distinctive transparent back glass on Nothing Phone models. Glyph Interface tested post-repair.' },
  { name: 'Camera Repair', price: 'From $89', time: '20–30 min', description: 'Repair or replace front and rear cameras on all Nothing Phone models.' },
  { name: 'Full Diagnostic', price: 'Free', time: '15 min', description: 'Free comprehensive diagnostic to identify all faults with your Nothing Phone before any repair begins.' },
]

const whyChoosePoints = [
  { title: 'All Nothing Phone Models', body: 'We repair Nothing Phone (1) through to the latest (3a) and (3a) Pro. The unique Glyph Interface and transparent design are handled with care.' },
  { title: 'Lifetime Warranty', body: 'All Nothing Phone repairs come with a lifetime warranty on parts and labour. Same fault returns? We fix it free.' },
  { title: 'Glyph Interface Preserved', body: 'Nothing Phone\'s iconic Glyph LED system is carefully preserved during all repairs. We test Glyph functionality after every screen and back panel repair.' },
  { title: 'Cheapest Price Guaranteed', body: 'We match any genuine lower written quote on Nothing Phone repairs in Melbourne.' },
  { title: 'Free Diagnostics', body: 'Walk in for a free Nothing Phone diagnostic — no obligation to proceed with repair.' },
  { title: 'Open 7 Days', body: 'Braybrook and Spotswood stores open 9am–9pm every day. No appointment ever required.' },
]

export default function NothingPhoneRepairMelbournePage() {
  return (
    <>
      <SchemaScript schema={[localBusinessSchema, serviceSchema, faqSchema]} />

      <nav aria-label="Breadcrumb" className="bg-gray-surface border-b border-gray-border py-3">
        <div className="container-page">
          <ol className="flex items-center gap-2 text-sm text-charcoal-light">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal font-medium">Nothing Phone Repair Melbourne</li>
          </ol>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Nothing Phone Repair Melbourne</h1>
            <p className="text-xl text-gray-300 mb-6">Nothing Phone (3a) · (2a) · (2) · (1) · Glyph Safe · Lifetime Warranty</p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Professional Nothing Phone repairs in Melbourne. Cracked screen, failed battery, or
              broken charging port on your Nothing Phone — walk in for on-the-spot repair with
              careful Glyph Interface preservation, lifetime warranty, and cheapest price guarantee.
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
            {[{ label: '6 Models', sub: 'Supported' }, { label: '6 Repairs', sub: 'Available' }, { label: 'Glyph', sub: 'Interface Safe' }, { label: 'Lifetime', sub: 'Warranty' }].map((stat) => (
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
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Nothing Phone Models We Repair</h2>
            <p className="text-charcoal-light text-lg">All Nothing Phone models welcome — Glyph Interface preserved.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Nothing Phone Repair Services &amp; Pricing</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8 text-center">Why Choose iTech Repairs for Nothing Phone?</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Nothing Phone Repair FAQ</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Your Nothing Phone Repaired Today?</h2>
          <p className="text-lg text-red-100 mb-8 max-w-xl mx-auto">Walk in to our Braybrook or Spotswood store — no appointment needed. On-the-spot Nothing Phone repairs with lifetime warranty.</p>
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
