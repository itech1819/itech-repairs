import type { Metadata } from 'next';
import { SITE_URL, BUSINESS } from '@/data/business';

interface MetaInput {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}

export function generateMeta({ title, description, path, noIndex }: MetaInput): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: BUSINESS.name,
      locale: 'en_AU',
      type: 'website',
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}

export function modelMeta(modelName: string, path: string): MetaInput {
  return {
    title: `${modelName} Repair Melbourne | Screen, Battery & More | iTech Repairs`,
    description: `Expert ${modelName} repair in Melbourne. Screen, battery, charging port & more. Walk in today — most repairs done in 15–30 min. Lifetime warranty.`,
    path,
  };
}

export function repairMeta(modelName: string, repairName: string, path: string): MetaInput {
  return {
    title: `${modelName} ${repairName} Melbourne | Fast & Affordable | iTech Repairs`,
    description: `${modelName} ${repairName.toLowerCase()} in Melbourne. Fast turnaround, lifetime warranty. Walk in today — no appointment needed. Get a free quote.`,
    path,
  };
}

export function locationMeta(deviceLabel: string, suburbName: string, path: string): MetaInput {
  return {
    title: `${deviceLabel} Repair ${suburbName} | Same-Day Service | iTech Repairs`,
    description: `Fast ${deviceLabel} repair near ${suburbName}. Screen, battery & more. Walk in to Braybrook — just minutes away. Lifetime warranty. No appointment needed.`,
    path,
  };
}

export function categoryMeta(brandDisplay: string, path: string): MetaInput {
  return {
    title: `${brandDisplay} Melbourne | Same-Day Screen, Battery & More | iTech Repairs`,
    description: `Expert ${brandDisplay.toLowerCase()} in Melbourne. Screen, battery, charging port & more. Walk in anytime — most repairs done in 15–30 min. Lifetime warranty.`,
    path,
  };
}
