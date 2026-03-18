import type { Metadata } from 'next'
import Link from 'next/link'
import { business } from '@/data'
import { generateFAQSchema } from '@/lib/seo'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'
import { primaryLocation } from '@/data'

export const metadata: Metadata = {
  title: 'Asus Phone Repair Melbourne | ROG Phone & ZenFone | iTech Repairs',
  description:
    'Expert Asus phone repair in Melbourne. Screen replacement, battery and charging port repair for ROG Phone, ZenFone, and all Asus phones. Lifetime warranty. Walk in today.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/asus-phone-repair-melbourne',
  },
  openGraph: {
    title: 'Asus Phone Repair Melbourne | ROG Phone & ZenFone | iTech Repairs',
    description: 'Expert Asus phone repair in Melbourne. Screen replacement, battery and charging port repair for ROG Phone and ZenFone models. Lifetime warranty. Walk in today.',
    url: 'https://www.itechrepairs.com.au/asus-phone-repair-melbourne',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Asus Phone Repair Melbourne',
  description: 'Expert Asus phone repair in Melbourne. Screen repair, battery replacement, and charging port repair for ROG Phone, ZenFone, and all Asus smartphone models.',
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
  serviceType: 'Asus Phone Repair',
}

const faqs = [
  {
    question: 'How much does Asus ROG Phone screen repair cost?',
    answer: 'Asus ROG Phone screen repair is more expensive than standard phones due to the large, high-refresh-rate AMOLED gaming displays. The ROG Phone 8 and 8 Pro screens are large format with special gaming features. Call us for a specific quote for your ROG Phone model.',
    category: 'general',
  },
  {
    question: 'Do you repair Asus ZenFone phones?',
    answer: 'Yes — we repair all Asus ZenFone models including ZenFone 11 Ultra, ZenFone 10, and older ZenFone models. The compact ZenFone 10 is particularly popular for its small size, and we can repair screens, batteries, and more.',
    category: 'general',
  },
  {
    question: 'How long does Asus phone repair take?',
    answer: 'Most Asus screen and battery repairs are completed on the spot in 15–60 minutes depending on the model. ROG Phone repairs may take slightly longer due to their complex gaming hardware. Walk in any day between 9am and 9pm.',
    category: 'general',
  },
  {
    question: 'Is there a warranty on Asus phone repairs?',
    answer: 'Yes — all Asus repairs at iTech Repairs come with a lifetime warranty on parts and labour. If the same fault returns, we fix it free.',
    category: 'general',
  },
  {
    question: 'Can you fix gaming features on Asus ROG Phone?',
    answer: 'We focus on hardware repairs such as screens, batteries, and charging ports. After our repairs, all gaming features including the AeroActive Cooler port and shoulder triggers are tested to ensure full functionality is maintained.',
    category: 'general',
  },
  {
    question: 'Do I need an appointment for Asus repair?',
    answer: 'No appointment needed. Walk in any time between 9am and 9pm, 7 days a week. We offer a free diagnostic before any Asus repair work begins.',
    category: 'general',
  },
]

const faqSchema = generateFAQSchema(faqs)

const models = [
  { name: 'Asus ROG Phone 8 Pro', slug: 'asus-rog-phone-8-pro' },
  { name: 'Asus ROG Phone 8', slug: 'asus-rog-phone-8' },
  { name: 'Asus ROG Phone 7 Pro', slug: 'asus-rog-phone-7-pro' },
  { name: 'Asus ZenFone 11 Ultra', slug: 'asus-zenfone-11-ultra' },
  { name: 'Asus ZenFone 10', slug: 'asus-zenfone-10' },
  { name: 'Asus ZenFone 9', slug: 'asus-zenfone-9' },
  { name: 'Asus ROG Phone 6 Pro', slug: 'asus-rog-phone-6-pro' },
  { name: 'Asus ROG Phone 7', slug: 'asus-rog-phone-7' },
  { name: 'Asus ROG Phone 6', slug: 'asus-rog-phone-6' },
  { name: 'Asus ROG Phone 5s', slug: 'asus-rog-phone-5s' },
  { name: 'Asus ZenFone 8', slug: 'asus-zenfone-8' },
  { name: 'Asus ZenFone 7', slug: 'asus-zenfone-7' },
]

const repairServices = [
  { name: 'Screen Repair', price: 'From $99', time: '30–60 min', description: 'Replace cracked or damaged Asus screens. High-refresh-rate AMOLED replacements for ROG Phone gaming models.' },
  { name: 'Battery Replacement', price: 'From $89', time: '30–45 min', description: 'Replace worn Asus batteries. ROG Phone models feature large 6000mAh batteries — we restore full capacity.' },
  { name: 'Charging Port Repair', price: 'From $79', time: '20–30 min', description: 'Repair damaged USB-C charging ports including the side-mounted charging port unique to ROG Phone models.' },
  { name: 'Gaming Phone Repair', price: 'From $99', time: '30–60 min', description: 'Specialised assessment and repair for Asus ROG Phone gaming hardware including shoulder triggers and cooling vents.' },
  { name: 'Camera Repair', price: 'From $89', time: '20–30 min', description: 'Repair or replace front and rear cameras on all Asus ZenFone and ROG Phone models.' },
  { name: 'Full Diagnostic', price: 'Free', time: '15 min', description: 'Free comprehensive diagnostic to identify all faults with your Asus phone before any repair begins.' },
]

const whyChoosePoints = [
  { title: 'ROG Phone & ZenFone Specialists', body: 'We repair both Asus\'s gaming ROG Phone range and the compact ZenFone series. Gaming phone repairs require extra precision — our technicians are up to the task.' },
  { title: 'Lifetime Warranty', body: 'All Asus repairs include a lifetime warranty on parts and labour. Same fault returns? We fix it free.' },
  { title: 'Gaming Performance Preserved', body: 'We ensure all gaming features are tested after repair. Your ROG Phone\'s 165Hz display, shoulder triggers, and AeroActive Cooler port will all be checked.' },
  { title: 'Cheapest Price Guaranteed', body: 'We match any genuine lower written quote on Asus phone repairs in Melbourne.' },
  { title: 'Free Diagnostics', body: 'Walk in for a free Asus diagnostic. We\'ll identify the problem before you commit to any repair.' },
  { title: 'Open 7 Days', body: 'Braybrook and Spotswood stores open 9am–9pm every day. No appointment needed.' },
]

export default function AsusPhoneRepairMelbournePage() {
  return (
    <>
      <SchemaScript schema={[localBusinessSchema, serviceSchema, faqSchema]} />

      <nav aria-label="Breadcrumb" className="bg-gray-surface border-b border-gray-border py-3">
        <div className="container-page">
          <ol className="flex items-center gap-2 text-sm text-charcoal-light">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal font-medium">Asus Phone Repair Melbourne</li>
          </ol>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Asus Phone Repair Melbourne</h1>
            <p className="text-xl text-gray-300 mb-6">ROG Phone · ZenFone · All Models · Lifetime Warranty</p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Professional Asus phone repairs in Melbourne. Cracked ROG Phone 8 screen, dead ZenFone
              10 battery, or damaged charging port — walk in for on-the-spot repair with a lifetime
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
            {[{ label: '7+ Models', sub: 'Supported' }, { label: '6 Repairs', sub: 'Available' }, { label: 'Cheapest', sub: 'Price Guaranteed' }, { label: 'Lifetime', sub: 'Warranty' }].map((stat) => (
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
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Asus Models We Repair</h2>
            <p className="text-charcoal-light text-lg">ROG Phone gaming phones and ZenFone models all welcome.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Asus Repair Services &amp; Pricing</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8 text-center">Why Choose iTech Repairs for Asus?</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Asus Phone Repair FAQ</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Your Asus Phone Repaired Today?</h2>
          <p className="text-lg text-red-100 mb-8 max-w-xl mx-auto">Walk in to our Braybrook or Spotswood store — no appointment needed. On-the-spot Asus repairs with lifetime warranty.</p>
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
