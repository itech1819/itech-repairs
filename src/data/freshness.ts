/**
 * Page freshness registry.
 * When a page's content is updated, update its date here.
 * This drives:
 *   - sitemap <lastmod> values
 *   - visible "Last Updated" labels on pages
 *   - the /recent-updates index page
 */

export type PageCategory = 'repair' | 'model' | 'suburb' | 'problem' | 'guide' | 'commercial' | 'core'

export interface FreshnessEntry {
  slug: string
  label: string
  category: PageCategory
  lastUpdated: string // ISO date string YYYY-MM-DD
}

/** Convenience helper – ISO date string from year/month/day */
export function d(year: number, month: number, day: number): string {
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
}

/**
 * Explicit last-updated dates for key pages.
 * Pages not listed here fall back to FALLBACK_LAST_UPDATED in sitemapHelpers.
 * Add an entry here whenever you update a page's content.
 */
export const PAGE_FRESHNESS: FreshnessEntry[] = [
  // ── Core pages ────────────────────────────────────────────────────────────
  { slug: '/', label: 'Home', category: 'core', lastUpdated: d(2026, 3, 9) },
  { slug: '/iphone-repair-melbourne', label: 'iPhone Repair Melbourne', category: 'core', lastUpdated: d(2026, 3, 9) },
  { slug: '/samsung-repair-melbourne', label: 'Samsung Repair Melbourne', category: 'core', lastUpdated: d(2026, 3, 9) },
  { slug: '/ipad-repair-melbourne', label: 'iPad Repair Melbourne', category: 'core', lastUpdated: d(2026, 3, 9) },
  { slug: '/macbook-repair-melbourne', label: 'MacBook Repair Melbourne', category: 'core', lastUpdated: d(2026, 3, 9) },
  { slug: '/google-pixel-repair-melbourne', label: 'Google Pixel Repair Melbourne', category: 'core', lastUpdated: d(2026, 3, 9) },
  { slug: '/contact', label: 'Contact', category: 'core', lastUpdated: d(2026, 3, 9) },
  { slug: '/warranty', label: 'Lifetime Warranty', category: 'core', lastUpdated: d(2026, 3, 9) },
  { slug: '/recent-updates', label: 'Recent Updates', category: 'core', lastUpdated: d(2026, 3, 9) },

  // ── Problem pages ─────────────────────────────────────────────────────────
  { slug: '/iphone-not-turning-on-repair-melbourne', label: 'iPhone Not Turning On', category: 'problem', lastUpdated: d(2026, 3, 9) },
  { slug: '/iphone-stuck-on-apple-logo-repair-melbourne', label: 'iPhone Stuck on Apple Logo', category: 'problem', lastUpdated: d(2026, 3, 9) },
  { slug: '/iphone-green-screen-repair-melbourne', label: 'iPhone Green Screen', category: 'problem', lastUpdated: d(2026, 3, 9) },
  { slug: '/iphone-white-screen-repair-melbourne', label: 'iPhone White Screen', category: 'problem', lastUpdated: d(2026, 3, 9) },
  { slug: '/iphone-black-screen-repair-melbourne', label: 'iPhone Black Screen', category: 'problem', lastUpdated: d(2026, 3, 9) },
  { slug: '/iphone-boot-loop-repair-melbourne', label: 'iPhone Boot Loop', category: 'problem', lastUpdated: d(2026, 3, 9) },
  { slug: '/iphone-not-charging-repair-melbourne', label: 'iPhone Not Charging', category: 'problem', lastUpdated: d(2026, 3, 9) },
  { slug: '/iphone-overheating-repair-melbourne', label: 'iPhone Overheating', category: 'problem', lastUpdated: d(2026, 3, 9) },
  { slug: '/iphone-touch-screen-not-working-repair-melbourne', label: 'iPhone Touch Screen Not Working', category: 'problem', lastUpdated: d(2026, 3, 9) },
  { slug: '/iphone-speaker-not-working-repair-melbourne', label: 'iPhone Speaker Not Working', category: 'problem', lastUpdated: d(2026, 3, 9) },
  { slug: '/iphone-microphone-not-working-repair-melbourne', label: 'iPhone Microphone Not Working', category: 'problem', lastUpdated: d(2026, 3, 9) },
  { slug: '/iphone-wifi-not-working-repair-melbourne', label: 'iPhone Wi-Fi Not Working', category: 'problem', lastUpdated: d(2026, 3, 9) },
  { slug: '/iphone-bluetooth-not-working-repair-melbourne', label: 'iPhone Bluetooth Not Working', category: 'problem', lastUpdated: d(2026, 3, 9) },
  { slug: '/iphone-water-damage-repair-melbourne', label: 'iPhone Water Damage', category: 'problem', lastUpdated: d(2026, 3, 9) },
]

/** Lookup map: slug → FreshnessEntry */
export const FRESHNESS_BY_SLUG = new Map(PAGE_FRESHNESS.map((e) => [e.slug, e]))

/** Returns last-updated ISO date for a given slug, or null if not registered */
export function getLastUpdated(slug: string): string | null {
  return FRESHNESS_BY_SLUG.get(slug)?.lastUpdated ?? null
}

/**
 * Returns entries sorted by lastUpdated descending (most recent first).
 * Optionally filter by category.
 */
export function getRecentUpdates(limit = 50, category?: PageCategory): FreshnessEntry[] {
  const entries = category
    ? PAGE_FRESHNESS.filter((e) => e.category === category)
    : PAGE_FRESHNESS
  return [...entries]
    .sort((a, b) => b.lastUpdated.localeCompare(a.lastUpdated))
    .slice(0, limit)
}

/** Human-readable month/year label, e.g. "March 2026" */
export function formatLastUpdated(isoDate: string): string {
  const [year, month] = isoDate.split('-').map(Number)
  const monthNames = ['', 'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December']
  return `${monthNames[month]} ${year}`
}
