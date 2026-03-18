import Link from 'next/link'

interface HeroCTA {
  label: string
  href: string
}

interface HeroProps {
  title?: string
  subtitle?: string
  description?: string
  primaryCTA?: HeroCTA
  secondaryCTA?: HeroCTA
  badges?: string[]
  compact?: boolean
}

const defaultBadges = [
  '⚡ 15-Minute Repairs',
  '🛡️ Lifetime Warranty',
  '📍 Melbourne',
  '✅ Walk-ins Welcome',
]

export default function Hero({
  title = 'Fast Phone & Laptop Repairs in Melbourne',
  subtitle = 'Walk in. Get fixed. Walk out.',
  description = 'Expert technicians. On the spot 15 minute repairs. Lifetime warranty on all repairs.',
  primaryCTA = { label: 'Call Now — 0432 933 273', href: 'tel:+61432933273' },
  secondaryCTA = { label: 'Get a Quote', href: '/contact' },
  badges = defaultBadges,
  compact = false,
}: HeroProps) {
  if (compact) {
    return (
      <section className="bg-white py-8 lg:py-12 border-b border-gray-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {subtitle && (
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
                {subtitle}
              </p>
            )}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal tracking-tight mb-3">
              {title}
            </h1>
            {description && (
              <p className="text-gray-500 text-base lg:text-lg mb-5">{description}</p>
            )}
            <div className="flex flex-wrap gap-3">
              {primaryCTA && (
                <a
                  href={primaryCTA.href}
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
                >
                  {primaryCTA.label}
                </a>
              )}
              {secondaryCTA && (
                <Link
                  href={secondaryCTA.href}
                  className="inline-flex items-center gap-2 bg-transparent hover:bg-primary hover:border-primary hover:text-white text-charcoal border border-charcoal font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
                >
                  {secondaryCTA.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-white py-14 lg:py-20 border-b border-gray-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            {subtitle && (
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
                {subtitle}
              </p>
            )}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight leading-tight mb-4">
              {title}
            </h1>
            {description && (
              <p className="text-gray-500 text-lg lg:text-xl mb-7 leading-relaxed">
                {description}
              </p>
            )}

            {/* Trust Badges */}
            {badges && badges.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {badges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center bg-gray-surface border border-gray-border text-charcoal text-sm font-medium px-3.5 py-1.5 rounded-full"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              {primaryCTA && (
                <a
                  href={primaryCTA.href}
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-base shadow-sm"
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
                  {primaryCTA.label}
                </a>
              )}
              {secondaryCTA && (
                <Link
                  href={secondaryCTA.href}
                  className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-charcoal hover:text-white text-charcoal border border-charcoal font-semibold px-7 py-3.5 rounded-lg transition-colors text-base"
                >
                  {secondaryCTA.label}
                </Link>
              )}
            </div>
          </div>

          {/* Right: Trust Score Block */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm bg-white border border-gray-border rounded-2xl shadow-sm p-6 sm:p-8">
              {/* Google Rating */}
              <div className="flex items-center gap-3 mb-5 pb-5 border-b border-gray-border">
                <div className="w-10 h-10 bg-[#4285F4] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">G</span>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                    Google Verified
                  </p>
                  <p className="text-charcoal font-bold text-sm">iTech Repairs Melbourne</p>
                </div>
              </div>

              {/* Stars */}
              <div className="text-center mb-4">
                <div className="flex justify-center gap-1 mb-1" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-7 h-7 text-yellow-400"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                <p className="text-3xl font-bold text-charcoal">5.0</p>
                <p className="text-gray-400 text-sm">500+ Reviews</p>
              </div>

              {/* Trust Points */}
              <ul className="space-y-2.5 mt-5 pt-5 border-t border-gray-border">
                {[
                  'On the spot 15 minute repairs',
                  'Lifetime warranty on all parts',
                  'Expert Apple-certified technicians',
                  'No fix, no fee guarantee',
                ].map((point) => (
                  <li key={point} className="flex items-center gap-2.5 text-sm text-charcoal-light">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-primary flex-shrink-0"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
