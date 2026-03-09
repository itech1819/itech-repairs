import type { Metadata } from 'next';
import { homepageFaqs } from '@/data/faqs';
import FAQSection from '@/components/ui/FAQSection';
import { faqSchema } from '@/lib/generateSchema';
import SchemaOrg from '@/components/seo/SchemaOrg';
export const metadata: Metadata = { title: 'FAQ | iTech Repairs Melbourne', description: 'Common questions about iPhone, Samsung and MacBook repairs at iTech Repairs Melbourne. Walk-ins welcome, lifetime warranty included.' };
export default function FAQPage() {
  return (
    <>
      <SchemaOrg schema={faqSchema(homepageFaqs)} />
      <div className="section-pad bg-grey-light">
        <div className="container-site"><h1 className="text-4xl md:text-5xl font-bold text-charcoal text-center mb-2" style={{fontFamily:'var(--font-barlow)'}}>Frequently Asked <span className="text-brand">Questions</span></h1></div>
      </div>
      <FAQSection faqs={homepageFaqs} title="" />
    </>
  );
}
