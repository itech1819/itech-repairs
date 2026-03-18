interface PageHeaderProps {
  title: string
  subtitle?: string
  badge?: string
  align?: 'left' | 'center'
}

export default function PageHeader({
  title,
  subtitle,
  badge,
  align = 'left',
}: PageHeaderProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-3 py-6 lg:py-8 ${alignClass}`}>
      {badge && (
        <span className="inline-flex items-center bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full self-start">
          {badge}
        </span>
      )}

      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal tracking-tight leading-tight">
        {title}
      </h1>

      {subtitle && (
        <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}
