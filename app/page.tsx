import type { Metadata } from 'next';
import Link from 'next/link';
import { BUSINESS, SITE_URL } from '@/data/business';
import { brands } from '@/data/brands';
import { repairs } from '@/data/repairs';
import { suburbs } from '@/data/suburbs';
import { homepageFaqs } from '@/data/faqs';
import { models } from '@/data/models';
import TrustBar from '@/components/sections/TrustBar';
import FAQSection from '@/components/ui/FAQSection';
import BottomCTA from '@/components/ui/BottomCTA';
import SchemaOrg from '@/components/seo/SchemaOrg';
import { faqSchema } from '@/lib/generateSchema';

export const metadata: Metadata = {
  title: 'iTech Repairs Melbourne | iPhone, MacBook & Samsung Repairs — 15-Min Service',
  description: 'Same-day iPhone, MacBook, iPad & Samsung repairs in Melbourne. Many repairs done in 15 minutes. Lifetime warranty. Walk in anytime — no appointment needed.',
  alternates: { canonical: SITE_URL },
};

const reviews = [
  { name: 'Sarah M.', suburb: 'Footscray', text: 'Fixed my iPhone 15 screen in under 20 minutes. Couldn\'t believe how fast and professional they were. Highly recommend.', rating: 5 },
  { name: 'James T.', suburb: 'Yarraville', text: 'Brought in my MacBook Air with a dead battery and cracked screen. Both fixed same day at a very fair price.', rating: 5 },
  { name: 'Priya K.', suburb: 'Braybrook', text: 'Best repair shop in Melbourne\'s inner west. Honest, fast and the lifetime warranty is the real deal.', rating: 5 },
];

const whyUs = [
  { icon: '⚡', title: '15-Minute Repairs', desc: 'Many common repairs — screen replacements, battery swaps — are done while you wait. No wasting your day.' },
  { icon: '🛡️', title: 'Lifetime Warranty', desc: 'Every repair comes with a lifetime warranty on parts and labour. If it fails, we fix it free.' },
  { icon: '📍', title: 'Just Walk In', desc: 'No appointment needed. Come in any time during business hours and we\'ll take a look on the spot.' },
  { icon: '💯', title: 'Quality Parts', desc: 'We use genuine-spec or OEM-equivalent parts. We always explain what\'s being used and why.' },
  { icon: '🔍', title: 'Free Diagnostic', desc: 'Not sure what\'s wrong? Bring it in. We\'ll diagnose your device for free and give you a clear quote.' },
  { icon: '💬', title: 'Honest Advice', desc: 'We give you a clear price upfront. No surprises, no hidden fees — ever.' },
];

const steps = [
  { n: '1', title: 'Walk In or Call', desc: 'Visit our Braybrook store or call ahead. No booking needed.' },
  { n: '2', title: 'Free Quote in Minutes', desc: 'We assess your device on the spot and give you a clear price before any work begins.' },
  { n: '3', title: 'Repaired — Same Day', desc: 'Most repairs are done while you wait. Walk out with a working device.' },
];

const popularRepairs = repairs.filter(r => r.popular).slice(0, 6);
const popularModels = models.filter(m => m.popular).slice(0, 8);

export default function HomePage() {
  return (
    <>
      <SchemaOrg schema={faqSchema(homepageFaqs)} />

      {/* ── HERO ── */}
      <section className="bg-charcoal text-white">
        <div className="container-site py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="section-label text-brand mb-4">Melbourne&apos;s #1 Repair Specialists</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-5 leading-[1.0]" style={{fontFamily:'var(--font-barlow)'}}>
              Fast Device Repairs.<br /><span className="text-brand">Done Right.</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed">
              Most repairs completed in 15 minutes. Walk in today — no appointment needed. Lifetime warranty on every single repair.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a href={BUSINESS.phoneHref} className="btn-primary justify-center sm:justify-start">📞 Call {BUSINESS.phoneDisplay}</a>
              <a href={BUSINESS.googleMapsUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-charcoal transition-all duration-200 text-base">
                📍 Visit Our Store
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              {['✓ Same-day service','✓ Lifetime warranty','✓ 500+ 5-star reviews','✓ Walk-ins welcome'].map(t => (
                <span key={t} className="text-gray-300"><span className="text-brand">{t.split(' ')[0]}</span> {t.slice(2)}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <TrustBar />

      {/* ── DEVICE CATEGORIES ── */}
      <section className="section-pad bg-grey-light">
        <div className="container-site">
          <p className="section-label text-center mb-2">What Can We Fix?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-10" style={{fontFamily:'var(--font-barlow)'}}>Select Your Device</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {brands.map(brand => (
              <Link key={brand.slug} href={`/${brand.categorySlug}`}
                className="card flex flex-col items-center text-center gap-3 p-6 group hover:border-brand">
                <span className="text-4xl">{brand.icon}</span>
                <span className="font-bold text-charcoal text-base group-hover:text-brand transition-colors" style={{fontFamily:'var(--font-barlow)'}}>{brand.name}</span>
                <span className="text-brand text-xs font-semibold">View repairs →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── POPULAR REPAIRS ── */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <p className="section-label text-center mb-2">Most Requested</p>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-10" style={{fontFamily:'var(--font-barlow)'}}>Popular Repairs in Melbourne</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularRepairs.map(repair => (
              <div key={repair.slug} className="card flex flex-col gap-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-charcoal text-lg" style={{fontFamily:'var(--font-barlow)'}}>{repair.name}</h3>
                  <span className="shrink-0 bg-grey-light text-grey-text text-xs px-2 py-1 rounded font-medium">{repair.typicalTime}</span>
                </div>
                <p className="text-grey-text text-sm leading-relaxed">{repair.description}</p>
                <a href={BUSINESS.phoneHref} className="btn-ghost mt-auto">Get a quote →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ITECH ── */}
      <section className="section-pad bg-charcoal">
        <div className="container-site">
          <p className="section-label text-center mb-2 text-brand">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10" style={{fontFamily:'var(--font-barlow)'}}>Why Melbourne Chooses iTech Repairs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map(w => (
              <div key={w.title} className="flex gap-4 p-5 rounded-xl border-l-4 border-brand bg-charcoal-mid">
                <span className="text-3xl shrink-0">{w.icon}</span>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1" style={{fontFamily:'var(--font-barlow)'}}>{w.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section-pad bg-grey-light">
        <div className="container-site">
          <p className="section-label text-center mb-2">Simple Process</p>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-10" style={{fontFamily:'var(--font-barlow)'}}>Three Steps to a Fixed Device</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="card text-center">
                <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4" style={{fontFamily:'var(--font-barlow)'}}>{step.n}</div>
                <h3 className="font-bold text-charcoal text-xl mb-2" style={{fontFamily:'var(--font-barlow)'}}>{step.title}</h3>
                <p className="text-grey-text text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <p className="section-label text-center mb-2">Customer Reviews</p>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-2" style={{fontFamily:'var(--font-barlow)'}}>What Our Customers Say</h2>
          <p className="text-center text-grey-text text-sm mb-10">⭐ {BUSINESS.reviewRating}/5 from {BUSINESS.reviewCount}+ Google reviews</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <div key={i} className="card">
                <div className="flex text-brand mb-3">{'★★★★★'.split('').map((s, j) => <span key={j}>{s}</span>)}</div>
                <p className="text-charcoal text-sm leading-relaxed mb-4 italic">&ldquo;{r.text}&rdquo;</p>
                <p className="text-grey-text text-xs font-medium">— {r.name}, {r.suburb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POPULAR MODELS ── */}
      <section className="section-pad bg-grey-light">
        <div className="container-site">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-10" style={{fontFamily:'var(--font-barlow)'}}>Popular Models We Repair</h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {popularModels.map(m => (
              <Link key={m.slug} href={`/${m.slug}-repair-melbourne`}
                className="px-4 py-2 bg-white border border-grey-border rounded-lg text-sm font-medium text-charcoal hover:border-brand hover:text-brand transition-colors">
                {m.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUBURBS ── */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-3" style={{fontFamily:'var(--font-barlow)'}}>Serving Melbourne&apos;s Inner West</h2>
          <p className="text-center text-grey-text text-sm mb-8 max-w-lg mx-auto">Based in Braybrook, we serve customers from across Melbourne&apos;s inner west. Walk in or call — we&apos;ll have you sorted.</p>
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {suburbs.map(s => (
              <Link key={s.slug} href={`/iphone-repair-${s.slug}`}
                className="px-3 py-1.5 bg-grey-light border border-grey-border rounded-md text-sm text-grey-text hover:text-brand hover:border-brand transition-colors">
                iPhone Repair {s.name}
              </Link>
            ))}
          </div>
          <div className="text-center">
            <a href={BUSINESS.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex">📍 Get Directions</a>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQSection faqs={homepageFaqs} />

      {/* ── BOTTOM CTA ── */}
      <BottomCTA />
    </>
  );
}
