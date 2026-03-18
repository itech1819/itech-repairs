import type { Metadata } from 'next'
import Link from 'next/link'
import { business, primaryLocation } from '@/data'
import { generateFAQSchema } from '@/lib/seo'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'

export const metadata: Metadata = {
  title: 'Free Apple Watch Diagnostic Melbourne',
  description:
    'Free Apple Watch diagnostic in Melbourne. Walk in for a full assessment with a written quote before any repair begins. No obligation. Braybrook and Spotswood stores.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/apple-watch-free-device-inspection',
  },
  openGraph: {
    title: 'Free Apple Watch Diagnostic Melbourne',
    description: 'Free Apple Watch diagnostic in Melbourne. Walk in for a full assessment with a written quote before any repair begins. No obligation. Braybrook and Spotswood stores.',
    url: 'https://www.itechrepairs.com.au/apple-watch-free-device-inspection',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Free Apple Watch Diagnostic Melbourne',
  description:
    'Free Apple Watch diagnostic service in Melbourne. Full device assessment covering screen, battery, charging, sensors and more. Written quote provided before any repair begins.',
  provider: {
    '@type': 'RepairShop',
    name: business.name,
    telephone: business.phone,
  },
  areaServed: { '@type': 'City', name: 'Melbourne' },
  serviceType: 'Apple Watch Diagnostic',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'AUD',
  },
}

const faqs = [
  {
    question: 'Is the Apple Watch diagnostic really free?',
    answer: 'Yes — the Apple Watch diagnostic at iTech Repairs is completely free with no obligation. We assess your device, identify all faults, and provide a written quote. You decide whether to proceed with any repair.',
    category: 'general',
  },
  {
    question: 'What does the free Apple Watch diagnostic include?',
    answer: 'Our free diagnostic covers screen condition, battery health, charging functionality, digital crown operation, button response, sensor testing, and a visual inspection for physical damage. We document all findings and provide a written report.',
    category: 'general',
  },
  {
    question: 'How long does the free diagnostic take?',
    answer: 'The Apple Watch diagnostic typically takes 15–20 minutes. Walk in any time — no appointment needed.',
    category: 'general',
  },
  {
    question: 'Do I have to get the repair done after the diagnostic?',
    answer: 'Absolutely not. The diagnostic is free with no obligation. We provide a written quote and you decide whether to proceed. There is never any pressure to commit to a repair.',
    category: 'general',
  },
  {
    question: 'What if you can\'t fix my Apple Watch?',
    answer: 'If we cannot fix your Apple Watch, you do not pay anything — not even for the diagnostic. We operate a strict no fix, no fee policy.',
    category: 'general',
  },
]

const faqSchema = generateFAQSchema(faqs)

export default function AppleWatchFreeDeviceInspectionPage() {
  return (
    <>
      <SchemaScript schema={[localBusinessSchema, serviceSchema, faqSchema]} />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-gray-surface border-b border-gray-border py-3">
        <div className="container-page">
          <ol className="flex items-center gap-2 text-sm text-charcoal-light">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/apple-watch-repair-melbourne" className="hover:text-primary transition-colors">
                Apple Watch Repairs
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal font-medium">Free Diagnostic</li>
          </ol>
        </div>
      </nav>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Free Apple Watch Diagnostic Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Completely Free · No Obligation · Written Quote · Walk-ins Welcome
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Not sure what is wrong with your Apple Watch? Walk in to our Braybrook or Spotswood store for a comprehensive free diagnostic. We assess your device, identify every fault, and provide a written quote — all at no charge and with no obligation to proceed.
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
              { label: '100% Free', sub: 'No Obligation' },
              { label: '15–20 Min', sub: 'Assessment' },
              { label: 'Written', sub: 'Quote' },
              { label: 'No Fix', sub: 'No Fee' },
            ].map((stat) => (
              <div key={stat.label} className="py-3">
                <div className="text-xl font-bold text-primary">{stat.label}</div>
                <div className="text-sm text-charcoal-light mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Check */}
      <section className="section-padding">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              What Does Our Free Apple Watch Diagnostic Cover?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { title: 'Screen & Display', desc: 'We check for cracks, scratches, dead pixels, screen separation, touch sensitivity issues, and display brightness.' },
                { title: 'Battery Health', desc: 'Battery capacity assessment, charge cycle count review, and testing for swelling or unexpected shutdowns.' },
                { title: 'Charging Functionality', desc: 'Testing magnetic charging contacts and the watch\'s ability to accept and hold a charge.' },
                { title: 'Digital Crown & Buttons', desc: 'Checking digital crown rotation and press response, side button function, and physical condition.' },
                { title: 'Sensors & Health Features', desc: 'Heart rate sensor, ECG electrodes, blood oxygen sensor, and accelerometer function testing.' },
                { title: 'Physical Inspection', desc: 'Full visual inspection for physical damage, water ingress indicators, case damage, and band connector condition.' },
              ].map((item) => (
                <div key={item.title} className="card p-5">
                  <h3 className="font-bold text-charcoal mb-2">{item.title}</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8 text-center">
              How It Works
            </h2>
            <div className="space-y-6">
              {[
                { step: '1', title: 'Walk In', desc: 'Visit our Braybrook or Spotswood store any day between 9am and 9pm. No appointment needed — just bring your Apple Watch.' },
                { step: '2', title: 'Free Assessment', desc: 'Our technician runs a comprehensive diagnostic in 15–20 minutes, checking all components and documenting any faults found.' },
                { step: '3', title: 'Written Quote', desc: 'We provide a written quote detailing every repair recommended, the cost, and the estimated turnaround time.' },
                { step: '4', title: 'Your Choice', desc: 'You decide whether to proceed with any or all of the recommended repairs. No pressure — the diagnostic is free regardless.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal mb-1">{item.title}</h3>
                    <p className="text-sm text-charcoal-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Free Diagnostic FAQ
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

      {/* Related Links */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-charcoal mb-4">Apple Watch Repair Services</h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/apple-watch-repair-melbourne" className="px-4 py-2 bg-white hover:bg-primary hover:text-white border border-gray-border rounded-full text-sm font-medium text-charcoal transition-colors">
              Apple Watch Repair Melbourne
            </Link>
            <Link href="/apple-watch-screen-repair" className="px-4 py-2 bg-white hover:bg-primary hover:text-white border border-gray-border rounded-full text-sm font-medium text-charcoal transition-colors">
              Apple Watch Screen Repair
            </Link>
            <Link href="/apple-watch-battery-replacement" className="px-4 py-2 bg-white hover:bg-primary hover:text-white border border-gray-border rounded-full text-sm font-medium text-charcoal transition-colors">
              Apple Watch Battery Replacement
            </Link>
          </div>
        </div>
      </section>

      {/* Apple Watch Models */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Apple Watch Models We Repair
            </h2>
            <p className="text-charcoal-light text-lg">
              Select your Apple Watch model to see model-specific pricing and availability.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {[
            { name: 'Apple Watch Series 5', href: '/apple-watch-series-5-free-device-inspection' },
            { name: 'Apple Watch Series 6', href: '/apple-watch-series-6-free-device-inspection' },
            { name: 'Apple Watch Series 7', href: '/apple-watch-series-7-free-device-inspection' },
            { name: 'Apple Watch Series 8', href: '/apple-watch-series-8-free-device-inspection' },
            { name: 'Apple Watch Series 9', href: '/apple-watch-series-9-free-device-inspection' },
            { name: 'Apple Watch Ultra', href: '/apple-watch-ultra-free-device-inspection' },
            { name: 'Apple Watch Ultra 2', href: '/apple-watch-ultra-2-free-device-inspection' },
            { name: 'Apple Watch SE', href: '/apple-watch-se-free-device-inspection' },
            { name: 'Apple Watch SE 2', href: '/apple-watch-se-2-free-device-inspection' },
            ].map((model) => (
              <Link
                key={model.name}
                href={model.href}
                className="card p-4 text-center text-sm font-medium text-charcoal hover:text-primary hover:border-primary transition-colors"
              >
                {model.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary text-white py-16">
        <div className="container-page text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Your Apple Watch Assessed for Free
          </h2>
          <p className="text-lg text-red-100 mb-8 max-w-xl mx-auto">
            Walk in to our Braybrook or Spotswood store — no appointment needed. Free diagnostic with a written quote and no obligation to repair.
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
