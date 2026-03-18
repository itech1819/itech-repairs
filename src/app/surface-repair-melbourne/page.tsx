import type { Metadata } from 'next'
import Link from 'next/link'
import { business } from '@/data'
import { generateFAQSchema } from '@/lib/seo'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'
import { primaryLocation } from '@/data'

export const metadata: Metadata = {
  title: 'Microsoft Surface Repair Melbourne | Screen & Battery | iTech Repairs',
  description:
    'Expert Microsoft Surface repair in Melbourne. Screen replacement, battery replacement, keyboard and charging port repair for Surface Pro, Surface Laptop, and Surface Go. Lifetime warranty.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/surface-repair-melbourne',
  },
  openGraph: {
    title: 'Microsoft Surface Repair Melbourne | Screen & Battery | iTech Repairs',
    description: 'Expert Microsoft Surface repair in Melbourne. Screen replacement, battery, keyboard and charging port repair for Surface Pro and Surface Laptop. Lifetime warranty.',
    url: 'https://www.itechrepairs.com.au/surface-repair-melbourne',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Microsoft Surface Repair Melbourne',
  description: 'Expert Microsoft Surface repair in Melbourne. Screen repair, battery replacement, keyboard repair, and charging port repair for Surface Pro, Surface Laptop, and Surface Go.',
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
  serviceType: 'Microsoft Surface Repair',
}

const faqs = [
  {
    question: 'How much does Microsoft Surface screen repair cost?',
    answer: 'Surface screen repair prices vary significantly by model. Surface Pro 11 and Surface Laptop 7 with high-resolution PixelSense displays are more complex to repair than Surface Go screens. We provide a detailed free quote before any work begins — call us or walk in.',
    category: 'general',
  },
  {
    question: 'What Surface models do you repair?',
    answer: 'We repair Surface Pro 11, Surface Pro 10, Surface Pro 9, Surface Laptop 7, Surface Laptop 6, Surface Go 4, Surface Go 3, and older Surface models. We can also assess Surface Book models — call for availability.',
    category: 'general',
  },
  {
    question: 'How long does Surface repair take?',
    answer: 'Surface repairs are generally more involved than phone repairs due to the tightly integrated design. Screen repairs typically take 1–2 hours. Battery replacements may take longer as Surface devices are designed to be difficult to disassemble. We\'ll give you a time estimate when you drop it off.',
    category: 'general',
  },
  {
    question: 'Can you repair the Surface Type Cover keyboard?',
    answer: 'Yes. We can repair and replace Surface Type Cover keyboards that are not responding, have broken keys, or have physical damage. We stock Type Cover replacements for major Surface Pro models.',
    category: 'general',
  },
  {
    question: 'Is there a warranty on Surface repairs?',
    answer: 'Yes — all Microsoft Surface repairs at iTech Repairs come with a lifetime warranty on parts and labour. If the same fault returns, we fix it free.',
    category: 'general',
  },
  {
    question: 'My Surface Pro won\'t charge via USB-C — can you fix it?',
    answer: 'Yes. Surface Pro 9 and later models support USB-C charging alongside the proprietary magnetic connector. We can diagnose and repair USB-C charging port issues, battery failure, and magnetic connector damage.',
    category: 'general',
  },
]

const faqSchema = generateFAQSchema(faqs)

const models = ['Surface Pro 11', 'Surface Pro 10', 'Surface Pro 9', 'Surface Pro 8', 'Surface Laptop 7', 'Surface Laptop 6', 'Surface Go 4', 'Surface Go 3']

const repairServices = [
  { name: 'Screen Repair', price: 'From $199', time: '1–2 hours', description: 'Replace cracked or damaged Surface PixelSense displays. High-resolution touch panel replacements for Surface Pro and Laptop models.' },
  { name: 'Battery Replacement', price: 'From $149', time: '1–2 hours', description: 'Replace worn Surface batteries. Surface devices have non-removable batteries — we safely remove and replace them.' },
  { name: 'Keyboard Repair', price: 'From $99', time: '30–60 min', description: 'Repair or replace Surface Type Cover keyboards and Surface Laptop built-in keyboards.' },
  { name: 'Charging Port Repair', price: 'From $89', time: '30–60 min', description: 'Repair damaged USB-C or Surface Connect magnetic charging ports.' },
  { name: 'Water Damage Repair', price: 'From $149', time: '1–2 hours', description: 'Professional assessment and repair for Surface devices exposed to liquid damage.' },
  { name: 'Full Diagnostic', price: 'Free', time: '20–30 min', description: 'Free comprehensive diagnostic to identify all faults with your Surface device before any repair begins.' },
]

const whyChoosePoints = [
  { title: 'Surface Pro, Laptop & Go', body: 'We repair Microsoft\'s full Surface range — Surface Pro detachables, Surface Laptop clamshells, and the compact Surface Go tablets.' },
  { title: 'Lifetime Warranty', body: 'All Surface repairs include a lifetime warranty on parts and labour. Same fault returns? We fix it free.' },
  { title: 'Specialised Surface Expertise', body: 'Surface devices are notoriously difficult to repair due to their glued-together construction. Our technicians have the tools and experience to open and repair them safely.' },
  { title: 'Cheapest Price Guaranteed', body: 'We offer the most competitive Surface repair prices in Melbourne. We match any genuine lower written quote.' },
  { title: 'Free Diagnostics', body: 'Bring in your Surface for a free diagnostic. We\'ll identify what\'s wrong and provide an accurate quote before any work begins.' },
  { title: 'Open 7 Days', body: 'Braybrook and Spotswood stores open 9am–9pm every day. Walk in with your Surface any time.' },
]

export default function SurfaceRepairMelbournePage() {
  return (
    <>
      <SchemaScript schema={[localBusinessSchema, serviceSchema, faqSchema]} />

      <nav aria-label="Breadcrumb" className="bg-gray-surface border-b border-gray-border py-3">
        <div className="container-page">
          <ol className="flex items-center gap-2 text-sm text-charcoal-light">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal font-medium">Microsoft Surface Repair Melbourne</li>
          </ol>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Microsoft Surface Repair Melbourne</h1>
            <p className="text-xl text-gray-300 mb-6">Surface Pro · Surface Laptop · Surface Go · All Models · Lifetime Warranty</p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Professional Microsoft Surface repairs in Melbourne. Cracked Surface Pro 11 screen,
              dead Surface Laptop battery, broken keyboard, or charging port issues — walk in or call
              for expert Surface repair with lifetime warranty and cheapest price guarantee.
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
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Microsoft Surface Models We Repair</h2>
            <p className="text-charcoal-light text-lg">Surface Pro, Surface Laptop, and Surface Go all welcome.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {models.map((model) => (
              <Link key={model} href="/surface-repair-melbourne#models" className="card p-4 text-center text-sm font-medium text-charcoal hover:text-primary hover:border-primary transition-colors">{model}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Surface Repair Services &amp; Pricing</h2>
            <p className="text-charcoal-light text-lg">Transparent pricing. Free quote before any work begins.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {repairServices.map((service) => (
              <Link key={service.name} href="/surface-repair-melbourne#services" className="card p-6 hover:border-primary group">
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
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8 text-center">Why Choose iTech Repairs for Microsoft Surface?</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Microsoft Surface Repair FAQ</h2>
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

      {/* Internal links */}
      <section className="section-padding">
        <div className="container-page">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-charcoal mb-4">Other Device Repair Services</h2>
            <p className="text-charcoal-light">We repair laptops, tablets, phones, and more.</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/macbook-repair-melbourne" className="px-4 py-2 bg-white hover:bg-primary hover:text-white border border-gray-border rounded-full text-sm font-medium text-charcoal transition-colors">
              MacBook Repair Melbourne
            </Link>
            <Link href="/ipad-repair-melbourne" className="px-4 py-2 bg-white hover:bg-primary hover:text-white border border-gray-border rounded-full text-sm font-medium text-charcoal transition-colors">
              iPad Repair Melbourne
            </Link>
            <Link href="/iphone-repair-melbourne" className="px-4 py-2 bg-white hover:bg-primary hover:text-white border border-gray-border rounded-full text-sm font-medium text-charcoal transition-colors">
              iPhone Repair Melbourne
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white py-16">
        <div className="container-page text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Your Surface Repaired Today?</h2>
          <p className="text-lg text-red-100 mb-8 max-w-xl mx-auto">Walk in or call to arrange your Microsoft Surface repair. Expert technicians, lifetime warranty, and cheapest price guaranteed.</p>
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
