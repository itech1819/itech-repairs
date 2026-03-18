import type { Metadata } from 'next'
import Link from 'next/link'
import { business, locations } from '@/data'
import { generateRepairShopSchema } from '@/lib/schema'
import SchemaScript from '@/components/seo/SchemaScript'
import LocationCard from '@/components/sections/LocationCard'

export const metadata: Metadata = {
  title: 'Contact iTech Repairs Melbourne | Braybrook & Spotswood',
  description:
    'Contact iTech Repairs in Braybrook or Spotswood, Melbourne. Call, email, or visit either store. Walk-ins welcome — no appointment needed. Free diagnostic and quote.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/contact',
  },
}

const locationSchemas = locations.map(generateRepairShopSchema)

export default function ContactPage() {
  return (
    <>
      <SchemaScript schema={locationSchemas} />

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
            <li className="text-charcoal font-medium">Contact</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Contact iTech Repairs
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Two stores in Melbourne&apos;s west — walk in any time, no appointment needed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${business.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
              >
                Call Now — {business.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location Cards with Maps */}
      <section className="section-padding">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-charcoal mb-3">Our Locations</h2>
            <p className="text-charcoal-light max-w-xl mx-auto">
              Visit us at either of our Melbourne stores. Both are open 7 days a week, 9am–9pm.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {locations.map((loc) => (
              <LocationCard key={loc.id} location={loc} showMap />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Info Column */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-charcoal mb-6">Get in Touch</h2>
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary" aria-hidden="true">
                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal">Phone</p>
                      <a href={`tel:${business.phone}`} className="text-primary hover:underline font-medium text-lg">
                        {business.phoneDisplay}
                      </a>
                      <p className="text-sm text-charcoal-light mt-1">Call for on the spot 15 minute repairs or a quick quote</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary" aria-hidden="true">
                        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal">Email</p>
                      <a href={`mailto:${business.email}`} className="text-primary hover:underline font-medium">
                        {business.email}
                      </a>
                      <p className="text-sm text-charcoal-light mt-1">We respond within 1 business hour</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal">Opening Hours</p>
                      <ul className="text-charcoal-light text-sm space-y-1 mt-1">
                        {business.openingHours.map((oh) => (
                          <li key={oh.days} className="flex justify-between gap-6">
                            <span>{oh.days}</span>
                            <span className={oh.isOpen ? 'text-charcoal font-medium' : 'text-charcoal-light'}>
                              {oh.hours}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Walk-in Info */}
            <div className="bg-white rounded-2xl p-8 border border-gray-border">
              <h2 className="text-2xl font-bold text-charcoal mb-4">Walk In for Immediate Service</h2>
              <p className="text-charcoal-light leading-relaxed mb-6">
                The fastest way to get your device repaired is to walk in. No booking needed —
                our technicians will assess your device immediately and provide a free quote. Most
                common repairs are completed while you wait.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'Free Diagnostic', body: 'We assess your device and quote you at no charge, with no obligation to proceed.' },
                  { title: 'On The Spot 15 Minute Repairs', body: 'Most screen and battery repairs completed in 15 minutes while you wait. Walk in — no appointment needed.' },
                  { title: 'Lifetime Warranty', body: 'Every repair is backed by a lifetime warranty on parts and labour.' },
                  { title: 'No Appointment', body: 'Walk in any time during business hours — 7 Days 9am–9pm.' },
                ].map((point) => (
                  <div key={point.title} className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal text-sm">{point.title}</p>
                      <p className="text-xs text-charcoal-light mt-0.5">{point.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-border">
                <p className="text-sm text-charcoal-light mb-4">Popular repairs we perform every day:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'iPhone Screen Repair',
                    'Battery Replacement',
                    'Charging Port Repair',
                    'Samsung Screen',
                    'MacBook Keyboard',
                    'Water Damage',
                    'iPad Repair',
                    'Camera Repair',
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-surface border border-gray-border rounded-full text-xs font-medium text-charcoal"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service links */}
      <section className="section-padding">
        <div className="container-page">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-charcoal mb-2">Repair Services</h2>
            <p className="text-charcoal-light">Find your device and repair type:</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: 'iPhone Repairs', href: '/iphone-repair-melbourne' },
              { label: 'Samsung Repairs', href: '/samsung-repair-melbourne' },
              { label: 'iPad Repairs', href: '/ipad-repair-melbourne' },
              { label: 'MacBook Repairs', href: '/macbook-repair-melbourne' },
              { label: 'Google Pixel Repairs', href: '/google-pixel-repair-melbourne' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="card p-5 text-center hover:border-primary group"
              >
                <span className="font-semibold text-charcoal text-sm group-hover:text-primary transition-colors">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
