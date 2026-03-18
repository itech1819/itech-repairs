import Link from 'next/link'

interface ModelItem {
  slug: string
  displayName: string
  href: string
}

interface ModelGridProps {
  models: ModelItem[]
  title: string
  subtitle?: string
}

export default function ModelGrid({ models, title, subtitle }: ModelGridProps) {
  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal">{title}</h2>
          {subtitle && (
            <p className="text-gray-400 mt-2 text-base">{subtitle}</p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {models.map((model) => (
            <Link
              key={model.slug}
              href={model.href}
              className="group bg-white border border-gray-border rounded-lg hover:shadow-md hover:border-primary/20 transition-all duration-200 p-4 flex items-center justify-between gap-3"
            >
              <span className="text-charcoal font-semibold text-sm group-hover:text-primary transition-colors leading-snug">
                {model.displayName}
              </span>
              <span className="flex-shrink-0 flex items-center gap-1 text-xs text-gray-400 group-hover:text-primary transition-colors whitespace-nowrap">
                View repairs
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.25a.75.75 0 0 1 0 1.06l-4.5 4.25a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
