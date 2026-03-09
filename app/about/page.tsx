import type { Metadata } from 'next';
import { BUSINESS } from '@/data/business';
export const metadata: Metadata = { title: 'About iTech Repairs Melbourne | Device Repair Specialists', description: 'iTech Repairs is Melbourne\'s trusted local device repair specialist based in Braybrook. Fast, professional repairs with lifetime warranty.' };
export default function AboutPage() {
  return (
    <div className="section-pad">
      <div className="container-site max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4" style={{fontFamily:'var(--font-barlow)'}}>About <span className="text-brand">iTech Repairs</span></h1>
        <div className="space-y-5 text-grey-text text-base leading-relaxed">
          <p>iTech Repairs is Melbourne&apos;s trusted local device repair specialist, based in Braybrook and serving the inner west and beyond.</p>
          <p>We repair iPhones, Samsung Galaxy phones, Google Pixel phones, iPads and MacBooks — all models, all repairs, same day.</p>
          <p>Our technicians are experienced, our parts are genuine-spec, and every repair comes with a lifetime warranty on parts and labour.</p>
          <p>We believe in honest advice, clear pricing and fast turnaround. No surprises, no unnecessary upsells — just reliable repairs done right.</p>
          <div className="card mt-8">
            <p className="font-bold text-charcoal" style={{fontFamily:'var(--font-barlow)'}}>{BUSINESS.address}, {BUSINESS.suburb} {BUSINESS.state} {BUSINESS.postcode}</p>
            <a href={BUSINESS.phoneHref} className="text-brand font-semibold block mt-2">{BUSINESS.phoneDisplay}</a>
          </div>
        </div>
      </div>
    </div>
  );
}
