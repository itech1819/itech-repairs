import type { Metadata } from 'next'
import Link from 'next/link'
import { business } from '@/data'
import { generateFAQSchema } from '@/lib/seo'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'
import { primaryLocation } from '@/data'

export const metadata: Metadata = {
  title: 'Nokia Phone Repair Melbourne | Screen & Battery | iTech Repairs',
  description:
    'Expert Nokia phone repair in Melbourne. Screen replacement, battery replacement, and charging port repair for all Nokia G, C, and XR series. Lifetime warranty. Walk in today.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/nokia-phone-repair-melbourne',
  },
  openGraph: {
    title: 'Nokia Phone Repair Melbourne | Screen & Battery | iTech Repairs',
    description: 'Expert Nokia phone repair in Melbourne. Screen replacement, battery and charging port repair. Lifetime warranty. Walk in today.',
    url: 'https://www.itechrepairs.com.au/nokia-phone-repair-melbourne',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Nokia Phone Repair Melbourne',
  description: 'Expert Nokia phone repair in Melbourne. Screen repair, battery replacement, and charging port repair for all Nokia G, C, and XR series phones.',
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
  serviceType: 'Nokia Phone Repair',
}

const faqs = [
  {
    question: 'How much does Nokia screen repair cost in Melbourne?',
    answer: 'Nokia screen repair is very affordable. The Nokia G and C series use LCD or IPS displays which are less expensive to replace than AMOLED screens. Call us for a free specific quote for your Nokia model.',
    category: 'general',
  },
  {
    question: 'What Nokia models do you repair?',
    answer: 'We repair all popular Nokia models including Nokia G42, G22, G21, C32, C22, XR20, and XR21. Nokia\'s rugged XR series and the budget-friendly G and C series are all welcome.',
    category: 'general',
  },
  {
    question: 'How long does Nokia phone repair take?',
    answer: 'Most Nokia screen and battery repairs are completed on the spot in 15–30 minutes. Walk in any day between 9am and 9pm — no appointment needed.',
    category: 'general',
  },
  {
    question: 'Is there a warranty on Nokia repairs?',
    answer: 'Yes — all Nokia repairs come with a lifetime warranty on parts and labour. If the same fault returns after our repair, we fix it free.',
    category: 'general',
  },
  {
    question: 'My Nokia won\'t turn on — can you fix it?',
    answer: 'A Nokia that won\'t turn on can be caused by a dead battery, software issue, or hardware fault. We offer a free diagnostic to identify the cause and advise on repair options.',
    category: 'general',
  },
  {
    question: 'Do you repair Nokia XR rugged phones?',
    answer: 'Yes. Nokia XR series rugged phones are built tough but can still suffer damage from drops or water ingress. We repair screens, batteries, and charging ports on Nokia XR20 and XR21 models.',
    category: 'general',
  },
]

const faqSchema = generateFAQSchema(faqs)

const models = [
  { name: 'Nokia G42', slug: 'nokia-g42' },
  { name: 'Nokia G22', slug: 'nokia-g22' },
  { name: 'Nokia G21', slug: 'nokia-g21' },
  { name: 'Nokia C32', slug: 'nokia-c32' },
  { name: 'Nokia C22', slug: 'nokia-c22' },
  { name: 'Nokia XR21', slug: 'nokia-xr21' },
  { name: 'Nokia XR20', slug: 'nokia-xr20' },
  { name: 'Nokia G60', slug: 'nokia-g60' },
  { name: 'Nokia 8.3 5G', slug: 'nokia-8-3-5g' },
  { name: 'Nokia 7.2', slug: 'nokia-7-2' },
  { name: 'Nokia 6.2', slug: 'nokia-6-2' },
  { name: 'Nokia 5.4', slug: 'nokia-5-4' },
  { name: 'Nokia 5.3', slug: 'nokia-5-3' },
  { name: 'Nokia 4.2', slug: 'nokia-4-2' },
  { name: 'Nokia 3.4', slug: 'nokia-3-4' },
  { name: 'Nokia G11', slug: 'nokia-g11' },
]

const repairServices = [
  { name: 'Screen Repair', price: 'From $69', time: '15–30 min', description: 'Replace cracked or damaged Nokia screens. Quality LCD and IPS replacements for all G, C, and XR series models.' },
  { name: 'Battery Replacement', price: 'From $59', time: '15–20 min', description: 'Replace worn Nokia batteries to restore full-day battery life. Fix rapid drain or failure to charge issues.' },
  { name: 'Charging Port Repair', price: 'From $59', time: '15–20 min', description: 'Repair damaged USB-C or micro-USB charging ports on all Nokia models.' },
  { name: 'Camera Repair', price: 'From $69', time: '20–30 min', description: 'Fix or replace blurry, cracked, or non-functioning cameras on Nokia phones.' },
  { name: 'Water Damage Repair', price: 'From $79', time: '30–60 min', description: 'Assessment and repair for Nokia phones exposed to water. Nokia XR series has rugged ratings, but extreme liquid exposure can still cause damage.' },
  { name: 'Full Diagnostic', price: 'Free', time: '15 min', description: 'Free diagnostic to identify all faults with your Nokia before any repair begins.' },
]

const whyChoosePoints = [
  { title: 'G, C & XR Series All Covered', body: 'We repair Nokia\'s full range from the budget C series through to the rugged XR series and mid-range G series.' },
  { title: 'Lifetime Warranty', body: 'All Nokia repairs come with a lifetime warranty. If the fault returns, we fix it free.' },
  { title: 'Affordable Nokia Repairs', body: 'Nokia phones are known for being great value — and so are our repair prices. We offer the most affordable Nokia repair service in Melbourne.' },
  { title: 'Cheapest Price Guaranteed', body: 'We match any genuine lower written quote on Nokia repairs in Melbourne.' },
  { title: 'Free Diagnostics', body: 'Not sure what\'s wrong with your Nokia? Walk in for a free diagnostic — no obligation to proceed.' },
  { title: 'Open 7 Days', body: 'Braybrook and Spotswood stores open 9am–9pm every day. No appointment needed for any Nokia repair.' },
]

export default function NokiaPhoneRepairMelbournePage() {
  return (
    <>
      <SchemaScript schema={[localBusinessSchema, serviceSchema, faqSchema]} />

      <nav aria-label="Breadcrumb" className="bg-gray-surface border-b border-gray-border py-3">
        <div className="container-page">
          <ol className="flex items-center gap-2 text-sm text-charcoal-light">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal font-medium">Nokia Phone Repair Melbourne</li>
          </ol>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Nokia Phone Repair Melbourne</h1>
            <p className="text-xl text-gray-300 mb-6">Nokia G · C · XR Series · All Models · Lifetime Warranty</p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Professional Nokia phone repairs in Melbourne. Whether you have a cracked Nokia G42
              screen, a failing battery in your C32, or a damaged charging port on your XR21 —
              walk in for on-the-spot repair with a lifetime warranty and cheapest price guarantee.
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
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Nokia Models We Repair</h2>
            <p className="text-charcoal-light text-lg">All Nokia G, C, and XR series phones welcome.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Nokia Repair Services &amp; Pricing</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8 text-center">Why Choose iTech Repairs for Nokia?</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Nokia Repair FAQ</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Your Nokia Repaired Today?</h2>
          <p className="text-lg text-red-100 mb-8 max-w-xl mx-auto">Walk in to our Braybrook or Spotswood store — no appointment needed. On-the-spot Nokia repairs with lifetime warranty.</p>
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
