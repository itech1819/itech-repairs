import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Lifetime Warranty | iTech Repairs Melbourne', description: 'Every repair at iTech Repairs comes with a lifetime warranty on parts and labour. Learn what our warranty covers.' };
export default function WarrantyPage() {
  return (
    <div className="section-pad">
      <div className="container-site max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4" style={{fontFamily:'var(--font-barlow)'}}>Our <span className="text-brand">Lifetime Warranty</span></h1>
        <div className="prose text-grey-text space-y-4">
          <p className="text-lg text-charcoal">Every repair completed at iTech Repairs comes with a lifetime warranty on parts and labour.</p>
          <h2 className="text-2xl font-bold text-charcoal" style={{fontFamily:'var(--font-barlow)'}}>What the Warranty Covers</h2>
          <ul className="space-y-2">{['All replacement parts used in your repair','Labour performed during the repair','Any fault directly related to our repair work'].map((item,i)=><li key={i} className="flex gap-2"><span className="text-brand font-bold">✓</span>{item}</li>)}</ul>
          <h2 className="text-2xl font-bold text-charcoal" style={{fontFamily:'var(--font-barlow)'}}>How to Claim</h2>
          <p>If the same issue returns after our repair, simply bring your device back in. No paperwork, no fuss — we&apos;ll fix it free of charge.</p>
        </div>
      </div>
    </div>
  );
}
