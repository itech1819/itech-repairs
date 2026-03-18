import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

import { parseSlug } from '@/lib/slug'
import { getAllDynamicStaticParams } from '@/lib/staticParams'
import {
  generateRepairPageMeta,
  generateModelHubMeta,
  generateLocationPageMeta,
} from '@/lib/seo'
import { canonicalFromSlug } from '@/lib/canonicalUrl'
import {
  getBrandByCategory,
  getRepairBySlug,
  MODELS_BY_CATEGORY,
  business,
} from '@/data'
import { DEVICE_SLUGS } from '@/lib/slug'
import { getRepairPageInternalLinks } from '@/lib/internalLinks'

import ModelHubPage from './ModelHubPage'
import RepairPage from './RepairPage'
import LocationPage from './LocationPage'
import SuburbRepairPage from './SuburbRepairPage'

// ---------------------------------------------------------------------------
// ISR — revalidate once per day
// ---------------------------------------------------------------------------

export const revalidate = 86400

// ---------------------------------------------------------------------------
// generateStaticParams — all 3,163 slugs
// ---------------------------------------------------------------------------

export async function generateStaticParams() {
  return getAllDynamicStaticParams()
}

// ---------------------------------------------------------------------------
// generateMetadata
// ---------------------------------------------------------------------------

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const parsed = parseSlug(slug)

  if (parsed.type === 'not-found') {
    return { title: 'Page Not Found | iTech Repairs' }
  }

  const deviceDisplayNames: Record<string, string> = {
    iphone: 'iPhone',
    samsung: 'Samsung',
    pixel: 'Google Pixel',
    ipad: 'iPad',
    macbook: 'MacBook',
  }

  let meta: ReturnType<typeof generateRepairPageMeta>

  switch (parsed.type) {
    case 'model-hub':
      meta = generateModelHubMeta(parsed.model)
      break
    case 'repair':
      meta = generateRepairPageMeta(parsed.model, parsed.repair)
      break
    case 'location': {
      // Derive device slug from slug itself: e.g. "iphone-repair-braybrook" → "iphone"
      const deviceSlug = DEVICE_SLUGS.find((d) => slug.startsWith(`${d}-repair-`)) ?? 'iphone'
      meta = generateLocationPageMeta(deviceSlug, parsed.suburb)
      break
    }
    case 'suburb-device': {
      const s = parsed.suburb
      const deviceName = deviceDisplayNames[parsed.deviceCategory] ?? parsed.deviceCategory
      return {
        title: `${deviceName} Repair ${s.displayName} – Cheapest Phone Repairs | 15 Minute Repairs | Lifetime Warranty`,
        description: `Looking for ${deviceName} repair near ${s.displayName}? iTech Repairs in Braybrook & Footscray — walk in, no appointment needed. Serving Braybrook, Footscray, Sunshine and surrounding Melbourne suburbs.`,
        alternates: { canonical: canonicalFromSlug(slug) },
      }
    }
    case 'suburb-repair': {
      const s = parsed.suburb
      const r = parsed.repair
      const deviceName = deviceDisplayNames[parsed.deviceCategory] ?? parsed.deviceCategory
      return {
        title: `${deviceName} ${r.displayName} near ${s.displayName} | iTech Repairs`,
        description: `${deviceName} ${r.displayName.toLowerCase()} near ${s.displayName}, Melbourne. Fast, affordable, lifetime warranty. Walk in to Braybrook or Spotswood — no appointment needed.`,
        alternates: { canonical: canonicalFromSlug(slug) },
      }
    }
    default:
      return { title: 'Page Not Found | iTech Repairs' }
  }

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: canonicalFromSlug(slug),
    },
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
      url: canonicalFromSlug(slug),
      images: [{ url: meta.ogImage }],
      siteName: business.name,
      locale: 'en_AU',
      type: 'website',
    },
    robots: meta.robots,
  }
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const parsed = parseSlug(slug)

  switch (parsed.type) {
    case 'model-hub': {
      const model = parsed.model
      const brand = getBrandByCategory(model.brand)
      if (!brand) notFound()

      // Collect all RepairService objects for this model
      const repairs = model.supportedRepairSlugs
        .map((s) => getRepairBySlug(s))
        .filter(Boolean) as NonNullable<ReturnType<typeof getRepairBySlug>>[]

      return <ModelHubPage model={model} repairs={repairs} brand={brand!} />
    }

    case 'repair': {
      const model = parsed.model
      const repair = parsed.repair
      const brand = getBrandByCategory(model.brand)
      if (!brand) notFound()

      const internalLinks = getRepairPageInternalLinks(model, repair.slug)

      return (
        <RepairPage
          model={model}
          repair={repair}
          brand={brand!}
          internalLinks={internalLinks}
        />
      )
    }

    case 'location': {
      const suburb = parsed.suburb
      const deviceSlug = DEVICE_SLUGS.find((d) => slug.startsWith(`${d}-repair-`)) ?? 'iphone'
      const category = parsed.deviceCategory
      const brand = getBrandByCategory(category)
      if (!brand) notFound()

      // Display name for the device type
      const deviceDisplayNames: Record<string, string> = {
        iphone: 'iPhone',
        samsung: 'Samsung',
        pixel: 'Google Pixel',
        ipad: 'iPad',
        macbook: 'MacBook',
      }
      const deviceDisplayName = deviceDisplayNames[deviceSlug] ?? deviceSlug

      // Top models for this category, sorted by priority
      const topModels = [...(MODELS_BY_CATEGORY[category] ?? [])]
        .sort((a, b) => a.priority - b.priority)
        .slice(0, 8)

      return (
        <LocationPage
          deviceSlug={deviceSlug}
          deviceDisplayName={deviceDisplayName}
          suburb={suburb}
          brand={brand}
          topModels={topModels}
        />
      )
    }

    case 'suburb-device': {
      const suburb = parsed.suburb
      const category = parsed.deviceCategory
      const brand = getBrandByCategory(category)
      if (!brand) notFound()
      const deviceDisplayNamesMap: Record<string, string> = {
        iphone: 'iPhone', samsung: 'Samsung', pixel: 'Google Pixel', ipad: 'iPad', macbook: 'MacBook',
      }
      return (
        <SuburbRepairPage
          suburb={suburb}
          deviceCategory={category}
          deviceDisplayName={deviceDisplayNamesMap[category] ?? category}
          brand={brand!}
        />
      )
    }

    case 'suburb-repair': {
      const suburb = parsed.suburb
      const category = parsed.deviceCategory
      const repair = parsed.repair
      const brand = getBrandByCategory(category)
      if (!brand) notFound()
      const deviceDisplayNamesMap: Record<string, string> = {
        iphone: 'iPhone', samsung: 'Samsung', pixel: 'Google Pixel', ipad: 'iPad', macbook: 'MacBook',
      }
      return (
        <SuburbRepairPage
          suburb={suburb}
          deviceCategory={category}
          deviceDisplayName={deviceDisplayNamesMap[category] ?? category}
          repair={repair}
          brand={brand!}
        />
      )
    }

    default:
      notFound()
  }
}
