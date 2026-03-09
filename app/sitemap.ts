import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/data/business';
import { getAllSlugs } from '@/lib/generateStaticParams';

export default function sitemap(): MetadataRoute.Sitemap {
  const allSlugs = getAllSlugs();

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${SITE_URL}/iphone-repair-melbourne`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/macbook-repair-melbourne`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/ipad-repair-melbourne`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/samsung-repair-melbourne`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/google-pixel-repair-melbourne`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/warranty`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ];

  const dynamicPages: MetadataRoute.Sitemap = allSlugs.map(({ slug }) => {
    const isModel = slug.endsWith('-repair-melbourne') && !slug.includes('-screen-') && !slug.includes('-battery-') && !slug.includes('-charging-');
    const isLocation = !slug.endsWith('-melbourne') && slug.includes('-repair-');
    return {
      url: `${SITE_URL}/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: isModel ? 0.8 : isLocation ? 0.8 : 0.7,
    };
  });

  return [...staticPages, ...dynamicPages];
}
