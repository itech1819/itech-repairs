import Link from 'next/link'
import Image from 'next/image'
import { business, locations } from '@/data'

const iphoneLinks = [
  { label: 'iPhone 17 Pro Max Repairs', href: '/iphone-17-pro-max-repair-melbourne' },
  { label: 'iPhone 17 Pro Repairs', href: '/iphone-17-pro-repair-melbourne' },
  { label: 'iPhone Air Repairs', href: '/iphone-air-repair-melbourne' },
  { label: 'iPhone 17 Repairs', href: '/iphone-17-repair-melbourne' },
  { label: 'iPhone 16 Pro Max Repairs', href: '/iphone-16-pro-max-repair-melbourne' },
  { label: 'iPhone 16 Pro Repairs', href: '/iphone-16-pro-repair-melbourne' },
  { label: 'iPhone 15 Pro Max Repairs', href: '/iphone-15-pro-max-repair-melbourne' },
  { label: 'iPhone 15 Pro Repairs', href: '/iphone-15-pro-repair-melbourne' },
]

const otherRepairLinks = [
  { label: 'Samsung Repairs', href: '/samsung-repair-melbourne' },
  { label: 'Samsung Model Directory', href: '/samsung-repair-directory' },
  { label: 'iPad Repairs', href: '/ipad-repair-melbourne' },
  { label: 'iPad Model Directory', href: '/ipad-repair-directory' },
  { label: 'MacBook Repairs', href: '/macbook-repair-melbourne' },
  { label: 'MacBook Model Directory', href: '/macbook-repair-directory' },
  { label: 'Google Pixel Repairs', href: '/google-pixel-repair-melbourne' },
  { label: 'Pixel Model Directory', href: '/google-pixel-repair-directory' },
]

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Repair Directory', href: '/repair-directory' },
  { label: 'Repair Guides', href: '/repair-guides' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Warranty Policy', href: '/warranty' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Walk-ins Welcome Badge */}
        <div className="flex justify-center mb-10">
          <span className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-primary-light text-sm font-semibold px-4 py-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.491 4.491 0 0 1-3.497-1.307 4.491 4.491 0 0 1-1.307-3.497A4.49 4.49 0 0 1 2.25 12a4.49 4.49 0 0 1 1.549-3.397 4.491 4.491 0 0 1 1.307-3.497 4.491 4.491 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>
            Walk-ins Welcome — No Appointment Needed
          </span>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Business Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 object-contain brightness-0 invert"
              />
              <span className="text-lg font-bold text-white leading-tight">
                <span className="text-primary-light">i</span>TECH{' '}
                <span className="text-primary-light">REPAIRS</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Melbourne&apos;s trusted repair specialists for iPhones, Samsung phones, iPads, and MacBooks. Fast, professional, and guaranteed.
            </p>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {locations.map((loc) => (
                <li key={loc.id} className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <a
                    href={loc.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {loc.address}, {loc.suburb} {loc.state} {loc.postcode}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-primary flex-shrink-0"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                    clipRule="evenodd"
                  />
                </svg>
                <a
                  href={business.phoneHref}
                  className="hover:text-primary transition-colors"
                >
                  {business.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>7 Days: 9am–9pm</span>
              </li>
            </ul>
          </div>

          {/* Column 2: iPhone Repairs */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              iPhone Repairs
            </h3>
            <ul className="space-y-2">
              {iphoneLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/iphone-repair-directory"
                  className="text-primary hover:text-primary-light text-sm font-medium transition-colors"
                >
                  All iPhone Models →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Other Repairs */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Other Repairs
            </h3>
            <ul className="space-y-2">
              {otherRepairLinks.map((link) => (
                <li key={`${link.href}-${link.label}`}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-charcoal-medium flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p>&copy; {currentYear} iTech Repairs. All rights reserved.</p>
          <p className="text-gray-500">
            On the spot 15 minute repairs in Melbourne &mdash; Walk in anytime
          </p>
        </div>
      </div>
    </footer>
  )
}
