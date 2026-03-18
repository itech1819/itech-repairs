import { formatLastUpdated } from '@/data/freshness'

interface Props {
  isoDate: string
  note?: string
}

/**
 * Displays a "Last Updated" notice for a page.
 * Provides a freshness signal for both users and search engines.
 */
export default function LastUpdated({ isoDate, note = 'Repair information verified by technicians.' }: Props) {
  return (
    <div className="text-xs text-gray-500 flex items-center gap-1.5 mt-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-3.5 w-3.5 flex-shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>
        Last Updated: {formatLastUpdated(isoDate)} &ndash; {note}
      </span>
    </div>
  )
}
