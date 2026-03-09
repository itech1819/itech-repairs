import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllSlugs } from '@/lib/generateStaticParams';
import { parseSlug } from '@/lib/parseSlug';
import { getModelBySlug, getModelsByBrand } from '@/data/models';
import { getRepairBySlug, getRepairsBySlug } from '@/data/repairs';
import { getSuburbBySlug } from '@/data/suburbs';
import { getBrandBySlug } from '@/data/brands';
import { generateMeta, modelMeta, repairMeta, locationMeta } from '@/lib/generateMeta';
import { generateModelFaqs, generateRepairFaqs, generateLocationFaqs } from '@/data/faqs';
import { getRelatedRepairsForModel, getSiblingModels, getCategorySlug, getBrandDisplayName } from '@/lib/internalLinks';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/generateSchema';
import { BUSINESS, SITE_URL } from '@/data/business';

import Breadcrumb from '@/components/ui/Breadcrumb';
import FAQSection from '@/components/ui/FAQSection';
import BottomCTA from '@/components/ui/BottomCTA';
import TrustBar from '@/components/sections/TrustBar';
import SchemaOrg from '@/components/seo/SchemaOrg';
import Link from 'next/link';

export const dynamic = 'force-static';
// export const revalidate = 86400; // Uncomment for ISR in Phase 2/3

export async function generateStaticParams() {
  return getAllSlugs();
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const parsed = parseSlug(slug);
  if (!parsed) return {};

  if (parsed.type === 'model') {
    const model = getModelBySlug(parsed.modelSlug!);
    if (!model) return {};
    return generateMeta(modelMeta(model.name, `/${slug}`));
  }
  if (parsed.type === 'repair') {
    const model = getModelBySlug(parsed.modelSlug!);
    const repair = getRepairBySlug(parsed.repairSlug!);
    if (!model || !repair) return {};
    return generateMeta(repairMeta(model.name, repair.name, `/${slug}`));
  }
  if (parsed.type === 'location') {
    const suburb = getSuburbBySlug(parsed.suburbSlug!);
    const deviceLabel = getBrandDisplayName(parsed.deviceKey as any) || parsed.deviceKey || '';
    if (!suburb) return {};
    return generateMeta(locationMeta(deviceLabel, suburb.name, `/${slug}`));
  }
  return {};
}

export default async function SlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const parsed = parseSlug(slug);
  if (!parsed) return notFound();

  // ── MODEL HUB PAGE ────────────────────────────────────────────────────────
  if (parsed.type === 'model') {
    const model = getModelBySlug(parsed.modelSlug!);
    if (!model) return notFound();
    const brand = getBrandBySlug(model.brand);
    const availableRepairs = getRepairsBySlug(model.repairSlugs);
    const siblingModels = getSiblingModels(model.slug, 6);
    const faqs = generateModelFaqs(model.name, brand?.name || '');
    const categorySlug = getCategorySlug(model.brand);
    const brandDisplay = getBrandDisplayName(model.brand);

    return (
      <>
        <SchemaOrg schema={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: `${brandDisplay} Repair Melbourne`, url: `${SITE_URL}/${categorySlug}` },
          { name: `${model.name} Repair Melbourne`, url: `${SITE_URL}/${slug}` },
        ])} />
        <SchemaOrg schema={faqSchema(faqs)} />

        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: `${brandDisplay} Repair Melbourne`, href: `/${categorySlug}` },
          { label: `${model.name} Repair` },
        ]} />

        {/* Hero */}
        <section className="bg-charcoal text-white py-14">
          <div className="container-site">
            <p className="section-label text-brand mb-3">Melbourne Repair Specialists</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{fontFamily:'var(--font-barlow)'}}>
              {model.name} Repair<br /><span className="text-brand">Melbourne</span>
            </h1>
            <p className="text-gray-300 text-lg mb-6 max-w-xl">
              Fast, expert repairs for your {model.name}. Walk in today — lifetime warranty on every repair.
            </p>
            {model.specs && (
              <div className="flex flex-wrap gap-3 mb-6">
                {model.specs.screen && <span className="bg-charcoal-mid text-gray-300 text-xs px-3 py-1 rounded-full">{model.specs.screen} display</span>}
                {model.specs.chip && <span className="bg-charcoal-mid text-gray-300 text-xs px-3 py-1 rounded-full">{model.specs.chip}</span>}
                {model.specs.notes && <span className="bg-charcoal-mid text-gray-300 text-xs px-3 py-1 rounded-full">{model.specs.notes}</span>}
                <span className="bg-charcoal-mid text-gray-300 text-xs px-3 py-1 rounded-full">{model.releaseYear}</span>
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={BUSINESS.phoneHref} className="btn-primary justify-center sm:justify-start">📞 Call Now</a>
              <a href={BUSINESS.googleMapsUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-charcoal transition-all text-base">
                📍 Visit Store
              </a>
            </div>
          </div>
        </section>

        <TrustBar />

        {/* Available repairs grid */}
        <section className="section-pad bg-white">
          <div className="container-site">
            <h2 className="text-3xl font-bold text-charcoal mb-2" style={{fontFamily:'var(--font-barlow)'}}>What We Fix on the {model.name}</h2>
            <p className="text-grey-text mb-8">All repairs come with a lifetime warranty on parts and labour.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {availableRepairs.map(repair => (
                <Link key={repair.slug} href={`/${model.slug}-${repair.slug}-melbourne`}
                  className="card hover:border-brand group flex flex-col gap-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-charcoal group-hover:text-brand transition-colors" style={{fontFamily:'var(--font-barlow)'}}>{repair.name}</h3>
                    <span className="shrink-0 text-xs bg-grey-light text-grey-text px-2 py-0.5 rounded">{repair.typicalTime}</span>
                  </div>
                  <p className="text-grey-text text-sm">{repair.description}</p>
                  <span className="btn-ghost mt-auto text-xs">Get quote →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why choose us for this model */}
        <section className="section-pad bg-grey-light">
          <div className="container-site max-w-3xl">
            <h2 className="text-3xl font-bold text-charcoal mb-6" style={{fontFamily:'var(--font-barlow)'}}>Why Choose iTech for Your {model.name}?</h2>
            <ul className="space-y-3">
              {['Genuine-spec parts in stock for ' + model.name,'15-minute screen repairs on most models','Lifetime warranty on all parts and labour','No appointment needed — walk in anytime','Expert technicians with Melbourne experience'].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-charcoal">
                  <span className="text-brand font-bold shrink-0 mt-0.5">✓</span>
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Related models */}
        {siblingModels.length > 0 && (
          <section className="section-pad bg-white">
            <div className="container-site">
              <h2 className="text-2xl font-bold text-charcoal mb-6" style={{fontFamily:'var(--font-barlow)'}}>Also Available</h2>
              <div className="flex flex-wrap gap-2">
                {siblingModels.map(m => (
                  <Link key={m.slug} href={`/${m.slug}-repair-melbourne`}
                    className="px-4 py-2 border border-grey-border rounded-lg text-sm text-charcoal hover:border-brand hover:text-brand transition-colors">
                    {m.name}
                  </Link>
                ))}
                <Link href={`/${categorySlug}`}
                  className="px-4 py-2 border border-brand text-brand rounded-lg text-sm font-semibold hover:bg-brand hover:text-white transition-colors">
                  All {brandDisplay} Repairs →
                </Link>
              </div>
            </div>
          </section>
        )}

        <FAQSection faqs={faqs} title={`${model.name} Repair FAQs`} />
        <BottomCTA heading={`Get Your ${model.name} Fixed Today`} />
      </>
    );
  }

  // ── REPAIR SERVICE PAGE ───────────────────────────────────────────────────
  if (parsed.type === 'repair') {
    const model = getModelBySlug(parsed.modelSlug!);
    const repair = getRepairBySlug(parsed.repairSlug!);
    if (!model || !repair) return notFound();

    const brandDisplay = getBrandDisplayName(model.brand);
    const categorySlug = getCategorySlug(model.brand);
    const relatedRepairs = getRelatedRepairsForModel(model.slug, repair.slug, 5);
    const siblingModels = getSiblingModels(model.slug, 4);
    const faqs = generateRepairFaqs(repair.name, model.name);

    return (
      <>
        <SchemaOrg schema={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: `${brandDisplay} Repair Melbourne`, url: `${SITE_URL}/${categorySlug}` },
          { name: `${model.name} Repair`, url: `${SITE_URL}/${model.slug}-repair-melbourne` },
          { name: repair.name, url: `${SITE_URL}/${slug}` },
        ])} />
        <SchemaOrg schema={faqSchema(faqs)} />
        <SchemaOrg schema={serviceSchema(`${model.name} ${repair.name} Melbourne`, repair.longDescription, `${SITE_URL}/${slug}`)} />

        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: `${brandDisplay} Repair`, href: `/${categorySlug}` },
          { label: model.name, href: `/${model.slug}-repair-melbourne` },
          { label: repair.name },
        ]} />

        {/* Hero */}
        <section className="bg-charcoal text-white py-14">
          <div className="container-site">
            <p className="section-label text-brand mb-3">Melbourne Repair Specialists</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight" style={{fontFamily:'var(--font-barlow)'}}>
              {model.name}<br /><span className="text-brand">{repair.name}</span><br />Melbourne
            </h1>
            <div className="flex flex-wrap gap-3 mb-5">
              <span className="flex items-center gap-1.5 bg-brand text-white text-sm font-semibold px-3 py-1.5 rounded-full">⏱ {repair.typicalTime}</span>
              <span className="flex items-center gap-1.5 bg-charcoal-mid text-gray-300 text-sm px-3 py-1.5 rounded-full">🛡️ Lifetime Warranty</span>
              <span className="flex items-center gap-1.5 bg-charcoal-mid text-gray-300 text-sm px-3 py-1.5 rounded-full">📍 Walk In Anytime</span>
            </div>
            <p className="text-gray-300 text-base mb-6 max-w-xl leading-relaxed">{repair.longDescription}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={BUSINESS.phoneHref} className="btn-primary justify-center sm:justify-start">📞 Call Now</a>
              <a href={BUSINESS.googleMapsUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-charcoal transition-all text-base">
                📍 Visit Store
              </a>
            </div>
          </div>
        </section>

        <TrustBar />

        {/* What's included */}
        <section className="section-pad bg-white">
          <div className="container-site max-w-3xl">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h2 className="text-2xl font-bold text-charcoal mb-5" style={{fontFamily:'var(--font-barlow)'}}>What&apos;s Included</h2>
                <ul className="space-y-3">
                  {repair.includedInRepair.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-brand font-bold shrink-0">✓</span>
                      <span className="text-charcoal text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-charcoal mb-5" style={{fontFamily:'var(--font-barlow)'}}>How It Works</h2>
                <ol className="space-y-3">
                  {[
                    'Walk in or call — no appointment needed',
                    'Free assessment in 5 minutes, clear price given',
                    `${repair.name} completed — ${repair.typicalTime}`,
                    'Full function test before handover',
                    'Walk out with a working device',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 bg-brand text-white text-xs font-bold rounded-full flex items-center justify-center shrink-0 mt-0.5">{i+1}</span>
                      <span className="text-charcoal text-sm">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Other repairs for this model */}
        {relatedRepairs.length > 0 && (
          <section className="section-pad bg-grey-light">
            <div className="container-site">
              <h2 className="text-2xl font-bold text-charcoal mb-6" style={{fontFamily:'var(--font-barlow)'}}>Other Repairs for {model.name}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {relatedRepairs.map(r => (
                  <Link key={r.slug} href={`/${model.slug}-${r.slug}-melbourne`}
                    className="card hover:border-brand group p-4">
                    <h3 className="font-bold text-charcoal group-hover:text-brand text-base mb-1" style={{fontFamily:'var(--font-barlow)'}}>{r.name}</h3>
                    <p className="text-grey-text text-xs">{r.typicalTime}</p>
                  </Link>
                ))}
              </div>
              <Link href={`/${model.slug}-repair-melbourne`} className="btn-ghost">View all {model.name} repairs →</Link>
            </div>
          </section>
        )}

        {/* Same repair for other models */}
        {siblingModels.length > 0 && (
          <section className="section-pad bg-white">
            <div className="container-site">
              <h2 className="text-2xl font-bold text-charcoal mb-4" style={{fontFamily:'var(--font-barlow)'}}>Also Available For</h2>
              <div className="flex flex-wrap gap-2">
                {siblingModels.filter(m => m.repairSlugs.includes(repair.slug)).map(m => (
                  <Link key={m.slug} href={`/${m.slug}-${repair.slug}-melbourne`}
                    className="px-4 py-2 border border-grey-border rounded-lg text-sm text-charcoal hover:border-brand hover:text-brand transition-colors">
                    {m.name}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <FAQSection faqs={faqs} title={`${model.name} ${repair.name} FAQs`} />
        <BottomCTA heading={`Book Your ${model.name} ${repair.name}`} sub={`Walk in to our Melbourne store today — ${repair.typicalTime}. Lifetime warranty included.`} />
      </>
    );
  }

  // ── LOCATION PAGE ─────────────────────────────────────────────────────────
  if (parsed.type === 'location') {
    const suburb = getSuburbBySlug(parsed.suburbSlug!);
    if (!suburb) return notFound();
    const deviceKey = parsed.deviceKey as string;
    const deviceLabel = getBrandDisplayName(deviceKey as any) || deviceKey;
    const brandModels = getModelsByBrand(deviceKey).filter(m => m.popular).slice(0, 8);
    const faqs = generateLocationFaqs(deviceLabel, suburb.name);

    return (
      <>
        <SchemaOrg schema={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: `${deviceLabel} Repair Melbourne`, url: `${SITE_URL}/${deviceKey === 'pixel' ? 'google-pixel' : deviceKey}-repair-melbourne` },
          { name: `${deviceLabel} Repair ${suburb.name}`, url: `${SITE_URL}/${slug}` },
        ])} />
        <SchemaOrg schema={faqSchema(faqs)} />

        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: `${deviceLabel} Repair Melbourne`, href: `/${deviceKey === 'pixel' ? 'google-pixel' : deviceKey}-repair-melbourne` },
          { label: `${deviceLabel} Repair ${suburb.name}` },
        ]} />

        <section className="bg-charcoal text-white py-14">
          <div className="container-site">
            <p className="section-label text-brand mb-3">Local Repair Service</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{fontFamily:'var(--font-barlow)'}}>
              {deviceLabel} Repair<br /><span className="text-brand">{suburb.name}</span>
            </h1>
            <p className="text-gray-300 text-lg mb-6 max-w-xl">
              Fast, expert {deviceLabel} repairs serving {suburb.name} customers. Based in Braybrook — just {suburb.distanceFromStore} away. Walk in today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={BUSINESS.phoneHref} className="btn-primary justify-center sm:justify-start">📞 Call Now</a>
              <a href={BUSINESS.googleMapsUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-charcoal transition-all text-base">
                📍 Get Directions
              </a>
            </div>
          </div>
        </section>

        <TrustBar />

        <section className="section-pad bg-white">
          <div className="container-site">
            <h2 className="text-3xl font-bold text-charcoal mb-4" style={{fontFamily:'var(--font-barlow)'}}>
              {deviceLabel} Repairs for {suburb.name} Customers
            </h2>
            <p className="text-grey-text text-base mb-8 max-w-2xl">
              We serve customers from {suburb.name} and surrounding areas. Most repairs are completed same day — many in as little as 15 minutes while you wait. Lifetime warranty on every repair.
            </p>
            {brandModels.length > 0 && (
              <>
                <h3 className="text-xl font-bold text-charcoal mb-4" style={{fontFamily:'var(--font-barlow)'}}>Popular {deviceLabel} Models We Repair</h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {brandModels.map(m => (
                    <Link key={m.slug} href={`/${m.slug}-repair-melbourne`}
                      className="px-4 py-2 border border-grey-border rounded-lg text-sm text-charcoal hover:border-brand hover:text-brand transition-colors">
                      {m.name}
                    </Link>
                  ))}
                </div>
              </>
            )}
            <div className="bg-grey-light rounded-xl p-6">
              <h3 className="font-bold text-charcoal text-lg mb-3" style={{fontFamily:'var(--font-barlow)'}}>Store Location</h3>
              <p className="text-grey-text text-sm mb-1">{BUSINESS.address}, {BUSINESS.suburb} {BUSINESS.state} {BUSINESS.postcode}</p>
              <p className="text-grey-text text-sm mb-3">{suburb.distanceFromStore} from {suburb.name}</p>
              <a href={BUSINESS.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">View on Google Maps →</a>
            </div>
          </div>
        </section>

        <FAQSection faqs={faqs} title={`${deviceLabel} Repair ${suburb.name} — FAQs`} />
        <BottomCTA heading={`${deviceLabel} Repairs for ${suburb.name}`} sub="Fast same-day service. Lifetime warranty. Walk in or call us now." />
      </>
    );
  }

  return notFound();
}
