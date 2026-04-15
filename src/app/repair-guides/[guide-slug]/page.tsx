import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { repairGuides, getRepairGuide } from '@/data/repairGuides'
import { business } from '@/data/business'

// ---------------------------------------------------------------------------
// Static params
// ---------------------------------------------------------------------------

export async function generateStaticParams() {
  return repairGuides.map((g) => ({ 'guide-slug': g.slug }))
}

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export async function generateMetadata({
  params,
}: {
  params: Promise<{ 'guide-slug': string }>
}): Promise<Metadata> {
  const { 'guide-slug': slug } = await params
  const guide = getRepairGuide(slug)
  if (!guide) return {}
  return {
    title: `${guide.title} | Melbourne Repair Guide`,
    description: `${guide.excerpt} Expert repair in Melbourne — cheapest price guaranteed, lifetime warranty and 15-minute on-the-spot service at iTech Repairs.`,
    alternates: { canonical: `https://www.itechrepairs.com.au/repair-guides/${slug}` },
  }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function buildBlogPostingSchema(guide: ReturnType<typeof getRepairGuide>) {
  if (!guide) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: guide.title,
    description: guide.excerpt,
    datePublished: guide.datePublished,
    dateModified: guide.datePublished,
    author: {
      '@type': 'Organization',
      name: business.name,
      url: 'https://www.itechrepairs.com.au',
    },
    publisher: {
      '@type': 'Organization',
      name: business.name,
      url: 'https://www.itechrepairs.com.au',
    },
    url: `https://www.itechrepairs.com.au/repair-guides/${guide.slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.itechrepairs.com.au/repair-guides/${guide.slug}`,
    },
  }
}

function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function RepairGuideArticlePage({
  params,
}: {
  params: Promise<{ 'guide-slug': string }>
}) {
  const { 'guide-slug': slug } = await params
  const guide = getRepairGuide(slug)
  if (!guide) notFound()

  const blogPostingSchema = buildBlogPostingSchema(guide)
  const faqSchema = buildFAQSchema(guide.faqs)

  return (
    <>
      {/* JSON-LD */}
      {blogPostingSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gray-900 text-white py-14 sm:py-18">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="text-gray-600">
                  /
                </li>
                <li>
                  <Link href="/repair-guides" className="hover:text-white transition-colors">
                    Repair Guides
                  </Link>
                </li>
                <li aria-hidden="true" className="text-gray-600">
                  /
                </li>
                <li className="text-gray-300 truncate max-w-[200px] sm:max-w-none">
                  {guide.title}
                </li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                {guide.title}
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">{guide.excerpt}</p>
              <time
                dateTime={guide.datePublished}
                className="text-gray-500 text-sm"
              >
                Published {formatDate(guide.datePublished)}
              </time>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <article className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-12 xl:gap-16">
              {/* Main content */}
              <div className="prose prose-gray max-w-none">
                {/* Introduction */}
                <section aria-labelledby="intro-heading">
                  <h2
                    id="intro-heading"
                    className="text-2xl font-bold text-gray-900 mt-0 mb-4"
                  >
                    Overview
                  </h2>
                  <p className="text-gray-700 leading-relaxed">{guide.sections.intro}</p>
                </section>

                {/* Common Causes */}
                <section aria-labelledby="causes-heading" className="mt-10">
                  <h2
                    id="causes-heading"
                    className="text-2xl font-bold text-gray-900 mb-4"
                  >
                    Common Causes
                  </h2>
                  <ul className="space-y-2 list-none pl-0">
                    {guide.sections.commonCauses.map((cause, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <span
                          className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-600 text-white text-xs flex items-center justify-center font-bold"
                          aria-hidden="true"
                        >
                          {i + 1}
                        </span>
                        <span>{cause}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Symptoms */}
                <section aria-labelledby="symptoms-heading" className="mt-10">
                  <h2
                    id="symptoms-heading"
                    className="text-2xl font-bold text-gray-900 mb-4"
                  >
                    Signs &amp; Symptoms
                  </h2>
                  <ul className="space-y-2 list-none pl-0">
                    {guide.sections.symptoms.map((symptom, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="mt-0.5 flex-shrink-0 w-5 h-5 text-red-600"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* DIY Warning */}
                <section aria-labelledby="diy-heading" className="mt-10">
                  <h2
                    id="diy-heading"
                    className="text-2xl font-bold text-gray-900 mb-4"
                  >
                    Should You Try DIY?
                  </h2>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                    <div className="flex gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6 text-amber-600 mt-0.5"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-amber-800 text-sm leading-relaxed">
                        {guide.sections.diyWarning}
                      </p>
                    </div>
                  </div>
                </section>

                {/* Professional Solution */}
                <section aria-labelledby="solution-heading" className="mt-10">
                  <h2
                    id="solution-heading"
                    className="text-2xl font-bold text-gray-900 mb-4"
                  >
                    Professional Solution
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {guide.sections.professionalSolution}
                  </p>
                </section>

                {/* Repair Cost */}
                <section aria-labelledby="cost-heading" className="mt-10">
                  <h2
                    id="cost-heading"
                    className="text-2xl font-bold text-gray-900 mb-4"
                  >
                    How Much Does It Cost?
                  </h2>
                  <p className="text-gray-700 leading-relaxed">{guide.sections.repairCost}</p>
                </section>

                {/* Repair vs Replace */}
                <section aria-labelledby="rvr-heading" className="mt-10">
                  <h2
                    id="rvr-heading"
                    className="text-2xl font-bold text-gray-900 mb-4"
                  >
                    Repair vs Replace
                  </h2>
                  <p className="text-gray-700 leading-relaxed">{guide.sections.repairVsReplace}</p>
                </section>

                {/* Why iTech */}
                <section aria-labelledby="whyitech-heading" className="mt-10">
                  <h2
                    id="whyitech-heading"
                    className="text-2xl font-bold text-gray-900 mb-4"
                  >
                    Why Choose iTech Repairs?
                  </h2>
                  <p className="text-gray-700 leading-relaxed">{guide.sections.whyITech}</p>
                </section>

                {/* FAQ */}
                <section aria-labelledby="faq-heading" className="mt-12">
                  <h2
                    id="faq-heading"
                    className="text-2xl font-bold text-gray-900 mb-6"
                  >
                    Frequently Asked Questions
                  </h2>
                  <dl className="space-y-6">
                    {guide.faqs.map((faq, i) => (
                      <div
                        key={i}
                        className="border border-gray-200 rounded-xl p-5"
                      >
                        <dt className="text-gray-900 font-semibold mb-2">{faq.question}</dt>
                        <dd className="text-gray-600 text-sm leading-relaxed">{faq.answer}</dd>
                      </div>
                    ))}
                  </dl>
                </section>

                {/* Internal Links */}
                {guide.internalLinks.length > 0 && (
                  <section aria-labelledby="links-heading" className="mt-12">
                    <h2
                      id="links-heading"
                      className="text-2xl font-bold text-gray-900 mb-4"
                    >
                      Related Repair Services
                    </h2>
                    <ul className="space-y-2 list-none pl-0">
                      {guide.internalLinks.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium transition-colors"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-4 h-4"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>

              {/* Sidebar CTA */}
              <aside className="mt-12 lg:mt-0">
                <div className="sticky top-6 space-y-6">
                  {/* Quick CTA card */}
                  <div className="bg-gray-900 text-white rounded-2xl p-6">
                    <h3 className="font-bold text-lg mb-2">Need a repair now?</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-5">
                      Walk into iTech Repairs in Melbourne — no appointment needed. Most repairs done
                      in 15 minutes.
                    </p>
                    <a
                      href={business.phoneHref}
                      className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-3 rounded-full text-sm transition-colors w-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Call {business.phoneDisplay}
                    </a>
                  </div>

                  {/* Trust badges */}
                  <div className="border border-gray-200 rounded-2xl p-5 space-y-3">
                    {[
                      '15-minute on-the-spot repairs',
                      'Cheapest price guaranteed',
                      'Lifetime warranty on all repairs',
                      'Walk-ins welcome — open 7 days',
                      'Braybrook & Spotswood, Melbourne',
                    ].map((badge) => (
                      <div key={badge} className="flex items-center gap-2.5 text-sm text-gray-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="flex-shrink-0 w-4 h-4 text-red-600"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {badge}
                      </div>
                    ))}
                  </div>

                  {/* Back to guides */}
                  <Link
                    href="/repair-guides"
                    className="flex items-center gap-2 text-gray-500 hover:text-gray-800 text-sm font-medium transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    All Repair Guides
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </article>

        {/* Bottom CTA */}
        <section className="bg-red-600 py-12 sm:py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-white text-2xl sm:text-3xl font-bold mb-3">
              {guide.sections.cta.split('.')[0]}.
            </h2>
            <p className="text-red-100 text-base sm:text-lg mb-7 max-w-xl mx-auto">
              Open 7 days, 9am–9pm. Braybrook &amp; Spotswood, Melbourne. No appointment needed.
            </p>
            <a
              href={business.phoneHref}
              className="inline-flex items-center gap-2 bg-white text-red-600 hover:bg-red-50 font-bold px-8 py-4 rounded-full transition-colors text-base"
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
              Call {business.phoneDisplay} Now
            </a>
          </div>
        </section>
      </div>
    </>
  )
}
