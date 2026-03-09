import { models } from '@/data/models';
import { repairs } from '@/data/repairs';
import type { BrandSlug } from '@/types';

export function getRelatedRepairsForModel(modelSlug: string, currentRepairSlug?: string, limit = 5) {
  const model = models.find(m => m.slug === modelSlug);
  if (!model) return [];
  return model.repairSlugs
    .filter(s => s !== currentRepairSlug)
    .slice(0, limit)
    .map(s => repairs.find(r => r.slug === s))
    .filter(Boolean) as typeof repairs;
}

export function getSiblingModels(modelSlug: string, limit = 4) {
  const model = models.find(m => m.slug === modelSlug);
  if (!model) return [];
  return models
    .filter(m => m.brand === model.brand && m.slug !== modelSlug)
    .sort((a, b) => b.releaseYear - a.releaseYear)
    .slice(0, limit);
}

export function getCategorySlug(brand: BrandSlug): string {
  const map: Record<BrandSlug, string> = {
    iphone: 'iphone-repair-melbourne',
    samsung: 'samsung-repair-melbourne',
    ipad: 'ipad-repair-melbourne',
    macbook: 'macbook-repair-melbourne',
    pixel: 'google-pixel-repair-melbourne',
  };
  return map[brand];
}

export function getBrandDisplayName(brand: BrandSlug): string {
  const map: Record<BrandSlug, string> = {
    iphone: 'iPhone',
    samsung: 'Samsung',
    ipad: 'iPad',
    macbook: 'MacBook',
    pixel: 'Google Pixel',
  };
  return map[brand];
}
