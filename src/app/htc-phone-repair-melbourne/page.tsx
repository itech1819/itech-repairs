import type { Metadata } from 'next'
import Link from 'next/link'
import { business } from '@/data'
import { generateFAQSchema } from '@/lib/seo'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'
import { primaryLocation } from '@/data'

export const metadata: Metadata = {
  title: 'HTC Phone Repair Melbourne | Screen & Battery | iTech Repairs',
  description:
    'Expert HTC phone repair in Melbourne. Screen replacement, battery replacement, and charging port repair for HTC U23 Pro, Desire series and all HTC phones. Lifetime warranty. Walk in today.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/htc-phone-repair-melbourne',
  },
  openGraph: {
    title: 'HTC Phone Repair Melbourne | Screen & Battery | iTech Repairs',
    description: 'Expert HTC phone repair in Melbourne. Screen replacement, battery and charging port repair. Lifetime warranty. Walk in today.',
    url: 'https://www.itechrepairs.com.au/htc-phone-repair-melbourne',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'HTC Phone Repair Melbourne',
  description: 'Expert HTC phone repair in Melbourne. Screen repair, battery replacement, and charging port repair for all HTC models.',
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
  serviceType: 'HTC Phone Repair',
}

const faqs = [
  {
    question: 'How much does HTC screen repair cost in Melbourne?',
    answer: 'HTC screen repair prices vary by model. The HTC U23 Pro features a large AMOLED display which costs more to replace than older HTC Desire LCD screens. Call us for a free specific quote for your HTC model.',
    category: 'general',
  },
  {
    question: 'What HTC models do you repair?',
    answer: 'We repair all popular HTC models including the HTC U23 Pro, HTC U23, HTC Desire 22 Pro, HTC Desire 21 Pro, and older U and One series models. Call us to check parts availability for your specific HTC device.',
    category: 'general',
  },
  {
    question: 'How long does HTC phone repair take?',
    answer: 'Most HTC screen and battery repairs are completed on the spot in 15–30 minutes. Walk in any day between 9am and 9pm — no appointment needed.',
    category: 'general',
  },
  {
    question: 'Is there a warranty on HTC repairs?',
    answer: 'Yes — all HTC repairs at iTech Repairs come with a lifetime warranty on parts and labour. If the same fault returns, we fix it free.',
    category: 'general',
  },
  {
    question: 'My HTC won\'t charge — can you fix it?',
    answer: 'Charging problems on HTC phones are usually caused by a faulty USB-C port, damaged cable, or depleted battery. We\'ll diagnose the issue for free and repair it on the spot in most cases.',
    category: 'general',
  },
  {
    question: 'Can you fix an HTC with a cracked back?',
    answer: 'Yes. Many HTC premium phones feature glass backs. We can assess and repair cracked or damaged back panels on supported HTC models.',
    category: 'general',
  },
]

const faqSchema = generateFAQSchema(faqs)

const models = ['HTC U23 Pro', 'HTC U23', 'HTC Desire 22 Pro', 'HTC Desire 21 Pro', 'HTC U20 5G', 'HTC One M9', 'HTC Wildfire E3']

const repairServices = [
  { name: 'Screen Repair', price: 'From $79', time: '15–30 min', description: 'Replace cracked or damaged HTC screens. Quality AMOLED and LCD replacements available for all HTC models.' },
  { name: 'Battery Replacement', price: 'From $69', time: '15–20 min', description: 'Replace worn or swollen HTC batteries. Restore full battery capacity and charging capability.' },
  { name: 'Charging Port Repair', price: 'From $69', time: '20–30 min', description: 'Fix damaged USB-C or micro-USB charging ports on all HTC models.' },
  { name: 'Camera Repair', price: 'From $79', time: '20–30 min', description: 'Repair or replace front and rear cameras on HTC phones.' },
  { name: 'Water Damage Repair', price: 'From $89', time: '30–60 min', description: 'Professional assessment and repair for HTC phones exposed to water or liquid damage.' },
  { name: 'Full Diagnostic', price: 'Free', time: '15 min', description: 'Free diagnostic to identify all faults with your HTC before any repair begins.' },
]

const whyChoosePoints = [
  { title: 'U Series & Desire Series', body: 'We repair the full HTC range from the flagship U23 Pro to the Desire series and older HTC One models. All HTC phones welcome.' },
  { title: 'Lifetime Warranty', body: 'All HTC repairs include a lifetime warranty on parts and labour. Same fault returns? We fix it free.' },
  { title: 'On-The-Spot Service', body: 'Walk in and most HTC repairs are completed while you wait. Fast, convenient service with no long wait times.' },
  { title: 'Cheapest Price Guaranteed', body: 'We offer the most competitive HTC repair prices in Melbourne and will match any genuine lower quote.' },
  { title: 'Free Diagnostics', body: 'Walk in for a free HTC diagnostic — no obligation to proceed with any repair.' },
  { title: 'Open 7 Days', body: 'Both Braybrook and Spotswood stores open every day from 9am to 9pm. No appointment required.' },
]

export default function HtcPhoneRepairMelbournePage() {
  return (
    <>
      <SchemaScript schema={[localBusinessSchema, serviceSchema, faqSchema]} />

      <nav aria-label="Breadcrumb" className="bg-gray-surface border-b border-gray-border py-3">
        <div className="container-page">
          <ol className="flex items-center gap-2 text-sm text-charcoal-light">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal font-medium">HTC Phone Repair Melbourne</li>
          </ol>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">HTC Phone Repair Melbourne</h1>
            <p className="text-xl text-gray-300 mb-6">HTC U Series · Desire Series · All Models · Lifetime Warranty</p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Professional HTC phone repairs in Melbourne. Cracked HTC U23 Pro screen, dead battery,
              or charging issues — walk in for on-the-spot repair with a lifetime warranty and
              cheapest price guarantee.
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
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">HTC Models We Repair</h2>
            <p className="text-charcoal-light text-lg">All HTC U series and Desire series phones welcome.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {models.map((model) => (
              <Link key={model} href="/htc-phone-repair-melbourne#models" className="card p-4 text-center text-sm font-medium text-charcoal hover:text-primary hover:border-primary transition-colors">{model}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">HTC Repair Services &amp; Pricing</h2>
            <p className="text-charcoal-light text-lg">Transparent pricing. Free quote before any work begins.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {repairServices.map((service) => (
              <Link key={service.name} href="/htc-phone-repair-melbourne#services" className="card p-6 hover:border-primary group">
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
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8 text-center">Why Choose iTech Repairs for HTC?</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">HTC Phone Repair FAQ</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Your HTC Repaired Today?</h2>
          <p className="text-lg text-red-100 mb-8 max-w-xl mx-auto">Walk in to our Braybrook or Spotswood store — no appointment needed. On-the-spot HTC repairs with lifetime warranty.</p>
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
