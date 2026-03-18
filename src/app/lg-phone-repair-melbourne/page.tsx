import type { Metadata } from 'next'
import Link from 'next/link'
import { business } from '@/data'
import { generateFAQSchema } from '@/lib/seo'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'
import { primaryLocation } from '@/data'

export const metadata: Metadata = {
  title: 'LG Phone Repair Melbourne | Screen & Battery | iTech Repairs',
  description:
    'Expert LG phone repair in Melbourne. Screen replacement, battery replacement, and charging port repair for LG G8, V60, Velvet, and Wing. Lifetime warranty. Walk in today.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/lg-phone-repair-melbourne',
  },
  openGraph: {
    title: 'LG Phone Repair Melbourne | Screen & Battery | iTech Repairs',
    description: 'Expert LG phone repair in Melbourne. Screen replacement, battery and charging port repair. Lifetime warranty. Walk in today.',
    url: 'https://www.itechrepairs.com.au/lg-phone-repair-melbourne',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'LG Phone Repair Melbourne',
  description: 'Expert LG phone repair in Melbourne. Screen repair, battery replacement, and charging port repair for LG G, V, Velvet, and Wing series phones.',
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
  serviceType: 'LG Phone Repair',
}

const faqs = [
  {
    question: 'Do you still repair LG phones even though LG stopped making them?',
    answer: 'Yes — LG discontinued its smartphone business in 2021, but we still repair all popular LG models. We stock quality parts for LG G8, V60, Velvet, Wing, and other models. LG phones can last many more years with proper repair and maintenance.',
    category: 'general',
  },
  {
    question: 'How much does LG screen repair cost in Melbourne?',
    answer: 'LG screen repair prices depend on the model. LG V60 and G8 OLED screens cost more to repair than LG Velvet LCD screens. Call us for a free quote for your specific LG model.',
    category: 'general',
  },
  {
    question: 'What LG models do you repair?',
    answer: 'We repair LG G8 ThinQ, V60 ThinQ, Velvet, Wing, G7, V50, and other popular LG models. Since LG stopped production in 2021, parts availability may vary — call us to confirm for your specific model.',
    category: 'general',
  },
  {
    question: 'How long does LG phone repair take?',
    answer: 'Most LG screen and battery repairs are completed on the spot in 15–30 minutes. Walk in any day between 9am and 9pm — no appointment needed.',
    category: 'general',
  },
  {
    question: 'Is there a warranty on LG phone repairs?',
    answer: 'Yes — all LG repairs come with a lifetime warranty on parts and labour. If the same fault returns after our repair, we fix it free.',
    category: 'general',
  },
  {
    question: 'Can you repair the LG Wing dual-screen phone?',
    answer: 'Yes, we can assess and repair the LG Wing. The dual rotating screen design is more complex than standard phones. We\'ll provide a detailed assessment and quote before any repair work begins.',
    category: 'general',
  },
]

const faqSchema = generateFAQSchema(faqs)

const models = [
  { name: 'LG G8 ThinQ', slug: 'lg-g8-thinq' },
  { name: 'LG V60 ThinQ', slug: 'lg-v60-thinq' },
  { name: 'LG Velvet', slug: 'lg-velvet' },
  { name: 'LG Wing', slug: 'lg-wing' },
  { name: 'LG G7 ThinQ', slug: 'lg-g7-thinq' },
  { name: 'LG V50 ThinQ', slug: 'lg-v50-thinq' },
  { name: 'LG K52', slug: 'lg-k52' },
  { name: 'LG K42', slug: 'lg-k42' },
  { name: 'LG G6', slug: 'lg-g6' },
  { name: 'LG G5', slug: 'lg-g5' },
  { name: 'LG V40 ThinQ', slug: 'lg-v40-thinq' },
  { name: 'LG V30', slug: 'lg-v30' },
  { name: 'LG V20', slug: 'lg-v20' },
  { name: 'LG K61', slug: 'lg-k61' },
  { name: 'LG K51', slug: 'lg-k51' },
  { name: 'LG K41', slug: 'lg-k41' },
]

const repairServices = [
  { name: 'Screen Repair', price: 'From $79', time: '15–30 min', description: 'Replace cracked or broken LG screens. OLED replacements available for premium G and V series models.' },
  { name: 'Battery Replacement', price: 'From $69', time: '15–20 min', description: 'Replace worn or swollen LG batteries. Restore all-day battery life on any LG model.' },
  { name: 'Charging Port Repair', price: 'From $69', time: '20–30 min', description: 'Fix damaged USB-C or micro-USB charging ports on all LG models.' },
  { name: 'Camera Repair', price: 'From $79', time: '20–30 min', description: 'Repair or replace cameras on LG phones. Restore full photo and video capability.' },
  { name: 'Water Damage Repair', price: 'From $89', time: '30–60 min', description: 'Professional assessment and repair for LG phones exposed to water or liquid damage.' },
  { name: 'Full Diagnostic', price: 'Free', time: '15 min', description: 'Free diagnostic to identify all faults with your LG phone before any repair begins.' },
]

const whyChoosePoints = [
  { title: 'All LG Models Still Supported', body: 'Even though LG stopped making phones in 2021, we still repair all popular LG models. Your LG G8, V60, or Velvet can have years of life left in it.' },
  { title: 'Lifetime Warranty', body: 'All LG repairs include a lifetime warranty. Same fault returns? We fix it free — guaranteed.' },
  { title: 'Parts Availability', body: 'We maintain stock of quality parts for the most common LG models. Call ahead to confirm availability for your specific model.' },
  { title: 'Cheapest Price Guaranteed', body: 'We offer competitive LG repair prices and will match any genuine lower written quote.' },
  { title: 'Free Diagnostics', body: 'Walk in for a free LG diagnostic. We\'ll identify the issue and quote you before any work begins.' },
  { title: 'Open 7 Days', body: 'Braybrook and Spotswood stores open 9am–9pm every day. No appointment ever required.' },
]

export default function LgPhoneRepairMelbournePage() {
  return (
    <>
      <SchemaScript schema={[localBusinessSchema, serviceSchema, faqSchema]} />

      <nav aria-label="Breadcrumb" className="bg-gray-surface border-b border-gray-border py-3">
        <div className="container-page">
          <ol className="flex items-center gap-2 text-sm text-charcoal-light">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal font-medium">LG Phone Repair Melbourne</li>
          </ol>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">LG Phone Repair Melbourne</h1>
            <p className="text-xl text-gray-300 mb-6">LG G8 · V60 · Velvet · Wing · All Models · Lifetime Warranty</p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Professional LG phone repairs in Melbourne. Even though LG discontinued smartphones in
              2021, your LG G8, V60, Velvet, or Wing can have years of life left — we fix screens,
              batteries, and more with a lifetime warranty and cheapest price guarantee.
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
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">LG Models We Repair</h2>
            <p className="text-charcoal-light text-lg">All popular LG phone models welcome.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">LG Repair Services &amp; Pricing</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8 text-center">Why Choose iTech Repairs for LG?</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">LG Phone Repair FAQ</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Your LG Phone Repaired Today?</h2>
          <p className="text-lg text-red-100 mb-8 max-w-xl mx-auto">Walk in to our Braybrook or Spotswood store — no appointment needed. On-the-spot LG repairs with lifetime warranty.</p>
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
