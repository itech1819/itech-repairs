import type { Metadata } from 'next'
import Link from 'next/link'
import { business } from '@/data'
import { generateFAQSchema } from '@/lib/seo'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'
import { primaryLocation } from '@/data'

export const metadata: Metadata = {
  title: 'Sony Phone Repair Melbourne | Xperia Screen & Battery | iTech Repairs',
  description:
    'Expert Sony Xperia phone repair in Melbourne. Screen replacement, battery replacement, charging port and camera repair. Lifetime warranty. Walk in to Braybrook or Spotswood.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/sony-phone-repair-melbourne',
  },
  openGraph: {
    title: 'Sony Phone Repair Melbourne | Xperia Screen & Battery | iTech Repairs',
    description: 'Expert Sony Xperia phone repair in Melbourne. Screen replacement, battery, charging port and camera repair. Lifetime warranty. Walk in today.',
    url: 'https://www.itechrepairs.com.au/sony-phone-repair-melbourne',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Sony Xperia Phone Repair Melbourne',
  description: 'Expert Sony Xperia phone repair in Melbourne. Screen repair, battery replacement, charging port repair and camera repair for Xperia 1, 5, and 10 series.',
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
  serviceType: 'Sony Xperia Repair',
}

const faqs = [
  {
    question: 'How much does Sony Xperia screen repair cost?',
    answer: 'Sony Xperia screen repair prices depend on the model. The Xperia 1 VI with its large 4K OLED display costs more to repair than the compact Xperia 5 VI or Xperia 10 VI. Call us for a free quote specific to your model.',
    category: 'general',
  },
  {
    question: 'What Sony Xperia models do you repair?',
    answer: 'We repair Sony Xperia 1 VI, Xperia 5 VI, Xperia 10 VI, and previous generation Xperia models. If you have an older Xperia model, call us to check parts availability.',
    category: 'general',
  },
  {
    question: 'How long does Sony Xperia repair take?',
    answer: 'Most Sony Xperia screen and battery repairs are completed on the spot in 30–60 minutes. Walk in to our Braybrook or Spotswood store any day between 9am and 9pm.',
    category: 'general',
  },
  {
    question: 'Is there a warranty on Sony Xperia repairs?',
    answer: 'Yes — all Sony Xperia repairs come with a lifetime warranty on parts and labour. If the same fault returns after our repair, we fix it free.',
    category: 'general',
  },
  {
    question: 'Can you fix Sony Xperia camera issues?',
    answer: 'Yes. Sony Xperia phones are renowned for their professional-grade cameras. We repair or replace damaged camera modules to restore the full photo and video capabilities your Xperia is known for.',
    category: 'general',
  },
  {
    question: 'Do I need an appointment for Sony repair?',
    answer: 'No appointment needed. Walk in any time between 9am and 9pm, 7 days a week. We offer a free diagnostic before any repair work begins.',
    category: 'general',
  },
]

const faqSchema = generateFAQSchema(faqs)

const models = [
  { name: 'Sony Xperia 1 VI', slug: 'sony-xperia-1-vi' },
  { name: 'Sony Xperia 5 VI', slug: 'sony-xperia-5-vi' },
  { name: 'Sony Xperia 10 VI', slug: 'sony-xperia-10-vi' },
  { name: 'Sony Xperia 1 V', slug: 'sony-xperia-1-v' },
  { name: 'Sony Xperia 5 V', slug: 'sony-xperia-5-v' },
  { name: 'Sony Xperia 10 V', slug: 'sony-xperia-10-v' },
  { name: 'Sony Xperia 1 IV', slug: 'sony-xperia-1-iv' },
  { name: 'Sony Xperia Pro-I', slug: 'sony-xperia-pro-i' },
  { name: 'Sony Xperia 5 IV', slug: 'sony-xperia-5-iv' },
  { name: 'Sony Xperia 5 III', slug: 'sony-xperia-5-iii' },
  { name: 'Sony Xperia 1 III', slug: 'sony-xperia-1-iii' },
  { name: 'Sony Xperia 1 II', slug: 'sony-xperia-1-ii' },
  { name: 'Sony Xperia 10 IV', slug: 'sony-xperia-10-iv' },
  { name: 'Sony Xperia 10 III', slug: 'sony-xperia-10-iii' },
  { name: 'Sony Xperia 10 II', slug: 'sony-xperia-10-ii' },
]

const repairServices = [
  { name: 'Screen Repair', price: 'From $119', time: '30–60 min', description: 'Replace cracked or damaged Xperia screens. High-quality OLED replacements for Xperia 1 and 5 series to preserve 4K display quality.' },
  { name: 'Battery Replacement', price: 'From $89', time: '30–45 min', description: 'Restore all-day battery life on any Sony Xperia. Fix rapid drain, failure to hold charge, or swollen batteries.' },
  { name: 'Charging Port Repair', price: 'From $79', time: '20–30 min', description: 'Repair damaged USB-C charging ports on all Xperia models. Includes thorough cleaning and testing.' },
  { name: 'Camera Repair', price: 'From $99', time: '30–45 min', description: 'Repair or replace Sony Xperia camera modules. Restore the professional-grade photo quality Xperia is famous for.' },
  { name: 'Water Damage Repair', price: 'From $99', time: '30–60 min', description: 'Professional water damage assessment and repair for Sony Xperia phones despite their IP65/68 water resistance ratings.' },
  { name: 'Full Diagnostic', price: 'Free', time: '15 min', description: 'Free comprehensive diagnostic to identify all faults with your Sony Xperia before any repair begins.' },
]

const whyChoosePoints = [
  { title: 'Xperia 1, 5 & 10 Series', body: 'We repair all current Sony Xperia models including the flagship Xperia 1 VI with its 4K OLED display through to the compact Xperia 5 and affordable Xperia 10 series.' },
  { title: 'Lifetime Warranty', body: 'All Sony Xperia repairs come with a lifetime warranty on parts and labour. Same fault returns? We fix it free.' },
  { title: 'Camera Expertise', body: 'Sony Xperia cameras are among the best on Android. Our technicians handle Xperia camera repairs with the precision these devices deserve.' },
  { title: 'Cheapest Price Guaranteed', body: 'We offer the most competitive Sony Xperia repair prices in Melbourne. We\'ll match any genuine lower written quote.' },
  { title: 'Free Diagnostics', body: 'Walk in for a free Xperia diagnostic. We identify the problem before you commit to any repair.' },
  { title: 'Open 7 Days', body: 'Braybrook and Spotswood stores open 7 days from 9am to 9pm. Walk in any time — no appointment needed.' },
]

export default function SonyPhoneRepairMelbournePage() {
  return (
    <>
      <SchemaScript schema={[localBusinessSchema, serviceSchema, faqSchema]} />

      <nav aria-label="Breadcrumb" className="bg-gray-surface border-b border-gray-border py-3">
        <div className="container-page">
          <ol className="flex items-center gap-2 text-sm text-charcoal-light">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal font-medium">Sony Xperia Phone Repair Melbourne</li>
          </ol>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Sony Xperia Phone Repair Melbourne</h1>
            <p className="text-xl text-gray-300 mb-6">Xperia 1 · Xperia 5 · Xperia 10 · All Series · Lifetime Warranty</p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Professional Sony Xperia repairs in Melbourne. Whether you have a cracked Xperia 1 VI
              screen, degraded battery in your Xperia 5, or charging issues — walk in for on-the-spot
              repair with a lifetime warranty and cheapest price guarantee.
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
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Sony Xperia Models We Repair</h2>
            <p className="text-charcoal-light text-lg">All Sony Xperia models welcome.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Sony Xperia Repair Services &amp; Pricing</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8 text-center">Why Choose iTech Repairs for Sony Xperia?</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Sony Xperia Repair FAQ</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Your Sony Xperia Repaired Today?</h2>
          <p className="text-lg text-red-100 mb-8 max-w-xl mx-auto">Walk in to our Braybrook or Spotswood store — no appointment needed. On-the-spot Xperia repairs with lifetime warranty.</p>
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
