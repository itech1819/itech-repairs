import type { Metadata } from 'next'
import Link from 'next/link'
import { primaryLocation } from '@/data'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'

export const metadata: Metadata = {
  title: 'Nokia 6.2 Repair Melbourne | Screen, Battery & More',
  description:
    'Nokia 6.2 repair in Melbourne. Screen replacement, battery replacement, charging port repair, water damage repair and free diagnostic. Lifetime warranty. Walk in Braybrook or Spotswood.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/nokia-6-2-repair',
  },
  openGraph: {
    title: 'Nokia 6.2 Repair Melbourne | Screen, Battery & More',
    description: 'Nokia 6.2 repair in Melbourne. Lifetime warranty. Walk in today.',
    url: 'https://www.itechrepairs.com.au/nokia-6-2-repair',
  },
}

const localBusinessSchema = generateRepairShopSchema(primaryLocation)

const services = [
  { name: 'Screen Replacement', price: 'From $69', href: '/nokia-6-2-screen-replacement', serviceSlug: 'screen-replacement' },
  { name: 'Battery Replacement', price: 'From $59', href: '/nokia-6-2-battery-replacement', serviceSlug: 'battery-replacement' },
  { name: 'Charging Port Repair', price: 'From $55', href: '/nokia-6-2-charging-port-repair', serviceSlug: 'charging-port-repair' },
  { name: 'Water Damage Repair', price: 'From $69', href: '/nokia-6-2-water-damage-repair', serviceSlug: 'water-damage-repair' },
  { name: 'Free Diagnostic', price: 'Free', href: '/nokia-6-2-free-device-inspection', serviceSlug: 'free-device-inspection' },
]

export default function Nokia62RepairPage() {
  return (
    <>
      <SchemaScript schema={[localBusinessSchema]} />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-gray-surface border-b border-gray-border py-3">
        <div className="container-page">
          <ol className="flex items-center gap-2 text-sm text-charcoal-light">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/nokia-phone-repair-melbourne" className="hover:text-primary transition-colors">Nokia Repairs</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal font-medium">Nokia 6.2</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Nokia 6.2 Repair Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Screen Replacement · Battery Replacement · Charging Port · Lifetime Warranty
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Book Repair</Link>
              <Link href="tel:+61390016199" className="btn-outline-white">Call Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-charcoal mb-8 text-center">
            Nokia 6.2 Repair Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((svc) => (
              <Link
                key={svc.serviceSlug}
                href={svc.href}
                className="card p-6 hover:shadow-md transition-shadow group"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-charcoal group-hover:text-primary transition-colors">
                    {svc.name}
                  </h3>
                  <span className="text-primary font-bold text-sm">{svc.price}</span>
                </div>
                <p className="text-sm text-charcoal-light">
                  Professional Nokia 6.2 {svc.name.toLowerCase()} with lifetime warranty.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why iTech */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-charcoal mb-4">Why iTech Repairs?</h2>
          <p className="text-charcoal-light mb-6">
            We use genuine or OEM-grade parts for every Nokia 6.2 repair. Most repairs are
            completed same-day. All work is backed by a lifetime warranty on parts and labour.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-charcoal">
            <span>✓ Lifetime Warranty</span>
            <span>✓ Same-Day Repairs</span>
            <span>✓ No Fix No Fee</span>
            <span>✓ Walk-In Welcome</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white text-center">
        <div className="container-page max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">Ready to Fix Your Nokia 6.2?</h2>
          <p className="mb-6 opacity-90">Walk in to our Braybrook or Spotswood store — no appointment needed.</p>
          <Link href="/contact" className="btn-white">Get a Quote</Link>
        </div>
      </section>
    </>
  )
}
