import Link from 'next/link'

interface ServiceItem {
  slug: string
  displayName: string
  href: string
  description?: string
  price?: string
  time?: string
}

interface ServiceGridProps {
  title: string
  items: ServiceItem[]
  columns?: 2 | 3 | 4
  subtitle?: string
}

const columnClasses: Record<number, string> = {
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
}

export default function ServiceGrid({
  title,
  items,
  columns = 3,
  subtitle,
}: ServiceGridProps) {
  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal">{title}</h2>
          {subtitle && (
            <p className="text-gray-400 mt-2 text-base">{subtitle}</p>
          )}
        </div>

        <div className={`grid ${columnClasses[columns]} gap-4`}>
          {items.map((item) => (
            <Link
              key={item.slug}
              href={item.href}
              className="group bg-white border border-gray-border rounded-lg hover:shadow-md hover:border-primary/20 transition-all duration-200 p-5 flex flex-col gap-3"
            >
              {/* Title + Arrow */}
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-charcoal font-semibold text-sm sm:text-base leading-snug group-hover:text-primary transition-colors">
                  {item.displayName}
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 text-gray-400 group-hover:text-primary flex-shrink-0 transition-colors mt-0.5"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              {/* Optional Description */}
              {item.description && (
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              )}

              {/* Price + Time */}
              {(item.price || item.time) && (
                <div className="flex items-center gap-4 mt-auto pt-3 border-t border-gray-border">
                  {item.price && (
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                        From
                      </p>
                      <p className="text-primary font-bold text-sm">{item.price}</p>
                    </div>
                  )}
                  {item.time && (
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                        Time
                      </p>
                      <p className="text-charcoal font-semibold text-sm">{item.time}</p>
                    </div>
                  )}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
