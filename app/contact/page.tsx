import type { Metadata } from 'next';
import { BUSINESS } from '@/data/business';

export const metadata: Metadata = {
  title: 'Contact iTech Repairs Melbourne | Call or Visit Us',
  description: 'Contact iTech Repairs in Melbourne. Call us, visit our store in Braybrook, or get directions. No appointment needed — walk in anytime.',
};

export default function ContactPage() {
  return (
    <div className="section-pad">
      <div className="container-site max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4" style={{fontFamily:'var(--font-barlow)'}}>Contact <span className="text-brand">iTech Repairs</span></h1>
        <p className="text-grey-text text-lg mb-10">No appointment needed. Walk in anytime or call us first.</p>
        <div className="grid gap-6">
          <div className="card">
            <h2 className="text-xl font-bold text-charcoal mb-4" style={{fontFamily:'var(--font-barlow)'}}>📞 Call Us</h2>
            <a href={BUSINESS.phoneHref} className="text-brand text-2xl font-bold hover:text-brand-dark">{BUSINESS.phoneDisplay}</a>
          </div>
          <div className="card">
            <h2 className="text-xl font-bold text-charcoal mb-4" style={{fontFamily:'var(--font-barlow)'}}>📍 Visit Our Store</h2>
            <p className="text-charcoal">{BUSINESS.address}</p>
            <p className="text-charcoal">{BUSINESS.suburb} {BUSINESS.state} {BUSINESS.postcode}</p>
            <a href={BUSINESS.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost mt-3">Get directions on Google Maps →</a>
          </div>
          <div className="card">
            <h2 className="text-xl font-bold text-charcoal mb-4" style={{fontFamily:'var(--font-barlow)'}}>🕐 Hours</h2>
            <div className="space-y-2">
              {Object.entries(BUSINESS.hours).map(([day, hrs]) => (
                <div key={day} className="flex justify-between text-sm">
                  <span className="text-charcoal font-medium">{day}</span>
                  <span className="text-grey-text">{hrs}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
