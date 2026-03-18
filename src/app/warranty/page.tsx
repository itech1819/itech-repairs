import type { Metadata } from 'next'
import Link from 'next/link'
import { business } from '@/data'
import { warrantyFAQs } from '@/data/faqs'
import { generateFAQSchema, generateLocalBusinessSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Lifetime Warranty Policy | iTech Repairs Melbourne',
  description:
    'Every repair at iTech Repairs comes with a lifetime warranty on parts and labour. Learn what our warranty covers and how to make a claim.',
  alternates: {
    canonical: 'https://www.itechrepairs.com.au/warranty',
  },
}

const faqSchema = generateFAQSchema(warrantyFAQs)
const localBusinessSchema = generateLocalBusinessSchema()

export default function WarrantyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
            <li className="text-charcoal font-medium">Warranty Policy</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-charcoal to-charcoal-medium text-white py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Lifetime Warranty
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Every repair at iTech Repairs is backed by a lifetime warranty on parts and labour.
            </p>
            <div className="inline-flex items-center gap-3 bg-primary/20 border border-primary/40 rounded-xl px-6 py-3">
              <span className="text-2xl">🛡️</span>
              <p className="text-white font-semibold">
                No expiry. No fine print. If it fails, we fix it free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Details */}
      <section className="section-padding">
        <div className="container-page">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-charcoal mb-4">What Is Covered</h2>
                  <ul className="space-y-3">
                    {[
                      'The specific parts replaced during your repair',
                      'Labour performed to install and test those parts',
                      'Any recurrence of the exact same fault',
                      'Manufacturing defects in replacement components',
                      'Installation errors or workmanship issues',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-charcoal-light">
                        <span className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                          <span className="text-white text-xs font-bold">✓</span>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-charcoal mb-4">What Is Not Covered</h2>
                  <ul className="space-y-3">
                    {[
                      'New physical damage after the repair (e.g. re-cracked screen from a drop)',
                      'Liquid damage after the original repair was completed',
                      'Damage from subsequent unauthorised repairs',
                      'Unrelated faults not present at the time of the original repair',
                      'Normal wear and tear over time',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-charcoal-light">
                        <span className="flex-shrink-0 w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                          <span className="text-primary text-xs font-bold">✗</span>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-surface rounded-2xl p-8 border border-gray-border">
                  <h3 className="text-xl font-bold text-charcoal mb-4">How to Claim Your Warranty</h3>
                  <ol className="space-y-4">
                    {[
                      {
                        step: '1',
                        title: 'Bring your device in',
                        body: 'Visit our Braybrook store any time during business hours. No appointment needed.',
                      },
                      {
                        step: '2',
                        title: 'Present your receipt',
                        body: 'Your original repair receipt serves as your warranty document. Keep it safe.',
                      },
                      {
                        step: '3',
                        title: 'Free reassessment',
                        body: 'We\'ll assess the fault at no charge and confirm whether it\'s covered under warranty.',
                      },
                      {
                        step: '4',
                        title: 'Free repair',
                        body: 'If covered, we repair it immediately at absolutely no cost to you.',
                      },
                    ].map((item) => (
                      <li key={item.step} className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {item.step}
                        </div>
                        <div>
                          <p className="font-semibold text-charcoal">{item.title}</p>
                          <p className="text-sm text-charcoal-light mt-0.5">{item.body}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="bg-primary rounded-2xl p-6 text-white text-center">
                  <h3 className="font-bold text-lg mb-2">Need to Claim a Warranty?</h3>
                  <p className="text-red-100 text-sm mb-4">Walk in or call us — we&apos;ll sort it out.</p>
                  <a
                    href={`tel:${business.phone}`}
                    className="inline-flex items-center gap-2 bg-white text-primary font-bold px-6 py-2.5 rounded-lg hover:bg-red-50 transition-colors text-sm"
                  >
                    Call {business.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty FAQs */}
      <section className="section-padding bg-gray-surface">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Warranty FAQs</h2>
          </div>
          <div className="max-w-3xl mx-auto divide-y divide-gray-border">
            {warrantyFAQs.map((faq) => (
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
    </>
  )
}
