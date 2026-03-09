import Link from 'next/link';
import type { Brand } from '@/types';
import { models } from '@/data/models';
import { getRepairsBySlug } from '@/data/repairs';
import { suburbs } from '@/data/suburbs';
import { BUSINESS } from '@/data/business';
import TrustBar from '@/components/sections/TrustBar';
import FAQSection from '@/components/ui/FAQSection';
import BottomCTA from '@/components/ui/BottomCTA';
import type { FAQ } from '@/types';

interface Props {
  brand: Brand;
  faqs: FAQ[];
  heroHeadline?: string;
}

export default function CategoryPageTemplate({ brand, faqs, heroHeadline }: Props) {
  const brandModels = models.filter(m => m.brand === brand.slug).sort((a, b) => b.releaseYear - a.releaseYear);
  const popularModels = brandModels.filter(m => m.popular);
  const topRepairs = getRepairsBySlug(brand.repairSlugs);

  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal text-white py-14">
        <div className="container-site">
          <p className="section-label text-brand mb-3">Melbourne Repair Specialists</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight" style={{fontFamily:'var(--font-barlow)'}}>
            {heroHeadline || <>{brand.displayName}<br /><span className="text-brand">Melbourne</span></>}
          </h1>
          <p className="text-gray-300 text-lg mb-6 max-w-xl leading-relaxed">{brand.description}</p>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-brand text-white text-sm font-semibold px-3 py-1.5 rounded-full">⚡ 15-Min Repairs</span>
            <span className="bg-charcoal-mid text-gray-300 text-sm px-3 py-1.5 rounded-full">🛡️ Lifetime Warranty</span>
            <span className="bg-charcoal-mid text-gray-300 text-sm px-3 py-1.5 rounded-full">📍 Walk In Anytime</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={BUSINESS.phoneHref} className="btn-primary justify-center sm:justify-start">📞 Call Now</a>
            <a href={BUSINESS.googleMapsUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-charcoal transition-all text-base">
              📍 Visit Our Store
            </a>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Popular models */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <h2 className="text-3xl font-bold text-charcoal mb-2" style={{fontFamily:'var(--font-barlow)'}}>All {brand.name} Models We Repair</h2>
          <p className="text-grey-text mb-8">Select your model to see all available repairs, pricing and turnaround times.</p>

          {popularModels.length > 0 && (
            <>
              <h3 className="text-lg font-bold text-charcoal mb-4" style={{fontFamily:'var(--font-barlow)'}}>Popular Models</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
                {popularModels.map(m => (
                  <Link key={m.slug} href={`/${m.slug}-repair-melbourne`}
                    className="card p-4 flex flex-col gap-1 hover:border-brand group">
                    <span className="font-bold text-charcoal text-sm group-hover:text-brand transition-colors" style={{fontFamily:'var(--font-barlow)'}}>{m.name}</span>
                    <span className="text-grey-text text-xs">{m.releaseYear}</span>
                    <span className="text-brand text-xs font-medium mt-1">View repairs →</span>
                  </Link>
                ))}
              </div>
            </>
          )}

          <h3 className="text-lg font-bold text-charcoal mb-4" style={{fontFamily:'var(--font-barlow)'}}>All Models</h3>
          <div className="flex flex-wrap gap-2">
            {brandModels.map(m => (
              <Link key={m.slug} href={`/${m.slug}-repair-melbourne`}
                className="px-3 py-1.5 border border-grey-border rounded-lg text-sm text-charcoal hover:border-brand hover:text-brand transition-colors">
                {m.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Repair services */}
      <section className="section-pad bg-grey-light">
        <div className="container-site">
          <h2 className="text-3xl font-bold text-charcoal mb-8" style={{fontFamily:'var(--font-barlow)'}}>Common {brand.name} Repairs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {topRepairs.map(repair => (
              <div key={repair.slug} className="card flex flex-col gap-2">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-charcoal" style={{fontFamily:'var(--font-barlow)'}}>{repair.name}</h3>
                  <span className="text-xs bg-grey-mid text-grey-text px-2 py-0.5 rounded shrink-0">{repair.typicalTime}</span>
                </div>
                <p className="text-grey-text text-sm">{repair.description}</p>
                <a href={BUSINESS.phoneHref} className="btn-ghost mt-auto text-xs">Get quote →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why iTech */}
      <section className="section-pad bg-charcoal">
        <div className="container-site max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-6" style={{fontFamily:'var(--font-barlow)'}}>Why Choose iTech for {brand.name} Repairs?</h2>
          <ul className="space-y-4">
            {[
              `Genuine-spec ${brand.name} parts in stock`,
              'Screen repairs completed in as little as 15 minutes',
              'Lifetime warranty on all parts and labour',
              'No appointment needed — walk in anytime',
              'Free diagnostic if you\'re not sure what\'s wrong',
              'Transparent pricing — clear quote before any work begins',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-brand font-bold shrink-0 mt-0.5">✓</span>
                <span className="text-gray-300 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Suburb links */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <h2 className="text-2xl font-bold text-charcoal mb-4" style={{fontFamily:'var(--font-barlow)'}}>Serving Melbourne&apos;s Inner West</h2>
          <div className="flex flex-wrap gap-2">
            {suburbs.map(s => (
              <Link key={s.slug}
                href={`/${brand.slug === 'pixel' ? 'pixel' : brand.slug}-repair-${s.slug}`}
                className="px-3 py-1.5 border border-grey-border rounded-md text-sm text-grey-text hover:border-brand hover:text-brand transition-colors">
                {brand.name} Repair {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title={`${brand.name} Repair Melbourne FAQs`} />
      <BottomCTA heading={`Get Your ${brand.name} Fixed Today`} sub="Walk in to our Melbourne store — same-day service, lifetime warranty on every repair." />
    </>
  );
}
