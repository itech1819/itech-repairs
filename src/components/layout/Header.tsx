'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

type NavChild = { label: string; href: string }
type NavItem = { label: string; href: string; children?: NavChild[] }

const navLinks: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'iPhone Repairs', href: '/iphone-repair-melbourne' },
  { label: 'Samsung Repairs', href: '/samsung-repair-melbourne' },
  { label: 'iPad Repairs', href: '/ipad-repair-melbourne' },
  { label: 'MacBook Repairs', href: '/macbook-repair-melbourne' },
  { label: 'Pixel Repairs', href: '/google-pixel-repair-melbourne' },
  { label: 'Apple Watch', href: '/apple-watch-repair-melbourne' },
  {
    label: 'More Brands',
    href: '/iphone-repair-melbourne',
    children: [
      { label: 'Nothing Phone Repair', href: '/nothing-phone-repair-melbourne' },
      { label: 'OnePlus Repair', href: '/oneplus-phone-repair-melbourne' },
      { label: 'Sony Repair', href: '/sony-phone-repair-melbourne' },
      { label: 'Oppo Repair', href: '/oppo-phone-repair-melbourne' },
      { label: 'Xiaomi Repair', href: '/xiaomi-phone-repair-melbourne' },
      { label: 'Huawei Repair', href: '/huawei-phone-repair-melbourne' },
      { label: 'Motorola Repair', href: '/motorola-phone-repair-melbourne' },
      { label: 'Nokia Repair', href: '/nokia-phone-repair-melbourne' },
      { label: 'LG Repair', href: '/lg-phone-repair-melbourne' },
      { label: 'Asus Repair', href: '/asus-phone-repair-melbourne' },
      { label: 'Realme Repair', href: '/realme-phone-repair-melbourne' },
      { label: 'Surface Repair', href: '/surface-repair-melbourne' },
    ],
  },
  {
    label: 'Sell My Device',
    href: '/sell-my-device',
    children: [
      { label: 'Sell My iPhone', href: '/sell-my-iphone' },
      { label: 'Sell My Samsung', href: '/sell-my-samsung' },
      { label: 'Sell My iPad', href: '/sell-my-ipad' },
      { label: 'Sell My MacBook', href: '/sell-my-macbook' },
      { label: 'Sell Broken Phone', href: '/sell-broken-phone' },
      { label: 'Sell Sealed iPhone', href: '/sell-sealed-iphone' },
      { label: 'Sell My Device Melbourne', href: '/sell-my-device-melbourne' },
      { label: 'Get Instant Quote →', href: '/sell-my-device#quote' },
    ],
  },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  const isDropdownActive = (link: NavItem) =>
    link.children?.some((c) => pathname.startsWith(c.href)) || pathname.startsWith(link.href)

  const toggleDropdown = (label: string) =>
    setOpenDropdown((prev) => (prev === label ? null : label))

  // Keep backward compat alias
  const isSellActive = isDropdownActive(navLinks.find((l) => l.label === 'Sell My Device')!)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt=""
              width={40}
              height={40}
              priority
              className="h-10 w-10 object-contain"
            />
            <span className="text-lg font-bold text-charcoal leading-tight">
              <span className="text-primary">i</span>TECH{' '}
              <span className="text-primary">REPAIRS</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                      isDropdownActive(link) ? 'text-primary' : 'text-charcoal hover:text-primary'
                    }`}
                  >
                    {link.label}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-transform group-hover:rotate-180 duration-200" aria-hidden="true">
                      <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  </Link>
                  {/* Dropdown */}
                  <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[220px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-2.5 text-sm transition-colors ${
                            child.label.includes('→')
                              ? 'text-primary font-semibold hover:bg-red-50 border-t border-gray-100 mt-1 pt-3'
                              : 'text-charcoal hover:text-primary hover:bg-gray-50'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                    isActive(link.href)
                      ? 'text-primary'
                      : 'text-charcoal hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+61432933273"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>
              0432 933 273
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-md hover:bg-gray-surface transition-colors"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span className={`block w-6 h-0.5 bg-charcoal transition-all duration-200 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-charcoal transition-all duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-charcoal transition-all duration-200 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-border shadow-lg">
          <nav className="container mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.href}>
                  <button
                    type="button"
                    onClick={() => toggleDropdown(link.label)}
                    className={`w-full flex items-center justify-between px-4 py-3 text-base font-medium rounded-md transition-colors ${
                      isDropdownActive(link) ? 'text-primary bg-red-50' : 'text-charcoal hover:text-primary hover:bg-gray-surface'
                    }`}
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
                  className={`px-4 py-3 text-base font-medium rounded-md transition-colors ${
                    isActive(link.href)
                      ? 'text-primary bg-red-50'
                      : 'text-charcoal hover:text-primary hover:bg-gray-surface'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-2 pb-1">
              <a
                href="tel:+61432933273"
                className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-dark text-white text-base font-semibold px-6 py-3.5 rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                </svg>
                Call Now — 0432 933 273
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
