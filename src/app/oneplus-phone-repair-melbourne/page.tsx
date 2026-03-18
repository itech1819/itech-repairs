import type { Metadata } from 'next'
import Link from 'next/link'
import { business } from '@/data'
import { generateFAQSchema } from '@/lib/seo'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'
import { primaryLocation } from '@/data'

export const metadata: Metadata = {
  title: 'OnePlus Phone Repair Melbourne | Screen & Battery | iTech Repairs',
  description:
    'Expert OnePlus phone repair in Melbourne. Screen replacement, battery replacement, charging port and back glass repair. Lifetime warranty. Walk in Braybrook or Spotswood.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/oneplus-phone-repair-melbourne',
  },
  openGraph: {
    title: 'OnePlus Phone Repair Melbourne | Screen & Battery | iTech Repairs',
    description: 'Expert OnePlus phone repair in Melbourne. Screen replacement, battery, charging port and back glass repair. Lifetime warranty. Walk in today.',
    url: 'https://www.itechrepairs.com.au/oneplus-phone-repair-melbourne',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'OnePlus Phone Repair Melbourne',
  description: 'Expert OnePlus phone repair in Melbourne. Screen repair, battery replacement, charging port repair, and back glass repair for all OnePlus and Nord models.',
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
  serviceType: 'OnePlus Phone Repair',
}

const faqs = [
  {
    question: 'How much does OnePlus screen repair cost in Melbourne?',
    answer: 'OnePlus screen repair prices vary by model. The OnePlus 13 and 12 with large curved AMOLED displays cost more to repair than the OnePlus Nord series. We provide a free upfront quote before any work begins.',
    category: 'general',
  },
  {
    question: 'What OnePlus models do you repair?',
    answer: 'We repair all popular OnePlus models including OnePlus 13, OnePlus 12, OnePlus 11, Nord 4, Nord CE 4, and older models. Call us to check parts availability for your specific model.',
    category: 'general',
  },
  {
    question: 'How long does OnePlus repair take?',
    answer: 'Most OnePlus screen and battery repairs are completed on the spot in 15–30 minutes. Walk in any day between 9am and 9pm — no appointment needed.',
    category: 'general',
  },
  {
    question: 'Is there a warranty on OnePlus repairs?',
    answer: 'Yes — all OnePlus repairs at iTech Repairs come with a lifetime warranty on parts and labour. If the same fault returns, we fix it free.',
    category: 'general',
  },
  {
    question: 'Can you fix a cracked OnePlus back glass?',
    answer: 'Yes. Many OnePlus flagship phones feature premium glass backs that crack on impact. We can replace cracked or shattered back glass on OnePlus 13, 12, 11, and other models.',
    category: 'general',
  },
  {
    question: 'My OnePlus charges slowly — can you help?',
    answer: 'Slow charging can be caused by a faulty charging port, damaged cable, or degraded battery. OnePlus is known for its Warp/SuperVOOC fast charging — we\'ll diagnose and restore your fast charging capabilities.',
    category: 'general',
  },
]

const faqSchema = generateFAQSchema(faqs)

const models = [
  { name: 'OnePlus 13', slug: 'oneplus-13' },
  { name: 'OnePlus 12', slug: 'oneplus-12' },
  { name: 'OnePlus 11', slug: 'oneplus-11' },
  { name: 'OnePlus 10 Pro', slug: 'oneplus-10-pro' },
  { name: 'OnePlus Nord 4', slug: 'oneplus-nord-4' },
  { name: 'OnePlus Nord CE 4', slug: 'oneplus-nord-ce-4' },
  { name: 'OnePlus Nord 3', slug: 'oneplus-nord-3' },
  { name: 'OnePlus Nord CE 3', slug: 'oneplus-nord-ce-3' },
  { name: 'OnePlus 13R', slug: 'oneplus-13r' },
  { name: 'OnePlus 12R', slug: 'oneplus-12r' },
  { name: 'OnePlus 11R', slug: 'oneplus-11r' },
  { name: 'OnePlus 10T', slug: 'oneplus-10t' },
  { name: 'OnePlus 9 Pro', slug: 'oneplus-9-pro' },
  { name: 'OnePlus 9', slug: 'oneplus-9' },
  { name: 'OnePlus 8T', slug: 'oneplus-8t' },
  { name: 'OnePlus 8 Pro', slug: 'oneplus-8-pro' },
  { name: 'OnePlus 8', slug: 'oneplus-8' },
  { name: 'OnePlus 7T Pro', slug: 'oneplus-7t-pro' },
  { name: 'OnePlus 7T', slug: 'oneplus-7t' },
  { name: 'OnePlus Nord 2T', slug: 'oneplus-nord-2t' },
  { name: 'OnePlus Nord CE 2', slug: 'oneplus-nord-ce-2' },
  { name: 'OnePlus Nord CE 2 Lite', slug: 'oneplus-nord-ce-2-lite' },
]

const repairServices = [
  { name: 'Screen Repair', price: 'From $89', time: '15–30 min', description: 'Replace cracked or broken OnePlus screens. Quality AMOLED replacements for flagship models to preserve 120Hz display performance.' },
  { name: 'Battery Replacement', price: 'From $79', time: '15–20 min', description: 'Replace worn OnePlus batteries. Restore SuperVOOC fast charging capability and all-day battery life.' },
  { name: 'Charging Port Repair', price: 'From $69', time: '20–30 min', description: 'Repair damaged USB-C charging ports on all OnePlus models. Includes testing of fast charging functionality.' },
  { name: 'Back Glass Repair', price: 'From $79', time: '20–30 min', description: 'Replace cracked or shattered back glass on OnePlus flagship models.' },
  { name: 'Camera Repair', price: 'From $89', time: '20–30 min', description: 'Repair or replace front and rear cameras on all OnePlus models.' },
  { name: 'Full Diagnostic', price: 'Free', time: '15 min', description: 'Free comprehensive diagnostic to identify all faults before any OnePlus repair begins.' },
]

const whyChoosePoints = [
  { title: 'Flagship & Nord Series', body: 'We repair the full OnePlus lineup from the premium OnePlus 13 and 12 to the affordable Nord CE series — all models covered.' },
  { title: 'Lifetime Warranty', body: 'Every OnePlus repair includes a lifetime warranty. Same fault returns? We fix it free — guaranteed.' },
  { title: 'Fast Charging Preserved', body: 'OnePlus is famous for Warp Charge and SuperVOOC. Our repairs maintain fast charging capability — we don\'t just replace parts, we restore full functionality.' },
  { title: 'Cheapest Price Guaranteed', body: 'Most competitive OnePlus repair prices in Melbourne. We match any genuine lower written quote.' },
  { title: 'Free Diagnostics', body: 'Walk in for a free OnePlus diagnostic. You only pay if we fix it.' },
  { title: 'Open 7 Days', body: 'Both stores open every day from 9am to 9pm. No appointment ever required.' },
]

export default function OnePlusPhoneRepairMelbournePage() {
  return (
    <>
      <SchemaScript schema={[localBusinessSchema, serviceSchema, faqSchema]} />

      <nav aria-label="Breadcrumb" className="bg-gray-surface border-b border-gray-border py-3">
        <div className="container-page">
          <ol className="flex items-center gap-2 text-sm text-charcoal-light">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal font-medium">OnePlus Phone Repair Melbourne</li>
          </ol>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">OnePlus Phone Repair Melbourne</h1>
            <p className="text-xl text-gray-300 mb-6">OnePlus 13 · 12 · Nord 4 · Nord CE · All Models · Lifetime Warranty</p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Professional OnePlus phone repairs in Melbourne. Cracked OnePlus 13 screen, dead battery
              in your Nord 4, or charging port damage — walk in for on-the-spot repair with lifetime
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
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">OnePlus Models We Repair</h2>
            <p className="text-charcoal-light text-lg">All OnePlus flagship and Nord series phones welcome.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">OnePlus Repair Services &amp; Pricing</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8 text-center">Why Choose iTech Repairs for OnePlus?</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">OnePlus Repair FAQ</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Your OnePlus Repaired Today?</h2>
          <p className="text-lg text-red-100 mb-8 max-w-xl mx-auto">Walk in to our Braybrook or Spotswood store — no appointment needed. On-the-spot OnePlus repairs with lifetime warranty.</p>
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
