import type { Metadata } from 'next'
import Link from 'next/link'
import { business } from '@/data'
import { generateFAQSchema } from '@/lib/seo'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'
import { primaryLocation } from '@/data'

export const metadata: Metadata = {
  title: 'Oppo Phone Repair Melbourne | Screen & Battery | Cheapest Price Guaranteed',
  description:
    'Expert Oppo phone repair in Melbourne. Screen replacement, battery, charging port and camera repair for all Oppo models. Cheapest price guaranteed, lifetime warranty. Walk in Braybrook or Spotswood.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/oppo-phone-repair-melbourne',
  },
  openGraph: {
    title: 'Oppo Phone Repair Melbourne | Screen & Battery | Cheapest Price Guaranteed',
    description: 'Expert Oppo phone repair in Melbourne. Screen replacement, battery, charging port and camera repair for all Oppo models. Cheapest price guaranteed, lifetime warranty.',
    url: 'https://www.itechrepairs.com.au/oppo-phone-repair-melbourne',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Oppo Phone Repair Melbourne',
  description:
    'Expert Oppo phone repair services in Melbourne. Screen repair, battery replacement, charging port repair, camera repair and water damage assessment for all Oppo models.',
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
  serviceType: 'Oppo Phone Repair',
}

const faqs = [
  {
    question: 'How much does Oppo screen repair cost in Melbourne?',
    answer: 'Oppo screen repair prices vary by model. Find X and Reno series screens typically cost more than A series screens due to their curved AMOLED displays. We provide a free quote before any work begins — call us or walk in for a same-day assessment.',
    category: 'general',
  },
  {
    question: 'How long does Oppo phone repair take?',
    answer: 'Most Oppo screen and battery repairs are completed on the spot in 15–30 minutes. Walk in to our Braybrook or Spotswood store any day between 9am and 9pm.',
    category: 'general',
  },
  {
    question: 'What Oppo models do you repair?',
    answer: 'We repair all popular Oppo models including Find X8, Find X7, Reno 12, Reno 11, Reno 10, the A series (A78, A58, A38), and the F series. If your model is not listed, call us and we will check parts availability.',
    category: 'general',
  },
  {
    question: 'Is there a warranty on Oppo repairs?',
    answer: 'Yes — all Oppo repairs at iTech Repairs come with a lifetime warranty on parts and labour. If the same fault returns after our repair, we fix it for free.',
    category: 'general',
  },
  {
    question: 'Can you fix an Oppo phone that won\'t charge?',
    answer: 'Absolutely. Charging issues on Oppo phones are usually caused by a faulty charging port, damaged cable, or depleted battery. We will diagnose the issue for free and advise on the best fix.',
    category: 'general',
  },
  {
    question: 'Do I need an appointment for Oppo repair?',
    answer: 'No appointment needed. Walk in to our Braybrook or Spotswood store any time between 9am and 9pm, 7 days a week. We offer free diagnostics and on-the-spot repairs.',
    category: 'general',
  },
]

const faqSchema = generateFAQSchema(faqs)

const models = [
  { name: 'Oppo Find X8', slug: 'oppo-find-x8' },
  { name: 'Oppo Find X7', slug: 'oppo-find-x7' },
  { name: 'Oppo Find X6 Pro', slug: 'oppo-find-x6-pro' },
  { name: 'Oppo Reno 12', slug: 'oppo-reno-12' },
  { name: 'Oppo Reno 11', slug: 'oppo-reno-11' },
  { name: 'Oppo Reno 10', slug: 'oppo-reno-10' },
  { name: 'Oppo Reno 8', slug: 'oppo-reno-8' },
  { name: 'Oppo A78', slug: 'oppo-a78' },
  { name: 'Oppo A58', slug: 'oppo-a58' },
  { name: 'Oppo A38', slug: 'oppo-a38' },
  { name: 'Oppo F25 Pro', slug: 'oppo-f25-pro' },
  { name: 'Oppo F23', slug: 'oppo-f23' },
  { name: 'Oppo Find X6', slug: 'oppo-find-x6' },
  { name: 'Oppo Find X5 Pro', slug: 'oppo-find-x5-pro' },
  { name: 'Oppo Find X3 Pro', slug: 'oppo-find-x3-pro' },
  { name: 'Oppo Reno 11 F', slug: 'oppo-reno-11-f' },
  { name: 'Oppo Reno 9 Pro', slug: 'oppo-reno-9-pro' },
  { name: 'Oppo Reno 8 Pro', slug: 'oppo-reno-8-pro' },
  { name: 'Oppo Reno 8T', slug: 'oppo-reno-8t' },
  { name: 'Oppo Reno 7', slug: 'oppo-reno-7' },
  { name: 'Oppo Reno 6', slug: 'oppo-reno-6' },
  { name: 'Oppo Reno 5', slug: 'oppo-reno-5' },
  { name: 'Oppo Reno 4', slug: 'oppo-reno-4' },
  { name: 'Oppo A96', slug: 'oppo-a96' },
  { name: 'Oppo A74', slug: 'oppo-a74' },
  { name: 'Oppo A72', slug: 'oppo-a72' },
  { name: 'Oppo A54', slug: 'oppo-a54' },
  { name: 'Oppo A53', slug: 'oppo-a53' },
  { name: 'Oppo A52', slug: 'oppo-a52' },
  { name: 'Oppo A16', slug: 'oppo-a16' },
  { name: 'Oppo A15', slug: 'oppo-a15' },
  { name: 'Oppo A9 2020', slug: 'oppo-a9-2020' },
]

const repairServices = [
  { name: 'Screen Repair', price: 'From $89', time: '15–30 min', description: 'Cracked or broken Oppo screen replaced using quality parts. Restores full touch sensitivity and display clarity.' },
  { name: 'Battery Replacement', price: 'From $79', time: '15–20 min', description: 'Replace a swollen, draining, or dead battery on any Oppo model. Restore all-day battery life.' },
  { name: 'Charging Port Repair', price: 'From $69', time: '20–30 min', description: 'Fix USB-C charging ports that are damaged, loose, or clogged. Includes free diagnostic check.' },
  { name: 'Camera Repair', price: 'From $79', time: '20–30 min', description: 'Repair or replace rear or front cameras on all Oppo models. Restore full photo and video quality.' },
  { name: 'Water Damage Repair', price: 'From $89', time: '30–60 min', description: 'Ultrasonic cleaning and component repair for Oppo phones exposed to water or liquid damage.' },
  { name: 'Full Diagnostic', price: 'Free', time: '15 min', description: 'Comprehensive free diagnostic to identify all faults before any repair work is started.' },
]

const whyChoosePoints = [
  {
    title: 'All Oppo Models Supported',
    body: 'From flagship Find X and Reno series to the budget A and F series — we stock quality parts and have the expertise to repair every popular Oppo model sold in Australia.',
  },
  {
    title: 'Lifetime Warranty',
    body: 'All Oppo repairs come with a lifetime warranty on parts and labour. If the same fault returns, we repair it free of charge.',
  },
  {
    title: 'On The Spot 15-Minute Repairs',
    body: 'Most Oppo screen and battery replacements are done on the spot while you wait. No appointments, no waiting days for parts.',
  },
  {
    title: 'Cheapest Price Guaranteed',
    body: 'We offer the most competitive Oppo repair prices in Melbourne. Found a cheaper written quote? We\'ll match it.',
  },
  {
    title: 'Free Diagnostics',
    body: 'Not sure what\'s wrong with your Oppo? We offer a completely free diagnostic service. You only pay if we fix it.',
  },
  {
    title: 'Locally Owned & Operated',
    body: 'iTech Repairs is a locally owned Melbourne business based in Braybrook, serving all of Western Melbourne with honest, professional service.',
  },
]

export default function OppoPhoneRepairMelbournePage() {
  return (
    <>
      <SchemaScript schema={[localBusinessSchema, serviceSchema, faqSchema]} />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-gray-surface border-b border-gray-border py-3">
        <div className="container-page">
          <ol className="flex items-center gap-2 text-sm text-charcoal-light">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal font-medium">Oppo Phone Repair Melbourne</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Oppo Phone Repair Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Find X · Reno · A Series · F Series · All Models · Lifetime Warranty
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Professional Oppo phone repairs in Melbourne. Whether you have a cracked screen on your
              Oppo Reno 12, a dead battery in your Find X8, or charging issues with your A series —
              we fix it fast with a lifetime warranty and cheapest price guarantee.
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

      {/* Trust Badges */}
      <section className="bg-white border-b border-gray-border py-6">
        <div className="container-page">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { label: '12+ Models', sub: 'Supported' },
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

      {/* Models */}
      <section className="section-padding">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Oppo Models We Repair
            </h2>
            <p className="text-charcoal-light text-lg">
              We repair all popular Oppo phones sold in Australia.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {models.map((model) => (
              <Link key={model.name} href={`/${model.slug}-repair`} className="card p-4 text-center text-sm font-medium text-charcoal hover:text-primary hover:border-primary transition-colors">
                {model.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Oppo Repair Services &amp; Pricing
            </h2>
            <p className="text-charcoal-light text-lg">
              Transparent pricing. Free quote before any work begins.
            </p>
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

      {/* Why Choose */}
      <section className="section-padding">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8 text-center">
              Why Choose iTech Repairs for Oppo?
            </h2>
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

      {/* FAQ */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Oppo Repair FAQ
            </h2>
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

      {/* CTA Banner */}
      <section className="bg-primary text-white py-16">
        <div className="container-page text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Your Oppo Phone Repaired Today?
          </h2>
          <p className="text-lg text-red-100 mb-8 max-w-xl mx-auto">
            Walk in to our Braybrook or Spotswood store — no appointment needed. On-the-spot Oppo
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
