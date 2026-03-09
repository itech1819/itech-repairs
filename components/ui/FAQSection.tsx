'use client';
import { useState } from 'react';
import type { FAQ } from '@/types';

export default function FAQSection({ faqs, title = 'Frequently Asked Questions' }: { faqs: FAQ[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="section-pad bg-white">
      <div className="container-site max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8 text-center" style={{fontFamily:'var(--font-barlow)'}}>{title}</h2>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-grey-border rounded-lg overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-grey-light transition-colors"
                aria-expanded={open === i}>
                <span className="font-semibold text-charcoal text-base pr-4" style={{fontFamily:'var(--font-barlow)'}}>{faq.question}</span>
                <span className={`text-brand text-xl shrink-0 transition-transform duration-200 ${open === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-grey-text text-sm leading-relaxed border-t border-grey-border pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
