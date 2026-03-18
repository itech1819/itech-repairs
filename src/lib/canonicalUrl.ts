/**
 * Canonical URL Safety Guard — iTech Repairs
 *
 * All canonical URLs must be generated through this function.
 * Enforces: https, www, no trailing slash, absolute URL.
 */

const BASE = 'https://www.itechrepairs.com.au'

/**
 * Build a safe, absolute canonical URL.
 *
 * @param path - The page path (with or without leading slash, with or without trailing slash)
 * @returns Fully qualified canonical URL
 *
 * @example
 * canonicalUrl('/iphone-15-pro-repair-melbourne')
 * // → 'https://www.itechrepairs.com.au/iphone-15-pro-repair-melbourne'
 *
 * canonicalUrl('iphone-15-pro-repair-melbourne')
 * // → 'https://www.itechrepairs.com.au/iphone-15-pro-repair-melbourne'
 *
 * canonicalUrl('/')
 * // → 'https://www.itechrepairs.com.au'
 *
 * canonicalUrl('')
 * // → 'https://www.itechrepairs.com.au'
 */
export function canonicalUrl(path: string): string {
  // Normalise: strip leading/trailing slashes
  const clean = path.replace(/^\/+|\/+$/g, '')

  // Homepage (empty path or just '/')
  if (!clean) return BASE

  return `${BASE}/${clean}`
}

/**
 * Build canonical from a raw Next.js slug param.
 * Use this in all [slug] dynamic routes.
 *
 * @example
 * // In generateMetadata:
 * const { slug } = await params
 * canonical: canonicalFromSlug(slug)
 */
export function canonicalFromSlug(slug: string): string {
  return canonicalUrl(slug)
}

/**
 * Build canonical for a nested route (e.g. suburb-repairs/[slug]).
 *
 * @example
 * canonicalNested('suburb-repairs', slug)
 * // → 'https://www.itechrepairs.com.au/suburb-repairs/braybrook-iphone-screen-repair'
 */
export function canonicalNested(parentPath: string, slug: string): string {
  const cleanParent = parentPath.replace(/^\/+|\/+$/g, '')
  const cleanSlug = slug.replace(/^\/+|\/+$/g, '')
  return `${BASE}/${cleanParent}/${cleanSlug}`
}
