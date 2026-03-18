import type { PriceEntry, DeviceCategory } from '@/types'

// Default pricing ranges by device category and repair type
export const DEFAULT_PRICE_RANGES: Record<DeviceCategory, Record<string, { min: number; max: number; display: string }>> = {
  iphone: {
    'screen-repair': { min: 89, max: 349, display: 'From $89' },
    'screen-replacement': { min: 89, max: 349, display: 'From $89' },
    'battery-replacement': { min: 69, max: 129, display: 'From $69' },
    'charging-port-repair': { min: 79, max: 149, display: 'From $79' },
    'charging-port-replacement': { min: 79, max: 149, display: 'From $79' },
    'back-glass-repair': { min: 99, max: 249, display: 'From $99' },
    'camera-repair': { min: 89, max: 199, display: 'From $89' },
    'water-damage-repair': { min: 99, max: 299, display: 'From $99' },
    'data-recovery': { min: 149, max: 499, display: 'From $149' },
    'motherboard-repair': { min: 199, max: 599, display: 'From $199' },
    'diagnostic': { min: 0, max: 0, display: 'Free' },
    'insurance-report': { min: 49, max: 99, display: 'From $49' },
    'inspection': { min: 0, max: 0, display: 'Free' },
    default: { min: 69, max: 299, display: 'Call for price' },
  },
  samsung: {
    'screen-repair': { min: 89, max: 379, display: 'From $89' },
    'screen-replacement': { min: 89, max: 379, display: 'From $89' },
    'battery-replacement': { min: 69, max: 139, display: 'From $69' },
    'charging-port-repair': { min: 79, max: 149, display: 'From $79' },
    'water-damage-repair': { min: 99, max: 299, display: 'From $99' },
    'data-recovery': { min: 149, max: 499, display: 'From $149' },
    'diagnostic': { min: 0, max: 0, display: 'Free' },
    'insurance-report': { min: 49, max: 99, display: 'From $49' },
    'inspection': { min: 0, max: 0, display: 'Free' },
    default: { min: 69, max: 299, display: 'Call for price' },
  },
  pixel: {
    'screen-repair': { min: 89, max: 349, display: 'From $89' },
    'battery-replacement': { min: 69, max: 129, display: 'From $69' },
    'charging-port-repair': { min: 79, max: 149, display: 'From $79' },
    'water-damage-repair': { min: 99, max: 299, display: 'From $99' },
    'diagnostic': { min: 0, max: 0, display: 'Free' },
    'insurance-report': { min: 49, max: 99, display: 'From $49' },
    'inspection': { min: 0, max: 0, display: 'Free' },
    default: { min: 69, max: 299, display: 'Call for price' },
  },
  ipad: {
    'screen-repair': { min: 119, max: 399, display: 'From $119' },
    'battery-replacement': { min: 99, max: 179, display: 'From $99' },
    'charging-port-repair': { min: 89, max: 169, display: 'From $89' },
    'water-damage-repair': { min: 129, max: 349, display: 'From $129' },
    'diagnostic': { min: 0, max: 0, display: 'Free' },
    'inspection': { min: 0, max: 0, display: 'Free' },
    default: { min: 99, max: 399, display: 'Call for price' },
  },
  macbook: {
    'screen-repair': { min: 249, max: 699, display: 'From $249' },
    'screen-replacement': { min: 249, max: 699, display: 'From $249' },
    'battery-replacement': { min: 179, max: 349, display: 'From $179' },
    'keyboard-replacement': { min: 199, max: 449, display: 'From $199' },
    'water-damage-repair': { min: 199, max: 599, display: 'From $199' },
    'data-recovery': { min: 199, max: 699, display: 'From $199' },
    'ssd-upgrade': { min: 199, max: 499, display: 'From $199' },
    'diagnostic': { min: 0, max: 0, display: 'Free' },
    'inspection': { min: 0, max: 0, display: 'Free' },
    default: { min: 149, max: 699, display: 'Call for price' },
  },
}

export function getPriceDisplay(category: DeviceCategory, repairSlug: string): string {
  const categoryPrices = DEFAULT_PRICE_RANGES[category]
  const specific = categoryPrices[repairSlug]
  if (specific) return specific.display
  return categoryPrices['default']?.display ?? 'Call for price'
}

export const priceEntries: PriceEntry[] = []
