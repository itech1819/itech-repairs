import type { Suburb } from '@/types';

export const suburbs: Suburb[] = [
  { slug: 'melbourne', name: 'Melbourne', postcode: '3000', distanceFromStore: '8 km', region: 'CBD' },
  { slug: 'braybrook', name: 'Braybrook', postcode: '3019', distanceFromStore: '0 km', region: 'Inner West — our home suburb' },
  { slug: 'footscray', name: 'Footscray', postcode: '3011', distanceFromStore: '2 km', region: 'Inner West' },
  { slug: 'sunshine', name: 'Sunshine', postcode: '3020', distanceFromStore: '3 km', region: 'Inner West' },
  { slug: 'yarraville', name: 'Yarraville', postcode: '3013', distanceFromStore: '3 km', region: 'Inner West' },
  { slug: 'williamstown', name: 'Williamstown', postcode: '3016', distanceFromStore: '6 km', region: 'Inner West' },
  { slug: 'altona', name: 'Altona', postcode: '3018', distanceFromStore: '5 km', region: 'Inner West' },
  { slug: 'newport', name: 'Newport', postcode: '3015', distanceFromStore: '5 km', region: 'Inner West' },
  { slug: 'seddon', name: 'Seddon', postcode: '3011', distanceFromStore: '3 km', region: 'Inner West' },
  { slug: 'maribyrnong', name: 'Maribyrnong', postcode: '3032', distanceFromStore: '2 km', region: 'Inner West' },
];

// Device keys used in location page URLs
export const locationDeviceKeys = ['iphone', 'samsung', 'macbook', 'ipad', 'pixel'] as const;
export type LocationDeviceKey = typeof locationDeviceKeys[number];

export const locationDeviceLabels: Record<LocationDeviceKey, string> = {
  iphone: 'iPhone',
  samsung: 'Samsung',
  macbook: 'MacBook',
  ipad: 'iPad',
  pixel: 'Google Pixel',
};

export function getSuburbBySlug(slug: string): Suburb | undefined {
  return suburbs.find(s => s.slug === slug);
}
