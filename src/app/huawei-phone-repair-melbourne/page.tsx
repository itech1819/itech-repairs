import type { Metadata } from 'next'
import Link from 'next/link'
import { business } from '@/data'
import { generateFAQSchema } from '@/lib/seo'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'
import { primaryLocation } from '@/data'

export const metadata: Metadata = {
  title: 'Huawei Phone Repair Melbourne | Screen & Battery | iTech Repairs',
  description:
    'Expert Huawei phone repair in Melbourne. Screen replacement, battery replacement, charging port and camera repair for all Huawei P, Mate, Nova and Y series. Lifetime warranty. Walk in today.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/huawei-phone-repair-melbourne',
  },
  openGraph: {
    title: 'Huawei Phone Repair Melbourne | Screen & Battery | iTech Repairs',
    description: 'Expert Huawei phone repair in Melbourne. Screen replacement, battery replacement, charging port and camera repair for all Huawei models. Lifetime warranty. Walk in today.',
    url: 'https://www.itechrepairs.com.au/huawei-phone-repair-melbourne',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Huawei Phone Repair Melbourne',
  description: 'Expert Huawei phone repair in Melbourne. Screen repair, battery replacement, charging port and camera repair for all Huawei models.',
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
  serviceType: 'Huawei Phone Repair',
}

const faqs = [
  {
    question: 'How much does Huawei screen repair cost in Melbourne?',
    answer: 'Huawei screen repair prices depend on the model. P60 Pro and Mate 50 Pro screens with curved OLED displays are more expensive than Nova or Y series screens. Call us or walk in for a free quote.',
    category: 'general',
  },
  {
    question: 'What Huawei models do you repair?',
    answer: 'We repair all popular Huawei models sold in Australia including the P60, P50, P40 series, Mate 50, Mate 40, Nova 12, Nova 11, and the budget Y series. If parts are available for your model, we can fix it.',
    category: 'general',
  },
  {
    question: 'How long does Huawei repair take?',
    answer: 'Most Huawei screen and battery repairs are done on the spot in 15–30 minutes. Walk in any day between 9am and 9pm — no appointment needed.',
    category: 'general',
  },
  {
    question: 'Do you offer a warranty on Huawei repairs?',
    answer: 'Yes — all Huawei repairs come with a lifetime warranty on parts and labour. If the same fault returns after our repair, we fix it free.',
    category: 'general',
  },
  {
    question: 'Can you repair a Huawei with a cracked camera lens?',
    answer: 'Yes. Huawei P and Mate series phones are renowned for their Leica camera systems. We can replace cracked camera lenses and repair camera faults to restore full photo quality.',
    category: 'general',
  },
  {
    question: 'My Huawei won\'t charge — can you fix it?',
    answer: 'Absolutely. Charging issues are usually caused by a faulty USB-C port, debris blocking the port, or a degraded battery. We\'ll diagnose the issue for free and repair it on the spot.',
    category: 'general',
  },
]

const faqSchema = generateFAQSchema(faqs)

const models = [
  { name: 'Huawei P60 Pro', slug: 'huawei-p60-pro' },
  { name: 'Huawei P50 Pro', slug: 'huawei-p50-pro' },
  { name: 'Huawei P40 Pro', slug: 'huawei-p40-pro' },
  { name: 'Huawei Mate 50 Pro', slug: 'huawei-mate-50-pro' },
  { name: 'Huawei Mate 40 Pro', slug: 'huawei-mate-40-pro' },
  { name: 'Huawei Nova 12', slug: 'huawei-nova-12' },
  { name: 'Huawei Nova 11', slug: 'huawei-nova-11' },
  { name: 'Huawei Y90', slug: 'huawei-y90' },
  { name: 'Huawei Y70', slug: 'huawei-y70' },
  { name: 'Huawei Y60', slug: 'huawei-y60' },
  { name: 'Huawei P40', slug: 'huawei-p40' },
  { name: 'Huawei P40 Lite', slug: 'huawei-p40-lite' },
  { name: 'Huawei P30 Pro', slug: 'huawei-p30-pro' },
  { name: 'Huawei P30', slug: 'huawei-p30' },
  { name: 'Huawei P30 Lite', slug: 'huawei-p30-lite' },
  { name: 'Huawei P20 Pro', slug: 'huawei-p20-pro' },
  { name: 'Huawei Mate 30 Pro', slug: 'huawei-mate-30-pro' },
  { name: 'Huawei Mate 20 Pro', slug: 'huawei-mate-20-pro' },
  { name: 'Huawei Nova 10 Pro', slug: 'huawei-nova-10-pro' },
]

const repairServices = [
  { name: 'Screen Repair', price: 'From $89', time: '15–30 min', description: 'Replace cracked or broken Huawei screens. We use quality OLED panels for P and Mate series flagship models.' },
  { name: 'Battery Replacement', price: 'From $79', time: '15–20 min', description: 'Restore all-day battery life on any Huawei model. Fix rapid drain, swollen battery, or failure to charge.' },
  { name: 'Charging Port Repair', price: 'From $69', time: '20–30 min', description: 'Repair damaged or loose USB-C charging ports. Includes cleaning and testing after repair.' },
  { name: 'Camera Repair', price: 'From $79', time: '20–30 min', description: 'Repair or replace Huawei Leica camera systems. Fix blurry images, cracked lenses, or non-functioning cameras.' },
  { name: 'Water Damage Repair', price: 'From $89', time: '30–60 min', description: 'Professional assessment and repair for Huawei phones exposed to water or liquid damage.' },
  { name: 'Full Diagnostic', price: 'Free', time: '15 min', description: 'Free diagnostic to identify all faults with your Huawei before any repair begins.' },
]

const whyChoosePoints = [
  { title: 'P, Mate, Nova & Y Series', body: 'We repair Huawei\'s full product range from the flagship P and Mate series with Leica cameras to the affordable Nova and Y series smartphones.' },
  { title: 'Lifetime Warranty', body: 'All Huawei repairs include a lifetime warranty. If the fault returns, we fix it free — guaranteed.' },
  { title: 'On-The-Spot Service', body: 'Walk in and most Huawei repairs are completed while you wait. No need to leave your phone behind for days.' },
  { title: 'Cheapest Price Guaranteed', body: 'We match any genuine lower written quote. Professional Huawei repair at the best price in Melbourne.' },
  { title: 'Free Diagnostics', body: 'Unsure what\'s wrong? Walk in for a free Huawei diagnostic — no obligation to proceed with repair.' },
  { title: 'Open 7 Days, 9am–9pm', body: 'Braybrook and Spotswood stores open every day. No appointment needed for any Huawei repair.' },
]

export default function HuaweiPhoneRepairMelbournePage() {
  return (
    <>
      <SchemaScript schema={[localBusinessSchema, serviceSchema, faqSchema]} />

      <nav aria-label="Breadcrumb" className="bg-gray-surface border-b border-gray-border py-3">
        <div className="container-page">
          <ol className="flex items-center gap-2 text-sm text-charcoal-light">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal font-medium">Huawei Phone Repair Melbourne</li>
          </ol>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Huawei Phone Repair Melbourne</h1>
            <p className="text-xl text-gray-300 mb-6">P Series · Mate Series · Nova · Y Series · All Models · Lifetime Warranty</p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Expert Huawei phone repairs in Melbourne. Cracked P60 Pro screen? Mate 50 battery draining fast?
              Nova won&apos;t charge? Walk in for on-the-spot Huawei repair with lifetime warranty and
              cheapest price guaranteed.
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
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Huawei Models We Repair</h2>
            <p className="text-charcoal-light text-lg">All Huawei P, Mate, Nova, and Y series phones welcome.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Huawei Repair Services &amp; Pricing</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8 text-center">Why Choose iTech Repairs for Huawei?</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Huawei Repair FAQ</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Your Huawei Repaired Today?</h2>
          <p className="text-lg text-red-100 mb-8 max-w-xl mx-auto">Walk in to our Braybrook or Spotswood store — no appointment needed. On-the-spot Huawei repairs with lifetime warranty.</p>
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
