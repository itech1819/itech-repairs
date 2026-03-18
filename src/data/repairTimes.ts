import type { RepairTimeEntry, DeviceCategory } from '@/types'

export const DEFAULT_REPAIR_TIMES: Record<DeviceCategory, Record<string, { minutes: number; display: string; sameDay: boolean }>> = {
  iphone: {
    'screen-repair': { minutes: 20, display: '15–20 minutes', sameDay: true },
    'screen-replacement': { minutes: 20, display: '15–20 minutes', sameDay: true },
    'battery-replacement': { minutes: 20, display: '15–20 minutes', sameDay: true },
    'charging-port-repair': { minutes: 20, display: '15–20 minutes', sameDay: true },
    'charging-port-replacement': { minutes: 20, display: '15–20 minutes', sameDay: true },
    'back-glass-repair': { minutes: 20, display: '15–20 minutes', sameDay: true },
    'back-cover-replacement': { minutes: 20, display: '15–20 minutes', sameDay: true },
    'camera-repair': { minutes: 20, display: '15–20 minutes', sameDay: true },
    'rear-camera-replacement': { minutes: 20, display: '15–20 minutes', sameDay: true },
    'front-camera-replacement': { minutes: 20, display: '15–20 minutes', sameDay: true },
    'camera-lens-replacement': { minutes: 20, display: '15–20 minutes', sameDay: true },
    'speaker-repair': { minutes: 20, display: '15–20 minutes', sameDay: true },
    'loudspeaker-replacement': { minutes: 20, display: '15–20 minutes', sameDay: true },
    'earpiece-replacement': { minutes: 20, display: '15–20 minutes', sameDay: true },
    'microphone-replacement': { minutes: 20, display: '15–20 minutes', sameDay: true },
    'volume-button-replacement': { minutes: 20, display: '15–20 minutes', sameDay: true },
    'power-button-replacement': { minutes: 20, display: '15–20 minutes', sameDay: true },
    'vibrator-replacement': { minutes: 20, display: '15–20 minutes', sameDay: true },
    'proximity-sensor-replacement': { minutes: 20, display: '15–20 minutes', sameDay: true },
    'face-id-repair': { minutes: 20, display: '15–20 minutes', sameDay: true },
    'touch-screen-repair': { minutes: 20, display: '15–20 minutes', sameDay: true },
    'ghost-touch-repair': { minutes: 20, display: '15–20 minutes', sameDay: true },
    'sim-card-reader-replacement': { minutes: 20, display: '15–20 minutes', sameDay: true },
    'water-damage-repair': { minutes: 180, display: '2–4 hours', sameDay: true },
    'water-damage-assessment': { minutes: 20, display: '15–20 minutes', sameDay: true },
    'data-recovery': { minutes: 240, display: '2–24 hours', sameDay: false },
    'motherboard-repair': { minutes: 480, display: '1–3 days', sameDay: false },
    'diagnostic': { minutes: 15, display: 'Free — 10–15 minutes', sameDay: true },
    'insurance-report': { minutes: 30, display: '24–48 hours', sameDay: false },
    'inspection': { minutes: 15, display: 'Free — 10–15 minutes', sameDay: true },
    default: { minutes: 20, display: '15–20 minutes', sameDay: true },
  },
  samsung: {
    'screen-repair': { minutes: 20, display: '15–20 minutes', sameDay: true },
    'screen-replacement': { minutes: 20, display: '15–20 minutes', sameDay: true },
    'battery-replacement': { minutes: 20, display: '15–20 minutes', sameDay: true },
    'charging-port-repair': { minutes: 20, display: '15–20 minutes', sameDay: true },
    'water-damage-repair': { minutes: 180, display: '2–4 hours', sameDay: true },
    'data-recovery': { minutes: 240, display: '2–24 hours', sameDay: false },
    'diagnostic': { minutes: 15, display: 'Free — 10–15 minutes', sameDay: true },
    'inspection': { minutes: 15, display: 'Free — 10–15 minutes', sameDay: true },
    default: { minutes: 20, display: '15–20 minutes', sameDay: true },
  },
  pixel: {
    'screen-repair': { minutes: 20, display: '15–20 minutes', sameDay: true },
    'battery-replacement': { minutes: 20, display: '15–20 minutes', sameDay: true },
    'charging-port-repair': { minutes: 20, display: '15–20 minutes', sameDay: true },
    'water-damage-repair': { minutes: 180, display: '2–4 hours', sameDay: true },
    'diagnostic': { minutes: 15, display: 'Free — 10–15 minutes', sameDay: true },
    'inspection': { minutes: 15, display: 'Free — 10–15 minutes', sameDay: true },
    default: { minutes: 20, display: '15–20 minutes', sameDay: true },
  },
  ipad: {
    'screen-repair': { minutes: 90, display: '60–90 minutes', sameDay: true },
    'battery-replacement': { minutes: 60, display: '45–60 minutes', sameDay: true },
    'water-damage-repair': { minutes: 240, display: '2–4 hours', sameDay: true },
    'diagnostic': { minutes: 15, display: 'Free — 10–15 minutes', sameDay: true },
    'inspection': { minutes: 15, display: 'Free — 10–15 minutes', sameDay: true },
    default: { minutes: 90, display: 'Same day', sameDay: true },
  },
  macbook: {
    'screen-repair': { minutes: 120, display: '1–2 hours', sameDay: true },
    'screen-replacement': { minutes: 120, display: '1–2 hours', sameDay: true },
    'battery-replacement': { minutes: 90, display: '60–90 minutes', sameDay: true },
    'keyboard-replacement': { minutes: 120, display: '1–2 hours', sameDay: true },
    'water-damage-repair': { minutes: 480, display: '1–3 days', sameDay: false },
    'data-recovery': { minutes: 480, display: '1–3 days', sameDay: false },
    'ssd-upgrade': { minutes: 120, display: '1–2 hours', sameDay: true },
    'diagnostic': { minutes: 30, display: 'Free — 20–30 minutes', sameDay: true },
    'inspection': { minutes: 30, display: 'Free — 20–30 minutes', sameDay: true },
    default: { minutes: 120, display: 'Same day', sameDay: true },
  },
}

export function getRepairTime(category: DeviceCategory, repairSlug: string): { minutes: number; display: string; sameDay: boolean } {
  const categoryTimes = DEFAULT_REPAIR_TIMES[category]
  return categoryTimes[repairSlug] ?? categoryTimes['default'] ?? { minutes: 20, display: '15–20 minutes', sameDay: true }
}

export const repairTimeEntries: RepairTimeEntry[] = []
