// ---------------------------------------------------------------------------
// Suburb + Service landing page definitions
// ---------------------------------------------------------------------------

export interface SuburbServicePage {
  slug: string // e.g. "iphone-screen-repair-braybrook"
  device: string // "iPhone" | "Samsung" | "MacBook" | "iPad" | "Google Pixel"
  deviceSlug: string // "iphone" | "samsung" | "macbook" | "ipad" | "google-pixel"
  service: string // "Screen Repair" | "Battery Replacement" etc.
  serviceSlug: string // "screen-repair" | "battery-replacement" etc.
  suburb: string // "Braybrook"
  suburbSlug: string // "braybrook"
  nearbySuburbs: string[] // ["Footscray", "Sunshine", "Maidstone"]
  coreServiceHref: string // "/iphone-screen-repair"
  deviceHubHref: string // "/iphone-repair-melbourne"
}

// ---------------------------------------------------------------------------
// Nearby suburb map — geographic sense for each suburb
// ---------------------------------------------------------------------------

const NEARBY: Record<string, string[]> = {
  burwood: ['Box Hill', 'Camberwell', 'Glen Waverley', 'Hawthorn'],
  braybrook: ['Footscray', 'Sunshine', 'Maidstone', 'Maribyrnong'],
  footscray: ['Braybrook', 'Seddon', 'Yarraville', 'Maidstone'],
  sunshine: ['Braybrook', 'St Albans', 'Deer Park', 'Albion'],
  yarraville: ['Footscray', 'Williamstown', 'Seddon', 'Newport'],
  williamstown: ['Yarraville', 'Spotswood', 'Newport', 'Altona'],
  altona: ['Williamstown', 'Laverton', 'Altona Meadows', 'Newport'],
  werribee: ['Hoppers Crossing', 'Laverton', 'Point Cook', 'Wyndham Vale'],
  'st-albans': ['Sunshine', 'Keilor East', 'Deer Park', 'Albanvale'],
  spotswood: ['Williamstown', 'Newport', 'Yarraville', 'Seddon'],
  newport: ['Williamstown', 'Yarraville', 'Altona', 'Spotswood'],
  seddon: ['Footscray', 'Yarraville', 'Kingsville', 'West Footscray'],
  maribyrnong: ['Braybrook', 'Footscray', 'Maidstone', 'Sunshine'],
  // Task 10 new suburbs
  tarneit: ['Hoppers Crossing', 'Point Cook', 'Werribee', 'Laverton'],
  'hoppers-crossing': ['Werribee', 'Laverton', 'Point Cook', 'Tarneit'],
  laverton: ['Altona', 'Hoppers Crossing', 'Werribee', 'Altona Meadows'],
  'point-cook': ['Hoppers Crossing', 'Werribee', 'Laverton', 'Altona Meadows'],
  'caroline-springs': ['Deer Park', 'St Albans', 'Keilor East', 'Sunshine'],
  'deer-park': ['Sunshine', 'St Albans', 'Caroline Springs', 'Braybrook'],
  'altona-meadows': ['Altona', 'Laverton', 'Hoppers Crossing', 'Newport'],
  kingsville: ['Footscray', 'Yarraville', 'Seddon', 'West Footscray'],
  tottenham: ['Braybrook', 'Sunshine', 'St Albans', 'Footscray'],
  'west-footscray': ['Footscray', 'Kingsville', 'Seddon', 'Yarraville'],
}

function nearby(suburbSlug: string): string[] {
  return NEARBY[suburbSlug] ?? ['Footscray', 'Sunshine', 'Maidstone']
}

// ---------------------------------------------------------------------------
// Helper to build entries
// ---------------------------------------------------------------------------

function entry(
  device: string,
  deviceSlug: string,
  service: string,
  serviceSlug: string,
  suburb: string,
  suburbSlug: string,
  coreServiceHref: string,
  deviceHubHref: string,
): SuburbServicePage {
  return {
    slug: `${deviceSlug}-${serviceSlug}-${suburbSlug}`,
    device,
    deviceSlug,
    service,
    serviceSlug,
    suburb,
    suburbSlug,
    nearbySuburbs: nearby(suburbSlug),
    coreServiceHref,
    deviceHubHref,
  }
}

// ---------------------------------------------------------------------------
// All suburb + service combinations
// ---------------------------------------------------------------------------

export const SUBURB_SERVICE_PAGES: SuburbServicePage[] = [
  // ── iPhone Screen Repair ─────────────────────────────────────────────────
  entry('iPhone', 'iphone', 'Screen Repair', 'screen-repair', 'Braybrook', 'braybrook', '/iphone-screen-repair', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Screen Repair', 'screen-repair', 'Footscray', 'footscray', '/iphone-screen-repair', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Screen Repair', 'screen-repair', 'Sunshine', 'sunshine', '/iphone-screen-repair', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Screen Repair', 'screen-repair', 'Yarraville', 'yarraville', '/iphone-screen-repair', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Screen Repair', 'screen-repair', 'Williamstown', 'williamstown', '/iphone-screen-repair', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Screen Repair', 'screen-repair', 'Altona', 'altona', '/iphone-screen-repair', '/iphone-repair-melbourne'),
  // Structure A missing: spotswood, newport, seddon, maribyrnong
  entry('iPhone', 'iphone', 'Screen Repair', 'screen-repair', 'Spotswood', 'spotswood', '/iphone-screen-repair', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Screen Repair', 'screen-repair', 'Newport', 'newport', '/iphone-screen-repair', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Screen Repair', 'screen-repair', 'Seddon', 'seddon', '/iphone-screen-repair', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Screen Repair', 'screen-repair', 'Maribyrnong', 'maribyrnong', '/iphone-screen-repair', '/iphone-repair-melbourne'),

  // ── iPhone Battery Replacement ───────────────────────────────────────────
  entry('iPhone', 'iphone', 'Battery Replacement', 'battery-replacement', 'Braybrook', 'braybrook', '/iphone-battery-replacement', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Battery Replacement', 'battery-replacement', 'Footscray', 'footscray', '/iphone-battery-replacement', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Battery Replacement', 'battery-replacement', 'Sunshine', 'sunshine', '/iphone-battery-replacement', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Battery Replacement', 'battery-replacement', 'Werribee', 'werribee', '/iphone-battery-replacement', '/iphone-repair-melbourne'),
  // Structure A missing: spotswood, yarraville, williamstown, altona, newport, seddon, maribyrnong
  entry('iPhone', 'iphone', 'Battery Replacement', 'battery-replacement', 'Spotswood', 'spotswood', '/iphone-battery-replacement', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Battery Replacement', 'battery-replacement', 'Yarraville', 'yarraville', '/iphone-battery-replacement', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Battery Replacement', 'battery-replacement', 'Williamstown', 'williamstown', '/iphone-battery-replacement', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Battery Replacement', 'battery-replacement', 'Altona', 'altona', '/iphone-battery-replacement', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Battery Replacement', 'battery-replacement', 'Newport', 'newport', '/iphone-battery-replacement', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Battery Replacement', 'battery-replacement', 'Seddon', 'seddon', '/iphone-battery-replacement', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Battery Replacement', 'battery-replacement', 'Maribyrnong', 'maribyrnong', '/iphone-battery-replacement', '/iphone-repair-melbourne'),

  // ── iPhone Charging Port Repair ──────────────────────────────────────────
  entry('iPhone', 'iphone', 'Charging Port Repair', 'charging-port-repair', 'Braybrook', 'braybrook', '/iphone-charging-port-repair', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Charging Port Repair', 'charging-port-repair', 'Footscray', 'footscray', '/iphone-charging-port-repair', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Charging Port Repair', 'charging-port-repair', 'Sunshine', 'sunshine', '/iphone-charging-port-repair', '/iphone-repair-melbourne'),
  // Structure A missing: spotswood, yarraville, williamstown, altona, newport, seddon, maribyrnong
  entry('iPhone', 'iphone', 'Charging Port Repair', 'charging-port-repair', 'Spotswood', 'spotswood', '/iphone-charging-port-repair', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Charging Port Repair', 'charging-port-repair', 'Yarraville', 'yarraville', '/iphone-charging-port-repair', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Charging Port Repair', 'charging-port-repair', 'Williamstown', 'williamstown', '/iphone-charging-port-repair', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Charging Port Repair', 'charging-port-repair', 'Altona', 'altona', '/iphone-charging-port-repair', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Charging Port Repair', 'charging-port-repair', 'Newport', 'newport', '/iphone-charging-port-repair', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Charging Port Repair', 'charging-port-repair', 'Seddon', 'seddon', '/iphone-charging-port-repair', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Charging Port Repair', 'charging-port-repair', 'Maribyrnong', 'maribyrnong', '/iphone-charging-port-repair', '/iphone-repair-melbourne'),

  // ── iPhone Water Damage Repair ───────────────────────────────────────────
  entry('iPhone', 'iphone', 'Water Damage Repair', 'water-damage-repair', 'Braybrook', 'braybrook', '/iphone-water-damage-repair', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Water Damage Repair', 'water-damage-repair', 'Footscray', 'footscray', '/iphone-water-damage-repair', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Water Damage Repair', 'water-damage-repair', 'Sunshine', 'sunshine', '/iphone-water-damage-repair', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Water Damage Repair', 'water-damage-repair', 'Spotswood', 'spotswood', '/iphone-water-damage-repair', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Water Damage Repair', 'water-damage-repair', 'Yarraville', 'yarraville', '/iphone-water-damage-repair', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Water Damage Repair', 'water-damage-repair', 'Williamstown', 'williamstown', '/iphone-water-damage-repair', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Water Damage Repair', 'water-damage-repair', 'Altona', 'altona', '/iphone-water-damage-repair', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Water Damage Repair', 'water-damage-repair', 'Newport', 'newport', '/iphone-water-damage-repair', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Water Damage Repair', 'water-damage-repair', 'Seddon', 'seddon', '/iphone-water-damage-repair', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Water Damage Repair', 'water-damage-repair', 'Maribyrnong', 'maribyrnong', '/iphone-water-damage-repair', '/iphone-repair-melbourne'),

  // ── iPhone Camera Repair ─────────────────────────────────────────────────
  entry('iPhone', 'iphone', 'Camera Repair', 'camera-repair', 'Braybrook', 'braybrook', '/iphone-rear-camera-repair', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Camera Repair', 'camera-repair', 'Footscray', 'footscray', '/iphone-rear-camera-repair', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Camera Repair', 'camera-repair', 'Sunshine', 'sunshine', '/iphone-rear-camera-repair', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Camera Repair', 'camera-repair', 'Spotswood', 'spotswood', '/iphone-rear-camera-repair', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Camera Repair', 'camera-repair', 'Yarraville', 'yarraville', '/iphone-rear-camera-repair', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Camera Repair', 'camera-repair', 'Williamstown', 'williamstown', '/iphone-rear-camera-repair', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Camera Repair', 'camera-repair', 'Altona', 'altona', '/iphone-rear-camera-repair', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Camera Repair', 'camera-repair', 'Newport', 'newport', '/iphone-rear-camera-repair', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Camera Repair', 'camera-repair', 'Seddon', 'seddon', '/iphone-rear-camera-repair', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Camera Repair', 'camera-repair', 'Maribyrnong', 'maribyrnong', '/iphone-rear-camera-repair', '/iphone-repair-melbourne'),

  // ── Samsung Screen Repair ────────────────────────────────────────────────
  entry('Samsung', 'samsung', 'Screen Repair', 'screen-repair', 'Braybrook', 'braybrook', '/samsung-screen-repair', '/samsung-repair-melbourne'),
  entry('Samsung', 'samsung', 'Screen Repair', 'screen-repair', 'Footscray', 'footscray', '/samsung-screen-repair', '/samsung-repair-melbourne'),
  entry('Samsung', 'samsung', 'Screen Repair', 'screen-repair', 'Sunshine', 'sunshine', '/samsung-screen-repair', '/samsung-repair-melbourne'),
  entry('Samsung', 'samsung', 'Screen Repair', 'screen-repair', 'St Albans', 'st-albans', '/samsung-screen-repair', '/samsung-repair-melbourne'),

  // ── Samsung Battery Replacement ──────────────────────────────────────────
  entry('Samsung', 'samsung', 'Battery Replacement', 'battery-replacement', 'Braybrook', 'braybrook', '/samsung-battery-replacement', '/samsung-repair-melbourne'),
  entry('Samsung', 'samsung', 'Battery Replacement', 'battery-replacement', 'Footscray', 'footscray', '/samsung-battery-replacement', '/samsung-repair-melbourne'),

  // ── MacBook Screen Repair ────────────────────────────────────────────────
  entry('MacBook', 'macbook', 'Screen Repair', 'screen-repair', 'Braybrook', 'braybrook', '/macbook-screen-repair', '/macbook-repair-melbourne'),
  entry('MacBook', 'macbook', 'Screen Repair', 'screen-repair', 'Footscray', 'footscray', '/macbook-screen-repair', '/macbook-repair-melbourne'),
  entry('MacBook', 'macbook', 'Screen Repair', 'screen-repair', 'Sunshine', 'sunshine', '/macbook-screen-repair', '/macbook-repair-melbourne'),

  // ── iPad Screen Repair ───────────────────────────────────────────────────
  entry('iPad', 'ipad', 'Screen Repair', 'screen-repair', 'Braybrook', 'braybrook', '/ipad-screen-repair', '/ipad-repair-melbourne'),
  entry('iPad', 'ipad', 'Screen Repair', 'screen-repair', 'Footscray', 'footscray', '/ipad-screen-repair', '/ipad-repair-melbourne'),
  entry('iPad', 'ipad', 'Screen Repair', 'screen-repair', 'Sunshine', 'sunshine', '/ipad-screen-repair', '/ipad-repair-melbourne'),

  // ── Google Pixel Screen Repair ───────────────────────────────────────────
  entry('Google Pixel', 'google-pixel', 'Screen Repair', 'screen-repair', 'Braybrook', 'braybrook', '/google-pixel-screen-repair', '/google-pixel-repair-melbourne'),
  entry('Google Pixel', 'google-pixel', 'Screen Repair', 'screen-repair', 'Footscray', 'footscray', '/google-pixel-screen-repair', '/google-pixel-repair-melbourne'),

  // ── iPhone Repair (general) ──────────────────────────────────────────────
  entry('iPhone', 'iphone', 'Repair', 'repair', 'Braybrook', 'braybrook', '/iphone-repair-melbourne', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Repair', 'repair', 'Footscray', 'footscray', '/iphone-repair-melbourne', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Repair', 'repair', 'Sunshine', 'sunshine', '/iphone-repair-melbourne', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Repair', 'repair', 'Yarraville', 'yarraville', '/iphone-repair-melbourne', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Repair', 'repair', 'Williamstown', 'williamstown', '/iphone-repair-melbourne', '/iphone-repair-melbourne'),
  // Structure A missing: spotswood, altona, newport, seddon, maribyrnong
  entry('iPhone', 'iphone', 'Repair', 'repair', 'Spotswood', 'spotswood', '/iphone-repair-melbourne', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Repair', 'repair', 'Altona', 'altona', '/iphone-repair-melbourne', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Repair', 'repair', 'Newport', 'newport', '/iphone-repair-melbourne', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Repair', 'repair', 'Seddon', 'seddon', '/iphone-repair-melbourne', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Repair', 'repair', 'Maribyrnong', 'maribyrnong', '/iphone-repair-melbourne', '/iphone-repair-melbourne'),

  // ── Samsung Repair (general) ─────────────────────────────────────────────
  entry('Samsung', 'samsung', 'Repair', 'repair', 'Braybrook', 'braybrook', '/samsung-repair-melbourne', '/samsung-repair-melbourne'),
  entry('Samsung', 'samsung', 'Repair', 'repair', 'Footscray', 'footscray', '/samsung-repair-melbourne', '/samsung-repair-melbourne'),
  entry('Samsung', 'samsung', 'Repair', 'repair', 'Sunshine', 'sunshine', '/samsung-repair-melbourne', '/samsung-repair-melbourne'),

  // ── MacBook Repair (general) ─────────────────────────────────────────────
  entry('MacBook', 'macbook', 'Repair', 'repair', 'Braybrook', 'braybrook', '/macbook-repair-melbourne', '/macbook-repair-melbourne'),
  entry('MacBook', 'macbook', 'Repair', 'repair', 'Footscray', 'footscray', '/macbook-repair-melbourne', '/macbook-repair-melbourne'),

  // ── Burwood ───────────────────────────────────────────────────────────────
  entry('iPhone', 'iphone', 'Repair', 'repair', 'Burwood', 'burwood', '/iphone-repair-melbourne', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Screen Repair', 'screen-repair', 'Burwood', 'burwood', '/iphone-screen-repair', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Battery Replacement', 'battery-replacement', 'Burwood', 'burwood', '/iphone-battery-replacement', '/iphone-repair-melbourne'),
  entry('Samsung', 'samsung', 'Screen Repair', 'screen-repair', 'Burwood', 'burwood', '/samsung-screen-repair', '/samsung-repair-melbourne'),

  // ── Task 10: New suburb pages ─────────────────────────────────────────────

  // Tarneit
  entry('iPhone', 'iphone', 'Screen Repair', 'screen-repair', 'Tarneit', 'tarneit', '/iphone-screen-repair', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Repair', 'repair', 'Tarneit', 'tarneit', '/iphone-repair-melbourne', '/iphone-repair-melbourne'),
  entry('Samsung', 'samsung', 'Screen Repair', 'screen-repair', 'Tarneit', 'tarneit', '/samsung-screen-repair', '/samsung-repair-melbourne'),

  // Hoppers Crossing
  entry('iPhone', 'iphone', 'Screen Repair', 'screen-repair', 'Hoppers Crossing', 'hoppers-crossing', '/iphone-screen-repair', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Repair', 'repair', 'Hoppers Crossing', 'hoppers-crossing', '/iphone-repair-melbourne', '/iphone-repair-melbourne'),
  entry('Samsung', 'samsung', 'Screen Repair', 'screen-repair', 'Hoppers Crossing', 'hoppers-crossing', '/samsung-screen-repair', '/samsung-repair-melbourne'),

  // Laverton
  entry('iPhone', 'iphone', 'Screen Repair', 'screen-repair', 'Laverton', 'laverton', '/iphone-screen-repair', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Repair', 'repair', 'Laverton', 'laverton', '/iphone-repair-melbourne', '/iphone-repair-melbourne'),

  // Point Cook
  entry('iPhone', 'iphone', 'Screen Repair', 'screen-repair', 'Point Cook', 'point-cook', '/iphone-screen-repair', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Repair', 'repair', 'Point Cook', 'point-cook', '/iphone-repair-melbourne', '/iphone-repair-melbourne'),

  // Caroline Springs
  entry('iPhone', 'iphone', 'Screen Repair', 'screen-repair', 'Caroline Springs', 'caroline-springs', '/iphone-screen-repair', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Repair', 'repair', 'Caroline Springs', 'caroline-springs', '/iphone-repair-melbourne', '/iphone-repair-melbourne'),

  // Deer Park
  entry('iPhone', 'iphone', 'Screen Repair', 'screen-repair', 'Deer Park', 'deer-park', '/iphone-screen-repair', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Repair', 'repair', 'Deer Park', 'deer-park', '/iphone-repair-melbourne', '/iphone-repair-melbourne'),

  // Altona Meadows
  entry('iPhone', 'iphone', 'Screen Repair', 'screen-repair', 'Altona Meadows', 'altona-meadows', '/iphone-screen-repair', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Repair', 'repair', 'Altona Meadows', 'altona-meadows', '/iphone-repair-melbourne', '/iphone-repair-melbourne'),

  // Kingsville
  entry('iPhone', 'iphone', 'Screen Repair', 'screen-repair', 'Kingsville', 'kingsville', '/iphone-screen-repair', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Repair', 'repair', 'Kingsville', 'kingsville', '/iphone-repair-melbourne', '/iphone-repair-melbourne'),

  // Tottenham
  entry('iPhone', 'iphone', 'Screen Repair', 'screen-repair', 'Tottenham', 'tottenham', '/iphone-screen-repair', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Repair', 'repair', 'Tottenham', 'tottenham', '/iphone-repair-melbourne', '/iphone-repair-melbourne'),

  // West Footscray
  entry('iPhone', 'iphone', 'Screen Repair', 'screen-repair', 'West Footscray', 'west-footscray', '/iphone-screen-repair', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Repair', 'repair', 'West Footscray', 'west-footscray', '/iphone-repair-melbourne', '/iphone-repair-melbourne'),

  // Werribee Samsung Screen Repair (Task 10 addition)
  entry('Samsung', 'samsung', 'Screen Repair', 'screen-repair', 'Werribee', 'werribee', '/samsung-screen-repair', '/samsung-repair-melbourne'),

  // ── Task 10: Extended services for new suburbs ──────────────────────────

  // Tarneit — extended
  entry('iPhone', 'iphone', 'Battery Replacement', 'battery-replacement', 'Tarneit', 'tarneit', '/iphone-battery-replacement', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Charging Port Repair', 'charging-port-repair', 'Tarneit', 'tarneit', '/iphone-charging-port-repair', '/iphone-repair-melbourne'),
  entry('Samsung', 'samsung', 'Battery Replacement', 'battery-replacement', 'Tarneit', 'tarneit', '/samsung-battery-replacement', '/samsung-repair-melbourne'),

  // Hoppers Crossing — extended
  entry('iPhone', 'iphone', 'Battery Replacement', 'battery-replacement', 'Hoppers Crossing', 'hoppers-crossing', '/iphone-battery-replacement', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Charging Port Repair', 'charging-port-repair', 'Hoppers Crossing', 'hoppers-crossing', '/iphone-charging-port-repair', '/iphone-repair-melbourne'),
  entry('Samsung', 'samsung', 'Battery Replacement', 'battery-replacement', 'Hoppers Crossing', 'hoppers-crossing', '/samsung-battery-replacement', '/samsung-repair-melbourne'),

  // Point Cook — extended
  entry('iPhone', 'iphone', 'Battery Replacement', 'battery-replacement', 'Point Cook', 'point-cook', '/iphone-battery-replacement', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Charging Port Repair', 'charging-port-repair', 'Point Cook', 'point-cook', '/iphone-charging-port-repair', '/iphone-repair-melbourne'),
  entry('Samsung', 'samsung', 'Screen Repair', 'screen-repair', 'Point Cook', 'point-cook', '/samsung-screen-repair', '/samsung-repair-melbourne'),

  // Caroline Springs — extended
  entry('iPhone', 'iphone', 'Battery Replacement', 'battery-replacement', 'Caroline Springs', 'caroline-springs', '/iphone-battery-replacement', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Charging Port Repair', 'charging-port-repair', 'Caroline Springs', 'caroline-springs', '/iphone-charging-port-repair', '/iphone-repair-melbourne'),
  entry('Samsung', 'samsung', 'Screen Repair', 'screen-repair', 'Caroline Springs', 'caroline-springs', '/samsung-screen-repair', '/samsung-repair-melbourne'),

  // Deer Park — extended
  entry('iPhone', 'iphone', 'Battery Replacement', 'battery-replacement', 'Deer Park', 'deer-park', '/iphone-battery-replacement', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Charging Port Repair', 'charging-port-repair', 'Deer Park', 'deer-park', '/iphone-charging-port-repair', '/iphone-repair-melbourne'),

  // Laverton — extended
  entry('iPhone', 'iphone', 'Battery Replacement', 'battery-replacement', 'Laverton', 'laverton', '/iphone-battery-replacement', '/iphone-repair-melbourne'),
  entry('Samsung', 'samsung', 'Screen Repair', 'screen-repair', 'Laverton', 'laverton', '/samsung-screen-repair', '/samsung-repair-melbourne'),

  // Altona Meadows — extended
  entry('iPhone', 'iphone', 'Battery Replacement', 'battery-replacement', 'Altona Meadows', 'altona-meadows', '/iphone-battery-replacement', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Charging Port Repair', 'charging-port-repair', 'Altona Meadows', 'altona-meadows', '/iphone-charging-port-repair', '/iphone-repair-melbourne'),

  // Kingsville — extended
  entry('iPhone', 'iphone', 'Battery Replacement', 'battery-replacement', 'Kingsville', 'kingsville', '/iphone-battery-replacement', '/iphone-repair-melbourne'),

  // West Footscray — extended
  entry('iPhone', 'iphone', 'Battery Replacement', 'battery-replacement', 'West Footscray', 'west-footscray', '/iphone-battery-replacement', '/iphone-repair-melbourne'),
  entry('iPhone', 'iphone', 'Charging Port Repair', 'charging-port-repair', 'West Footscray', 'west-footscray', '/iphone-charging-port-repair', '/iphone-repair-melbourne'),
]

// ---------------------------------------------------------------------------
// Lookup helper
// ---------------------------------------------------------------------------

export function getSuburbServicePage(slug: string): SuburbServicePage | undefined {
  return SUBURB_SERVICE_PAGES.find((p) => p.slug === slug)
}
