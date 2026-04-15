// Server component — no 'use client'. Uses native <details>/<summary> for
// zero-JS accordion. Schema rendered as static HTML.

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs: FAQItem[]
  title?: string
}

export default function FAQSection({ faqs, title = 'Frequently Asked Questions' }: FAQSectionProps) {
  const schema = {
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

  return (
    <section className="py-12 lg:py-16 bg-gray-surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-8 text-center">
            {title}
          </h2>
        )}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="border border-gray-border rounded-lg overflow-hidden group"
              open={index === 0}
            >
              <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer bg-white hover:bg-gray-surface transition-colors list-none">
                <span className="text-charcoal font-semibold text-sm sm:text-base leading-snug">
                  {faq.question}
                </span>
                <span
                  className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border-2 border-gray-border bg-white text-charcoal-light group-open:border-primary group-open:bg-primary group-open:text-white group-open:rotate-45 transition-all duration-200"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-3.5 h-3.5"
                  >
                    <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                  </svg>
                </span>
              </summary>
              <div className="px-5 pb-5 pt-1 border-t border-gray-border bg-white">
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
