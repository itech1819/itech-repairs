import Link from 'next/link'
import type { Suburb, RepairService, Brand } from '@/types'
import { business, primaryLocation } from '@/data'
import SchemaScript from '@/components/seo/SchemaScript'
import { generateRepairShopSchema } from '@/lib/schema'
import { generateFAQSchema } from '@/lib/seo'

interface Props {
  suburb: Suburb
  deviceCategory: string
  deviceDisplayName: string
  repair?: RepairService  // undefined = suburb-device (hub), defined = suburb-repair (specific repair)
  brand: Brand
}

export default function SuburbRepairPage({ suburb, deviceCategory, deviceDisplayName, repair, brand }: Props) {
  const schema = generateRepairShopSchema(primaryLocation)

  const faqItems = [
    {
      question: `Do you repair phones from ${suburb.displayName}?`,
      answer: `Yes — we regularly serve customers from ${suburb.displayName}. Our stores in Braybrook and Spotswood are a short drive away and most repairs are completed while you wait in 15–20 minutes.`,
      category: 'general',
    },
    {
      question: 'Do I need an appointment?',
      answer: 'No appointment needed. Walk in anytime during business hours. 7 Days 9am–9pm.',
      category: 'general',
    },
    {
      question: 'How much does an iPhone repair cost?',
      answer: 'Pricing depends on the model and repair type. Screen replacements start from $89 and battery replacements from $69. We price-match and offer a lifetime warranty on all repairs.',
      category: 'pricing',
    },
    {
      question: 'Do you offer a warranty?',
      answer: 'Yes. All repairs come with a lifetime warranty on parts and labour.',
      category: 'warranty',
    },
  ]

  const faqSchema = generateFAQSchema(faqItems)

  const pageTitle = repair
    ? `${deviceDisplayName} ${repair.displayName} near ${suburb.displayName}`
    : `${deviceDisplayName} Repair near ${suburb.displayName}`

  const repairLinks = [
    { slug: `${suburb.slug}-iphone-screen-repair`, label: 'Screen Repair' },
    { slug: `${suburb.slug}-iphone-battery-replacement`, label: 'Battery Replacement' },
    { slug: `${suburb.slug}-iphone-charging-port-repair`, label: 'Charging Port Repair' },
    { slug: `${suburb.slug}-iphone-water-damage-repair`, label: 'Water Damage Repair' },
    { slug: `${suburb.slug}-iphone-camera-repair`, label: 'Camera Repair' },
  ]

  // Suppress unused variable warning — brand is available for future use
  void brand
  void deviceCategory

  return (
    <>
      <SchemaScript schema={[schema, faqSchema]} />

      {/* Hero */}
      <section className="bg-charcoal text-white py-12 md:py-16">
        <div className="container-page">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href={`/iphone-repair-${suburb.slug}`} className="hover:text-white">{deviceDisplayName} Repair {suburb.displayName}</Link>
            {repair && (
              <>
                <span className="mx-2">/</span>
                <span className="text-white">{repair.displayName}</span>
              </>
            )}
          </nav>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4">
            {pageTitle} — Melbourne&apos;s Fastest Repair Specialists
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mb-6">
            {repair
              ? `Need ${repair.displayName.toLowerCase()} near ${suburb.displayName}? iTech Repairs in Braybrook is your closest specialist — most repairs done in 15–20 minutes while you wait.`
              : `Looking for ${deviceDisplayName} repairs near ${suburb.displayName}? Visit iTech Repairs in Braybrook or Spotswood — no appointment needed, lifetime warranty on every repair.`
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={business.phoneHref} className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3 rounded-lg transition-colors text-sm sm:text-base">
              Call {business.phoneDisplay}
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-lg transition-colors text-sm sm:text-base">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* About the service for this suburb */}
      <section className="py-10 md:py-14 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">
                {repair ? repair.displayName : `${deviceDisplayName} Repairs`} for {suburb.displayName} Residents
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {suburb.displayName} is in the {suburb.region} area, and iTech Repairs is your most convenient local repair option.
                We operate from two stores — Braybrook (16 W Central Park Ave) and Spotswood (31 McLister St) — both accessible from {suburb.displayName} via the Western Ring Road, Ballarat Road, or Princes Highway.
              </p>
              {repair ? (
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our {repair.displayName.toLowerCase()} service covers all {deviceDisplayName} models.
                  {repair.description ? ` ${repair.description}` : ''} Every repair includes a lifetime warranty on parts and labour, and most jobs are completed while you wait in under 20 minutes.
                </p>
              ) : (
                <p className="text-gray-600 leading-relaxed mb-4">
                  We repair all {deviceDisplayName} models — screen replacements, battery replacements, charging port repairs, water damage, camera repairs and more.
                  No appointment needed. Walk in and most repairs are done in 15–20 minutes.
                </p>
              )}
              <ul className="space-y-2 text-gray-700 text-sm mb-6">
                <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Lifetime warranty on parts &amp; labour</li>
                <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Walk in — no appointment needed</li>
                <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Most repairs 15–20 minutes</li>
                <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Cheapest prices in Melbourne — guaranteed</li>
                <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> All {deviceDisplayName} models supported</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={business.phoneHref} className="btn-primary text-sm">Call Now — {business.phoneDisplay}</a>
                <Link href="/contact" className="btn-outline text-sm border-charcoal text-charcoal hover:bg-charcoal hover:text-white">Get a Quote</Link>
              </div>
            </div>
            <div className="bg-gray-surface rounded-xl p-5 border border-gray-200 h-fit">
              <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Our Locations</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <div className="font-semibold">Braybrook Store</div>
                  <div className="text-gray-600">16 W Central Park Ave<br />Braybrook VIC 3019</div>
                  <a href="https://maps.google.com/?q=16+W+Central+Park+Ave+Braybrook+VIC+3019" target="_blank" rel="noopener noreferrer" className="text-primary text-xs hover:underline">Get Directions →</a>
                </div>
                <div>
                  <div className="font-semibold">Spotswood Store</div>
                  <div className="text-gray-600">31 McLister St<br />Spotswood VIC 3015</div>
                  <a href="https://maps.google.com/?q=31+McLister+St+Spotswood+VIC+3015" target="_blank" rel="noopener noreferrer" className="text-primary text-xs hover:underline">Get Directions →</a>
                </div>
                <div className="pt-2 border-t border-gray-200">
                  <div className="font-semibold">Hours</div>
                  <div className="text-gray-600">7 Days: 9am–9pm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Repair options for this suburb */}
      <section className="py-10 md:py-14 bg-gray-50">
        <div className="container-page">
          <h2 className="text-xl sm:text-2xl font-bold mb-6">iPhone Repair Services Near {suburb.displayName}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {repairLinks.map((r) => (
              <Link key={r.slug} href={`/${r.slug}`} className="card p-4 hover:border-primary group">
                <h3 className="font-semibold text-gray-900 group-hover:text-primary text-sm">{r.label} near {suburb.displayName}</h3>
                <p className="text-gray-600 text-xs mt-1">Fast, affordable, lifetime warranty</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-10 bg-white">
        <div className="container-page">
          <h2 className="text-lg font-bold mb-4">Explore iPhone Repair Options</h2>
          <div className="flex flex-wrap gap-2">
            <Link href="/iphone-repair-melbourne" className="text-sm text-primary hover:underline border border-gray-200 px-3 py-1.5 rounded-full">iPhone Repair Melbourne</Link>
            <Link href="/iphone-repair-braybrook" className="text-sm text-primary hover:underline border border-gray-200 px-3 py-1.5 rounded-full">iPhone Repair Braybrook</Link>
            <Link href="/iphone-repair-spotswood" className="text-sm text-primary hover:underline border border-gray-200 px-3 py-1.5 rounded-full">iPhone Repair Spotswood</Link>
            <Link href="/iphone-repair-footscray" className="text-sm text-primary hover:underline border border-gray-200 px-3 py-1.5 rounded-full">iPhone Repair Footscray</Link>
            <Link href="/contact" className="text-sm text-primary hover:underline border border-gray-200 px-3 py-1.5 rounded-full">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-10 md:py-14 bg-gray-50">
        <div className="container-page max-w-3xl">
          <h2 className="text-xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map((faq) => (
              <div key={faq.question} className="bg-white rounded-lg border border-gray-200 p-4">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{faq.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-10 bg-primary text-white">
        <div className="container-page text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">Ready to Fix Your {deviceDisplayName}?</h2>
          <p className="text-white/80 mb-6 text-sm">Walk in today or call ahead. Most repairs done in 15–20 minutes.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={business.phoneHref} className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors text-sm">
              Call {business.phoneDisplay}
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-primary transition-colors text-sm">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
