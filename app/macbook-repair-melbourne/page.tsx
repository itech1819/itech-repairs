import type { Metadata } from 'next';
import { getBrandBySlug } from '@/data/brands';
import { generateMeta, categoryMeta } from '@/lib/generateMeta';
import { breadcrumbSchema, faqSchema } from '@/lib/generateSchema';
import { SITE_URL } from '@/data/business';
import CategoryPageTemplate from '@/components/sections/CategoryPageTemplate';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SchemaOrg from '@/components/seo/SchemaOrg';

export const metadata: Metadata = generateMeta(categoryMeta('MacBook Repair Melbourne', '/macbook-repair-melbourne'));

const faqs = [
  { question: 'What MacBook models do you repair?', answer: 'We repair all MacBook Air and MacBook Pro models from M1 through to the latest M5 chips, including MacBook Neo.' },
  { question: 'Can you repair a MacBook with water damage?', answer: 'Yes. Bring it in immediately — do not charge it. We offer a free water damage assessment and ultrasonic board cleaning.' },
  { question: 'Do you replace MacBook keyboards?', answer: 'Yes. We replace keyboards for all MacBook Air and MacBook Pro models including current Magic Keyboard and older butterfly mechanism models.' },
  { question: 'How long does a MacBook screen repair take?', answer: 'MacBook screen replacements typically take 45–90 minutes depending on the model.' },
  { question: 'Can you upgrade my MacBook SSD?', answer: 'Yes, on compatible models. Note that Apple Silicon MacBooks (M1 and newer) have unified memory that cannot be upgraded.' },
  { question: 'Is there a warranty on MacBook repairs?', answer: 'Yes — lifetime warranty on all parts and labour on every MacBook repair we complete.' },
];

export default function MacbookRepairMelbournePage() {
  const brand = getBrandBySlug('macbook')!;
  return (
    <>
      <SchemaOrg schema={breadcrumbSchema([
        { name: 'Home', url: SITE_URL },
        { name: 'MacBook Repair Melbourne', url: `${SITE_URL}/macbook-repair-melbourne` },
      ])} />
      <SchemaOrg schema={faqSchema(faqs)} />
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'MacBook Repair Melbourne' }]} />
      <CategoryPageTemplate brand={brand} faqs={faqs} />
    </>
  );
}
