import Link from 'next/link'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  onClick?: () => void
  children: React.ReactNode
  fullWidth?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  'aria-label'?: string
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary hover:bg-primary-dark text-white border border-transparent shadow-sm',
  secondary:
    'bg-charcoal hover:bg-charcoal-medium text-white border border-transparent shadow-sm',
  outline:
    'bg-transparent hover:bg-primary hover:border-primary hover:text-white text-charcoal border border-charcoal',
  ghost:
    'bg-transparent hover:bg-primary hover:text-white text-charcoal border border-transparent',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'text-sm px-4 py-2 rounded-md font-medium',
  md: 'text-sm px-5 py-2.5 rounded-lg font-semibold',
  lg: 'text-base px-7 py-3.5 rounded-lg font-semibold',
}

function getClasses(
  variant: ButtonVariant,
  size: ButtonSize,
  fullWidth?: boolean,
  className?: string
): string {
  return [
    'inline-flex items-center justify-center gap-2 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? 'w-full' : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ')
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  fullWidth,
  className,
  type = 'button',
  disabled,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const classes = getClasses(variant, size, fullWidth, className)

  if (href) {
    // tel: links and external links use <a>
    const isExternal = href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('http')
    if (isExternal) {
      return (
        <a href={href} className={classes} aria-label={ariaLabel}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`${classes} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  )
}
