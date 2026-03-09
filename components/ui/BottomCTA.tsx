import { BUSINESS } from '@/data/business';

export default function BottomCTA({ heading = 'Get Your Device Fixed Today', sub = 'Walk in anytime — no appointment needed. Lifetime warranty on every repair.' }: { heading?: string; sub?: string }) {
  return (
    <section className="bg-charcoal py-14">
      <div className="container-site text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{fontFamily:'var(--font-barlow)'}}>{heading}</h2>
        <p className="text-gray-400 text-base mb-8 max-w-xl mx-auto">{sub}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href={BUSINESS.phoneHref} className="btn-primary justify-center">📞 Call {BUSINESS.phoneDisplay}</a>
          <a href={BUSINESS.googleMapsUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-charcoal transition-all duration-200 text-base">
            📍 Visit Our Store
          </a>
        </div>
      </div>
    </section>
  );
}
