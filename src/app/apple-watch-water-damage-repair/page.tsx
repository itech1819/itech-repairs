import type { Metadata } from 'next'
import Link from 'next/link'
import { business, primaryLocation } from '@/data'
import { generateFAQSchema } from '@/lib/seo'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'

export const metadata: Metadata = {
  title: 'Apple Watch Water Damage Repair Melbourne',
  description:
    'Apple Watch water damage repair in Melbourne. Corrosion cleaning, diagnostic and component repair. All series supported. Free assessment. Walk in Braybrook or Spotswood.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/apple-watch-water-damage-repair',
  },
  openGraph: {
    title: 'Apple Watch Water Damage Repair Melbourne',
    description: 'Apple Watch water damage repair in Melbourne. Corrosion cleaning, diagnostic and component repair. All series supported. Free assessment. Walk in Braybrook or Spotswood.',
    url: 'https://www.itechrepairs.com.au/apple-watch-water-damage-repair',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Apple Watch Water Damage Repair Melbourne',
  description:
    'Apple Watch water damage repair in Melbourne. Corrosion cleaning, full diagnostic and component-level repair. Free assessment with no obligation. All Apple Watch series supported.',
  provider: {
    '@type': 'RepairShop',
    name: business.name,
    telephone: business.phone,
  },
  areaServed: { '@type': 'City', name: 'Melbourne' },
  serviceType: 'Apple Watch Water Damage Repair',
}

const faqs = [
  {
    question: 'Can a water damaged Apple Watch be repaired?',
    answer: 'Many water damaged Apple Watches can be repaired, especially if brought in quickly. We perform a full assessment including corrosion cleaning, component-level diagnostic, and repair where possible. The sooner you bring it in, the better the outcome.',
    category: 'general',
  },
  {
    question: 'Isn\'t the Apple Watch water resistant?',
    answer: 'Apple Watch models from Series 5 onwards have water resistance ratings (typically 50m WR or IP6X), but water resistance degrades over time and is not the same as waterproof. Water can enter through compromised seals, especially on older models or after a screen replacement.',
    category: 'general',
  },
  {
    question: 'How much does Apple Watch water damage repair cost?',
    answer: 'The initial water damage assessment is free. Repair costs depend on the extent of damage and what components need cleaning or replacement. We provide a written quote before any work begins.',
    category: 'general',
  },
  {
    question: 'What should I do immediately after my Apple Watch gets water damaged?',
    answer: 'Do not charge the watch, do not press any buttons, and bring it to our store as soon as possible. Avoid using rice — it does not remove moisture effectively. Prompt professional assessment gives the best chance of successful repair.',
    category: 'general',
  },
  {
    question: 'How long does water damage repair take?',
    answer: 'Initial assessment takes 15–20 minutes. Full corrosion cleaning and component drying typically takes 1–2 hours. More complex component repairs may require additional time. We will advise on timeframes when you bring the watch in.',
    category: 'general',
  },
]

const faqSchema = generateFAQSchema(faqs)

export default function AppleWatchWaterDamageRepairPage() {
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
            <li className="text-charcoal font-medium">Water Damage Repair</li>
          </ol>
        </div>
      </nav>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Apple Watch Water Damage Repair Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Free Assessment · Corrosion Cleaning · Component Repair · All Series
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Water-damaged Apple Watch? Act fast — the sooner we assess it, the better the chance of recovery. Our technicians in Braybrook and Spotswood provide a free water damage assessment and corrosion cleaning service for all Apple Watch models.
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
              { label: 'Free', sub: 'Assessment' },
              { label: 'All Series', sub: 'Supported' },
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

      {/* What We Do */}
      <section className="section-padding">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Our Apple Watch Water Damage Service
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { title: 'Free Water Damage Assessment', desc: 'We inspect your Apple Watch for water ingress, corrosion, and component damage at no charge before recommending any repair.' },
                { title: 'Corrosion Cleaning', desc: 'Ultrasonic and manual cleaning of corroded components to remove mineral deposits left by water and restore electrical connections.' },
                { title: 'Charging Contact Repair', desc: 'Water damage to the magnetic charging contacts can prevent charging — we clean and restore these contacts.' },
                { title: 'Display & Screen Assessment', desc: 'Water ingress can fog the display or damage the screen assembly. We assess and replace display components where needed.' },
                { title: 'Battery Replacement', desc: 'Water-damaged batteries can swell or lose capacity. We replace the battery as part of a full water damage service.' },
                { title: 'Component-Level Repair', desc: 'For severe water damage, we can assess and repair or replace individual components with a written quote provided upfront.' },
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
              Apple Watch Water Damage FAQ
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
            <Link href="/apple-watch-free-device-inspection" className="px-4 py-2 bg-white hover:bg-primary hover:text-white border border-gray-border rounded-full text-sm font-medium text-charcoal transition-colors">
              Free Apple Watch Diagnostic
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
            { name: 'Apple Watch Series 5', href: '/apple-watch-series-5-water-damage-repair' },
            { name: 'Apple Watch Series 6', href: '/apple-watch-series-6-water-damage-repair' },
            { name: 'Apple Watch Series 7', href: '/apple-watch-series-7-water-damage-repair' },
            { name: 'Apple Watch Series 8', href: '/apple-watch-series-8-water-damage-repair' },
            { name: 'Apple Watch Series 9', href: '/apple-watch-series-9-water-damage-repair' },
            { name: 'Apple Watch Ultra', href: '/apple-watch-ultra-water-damage-repair' },
            { name: 'Apple Watch Ultra 2', href: '/apple-watch-ultra-2-water-damage-repair' },
            { name: 'Apple Watch SE', href: '/apple-watch-se-water-damage-repair' },
            { name: 'Apple Watch SE 2', href: '/apple-watch-se-2-water-damage-repair' },
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
            Apple Watch Water Damaged? Act Fast.
          </h2>
          <p className="text-lg text-red-100 mb-8 max-w-xl mx-auto">
            The sooner you bring it in, the better the chance of recovery. Free water damage assessment at our Braybrook or Spotswood store — walk in any day 9am–9pm.
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
