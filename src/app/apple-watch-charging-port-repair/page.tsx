import type { Metadata } from 'next'
import Link from 'next/link'
import { business, primaryLocation } from '@/data'
import { generateFAQSchema } from '@/lib/seo'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'

export const metadata: Metadata = {
  title: 'Apple Watch Charging Port Repair Melbourne',
  description:
    'Apple Watch not charging? We diagnose and fix Apple Watch charging issues in Melbourne. Check charging port, magnetic charger compatibility and battery health. Walk in today.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/apple-watch-charging-port-repair',
  },
  openGraph: {
    title: 'Apple Watch Charging Port Repair Melbourne',
    description: 'Apple Watch not charging? We diagnose and fix Apple Watch charging issues in Melbourne. Check charging port, magnetic charger compatibility and battery health. Walk in today.',
    url: 'https://www.itechrepairs.com.au/apple-watch-charging-port-repair',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Apple Watch Charging Port Repair Melbourne',
  description:
    'Apple Watch not charging? Diagnostic and repair service for Apple Watch charging issues including magnetic charging pin cleaning, battery health check and charging port assessment.',
  provider: {
    '@type': 'RepairShop',
    name: business.name,
    telephone: business.phone,
  },
  areaServed: { '@type': 'City', name: 'Melbourne' },
  serviceType: 'Apple Watch Charging Repair',
}

const faqs = [
  {
    question: 'Why is my Apple Watch not charging?',
    answer: 'Apple Watch charging issues are commonly caused by debris or corrosion on the magnetic charging pins, a faulty magnetic charger cable, a degraded battery that will no longer accept charge, or software/firmware issues. We diagnose all of these at our Melbourne stores.',
    category: 'general',
  },
  {
    question: 'How does Apple Watch charging work?',
    answer: 'Apple Watch uses magnetic inductive charging — the charger attaches magnetically to the back of the watch with no physical port. Charging issues are usually caused by debris on the charging contacts, a damaged charger, or a worn-out battery.',
    category: 'general',
  },
  {
    question: 'How much does Apple Watch charging repair cost?',
    answer: 'A charging diagnostic is free. If cleaning the magnetic charging contacts resolves the issue, there is no charge. If a battery replacement is required, that starts from $99. We will provide a full quote before any work begins.',
    category: 'general',
  },
  {
    question: 'How long does Apple Watch charging repair take?',
    answer: 'Charging diagnostics take 15–20 minutes. Contact cleaning is done on the spot. If a battery replacement is needed, that adds another 30–45 minutes — most completed same day.',
    category: 'general',
  },
  {
    question: 'Do I need an appointment?',
    answer: 'No appointment needed. Walk in to our Braybrook or Spotswood store any day between 9am and 9pm.',
    category: 'general',
  },
]

const faqSchema = generateFAQSchema(faqs)

export default function AppleWatchChargingPortRepairPage() {
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
            <li className="text-charcoal font-medium">Charging Issues</li>
          </ol>
        </div>
      </nav>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Apple Watch Not Charging Repair Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Free Diagnostic · Magnetic Charging Repair · Battery Health Check
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Apple Watch won&apos;t charge? We diagnose and fix all Apple Watch charging issues in Melbourne — from debris on magnetic charging contacts to battery health and software faults. Free diagnostic with no obligation.
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
              { label: 'Free', sub: 'Diagnostic' },
              { label: 'Same Day', sub: 'Service' },
              { label: 'Lifetime', sub: 'Warranty' },
              { label: 'Walk-ins', sub: 'Welcome' },
            ].map((stat) => (
              <div key={stat.label} className="py-3">
                <div className="text-xl font-bold text-primary">{stat.label}</div>
                <div className="text-sm text-charcoal-light mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Charging Issues We Fix */}
      <section className="section-padding">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Apple Watch Charging Issues We Fix
            </h2>
            <p className="text-charcoal-light text-lg mb-6 leading-relaxed">
              Unlike iPhones, Apple Watch uses magnetic inductive charging — there is no physical charging port. Charging problems are usually related to the magnetic charging contacts, the charger cable itself, or the battery. Here is what we diagnose and fix:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { title: 'Magnetic Contact Cleaning', desc: 'Debris, sweat, or corrosion on the magnetic charging contacts on the back of the watch can prevent charging. We clean and restore the contacts.' },
                { title: 'Battery Health Assessment', desc: 'A badly degraded battery may no longer accept a charge. We check battery health and replace if needed — from $99.' },
                { title: 'Charger Compatibility Check', desc: 'Third-party or damaged charger cables can prevent charging. We test with certified chargers to isolate the fault.' },
                { title: 'Software & Firmware Reset', desc: 'Sometimes a software fault prevents the watch from recognising the charger. We can perform a reset and update if needed.' },
                { title: 'Charging Circuit Diagnostic', desc: 'In rare cases, the internal charging circuit may need assessment. We provide a written quote before any component-level work.' },
                { title: 'Post-Water Damage Charging', desc: 'Water ingress can cause charging failures. We assess corrosion on charging contacts and internal components after water exposure.' },
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

      {/* FAQ */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Apple Watch Charging FAQ
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
      <section className="section-padding">
        <div className="container-page">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-charcoal mb-4">Related Apple Watch Services</h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/apple-watch-repair-melbourne" className="px-4 py-2 bg-white hover:bg-primary hover:text-white border border-gray-border rounded-full text-sm font-medium text-charcoal transition-colors">
              Apple Watch Repair Melbourne
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
            { name: 'Apple Watch Series 5', href: '/apple-watch-series-5-charging-port-repair' },
            { name: 'Apple Watch Series 6', href: '/apple-watch-series-6-charging-port-repair' },
            { name: 'Apple Watch Series 7', href: '/apple-watch-series-7-charging-port-repair' },
            { name: 'Apple Watch Series 8', href: '/apple-watch-series-8-charging-port-repair' },
            { name: 'Apple Watch Series 9', href: '/apple-watch-series-9-charging-port-repair' },
            { name: 'Apple Watch Ultra', href: '/apple-watch-ultra-charging-port-repair' },
            { name: 'Apple Watch Ultra 2', href: '/apple-watch-ultra-2-charging-port-repair' },
            { name: 'Apple Watch SE', href: '/apple-watch-se-charging-port-repair' },
            { name: 'Apple Watch SE 2', href: '/apple-watch-se-2-charging-port-repair' },
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
            Apple Watch Not Charging? We Can Help.
          </h2>
          <p className="text-lg text-red-100 mb-8 max-w-xl mx-auto">
            Free diagnostic at our Braybrook or Spotswood store. Walk in any day 9am–9pm — no appointment needed.
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
