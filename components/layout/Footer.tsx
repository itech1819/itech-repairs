import Link from 'next/link';
import { BUSINESS } from '@/data/business';
import { suburbs } from '@/data/suburbs';

const deviceLinks = [
  { label: 'iPhone Repair Melbourne', href: '/iphone-repair-melbourne' },
  { label: 'MacBook Repair Melbourne', href: '/macbook-repair-melbourne' },
  { label: 'iPad Repair Melbourne', href: '/ipad-repair-melbourne' },
  { label: 'Samsung Repair Melbourne', href: '/samsung-repair-melbourne' },
  { label: 'Google Pixel Repair Melbourne', href: '/google-pixel-repair-melbourne' },
];

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Warranty', href: '/warranty' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      {/* CTA Band */}
      <div className="bg-brand">
        <div className="container-site py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-bold text-xl" style={{fontFamily:'var(--font-barlow)'}}>Ready to Get Your Device Fixed?</p>
            <p className="text-red-100 text-sm mt-1">Walk in today — no appointment needed. Lifetime warranty on every repair.</p>
          </div>
          <div className="flex gap-3">
            <a href={BUSINESS.phoneHref} className="bg-white text-brand font-semibold px-5 py-2.5 rounded-md text-sm hover:bg-red-50 transition-colors">
              📞 Call Now
            </a>
            <a href={BUSINESS.googleMapsUrl} target="_blank" rel="noopener noreferrer"
              className="border-2 border-white text-white font-semibold px-5 py-2.5 rounded-md text-sm hover:bg-white hover:text-brand transition-colors">
              Get Directions
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-site py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand col */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand rounded flex items-center justify-center text-white font-bold text-sm">iT</div>
              <span className="font-bold text-white text-lg" style={{fontFamily:'var(--font-barlow)'}}>iTech <span className="text-brand">Repairs</span></span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">{BUSINESS.address}, {BUSINESS.suburb} {BUSINESS.state} {BUSINESS.postcode}</p>
            <a href={BUSINESS.phoneHref} className="text-brand font-semibold text-sm hover:text-red-400 transition-colors block mb-2">{BUSINESS.phoneDisplay}</a>
            <div className="text-xs text-gray-500 space-y-1 mt-4">
              {Object.entries(BUSINESS.hours).map(([day, hrs]) => (
                <div key={day} className="flex justify-between gap-4">
                  <span>{day}</span><span className="text-gray-400">{hrs}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Device links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">Device Repairs</h3>
            <ul className="space-y-2">
              {deviceLinks.map(l => (
                <li key={l.href}><Link href={l.href} className="text-gray-400 text-sm hover:text-brand transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Suburb links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">Service Areas</h3>
            <ul className="space-y-2">
              {suburbs.map(s => (
                <li key={s.slug}><Link href={`/iphone-repair-${s.slug}`} className="text-gray-400 text-sm hover:text-brand transition-colors">iPhone Repair {s.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map(l => (
                <li key={l.href}><Link href={l.href} className="text-gray-400 text-sm hover:text-brand transition-colors">{l.label}</Link></li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-1">
              {'★★★★★'.split('').map((s, i) => <span key={i} className="text-brand text-lg">{s}</span>)}
            </div>
            <p className="text-gray-400 text-xs mt-1">{BUSINESS.reviewCount}+ Google Reviews</p>
          </div>
        </div>

        <div className="border-t border-charcoal-mid mt-10 pt-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <p>ABN {BUSINESS.abn} | Melbourne, VIC, Australia</p>
        </div>
      </div>
    </footer>
  );
}
