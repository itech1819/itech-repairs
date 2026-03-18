import Link from 'next/link'

type CTAVariant = 'red' | 'charcoal' | 'light'

interface CTABannerProps {
  title?: string
  subtitle?: string
  variant?: CTAVariant
}

const variantConfig: Record<
  CTAVariant,
  { section: string; heading: string; sub: string; button: string; badge: string }
> = {
  red: {
    section: 'bg-primary',
    heading: 'text-white',
    sub: 'text-red-100',
    button:
      'bg-white text-primary hover:bg-gray-100 font-bold shadow-md',
    badge: 'bg-red-700/50 text-red-100',
  },
  charcoal: {
    section: 'bg-charcoal',
    heading: 'text-white',
    sub: 'text-gray-400',
    button:
      'bg-primary hover:bg-primary-dark text-white font-bold shadow-md',
    badge: 'bg-charcoal-medium text-gray-400',
  },
  light: {
    section: 'bg-gray-surface border-y border-gray-border',
    heading: 'text-charcoal',
    sub: 'text-gray-500',
    button:
      'bg-primary hover:bg-primary-dark text-white font-bold shadow-sm',
    badge: 'bg-white border border-gray-border text-charcoal-light',
  },
}

export default function CTABanner({
  title = 'Ready to get your device repaired?',
  subtitle,
  variant = 'red',
}: CTABannerProps) {
  const config = variantConfig[variant]

  return (
    <section className={`${config.section} py-14 lg:py-20`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 tracking-tight ${config.heading}`}>
            {title}
          </h2>

          {subtitle && (
            <p className={`text-base sm:text-lg mb-7 leading-relaxed ${config.sub}`}>
              {subtitle}
            </p>
          )}

          {/* Phone CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-7">
            <a
              href="tel:+61432933273"
              className={`inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base transition-colors ${config.button}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 flex-shrink-0"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-lg font-bold">0432 933 273 &mdash; Call Now</span>
            </a>
            <Link
              href="/contact"
              className={`inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold transition-colors border ${
                variant === 'red'
                  ? 'border-red-200/50 text-white hover:bg-red-700'
                  : variant === 'charcoal'
                  ? 'border-charcoal-medium text-gray-400 hover:border-primary hover:text-primary'
                  : 'border-gray-border text-charcoal hover:border-primary hover:text-primary'
              }`}
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Trust Badges Row */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {['Walk-ins welcome', 'On the spot 15 min repairs', 'Lifetime warranty'].map(
              (badge) => (
                <span
                  key={badge}
                  className={`text-sm font-medium px-3 py-1.5 rounded-full ${config.badge}`}
                >
                  {badge}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
