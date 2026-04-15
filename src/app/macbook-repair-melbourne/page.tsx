import type { Metadata } from 'next'
import Link from 'next/link'
import { MODELS_BY_CATEGORY, MACBOOK_REPAIR_SLUGS, suburbs, business, repairServices } from '@/data'
import { generateFAQSchema } from '@/lib/seo'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'
import { primaryLocation } from '@/data'

export const metadata: Metadata = {
  title: { absolute: 'MacBook Repair Melbourne – Screen, Battery & Keyboard | Cheapest Price | Lifetime Warranty | iTech Repairs' },
  description:
    'MacBook repair in Melbourne — screen replacement, battery, keyboard, logic board & water damage. Cheapest price guaranteed, lifetime warranty, free diagnostic. Walk in Braybrook or Spotswood — open 7 days.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/macbook-repair-melbourne',
  },
  openGraph: {
    title: 'MacBook Repair Melbourne – Screen, Battery & Keyboard | Cheapest Price | Lifetime Warranty | iTech Repairs',
    description: 'MacBook repair in Melbourne — screen, battery, keyboard, logic board & water damage. Cheapest price guaranteed, lifetime warranty, free diagnostic. Open 7 days.',
    url: 'https://www.itechrepairs.com.au/macbook-repair-melbourne',
  },
}

const macbookPageFAQs = [
  {
    question: 'How much does MacBook repair cost in Melbourne?',
    answer: 'MacBook repair costs vary by model and fault type. Screen replacement starts from $249, battery replacement from $179, keyboard replacement from $199, and logic board repairs from $299. Walk in for a free diagnostic and written quote before any work begins.',
    category: 'macbook',
  },
  {
    question: 'How long does MacBook repair take?',
    answer: 'Battery replacements and keyboard swaps typically take 1–2 hours same day. Screen replacements take 2–4 hours. Logic board and water damage repairs may take 1–3 business days depending on severity. We always give you an estimated timeframe upfront.',
    category: 'macbook',
  },
  {
    question: 'Do you repair MacBook logic boards?',
    answer: 'Yes. We perform component-level microsoldering repairs on MacBook logic boards, including No Power faults, boot loops, liquid damage corrosion, and failed GPU or power management chips. Logic board repair is often far cheaper than a full board replacement.',
    category: 'macbook',
  },
  {
    question: 'What MacBook models do you repair?',
    answer: 'We repair all MacBook Air and MacBook Pro models — from 2015 Intel models through to the latest M3 and M4 chip Macs. Both 13-inch and 16-inch MacBook Pro models are supported, along with all MacBook Air sizes.',
    category: 'macbook',
  },
  {
    question: 'Is there a warranty on MacBook repairs?',
    answer: 'Yes. Every MacBook repair at iTech Repairs carries a lifetime warranty on parts and labour. If the same fault returns after our repair, we fix it again at no charge. This applies to all MacBook screen, battery, keyboard, and logic board repairs.',
    category: 'macbook',
  },
  {
    question: 'Can you repair water damaged MacBooks?',
    answer: 'Yes. We offer professional MacBook water damage assessment and repair using ultrasonic cleaning and microsoldering techniques. The sooner you bring your MacBook in after liquid exposure — and without charging it — the better the outcome.',
    category: 'macbook',
  },
  {
    question: 'Do you repair MacBook Air and MacBook Pro?',
    answer: 'We repair both MacBook Air and MacBook Pro, including all current Apple Silicon models (M1, M2, M3, M4) and older Intel models. Whether it\'s a screen crack, dead battery, sticky keyboard or liquid damage, we can help.',
    category: 'macbook',
  },
  {
    question: 'Is there free parking near your MacBook repair store?',
    answer: 'Yes. Our Braybrook store has ample free parking on and around the surrounding streets. We are also a short drive from Footscray, Sunshine, Yarraville, and Williamstown.',
    category: 'macbook',
  },
]

const localBusinessSchema = generateRepairShopSchema(primaryLocation)
const faqSchema = generateFAQSchema(macbookPageFAQs)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'MacBook Repair Melbourne',
  description:
    'Expert MacBook repair services in Melbourne. Screen replacement, battery, keyboard, trackpad and logic board repairs for all MacBook Air and MacBook Pro models.',
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
  serviceType: 'MacBook Repair',
}

const MACBOOK_REPAIR_TO_SERVICE: Record<string, string> = {
  'screen-repair': '/macbook-screen-repair',
  'screen-replacement': '/macbook-screen-repair',
  'display-replacement': '/macbook-screen-repair',
  'battery-replacement': '/macbook-battery-replacement',
  'keyboard-replacement': '/macbook-keyboard-repair',
  'trackpad-replacement': '/macbook-trackpad-repair',
  'water-damage-assessment': '/macbook-water-damage-repair',
  'water-damage-repair': '/macbook-water-damage-repair',
  'diagnostic': '/macbook-free-device-inspection',
  'inspection': '/macbook-free-device-inspection',
  'insurance-report': '/macbook-insurance-damage-report',
}

const macbookModels = MODELS_BY_CATEGORY.macbook ?? []
const macbookRepairs = repairServices.filter((r) => MACBOOK_REPAIR_SLUGS.includes(r.slug))

export default function MacBookRepairMelbournePage() {
  return (
    <>
      <SchemaScript schema={[localBusinessSchema, serviceSchema, faqSchema]} />

      {/* Breadcrumbs */}
      <nav
        aria-label="Breadcrumb"
        className="bg-gray-surface border-b border-gray-border py-3"
      >
        <div className="container-page">
          <ol className="flex items-center gap-2 text-sm text-charcoal-light">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal font-medium">MacBook Repairs Melbourne</li>
          </ol>
        </div>
      </nav>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              MacBook Repair Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              All MacBook Models · 22 Repair Services · Same-Day Service
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Professional MacBook repairs in Melbourne for all MacBook Air and MacBook Pro models.
              Screen replacement, battery, keyboard, trackpad, logic board and more — with a lifetime
              warranty on all parts and labour.
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
              { label: '24 Models', sub: 'Supported' },
              { label: '22 Repairs', sub: 'Available' },
              { label: 'Same Day', sub: 'Most Repairs' },
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

      {/* All MacBook Models */}
      <section className="section-padding">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              All MacBook Models We Repair
            </h2>
            <p className="text-charcoal-light text-lg">
              Select your MacBook model to see all available repair services and pricing.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {macbookModels.map((model) => (
              <Link
                key={model.id}
                href={`/${model.repairHubSlug}`}
                className="card p-4 text-center text-sm font-medium text-charcoal hover:text-primary hover:border-primary transition-colors"
              >
                {model.displayName}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MacBook Repair Services */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              MacBook Repair Services
            </h2>
            <p className="text-charcoal-light text-lg">
              22 repair services available for all MacBook models.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {macbookRepairs.map((repair) => (
              <Link
                key={repair.slug}
                href={MACBOOK_REPAIR_TO_SERVICE[repair.slug] ?? '/macbook-repair-melbourne'}
                className="card p-5 hover:border-primary group"
              >
                <h3 className="font-semibold text-charcoal text-sm group-hover:text-primary transition-colors mb-1">
                  {repair.displayName}
                </h3>
                <p className="text-xs text-charcoal-light">{repair.estimatedTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust iTech Repairs */}
      <section className="section-padding">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8 text-center">
              Why Trust iTech Repairs for Your MacBook?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: 'Intel & Apple Silicon Supported',
                  body: 'We repair MacBooks running Intel processors as well as the latest M1, M2, M3, and M4 chip models.',
                },
                {
                  title: 'Lifetime Warranty',
                  body: 'Every MacBook repair comes with a lifetime warranty on parts and labour. Same fault returns? We fix it free.',
                },
                {
                  title: 'Logic Board Specialists',
                  body: 'Component-level microsoldering for MacBook logic board failures — No Power, boot loops, liquid damage and more.',
                },
                {
                  title: 'Data Safe Repairs',
                  body: 'We prioritise your data throughout every repair. For complex jobs, we\'ll advise on backup best practices before starting.',
                },
                {
                  title: 'Keyboard & Trackpad Experts',
                  body: 'Butterfly and scissor keyboard replacement, Force Touch trackpad repairs — done properly with full testing.',
                },
                {
                  title: 'Free Diagnostic',
                  body: 'Walk in for a free MacBook assessment with a full written quote before any work begins. No obligation.',
                },
              ].map((point) => (
                <div key={point.title} className="p-6 rounded-xl bg-gray-surface border border-gray-border">
                  <h3 className="font-bold text-charcoal mb-2">{point.title}</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">{point.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Apple Mac Repairs Melbourne — Semantic Content Section */}
      <section className="section-padding bg-white">
        <div className="container-page max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
            Apple Mac Repairs Melbourne
          </h2>
          <div className="prose prose-gray max-w-none space-y-4 text-charcoal-light leading-relaxed">
            <p>
              Looking for <strong>Apple Mac repairs in Melbourne</strong>? iTech Repairs is a specialist in all Apple laptop repairs, including <strong>MacBook Air</strong>, <strong>MacBook Pro</strong> and older Mac models. Whether you call it a Mac, MacBook, Apple laptop, or just a Mac computer — our technicians handle every generation from 2015 Intel models through to the latest <strong>M4 Apple Silicon Macs</strong>.
            </p>
            <p>
              Our <strong>mac repairs Melbourne</strong> service covers the full spectrum of faults. From a cracked MacBook screen to a dead battery, a sticky or broken keyboard, a faulty trackpad, logic board failure, or liquid damage — we diagnose and fix it. We stock parts for MacBook Air 13&quot;, MacBook Air 15&quot;, MacBook Pro 13&quot;, MacBook Pro 14&quot;, and MacBook Pro 16&quot; across all recent generations.
            </p>
            <p>
              If you&apos;ve searched for <strong>apple laptop repair near me</strong>, <strong>apple mac repair melbourne</strong>, or <strong>macbook repair near me</strong>, you&apos;re in the right place. We operate from two convenient Melbourne locations in <strong>Braybrook</strong> and <strong>Spotswood</strong>, open 7 days a week. Walk in for a <strong>free MacBook diagnostic</strong> — no appointment needed and no obligation to proceed.
            </p>
            <p>
              Unlike generic repair shops, our technicians are trained specifically for <strong>Apple MacBook repairs</strong>. We handle both software diagnostics and component-level hardware repairs, including <strong>MacBook logic board repair</strong>, microsoldering, SSD upgrades, and data recovery from failed drives. All <strong>mac repairs</strong> carry a lifetime warranty on parts and labour.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            {[
              { label: 'MacBook Screen Repair', href: '/macbook-screen-repair' },
              { label: 'MacBook Battery Replacement', href: '/macbook-battery-replacement' },
              { label: 'MacBook Keyboard Repair', href: '/macbook-keyboard-repair' },
              { label: 'MacBook Trackpad Repair', href: '/macbook-trackpad-repair' },
              { label: 'MacBook Water Damage Repair', href: '/macbook-water-damage-repair' },
              { label: 'Sell My MacBook', href: '/sell-my-macbook' },
              { label: 'Need iPhone Repair Instead?', href: '/iphone-repair-melbourne' },
            ].map(({ label, href }) => (
              <Link key={href} href={href} className="text-sm text-primary hover:underline border border-gray-border px-3 py-1.5 rounded-full bg-gray-surface">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MacBook Repair Cost */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
            MacBook Repair Cost Melbourne
          </h2>
          <p className="text-charcoal-light text-lg mb-8">
            We always provide a <strong>free written quote</strong> before any work begins. Below are our typical starting prices for the most common MacBook repairs. Final pricing depends on your specific model and the extent of the fault.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { repair: 'MacBook Screen Replacement', price: 'From $249', note: 'MacBook Air & Pro — all sizes' },
              { repair: 'MacBook Battery Replacement', price: 'From $179', note: 'All Intel & Apple Silicon models' },
              { repair: 'MacBook Keyboard Replacement', price: 'From $199', note: 'Butterfly & scissor switch keyboards' },
              { repair: 'MacBook Logic Board Repair', price: 'From $299', note: 'Component-level microsoldering' },
              { repair: 'MacBook Water Damage Repair', price: 'From $199', note: 'Ultrasonic cleaning & board repair' },
              { repair: 'MacBook Trackpad Repair', price: 'From $149', note: 'Force Touch & standard trackpad' },
              { repair: 'MacBook SSD Upgrade', price: 'From $199', note: 'Storage expansion & data transfer' },
              { repair: 'MacBook Free Diagnostic', price: 'Free', note: 'Written quote, no obligation' },
            ].map((item) => (
              <div key={item.repair} className="p-5 rounded-xl bg-white border border-gray-border flex justify-between items-center gap-4">
                <div>
                  <div className="font-semibold text-charcoal text-sm">{item.repair}</div>
                  <div className="text-xs text-charcoal-light mt-0.5">{item.note}</div>
                </div>
                <div className="text-primary font-bold text-sm flex-shrink-0">{item.price}</div>
              </div>
            ))}
          </div>
          <p className="text-sm text-charcoal-light mt-6">
            Prices shown are starting prices. Walk in for a free diagnostic and exact quote for your MacBook model. All repairs include a lifetime warranty on parts and labour.
          </p>
        </div>
      </section>

      {/* Suburb Location Links */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Serving Melbourne &amp; Surrounds
            </h2>
            <p className="text-charcoal-light text-lg">
              MacBook repairs for customers across Western Melbourne.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {suburbs.map((suburb) => (
              <Link
                key={suburb.slug}
                href={`/macbook-repair-${suburb.slug}`}
                className="px-4 py-2 bg-white hover:bg-primary hover:text-white border border-gray-border rounded-full text-sm font-medium text-charcoal transition-colors"
              >
                MacBook Repair {suburb.displayName}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              MacBook Repair FAQ
            </h2>
          </div>
          <div className="max-w-3xl mx-auto divide-y divide-gray-border">
            {macbookPageFAQs.map((faq) => (
              <details key={faq.question} className="py-5 group">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="font-semibold text-charcoal pr-4">{faq.question}</span>
                  <span className="text-primary flex-shrink-0 group-open:rotate-180 transition-transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
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
            Need Your MacBook Repaired?
          </h2>
          <p className="text-lg text-red-100 mb-8 max-w-xl mx-auto">
            Walk in to our Braybrook store for a free MacBook diagnostic. No appointment necessary.
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
