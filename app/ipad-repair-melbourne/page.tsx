import type { Metadata } from 'next';
import { getBrandBySlug } from '@/data/brands';
import { generateMeta, categoryMeta } from '@/lib/generateMeta';
import { breadcrumbSchema, faqSchema } from '@/lib/generateSchema';
import { SITE_URL } from '@/data/business';
import CategoryPageTemplate from '@/components/sections/CategoryPageTemplate';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SchemaOrg from '@/components/seo/SchemaOrg';

export const metadata: Metadata = generateMeta(categoryMeta('iPad Repair Melbourne', '/ipad-repair-melbourne'));

const faqs = [
  { question: 'What iPad models do you repair?', answer: 'We repair all iPad models including iPad Pro, iPad Air, iPad Mini and standard iPad (9th gen through 11th gen).' },
  { question: 'How long does an iPad screen repair take?', answer: 'iPad screen repairs typically take 30–60 minutes depending on the model and screen size.' },
  { question: 'Can you repair an iPad with a broken charging port?', answer: 'Yes. We repair and replace USB-C and Lightning charging ports for all iPad models.' },
  { question: 'Do I need an appointment?', answer: 'No appointment needed. Walk in anytime during business hours.' },
  { question: 'Do you offer a warranty?', answer: 'Yes — lifetime warranty on all parts and labour on every iPad repair.' },
  { question: 'Can you repair an iPad with water damage?', answer: 'Yes. Bring it in as soon as possible without charging it. We offer free water damage assessment.' },
];

export default function IpadRepairMelbournePage() {
  const brand = getBrandBySlug('ipad')!;
  return (
    <>
      <SchemaOrg schema={breadcrumbSchema([{ name: 'Home', url: SITE_URL }, { name: 'iPad Repair Melbourne', url: `${SITE_URL}/ipad-repair-melbourne` }])} />
      <SchemaOrg schema={faqSchema(faqs)} />
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'iPad Repair Melbourne' }]} />
      <CategoryPageTemplate brand={brand} faqs={faqs} />
    </>
  );
}
