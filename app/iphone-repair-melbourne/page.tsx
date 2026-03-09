import type { Metadata } from 'next';
import { getBrandBySlug } from '@/data/brands';
import { generateMeta, categoryMeta } from '@/lib/generateMeta';
import { generateLocationFaqs } from '@/data/faqs';
import { breadcrumbSchema, faqSchema } from '@/lib/generateSchema';
import { SITE_URL } from '@/data/business';
import CategoryPageTemplate from '@/components/sections/CategoryPageTemplate';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SchemaOrg from '@/components/seo/SchemaOrg';

export const metadata: Metadata = generateMeta(categoryMeta('iPhone Repair Melbourne', '/iphone-repair-melbourne'));

const faqs = [
  { question: 'What iPhone models do you repair?', answer: 'We repair all iPhone models from iPhone XS through to the latest iPhone 17 Pro Max and iPhone Air. If your model isn\'t listed, call us and we\'ll let you know.' },
  { question: 'How long does an iPhone screen repair take?', answer: 'Most iPhone screen repairs are completed in 15–30 minutes. We stock screens for all current models.' },
  { question: 'Do you repair iPhone Face ID?', answer: 'Yes. We take care to preserve Face ID functionality during all screen repairs, and can also repair standalone Face ID sensor failures.' },
  { question: 'Do I need an appointment?', answer: 'No appointment needed. Walk in during business hours and we\'ll take care of you on the spot.' },
  { question: 'What warranty do you offer on iPhone repairs?', answer: 'Lifetime warranty on all parts and labour. If the same fault returns, we fix it free.' },
  { question: 'Do you use genuine Apple parts?', answer: 'We use genuine-spec or OEM-equivalent parts. We\'ll explain the options available before starting any work.' },
];

export default function IphoneRepairMelbournePage() {
  const brand = getBrandBySlug('iphone')!;
  return (
    <>
      <SchemaOrg schema={breadcrumbSchema([
        { name: 'Home', url: SITE_URL },
        { name: 'iPhone Repair Melbourne', url: `${SITE_URL}/iphone-repair-melbourne` },
      ])} />
      <SchemaOrg schema={faqSchema(faqs)} />
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'iPhone Repair Melbourne' }]} />
      <CategoryPageTemplate brand={brand} faqs={faqs} />
    </>
  );
}
