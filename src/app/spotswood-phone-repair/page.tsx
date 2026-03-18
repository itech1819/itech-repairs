import type { Metadata } from 'next'
import Link from 'next/link'
import { business, locations } from '@/data'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'

const location = locations.find((l) => l.id === 'spotswood')!

export const metadata: Metadata = {
  title: 'Phone Repair Spotswood | Walk In Today | iTech Repairs',
  description:
    'Phone repair shop in Spotswood VIC 3015. Walk in to 31 McLister St for iPhone, Samsung, iPad & MacBook repairs. On-the-spot repairs in around 15 minutes. No appointment needed.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/spotswood-phone-repair',
  },
}

const schema = generateRepairShopSchema(location)

const services = [
  { label: 'iPhone Repairs', href: '/iphone-repair-spotswood' },
  { label: 'Samsung Repairs', href: '/samsung-repair-spotswood' },
  { label: 'iPad Repairs', href: '/ipad-repair-spotswood' },
  { label: 'MacBook Repairs', href: '/macbook-repair-spotswood' },
  { label: 'Google Pixel Repairs', href: '/pixel-repair-spotswood' },
]

export default function SpotswoodStorePage() {
  return (
    <>
      <SchemaScript schema={schema} />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-gray-surface border-b border-gray-border py-3">
        <div className="container-page">
          <ol className="flex items-center gap-2 text-sm text-charcoal-light">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal font-medium">Spotswood Store</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="inline-block bg-primary/20 border border-primary/40 text-primary-light text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Spotswood Store
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Phone Repair Spotswood
            </h1>
            <p className="text-xl text-gray-300 mb-2">31 McLister St, Spotswood VIC 3015</p>
            <p className="text-gray-400 mb-6">7 Days 9am–9pm · Walk-ins Welcome</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={location.phoneHref}
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
              >
                Call Now — {location.phoneDisplay}
              </a>
              <a
                href={location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map + Info */}
      <section className="section-padding">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <iframe
                src={location.googleMapsEmbedUrl}
                width="100%"
                height="350"
                style={{ border: 0, borderRadius: '1rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="iTech Repairs Spotswood Map"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-charcoal mb-4">Store Details</h2>
                <ul className="space-y-4 text-sm">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold mt-0.5">📍</span>
                    <div>
                      <p className="font-semibold text-charcoal">Address</p>
                      <p className="text-charcoal-light">{location.address}</p>
                      <p className="text-charcoal-light">{location.suburb} {location.state} {location.postcode}</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold mt-0.5">📞</span>
                    <div>
                      <p className="font-semibold text-charcoal">Phone</p>
                      <a href={location.phoneHref} className="text-primary hover:underline">{location.phoneDisplay}</a>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold mt-0.5">🕐</span>
                    <div>
                      <p className="font-semibold text-charcoal">Hours</p>
                      {business.openingHours.map((oh) => (
                        <p key={oh.days} className="text-charcoal-light">{oh.days}: {oh.hours}</p>
                      ))}
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-3 rounded-lg transition-colors"
                >
                  Get Directions
                </a>
                <a
                  href={location.googleBusinessProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-gray-border hover:bg-gray-surface text-charcoal text-sm font-semibold px-5 py-3 rounded-lg transition-colors"
                >
                  View on Google
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-charcoal mb-2 text-center">Repairs at Spotswood</h2>
          <p className="text-charcoal-light text-center mb-8">Walk in for any of the following repair services:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="bg-white border border-gray-border rounded-xl p-5 text-center hover:border-primary group transition-colors"
              >
                <span className="font-semibold text-charcoal text-sm group-hover:text-primary transition-colors">
                  {s.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-page">
          <div className="bg-charcoal text-white rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold mb-3">Visit Our Spotswood Store Today</h2>
            <p className="text-gray-300 mb-6 max-w-lg mx-auto">
              No appointment needed. Walk in during business hours for a free diagnostic and on the spot 15 minute repair.
            </p>
            <a
              href={location.phoneHref}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl transition-colors"
            >
              Call {location.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
