// Server component — no 'use client'. Renders as static HTML on the server.
// Mobile menu interactivity is delegated to MobileMenuClient (tiny isolated client component).
// Removed usePathname() active-state detection — was forcing full client hydration
// on every page load, adding ~100-300ms to mobile LCP on slow connections.
// Desktop dropdowns work via CSS group-hover — zero JS required.

import Link from 'next/link'
import Image from 'next/image'
import MobileMenuClient from './MobileMenuClient'

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

const phone = '0432 933 273'
const phoneHref = 'tel:+61432933273'

export default function Header() {
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
              fetchPriority="high"
              className="h-10 w-10 object-contain"
            />
            <span className="text-lg font-bold text-charcoal leading-tight">
              <span className="text-primary">i</span>TECH{' '}
              <span className="text-primary">REPAIRS</span>
            </span>
          </Link>

          {/* Desktop Nav — CSS group-hover dropdowns, zero JS */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap text-charcoal hover:text-primary"
                  >
                    {link.label}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-transform group-hover:rotate-180 duration-200" aria-hidden="true">
                      <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  </Link>
                  {/* Dropdown — shown via CSS group-hover, no JS */}
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
                  className="px-3 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap text-charcoal hover:text-primary"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA — server rendered */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={phoneHref}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>
              {phone}
            </a>
          </div>

          {/* Mobile menu — only client component in header */}
          <MobileMenuClient navLinks={navLinks} phone={phone} phoneHref={phoneHref} />
        </div>
      </div>
    </header>
  )
}
