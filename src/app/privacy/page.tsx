import type { Metadata } from 'next'
import Link from 'next/link'
import { business } from '@/data'

export const metadata: Metadata = {
  title: 'Privacy Policy | iTech Repairs Melbourne',
  description:
    'Read the iTech Repairs privacy policy. We are committed to protecting your personal information and data security.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/privacy',
  },
  robots: { index: false, follow: false },
}

export default function PrivacyPage() {
  return (
    <>
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
            <li className="text-charcoal font-medium">Privacy Policy</li>
          </ol>
        </div>
      </nav>

      <section className="section-padding">
        <div className="container-page">
          <div className="max-w-3xl mx-auto prose prose-charcoal">
            <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-2">Privacy Policy</h1>
            <p className="text-charcoal-light text-sm mb-8">Last updated: March 2026</p>

            <div className="space-y-8 text-charcoal-light leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-charcoal mb-3">1. Information We Collect</h2>
                <p>
                  When you contact us, request a quote, or bring a device in for repair, we may collect:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li>Your name and contact details (phone number, email address)</li>
                  <li>Device information (make, model, serial number)</li>
                  <li>Details of the fault and repair performed</li>
                  <li>Payment information (processed securely — we do not store card details)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-charcoal mb-3">2. How We Use Your Information</h2>
                <p>We use your information solely to:</p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li>Perform the requested repair service</li>
                  <li>Process payment and issue a repair receipt</li>
                  <li>Contact you regarding your repair status</li>
                  <li>Honour warranty claims</li>
                  <li>Comply with legal obligations</li>
                </ul>
                <p className="mt-3">
                  We do not sell, rent, or share your personal information with third parties for marketing purposes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-charcoal mb-3">3. Device Data</h2>
                <p>
                  We do not access, read, copy, or transfer personal data stored on your device during repair.
                  Our technicians only access device functions necessary to test the repair. We recommend
                  backing up your device before any repair involving the logic board, storage, or software.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-charcoal mb-3">4. Data Security</h2>
                <p>
                  We store customer records securely and limit access to authorised staff only. Physical
                  repair records are stored on-premises and retained for the duration of the warranty period.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-charcoal mb-3">5. Your Rights</h2>
                <p>
                  Under Australian Privacy law, you have the right to access, correct, or request deletion of
                  personal information we hold about you. To make a request, contact us using the details below.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-charcoal mb-3">6. Website & Cookies</h2>
                <p>
                  Our website may use cookies for analytics and performance purposes. No personally identifiable
                  information is collected through cookies. You can disable cookies in your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-charcoal mb-3">7. Contact</h2>
                <p>For any privacy-related queries, contact us:</p>
                <div className="mt-3 p-4 bg-gray-surface rounded-xl border border-gray-border">
                  <p className="font-semibold text-charcoal">{business.name}</p>
                  <p>{business.address}, {business.suburb} VIC {business.postcode}</p>
                  <p>
                    <a href={`tel:${business.phone}`} className="text-primary hover:underline">{business.phoneDisplay}</a>
                    {' · '}
                    <a href={`mailto:${business.email}`} className="text-primary hover:underline">{business.email}</a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
