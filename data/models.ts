import type { DeviceModel } from '@/types';

// iPhone repair slugs - 30 repairs
const iphoneRepairs = [
  'screen-repair','screen-replacement','battery-replacement','charging-port-repair',
  'charging-port-replacement','back-glass-repair','back-cover-replacement','camera-repair',
  'rear-camera-replacement','front-camera-replacement','camera-lens-replacement',
  'speaker-repair','loudspeaker-replacement','earpiece-replacement','microphone-replacement',
  'power-button-replacement','volume-button-replacement','vibrator-replacement',
  'proximity-sensor-replacement','sim-card-reader-replacement','face-id-repair',
  'touch-screen-repair','ghost-touch-repair','water-damage-assessment','water-damage-repair',
  'data-recovery','motherboard-repair','diagnostic','insurance-report','inspection',
];

// iPhone SE / older with Touch ID instead of Face ID
const iphoneOlderRepairs = iphoneRepairs.map(s => s === 'face-id-repair' ? 'touch-id-repair' : s);

// Samsung repairs - 29 (no face-id)
const samsungRepairs = [
  'screen-repair','screen-replacement','battery-replacement','charging-port-repair',
  'charging-port-replacement','back-glass-repair','back-cover-replacement','camera-repair',
  'rear-camera-replacement','front-camera-replacement','camera-lens-replacement',
  'speaker-repair','loudspeaker-replacement','earpiece-replacement','microphone-replacement',
  'power-button-replacement','volume-button-replacement','vibrator-replacement',
  'proximity-sensor-replacement','sim-card-reader-replacement','touch-screen-repair',
  'ghost-touch-repair','water-damage-assessment','water-damage-repair',
  'data-recovery','motherboard-repair','diagnostic','insurance-report','inspection',
];

// Pixel repairs - same as Samsung
const pixelRepairs = samsungRepairs;

// iPad repairs - 25
const ipadRepairs = [
  'screen-repair','screen-replacement','lcd-replacement','battery-replacement',
  'charging-port-repair','charging-port-replacement','camera-repair',
  'rear-camera-replacement','front-camera-replacement','camera-lens-replacement',
  'speaker-repair','loudspeaker-replacement','microphone-replacement',
  'power-button-replacement','volume-button-replacement','touch-id-repair',
  'touch-screen-repair','ghost-touch-repair','water-damage-assessment','water-damage-repair',
  'data-recovery','motherboard-repair','diagnostic','insurance-report','inspection',
];

// MacBook repairs - 22
const macbookRepairs = [
  'screen-repair','screen-replacement','display-replacement','battery-replacement',
  'charging-port-repair','charging-port-replacement','camera-repair','front-camera-replacement',
  'speaker-repair','loudspeaker-replacement','microphone-replacement',
  'keyboard-replacement','trackpad-replacement','ssd-upgrade','fan-cleaning',
  'water-damage-assessment','water-damage-repair','data-recovery',
  'motherboard-repair','diagnostic','insurance-report','inspection',
];

export const models: DeviceModel[] = [
  // ─── iPHONE ──────────────────────────────────────────────────────
  { slug: 'iphone-17-pro-max', name: 'iPhone 17 Pro Max', brand: 'iphone', releaseYear: 2025, popular: true, repairSlugs: iphoneRepairs, specs: { screen: '6.9"', chip: 'A19 Pro', notes: 'Titanium frame' } },
  { slug: 'iphone-17-pro', name: 'iPhone 17 Pro', brand: 'iphone', releaseYear: 2025, popular: true, repairSlugs: iphoneRepairs, specs: { screen: '6.3"', chip: 'A19 Pro', notes: 'Titanium frame' } },
  { slug: 'iphone-air', name: 'iPhone Air', brand: 'iphone', releaseYear: 2025, popular: true, repairSlugs: iphoneRepairs, specs: { screen: '6.6"', chip: 'A18', notes: 'Ultra-thin design' } },
  { slug: 'iphone-17', name: 'iPhone 17', brand: 'iphone', releaseYear: 2025, popular: true, repairSlugs: iphoneRepairs, specs: { screen: '6.1"', chip: 'A18' } },
  { slug: 'iphone-16e', name: 'iPhone 16e', brand: 'iphone', releaseYear: 2025, popular: true, repairSlugs: iphoneOlderRepairs, specs: { screen: '6.1"', chip: 'A16 Bionic', notes: 'Budget flagship' } },
  { slug: 'iphone-16-pro-max', name: 'iPhone 16 Pro Max', brand: 'iphone', releaseYear: 2024, popular: true, repairSlugs: iphoneRepairs, specs: { screen: '6.9"', chip: 'A18 Pro', notes: 'Titanium, Camera Control' } },
  { slug: 'iphone-16-pro', name: 'iPhone 16 Pro', brand: 'iphone', releaseYear: 2024, popular: true, repairSlugs: iphoneRepairs, specs: { screen: '6.3"', chip: 'A18 Pro', notes: 'Titanium' } },
  { slug: 'iphone-16-plus', name: 'iPhone 16 Plus', brand: 'iphone', releaseYear: 2024, popular: false, repairSlugs: iphoneRepairs, specs: { screen: '6.7"', chip: 'A18' } },
  { slug: 'iphone-16', name: 'iPhone 16', brand: 'iphone', releaseYear: 2024, popular: true, repairSlugs: iphoneRepairs, specs: { screen: '6.1"', chip: 'A18' } },
  { slug: 'iphone-15-pro-max', name: 'iPhone 15 Pro Max', brand: 'iphone', releaseYear: 2023, popular: true, repairSlugs: iphoneRepairs, specs: { screen: '6.7"', chip: 'A17 Pro', notes: 'Titanium, USB-C' } },
  { slug: 'iphone-15-pro', name: 'iPhone 15 Pro', brand: 'iphone', releaseYear: 2023, popular: true, repairSlugs: iphoneRepairs, specs: { screen: '6.1"', chip: 'A17 Pro', notes: 'Titanium' } },
  { slug: 'iphone-15-plus', name: 'iPhone 15 Plus', brand: 'iphone', releaseYear: 2023, popular: false, repairSlugs: iphoneRepairs, specs: { screen: '6.7"', chip: 'A16 Bionic' } },
  { slug: 'iphone-15', name: 'iPhone 15', brand: 'iphone', releaseYear: 2023, popular: true, repairSlugs: iphoneRepairs, specs: { screen: '6.1"', chip: 'A16 Bionic' } },
  { slug: 'iphone-14-pro-max', name: 'iPhone 14 Pro Max', brand: 'iphone', releaseYear: 2022, popular: true, repairSlugs: iphoneRepairs, specs: { screen: '6.7"', chip: 'A16 Bionic', notes: 'Dynamic Island' } },
  { slug: 'iphone-14-pro', name: 'iPhone 14 Pro', brand: 'iphone', releaseYear: 2022, popular: true, repairSlugs: iphoneRepairs, specs: { screen: '6.1"', chip: 'A16 Bionic' } },
  { slug: 'iphone-14-plus', name: 'iPhone 14 Plus', brand: 'iphone', releaseYear: 2022, popular: false, repairSlugs: iphoneRepairs, specs: { screen: '6.7"', chip: 'A15 Bionic' } },
  { slug: 'iphone-14', name: 'iPhone 14', brand: 'iphone', releaseYear: 2022, popular: true, repairSlugs: iphoneRepairs, specs: { screen: '6.1"', chip: 'A15 Bionic' } },
  { slug: 'iphone-13-pro-max', name: 'iPhone 13 Pro Max', brand: 'iphone', releaseYear: 2021, popular: false, repairSlugs: iphoneRepairs, specs: { screen: '6.7"', chip: 'A15 Bionic' } },
  { slug: 'iphone-13-pro', name: 'iPhone 13 Pro', brand: 'iphone', releaseYear: 2021, popular: false, repairSlugs: iphoneRepairs, specs: { screen: '6.1"', chip: 'A15 Bionic' } },
  { slug: 'iphone-13', name: 'iPhone 13', brand: 'iphone', releaseYear: 2021, popular: true, repairSlugs: iphoneRepairs, specs: { screen: '6.1"', chip: 'A15 Bionic' } },
  { slug: 'iphone-13-mini', name: 'iPhone 13 Mini', brand: 'iphone', releaseYear: 2021, popular: false, repairSlugs: iphoneRepairs, specs: { screen: '5.4"', chip: 'A15 Bionic' } },
  { slug: 'iphone-12-pro-max', name: 'iPhone 12 Pro Max', brand: 'iphone', releaseYear: 2020, popular: false, repairSlugs: iphoneRepairs, specs: { screen: '6.7"', chip: 'A14 Bionic' } },
  { slug: 'iphone-12-pro', name: 'iPhone 12 Pro', brand: 'iphone', releaseYear: 2020, popular: false, repairSlugs: iphoneRepairs, specs: { screen: '6.1"', chip: 'A14 Bionic' } },
  { slug: 'iphone-12', name: 'iPhone 12', brand: 'iphone', releaseYear: 2020, popular: true, repairSlugs: iphoneRepairs, specs: { screen: '6.1"', chip: 'A14 Bionic' } },
  { slug: 'iphone-12-mini', name: 'iPhone 12 Mini', brand: 'iphone', releaseYear: 2020, popular: false, repairSlugs: iphoneRepairs, specs: { screen: '5.4"', chip: 'A14 Bionic' } },
  { slug: 'iphone-11-pro-max', name: 'iPhone 11 Pro Max', brand: 'iphone', releaseYear: 2019, popular: false, repairSlugs: iphoneRepairs, specs: { screen: '6.5"', chip: 'A13 Bionic' } },
  { slug: 'iphone-11-pro', name: 'iPhone 11 Pro', brand: 'iphone', releaseYear: 2019, popular: false, repairSlugs: iphoneRepairs, specs: { screen: '5.8"', chip: 'A13 Bionic' } },
  { slug: 'iphone-11', name: 'iPhone 11', brand: 'iphone', releaseYear: 2019, popular: true, repairSlugs: iphoneRepairs, specs: { screen: '6.1"', chip: 'A13 Bionic' } },
  { slug: 'iphone-xr', name: 'iPhone XR', brand: 'iphone', releaseYear: 2018, popular: false, repairSlugs: iphoneOlderRepairs, specs: { screen: '6.1"', chip: 'A12 Bionic' } },
  { slug: 'iphone-xs-max', name: 'iPhone XS Max', brand: 'iphone', releaseYear: 2018, popular: false, repairSlugs: iphoneRepairs, specs: { screen: '6.5"', chip: 'A12 Bionic' } },
  { slug: 'iphone-xs', name: 'iPhone XS', brand: 'iphone', releaseYear: 2018, popular: false, repairSlugs: iphoneRepairs, specs: { screen: '5.8"', chip: 'A12 Bionic' } },
  { slug: 'iphone-se-3rd-gen', name: 'iPhone SE 3rd Gen', brand: 'iphone', releaseYear: 2022, popular: false, repairSlugs: iphoneOlderRepairs, specs: { screen: '4.7"', chip: 'A15 Bionic', notes: 'Touch ID' } },

  // ─── SAMSUNG ─────────────────────────────────────────────────────
  { slug: 'samsung-s26-ultra', name: 'Samsung Galaxy S26 Ultra', brand: 'samsung', releaseYear: 2026, popular: true, repairSlugs: samsungRepairs, specs: { screen: '6.9"', chip: 'Snapdragon 8 Elite 2', notes: 'Built-in S Pen' } },
  { slug: 'samsung-s26-plus', name: 'Samsung Galaxy S26+', brand: 'samsung', releaseYear: 2026, popular: true, repairSlugs: samsungRepairs, specs: { screen: '6.7"', chip: 'Snapdragon 8 Elite 2' } },
  { slug: 'samsung-s26', name: 'Samsung Galaxy S26', brand: 'samsung', releaseYear: 2026, popular: true, repairSlugs: samsungRepairs, specs: { screen: '6.2"', chip: 'Snapdragon 8 Elite 2' } },
  { slug: 'samsung-s25-ultra', name: 'Samsung Galaxy S25 Ultra', brand: 'samsung', releaseYear: 2025, popular: true, repairSlugs: samsungRepairs, specs: { screen: '6.9"', chip: 'Snapdragon 8 Elite', notes: 'Built-in S Pen' } },
  { slug: 'samsung-s25-plus', name: 'Samsung Galaxy S25+', brand: 'samsung', releaseYear: 2025, popular: true, repairSlugs: samsungRepairs, specs: { screen: '6.7"', chip: 'Snapdragon 8 Elite' } },
  { slug: 'samsung-s25', name: 'Samsung Galaxy S25', brand: 'samsung', releaseYear: 2025, popular: true, repairSlugs: samsungRepairs, specs: { screen: '6.2"', chip: 'Snapdragon 8 Elite' } },
  { slug: 'samsung-s25-edge', name: 'Samsung Galaxy S25 Edge', brand: 'samsung', releaseYear: 2025, popular: true, repairSlugs: samsungRepairs, specs: { screen: '6.7"', chip: 'Snapdragon 8 Elite', notes: 'Ultra-thin' } },
  { slug: 'samsung-s24-ultra', name: 'Samsung Galaxy S24 Ultra', brand: 'samsung', releaseYear: 2024, popular: true, repairSlugs: samsungRepairs, specs: { screen: '6.8"', chip: 'Snapdragon 8 Gen 3', notes: 'Titanium, S Pen' } },
  { slug: 'samsung-s24-plus', name: 'Samsung Galaxy S24+', brand: 'samsung', releaseYear: 2024, popular: true, repairSlugs: samsungRepairs, specs: { screen: '6.7"', chip: 'Snapdragon 8 Gen 3' } },
  { slug: 'samsung-s24', name: 'Samsung Galaxy S24', brand: 'samsung', releaseYear: 2024, popular: true, repairSlugs: samsungRepairs, specs: { screen: '6.2"', chip: 'Snapdragon 8 Gen 3' } },
  { slug: 'samsung-s23-ultra', name: 'Samsung Galaxy S23 Ultra', brand: 'samsung', releaseYear: 2023, popular: true, repairSlugs: samsungRepairs, specs: { screen: '6.8"', chip: 'Snapdragon 8 Gen 2' } },
  { slug: 'samsung-s23-plus', name: 'Samsung Galaxy S23+', brand: 'samsung', releaseYear: 2023, popular: false, repairSlugs: samsungRepairs, specs: { screen: '6.6"', chip: 'Snapdragon 8 Gen 2' } },
  { slug: 'samsung-s23', name: 'Samsung Galaxy S23', brand: 'samsung', releaseYear: 2023, popular: true, repairSlugs: samsungRepairs, specs: { screen: '6.1"', chip: 'Snapdragon 8 Gen 2' } },
  { slug: 'samsung-s22-ultra', name: 'Samsung Galaxy S22 Ultra', brand: 'samsung', releaseYear: 2022, popular: false, repairSlugs: samsungRepairs, specs: { screen: '6.8"', chip: 'Snapdragon 8 Gen 1' } },
  { slug: 'samsung-s22-plus', name: 'Samsung Galaxy S22+', brand: 'samsung', releaseYear: 2022, popular: false, repairSlugs: samsungRepairs, specs: { screen: '6.6"', chip: 'Snapdragon 8 Gen 1' } },
  { slug: 'samsung-s22', name: 'Samsung Galaxy S22', brand: 'samsung', releaseYear: 2022, popular: false, repairSlugs: samsungRepairs, specs: { screen: '6.1"', chip: 'Snapdragon 8 Gen 1' } },
  { slug: 'samsung-z-fold-6', name: 'Samsung Galaxy Z Fold 6', brand: 'samsung', releaseYear: 2024, popular: true, repairSlugs: samsungRepairs, specs: { screen: '7.6" inner / 6.3" outer', chip: 'Snapdragon 8 Gen 3', notes: 'Foldable' } },
  { slug: 'samsung-z-fold-5', name: 'Samsung Galaxy Z Fold 5', brand: 'samsung', releaseYear: 2023, popular: false, repairSlugs: samsungRepairs, specs: { screen: '7.6" inner', chip: 'Snapdragon 8 Gen 2', notes: 'Foldable' } },
  { slug: 'samsung-z-flip-6', name: 'Samsung Galaxy Z Flip 6', brand: 'samsung', releaseYear: 2024, popular: true, repairSlugs: samsungRepairs, specs: { screen: '6.7"', chip: 'Snapdragon 8 Gen 3', notes: 'Flip foldable' } },
  { slug: 'samsung-z-flip-5', name: 'Samsung Galaxy Z Flip 5', brand: 'samsung', releaseYear: 2023, popular: false, repairSlugs: samsungRepairs, specs: { screen: '6.7"', chip: 'Snapdragon 8 Gen 2', notes: 'Flip foldable' } },
  { slug: 'samsung-a55', name: 'Samsung Galaxy A55', brand: 'samsung', releaseYear: 2024, popular: false, repairSlugs: samsungRepairs, specs: { screen: '6.6"', chip: 'Exynos 1480' } },
  { slug: 'samsung-a54', name: 'Samsung Galaxy A54', brand: 'samsung', releaseYear: 2023, popular: false, repairSlugs: samsungRepairs, specs: { screen: '6.4"', chip: 'Exynos 1380' } },
  { slug: 'samsung-a35', name: 'Samsung Galaxy A35', brand: 'samsung', releaseYear: 2024, popular: false, repairSlugs: samsungRepairs, specs: { screen: '6.6"', chip: 'Exynos 1380' } },
  { slug: 'samsung-a25', name: 'Samsung Galaxy A25', brand: 'samsung', releaseYear: 2024, popular: false, repairSlugs: samsungRepairs, specs: { screen: '6.5"', chip: 'Exynos 1280' } },
  { slug: 'samsung-a15', name: 'Samsung Galaxy A15', brand: 'samsung', releaseYear: 2023, popular: false, repairSlugs: samsungRepairs, specs: { screen: '6.5"', chip: 'Dimensity 6100+' } },

  // ─── GOOGLE PIXEL ─────────────────────────────────────────────────
  { slug: 'pixel-10-pro-xl', name: 'Google Pixel 10 Pro XL', brand: 'pixel', releaseYear: 2025, popular: true, repairSlugs: pixelRepairs, specs: { screen: '6.8"', chip: 'Google Tensor G5', notes: 'Pro camera system' } },
  { slug: 'pixel-10-pro-fold', name: 'Google Pixel 10 Pro Fold', brand: 'pixel', releaseYear: 2025, popular: true, repairSlugs: pixelRepairs, specs: { screen: '8.0" inner / 6.3" outer', chip: 'Google Tensor G5', notes: 'Foldable' } },
  { slug: 'pixel-10-pro', name: 'Google Pixel 10 Pro', brand: 'pixel', releaseYear: 2025, popular: true, repairSlugs: pixelRepairs, specs: { screen: '6.3"', chip: 'Google Tensor G5' } },
  { slug: 'pixel-10', name: 'Google Pixel 10', brand: 'pixel', releaseYear: 2025, popular: true, repairSlugs: pixelRepairs, specs: { screen: '6.3"', chip: 'Google Tensor G5' } },
  { slug: 'pixel-10a', name: 'Google Pixel 10a', brand: 'pixel', releaseYear: 2026, popular: false, repairSlugs: pixelRepairs, specs: { screen: '6.1"', chip: 'Google Tensor G5', notes: 'Budget Pixel' } },
  { slug: 'pixel-9-pro-xl', name: 'Google Pixel 9 Pro XL', brand: 'pixel', releaseYear: 2024, popular: true, repairSlugs: pixelRepairs, specs: { screen: '6.8"', chip: 'Google Tensor G4' } },
  { slug: 'pixel-9-pro-fold', name: 'Google Pixel 9 Pro Fold', brand: 'pixel', releaseYear: 2024, popular: true, repairSlugs: pixelRepairs, specs: { screen: '8.0" inner', chip: 'Google Tensor G4', notes: 'Foldable' } },
  { slug: 'pixel-9-pro', name: 'Google Pixel 9 Pro', brand: 'pixel', releaseYear: 2024, popular: true, repairSlugs: pixelRepairs, specs: { screen: '6.3"', chip: 'Google Tensor G4' } },
  { slug: 'pixel-9', name: 'Google Pixel 9', brand: 'pixel', releaseYear: 2024, popular: true, repairSlugs: pixelRepairs, specs: { screen: '6.3"', chip: 'Google Tensor G4' } },
  { slug: 'pixel-9a', name: 'Google Pixel 9a', brand: 'pixel', releaseYear: 2025, popular: false, repairSlugs: pixelRepairs, specs: { screen: '6.1"', chip: 'Google Tensor G4' } },
  { slug: 'pixel-8-pro', name: 'Google Pixel 8 Pro', brand: 'pixel', releaseYear: 2023, popular: true, repairSlugs: pixelRepairs, specs: { screen: '6.7"', chip: 'Google Tensor G3' } },
  { slug: 'pixel-8', name: 'Google Pixel 8', brand: 'pixel', releaseYear: 2023, popular: true, repairSlugs: pixelRepairs, specs: { screen: '6.2"', chip: 'Google Tensor G3' } },
  { slug: 'pixel-7-pro', name: 'Google Pixel 7 Pro', brand: 'pixel', releaseYear: 2022, popular: false, repairSlugs: pixelRepairs, specs: { screen: '6.7"', chip: 'Google Tensor G2' } },
  { slug: 'pixel-7', name: 'Google Pixel 7', brand: 'pixel', releaseYear: 2022, popular: false, repairSlugs: pixelRepairs, specs: { screen: '6.3"', chip: 'Google Tensor G2' } },
  { slug: 'pixel-6a', name: 'Google Pixel 6a', brand: 'pixel', releaseYear: 2022, popular: false, repairSlugs: pixelRepairs, specs: { screen: '6.1"', chip: 'Google Tensor G1' } },

  // ─── iPAD ─────────────────────────────────────────────────────────
  { slug: 'ipad-pro-13-m5', name: 'iPad Pro 13" M5', brand: 'ipad', releaseYear: 2025, popular: true, repairSlugs: ipadRepairs, specs: { screen: '13"', chip: 'M5', notes: 'OLED Tandem display' } },
  { slug: 'ipad-pro-11-m5', name: 'iPad Pro 11" M5', brand: 'ipad', releaseYear: 2025, popular: true, repairSlugs: ipadRepairs, specs: { screen: '11"', chip: 'M5', notes: 'OLED Tandem display' } },
  { slug: 'ipad-air-13-m4', name: 'iPad Air 13" M4', brand: 'ipad', releaseYear: 2026, popular: true, repairSlugs: ipadRepairs, specs: { screen: '13"', chip: 'M4' } },
  { slug: 'ipad-air-11-m4', name: 'iPad Air 11" M4', brand: 'ipad', releaseYear: 2026, popular: true, repairSlugs: ipadRepairs, specs: { screen: '11"', chip: 'M4' } },
  { slug: 'ipad-pro-13-m4', name: 'iPad Pro 13" M4', brand: 'ipad', releaseYear: 2024, popular: true, repairSlugs: ipadRepairs, specs: { screen: '13"', chip: 'M4' } },
  { slug: 'ipad-pro-11-m4', name: 'iPad Pro 11" M4', brand: 'ipad', releaseYear: 2024, popular: true, repairSlugs: ipadRepairs, specs: { screen: '11"', chip: 'M4' } },
  { slug: 'ipad-air-13-m2', name: 'iPad Air 13" M2', brand: 'ipad', releaseYear: 2024, popular: false, repairSlugs: ipadRepairs, specs: { screen: '13"', chip: 'M2' } },
  { slug: 'ipad-air-11-m2', name: 'iPad Air 11" M2', brand: 'ipad', releaseYear: 2024, popular: false, repairSlugs: ipadRepairs, specs: { screen: '11"', chip: 'M2' } },
  { slug: 'ipad-mini-7', name: 'iPad Mini 7', brand: 'ipad', releaseYear: 2024, popular: false, repairSlugs: ipadRepairs, specs: { screen: '8.3"', chip: 'A17 Pro' } },
  { slug: 'ipad-11th-gen', name: 'iPad 11th Gen', brand: 'ipad', releaseYear: 2025, popular: true, repairSlugs: ipadRepairs, specs: { screen: '10.9"', chip: 'A16 Bionic' } },
  { slug: 'ipad-10th-gen', name: 'iPad 10th Gen', brand: 'ipad', releaseYear: 2022, popular: true, repairSlugs: ipadRepairs, specs: { screen: '10.9"', chip: 'A14 Bionic' } },
  { slug: 'ipad-9th-gen', name: 'iPad 9th Gen', brand: 'ipad', releaseYear: 2021, popular: true, repairSlugs: ipadRepairs, specs: { screen: '10.2"', chip: 'A13 Bionic', notes: 'Touch ID' } },
  { slug: 'ipad-mini-6', name: 'iPad Mini 6', brand: 'ipad', releaseYear: 2021, popular: false, repairSlugs: ipadRepairs, specs: { screen: '8.3"', chip: 'A15 Bionic' } },

  // ─── MacBOOK ──────────────────────────────────────────────────────
  { slug: 'macbook-air-15-m5', name: 'MacBook Air 15" M5', brand: 'macbook', releaseYear: 2026, popular: true, repairSlugs: macbookRepairs, specs: { screen: '15.3"', chip: 'Apple M5' } },
  { slug: 'macbook-air-13-m5', name: 'MacBook Air 13" M5', brand: 'macbook', releaseYear: 2026, popular: true, repairSlugs: macbookRepairs, specs: { screen: '13.6"', chip: 'Apple M5' } },
  { slug: 'macbook-pro-16-m5-max', name: 'MacBook Pro 16" M5 Max', brand: 'macbook', releaseYear: 2026, popular: true, repairSlugs: macbookRepairs, specs: { screen: '16.2"', chip: 'Apple M5 Max' } },
  { slug: 'macbook-pro-16-m5-pro', name: 'MacBook Pro 16" M5 Pro', brand: 'macbook', releaseYear: 2026, popular: true, repairSlugs: macbookRepairs, specs: { screen: '16.2"', chip: 'Apple M5 Pro' } },
  { slug: 'macbook-pro-14-m5-max', name: 'MacBook Pro 14" M5 Max', brand: 'macbook', releaseYear: 2026, popular: false, repairSlugs: macbookRepairs, specs: { screen: '14.2"', chip: 'Apple M5 Max' } },
  { slug: 'macbook-pro-14-m5-pro', name: 'MacBook Pro 14" M5 Pro', brand: 'macbook', releaseYear: 2026, popular: true, repairSlugs: macbookRepairs, specs: { screen: '14.2"', chip: 'Apple M5 Pro' } },
  { slug: 'macbook-pro-14-m5', name: 'MacBook Pro 14" M5', brand: 'macbook', releaseYear: 2025, popular: true, repairSlugs: macbookRepairs, specs: { screen: '14.2"', chip: 'Apple M5' } },
  { slug: 'macbook-neo', name: 'MacBook Neo', brand: 'macbook', releaseYear: 2026, popular: false, repairSlugs: macbookRepairs, specs: { screen: '13"', chip: 'Apple M5', notes: 'Entry-level $599' } },
  { slug: 'macbook-air-15-m4', name: 'MacBook Air 15" M4', brand: 'macbook', releaseYear: 2025, popular: true, repairSlugs: macbookRepairs, specs: { screen: '15.3"', chip: 'Apple M4' } },
  { slug: 'macbook-air-13-m4', name: 'MacBook Air 13" M4', brand: 'macbook', releaseYear: 2025, popular: true, repairSlugs: macbookRepairs, specs: { screen: '13.6"', chip: 'Apple M4' } },
  { slug: 'macbook-air-15-m3', name: 'MacBook Air 15" M3', brand: 'macbook', releaseYear: 2024, popular: false, repairSlugs: macbookRepairs, specs: { screen: '15.3"', chip: 'Apple M3' } },
  { slug: 'macbook-air-13-m3', name: 'MacBook Air 13" M3', brand: 'macbook', releaseYear: 2024, popular: false, repairSlugs: macbookRepairs, specs: { screen: '13.6"', chip: 'Apple M3' } },
  { slug: 'macbook-air-m2', name: 'MacBook Air 13" M2', brand: 'macbook', releaseYear: 2022, popular: true, repairSlugs: macbookRepairs, specs: { screen: '13.6"', chip: 'Apple M2' } },
  { slug: 'macbook-air-m1', name: 'MacBook Air 13" M1', brand: 'macbook', releaseYear: 2020, popular: false, repairSlugs: macbookRepairs, specs: { screen: '13.3"', chip: 'Apple M1' } },
  { slug: 'macbook-pro-16-m4-max', name: 'MacBook Pro 16" M4 Max', brand: 'macbook', releaseYear: 2024, popular: true, repairSlugs: macbookRepairs, specs: { screen: '16.2"', chip: 'Apple M4 Max' } },
  { slug: 'macbook-pro-16-m4-pro', name: 'MacBook Pro 16" M4 Pro', brand: 'macbook', releaseYear: 2024, popular: true, repairSlugs: macbookRepairs, specs: { screen: '16.2"', chip: 'Apple M4 Pro' } },
  { slug: 'macbook-pro-14-m4-max', name: 'MacBook Pro 14" M4 Max', brand: 'macbook', releaseYear: 2024, popular: false, repairSlugs: macbookRepairs, specs: { screen: '14.2"', chip: 'Apple M4 Max' } },
  { slug: 'macbook-pro-14-m4-pro', name: 'MacBook Pro 14" M4 Pro', brand: 'macbook', releaseYear: 2024, popular: false, repairSlugs: macbookRepairs, specs: { screen: '14.2"', chip: 'Apple M4 Pro' } },
  { slug: 'macbook-pro-14-m4', name: 'MacBook Pro 14" M4', brand: 'macbook', releaseYear: 2024, popular: false, repairSlugs: macbookRepairs, specs: { screen: '14.2"', chip: 'Apple M4' } },
  { slug: 'macbook-pro-16-m3-pro', name: 'MacBook Pro 16" M3 Pro', brand: 'macbook', releaseYear: 2023, popular: false, repairSlugs: macbookRepairs, specs: { screen: '16.2"', chip: 'Apple M3 Pro' } },
  { slug: 'macbook-pro-16-m3-max', name: 'MacBook Pro 16" M3 Max', brand: 'macbook', releaseYear: 2023, popular: false, repairSlugs: macbookRepairs, specs: { screen: '16.2"', chip: 'Apple M3 Max' } },
  { slug: 'macbook-pro-14-m3-pro', name: 'MacBook Pro 14" M3 Pro', brand: 'macbook', releaseYear: 2023, popular: false, repairSlugs: macbookRepairs, specs: { screen: '14.2"', chip: 'Apple M3 Pro' } },
  { slug: 'macbook-pro-13-m2', name: 'MacBook Pro 13" M2', brand: 'macbook', releaseYear: 2022, popular: false, repairSlugs: macbookRepairs, specs: { screen: '13.3"', chip: 'Apple M2' } },
  { slug: 'macbook-pro-13-m1', name: 'MacBook Pro 13" M1', brand: 'macbook', releaseYear: 2020, popular: false, repairSlugs: macbookRepairs, specs: { screen: '13.3"', chip: 'Apple M1' } },
];

export function getModelBySlug(slug: string): DeviceModel | undefined {
  return models.find(m => m.slug === slug);
}

export function getModelsByBrand(brand: string): DeviceModel[] {
  return models.filter(m => m.brand === brand);
}

export function getPopularModels(brand?: string): DeviceModel[] {
  return models.filter(m => m.popular && (brand ? m.brand === brand : true));
}
