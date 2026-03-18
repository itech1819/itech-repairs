# Canonical Audit Checklist — iTech Repairs

Run this checklist before every deployment that adds new page types or metadata changes.

---

## Quick Reference: Canonical Rules

| Rule | Correct |
|---|---|
| Protocol | `https://` always |
| Domain | `www.itechrepairs.com.au` always |
| Trailing slash | Never (except homepage which has none) |
| Dynamic pages | Must use actual `slug` param, NOT computed helper values |
| Static pages | Hardcode the exact folder name as the path |
| Child pages | Never canonicalise to a parent page |
| Homepage | `https://www.itechrepairs.com.au` |

---

## Checklist: Adding a New Page Type

### 1. Static Page (new folder under `src/app/`)

- [ ] Page declares `export const metadata: Metadata`
- [ ] `alternates.canonical` is set explicitly
- [ ] Canonical = `https://www.itechrepairs.com.au/exact-folder-name`
- [ ] No trailing slash
- [ ] Canonical is NOT a variable — hardcode the path
- [ ] Canonical matches exactly what appears in the browser URL bar

**Correct pattern:**
```typescript
export const metadata: Metadata = {
  title: '...',
  description: '...',
  alternates: { canonical: 'https://www.itechrepairs.com.au/my-new-page' },
}
```

---

### 2. Data-Driven Static Page (uses `.find()` from a data file)

These pages look up their content from a data array (e.g. COMMERCIAL_PAGES, IPHONE_PROBLEMS).

- [ ] Confirm `data.slug` exactly matches the folder name
- [ ] Run: compare folder name vs slug in data file manually
- [ ] Canonical is `https://www.itechrepairs.com.au/${data.slug}`
- [ ] If slug could ever be wrong/undefined, hardcode the canonical instead

**Verify slug match:**
```bash
# Folder name:
ls src/app/my-new-page/

# Must match slug in data file:
grep "slug.*my-new-page" src/data/myData.ts
```

**Safe fallback if unsure:**
```typescript
// Instead of dynamic:
alternates: { canonical: `https://www.itechrepairs.com.au/${page.slug}` }

// Use hardcoded:
alternates: { canonical: 'https://www.itechrepairs.com.au/my-new-page' }
```

---

### 3. Dynamic Route with `generateMetadata` (e.g. `[slug]`, `[suburb-service]`)

- [ ] `slug` (or equivalent param) is extracted from `await params`
- [ ] Canonical uses the raw param directly: `https://www.itechrepairs.com.au/${slug}`
- [ ] Do NOT compute canonical from helper functions like `buildRepairPageSlug()` — use the param
- [ ] Every `case` in a switch statement has its own canonical
- [ ] No `case` falls through to a parent canonical
- [ ] `notFound()` cases return early without canonical (correct)

**Correct pattern for `[slug]/page.tsx`:**
```typescript
export async function generateMetadata({ params }) {
  const { slug } = await params
  // ...
  return {
    title: '...',
    alternates: { canonical: `https://www.itechrepairs.com.au/${slug}` },
  }
}
```

**Wrong — do not do this:**
```typescript
// BAD: computed from parent or helper
alternates: { canonical: `https://www.itechrepairs.com.au/${suburb.slug}-${device}-repair` }

// BAD: relative path
alternates: { canonical: `/my-page` }

// BAD: missing altogether
return { title: '...' } // no canonical
```

---

### 4. Nested Dynamic Route (e.g. `suburb-repairs/[suburb-service]`)

- [ ] Canonical includes the full path including parent segment
- [ ] Format: `https://www.itechrepairs.com.au/suburb-repairs/${slug}`

---

### 5. Layout Files (`layout.tsx`)

- [ ] Root `src/app/layout.tsx` does NOT declare `alternates.canonical`
- [ ] Sub-route layouts do NOT declare `alternates.canonical`
- [ ] `metadataBase` is set once in root layout only: `new URL('https://www.itechrepairs.com.au')`

**Why:** If a layout declares `alternates.canonical`, ALL child pages inherit it — causing every page to canonicalise to the same URL (usually the homepage or section root).

---

## Checklist: Pre-Deployment Verification

Run these commands before every deploy:

### Check 1: Find relative canonicals (must return 0 results)
```bash
grep -rn "canonical.*': '/" src/app --include="page.tsx"
grep -rn 'canonical.*": "/' src/app --include="page.tsx"
```

### Check 2: Find canonical pointing to homepage (should only be homepage itself)
```bash
grep -rn "canonical.*itechrepairs\.com\.au'" src/app --include="page.tsx" \
  | grep -v "itechrepairs\.com\.au/[a-z]"
```
Expected result: only `src/app/page.tsx`

### Check 3: Find pages missing canonical entirely
```bash
# Count pages WITH canonical
grep -rl "canonical" src/app --include="page.tsx" | wc -l

# Count total page files
find src/app -name "page.tsx" | grep -v "route.ts" | wc -l

# These should match (minus redirect-only pages)
```

### Check 4: Find layout files that accidentally set canonical
```bash
grep -rn "canonical" src/app --include="layout.tsx"
```
Expected result: 0 results

### Check 5: Verify slug data matches folder names (run for any new data-driven pages)
```bash
# Example for COMMERCIAL_PAGES
node -e "
const { COMMERCIAL_PAGES } = require('./src/data/commercial.ts')
COMMERCIAL_PAGES.forEach(p => console.log(p.slug))
" 2>/dev/null || npx ts-node -e "
import { COMMERCIAL_PAGES } from './src/data/commercial'
COMMERCIAL_PAGES.forEach(p => console.log(p.slug))
"
```

---

## Known Page Types and Their Canonical Sources

| Page type | File | Canonical source | Pattern |
|---|---|---|---|
| Homepage | `app/page.tsx` | Hardcoded | `https://www.itechrepairs.com.au` |
| Model hub | `app/[slug]/page.tsx` | `slug` param | `https://www.itechrepairs.com.au/${slug}` |
| Repair page | `app/[slug]/page.tsx` | `slug` param | `https://www.itechrepairs.com.au/${slug}` |
| Location page | `app/[slug]/page.tsx` | `slug` param | `https://www.itechrepairs.com.au/${slug}` |
| Suburb-device | `app/[slug]/page.tsx` | `slug` param | `https://www.itechrepairs.com.au/${slug}` |
| Suburb-repair | `app/[slug]/page.tsx` | `slug` param | `https://www.itechrepairs.com.au/${slug}` |
| Suburb-service | `app/suburb-repairs/[suburb-service]/page.tsx` | `page.slug` from data | `https://www.itechrepairs.com.au/suburb-repairs/${page.slug}` |
| Commercial pages | `app/{slug}/page.tsx` | `page.slug` from COMMERCIAL_PAGES | `https://www.itechrepairs.com.au/${page.slug}` |
| Problem pages | `app/{slug}/page.tsx` | `problem.slug` from IPHONE_PROBLEMS | `https://www.itechrepairs.com.au/${problem.slug}` |
| Sell pages | `app/{slug}/page.tsx` | Hardcoded | `https://www.itechrepairs.com.au/{exact-slug}` |
| Repair guides index | `app/repair-guides/page.tsx` | Hardcoded | `https://www.itechrepairs.com.au/repair-guides` |
| Repair guide article | `app/repair-guides/[guide-slug]/page.tsx` | `slug` param | `https://www.itechrepairs.com.au/repair-guides/${slug}` |
| Store pages | `app/braybrook-phone-repair/page.tsx` etc. | Hardcoded | `https://www.itechrepairs.com.au/{exact-slug}` |
| Static pages | `app/{name}/page.tsx` | Hardcoded | `https://www.itechrepairs.com.au/{name}` |

---

## Common Mistakes to Avoid

| Mistake | Example | Fix |
|---|---|---|
| Suburb-repair points to suburb-device parent | `/braybrook-iphone-screen-repair` → `/braybrook-iphone-repair` | Use `${slug}` param directly |
| Relative canonical | `canonical: '/my-page'` | Always use full absolute URL |
| Computed canonical diverges from actual slug | `buildRepairPageSlug()` output ≠ `slug` param | Use `slug` param, not helper |
| Missing canonical on new page | No `alternates` in metadata | Add explicit canonical |
| Layout sets canonical | `layout.tsx` has `alternates.canonical` | Remove from all layouts |
| Data slug ≠ folder name | Folder: `cheap-iphone-repair` / slug: `cheap-iphone-repairs` | Fix data or folder name |
| Trailing slash | `https://www.itechrepairs.com.au/my-page/` | Remove trailing slash |
| Non-www | `https://itechrepairs.com.au/my-page` | Always use www |

---

## After Any Canonical Fix

1. Deploy the fix
2. Go to Google Search Console → URL Inspection → test 5 affected pages
3. Confirm canonical shown = exact page URL
4. Request recrawl for the most important affected pages
5. Monitor Coverage report over the next 2–4 weeks for improvement in "Valid" page count
