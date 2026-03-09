import type { Metadata } from 'next';
import { getBrandBySlug } from '@/data/brands';
import { generateMeta, categoryMeta } from '@/lib/generateMeta';
import { breadcrumbSchema, faqSchema } from '@/lib/generateSchema';
import { SITE_URL } from '@/data/business';
import CategoryPageTemplate from '@/components/sections/CategoryPageTemplate';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SchemaOrg from '@/components/seo/SchemaOrg';

export const metadata: Metadata = generateMeta(categoryMeta('Google Pixel Repair Melbourne', '/google-pixel-repair-melbourne'));

const faqs = [
  { question: 'What Google Pixel models do you repair?', answer: 'We repair all Google Pixel models from Pixel 6a through to Pixel 10 Pro XL and Pixel 10 Pro Fold.' },
  { question: 'How long does a Pixel screen repair take?', answer: 'Most Pixel screen repairs are completed in 20–40 minutes.' },
  { question: 'Can you repair a cracked Pixel back glass?', answer: 'Yes. We replace back glass and covers on all Pixel models.' },
  { question: 'Do you fix Pixel camera issues?', answer: 'Yes. Pixel cameras are renowned for quality — we stock OEM-matched replacement modules to maintain that quality.' },
  { question: 'Do I need an appointment?', answer: 'No appointment needed. Walk in anytime.' },
  { question: 'What warranty do you offer?', answer: 'Lifetime warranty on all parts and labour on every Pixel repair.' },
];

export default function GooglePixelRepairMelbournePage() {
  const brand = getBrandBySlug('pixel')!;
  return (
    <>
      <SchemaOrg schema={breadcrumbSchema([{ name: 'Home', url: SITE_URL }, { name: 'Google Pixel Repair Melbourne', url: `${SITE_URL}/google-pixel-repair-melbourne` }])} />
      <SchemaOrg schema={faqSchema(faqs)} />
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Google Pixel Repair Melbourne' }]} />
      <CategoryPageTemplate brand={brand} faqs={faqs} />
    </>
  );
}
