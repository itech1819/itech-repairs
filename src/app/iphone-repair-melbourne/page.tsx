import type { Metadata } from 'next'
import Link from 'next/link'
import { MODELS_BY_CATEGORY, IPHONE_REPAIR_SLUGS, suburbs, business, repairServices } from '@/data'
import { generateFAQSchema } from '@/lib/seo'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'
import { primaryLocation } from '@/data'

export const metadata: Metadata = {
  title: { absolute: 'iPhone Repair Melbourne – 15 Min Repairs | Cheapest Price | Lifetime Warranty | iTech Repairs' },
  description:
    'iPhone repair in Melbourne — screen from $79, battery from $69, charging port from $79. Walk in today, no booking needed. 15-minute on-the-spot repairs, cheapest price guaranteed, lifetime warranty. Braybrook & Spotswood.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/iphone-repair-melbourne',
  },
  openGraph: {
    title: 'iPhone Repair Melbourne – 15 Min Repairs | Cheapest Price | Lifetime Warranty | iTech Repairs',
    description: 'iPhone repair in Melbourne — screen from $79, battery from $69. Walk in today, no booking needed. 15-minute repairs, cheapest price guaranteed, lifetime warranty. Braybrook & Spotswood.',
    url: 'https://www.itechrepairs.com.au/iphone-repair-melbourne',
  },
}

const iphonePageFAQs = [
  {
    question: 'How much does iPhone screen repair cost in Melbourne?',
    answer: 'iPhone screen repair starts from $89 at iTech Repairs. Pricing varies by model — newer Pro Max models cost more than older models. Walk in for a free quote, or call us for an indicative price over the phone. We guarantee the cheapest price.',
    category: 'iphone',
  },
  {
    question: 'How long does iPhone repair take?',
    answer: 'Most iPhone screen repairs and battery replacements are completed on the spot in around 15 minutes while you wait. Charging port repairs take 15–20 minutes. Water damage and motherboard repairs are quoted with a timeframe — typically same day or next day.',
    category: 'iphone',
  },
  {
    question: 'Do you use genuine Apple parts?',
    answer: 'We use high-quality OEM-equivalent parts that meet or exceed Apple\'s original specifications. For select repairs we also offer genuine Apple-certified parts as an upgrade option. All parts are covered by our lifetime warranty on parts and labour regardless of grade.',
    category: 'iphone',
  },
  {
    question: 'What iPhone models do you repair?',
    answer: 'We repair every iPhone model from iPhone 6 through to the latest iPhone 17 Pro Max. We stock parts for current and popular models in-store, and can source parts for older or less common models within 1–2 business days.',
    category: 'iphone',
  },
  {
    question: 'Do you offer a warranty on iPhone repairs?',
    answer: 'Yes. Every iPhone repair at iTech Repairs carries a lifetime warranty on parts and labour. If the same fault returns after our repair, we fix it at no charge — no questions asked.',
    category: 'iphone',
  },
  {
    question: 'Will my Face ID still work after an iPhone screen repair?',
    answer: 'Yes. Our technicians use specialist software and tooling to preserve Face ID and True Tone calibration during every screen replacement. We test Face ID functionality after every screen repair before returning your device.',
    category: 'iphone',
  },
  {
    question: 'Do you repair iPhones with water damage?',
    answer: 'Yes. We offer professional iPhone water damage assessment and repair. If your iPhone has been exposed to liquid, bring it in immediately — do not try to charge it first. The sooner we can treat it, the better the recovery outcome.',
    category: 'iphone',
  },
  {
    question: 'Where are your iPhone repair stores?',
    answer: 'We have two stores in Melbourne\'s west: 16 W Central Park Ave, Braybrook VIC 3019 and 31 McLister St, Spotswood VIC 3015. Both are open 7 days a week from 9am to 9pm. No appointment needed.',
    category: 'iphone',
  },
]

const localBusinessSchema = generateRepairShopSchema(primaryLocation)
const faqSchema = generateFAQSchema(iphonePageFAQs)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'iPhone Repair Melbourne',
  description:
    'Expert iPhone repair services in Melbourne. Screen repair, battery replacement, charging port repair and more for all iPhone models.',
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
  serviceType: 'iPhone Repair',
}

const REPAIR_TO_CORE_SERVICE: Record<string, string> = {
  'screen-repair': '/iphone-screen-repair',
  'screen-replacement': '/iphone-screen-replacement',
  'battery-replacement': '/iphone-battery-replacement',
  'charging-port-repair': '/iphone-charging-port-repair',
  'charging-port-replacement': '/iphone-charging-port-repair',
  'back-glass-repair': '/iphone-back-glass-repair',
  'back-cover-replacement': '/iphone-back-cover-repair',
  'camera-repair': '/iphone-rear-camera-repair',
  'rear-camera-replacement': '/iphone-rear-camera-repair',
  'front-camera-replacement': '/iphone-front-camera-repair',
  'camera-lens-replacement': '/iphone-camera-lens-repair',
  'speaker-repair': '/iphone-speaker-repair',
  'loudspeaker-replacement': '/iphone-speaker-repair',
  'earpiece-replacement': '/iphone-earpiece-repair',
  'microphone-replacement': '/iphone-microphone-repair',
  'power-button-replacement': '/iphone-volume-button-repair',
  'volume-button-replacement': '/iphone-volume-button-repair',
  'vibrator-replacement': '/iphone-vibration-repair',
  'proximity-sensor-replacement': '/iphone-proximity-sensor-repair',
  'sim-card-reader-replacement': '/iphone-repair-melbourne',
  'face-id-repair': '/iphone-face-id-repair',
  'touch-screen-repair': '/iphone-touchscreen-repair',
  'ghost-touch-repair': '/iphone-ghost-touch-repair',
  'water-damage-assessment': '/iphone-water-damage-repair',
  'water-damage-repair': '/iphone-water-damage-repair',
  'data-recovery': '/iphone-data-recovery',
  'motherboard-repair': '/iphone-motherboard-repair',
  'diagnostic': '/iphone-diagnostic-service',
  'insurance-report': '/iphone-repair-melbourne',
  'inspection': '/iphone-repair-melbourne',
}

const iphoneModels = MODELS_BY_CATEGORY.iphone ?? []
const iphoneRepairs = repairServices.filter((r) =>
  IPHONE_REPAIR_SLUGS.includes(r.slug)
)

export default function IPhoneRepairMelbournePage() {
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
            <li className="text-charcoal font-medium">iPhone Repairs Melbourne</li>
          </ol>
        </div>
      </nav>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              iPhone Repair Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              All iPhone Models · 30+ Repair Services · On The Spot 15 Min Repairs
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Expert iPhone repairs for every model from iPhone 6 to the latest iPhone 17 Pro Max.
              Screen repair, battery replacement, charging port repair and more — with a lifetime
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
              { label: '33 Models', sub: 'Supported' },
              { label: '30 Repairs', sub: 'Available' },
              { label: '15 Minutes', sub: 'On The Spot' },
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

      {/* All iPhone Models */}
      <section className="section-padding">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              All iPhone Models We Repair
            </h2>
            <p className="text-charcoal-light text-lg">
              Select your iPhone model to see all available repair services and pricing.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {iphoneModels.map((model) => (
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

      {/* iPhone Repair Services */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              iPhone Repair Services
            </h2>
            <p className="text-charcoal-light text-lg">
              30 repair services available for all iPhone models.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {iphoneRepairs.map((repair) => (
              <Link
                key={repair.slug}
                href={REPAIR_TO_CORE_SERVICE[repair.slug] ?? '/iphone-repair-melbourne'}
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
              Why Trust iTech Repairs for Your iPhone?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: 'All iPhone Models Supported',
                  body: 'From iPhone 6 to the latest iPhone 17 Pro Max — we stock parts and have the expertise for every generation.',
                },
                {
                  title: 'Lifetime Warranty on All Repairs',
                  body: 'Every iPhone repair comes with a lifetime warranty on both parts and labour. If the same fault returns, we fix it free.',
                },
                {
                  title: 'On The Spot 15 Minute Repairs',
                  body: 'Screen and battery replacements done on the spot in around 15 minutes. Walk in — no appointments needed.',
                },
                {
                  title: 'Free Diagnostic',
                  body: 'Not sure what\'s wrong? Walk in for a free diagnostic assessment with no obligation to book a repair.',
                },
                {
                  title: 'Biometrics Preserved',
                  body: 'We use specialist tools to ensure Face ID and Touch ID continue working perfectly after every screen repair.',
                },
                {
                  title: 'Melbourne\'s Trusted Technicians',
                  body: 'Locally owned and operated in Braybrook, serving Western Melbourne with professional, honest service.',
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

      {/* Suburb Location Links */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Serving Melbourne &amp; Surrounds
            </h2>
            <p className="text-charcoal-light text-lg">
              iPhone repairs for customers across Western Melbourne. Click your suburb to learn more.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {suburbs.map((suburb) => (
              <Link
                key={suburb.slug}
                href={`/iphone-repair-${suburb.slug}`}
                className="px-4 py-2 bg-white hover:bg-primary hover:text-white border border-gray-border rounded-full text-sm font-medium text-charcoal transition-colors"
              >
                iPhone Repair {suburb.displayName}
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
              iPhone Repair FAQ
            </h2>
          </div>
          <div className="max-w-3xl mx-auto divide-y divide-gray-border">
            {iphonePageFAQs.map((faq) => (
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

      {/* iPhone Repair Internal Links */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-charcoal mb-6">
            iPhone Repair Services
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'iPhone Screen Repair', href: '/iphone-screen-repair' },
              { label: 'iPhone Battery Replacement', href: '/iphone-battery-replacement' },
              { label: 'iPhone Charging Port Repair', href: '/iphone-charging-port-repair' },
              { label: 'iPhone Water Damage Repair', href: '/iphone-water-damage-repair' },
              { label: 'Samsung Repair Melbourne', href: '/samsung-repair-melbourne' },
              { label: 'Sell My iPhone', href: '/sell-my-iphone' },
            ].map(({ label, href }) => (
              <Link key={href} href={href} className="text-sm text-primary hover:underline border border-gray-border px-3 py-1.5 rounded-full bg-white">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary text-white py-16">
        <div className="container-page text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Your iPhone Repaired Today?
          </h2>
          <p className="text-lg text-red-100 mb-8 max-w-xl mx-auto">
            Walk in to our Braybrook store — no appointment needed. Most iPhone repairs completed in
            under 30 minutes.
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
