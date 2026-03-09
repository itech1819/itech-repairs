import { BUSINESS } from '@/data/business';

export default function MobileCallBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex border-t border-grey-border bg-white"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <a href={BUSINESS.phoneHref}
        className="flex-1 flex flex-col items-center justify-center py-3 bg-brand text-white gap-0.5">
        <span className="text-lg">📞</span>
        <span className="text-xs font-semibold">Call Now</span>
      </a>
      <a href={`sms:${BUSINESS.phone}`}
        className="flex-1 flex flex-col items-center justify-center py-3 bg-charcoal text-white gap-0.5">
        <span className="text-lg">💬</span>
        <span className="text-xs font-semibold">Get Quote</span>
      </a>
      <a href={BUSINESS.googleMapsUrl} target="_blank" rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-3 bg-grey-light text-charcoal gap-0.5">
        <span className="text-lg">📍</span>
        <span className="text-xs font-semibold">Directions</span>
      </a>
    </div>
  );
}
