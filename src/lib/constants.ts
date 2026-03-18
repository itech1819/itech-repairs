export const BASE_URL = 'https://www.itechrepairs.com.au'
export const SITE_NAME = 'iTech Repairs'
export const DEFAULT_OG_IMAGE = '/og-image.jpg'
export const PHONE_NUMBER = '+61432933273'
export const PHONE_DISPLAY = '0432 933 273'
export const ADDRESS = '16 W Central Park Ave, Braybrook VIC 3019'
export const GOOGLE_MAPS_URL = 'https://maps.google.com'
export const BUSINESS_EMAIL = 'hello@itechrepairs.com.au'

export const CATEGORY_PAGE_SLUGS = [
  'iphone-repair-melbourne',
  'samsung-repair-melbourne',
  'ipad-repair-melbourne',
  'macbook-repair-melbourne',
  'google-pixel-repair-melbourne',
] as const

export const DEVICE_DISPLAY_NAMES: Record<string, string> = {
  iphone: 'iPhone',
  samsung: 'Samsung',
  pixel: 'Google Pixel',
  ipad: 'iPad',
  macbook: 'MacBook',
}

export const PRIORITY_REPAIRS = [
  'screen-repair',
  'screen-replacement',
  'battery-replacement',
  'charging-port-repair',
  'water-damage-repair',
  'camera-repair',
]
