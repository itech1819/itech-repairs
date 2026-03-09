'use client';
import { useState } from 'react';
import Link from 'next/link';
import { BUSINESS } from '@/data/business';

const navLinks = [
  { label: 'iPhone', href: '/iphone-repair-melbourne' },
  { label: 'MacBook', href: '/macbook-repair-melbourne' },
  { label: 'iPad', href: '/ipad-repair-melbourne' },
  { label: 'Samsung', href: '/samsung-repair-melbourne' },
  { label: 'Pixel', href: '/google-pixel-repair-melbourne' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-grey-border">
      <div className="container-site h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 bg-brand rounded flex items-center justify-center text-white font-bold text-sm" style={{fontFamily:'var(--font-barlow)'}}>iT</div>
          <span className="font-bold text-charcoal text-lg hidden sm:block" style={{fontFamily:'var(--font-barlow)'}}>iTech <span className="text-brand">Repairs</span></span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-grey-text hover:text-brand transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href={BUSINESS.phoneHref} className="text-sm font-semibold text-charcoal hover:text-brand transition-colors">
            {BUSINESS.phoneDisplay}
          </a>
          <a href={BUSINESS.phoneHref} className="btn-primary text-sm px-4 py-2">
            📞 Call Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md text-charcoal" aria-label="Menu">
          <div className="w-5 h-0.5 bg-current mb-1 transition-all" />
          <div className="w-5 h-0.5 bg-current mb-1" />
          <div className="w-5 h-0.5 bg-current transition-all" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-grey-border">
          <nav className="container-site py-4 flex flex-col gap-1">
            {navLinks.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="px-3 py-3 text-base font-medium text-charcoal hover:text-brand hover:bg-grey-light rounded-md transition-colors">
                {l.label} Repairs
              </Link>
            ))}
            <div className="pt-3 border-t border-grey-border mt-2">
              <a href={BUSINESS.phoneHref} className="btn-primary w-full justify-center">
                📞 Call {BUSINESS.phoneDisplay}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
