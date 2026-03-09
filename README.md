# iTech Repairs — Next.js SEO Website

Programmatic SEO website for iTech Repairs Melbourne. Generates 3,172+ fully static pages targeting iPhone, MacBook, iPad, Samsung and Google Pixel repair keywords across Melbourne.

## Tech Stack

- Next.js 15.1.0 (App Router)
- TypeScript
- Tailwind CSS
- Fully static (SSG via generateStaticParams)
- Vercel deployment

## Page Count (Phase 1)

| Type | Count |
|---|---|
| Homepage | 1 |
| Device category pages | 5 |
| Model hub pages | 110 |
| Repair service pages | ~2,997 |
| Location pages | 50 |
| Utility pages | 4 |
| **Total** | **~3,167** |

## Install & Run

```bash
npm install
npm run dev        # development
npm run build      # production build
npm run start      # serve production
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```bash
NEXT_PUBLIC_SITE_URL=https://itechrepairs.com.au
NEXT_PUBLIC_GSC_VERIFICATION=your-google-search-console-token
```

## Deploy to Vercel

### Option 1 — Vercel Dashboard (Recommended)

1. Push code to GitHub
2. Go to vercel.com → New Project
3. Import your GitHub repository
4. Vercel auto-detects Next.js — no config needed
5. Add environment variables in Vercel dashboard
6. Click Deploy

### Option 2 — Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

## URL Structure

### Category Pages
```
/iphone-repair-melbourne
/macbook-repair-melbourne
/ipad-repair-melbourne
/samsung-repair-melbourne
/google-pixel-repair-melbourne
```

### Model Hub Pages
```
/iphone-16-pro-max-repair-melbourne
/samsung-s24-ultra-repair-melbourne
/macbook-air-m2-repair-melbourne
/pixel-9-pro-repair-melbourne
```

### Repair Service Pages
```
/iphone-16-pro-max-screen-repair-melbourne
/samsung-s24-ultra-battery-replacement-melbourne
/macbook-air-m2-keyboard-replacement-melbourne
/pixel-9-pro-screen-repair-melbourne
```

### Location Pages
```
/iphone-repair-braybrook
/samsung-repair-footscray
/macbook-repair-sunshine
/ipad-repair-yarraville
```

## Adding New Models (Phase 2+)

1. Add model to `data/models.ts`
2. Assign repair slugs to `repairSlugs` array
3. Rebuild — pages auto-generate via `generateStaticParams()`

## Adding New Repairs

1. Add repair to `data/repairs.ts`
2. Add repair slug to relevant model `repairSlugs` arrays
3. Rebuild

## Adding New Suburbs (Phase 2)

1. Add suburb to `data/suburbs.ts`
2. Rebuild — location pages auto-generate

## Switching to ISR (Phase 3, 5000+ pages)

In `app/[slug]/page.tsx`, add:
```ts
export const revalidate = 86400; // regenerate every 24 hours
```
And remove:
```ts
export const dynamic = 'force-static';
```

## SEO Routes to Verify After Deploy

- https://itechrepairs.com.au/
- https://itechrepairs.com.au/sitemap.xml
- https://itechrepairs.com.au/robots.txt
- https://itechrepairs.com.au/iphone-repair-melbourne
- https://itechrepairs.com.au/iphone-16-pro-max-repair-melbourne
- https://itechrepairs.com.au/iphone-16-pro-max-screen-repair-melbourne
- https://itechrepairs.com.au/iphone-repair-braybrook
