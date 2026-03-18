import { getAllRepairPageSlugs, getAllModelHubSlugs, getAllLocationSlugs } from '@/lib/slug'
import { IPHONE_PROBLEMS } from '@/data/problems'
import { COMMERCIAL_PAGES } from '@/data/commercial'
import { getLastUpdated } from '@/data/freshness'
import { repairGuides } from '@/data/repairGuides'
import { SUBURB_SERVICE_PAGES } from '@/data/suburbServicePages'

export const BASE_URL = 'https://www.itechrepairs.com.au'
const now = new Date().toISOString()

/** Fallback build-time date used when no explicit freshness entry exists */
export const FALLBACK_LAST_UPDATED = now

type SitemapEntry = {
  url: string
  lastmod: string
  changefreq: string
  priority: number
}

function entry(path: string, priority: number, changefreq = 'monthly'): SitemapEntry {
  const normalised = path.startsWith('/') ? path : '/' + path
  const explicit = getLastUpdated(normalised)
  const lastmod = explicit ? `${explicit}T00:00:00.000Z` : now
  return { url: `${BASE_URL}${normalised}`, lastmod, changefreq, priority }
}

export function getCoreEntries(): SitemapEntry[] {
  return [
    entry('/', 1.0, 'weekly'),
    entry('/iphone-repair-melbourne', 0.9, 'weekly'),
    entry('/samsung-repair-melbourne', 0.9, 'weekly'),
    entry('/ipad-repair-melbourne', 0.9, 'weekly'),
    entry('/macbook-repair-melbourne', 0.9, 'weekly'),
    entry('/google-pixel-repair-melbourne', 0.9, 'weekly'),
    entry('/about', 0.6),
    entry('/contact', 0.7),
    entry('/warranty', 0.6),
    entry('/privacy', 0.3, 'yearly'),
    entry('/terms', 0.3, 'yearly'),
    entry('/braybrook-phone-repair', 0.8),
    entry('/spotswood-phone-repair', 0.8),
    entry('/iphone-problems', 0.8, 'weekly'),
    entry('/repair-index', 0.7),
    entry('/iphone-repair-index', 0.7),
    entry('/samsung-repair-index', 0.7),
    entry('/ipad-repair-index', 0.7),
    entry('/macbook-repair-index', 0.7),
    entry('/google-pixel-repair-index', 0.7),
    entry('/problem-repair-index', 0.7),
    entry('/commercial-repair-index', 0.7),
    entry('/suburb-repair-index', 0.7),
    entry('/recent-updates', 0.6, 'weekly'),
    // Core iPhone service hub pages
    entry('/iphone-screen-repair', 0.9, 'weekly'),
    entry('/iphone-screen-replacement', 0.9, 'weekly'),
    entry('/iphone-battery-replacement', 0.9, 'weekly'),
    entry('/iphone-charging-port-repair', 0.9, 'weekly'),
    entry('/iphone-back-glass-repair', 0.8, 'weekly'),
    entry('/iphone-back-cover-repair', 0.8, 'weekly'),
    entry('/iphone-rear-camera-repair', 0.8, 'weekly'),
    entry('/iphone-front-camera-repair', 0.8, 'weekly'),
    entry('/iphone-camera-lens-repair', 0.8, 'weekly'),
    entry('/iphone-speaker-repair', 0.8, 'weekly'),
    entry('/iphone-earpiece-repair', 0.8, 'weekly'),
    entry('/iphone-microphone-repair', 0.8, 'weekly'),
    entry('/iphone-volume-button-repair', 0.7, 'weekly'),
    entry('/iphone-vibration-repair', 0.7, 'weekly'),
    entry('/iphone-proximity-sensor-repair', 0.7, 'weekly'),
    entry('/iphone-face-id-repair', 0.8, 'weekly'),
    entry('/iphone-touchscreen-repair', 0.8, 'weekly'),
    entry('/iphone-ghost-touch-repair', 0.8, 'weekly'),
    entry('/iphone-water-damage-repair', 0.8, 'weekly'),
    entry('/iphone-data-recovery', 0.8, 'weekly'),
    entry('/iphone-motherboard-repair', 0.7, 'weekly'),
    entry('/iphone-diagnostic-service', 0.7, 'weekly'),
    // iPhone & Samsung cost/price guide pages
    entry('/iphone-repair-cost', 0.80, 'weekly'),
    entry('/iphone-screen-repair-cost', 0.78, 'weekly'),
    entry('/iphone-battery-replacement-cost', 0.78, 'weekly'),
    entry('/samsung-screen-repair-cost', 0.76, 'weekly'),
    // Model-specific repair pages (Phase 4)
    entry('/iphone-13-pro-max-screen-repair', 0.82, 'weekly'),
    entry('/samsung-s23-ultra-screen-repair', 0.80, 'weekly'),
    entry('/iphone-11-battery-replacement', 0.78, 'weekly'),
    entry('/iphone-12-battery-replacement', 0.78, 'weekly'),
    entry('/iphone-13-pro-battery-replacement', 0.78, 'weekly'),
    entry('/iphone-screen-repair-melbourne', 0.82, 'weekly'),
    // Suburb landing pages
    entry('/phone-repair-near-me', 0.80, 'weekly'),
    entry('/phone-repair-braybrook', 0.76),
    entry('/phone-repair-spotswood', 0.76),
    entry('/phone-repair-footscray', 0.76),
    entry('/phone-repair-yarraville', 0.76),
  ]
}

export function getBrandRepairEntries(): SitemapEntry[] {
  return [
    entry('/apple-watch-repair-melbourne', 0.85, 'weekly'),
    // Apple Watch service pages
    entry('/apple-watch-screen-repair', 0.82),
    entry('/apple-watch-battery-replacement', 0.82),
    entry('/apple-watch-charging-port-repair', 0.80),
    entry('/apple-watch-water-damage-repair', 0.80),
    entry('/apple-watch-free-device-inspection', 0.75),
    // Apple Watch model pages
    entry('/apple-watch-series-5-repair', 0.72),
    entry('/apple-watch-series-6-repair', 0.72),
    entry('/apple-watch-series-7-repair', 0.74),
    entry('/apple-watch-series-8-repair', 0.74),
    entry('/apple-watch-series-9-repair', 0.76),
    entry('/apple-watch-ultra-repair', 0.76),
    entry('/apple-watch-ultra-2-repair', 0.76),
    entry('/apple-watch-se-repair', 0.72),
    entry('/apple-watch-se-2-repair', 0.72),
    // Apple Watch model+service pages (9 models × 5 services)
    ...['series-5','series-6','series-7','series-8','series-9','ultra','ultra-2','se','se-2'].flatMap(m =>
      ['screen-repair','battery-replacement','charging-port-repair','water-damage-repair','free-device-inspection'].map(s =>
        entry(`/apple-watch-${m}-${s}`, 0.68)
      )
    ),
    entry('/oppo-phone-repair-melbourne', 0.8, 'monthly'),
    entry('/xiaomi-phone-repair-melbourne', 0.8, 'monthly'),
    entry('/huawei-phone-repair-melbourne', 0.8, 'monthly'),
    entry('/motorola-phone-repair-melbourne', 0.8, 'monthly'),
    entry('/sony-phone-repair-melbourne', 0.8, 'monthly'),
    entry('/oneplus-phone-repair-melbourne', 0.8, 'monthly'),
    entry('/nokia-phone-repair-melbourne', 0.75, 'monthly'),
    entry('/lg-phone-repair-melbourne', 0.75, 'monthly'),
    entry('/asus-phone-repair-melbourne', 0.75, 'monthly'),
    entry('/htc-phone-repair-melbourne', 0.7, 'monthly'),
    entry('/nothing-phone-repair-melbourne', 0.8, 'monthly'),
    entry('/realme-phone-repair-melbourne', 0.75, 'monthly'),
    entry('/surface-repair-melbourne', 0.8, 'monthly'),
    // OnePlus model pages
    entry('/oneplus-13-repair', 0.70), entry('/oneplus-12-repair', 0.70), entry('/oneplus-11-repair', 0.68),
    entry('/oneplus-10-pro-repair', 0.68), entry('/oneplus-nord-4-repair', 0.68), entry('/oneplus-nord-ce-4-repair', 0.66),
    entry('/oneplus-nord-3-repair', 0.66), entry('/oneplus-nord-ce-3-repair', 0.64),
    // Nothing model pages
    entry('/nothing-phone-3a-repair', 0.70), entry('/nothing-phone-3a-pro-repair', 0.70),
    entry('/nothing-phone-2a-repair', 0.68), entry('/nothing-phone-2a-plus-repair', 0.68),
    entry('/nothing-phone-2-repair', 0.66), entry('/nothing-phone-1-repair', 0.64),
    // Sony model pages
    entry('/sony-xperia-1-vi-repair', 0.70), entry('/sony-xperia-5-vi-repair', 0.68),
    entry('/sony-xperia-10-vi-repair', 0.68), entry('/sony-xperia-1-v-repair', 0.66),
    entry('/sony-xperia-5-v-repair', 0.66), entry('/sony-xperia-10-v-repair', 0.64),
    entry('/sony-xperia-1-iv-repair', 0.64), entry('/sony-xperia-pro-i-repair', 0.64),
    // Oppo model pages
    entry('/oppo-find-x8-repair', 0.70), entry('/oppo-find-x7-repair', 0.68), entry('/oppo-find-x6-pro-repair', 0.66),
    entry('/oppo-reno-12-repair', 0.68), entry('/oppo-reno-11-repair', 0.66), entry('/oppo-reno-10-repair', 0.64),
    entry('/oppo-reno-8-repair', 0.62), entry('/oppo-a78-repair', 0.62), entry('/oppo-a58-repair', 0.60),
    entry('/oppo-a38-repair', 0.60), entry('/oppo-f25-pro-repair', 0.62), entry('/oppo-f23-repair', 0.60),
    // Xiaomi model pages
    entry('/xiaomi-14-ultra-repair', 0.70), entry('/xiaomi-14-repair', 0.68), entry('/xiaomi-13-pro-repair', 0.66),
    entry('/xiaomi-13-repair', 0.64), entry('/redmi-note-13-pro-repair', 0.66), entry('/redmi-note-13-repair', 0.64),
    entry('/redmi-13c-repair', 0.60), entry('/poco-x6-pro-repair', 0.64), entry('/poco-x6-repair', 0.62),
    entry('/poco-m6-pro-repair', 0.60),
    // Huawei model pages
    entry('/huawei-p60-pro-repair', 0.68), entry('/huawei-p50-pro-repair', 0.66), entry('/huawei-p40-pro-repair', 0.64),
    entry('/huawei-mate-50-pro-repair', 0.68), entry('/huawei-mate-40-pro-repair', 0.66),
    entry('/huawei-nova-12-repair', 0.62), entry('/huawei-nova-11-repair', 0.60),
    entry('/huawei-y90-repair', 0.58), entry('/huawei-y70-repair', 0.58), entry('/huawei-y60-repair', 0.56),
    // Motorola model pages
    entry('/motorola-edge-50-pro-repair', 0.68), entry('/motorola-edge-50-repair', 0.66),
    entry('/motorola-edge-40-pro-repair', 0.64), entry('/moto-g85-repair', 0.62),
    entry('/moto-g84-repair', 0.60), entry('/moto-g54-repair', 0.60), entry('/moto-g34-repair', 0.58),
    entry('/motorola-razr-50-repair', 0.68), entry('/motorola-razr-40-ultra-repair', 0.66),
    entry('/moto-g-power-repair', 0.60),
    // Nokia model pages
    entry('/nokia-g42-repair', 0.62), entry('/nokia-g22-repair', 0.60), entry('/nokia-g21-repair', 0.58),
    entry('/nokia-c32-repair', 0.60), entry('/nokia-c22-repair', 0.58),
    entry('/nokia-xr21-repair', 0.62), entry('/nokia-xr20-repair', 0.60), entry('/nokia-g60-repair', 0.60),
    // LG model pages
    entry('/lg-g8-thinq-repair', 0.64), entry('/lg-v60-thinq-repair', 0.64),
    entry('/lg-velvet-repair', 0.62), entry('/lg-wing-repair', 0.62),
    entry('/lg-g7-thinq-repair', 0.60), entry('/lg-v50-thinq-repair', 0.60),
    entry('/lg-k52-repair', 0.58), entry('/lg-k42-repair', 0.56),
    // Asus model pages
    entry('/asus-rog-phone-8-pro-repair', 0.68), entry('/asus-rog-phone-8-repair', 0.66),
    entry('/asus-rog-phone-7-pro-repair', 0.64), entry('/asus-zenfone-11-ultra-repair', 0.66),
    entry('/asus-zenfone-10-repair', 0.64), entry('/asus-zenfone-9-repair', 0.62),
    entry('/asus-rog-phone-6-pro-repair', 0.62),
    // Realme model pages
    entry('/realme-13-pro-plus-repair', 0.68), entry('/realme-13-pro-repair', 0.66),
    entry('/realme-12-plus-repair', 0.64), entry('/realme-12-repair', 0.62),
    entry('/realme-narzo-70-pro-repair', 0.62), entry('/realme-narzo-70-repair', 0.60),
    entry('/realme-c67-repair', 0.58), entry('/realme-c55-repair', 0.56),
    // Expansion model pages (114 new models)
    entry('/oneplus-13r-repair', 0.65), entry('/oneplus-12r-repair', 0.65), entry('/oneplus-11r-repair', 0.65),
    entry('/oneplus-10t-repair', 0.65), entry('/oneplus-9-pro-repair', 0.65), entry('/oneplus-9-repair', 0.65),
    entry('/oneplus-8t-repair', 0.65), entry('/oneplus-8-pro-repair', 0.65), entry('/oneplus-8-repair', 0.65),
    entry('/oneplus-7t-pro-repair', 0.65), entry('/oneplus-7t-repair', 0.65),
    entry('/oneplus-nord-2t-repair', 0.65), entry('/oneplus-nord-ce-2-repair', 0.65), entry('/oneplus-nord-ce-2-lite-repair', 0.65),
    entry('/sony-xperia-5-iv-repair', 0.65), entry('/sony-xperia-5-iii-repair', 0.65),
    entry('/sony-xperia-1-iii-repair', 0.65), entry('/sony-xperia-1-ii-repair', 0.65),
    entry('/sony-xperia-10-iv-repair', 0.65), entry('/sony-xperia-10-iii-repair', 0.65), entry('/sony-xperia-10-ii-repair', 0.65),
    entry('/oppo-find-x6-repair', 0.65), entry('/oppo-find-x5-pro-repair', 0.65), entry('/oppo-find-x3-pro-repair', 0.65),
    entry('/oppo-reno-11-f-repair', 0.65), entry('/oppo-reno-9-pro-repair', 0.65), entry('/oppo-reno-8-pro-repair', 0.65),
    entry('/oppo-reno-8t-repair', 0.65), entry('/oppo-reno-7-repair', 0.65), entry('/oppo-reno-6-repair', 0.65),
    entry('/oppo-reno-5-repair', 0.65), entry('/oppo-reno-4-repair', 0.63),
    entry('/oppo-a96-repair', 0.63), entry('/oppo-a74-repair', 0.63), entry('/oppo-a72-repair', 0.62),
    entry('/oppo-a54-repair', 0.62), entry('/oppo-a53-repair', 0.62), entry('/oppo-a52-repair', 0.60),
    entry('/oppo-a16-repair', 0.60), entry('/oppo-a15-repair', 0.60), entry('/oppo-a9-2020-repair', 0.60),
    entry('/xiaomi-13-lite-repair', 0.65), entry('/xiaomi-12-pro-repair', 0.65), entry('/xiaomi-12-repair', 0.65),
    entry('/xiaomi-11-ultra-repair', 0.65), entry('/xiaomi-11-repair', 0.65),
    entry('/xiaomi-10t-pro-repair', 0.65), entry('/xiaomi-10t-repair', 0.65),
    entry('/redmi-note-12-pro-repair', 0.65), entry('/redmi-note-12-repair', 0.65),
    entry('/redmi-note-11-pro-repair', 0.65), entry('/redmi-note-11-repair', 0.65),
    entry('/redmi-note-10-pro-repair', 0.65), entry('/redmi-note-10-repair', 0.65),
    entry('/redmi-10-repair', 0.63), entry('/redmi-10c-repair', 0.62), entry('/redmi-9-repair', 0.62),
    entry('/poco-x5-pro-repair', 0.65), entry('/poco-x5-repair', 0.63), entry('/poco-f5-repair', 0.63),
    entry('/huawei-p40-repair', 0.65), entry('/huawei-p40-lite-repair', 0.63),
    entry('/huawei-p30-pro-repair', 0.65), entry('/huawei-p30-repair', 0.65), entry('/huawei-p30-lite-repair', 0.63),
    entry('/huawei-p20-pro-repair', 0.63),
    entry('/huawei-mate-30-pro-repair', 0.65), entry('/huawei-mate-20-pro-repair', 0.65),
    entry('/huawei-nova-10-pro-repair', 0.63),
    entry('/motorola-edge-60-pro-repair', 0.65), entry('/motorola-edge-30-pro-repair', 0.65),
    entry('/motorola-edge-30-repair', 0.65), entry('/motorola-edge-20-pro-repair', 0.65),
    entry('/moto-g73-repair', 0.63), entry('/moto-g72-repair', 0.63), entry('/moto-g62-repair', 0.63),
    entry('/moto-g52-repair', 0.63), entry('/moto-g42-repair', 0.62), entry('/moto-g32-repair', 0.62),
    entry('/motorola-razr-2022-repair', 0.65), entry('/moto-e32-repair', 0.60),
    entry('/nokia-8-3-5g-repair', 0.63), entry('/nokia-7-2-repair', 0.63), entry('/nokia-6-2-repair', 0.62),
    entry('/nokia-5-4-repair', 0.62), entry('/nokia-5-3-repair', 0.62),
    entry('/nokia-4-2-repair', 0.60), entry('/nokia-3-4-repair', 0.60), entry('/nokia-g11-repair', 0.60),
    entry('/lg-g6-repair', 0.63), entry('/lg-g5-repair', 0.62),
    entry('/lg-v40-thinq-repair', 0.63), entry('/lg-v30-repair', 0.62), entry('/lg-v20-repair', 0.60),
    entry('/lg-k61-repair', 0.62), entry('/lg-k51-repair', 0.62), entry('/lg-k41-repair', 0.60),
    entry('/asus-rog-phone-7-repair', 0.65), entry('/asus-rog-phone-6-repair', 0.65),
    entry('/asus-rog-phone-5s-repair', 0.63), entry('/asus-zenfone-8-repair', 0.65), entry('/asus-zenfone-7-repair', 0.63),
    entry('/realme-11-pro-repair', 0.65), entry('/realme-11-repair', 0.65), entry('/realme-10-pro-plus-repair', 0.65),
    entry('/realme-9-pro-plus-repair', 0.65), entry('/realme-9-pro-repair', 0.65), entry('/realme-9-repair', 0.65),
    entry('/realme-8-pro-repair', 0.65), entry('/realme-8-repair', 0.65),
    entry('/realme-gt-2-pro-repair', 0.65), entry('/realme-gt-neo-3-repair', 0.65),
    entry('/realme-c35-repair', 0.62), entry('/realme-narzo-50-pro-repair', 0.63),
    // ── Secondary brand model-specific service pages (95 models × 5 services) ──
    ...[
      // OnePlus
      'oneplus-13','oneplus-12','oneplus-11','oneplus-10-pro',
      'oneplus-nord-4','oneplus-nord-ce-4','oneplus-nord-3','oneplus-nord-ce-3',
      // Nothing
      'nothing-phone-3a','nothing-phone-3a-pro','nothing-phone-2a',
      'nothing-phone-2a-plus','nothing-phone-2','nothing-phone-1',
      // Sony
      'sony-xperia-1-vi','sony-xperia-5-vi','sony-xperia-10-vi',
      'sony-xperia-1-v','sony-xperia-5-v','sony-xperia-10-v',
      'sony-xperia-1-iv','sony-xperia-pro-i',
      // Oppo
      'oppo-find-x8','oppo-find-x7','oppo-find-x6-pro',
      'oppo-reno-12','oppo-reno-11','oppo-reno-10','oppo-reno-8',
      'oppo-a78','oppo-a58','oppo-a38','oppo-f25-pro','oppo-f23',
      // Xiaomi
      'xiaomi-14-ultra','xiaomi-14','xiaomi-13-pro','xiaomi-13',
      'redmi-note-13-pro','redmi-note-13','redmi-13c',
      'poco-x6-pro','poco-x6','poco-m6-pro',
      // Huawei
      'huawei-p60-pro','huawei-p50-pro','huawei-p40-pro',
      'huawei-mate-50-pro','huawei-mate-40-pro',
      'huawei-nova-12','huawei-nova-11',
      'huawei-y90','huawei-y70','huawei-y60',
      // Motorola
      'motorola-edge-50-pro','motorola-edge-50','motorola-edge-40-pro',
      'moto-g85','moto-g84','moto-g54','moto-g34',
      'motorola-razr-50','motorola-razr-40-ultra','moto-g-power',
      // Nokia
      'nokia-g42','nokia-g22','nokia-g21','nokia-c32','nokia-c22',
      'nokia-xr21','nokia-xr20','nokia-g60',
      // LG
      'lg-g8-thinq','lg-v60-thinq','lg-velvet','lg-wing',
      'lg-g7-thinq','lg-v50-thinq','lg-k52','lg-k42',
      // Asus
      'asus-rog-phone-8-pro','asus-rog-phone-8','asus-rog-phone-7-pro',
      'asus-zenfone-11-ultra','asus-zenfone-10','asus-zenfone-9','asus-rog-phone-6-pro',
      // Realme
      'realme-13-pro-plus','realme-13-pro','realme-12-plus','realme-12',
      'realme-narzo-70-pro','realme-narzo-70','realme-c67','realme-c55',
      // ── Expansion models (114 new) ──
      // OnePlus expansion
      'oneplus-13r','oneplus-12r','oneplus-11r','oneplus-10t',
      'oneplus-9-pro','oneplus-9','oneplus-8t','oneplus-8-pro','oneplus-8',
      'oneplus-7t-pro','oneplus-7t',
      'oneplus-nord-2t','oneplus-nord-ce-2','oneplus-nord-ce-2-lite',
      // Sony expansion
      'sony-xperia-5-iv','sony-xperia-5-iii',
      'sony-xperia-1-iii','sony-xperia-1-ii',
      'sony-xperia-10-iv','sony-xperia-10-iii','sony-xperia-10-ii',
      // Oppo expansion
      'oppo-find-x6','oppo-find-x5-pro','oppo-find-x3-pro',
      'oppo-reno-11-f','oppo-reno-9-pro','oppo-reno-8-pro','oppo-reno-8t',
      'oppo-reno-7','oppo-reno-6','oppo-reno-5','oppo-reno-4',
      'oppo-a96','oppo-a74','oppo-a72','oppo-a54','oppo-a53','oppo-a52',
      'oppo-a16','oppo-a15','oppo-a9-2020',
      // Xiaomi expansion
      'xiaomi-13-lite','xiaomi-12-pro','xiaomi-12',
      'xiaomi-11-ultra','xiaomi-11','xiaomi-10t-pro','xiaomi-10t',
      'redmi-note-12-pro','redmi-note-12',
      'redmi-note-11-pro','redmi-note-11',
      'redmi-note-10-pro','redmi-note-10',
      'redmi-10','redmi-10c','redmi-9',
      'poco-x5-pro','poco-x5','poco-f5',
      // Huawei expansion
      'huawei-p40','huawei-p40-lite',
      'huawei-p30-pro','huawei-p30','huawei-p30-lite',
      'huawei-p20-pro',
      'huawei-mate-30-pro','huawei-mate-20-pro',
      'huawei-nova-10-pro',
      // Motorola expansion
      'motorola-edge-60-pro','motorola-edge-30-pro','motorola-edge-30','motorola-edge-20-pro',
      'moto-g73','moto-g72','moto-g62','moto-g52','moto-g42','moto-g32',
      'motorola-razr-2022','moto-e32',
      // Nokia expansion
      'nokia-8-3-5g','nokia-7-2','nokia-6-2',
      'nokia-5-4','nokia-5-3','nokia-4-2','nokia-3-4','nokia-g11',
      // LG expansion
      'lg-g6','lg-g5','lg-v40-thinq','lg-v30','lg-v20',
      'lg-k61','lg-k51','lg-k41',
      // Asus expansion
      'asus-rog-phone-7','asus-rog-phone-6','asus-rog-phone-5s',
      'asus-zenfone-8','asus-zenfone-7',
      // Realme expansion
      'realme-11-pro','realme-11','realme-10-pro-plus',
      'realme-9-pro-plus','realme-9-pro','realme-9',
      'realme-8-pro','realme-8',
      'realme-gt-2-pro','realme-gt-neo-3',
      'realme-c35','realme-narzo-50-pro',
    ].flatMap(m =>
      ['screen-replacement','battery-replacement','charging-port-repair','water-damage-repair','free-device-inspection'].map(s =>
        entry(`/${m}-${s}`, 0.60)
      )
    ),
  ]
}

export function getDirectoryEntries(): SitemapEntry[] {
  return [
    entry('/repair-directory', 0.7),
    entry('/iphone-repair-directory', 0.7),
    entry('/samsung-repair-directory', 0.7),
    entry('/ipad-repair-directory', 0.7),
    entry('/macbook-repair-directory', 0.7),
    entry('/google-pixel-repair-directory', 0.7),
  ]
}

export function getIphoneEntries(): SitemapEntry[] {
  const modelHubs = getAllModelHubSlugs().filter(s => s.startsWith('iphone'))
  const repairs = getAllRepairPageSlugs().filter(s => s.startsWith('iphone'))
  const locations = getAllLocationSlugs().filter(s => s.startsWith('iphone'))
  return [
    ...modelHubs.map(s => entry(s, 0.8, 'weekly')),
    ...repairs.map(s => entry(s, 0.7)),
    ...locations.map(s => entry(s, 0.75)),
  ]
}

export function getBroadServiceEntries(): SitemapEntry[] {
  return [
    // Samsung broad service pages
    entry('/samsung-screen-repair', 0.85, 'weekly'),
    entry('/samsung-battery-replacement', 0.85, 'weekly'),
    entry('/samsung-charging-port-repair', 0.8, 'weekly'),
    entry('/samsung-back-glass-repair', 0.8, 'weekly'),
    entry('/samsung-camera-repair', 0.8, 'weekly'),
    entry('/samsung-speaker-repair', 0.75, 'weekly'),
    entry('/samsung-microphone-repair', 0.75, 'weekly'),
    entry('/samsung-water-damage-repair', 0.8, 'weekly'),
    entry('/samsung-free-device-inspection', 0.7, 'weekly'),
    entry('/samsung-insurance-damage-report', 0.7, 'weekly'),
    // Google Pixel broad service pages
    entry('/google-pixel-screen-repair', 0.85, 'weekly'),
    entry('/google-pixel-battery-replacement', 0.85, 'weekly'),
    entry('/google-pixel-charging-port-repair', 0.8, 'weekly'),
    entry('/google-pixel-camera-repair', 0.8, 'weekly'),
    entry('/google-pixel-water-damage-repair', 0.8, 'weekly'),
    entry('/google-pixel-free-device-inspection', 0.7, 'weekly'),
    entry('/google-pixel-insurance-damage-report', 0.7, 'weekly'),
    // iPad broad service pages
    entry('/ipad-screen-repair', 0.85, 'weekly'),
    entry('/ipad-battery-replacement', 0.85, 'weekly'),
    entry('/ipad-charging-port-repair', 0.8, 'weekly'),
    entry('/ipad-camera-repair', 0.75, 'weekly'),
    entry('/ipad-water-damage-repair', 0.8, 'weekly'),
    entry('/ipad-free-device-inspection', 0.7, 'weekly'),
    entry('/ipad-insurance-damage-report', 0.7, 'weekly'),
    // MacBook broad service pages
    entry('/macbook-screen-repair', 0.85, 'weekly'),
    entry('/macbook-battery-replacement', 0.85, 'weekly'),
    entry('/macbook-keyboard-repair', 0.8, 'weekly'),
    entry('/macbook-trackpad-repair', 0.75, 'weekly'),
    entry('/macbook-water-damage-repair', 0.8, 'weekly'),
    entry('/macbook-free-device-inspection', 0.7, 'weekly'),
    entry('/macbook-insurance-damage-report', 0.7, 'weekly'),
  ]
}

export function getSamsungEntries(): SitemapEntry[] {
  const modelHubs = getAllModelHubSlugs().filter(s => s.startsWith('samsung'))
  const repairs = getAllRepairPageSlugs().filter(s => s.startsWith('samsung'))
  const locations = getAllLocationSlugs().filter(s => s.startsWith('samsung'))
  return [
    ...modelHubs.map(s => entry(s, 0.8, 'weekly')),
    ...repairs.map(s => entry(s, 0.7)),
    ...locations.map(s => entry(s, 0.75)),
  ]
}

export function getIpadEntries(): SitemapEntry[] {
  const modelHubs = getAllModelHubSlugs().filter(s => s.startsWith('ipad'))
  const repairs = getAllRepairPageSlugs().filter(s => s.startsWith('ipad'))
  const locations = getAllLocationSlugs().filter(s => s.startsWith('ipad'))
  return [
    ...modelHubs.map(s => entry(s, 0.8, 'weekly')),
    ...repairs.map(s => entry(s, 0.7)),
    ...locations.map(s => entry(s, 0.75)),
  ]
}

export function getMacbookEntries(): SitemapEntry[] {
  const modelHubs = getAllModelHubSlugs().filter(s => s.startsWith('macbook'))
  const repairs = getAllRepairPageSlugs().filter(s => s.startsWith('macbook'))
  const locations = getAllLocationSlugs().filter(s => s.startsWith('macbook'))
  return [
    ...modelHubs.map(s => entry(s, 0.8, 'weekly')),
    ...repairs.map(s => entry(s, 0.7)),
    ...locations.map(s => entry(s, 0.75)),
  ]
}

export function getPixelEntries(): SitemapEntry[] {
  const modelHubs = getAllModelHubSlugs().filter(s => s.includes('pixel') || s.startsWith('google-pixel'))
  const repairs = getAllRepairPageSlugs().filter(s => s.includes('pixel') || s.startsWith('google-pixel'))
  const locations = getAllLocationSlugs().filter(s => s.startsWith('pixel'))
  return [
    ...modelHubs.map(s => entry(s, 0.8, 'weekly')),
    ...repairs.map(s => entry(s, 0.7)),
    ...locations.map(s => entry(s, 0.75)),
  ]
}

export function getProblemEntries(): SitemapEntry[] {
  return IPHONE_PROBLEMS.map(p => entry(p.slug, 0.75))
}

export function getDataRecoveryEntries(): SitemapEntry[] {
  return [
    entry('/data-recovery-melbourne', 0.85, 'weekly'),
    entry('/android-data-recovery', 0.8),
    entry('/iphone-water-damage-data-recovery', 0.78),
    entry('/iphone-photo-recovery', 0.78),
    entry('/iphone-motherboard-data-recovery', 0.76),
    entry('/iphone-deleted-photo-recovery', 0.76),
    entry('/iphone-storage-failure-data-recovery', 0.74),
    entry('/samsung-data-recovery', 0.78),
    entry('/pixel-data-recovery', 0.76),
  ]
}

export function getStandaloneDeviceProblemEntries(): SitemapEntry[] {
  return [
    entry('/samsung-not-charging-repair', 0.75),
    entry('/samsung-black-screen-repair', 0.75),
    entry('/samsung-boot-loop-repair', 0.75),
    entry('/samsung-screen-flickering-repair', 0.74),
    entry('/pixel-not-charging-repair', 0.74),
    entry('/pixel-black-screen-repair', 0.74),
    entry('/pixel-boot-loop-repair', 0.74),
    entry('/pixel-water-damage-repair', 0.74),
  ]
}

export function getCommercialEntries(): SitemapEntry[] {
  return COMMERCIAL_PAGES.map(p => entry(p.slug, 0.78))
}

export function getSuburbEntries(): SitemapEntry[] {
  const deviceLocations = getAllLocationSlugs()
  return [
    ...deviceLocations.map(s => entry(s, 0.75)),
    // Structure A suburb pages removed — covered by getSuburbServiceEntries() via /suburb-repairs/*
  ]
}

export function getBlogEntries(): SitemapEntry[] {
  return [
    entry('/repair-guides', 0.8, 'weekly'),
    ...repairGuides.map(g => entry(`/repair-guides/${g.slug}`, 0.7, 'monthly')),
  ]
}

export function getSuburbServiceEntries(): SitemapEntry[] {
  return SUBURB_SERVICE_PAGES.map(p => entry(`/suburb-repairs/${p.slug}`, 0.72, 'monthly'))
}

export function generateSitemapXml(entries: SitemapEntry[]): string {
  const urls = entries.map(e => `  <url>
    <loc>${e.url}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority.toFixed(1)}</priority>
  </url>`).join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`
}

export function generateSitemapIndexXml(sitemapUrls: string[]): string {
  const sitemaps = sitemapUrls.map(url => `  <sitemap>\n    <loc>${url}</loc>\n    <lastmod>${now}</lastmod>\n  </sitemap>`).join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemaps}\n</sitemapindex>`
}
