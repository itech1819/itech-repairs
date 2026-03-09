import { models } from '@/data/models';
import { suburbs, locationDeviceKeys } from '@/data/suburbs';
import { buildModelPageSlug, buildRepairPageSlug, buildLocationPageSlug } from '@/lib/parseSlug';

export function getAllSlugs(): { slug: string }[] {
  const slugs: Set<string> = new Set();

  for (const model of models) {
    // Pattern B: model hub pages
    slugs.add(buildModelPageSlug(model.slug));

    // Pattern C: repair service pages
    for (const repairSlug of model.repairSlugs) {
      slugs.add(buildRepairPageSlug(model.slug, repairSlug));
    }
  }

  // Pattern D: location pages
  for (const deviceKey of locationDeviceKeys) {
    for (const suburb of suburbs) {
      slugs.add(buildLocationPageSlug(deviceKey, suburb.slug));
    }
  }

  return Array.from(slugs).map(slug => ({ slug }));
}
