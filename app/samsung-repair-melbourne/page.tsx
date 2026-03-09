import type { Metadata } from 'next';
import { getBrandBySlug } from '@/data/brands';
import { generateMeta, categoryMeta } from '@/lib/generateMeta';
import { breadcrumbSchema, faqSchema } from '@/lib/generateSchema';
import { SITE_URL } from '@/data/business';
import CategoryPageTemplate from '@/components/sections/CategoryPageTemplate';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SchemaOrg from '@/components/seo/SchemaOrg';

export const metadata: Metadata = generateMeta(categoryMeta('Samsung Repair Melbourne', '/samsung-repair-melbourne'));

const faqs = [
  { question: 'What Samsung models do you repair?', answer: 'We repair all Samsung Galaxy models including S-series (S22 through S26), A-series, Z Fold 5/6 and Z Flip 5/6.' },
  { question: 'How long does a Samsung screen repair take?', answer: 'Most Samsung S-series screen repairs take 20–40 minutes. Z Fold repairs take longer due to their complex design.' },
  { question: 'Can you repair Samsung foldable phones?', answer: 'Yes. We repair Galaxy Z Fold and Z Flip models including inner and outer screen replacements.' },
  { question: 'Do you repair Samsung back glass?', answer: 'Yes. We replace back glass on all Samsung S-series and other glass-back models.' },
  { question: 'Do I need an appointment?', answer: 'No. Walk in anytime during business hours — no booking required.' },
  { question: 'What warranty do you offer?', answer: 'Lifetime warranty on all parts and labour on every Samsung repair.' },
];

export default function SamsungRepairMelbournePage() {
  const brand = getBrandBySlug('samsung')!;
  return (
    <>
      <SchemaOrg schema={breadcrumbSchema([{ name: 'Home', url: SITE_URL }, { name: 'Samsung Repair Melbourne', url: `${SITE_URL}/samsung-repair-melbourne` }])} />
      <SchemaOrg schema={faqSchema(faqs)} />
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Samsung Repair Melbourne' }]} />
      <CategoryPageTemplate brand={brand} faqs={faqs} />
    </>
  );
}
