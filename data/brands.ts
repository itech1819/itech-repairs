import type { Brand } from '@/types';

export const brands: Brand[] = [
  {
    slug: 'iphone',
    name: 'iPhone',
    displayName: 'iPhone Repairs',
    categorySlug: 'iphone-repair-melbourne',
    description: 'Expert iPhone repairs for all models from iPhone XS to iPhone 17 Pro Max. Screen, battery, charging port, back glass, camera, Face ID and more — most repairs done in 15–30 minutes.',
    icon: '📱',
    repairSlugs: ['screen-repair','screen-replacement','battery-replacement','charging-port-repair','back-glass-repair','camera-repair','face-id-repair','water-damage-assessment','data-recovery','motherboard-repair','diagnostic','insurance-report'],
  },
  {
    slug: 'samsung',
    name: 'Samsung',
    displayName: 'Samsung Repairs',
    categorySlug: 'samsung-repair-melbourne',
    description: 'Fast Samsung Galaxy repairs for all S-series, A-series, Z Fold and Z Flip models. Screen, battery, charging port, back glass and more — walk in and get fixed today.',
    icon: '📱',
    repairSlugs: ['screen-repair','screen-replacement','battery-replacement','charging-port-repair','back-glass-repair','camera-repair','water-damage-assessment','data-recovery','motherboard-repair','diagnostic','insurance-report'],
  },
  {
    slug: 'ipad',
    name: 'iPad',
    displayName: 'iPad Repairs',
    categorySlug: 'ipad-repair-melbourne',
    description: 'Professional iPad repairs for iPad Pro, iPad Air, iPad Mini and standard iPad models. Screen, battery and charging port repairs — done same day.',
    icon: '📱',
    repairSlugs: ['screen-repair','screen-replacement','battery-replacement','charging-port-repair','camera-repair','touch-id-repair','water-damage-assessment','data-recovery','diagnostic','insurance-report'],
  },
  {
    slug: 'macbook',
    name: 'MacBook',
    displayName: 'MacBook Repairs',
    categorySlug: 'macbook-repair-melbourne',
    description: 'Specialist MacBook repairs for all MacBook Air and MacBook Pro models including M1 through M5. Screen, battery, keyboard, trackpad, water damage and logic board repairs.',
    icon: '💻',
    repairSlugs: ['screen-repair','battery-replacement','keyboard-replacement','trackpad-replacement','charging-port-repair','water-damage-assessment','data-recovery','motherboard-repair','fan-cleaning','ssd-upgrade','diagnostic','insurance-report'],
  },
  {
    slug: 'pixel',
    name: 'Google Pixel',
    displayName: 'Google Pixel Repairs',
    categorySlug: 'google-pixel-repair-melbourne',
    description: 'Expert Google Pixel repairs for Pixel 6a through Pixel 10 Pro XL. Screen, battery, charging port, back glass, camera and more — repaired same day in Melbourne.',
    icon: '📱',
    repairSlugs: ['screen-repair','screen-replacement','battery-replacement','charging-port-repair','back-glass-repair','camera-repair','water-damage-assessment','data-recovery','motherboard-repair','diagnostic','insurance-report'],
  },
];

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find(b => b.slug === slug);
}
