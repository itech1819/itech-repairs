import Link from 'next/link'

interface InternalLink {
  href: string
  label: string
  type: string
}

interface InternalLinksSectionProps {
  title?: string
  links: InternalLink[]
}

function groupByType(links: InternalLink[]): Record<string, InternalLink[]> {
  return links.reduce<Record<string, InternalLink[]>>((acc, link) => {
    if (!acc[link.type]) acc[link.type] = []
    acc[link.type].push(link)
    return acc
  }, {})
}

function formatTypeLabel(type: string): string {
  return type
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())
}

export default function InternalLinksSection({
  title,
  links,
}: InternalLinksSectionProps) {
  const types = Array.from(new Set(links.map((l) => l.type)))
  const hasMultipleTypes = types.length > 1
  const grouped = hasMultipleTypes ? groupByType(links) : null

  return (
    <section className="py-10 lg:py-12 bg-gray-surface border-t border-gray-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="text-xl sm:text-2xl font-bold text-charcoal mb-6">
            {title}
          </h2>
        )}

        {hasMultipleTypes && grouped ? (
          <div className="space-y-8">
            {types.map((type) => (
              <div key={type}>
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  {formatTypeLabel(type)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {grouped[type].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="inline-flex items-center gap-1.5 bg-white border border-gray-border hover:border-primary hover:text-primary text-charcoal text-sm font-medium px-3.5 py-1.5 rounded-full transition-colors"
                    >
                      {link.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="w-3 h-3 opacity-50"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.25a.75.75 0 0 1 0 1.06l-4.5 4.25a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 bg-white border border-gray-border hover:border-primary hover:text-primary text-charcoal text-sm font-medium px-3.5 py-1.5 rounded-full transition-colors"
              >
                {link.label}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-3 h-3 opacity-50"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.25a.75.75 0 0 1 0 1.06l-4.5 4.25a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
