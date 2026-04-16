'use client'

import { useState } from 'react'
import Link from 'next/link'

type NavChild = { label: string; href: string }
type NavItem = { label: string; href: string; children?: NavChild[] }

interface MobileMenuClientProps {
  navLinks: NavItem[]
  phone: string
  phoneHref: string
}

export default function MobileMenuClient({ navLinks, phone, phoneHref }: MobileMenuClientProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (label: string) =>
    setOpenDropdown((prev) => (prev === label ? null : label))

  return (
    <div className="flex lg:hidden items-center gap-3">
      <a
        href={phoneHref}
        className="bg-primary hover:bg-primary-dark text-white font-bold px-4 py-2 rounded-lg transition-colors text-sm"
      >
        Call Now
      </a>
      <button
        type="button"
        onClick={() => setMobileOpen((prev) => !prev)}
        className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-md hover:bg-gray-surface transition-colors"
        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileOpen}
      >
        <span className={`block w-6 h-0.5 bg-charcoal transition-all duration-200 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-6 h-0.5 bg-charcoal transition-all duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-0.5 bg-charcoal transition-all duration-200 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-border shadow-lg absolute top-16 left-0 right-0 z-50">
          <nav className="container mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.href}>
                  <button
                    type="button"
                    onClick={() => toggleDropdown(link.label)}
                    className="w-full flex items-center justify-between px-4 py-3 text-base font-medium rounded-md transition-colors text-charcoal hover:text-primary hover:bg-gray-surface"
                  >
                    {link.label}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={`w-4 h-4 opacity-60 transition-transform duration-200 ${openDropdown === link.label ? 'rotate-180' : ''}`} aria-hidden="true">
                      <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {openDropdown === link.label && (
                    <div className="ml-4 mt-1 mb-1 flex flex-col gap-0.5 border-l-2 border-primary/20 pl-3">
                      <Link
                        href={link.href}
                        onClick={() => { setMobileOpen(false); setOpenDropdown(null) }}
                        className="px-3 py-2 text-sm font-semibold text-primary hover:bg-red-50 rounded-md"
                      >
                        View All — {link.label}
                      </Link>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => { setMobileOpen(false); setOpenDropdown(null) }}
                          className="px-3 py-2 text-sm text-charcoal hover:text-primary hover:bg-gray-surface rounded-md"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-base font-medium rounded-md transition-colors text-charcoal hover:text-primary hover:bg-gray-surface"
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-2 pb-1">
              <a
                href={phoneHref}
                className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-dark text-white text-base font-semibold px-6 py-3.5 rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                </svg>
                Call Now — {phone}
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}
