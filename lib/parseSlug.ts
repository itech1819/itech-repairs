import { models } from '@/data/models';
import { repairs } from '@/data/repairs';
import { suburbs, locationDeviceKeys } from '@/data/suburbs';
import type { ParsedSlug, BrandSlug } from '@/types';

// All model slugs sorted longest-first for greedy matching
const sortedModelSlugs = [...models.map(m => m.slug)].sort((a, b) => b.length - a.length);
const repairSlugs = new Set(repairs.map(r => r.slug));
const suburbSlugs = new Set(suburbs.map(s => s.slug));

export function parseSlug(slug: string): ParsedSlug | null {
  // ── PATTERN A: Category pages (handled by static files, not [slug]) ──
  // These should never reach [slug]/page.tsx

  // ── PATTERN D: Location pages — /{device}-repair-{suburb} ──
  // e.g. iphone-repair-braybrook
  for (const deviceKey of locationDeviceKeys) {
    const prefix = `${deviceKey}-repair-`;
    if (slug.startsWith(prefix)) {
      const suburbSlug = slug.slice(prefix.length);
      if (suburbSlugs.has(suburbSlug)) {
        return { type: 'location', deviceKey, suburbSlug };
      }
    }
  }

  // ── PATTERN B: Model hub pages — /{model}-repair-melbourne ──
  // e.g. iphone-16-pro-max-repair-melbourne
  if (slug.endsWith('-repair-melbourne')) {
    const withoutSuffix = slug.slice(0, -'-repair-melbourne'.length);
    const matchedModel = sortedModelSlugs.find(ms => withoutSuffix === ms);
    if (matchedModel) {
      const model = models.find(m => m.slug === matchedModel)!;
      return { type: 'model', brand: model.brand, modelSlug: matchedModel };
    }
  }

  // ── PATTERN C: Repair service pages — /{model}-{repair}-melbourne ──
  // e.g. iphone-16-pro-max-screen-repair-melbourne
  if (slug.endsWith('-melbourne')) {
    const withoutMelbourne = slug.slice(0, -'-melbourne'.length);
    // Try to find a repair slug suffix
    for (const repairSlug of repairSlugs) {
      const repairSuffix = `-${repairSlug}`;
      if (withoutMelbourne.endsWith(repairSuffix)) {
        const modelPart = withoutMelbourne.slice(0, -repairSuffix.length);
        const matchedModel = sortedModelSlugs.find(ms => ms === modelPart);
        if (matchedModel) {
          const model = models.find(m => m.slug === matchedModel)!;
          return { type: 'repair', brand: model.brand, modelSlug: matchedModel, repairSlug };
        }
      }
    }
  }

  return null;
}

export function buildModelPageSlug(modelSlug: string): string {
  return `${modelSlug}-repair-melbourne`;
}

export function buildRepairPageSlug(modelSlug: string, repairSlug: string): string {
  return `${modelSlug}-${repairSlug}-melbourne`;
}

export function buildLocationPageSlug(deviceKey: string, suburbSlug: string): string {
  return `${deviceKey}-repair-${suburbSlug}`;
}
