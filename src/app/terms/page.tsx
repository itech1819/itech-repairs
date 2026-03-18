import type { Metadata } from 'next'
import Link from 'next/link'
import { business } from '@/data'

export const metadata: Metadata = {
  title: 'Terms & Conditions | iTech Repairs Melbourne',
  description: 'Terms and conditions for repair services at iTech Repairs, Braybrook Melbourne.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/terms',
  },
  robots: { index: false, follow: false },
}

export default function TermsPage() {
  return (
    <>
      <nav aria-label="Breadcrumb" className="bg-gray-surface border-b border-gray-border py-3">
        <div className="container-page">
          <ol className="flex items-center gap-2 text-sm text-charcoal-light">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal font-medium">Terms &amp; Conditions</li>
          </ol>
        </div>
      </nav>

      <section className="section-padding">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-2">Terms &amp; Conditions</h1>
            <p className="text-charcoal-light text-sm mb-8">Last updated: March 2026</p>

            <div className="space-y-8 text-charcoal-light leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-charcoal mb-3">1. Service Agreement</h2>
                <p>By leaving your device with iTech Repairs for service, you agree to these terms and conditions. All repairs are subject to our standard pricing, warranty, and liability conditions.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-charcoal mb-3">2. Quotes and Pricing</h2>
                <p>All repair quotes are provided free of charge. A written or verbal quote will be given before any repair work commences. We will not proceed with repairs without your approval. Final pricing may vary only if additional faults are discovered — in which case we will contact you before proceeding.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-charcoal mb-3">3. Warranty</h2>
                <p>All repairs carry a lifetime warranty on parts and labour for the specific fault repaired. The warranty does not cover new physical damage, liquid damage incurred after repair, or unrelated faults. See our <Link href="/warranty" className="text-primary hover:underline">Warranty Policy</Link> for full details.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-charcoal mb-3">4. Liability</h2>
                <p>iTech Repairs takes all reasonable care with your device. We are not liable for pre-existing conditions not disclosed at intake, data loss (though we take precautions to avoid this), or faults arising from third-party components installed elsewhere. Our liability is limited to the cost of the repair performed.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-charcoal mb-3">5. Uncollected Devices</h2>
                <p>Devices not collected within 60 days of repair completion, despite reasonable attempts to contact the customer, may be disposed of or recycled in accordance with applicable Australian law.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-charcoal mb-3">6. Payment</h2>
                <p>Payment is due upon collection of your repaired device. We accept cash, credit card, and EFTPOS. Goods remain the property of iTech Repairs until paid in full.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-charcoal mb-3">7. Contact</h2>
                <div className="p-4 bg-gray-surface rounded-xl border border-gray-border">
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
