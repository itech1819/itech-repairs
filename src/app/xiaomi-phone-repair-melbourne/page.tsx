import type { Metadata } from 'next'
import Link from 'next/link'
import { business } from '@/data'
import { generateFAQSchema } from '@/lib/seo'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'
import { primaryLocation } from '@/data'

export const metadata: Metadata = {
  title: 'Xiaomi Phone Repair Melbourne | Screen & Battery | iTech Repairs',
  description:
    'Professional Xiaomi and Mi phone repair in Melbourne. Screen replacement, battery, charging port and back glass repair for all Xiaomi and Redmi models. Lifetime warranty, walk-in welcome.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/xiaomi-phone-repair-melbourne',
  },
  openGraph: {
    title: 'Xiaomi Phone Repair Melbourne | Screen & Battery | iTech Repairs',
    description: 'Professional Xiaomi and Mi phone repair in Melbourne. Screen replacement, battery, charging port and back glass repair for all Xiaomi and Redmi models. Lifetime warranty, walk-in welcome.',
    url: 'https://www.itechrepairs.com.au/xiaomi-phone-repair-melbourne',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Xiaomi Phone Repair Melbourne',
  description:
    'Expert Xiaomi phone repair services in Melbourne. Screen repair, battery replacement, charging port repair, and back glass repair for all Xiaomi, Redmi, and POCO models.',
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
  serviceType: 'Xiaomi Phone Repair',
}

const faqs = [
  {
    question: 'How much does Xiaomi screen repair cost in Melbourne?',
    answer: 'Xiaomi screen repair prices vary by model. Xiaomi 14 Ultra and flagship models with curved AMOLED displays cost more than Redmi Note or POCO screens. We give a free upfront quote before any work begins.',
    category: 'general',
  },
  {
    question: 'Do you repair Redmi and POCO phones?',
    answer: 'Yes — we repair all Xiaomi sub-brands including Redmi, POCO, and Mi. Whether you have a Redmi Note 13, POCO X6 Pro, or Xiaomi 14 Ultra, we can help.',
    category: 'general',
  },
  {
    question: 'How long does Xiaomi repair take?',
    answer: 'Most Xiaomi screen and battery repairs are completed on the spot in 15–30 minutes. Walk in any time between 9am and 9pm, 7 days a week.',
    category: 'general',
  },
  {
    question: 'Is there a warranty on Xiaomi repairs?',
    answer: 'Yes — all Xiaomi repairs come with a lifetime warranty on parts and labour. If the same issue recurs after our repair, we fix it free of charge.',
    category: 'general',
  },
  {
    question: 'Can you fix a cracked back glass on a Xiaomi phone?',
    answer: 'Yes. Many Xiaomi flagship phones have glass backs that can crack on impact. We repair or replace back glass on Xiaomi 14, 13 series, and other models with glass backs.',
    category: 'general',
  },
  {
    question: 'Do I need to book an appointment?',
    answer: 'No booking required. Simply walk in to our Braybrook or Spotswood store any day between 9am and 9pm for a free diagnostic and same-day repair.',
    category: 'general',
  },
]

const faqSchema = generateFAQSchema(faqs)

const models = [
  { name: 'Xiaomi 14 Ultra', slug: 'xiaomi-14-ultra' },
  { name: 'Xiaomi 14', slug: 'xiaomi-14' },
  { name: 'Xiaomi 13 Pro', slug: 'xiaomi-13-pro' },
  { name: 'Xiaomi 13', slug: 'xiaomi-13' },
  { name: 'Redmi Note 13 Pro', slug: 'redmi-note-13-pro' },
  { name: 'Redmi Note 13', slug: 'redmi-note-13' },
  { name: 'Redmi 13C', slug: 'redmi-13c' },
  { name: 'POCO X6 Pro', slug: 'poco-x6-pro' },
  { name: 'POCO X6', slug: 'poco-x6' },
  { name: 'POCO M6 Pro', slug: 'poco-m6-pro' },
  { name: 'Xiaomi 13 Lite', slug: 'xiaomi-13-lite' },
  { name: 'Xiaomi 12 Pro', slug: 'xiaomi-12-pro' },
  { name: 'Xiaomi 12', slug: 'xiaomi-12' },
  { name: 'Xiaomi 11 Ultra', slug: 'xiaomi-11-ultra' },
  { name: 'Xiaomi 11', slug: 'xiaomi-11' },
  { name: 'Xiaomi 10T Pro', slug: 'xiaomi-10t-pro' },
  { name: 'Xiaomi 10T', slug: 'xiaomi-10t' },
  { name: 'Redmi Note 12 Pro', slug: 'redmi-note-12-pro' },
  { name: 'Redmi Note 12', slug: 'redmi-note-12' },
  { name: 'Redmi Note 11 Pro', slug: 'redmi-note-11-pro' },
  { name: 'Redmi Note 11', slug: 'redmi-note-11' },
  { name: 'Redmi Note 10 Pro', slug: 'redmi-note-10-pro' },
  { name: 'Redmi Note 10', slug: 'redmi-note-10' },
  { name: 'Redmi 10', slug: 'redmi-10' },
  { name: 'Redmi 10C', slug: 'redmi-10c' },
  { name: 'Redmi 9', slug: 'redmi-9' },
  { name: 'POCO X5 Pro', slug: 'poco-x5-pro' },
  { name: 'POCO X5', slug: 'poco-x5' },
  { name: 'POCO F5', slug: 'poco-f5' },
]

const repairServices = [
  { name: 'Screen Repair', price: 'From $79', time: '15–30 min', description: 'Cracked or damaged Xiaomi display replaced. We use quality AMOLED panels for flagship models to maintain true colour accuracy.' },
  { name: 'Battery Replacement', price: 'From $69', time: '15–20 min', description: 'Replace a worn Xiaomi battery to restore full-day battery life. Ideal for Redmi and POCO series with high-capacity batteries.' },
  { name: 'Charging Port Repair', price: 'From $69', time: '20–30 min', description: 'Repair or replace damaged USB-C charging ports on any Xiaomi, Redmi, or POCO device.' },
  { name: 'Back Glass Repair', price: 'From $79', time: '20–30 min', description: 'Restore the appearance of your Xiaomi flagship by replacing cracked or shattered back glass.' },
  { name: 'Camera Repair', price: 'From $79', time: '20–30 min', description: 'Fix blurry, cracked, or non-functioning cameras on Xiaomi and Redmi models.' },
  { name: 'Full Diagnostic', price: 'Free', time: '15 min', description: 'Free comprehensive diagnostic to identify all issues with your Xiaomi phone before any repair begins.' },
]

const whyChoosePoints = [
  {
    title: 'All Xiaomi Sub-Brands Covered',
    body: 'We repair Xiaomi, Redmi, POCO, and Mi branded devices. From budget Redmi phones to the flagship Xiaomi 14 Ultra — all models welcome.',
  },
  {
    title: 'Lifetime Warranty',
    body: 'Every Xiaomi repair comes with a lifetime warranty on parts and labour. If the same fault returns, we fix it free.',
  },
  {
    title: 'On-The-Spot Repairs',
    body: 'Most Xiaomi screen and battery replacements are done while you wait. 15–30 minutes for most jobs.',
  },
  {
    title: 'Cheapest Price Guaranteed',
    body: 'We offer the most competitive Xiaomi repair prices in Melbourne. We will match any genuine lower written quote.',
  },
  {
    title: 'Free Diagnostics',
    body: 'Bring in your Xiaomi phone and we will diagnose the problem for free. You decide whether to proceed with the repair.',
  },
  {
    title: 'Open 7 Days',
    body: 'Our Braybrook and Spotswood stores are open every day from 9am to 9pm. Walk in any time — no appointment needed.',
  },
]

export default function XiaomiPhoneRepairMelbournePage() {
  return (
    <>
      <SchemaScript schema={[localBusinessSchema, serviceSchema, faqSchema]} />

      <nav aria-label="Breadcrumb" className="bg-gray-surface border-b border-gray-border py-3">
        <div className="container-page">
          <ol className="flex items-center gap-2 text-sm text-charcoal-light">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal font-medium">Xiaomi Phone Repair Melbourne</li>
          </ol>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Xiaomi Phone Repair Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Xiaomi · Redmi · POCO · Mi · All Models · Lifetime Warranty
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Professional Xiaomi phone repairs in Melbourne. From cracked screens on your Xiaomi 14
              to battery issues on your Redmi Note 13 — we fix all Xiaomi brands on the spot with a
              lifetime warranty and cheapest price guarantee.
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

      <section className="bg-white border-b border-gray-border py-6">
        <div className="container-page">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { label: '10+ Models', sub: 'Supported' },
              { label: '6 Repairs', sub: 'Available' },
              { label: 'Cheapest', sub: 'Price Guaranteed' },
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

      <section className="section-padding">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Xiaomi Models We Repair</h2>
            <p className="text-charcoal-light text-lg">All Xiaomi, Redmi, and POCO phones welcome.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Xiaomi Repair Services &amp; Pricing</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8 text-center">Why Choose iTech Repairs for Xiaomi?</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Xiaomi Repair FAQ</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Your Xiaomi Phone Repaired Today?</h2>
          <p className="text-lg text-red-100 mb-8 max-w-xl mx-auto">
            Walk in to our Braybrook or Spotswood store — no appointment needed. On-the-spot Xiaomi
            repairs with lifetime warranty and cheapest price guaranteed.
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
