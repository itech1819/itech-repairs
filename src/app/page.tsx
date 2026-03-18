import type { Metadata } from 'next'
import Link from 'next/link'
import { brands, MODELS_BY_CATEGORY, homepageFAQs, suburbs, business } from '@/data'
import { generateFAQSchema } from '@/lib/seo'
import { generateOrganizationSchema, generateWebsiteSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'

export const metadata: Metadata = {
  title: { absolute: 'iPhone Repair Melbourne | Cheapest Repairs Guaranteed | Done in 15 Minutes' },
  description:
    'Walk-in iPhone & phone repair in Melbourne. Cheapest repairs guaranteed — done in 15 minutes. Screen replacement from $79, battery from $79. Braybrook & Spotswood. Open 7 days.',
  alternates: { canonical: 'https://www.itechrepairs.com.au' },
  openGraph: {
    title: 'iPhone Repair Melbourne | Cheapest Repairs Guaranteed | Done in 15 Minutes',
    description:
      'Walk-in phone, tablet and laptop repairs in Melbourne\'s west. Cheapest prices guaranteed, repairs done in 15 minutes. iPhone, Samsung, MacBook, iPad & more. Open 7 days.',
    url: 'https://www.itechrepairs.com.au',
  },
}

const homepageSchemas = [
  generateOrganizationSchema(),
  generateWebsiteSchema(),
  generateFAQSchema(homepageFAQs),
]

const brandCards = [
  {
    slug: 'iphone',
    displayName: 'iPhone Repairs',
    href: '/iphone-repair-melbourne',
    modelCount: 33,
    repairCount: 30,
    icon: '📱',
    description: 'All models from iPhone 6 to iPhone 17 Pro Max',
  },
  {
    slug: 'samsung',
    displayName: 'Samsung Repairs',
    href: '/samsung-repair-melbourne',
    modelCount: 25,
    repairCount: 29,
    icon: '📲',
    description: 'Galaxy S, A, Z Fold & Z Flip series',
  },
  {
    slug: 'ipad',
    displayName: 'iPad Repairs',
    href: '/ipad-repair-melbourne',
    modelCount: 13,
    repairCount: 25,
    icon: '🖥️',
    description: 'iPad Air, Pro, Mini & standard iPad',
  },
  {
    slug: 'macbook',
    displayName: 'MacBook Repairs',
    href: '/macbook-repair-melbourne',
    modelCount: 24,
    repairCount: 22,
    icon: '💻',
    description: 'MacBook Air & MacBook Pro — all generations',
  },
  {
    slug: 'pixel',
    displayName: 'Google Pixel Repairs',
    href: '/google-pixel-repair-melbourne',
    modelCount: 15,
    repairCount: 29,
    icon: '📱',
    description: 'Pixel 6, 7, 8, 9 series and older models',
  },
]

const topIphoneRepairs = [
  { label: 'Screen Repair', href: '/iphone-screen-repair' },
  { label: 'Screen Replacement', href: '/iphone-screen-replacement' },
  { label: 'Battery Replacement', href: '/iphone-battery-replacement' },
  { label: 'Charging Port Repair', href: '/iphone-charging-port-repair' },
  { label: 'Back Glass Repair', href: '/iphone-back-glass-repair' },
  { label: 'Camera Repair', href: '/iphone-rear-camera-repair' },
  { label: 'Speaker Repair', href: '/iphone-speaker-repair' },
  { label: 'Water Damage Repair', href: '/iphone-water-damage-repair' },
]

const trustPoints = [
  {
    icon: '⚡',
    title: 'On The Spot 15 Minute Repairs',
    body: 'Walk in and walk out repaired — most repairs completed in 15 minutes on the spot.',
  },
  {
    icon: '⏱️',
    title: 'Many Repairs in 15 Minutes',
    body: 'Screen and battery replacements done while you wait in-store.',
  },
  {
    icon: '🛡️',
    title: 'Lifetime Warranty',
    body: 'Every repair carries a lifetime warranty on all parts and labour.',
  },
  {
    icon: '🔧',
    title: 'Melbourne-Based Expert Technicians',
    body: 'Our experienced local technicians have repaired thousands of devices.',
  },
  {
    icon: '🚶',
    title: 'Walk-Ins Always Welcome',
    body: 'No appointment needed — just come in during business hours.',
  },
  {
    icon: '🆓',
    title: 'Free Diagnostic & Quote',
    body: 'We assess your device and quote you before any work begins, at no charge.',
  },
]

const topIphoneModels = (MODELS_BY_CATEGORY.iphone ?? []).slice(0, 8)

export default function HomePage() {
  return (
    <>
      <SchemaScript schema={homepageSchemas} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-16 md:py-24">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
              Melbourne&apos;s Trusted iPhone &amp; Phone Repair Specialists
            </h1>
            <p className="text-base md:text-xl text-gray-300 mb-7 leading-relaxed">
              Expert <strong className="text-white">iPhone repair in Melbourne</strong> — screen replacement from $79, battery replacement from $79. Also Samsung, iPad, MacBook &amp; Google Pixel. Cheapest repairs guaranteed, done in 15 minutes. Walk in to our stores in <strong className="text-white">Braybrook</strong> or <strong className="text-white">Spotswood</strong> — serving Footscray, Yarraville and all of Melbourne&apos;s west.
            </p>
            <div className="flex flex-wrap gap-2 mb-7">
              {['15-Min Repairs', 'Lifetime Warranty', 'Walk-ins Welcome', 'Cheapest Guaranteed'].map(
                (badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary text-white text-xs font-semibold"
                  >
                    {badge}
                  </span>
                )
              )}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${business.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                    clipRule="evenodd"
                  />
                </svg>
                Call Now — {business.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-charcoal font-bold px-8 py-4 rounded-xl text-lg hover:bg-gray-100 transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Badges ─────────────────────────────────────────────────── */}
      <section className="bg-gray-surface border-b border-gray-border py-6">
        <div className="container-page">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { label: '5,000+', sub: 'Devices Repaired' },
              { label: '15 Min', sub: 'Fastest Repairs' },
              { label: 'Lifetime', sub: 'Warranty Included' },
              { label: 'Cheapest', sub: 'Prices Guaranteed' },
            ].map((stat) => (
              <div key={stat.label} className="py-3">
                <div className="text-2xl font-bold text-primary">{stat.label}</div>
                <div className="text-sm text-charcoal-light mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quick Service Links ───────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-border py-4">
        <div className="container-page">
          <div className="flex flex-wrap gap-3 justify-center text-sm">
            <Link href="/iphone-screen-repair" className="px-4 py-2 rounded-full bg-gray-surface border border-gray-border text-charcoal hover:border-primary hover:text-primary transition-colors font-medium">
              iPhone Screen Repair
            </Link>
            <Link href="/iphone-battery-replacement" className="px-4 py-2 rounded-full bg-gray-surface border border-gray-border text-charcoal hover:border-primary hover:text-primary transition-colors font-medium">
              iPhone Battery Replacement
            </Link>
            <Link href="/iphone-repair-cost" className="px-4 py-2 rounded-full bg-gray-surface border border-gray-border text-charcoal hover:border-primary hover:text-primary transition-colors font-medium">
              iPhone Repair Cost Guide
            </Link>
            <Link href="/apple-watch-battery-replacement" className="px-4 py-2 rounded-full bg-gray-surface border border-gray-border text-charcoal hover:border-primary hover:text-primary transition-colors font-medium">
              Apple Watch Battery Replacement
            </Link>
          </div>
        </div>
      </section>

      {/* ── Our Repair Services ───────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal mb-3">
              Our Repair Services
            </h2>
            <p className="text-charcoal-light text-lg max-w-2xl mx-auto">
              We specialise in repairs for all major devices. Select your device below to see all
              supported models and repair types.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {brandCards.map((card) => (
              <Link
                key={card.slug}
                href={card.href}
                className="card p-6 flex flex-col gap-3 hover:border-primary group"
              >
                <div className="text-4xl" aria-hidden="true">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-charcoal group-hover:text-primary transition-colors">
                  {card.displayName}
                </h3>
                <p className="text-sm text-charcoal-light">{card.description}</p>
                <div className="mt-auto pt-3 border-t border-gray-border flex gap-3 text-xs text-charcoal-light">
                  <span>{card.modelCount} models</span>
                  <span>·</span>
                  <span>{card.repairCount} repairs</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Popular iPhone Repairs ────────────────────────────────────────── */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal mb-3">
              Popular iPhone Repairs
            </h2>
            <p className="text-charcoal-light text-lg">
              The most common iPhone repair services we perform every day.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {topIphoneRepairs.map((repair) => (
              <Link
                key={repair.href}
                href={repair.href}
                className="card p-5 text-center hover:border-primary group"
              >
                <span className="text-sm font-semibold text-charcoal group-hover:text-primary transition-colors">
                  {repair.label}
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/iphone-repair-melbourne"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              View All iPhone Repairs
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose iTech Repairs ──────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal mb-3">
              Why Choose iTech Repairs?
            </h2>
            <p className="text-charcoal-light text-lg max-w-2xl mx-auto">
              Melbourne&apos;s trusted repair specialists with a commitment to quality, speed, and
              customer satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {trustPoints.map((point) => (
              <div
                key={point.title}
                className="flex gap-3 p-5 rounded-xl bg-gray-surface border border-gray-border"
              >
                <div className="text-3xl flex-shrink-0" aria-hidden="true">
                  {point.icon}
                </div>
                <div>
                  <h3 className="font-bold text-charcoal mb-2">{point.title}</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">{point.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── All iPhone Models ─────────────────────────────────────────────── */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal mb-3">
              All iPhone Models We Repair
            </h2>
            <p className="text-charcoal-light text-lg">
              From the latest iPhone 17 Pro Max to older models — we repair them all.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {topIphoneModels.map((model) => (
              <Link
                key={model.id}
                href={`/${model.repairHubSlug}`}
                className="card p-4 text-center text-sm font-medium text-charcoal hover:text-primary hover:border-primary transition-colors"
              >
                {model.displayName}
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/iphone-repair-melbourne"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              View All 33 iPhone Models
            </Link>
          </div>
        </div>
      </section>

      {/* ── Serving All Melbourne Suburbs ─────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal mb-3">
              Serving All Melbourne Suburbs
            </h2>
            <p className="text-charcoal-light text-lg max-w-3xl mx-auto">
              Based in Braybrook, we serve customers from across Western Melbourne and beyond. Drive
              in for a 15-minute on-the-spot repair from any of these suburbs.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {suburbs.map((suburb) => (
              <Link
                key={suburb.slug}
                href={`/iphone-repair-${suburb.slug}`}
                className="px-4 py-2 bg-gray-surface hover:bg-primary hover:text-white border border-gray-border rounded-full text-sm font-medium text-charcoal transition-colors"
              >
                {suburb.displayName}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ──────────────────────────────────────────────────────────── */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal mb-3">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto divide-y divide-gray-border">
            {homepageFAQs.map((faq) => (
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

      {/* ── SEO Content Section ───────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-page max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6">
            Phone Repair Melbourne — Fast, Affordable &amp; Guaranteed
          </h2>
          <div className="prose prose-gray max-w-none space-y-4 text-charcoal-light leading-relaxed">
            <p>
              Looking for <strong>iPhone screen repair in Melbourne</strong>? iTech Repairs is Melbourne&apos;s most trusted phone repair shop, offering on the spot 15 minute screen repairs with the cheapest price guaranteed. Whether your screen is cracked, shattered, or completely unresponsive, our technicians carry parts for every iPhone model — from iPhone 6 through to the latest iPhone 17 Pro Max — ready to fix your device while you wait.
            </p>
            <p>
              We operate from two conveniently located stores in <strong>Braybrook</strong> and <strong>Spotswood</strong>, serving customers across Western Melbourne including Footscray, Sunshine, Yarraville, Williamstown, Altona, Werribee, and beyond. Both stores are open <strong>7 days a week from 9am to 9pm</strong>, so you can walk in before work, during your lunch break, or on weekends — no appointment needed.
            </p>
            <h3 className="text-xl font-bold text-charcoal mt-6">iPhone Repair Melbourne — All Models, All Repairs</h3>
            <p>
              iTech Repairs handles more than just screen repairs. Our technicians perform over 30 different repair types across all iPhone models, including <strong>battery replacement</strong>, <strong>charging port repair</strong>, back glass repair, camera replacement, Face ID repair, water damage repair, and full motherboard-level diagnostics. Every repair comes with a <strong>lifetime warranty on parts and labour</strong> — if the same fault returns, we fix it free of charge.
            </p>
            <p>
              Our <strong>iPhone battery replacement in Melbourne</strong> service is one of the most popular we offer. If your iPhone is draining fast, shutting down unexpectedly, or running hot, a new battery can restore your phone to like-new performance. Most iPhone battery replacements are completed in just 15–20 minutes, and we use premium-grade cells that meet or exceed the original Apple specifications.
            </p>
            <h3 className="text-xl font-bold text-charcoal mt-6">Samsung Screen Repair Melbourne</h3>
            <p>
              We aren&apos;t just an iPhone repair shop. iTech Repairs is a leading destination for <strong>Samsung screen repair in Melbourne</strong>, covering the full Galaxy range including the S series, A series, Z Fold, and Z Flip. Samsung screens require specialist tooling and calibration — our technicians are trained and equipped to handle curved edge displays, in-display fingerprint sensors, and foldable screen assemblies. Walk in with your Samsung Galaxy and we&apos;ll have it repaired fast.
            </p>
            <h3 className="text-xl font-bold text-charcoal mt-6">Phone Repair Melbourne — Why Choose iTech Repairs?</h3>
            <p>
              There are many <strong>phone repair shops in Melbourne</strong>, but iTech Repairs stands apart in three ways: speed, price, and warranty. We genuinely complete most screen and battery repairs in 15 minutes on the spot — not "same day" meaning you drop it off and collect it later, but <em>right now, while you wait</em>. Our cheapest price guarantee means if you find a verified lower price for the same repair with the same warranty, we will beat it. And our lifetime warranty is exactly that — lifetime, with no asterisks.
            </p>
            <p>
              We also offer a completely <strong>free diagnostic service</strong>. If you&apos;re not sure what&apos;s wrong with your device, walk in and one of our technicians will assess it within minutes and provide a written quote at no cost. No obligation to proceed — just honest advice.
            </p>
            <h3 className="text-xl font-bold text-charcoal mt-6">Sell Your iPhone in Melbourne</h3>
            <p>
              In addition to repairs, iTech Repairs buys used, broken, and even sealed iPhones. If you&apos;ve upgraded to a new device and want instant cash for your old one, walk in to either of our stores for an on-the-spot valuation and same-day payment. We buy all iPhone models in any condition — cracked, water damaged, iCloud locked, or brand new in box. Visit our{' '}
              <Link href="/sell-my-device" className="text-primary hover:underline">Sell My Device</Link> page for more information.
            </p>
            <p>
              Whether you need an <strong>iPhone screen repair</strong>, a <strong>battery replacement</strong>, a <strong>Samsung screen repair</strong>, or you want to sell your old iPhone in Melbourne, iTech Repairs has you covered. Walk in to our Braybrook or Spotswood store today — open 7 days, 9am to 9pm, with no appointment required.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            {[
              { label: 'iPhone Repair Melbourne', href: '/iphone-repair-melbourne' },
              { label: 'iPhone Screen Repair', href: '/iphone-screen-repair' },
              { label: 'iPhone Battery Replacement', href: '/iphone-battery-replacement' },
              { label: 'Samsung Repair Melbourne', href: '/samsung-repair-melbourne' },
              { label: 'MacBook Repair Melbourne', href: '/macbook-repair-melbourne' },
              { label: 'iPad Repair Melbourne', href: '/ipad-repair-melbourne' },
              { label: 'iPhone Charging Port Repair', href: '/iphone-charging-port-repair' },
              { label: 'iPhone Water Damage Repair', href: '/iphone-water-damage-repair' },
              { label: 'Sell My Device Melbourne', href: '/sell-my-device' },
            ].map(({ label, href }) => (
              <Link key={href} href={href} className="text-sm text-primary hover:underline border border-gray-border px-3 py-1.5 rounded-full bg-gray-surface">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────────────────── */}
      <section className="bg-primary text-white py-16">
        <div className="container-page text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Ready to Get Your Device Repaired?
          </h2>
          <p className="text-lg text-red-100 mb-8 max-w-xl mx-auto">
            Walk in any time during business hours — no appointment needed. Most repairs done in 15
            minutes.
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
