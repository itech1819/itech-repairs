import Link from 'next/link'
import type { DeviceCategory } from '@/types'

interface RepairCardProps {
  repairSlug: string
  repairDisplayName: string
  modelSlug: string
  modelDisplayName: string
  deviceCategory: DeviceCategory
  estimatedTime: string
  priceDisplay: string
  href: string
}

export default function RepairCard({
  repairDisplayName,
  modelDisplayName,
  estimatedTime,
  priceDisplay,
  href,
}: RepairCardProps) {
  return (
    <article className="bg-white border border-gray-border rounded-lg hover:shadow-md transition-shadow duration-200 overflow-hidden group">
      <div className="p-5">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-charcoal font-bold text-base leading-snug group-hover:text-primary transition-colors">
            {repairDisplayName}
          </h3>
          <p className="text-gray-400 text-xs mt-0.5">{modelDisplayName}</p>
        </div>

        {/* Price + Time Row */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-0.5">
              From
            </p>
            <p className="text-primary font-bold text-lg leading-none">
              {priceDisplay}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-0.5">
              Time
            </p>
            <p className="text-charcoal font-semibold text-sm">{estimatedTime}</p>
          </div>
        </div>

        {/* CTA */}
        <Link
          href={href}
          className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-dark text-white text-sm font-semibold py-2.5 px-4 rounded-md transition-colors"
        >
          Get Quote
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
        </Link>
      </div>
    </article>
  )
}
