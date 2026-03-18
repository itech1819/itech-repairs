// ─────────────────────────────────────────────────────────────────────────────
// Device Problem Pages — Data Layer
//
// URL pattern: /help/{device}/{problem}
// Example:     /help/iphone-14/stuck-on-apple-logo
//
// These pages target model-specific long-tail searches and funnel users into
// existing core service pages. They do NOT replace or compete with existing
// generic problem pages (e.g. /iphone-stuck-on-apple-logo-repair-melbourne).
// ─────────────────────────────────────────────────────────────────────────────

export interface ProblemDevice {
  slug: string
  displayName: string
  connector: 'lightning' | 'usb-c'
  hasOLED: boolean
  hasProMotion: boolean
  generation: number // release year
}

export interface DeviceProblemConfig {
  slug: string
  name: string
  pageTitle: (device: string) => string
  h1: (device: string) => string
  metaTitle: (device: string) => string
  metaDescription: (device: string) => string
  intro: (device: ProblemDevice) => string
  symptoms: string[]
  causes: (device: ProblemDevice) => string[]
  solutions: (device: ProblemDevice) => string[]
  urgency: 'critical' | 'high' | 'medium' | 'low'
  isDataRecoveryRisk: boolean
  repairPageSlug: string
  repairPageLabel: string
  secondaryRepairSlug?: string
  secondaryRepairLabel?: string
}

// ─── Approved Device List ────────────────────────────────────────────────────

export const PROBLEM_DEVICES: ProblemDevice[] = [
  { slug: 'iphone-11',          displayName: 'iPhone 11',          connector: 'lightning', hasOLED: false, hasProMotion: false, generation: 2019 },
  { slug: 'iphone-11-pro',      displayName: 'iPhone 11 Pro',      connector: 'lightning', hasOLED: true,  hasProMotion: false, generation: 2019 },
  { slug: 'iphone-11-pro-max',  displayName: 'iPhone 11 Pro Max',  connector: 'lightning', hasOLED: true,  hasProMotion: false, generation: 2019 },
  { slug: 'iphone-12',          displayName: 'iPhone 12',          connector: 'lightning', hasOLED: true,  hasProMotion: false, generation: 2020 },
  { slug: 'iphone-12-mini',     displayName: 'iPhone 12 mini',     connector: 'lightning', hasOLED: true,  hasProMotion: false, generation: 2020 },
  { slug: 'iphone-12-pro',      displayName: 'iPhone 12 Pro',      connector: 'lightning', hasOLED: true,  hasProMotion: false, generation: 2020 },
  { slug: 'iphone-12-pro-max',  displayName: 'iPhone 12 Pro Max',  connector: 'lightning', hasOLED: true,  hasProMotion: false, generation: 2020 },
  { slug: 'iphone-13',          displayName: 'iPhone 13',          connector: 'lightning', hasOLED: true,  hasProMotion: false, generation: 2021 },
  { slug: 'iphone-13-mini',     displayName: 'iPhone 13 mini',     connector: 'lightning', hasOLED: true,  hasProMotion: false, generation: 2021 },
  { slug: 'iphone-13-pro',      displayName: 'iPhone 13 Pro',      connector: 'lightning', hasOLED: true,  hasProMotion: true,  generation: 2021 },
  { slug: 'iphone-13-pro-max',  displayName: 'iPhone 13 Pro Max',  connector: 'lightning', hasOLED: true,  hasProMotion: true,  generation: 2021 },
  { slug: 'iphone-14',          displayName: 'iPhone 14',          connector: 'lightning', hasOLED: true,  hasProMotion: false, generation: 2022 },
  { slug: 'iphone-14-plus',     displayName: 'iPhone 14 Plus',     connector: 'lightning', hasOLED: true,  hasProMotion: false, generation: 2022 },
  { slug: 'iphone-14-pro',      displayName: 'iPhone 14 Pro',      connector: 'lightning', hasOLED: true,  hasProMotion: true,  generation: 2022 },
  { slug: 'iphone-14-pro-max',  displayName: 'iPhone 14 Pro Max',  connector: 'lightning', hasOLED: true,  hasProMotion: true,  generation: 2022 },
  { slug: 'iphone-15',          displayName: 'iPhone 15',          connector: 'usb-c',     hasOLED: true,  hasProMotion: false, generation: 2023 },
  { slug: 'iphone-15-plus',     displayName: 'iPhone 15 Plus',     connector: 'usb-c',     hasOLED: true,  hasProMotion: false, generation: 2023 },
  { slug: 'iphone-15-pro',      displayName: 'iPhone 15 Pro',      connector: 'usb-c',     hasOLED: true,  hasProMotion: true,  generation: 2023 },
  { slug: 'iphone-15-pro-max',  displayName: 'iPhone 15 Pro Max',  connector: 'usb-c',     hasOLED: true,  hasProMotion: true,  generation: 2023 },
  { slug: 'iphone-16',          displayName: 'iPhone 16',          connector: 'usb-c',     hasOLED: true,  hasProMotion: false, generation: 2024 },
  { slug: 'iphone-16-plus',     displayName: 'iPhone 16 Plus',     connector: 'usb-c',     hasOLED: true,  hasProMotion: false, generation: 2024 },
  { slug: 'iphone-16-pro',      displayName: 'iPhone 16 Pro',      connector: 'usb-c',     hasOLED: true,  hasProMotion: true,  generation: 2024 },
  { slug: 'iphone-16-pro-max',  displayName: 'iPhone 16 Pro Max',  connector: 'usb-c',     hasOLED: true,  hasProMotion: true,  generation: 2024 },
  { slug: 'iphone-17',          displayName: 'iPhone 17',          connector: 'usb-c',     hasOLED: true,  hasProMotion: false, generation: 2025 },
  { slug: 'iphone-17-plus',     displayName: 'iPhone 17 Plus',     connector: 'usb-c',     hasOLED: true,  hasProMotion: false, generation: 2025 },
  { slug: 'iphone-17-pro',      displayName: 'iPhone 17 Pro',      connector: 'usb-c',     hasOLED: true,  hasProMotion: true,  generation: 2025 },
  { slug: 'iphone-17-pro-max',  displayName: 'iPhone 17 Pro Max',  connector: 'usb-c',     hasOLED: true,  hasProMotion: true,  generation: 2025 },
]

// ─── Problem Definitions ─────────────────────────────────────────────────────

export const DEVICE_PROBLEMS: DeviceProblemConfig[] = [
  {
    slug: 'stuck-on-apple-logo',
    name: 'Stuck on Apple Logo',
    pageTitle: (d) => `${d} Stuck on Apple Logo`,
    h1: (d) => `${d} Stuck on Apple Logo?`,
    metaTitle: (d) => `${d} Stuck on Apple Logo? | Fast Repair Melbourne | iTech Repairs`,
    metaDescription: (d) => `Is your ${d} stuck on the Apple logo and won't load into iOS? iTech Repairs Melbourne diagnoses and fixes boot issues same day. Walk in to Braybrook or Spotswood — no appointment needed.`,
    intro: (dev) => `If your ${dev.displayName} is stuck on the Apple logo and won't progress past the startup screen, it's a sign something has gone wrong during the boot process. This can happen after a software update fails, after your phone runs out of battery at a critical moment, or following a hardware fault. In many cases this is fixable without data loss — but it needs to be assessed quickly to avoid permanent storage corruption.`,
    symptoms: [
      'Apple logo appears on screen but iOS never fully loads',
      'Phone restarts repeatedly and gets stuck at the same point',
      'Screen goes black briefly then returns to the Apple logo',
      'Device becomes hot during repeated restart attempts',
      'Phone unresponsive to button presses after extended boot attempts',
    ],
    causes: (dev) => [
      'Failed or interrupted iOS software update',
      'Corrupted system partition or filesystem error',
      dev.generation >= 2020 ? 'NAND flash storage fault (common after drops or water exposure)' : 'NAND flash or storage chip failure',
      'Logic board fault triggered by physical impact',
      'Battery voltage instability causing shutdown during boot',
      'Third-party app or jailbreak conflict (rare on stock iOS)',
    ],
    solutions: (dev) => [
      `Force restart your ${dev.displayName} — hold Side + Volume Down for 10 seconds (free, try this first)`,
      'Recovery Mode restore via iTunes or Finder on a Mac/PC',
      'DFU Mode restore — deeper recovery for persistent boot loops',
      'NAND flash repair or logic board diagnostics if software restore fails',
      dev.generation >= 2020 ? 'Data recovery service available if device is not restorable' : 'Professional data extraction if restore wipes data',
    ],
    urgency: 'high',
    isDataRecoveryRisk: true,
    repairPageSlug: '/iphone-stuck-on-apple-logo-repair-melbourne',
    repairPageLabel: 'Book Apple Logo Fix',
    secondaryRepairSlug: '/iphone-data-recovery',
    secondaryRepairLabel: 'iPhone Data Recovery',
  },
  {
    slug: 'boot-loop',
    name: 'Boot Loop',
    pageTitle: (d) => `${d} Boot Loop`,
    h1: (d) => `${d} Keeps Restarting? (Boot Loop Fix)`,
    metaTitle: (d) => `${d} Boot Loop Repair Melbourne | Keeps Restarting Fix | iTech Repairs`,
    metaDescription: (d) => `${d} stuck in a boot loop or keeps restarting randomly? iTech Repairs Melbourne provides same-day diagnosis and repair. Cheapest price guaranteed. Walk in — no appointment needed.`,
    intro: (dev) => `A boot loop occurs when your ${dev.displayName} restarts continuously without successfully loading iOS. Unlike a simple crash, boot loops can persist indefinitely and may indicate either a software problem or an underlying hardware fault. The earlier this is diagnosed, the more likely your data can be preserved.`,
    symptoms: [
      'Phone restarts on its own repeatedly throughout the day',
      'Restart cycle begins during the Apple logo screen',
      'Device crashes immediately on reaching the lock screen',
      'Restarting every few minutes even when idle',
      'Battery drains rapidly due to continuous restart cycles',
    ],
    causes: (dev) => [
      'Corrupted iOS installation from a failed update or restore',
      dev.generation >= 2022 ? 'Thermal shutdown loop caused by overheating processor or battery' : 'Overheating causing thermal shutdown and restart cycle',
      'Battery delivering insufficient or unstable voltage',
      'Logic board fault — damaged power management IC',
      'Water damage causing intermittent hardware failure',
      'Low storage space preventing iOS from completing boot',
    ],
    solutions: (dev) => [
      `Force restart: hold Side + Volume Down on your ${dev.displayName} for at least 10 seconds`,
      'Free up storage if device was nearly full before the loop started',
      'Recovery Mode restore via iTunes or Finder (may cause data loss)',
      dev.connector === 'usb-c' ? 'USB-C logic board diagnostics for persistent hardware-triggered loops' : 'Lightning port and power rail diagnostics',
      'Battery replacement if power instability is confirmed as cause',
      'Data recovery extraction before performing any restore',
    ],
    urgency: 'high',
    isDataRecoveryRisk: true,
    repairPageSlug: '/iphone-boot-loop-repair-melbourne',
    repairPageLabel: 'Book Boot Loop Repair',
    secondaryRepairSlug: '/iphone-data-recovery',
    secondaryRepairLabel: 'iPhone Data Recovery',
  },
  {
    slug: 'not-charging',
    name: 'Not Charging',
    pageTitle: (d) => `${d} Not Charging`,
    h1: (d) => `${d} Not Charging?`,
    metaTitle: (d) => `${d} Not Charging? | Charging Port Repair Melbourne | iTech Repairs`,
    metaDescription: (d) => `${d} won't charge or charges very slowly? iTech Repairs Melbourne cleans ports, replaces charging components and fixes charging IC faults. Walk in same day — cheapest price guaranteed.`,
    intro: (dev) => `If your ${dev.displayName} isn't charging, charges intermittently, or only charges when held at a specific angle, the problem is almost always fixable. The most common cause is a blocked or damaged ${dev.connector === 'usb-c' ? 'USB-C port' : 'Lightning port'} — lint and debris accumulate in the connector over time and prevent the cable from making proper contact. In most cases we can resolve this in under 15 minutes.`,
    symptoms: [
      'Phone shows no charging indicator when plugged in',
      'Charges only when cable is held at an exact angle',
      'Charges very slowly compared to normal',
      'Charging stops and starts repeatedly',
      '"This accessory may not be supported" message on connection',
      'Battery percentage doesn\'t increase despite being plugged in',
    ],
    causes: (dev) => [
      `${dev.connector === 'usb-c' ? 'USB-C port' : 'Lightning port'} blocked with lint, pocket debris, or dust`,
      `Damaged or bent ${dev.connector === 'usb-c' ? 'USB-C' : 'Lightning'} connector pins from forced cable insertion`,
      'Faulty or non-certified charging cable or adapter',
      'Degraded battery that no longer accepts charge',
      'Charging IC chip failure on the logic board',
      dev.generation >= 2015 ? 'PMIC (Power Management IC) fault on logic board' : 'Power management fault',
      'Water or moisture damage to charging circuitry',
    ],
    solutions: (dev) => [
      `Port cleaning — free, and resolves the majority of ${dev.displayName} charging issues`,
      `${dev.connector === 'usb-c' ? 'USB-C' : 'Lightning'} port replacement if port is physically damaged`,
      'Battery replacement if battery is degraded and no longer charges',
      'Logic board repair — charging IC or PMIC micro-soldering',
      'Try a certified Apple cable and adapter before visiting — non-genuine accessories often cause charging failures',
    ],
    urgency: 'medium',
    isDataRecoveryRisk: false,
    repairPageSlug: '/iphone-charging-port-repair',
    repairPageLabel: 'Book Charging Port Repair',
    secondaryRepairSlug: '/iphone-battery-replacement',
    secondaryRepairLabel: 'iPhone Battery Replacement',
  },
  {
    slug: 'water-damage',
    name: 'Water Damage',
    pageTitle: (d) => `${d} Water Damage`,
    h1: (d) => `${d} Water Damaged?`,
    metaTitle: (d) => `${d} Water Damage Repair Melbourne | Emergency Service | iTech Repairs`,
    metaDescription: (d) => `Dropped your ${d} in water? Act fast — bring it to iTech Repairs in Braybrook or Spotswood immediately. Emergency water damage treatment available same day. Don't charge it first.`,
    intro: (dev) => `Water damage is a time-critical emergency for your ${dev.displayName}. ${dev.generation >= 2019 ? `Although the ${dev.displayName} carries an IP water resistance rating, this does not make it waterproof — the resistance degrades with age, and saltwater, chlorinated water, and drops from height can overwhelm the seals entirely.` : `The ${dev.displayName} has limited water resistance, and any liquid exposure should be treated as an emergency.`} The most important rule: do not attempt to charge your phone or turn it on after water exposure — this is the leading cause of permanent circuit damage from water.`,
    symptoms: [
      'Phone stopped working after contact with water, rain, or other liquid',
      'Screen showing strange colours, lines, or no image',
      'Speakers producing muffled or distorted sound',
      'Touch screen unresponsive or behaving erratically',
      'Red or pink liquid damage indicator inside the SIM tray slot',
      'Charging port corroding or showing green/white residue',
      'Phone working initially but developing faults hours or days later',
    ],
    causes: (dev) => [
      dev.generation >= 2019 ? 'IP water resistance seal failure due to age, previous repairs, or impact' : 'Liquid ingress through charging port, speaker grilles, or SIM tray',
      'Submersion beyond rated depth or duration',
      'Saltwater or chlorinated water (far more corrosive than fresh water)',
      'Condensation from humidity or temperature change',
      'Prior drop damage compromising the waterproof seals',
    ],
    solutions: () => [
      'Do NOT charge the phone or turn it on — bring it in immediately',
      'Emergency ultrasonic cleaning of the logic board to remove corrosion',
      'Component-level inspection and drying under controlled conditions',
      'Battery replacement (water-exposed batteries can swell dangerously)',
      'Charging port and speaker replacement if corroded',
      'Data recovery if device is too damaged to restore to working condition',
    ],
    urgency: 'critical',
    isDataRecoveryRisk: true,
    repairPageSlug: '/iphone-water-damage-repair',
    repairPageLabel: 'View Water Damage Repair',
    secondaryRepairSlug: '/iphone-data-recovery',
    secondaryRepairLabel: 'iPhone Data Recovery',
  },
  {
    slug: 'black-screen',
    name: 'Black Screen',
    pageTitle: (d) => `${d} Black Screen`,
    h1: (d) => `${d} Has a Black Screen?`,
    metaTitle: (d) => `${d} Black Screen Repair Melbourne | Same-Day Fix | iTech Repairs`,
    metaDescription: (d) => `${d} screen gone black but the phone is still on? iTech Repairs Melbourne diagnoses and fixes black screen faults same day. Walk in to Braybrook or Spotswood today.`,
    intro: (dev) => `A black screen on your ${dev.displayName} — especially when the phone still vibrates, makes sounds, or the camera flash responds — points to a display fault rather than a power issue. ${dev.hasOLED ? 'OLED displays used in the ' + dev.displayName + ' are sensitive to impact and can fail partially or completely after a drop, even without visible screen cracking.' : 'The LCD display in the ' + dev.displayName + ' can lose its backlight or fail entirely after a drop or liquid exposure.'} This is a highly fixable issue and in most cases takes under 30 minutes.`,
    symptoms: [
      'Screen is completely black but you can hear notifications or calls',
      'Phone vibrates when you press buttons but screen stays dark',
      'Screen flickers black before going completely dark',
      'Partial black area or black patch spreading across the screen',
      'Screen went black immediately after a drop',
    ],
    causes: (dev) => [
      `Damaged ${dev.hasOLED ? 'OLED' : 'LCD'} display panel from a drop or impact`,
      'Disconnected or damaged display ribbon cable',
      dev.generation >= 2022 ? 'Dynamic Island area damage affecting display signal' : 'Notch area damage affecting display flex cable routing',
      'Pressure damage from sitting on the phone in a pocket',
      'Water or moisture seeping into the display assembly',
      'Software crash (rare — phone completely unresponsive and no sounds)',
    ],
    solutions: (dev) => [
      `Force restart first: hold Side + Volume Down on your ${dev.displayName} for 10 seconds`,
      `${dev.hasOLED ? 'OLED' : 'LCD'} screen replacement — fixes the vast majority of black screen cases`,
      'Display connector reseating (sometimes resolves without full replacement)',
      'Full hardware diagnostic to rule out logic board contribution',
    ],
    urgency: 'high',
    isDataRecoveryRisk: false,
    repairPageSlug: '/iphone-screen-repair',
    repairPageLabel: 'Book Screen Repair',
  },
  {
    slug: 'screen-flickering',
    name: 'Screen Flickering',
    pageTitle: (d) => `${d} Screen Flickering`,
    h1: (d) => `${d} Screen Flickering or Flashing?`,
    metaTitle: (d) => `${d} Screen Flickering Repair Melbourne | iTech Repairs`,
    metaDescription: (d) => `${d} screen flickering, flashing, or showing lines? iTech Repairs Melbourne replaces faulty iPhone screens same day. Walk in today — cheapest price guaranteed, lifetime warranty.`,
    intro: (dev) => `Screen flickering on the ${dev.displayName} can range from a subtle flicker you notice in low light to a severe rapid flash that makes the phone unusable. ${dev.hasOLED ? `On OLED displays like those found in the ${dev.displayName}, flickering is often caused by panel degradation, a damaged display driver IC, or a partially disconnected flex cable.` : `On the LCD display in the ${dev.displayName}, flickering typically indicates a loose backlight connection or a failing display assembly.`} In some cases an iOS update can trigger display driver bugs, but hardware causes are more common when flickering persists after a software update.`,
    symptoms: [
      'Screen flashes or flickers rapidly, especially at certain brightness levels',
      'Horizontal or vertical lines appear across the screen',
      'Screen colour shifts or shows a tint that wasn\'t there before',
      'Flickering gets worse after the phone warms up',
      'Display normal for a while then suddenly starts flickering',
      `Flickering began after a drop or after getting wet`,
    ],
    causes: (dev) => [
      `Damaged or partially disconnected ${dev.hasOLED ? 'OLED' : 'LCD'} display ribbon cable`,
      'Display driver IC fault — component-level failure',
      dev.hasProMotion ? 'ProMotion 120Hz display panel developing pixel-row failure' : 'Display panel developing row-level failure',
      'Physical screen damage from drop — not always visible externally',
      'iOS software display driver bug (update iOS first and check)',
      'Third-party screen replacement with incompatible components',
    ],
    solutions: (dev) => [
      'Check for an iOS update — Apple occasionally releases fixes for display driver bugs',
      `Force restart your ${dev.displayName} to rule out a software-only glitch`,
      `${dev.hasOLED ? 'OLED' : 'LCD'} screen replacement with a quality replacement panel`,
      'Display connector reseating if cable has come loose',
      'Logic board diagnostics if screen replacement doesn\'t resolve the flicker',
    ],
    urgency: 'medium',
    isDataRecoveryRisk: false,
    repairPageSlug: '/iphone-screen-repair',
    repairPageLabel: 'Book Screen Repair',
  },
  {
    slug: 'touch-not-working',
    name: 'Touch Screen Not Working',
    pageTitle: (d) => `${d} Touch Not Working`,
    h1: (d) => `${d} Touch Screen Not Responding?`,
    metaTitle: (d) => `${d} Touch Screen Not Working | Repair Melbourne | iTech Repairs`,
    metaDescription: (d) => `${d} touchscreen unresponsive, ghost touching, or only working in parts? iTech Repairs Melbourne fixes touch issues same day. Walk in to Braybrook or Spotswood — no appointment needed.`,
    intro: (dev) => `Touch issues on the ${dev.displayName} — whether the screen is completely unresponsive, only works in certain areas, or registers phantom touches — are almost always caused by a damaged digitizer or display assembly. ${dev.generation >= 2020 ? 'Modern iPhone OLED panels integrate the digitizer directly into the display assembly, meaning touch failures typically require a full screen replacement.' : 'The touch digitizer in older iPhones can sometimes be repaired without replacing the entire display, though a full screen replacement is more reliable.'}`,
    symptoms: [
      'Touchscreen completely unresponsive to any input',
      'Screen registers touches in wrong locations (offset touch)',
      'Only part of the screen responds to touch',
      'Ghost touches — screen tapping on its own without user input',
      'Touch response delayed or requires excessive pressure',
      'Touch stopped working after a drop or screen crack',
    ],
    causes: (dev) => [
      `Damaged digitizer layer inside the ${dev.hasOLED ? 'OLED' : 'LCD'} screen assembly`,
      'Loose or damaged touch controller flex cable',
      'Physical impact causing internal digitizer fracture not visible externally',
      'Moisture trapped behind screen causing touch interference',
      dev.generation >= 2021 ? 'Third-party replacement screen with poorly calibrated touch IC' : 'Non-genuine screen replacement causing compatibility issues',
      'Logic board touch controller IC fault (less common)',
    ],
    solutions: (dev) => [
      `Force restart your ${dev.displayName} — hold Side + Volume Down for 10 seconds (sometimes resolves temporary touch freezes)`,
      `Screen replacement with a quality ${dev.hasOLED ? 'OLED' : 'LCD'} assembly including calibrated digitizer`,
      'Display connector inspection and reseating',
      'iOS update — check if Apple has issued a touch-related patch',
      'Logic board touch controller diagnostics if screen replacement doesn\'t resolve the issue',
    ],
    urgency: 'high',
    isDataRecoveryRisk: false,
    repairPageSlug: '/iphone-touch-screen-not-working-repair-melbourne',
    repairPageLabel: 'Book Touch Screen Repair',
  },
  {
    slug: 'battery-draining-fast',
    name: 'Battery Draining Fast',
    pageTitle: (d) => `${d} Battery Draining Fast`,
    h1: (d) => `${d} Battery Draining Too Fast?`,
    metaTitle: (d) => `${d} Battery Draining Fast | Battery Replacement Melbourne | iTech Repairs`,
    metaDescription: (d) => `${d} battery dying too quickly? iTech Repairs Melbourne replaces iPhone batteries same day from $69. Cheapest price guaranteed, lifetime warranty. Walk in to Braybrook or Spotswood.`,
    intro: (dev) => `All lithium-ion batteries degrade over time, and the ${dev.displayName} is no exception. Apple considers a battery at or above 80% capacity to be in normal condition — once it drops below this, you'll notice significantly faster drain, unexpected shutdowns, and throttled performance. ${dev.generation >= 2020 ? 'You can check your battery health directly in Settings → Battery → Battery Health & Charging.' : 'Battery health can be checked in Settings → Battery → Battery Health.'} If your battery health reads below 80%, replacement is recommended.`,
    symptoms: [
      'Battery drops from 100% to low in just a few hours with minimal use',
      'Phone shuts down unexpectedly at 10–30% battery',
      'Battery percentage jumps erratically (e.g., from 40% to 5% suddenly)',
      'Phone gets warm even during basic tasks like browsing',
      'Phone needs charging multiple times per day',
      'Battery health reading below 80% in Settings',
    ],
    causes: (dev) => [
      'Natural battery cell degradation from charge cycles (expected after 500+ cycles)',
      'Background app refresh and location services consuming excess power',
      dev.generation >= 2022 ? 'Always-on display (Pro models) contributing to faster drain if enabled unnecessarily' : 'Excessive screen brightness or always-on features',
      'Rogue app running constant background processes',
      'Cellular signal hunting in poor network areas draws heavy battery',
      'Battery swelling from heat exposure or physical damage',
    ],
    solutions: () => [
      'Check Settings → Battery → Battery Health — if below 80%, replacement is the fix',
      'Battery replacement — same-day service, from $69 at iTech Repairs',
      'Disable Background App Refresh for apps you don\'t need updated constantly',
      'Reduce screen brightness and enable Auto-Brightness',
      'Enable Low Power Mode temporarily to extend battery between charges',
      'Review per-app battery usage in Settings → Battery to identify rogue apps',
    ],
    urgency: 'low',
    isDataRecoveryRisk: false,
    repairPageSlug: '/iphone-battery-replacement',
    repairPageLabel: 'Book Battery Replacement',
  },
  {
    slug: 'overheating',
    name: 'Overheating',
    pageTitle: (d) => `${d} Overheating`,
    h1: (d) => `${d} Getting Too Hot?`,
    metaTitle: (d) => `${d} Overheating Fix Melbourne | iTech Repairs`,
    metaDescription: (d) => `${d} overheating or getting uncomfortably hot? iTech Repairs Melbourne diagnoses overheating faults same day. Free diagnostics, walk in to Braybrook or Spotswood.`,
    intro: (dev) => `It's normal for the ${dev.displayName} to get slightly warm during intensive tasks like video recording, gaming, or charging wirelessly. However, if your phone is becoming too hot to hold comfortably, showing an overheating warning, or getting hot during basic tasks, there's an underlying issue that needs attention. Persistent overheating can permanently damage your battery and — in severe cases — the logic board.`,
    symptoms: [
      'Phone becomes uncomfortable to hold due to heat',
      'Yellow or red "Temperature" warning appears on screen',
      'Phone suddenly dims the screen or throttles performance when hot',
      'Camera disabled with a temperature warning',
      'Gets hot even when idle or during simple tasks',
      'Battery depletes rapidly alongside overheating',
    ],
    causes: (dev) => [
      'Swollen or degraded battery generating excess heat during discharge',
      'Processor running at full load due to a rogue background process',
      dev.generation >= 2022 ? 'Wireless charging or MagSafe charging in a hot environment' : 'Wireless charging in a warm environment',
      'iOS software bug causing CPU to run at maximum frequency',
      'Logic board component (VRM or battery management IC) fault',
      'Poor-quality third-party case trapping heat against the device',
    ],
    solutions: (dev) => [
      `Remove the case and place the ${dev.displayName} in a cool, shaded area`,
      'Check Settings → Battery for apps consuming excessive background power',
      'Update iOS — Apple frequently patches processes that cause overheating',
      'Battery replacement if battery is degraded or swollen',
      'Free diagnostic check at iTech Repairs to identify whether the cause is hardware or software',
      'Logic board thermal assessment for persistent hardware-caused overheating',
    ],
    urgency: 'medium',
    isDataRecoveryRisk: false,
    repairPageSlug: '/iphone-overheating-repair-melbourne',
    repairPageLabel: 'Book Overheating Repair',
    secondaryRepairSlug: '/iphone-battery-replacement',
    secondaryRepairLabel: 'iPhone Battery Replacement',
  },
  {
    slug: 'wifi-not-working',
    name: 'Wi-Fi Not Working',
    pageTitle: (d) => `${d} Wi-Fi Not Working`,
    h1: (d) => `${d} Wi-Fi Not Working?`,
    metaTitle: (d) => `${d} Wi-Fi Not Working | Repair Melbourne | iTech Repairs`,
    metaDescription: (d) => `${d} can't connect to Wi-Fi or keeps dropping out? iTech Repairs Melbourne fixes iPhone Wi-Fi faults same day. Walk in to Braybrook or Spotswood — no appointment needed.`,
    intro: (dev) => `Wi-Fi problems on the ${dev.displayName} can range from not connecting at all to constantly dropping in and out. Before assuming it's a hardware fault, try some basic software steps — these resolve the issue in roughly 30% of cases. If the Wi-Fi toggle is greyed out or the problem persists after a full network reset, hardware repair is likely needed.`,
    symptoms: [
      'Wi-Fi toggle is greyed out and can\'t be enabled',
      'Phone connects but immediately drops Wi-Fi',
      'Wi-Fi networks detected but connection fails with password errors',
      'Slow Wi-Fi speed on the iPhone while other devices are fast',
      'Wi-Fi stopped working after a drop or liquid exposure',
      'No Wi-Fi networks found even when standing next to the router',
    ],
    causes: (dev) => [
      'Wi-Fi chip fault — common after drops or water exposure',
      `Wi-Fi antenna cable disconnected or damaged ${dev.generation >= 2022 ? '(runs adjacent to the rear camera module)' : '(inside the device chassis)'}`,
      'iOS software glitch causing Wi-Fi driver failure',
      'Overheating causing temporary Wi-Fi chip shutdown',
      'Faulty repair by a previous technician damaging antenna connections',
      'Logic board trace damage affecting the Wi-Fi/Bluetooth module',
    ],
    solutions: () => [
      'Go to Settings → General → Transfer or Reset iPhone → Reset Network Settings (erases saved Wi-Fi passwords but often fixes software Wi-Fi bugs)',
      'Toggle Airplane Mode on and off — sometimes resets the Wi-Fi chip',
      'Update iOS to the latest version',
      'If toggle is greyed out: Wi-Fi chip or antenna repair at iTech Repairs',
      'Wi-Fi antenna replacement for hardware antenna damage',
      'Logic board repair for chip-level Wi-Fi failure',
    ],
    urgency: 'medium',
    isDataRecoveryRisk: false,
    repairPageSlug: '/iphone-wifi-not-working-repair-melbourne',
    repairPageLabel: 'Book iPhone Wi-Fi Repair',
  },
  {
    slug: 'bluetooth-not-working',
    name: 'Bluetooth Not Working',
    pageTitle: (d) => `${d} Bluetooth Not Working`,
    h1: (d) => `${d} Bluetooth Not Working?`,
    metaTitle: (d) => `${d} Bluetooth Not Working | Repair Melbourne | iTech Repairs`,
    metaDescription: (d) => `${d} Bluetooth greyed out or not connecting to devices? iTech Repairs Melbourne fixes Bluetooth faults same day. Walk in to Braybrook or Spotswood — no appointment needed.`,
    intro: (dev) => `Bluetooth faults on the ${dev.displayName} can present as a greyed-out toggle, the inability to pair with devices, or constant disconnection from already-paired accessories. Because ${dev.displayName} uses a combined Wi-Fi and Bluetooth chip, hardware faults often affect both simultaneously — if you're having both Wi-Fi and Bluetooth issues at the same time, that strongly points to a hardware chip fault.`,
    symptoms: [
      'Bluetooth toggle is greyed out and cannot be enabled',
      'iPhone can\'t discover nearby Bluetooth devices',
      'Previously paired devices (AirPods, car audio) no longer connect',
      'Bluetooth connects briefly then immediately disconnects',
      'Both Wi-Fi and Bluetooth stopped working at the same time',
      'Bluetooth audio quality very poor or cutting out',
    ],
    causes: (dev) => [
      `Combined Wi-Fi/Bluetooth chip failure — ${dev.generation >= 2020 ? 'typically triggered by drop damage or water exposure' : 'common on older devices after heavy use'}`,
      'Bluetooth antenna cable damaged or disconnected',
      'iOS software glitch causing Bluetooth stack failure',
      'Conflicting Bluetooth profiles from a large number of paired devices',
      'Logic board trace damage near the wireless module',
    ],
    solutions: () => [
      'Forget all Bluetooth devices and re-pair — go to Settings → Bluetooth → (i) → Forget This Device',
      'Reset Network Settings: Settings → General → Transfer or Reset iPhone → Reset Network Settings',
      'Update iOS to the latest version',
      'If toggle is greyed out: hardware repair is required — Bluetooth chip or antenna',
      'Logic board diagnostics for persistent chip-level faults',
    ],
    urgency: 'low',
    isDataRecoveryRisk: false,
    repairPageSlug: '/iphone-bluetooth-not-working-repair-melbourne',
    repairPageLabel: 'Book Bluetooth Repair',
  },
  {
    slug: 'camera-not-working',
    name: 'Camera Not Working',
    pageTitle: (d) => `${d} Camera Not Working`,
    h1: (d) => `${d} Camera Not Working?`,
    metaTitle: (d) => `${d} Camera Not Working | Repair Melbourne | iTech Repairs`,
    metaDescription: (d) => `${d} camera black, blurry, or showing an error? iTech Repairs Melbourne replaces iPhone camera modules same day. Walk in to Braybrook or Spotswood — cheapest price guaranteed.`,
    intro: (dev) => `Camera problems on the ${dev.displayName} are frustrating, especially given how capable the camera system is. Whether the camera app opens to a black screen, the image is blurry, the camera freezes, or you're getting an error message, these issues are usually fixable. ${dev.generation >= 2023 ? 'The ' + dev.displayName + ' features a multi-lens camera system — faults can affect one camera module while others continue working normally.' : 'Camera faults can affect the rear camera, front camera, or both depending on the cause.'}`,
    symptoms: [
      'Camera app opens but shows a black or frozen screen',
      'Photos come out blurry regardless of subject distance',
      'Camera lens cracked after a drop (visible damage)',
      'One camera works but others don\'t (front, rear, or telephoto)',
      'Error message: "Camera is not available" or similar',
      'Camera shakes or has image stabilisation failure',
      'Flash not working alongside camera issues',
    ],
    causes: (dev) => [
      `Camera module physically damaged — ${dev.generation >= 2022 ? 'rear camera housing on ' + dev.displayName + ' is elevated and prone to impact damage' : 'common from drops landing on the rear of the device'}`,
      'Camera lens cracked or scratched, causing internal blurring',
      dev.generation >= 2023 ? 'Periscope telephoto module disconnected or damaged (Pro models)' : 'Camera flex cable disconnected inside the device',
      'Software glitch in the camera app — force close and relaunch',
      'iOS camera driver bug — update iOS and test again',
      'Water ingress into the camera module causing condensation or corrosion',
    ],
    solutions: (dev) => [
      'Force close the Camera app completely and reopen',
      'Restart your ' + dev.displayName + ' and test each camera individually',
      'Update iOS — Apple periodically releases camera stability fixes',
      'Camera module replacement for physical damage or persistent hardware faults',
      `${dev.generation >= 2022 ? 'Rear camera glass replacement if only the lens cover is cracked' : 'Camera lens repair or module replacement'}`,
      'Full diagnostic check at iTech Repairs to identify which component has failed',
    ],
    urgency: 'medium',
    isDataRecoveryRisk: false,
    repairPageSlug: '/iphone-rear-camera-repair',
    repairPageLabel: 'Book Camera Repair',
    secondaryRepairSlug: '/iphone-front-camera-repair',
    secondaryRepairLabel: 'Front Camera Repair',
  },
  {
    slug: 'no-signal',
    name: 'No Mobile Signal',
    pageTitle: (d) => `${d} No Signal`,
    h1: (d) => `${d} Has No Signal or "Searching"?`,
    metaTitle: (d) => `${d} No Signal or Searching Fix Melbourne | iTech Repairs`,
    metaDescription: (d) => `${d} showing no service, searching, or dropping calls constantly? iTech Repairs Melbourne diagnoses and repairs cellular antenna faults. Walk in to Braybrook or Spotswood.`,
    intro: (dev) => `If your ${dev.displayName} shows "No Service" or "Searching" where it would normally have signal, or if your calls keep dropping in areas where signal is usually strong, there's likely an issue with the cellular antenna or modem. ${dev.generation >= 2023 ? `The ${dev.displayName} supports 5G and has a complex antenna system — antenna damage from drops or water is the most common hardware cause.` : `The ${dev.displayName}'s cellular antenna is vulnerable to damage from drops and water exposure.`} Some cases have a software cause that's easy to fix.`,
    symptoms: [
      '"No Service" or "Searching" showing in the status bar',
      'Intermittent signal — drops in and out in areas with good coverage',
      'Calls drop frequently even with visible signal bars',
      'Mobile data not working even with cellular signal',
      '"SIM Not Detected" error appearing randomly',
      'No signal since phone was dropped or got wet',
    ],
    causes: (dev) => [
      'Cellular antenna damaged from a drop',
      `SIM card tray loose, bent, or SIM not seated correctly`,
      dev.generation >= 2022 ? '5G mmWave antenna damage from physical impact' : 'Antenna switch or cellular modem fault',
      'Carrier network settings out of date — update via Settings → General → About',
      'Logic board cellular modem failure',
      'Water damage corroding the SIM connector or antenna pathways',
    ],
    solutions: () => [
      'Toggle Airplane Mode on for 30 seconds, then off — sometimes re-registers with the network',
      'Remove and re-insert the SIM card, ensuring it\'s properly seated',
      'Go to Settings → General → About — if prompted, tap "Update" for Carrier Settings',
      'Reset Network Settings to clear conflicting cellular configuration',
      'If the issue persists: cellular antenna or modem repair at iTech Repairs',
      'SIM tray replacement if tray is bent or SIM isn\'t making proper contact',
    ],
    urgency: 'medium',
    isDataRecoveryRisk: false,
    repairPageSlug: '/iphone-repair-melbourne',
    repairPageLabel: 'Book iPhone Diagnostics',
  },
  {
    slug: 'speaker-not-working',
    name: 'Speaker Not Working',
    pageTitle: (d) => `${d} Speaker Not Working`,
    h1: (d) => `${d} Speaker Not Working?`,
    metaTitle: (d) => `${d} Speaker Not Working | Repair Melbourne | iTech Repairs`,
    metaDescription: (d) => `${d} speaker producing no sound, muffled audio, or distortion? iTech Repairs Melbourne repairs and replaces iPhone speakers same day. Walk in to Braybrook or Spotswood today.`,
    intro: (dev) => `Speaker problems on the ${dev.displayName} typically manifest as no sound, very low volume, or distorted audio. Before assuming hardware failure, check that the phone isn't in silent mode, that volume is turned up, and that the speaker grille isn't clogged with lint — a surprising number of "dead speaker" cases are resolved with a simple grille cleaning.`,
    symptoms: [
      'No sound from the bottom speaker during music or videos',
      'Earpiece (top speaker) silent during phone calls',
      'Muffled, crackly, or distorted speaker audio',
      'Sound works through headphones but not the speaker',
      'Speaker stopped working after drop or water exposure',
      'Speaker works on low volume but distorts at higher volumes',
    ],
    causes: (dev) => [
      `Speaker grille blocked with lint, dirt, or debris — ${dev.generation >= 2020 ? 'very common in the bottom grille of the ' + dev.displayName : 'easily cleaned at no charge'}`,
      'Speaker damaged by liquid ingress',
      'Blown speaker from audio played at maximum volume for extended periods',
      'Loose or disconnected speaker flex cable',
      'Logic board audio IC fault (less common — affects both speakers)',
      dev.generation >= 2017 ? 'Earpiece speaker separate from bottom speaker — each can fail independently' : 'Single speaker failure',
    ],
    solutions: () => [
      'Check silent mode switch (left side of phone) and volume buttons first',
      'Clean the speaker grille gently with a dry toothbrush — this is free at iTech Repairs',
      'Go to Settings → Accessibility → Audio/Visual and check Balance slider is centred',
      'Test with a speaker test app to confirm which speaker is affected',
      'Speaker replacement — bottom speaker or earpiece, same-day service',
      'Audio IC diagnostics if both speakers are affected simultaneously',
    ],
    urgency: 'low',
    isDataRecoveryRisk: false,
    repairPageSlug: '/iphone-speaker-repair',
    repairPageLabel: 'Book Speaker Repair',
  },
  {
    slug: 'microphone-not-working',
    name: 'Microphone Not Working',
    pageTitle: (d) => `${d} Microphone Not Working`,
    h1: (d) => `${d} Microphone Not Working?`,
    metaTitle: (d) => `${d} Microphone Not Working | Repair Melbourne | iTech Repairs`,
    metaDescription: (d) => `People can't hear you on calls with your ${d}? iTech Repairs Melbourne fixes iPhone microphone faults same day. Walk in to Braybrook or Spotswood — cheapest price guaranteed.`,
    intro: (dev) => `If people on calls can't hear you, your voice recordings have no audio, or Siri can't pick up your voice, the ${dev.displayName} has a microphone fault. ${dev.generation >= 2020 ? 'Modern iPhones including the ' + dev.displayName + ' have three microphones (bottom, top, and rear) — each used for different functions. Identifying which microphone has failed determines the repair required.' : 'The ' + dev.displayName + ' has multiple microphones, and isolating the faulty one is the first step in diagnosis.'}`,
    symptoms: [
      'Callers say they can\'t hear you or your voice is very faint',
      'Voice memos record no audio or extremely low volume',
      'Siri cannot hear you or frequently mishears commands',
      'Video recordings have no audio',
      'FaceTime or WhatsApp calls — your audio is absent',
      'Microphone worked before a drop or liquid exposure',
    ],
    causes: (dev) => [
      `Bottom microphone port blocked with lint or debris ${dev.generation >= 2020 ? '(positioned next to the ' + (dev.connector === 'usb-c' ? 'USB-C' : 'Lightning') + ' port)' : ''}`,
      'Microphone component damaged by water ingress',
      'Damaged bottom assembly — microphone, charging port, and speaker are often one module',
      'Logic board audio fault affecting microphone processing',
      'Third-party case or screen protector blocking microphone port',
      'iOS app permission blocking microphone access (check Settings → Privacy → Microphone)',
    ],
    solutions: () => [
      'Check Settings → Privacy & Security → Microphone — ensure affected apps have permission',
      'Test all three microphones: bottom (voice memo), rear (video), front (FaceTime/selfie video)',
      'Clean the bottom microphone port gently — often blocked by debris',
      'Bottom assembly replacement if the primary microphone is damaged',
      'Microphone module replacement based on which microphone is at fault',
      'Logic board audio diagnostics for IC-level failure',
    ],
    urgency: 'medium',
    isDataRecoveryRisk: false,
    repairPageSlug: '/iphone-microphone-repair',
    repairPageLabel: 'Book Microphone Repair',
  },
  {
    slug: 'data-recovery',
    name: 'Data Recovery',
    pageTitle: (d) => `${d} Data Recovery`,
    h1: (d) => `${d} Data Recovery Melbourne`,
    metaTitle: (d) => `${d} Data Recovery Melbourne | iTech Repairs`,
    metaDescription: (d) => `Lost data on your ${d}? iTech Repairs Melbourne offers professional iPhone data recovery for water damage, broken screens, and dead phones. Walk in to Braybrook or Spotswood.`,
    intro: (dev) => `Losing data on your ${dev.displayName} — photos, messages, contacts, videos — can feel catastrophic. Whether your phone is water damaged, has a broken screen, won't turn on, or has had a failed restore, professional data recovery is often possible. At iTech Repairs, we use specialist tools to extract data directly from iPhone storage at the component level, even when the device appears completely dead.`,
    symptoms: [
      'Phone won\'t turn on and data hasn\'t been backed up to iCloud',
      'Broken or black screen means you can\'t access your data',
      'iPhone stuck in DFU or Recovery Mode — iTunes prompting to Erase',
      'Water damaged phone that no longer powers on',
      'Storage corruption preventing iOS from booting',
      'Failed iOS restore erased data that you didn\'t intend to lose',
    ],
    causes: () => [
      'Physical damage — cracked screen, drop damage, bent chassis',
      'Water damage causing short circuit or corrosion on storage pathways',
      'Storage chip (NAND) failure due to age or electrical fault',
      'iOS restore or update failure that corrupted the filesystem',
      'Battery completely dead and unable to be charged',
      'Accidental deletion or factory reset without backup',
    ],
    solutions: (dev) => [
      'Bring the device in immediately — do not attempt to charge a water-damaged phone',
      `Professional component-level diagnostic to assess ${dev.displayName} storage chip condition`,
      'NAND chip extraction and reading using specialist equipment',
      'Screen bypass for data access on devices with broken displays',
      'Data extraction to external storage with full file recovery where possible',
      'iCloud backup recovery assistance if a backup exists but isn\'t restoring',
    ],
    urgency: 'critical',
    isDataRecoveryRisk: true,
    repairPageSlug: '/iphone-data-recovery',
    repairPageLabel: 'View Data Recovery Service',
    secondaryRepairSlug: '/iphone-repair-melbourne',
    secondaryRepairLabel: 'iPhone Repair Services',
  },
  {
    slug: 'stuck-in-recovery-mode',
    name: 'Stuck in Recovery Mode',
    pageTitle: (d) => `${d} Stuck in Recovery Mode`,
    h1: (d) => `${d} Stuck in Recovery Mode?`,
    metaTitle: (d) => `${d} Stuck in Recovery Mode Fix Melbourne | iTech Repairs`,
    metaDescription: (d) => `${d} showing "Connect to iTunes" or stuck in Recovery Mode? iTech Repairs Melbourne gets iPhones out of Recovery Mode same day. Walk in to Braybrook or Spotswood.`,
    intro: (dev) => `Recovery Mode on the ${dev.displayName} is designed as a last resort for firmware restoration — but it can be triggered accidentally or fail to exit after an update. When stuck in Recovery Mode, your phone displays the "Connect to iTunes" or "Connect to Finder" screen and won't load iOS. In many cases this is recoverable without data loss, depending on what caused the phone to enter Recovery Mode.`,
    symptoms: [
      '"Connect to iTunes" or "Connect to Finder" screen on device',
      'Phone entered Recovery Mode during a software update',
      'Update appeared to complete but phone won\'t boot normally',
      'iTunes/Finder shows Recovery Mode prompt and offers to Restore',
      'Phone reverts to Recovery Mode screen each time after attempted fixes',
    ],
    causes: (dev) => [
      'iOS update failure — update started but couldn\'t complete',
      'Interrupted restore left the device in an intermediate state',
      `Low battery during an update causing the ${dev.displayName} to enter Recovery Mode`,
      'USB cable disconnected during a firmware update',
      'Storage fault preventing iOS from writing the updated firmware',
      'Jailbreak or third-party modification triggered a recovery loop',
    ],
    solutions: (dev) => [
      `Try a force restart first: hold Side + Volume Down on your ${dev.displayName} for 10 seconds — sometimes exits Recovery Mode without data loss`,
      'Use iTunes (Windows) or Finder (Mac) to attempt an Update restore — this preserves data if successful',
      'If Update fails, a full Restore via iTunes/Finder will fix Recovery Mode but erases all data',
      'Before restoring: bring the device to iTech Repairs — we can attempt data recovery before erasing',
      'If phone returns to Recovery Mode after restore: hardware diagnostic required',
      'NAND repair for storage-triggered Recovery Mode loops',
    ],
    urgency: 'high',
    isDataRecoveryRisk: true,
    repairPageSlug: '/iphone-repair-melbourne',
    repairPageLabel: 'Book iPhone Repair',
    secondaryRepairSlug: '/iphone-data-recovery',
    secondaryRepairLabel: 'iPhone Data Recovery',
  },
]

// ─── Deduplication Layer ─────────────────────────────────────────────────────
//
// Problem slugs listed here are SKIPPED for ALL devices because model-specific
// pages already exist under the [slug] dynamic route at the root level.
//
// How to check for future additions:
//   A problem slug must be skipped if it appears in IPHONE_REPAIR_SLUGS (see
//   src/data/repairs.ts). The [slug] route generates pages at the pattern
//   /{model-slug}-{repair-slug}-melbourne for every model × repair combination.
//   If a problem slug matches a repair slug exactly, the `/help/{device}/{problem}`
//   page would cannibalize the existing `/{model}-{repair-slug}-melbourne` page
//   because both target identical model-specific search intent.
//
// Skipped problem slugs and their reason:
//
//   'data-recovery'
//     ↳ IPHONE_REPAIR_SLUGS includes 'data-recovery', so pages like
//       /iphone-14-data-recovery-melbourne already exist for all 27 devices.
//       Creating /help/iphone-14/data-recovery would directly compete with
//       the existing service pages for the same search queries.
//
// To add a new skip: append the problem slug and reason to this record.

export const SKIP_PROBLEM_SLUGS: Record<string, string> = {
  'data-recovery':
    'Exact match with repair slug "data-recovery" in IPHONE_REPAIR_SLUGS — ' +
    'model-specific repair pages already exist at /{model}-data-recovery-melbourne ' +
    'for all 27 devices. Creating /help/{device}/data-recovery would cannibalize those pages.',
}

/**
 * Returns true if a device+problem combination should be generated.
 *
 * Checks:
 *  1. Device slug is in the approved device list.
 *  2. Problem slug is in the approved problem list.
 *  3. Problem slug is not in SKIP_PROBLEM_SLUGS (intent cannibalisation guard).
 */
export function shouldCreatePage(deviceSlug: string, problemSlug: string): boolean {
  if (!deviceMap.has(deviceSlug)) return false
  if (!problemMap.has(problemSlug)) return false
  if (Object.prototype.hasOwnProperty.call(SKIP_PROBLEM_SLUGS, problemSlug)) return false
  return true
}

// ─── Lookup Helpers ──────────────────────────────────────────────────────────

const deviceMap = new Map(PROBLEM_DEVICES.map(d => [d.slug, d]))
const problemMap = new Map(DEVICE_PROBLEMS.map(p => [p.slug, p]))

export function getDevice(slug: string): ProblemDevice | undefined {
  return deviceMap.get(slug)
}

export function getProblem(slug: string): DeviceProblemConfig | undefined {
  return problemMap.get(slug)
}

export function isValidDeviceSlug(slug: string): boolean {
  return deviceMap.has(slug)
}

export function isValidProblemSlug(slug: string): boolean {
  // A problem slug is valid only if it exists AND is not in the skip list
  return problemMap.has(slug) && !Object.prototype.hasOwnProperty.call(SKIP_PROBLEM_SLUGS, slug)
}

/**
 * Returns all device×problem params that pass the deduplication check.
 * Filters out combinations flagged in SKIP_PROBLEM_SLUGS.
 * Total: 27 devices × 16 problems = 432 pages (27 skipped for data-recovery).
 */
export function getAllDeviceProblemParams(): Array<{ device: string; problem: string }> {
  const params: Array<{ device: string; problem: string }> = []
  for (const device of PROBLEM_DEVICES) {
    for (const problem of DEVICE_PROBLEMS) {
      if (shouldCreatePage(device.slug, problem.slug)) {
        params.push({ device: device.slug, problem: problem.slug })
      }
    }
  }
  return params
}

/**
 * Returns every combination that was skipped and why.
 * Useful for auditing and documentation.
 */
export function getSkippedCombinations(): Array<{ device: string; problem: string; reason: string }> {
  const skipped: Array<{ device: string; problem: string; reason: string }> = []
  for (const device of PROBLEM_DEVICES) {
    for (const problem of DEVICE_PROBLEMS) {
      if (!shouldCreatePage(device.slug, problem.slug)) {
        skipped.push({
          device: device.slug,
          problem: problem.slug,
          reason: SKIP_PROBLEM_SLUGS[problem.slug] ?? 'Unknown skip reason',
        })
      }
    }
  }
  return skipped
}
