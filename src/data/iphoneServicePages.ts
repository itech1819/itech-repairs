export interface IphoneServicePage {
  slug: string
  metaTitle: string
  metaDescription: string
  h1: string
  intro: string
  symptoms: { title: string; desc: string }[]
  benefits: { title: string; desc: string }[]
  faqs: { question: string; answer: string }[]
  relatedServices: { label: string; href: string }[]
  /** @deprecated Model links are now generated dynamically in IphoneServicePage.tsx from models.ts */
  modelLinks?: { label: string; href: string }[]
  repairSlug: string
}

export const IPHONE_SERVICE_PAGES: IphoneServicePage[] = [
  // -------------------------------------------------------------------------
  // 1. iphone-screen-repair
  // -------------------------------------------------------------------------
  {
    slug: 'iphone-screen-repair',
    repairSlug: 'screen-repair',
    metaTitle: 'iPhone Screen Repair Melbourne | From $79 | Done in 15 Minutes',
    metaDescription:
      'Cracked iPhone screen? Walk in to iTech Repairs — screen replaced in 15 minutes from $79. Cheapest price guaranteed, lifetime warranty. Braybrook & Spotswood. Open 7 days.',
    h1: 'iPhone Screen Repair Melbourne',
    intro:
      'Cracked or damaged your iPhone screen? iTech Repairs fixes all iPhone models — from iPhone 6 to iPhone 17 Pro Max — from just $79. Walk into our Braybrook or Spotswood stores any time for an on the spot screen repair, usually completed in just 15 minutes. Every screen repair comes with a lifetime warranty on parts and labour.',
    symptoms: [
      {
        title: 'Cracked Glass',
        desc: 'Dropped your iPhone and the front glass has cracked, shattered or developed spider-web fractures across the display.',
      },
      {
        title: 'Unresponsive Touch Areas',
        desc: 'Parts of the screen no longer register touch inputs after a drop, making apps, the keyboard or notifications impossible to use.',
      },
      {
        title: 'Black Spots or Lines',
        desc: 'Dark blotches, coloured lines or dead zones appearing on the display — often a sign of LCD or OLED panel damage beneath the glass.',
      },
      {
        title: 'Dim or Flickering Display',
        desc: 'Your screen flickers, dims unexpectedly, or has inconsistent brightness levels even when auto-brightness is disabled.',
      },
      {
        title: 'Ghost Touch After Drop',
        desc: 'The screen registers phantom taps or inputs by itself following a fall — typically caused by digitiser damage from impact.',
      },
    ],
    benefits: [
      {
        title: '15-Minute Repair',
        desc: 'Most iPhone screen repairs are completed in just 15 minutes while you wait — no need to leave your phone overnight.',
      },
      {
        title: 'Lifetime Warranty on Screen',
        desc: 'Every screen we install is covered by a lifetime warranty. If the same fault returns, we fix it at no extra cost.',
      },
      {
        title: 'Genuine-Grade Parts',
        desc: 'We use OEM-equivalent panels that match the brightness, colour accuracy, and touch sensitivity of your original screen.',
      },
      {
        title: 'Face ID Preserved',
        desc: 'Our technicians use specialist tools to preserve your Face ID and True Tone calibration throughout the repair process.',
      },
      {
        title: 'On The Spot Repair — Walk In Now',
        desc: 'No booking required. Walk in to our Braybrook or Spotswood store and your screen is fixed in 15 minutes — before you finish your coffee.',
      },
    ],
    faqs: [
      {
        question: 'How long does iPhone screen repair take?',
        answer:
          'Most iPhone screen repairs at iTech Repairs take around 15 minutes. Complex models such as the iPhone 14 or 15 Pro Max may take up to 30 minutes. You are welcome to wait in-store.',
      },
      {
        question: 'Does screen repair preserve Face ID?',
        answer:
          'Yes. We use specialised equipment to transfer the original Face ID components during screen replacement, so your Face ID continues to work exactly as before.',
      },
      {
        question: 'What does iPhone screen repair cost?',
        answer:
          'Pricing starts from $79 for older models and varies by iPhone model and screen type. Walk in or call us for a free quote — we will give you an exact price before we start any work.',
      },
      {
        question: 'Do you repair all iPhone models?',
        answer:
          'Yes, we repair every iPhone from the iPhone 6 through to the latest iPhone 17 Pro Max. We stock parts for all current models.',
      },
    ],
    relatedServices: [
      { label: 'iPhone Screen Repair Cost Guide', href: '/iphone-screen-repair-cost' },
      { label: 'iPhone Screen Replacement', href: '/iphone-screen-replacement' },
      { label: 'iPhone Battery Replacement', href: '/iphone-battery-replacement' },
      { label: 'iPhone Touch Screen Repair', href: '/iphone-touchscreen-repair' },
      { label: 'iPhone Ghost Touch Repair', href: '/iphone-ghost-touch-repair' },
      { label: 'iPhone Face ID Repair', href: '/iphone-face-id-repair' },
    ],
    modelLinks: [
      { label: 'iPhone 17 Pro Max', href: '/iphone-17-pro-max-screen-repair-melbourne' },
      { label: 'iPhone 17 Pro', href: '/iphone-17-pro-screen-repair-melbourne' },
      { label: 'iPhone 16 Pro Max', href: '/iphone-16-pro-max-screen-repair-melbourne' },
      { label: 'iPhone 16 Pro', href: '/iphone-16-pro-screen-repair-melbourne' },
      { label: 'iPhone 15 Pro Max', href: '/iphone-15-pro-max-screen-repair-melbourne' },
      { label: 'iPhone 15 Pro', href: '/iphone-15-pro-screen-repair-melbourne' },
      { label: 'iPhone 14 Pro', href: '/iphone-14-pro-screen-repair-melbourne' },
      { label: 'iPhone 13', href: '/iphone-13-screen-repair-melbourne' },
    ],
  },

  // -------------------------------------------------------------------------
  // 2. iphone-screen-replacement
  // -------------------------------------------------------------------------
  {
    slug: 'iphone-screen-replacement',
    repairSlug: 'screen-replacement',
    metaTitle: 'iPhone Screen Replacement Melbourne | Cheapest Repairs Guaranteed | iTech Repairs',
    metaDescription:
      'Need a full iPhone screen replacement in Melbourne? iTech Repairs — cheapest repairs guaranteed, on the spot 15 minute repairs, OEM-equivalent panels, lifetime warranty.',
    h1: 'iPhone Screen Replacement Melbourne',
    intro:
      'When your iPhone display has suffered severe damage — shattered glass, dead pixels across the entire panel, or complete touch failure — a full screen assembly replacement is the right solution. iTech Repairs replaces complete iPhone screen assemblies for all models in Melbourne, using OEM-equivalent panels that restore True Tone, brightness, and touch sensitivity to factory standards.',
    symptoms: [
      {
        title: 'Shattered Glass Panel',
        desc: 'The display glass is shattered beyond safe use — multiple cracks, missing pieces, or sharp edges that make the phone dangerous to handle.',
      },
      {
        title: 'Dead Pixels Across the Display',
        desc: 'Scattered dead pixels or large blacked-out areas spread across the entire screen, indicating the OLED or LCD layer is damaged.',
      },
      {
        title: 'LCD Bleed or Ink Blots',
        desc: 'Discoloured patches or spreading dark blotches on an LCD panel — caused by pressure damage to the liquid crystal layer.',
      },
      {
        title: 'Severe Display Damage',
        desc: 'The display shows distorted colours, inverted images, or a completely white/black screen following a significant impact.',
      },
      {
        title: 'Touch Completely Unresponsive',
        desc: 'The digitiser has failed entirely — no touch input is registered anywhere on the screen, not just in specific zones.',
      },
    ],
    benefits: [
      {
        title: 'Full Assembly Replacement',
        desc: 'We replace the complete screen assembly — glass, digitiser, and display panel — restoring your iPhone to full functionality.',
      },
      {
        title: 'OEM-Equivalent Panels',
        desc: 'Our replacement screens match Apple\'s original specifications for colour gamut, brightness, and refresh rate.',
      },
      {
        title: 'True Tone Preserved',
        desc: 'We transfer the original display data chip where supported, preserving True Tone colour balance after replacement.',
      },
      {
        title: 'Brightness Calibrated',
        desc: 'After fitting the new assembly, we calibrate brightness and auto-brightness to ensure consistent display performance.',
      },
      {
        title: 'Lifetime Warranty',
        desc: 'Every full screen assembly replacement is covered by a lifetime warranty on parts and labour at no additional cost.',
      },
    ],
    faqs: [
      {
        question: 'What is the difference between screen repair and screen replacement?',
        answer:
          'Screen repair typically addresses the outer glass or digitiser layer, while a full screen replacement involves installing a completely new display assembly — glass, digitiser and panel together. For severely damaged screens, full replacement is usually the more reliable long-term solution.',
      },
      {
        question: 'Do you use original Apple screen assemblies?',
        answer:
          'We use OEM-equivalent panels that match Apple\'s original quality standards for brightness, colour accuracy, and touch sensitivity. These are sourced from the same supply chains as original parts and perform identically.',
      },
      {
        question: 'How much does a full screen assembly replacement cost?',
        answer:
          'Pricing depends on your iPhone model. Call us or walk in for a free quote — we will assess your device and provide an exact price before any work begins.',
      },
      {
        question: 'Will my ProMotion display still work after replacement?',
        answer:
          'Yes. For iPhone 13 Pro, 14 Pro, 15 Pro, 16 Pro and 17 Pro models, we fit replacement screens that support the 120Hz ProMotion adaptive refresh rate.',
      },
    ],
    relatedServices: [
      { label: 'iPhone Screen Repair', href: '/iphone-screen-repair' },
      { label: 'iPhone Back Glass Repair', href: '/iphone-back-glass-repair' },
      { label: 'iPhone Battery Replacement', href: '/iphone-battery-replacement' },
      { label: 'iPhone Face ID Repair', href: '/iphone-face-id-repair' },
    ],
    modelLinks: [
      { label: 'iPhone 17 Pro Max', href: '/iphone-17-pro-max-screen-replacement-melbourne' },
      { label: 'iPhone 17 Pro', href: '/iphone-17-pro-screen-replacement-melbourne' },
      { label: 'iPhone 16 Pro Max', href: '/iphone-16-pro-max-screen-replacement-melbourne' },
      { label: 'iPhone 16 Pro', href: '/iphone-16-pro-screen-replacement-melbourne' },
      { label: 'iPhone 15 Pro Max', href: '/iphone-15-pro-max-screen-replacement-melbourne' },
      { label: 'iPhone 15 Pro', href: '/iphone-15-pro-screen-replacement-melbourne' },
      { label: 'iPhone 14 Pro', href: '/iphone-14-pro-screen-replacement-melbourne' },
      { label: 'iPhone 13', href: '/iphone-13-screen-replacement-melbourne' },
    ],
  },

  // -------------------------------------------------------------------------
  // 3. iphone-battery-replacement
  // -------------------------------------------------------------------------
  {
    slug: 'iphone-battery-replacement',
    repairSlug: 'battery-replacement',
    metaTitle: 'iPhone Battery Replacement Melbourne | From $69 | 15 Minute Service',
    metaDescription:
      'iPhone battery replacement in Melbourne from $69. All iPhone models, on-the-spot 15 minute service. Genuine quality parts, lifetime warranty. Walk in Braybrook or Spotswood.',
    h1: 'iPhone Battery Replacement Melbourne',
    intro:
      'A degraded iPhone battery is one of the most common — and most fixable — performance problems. If your iPhone drains within hours, shuts off unexpectedly, or Apple\'s settings warn you that battery health has dropped below 80%, a battery replacement at iTech Repairs will restore full performance. From just $69, with a 15–20 minute turnaround and a lifetime warranty.',
    symptoms: [
      {
        title: 'Battery Draining Fast',
        desc: 'Your iPhone used to last all day but now needs recharging by midday — a clear sign that the battery\'s capacity has significantly degraded.',
      },
      {
        title: 'Unexpected Shutdowns',
        desc: 'The phone powers off suddenly at 20%, 30%, or even 50% charge, indicating the battery can no longer deliver stable voltage under load.',
      },
      {
        title: 'Slow Performance (Throttling)',
        desc: 'iOS reduces CPU performance to compensate for a weak battery — your phone feels sluggish, apps lag, and the camera shutter is slow.',
      },
      {
        title: 'Swollen Battery',
        desc: 'The back of your phone is bulging, or the screen is being pushed away from the chassis — a swollen battery is a safety hazard requiring immediate attention.',
      },
      {
        title: 'Won\'t Charge Past a Percentage',
        desc: 'The battery stops accepting charge at 80% or 90% and won\'t reach full capacity, even after hours on a charger.',
      },
    ],
    benefits: [
      {
        title: 'Genuine-Grade Battery Cell',
        desc: 'We install high-quality cells that match Apple\'s original mAh capacity and safety certifications for your iPhone model.',
      },
      {
        title: 'Battery Health Restored to 100%',
        desc: 'After replacement, your iPhone\'s Settings will show battery health at 100%, giving you a full charge cycle count from new.',
      },
      {
        title: 'Performance Throttling Removed',
        desc: 'With a healthy battery installed, iOS removes CPU throttling automatically — your phone returns to its original speed.',
      },
      {
        title: '15–20 Minute Repair',
        desc: 'Battery replacement is one of our fastest repairs. Most models are done in 15–20 minutes while you wait in-store.',
      },
      {
        title: 'Lifetime Warranty',
        desc: 'Every replacement battery is covered by our lifetime warranty. If the battery degrades prematurely, we replace it at no charge.',
      },
    ],
    faqs: [
      {
        question: 'How do I know if my iPhone battery needs replacing?',
        answer:
          'Go to Settings > Battery > Battery Health & Charging. If battery health is below 80%, Apple recommends replacement. You may also notice frequent unexpected shutdowns or noticeably shorter battery life.',
      },
      {
        question: 'Will replacing my battery void my AppleCare warranty?',
        answer:
          'If your iPhone is still under AppleCare+, it is worth checking with Apple first, as third-party repairs can affect coverage in some circumstances. If your device is out of warranty, there is no issue.',
      },
      {
        question: 'How long does iPhone battery replacement take?',
        answer:
          'Most models take between 15 and 20 minutes. The iPhone 17 Pro Max and similar flagship models may take up to 30 minutes due to additional adhesive and assembly steps.',
      },
      {
        question: 'What does iPhone battery replacement cost?',
        answer:
          'Battery replacement starts from $69 for older models. The exact price depends on your iPhone model — call us or walk in for a free quote.',
      },
    ],
    relatedServices: [
      { label: 'iPhone Charging Port Repair', href: '/iphone-charging-port-repair' },
      { label: 'iPhone Screen Repair', href: '/iphone-screen-repair' },
      { label: 'Free iPhone Diagnostic', href: '/iphone-diagnostic-service' },
    ],
    modelLinks: [
      { label: 'iPhone 13 Pro Battery', href: '/iphone-13-pro-battery-replacement' },
      { label: 'iPhone 12 Battery', href: '/iphone-12-battery-replacement' },
      { label: 'iPhone 11 Battery', href: '/iphone-11-battery-replacement' },
      { label: 'iPhone 17 Pro Max', href: '/iphone-17-pro-max-battery-replacement-melbourne' },
      { label: 'iPhone 17 Pro', href: '/iphone-17-pro-battery-replacement-melbourne' },
      { label: 'iPhone 16 Pro Max', href: '/iphone-16-pro-max-battery-replacement-melbourne' },
      { label: 'iPhone 16 Pro', href: '/iphone-16-pro-battery-replacement-melbourne' },
      { label: 'iPhone 15 Pro Max', href: '/iphone-15-pro-max-battery-replacement-melbourne' },
      { label: 'iPhone 15 Pro', href: '/iphone-15-pro-battery-replacement-melbourne' },
      { label: 'iPhone 14 Pro', href: '/iphone-14-pro-battery-replacement-melbourne' },
      { label: 'iPhone 13', href: '/iphone-13-battery-replacement-melbourne' },
    ],
  },

  // -------------------------------------------------------------------------
  // 4. iphone-charging-port-repair
  // -------------------------------------------------------------------------
  {
    slug: 'iphone-charging-port-repair',
    repairSlug: 'charging-port-repair',
    metaTitle: 'iPhone Charging Port Repair Melbourne | Cheapest Repairs Guaranteed | iTech Repairs',
    metaDescription:
      'iPhone not charging in Melbourne? iTech Repairs — cheapest repairs guaranteed, on the spot 15 minute charging port repair, ultrasonic cleaning + replacement. Walk in today.',
    h1: 'iPhone Charging Port Repair Melbourne',
    intro:
      'A faulty charging port is incredibly frustrating — your iPhone won\'t charge reliably, the cable falls out, or your computer no longer recognises the device. iTech Repairs diagnoses and fixes both Lightning and USB-C charging ports on all iPhone models in Melbourne. We start with a professional ultrasonic clean to remove lint and debris, which resolves the issue in many cases without a costly replacement.',
    symptoms: [
      {
        title: 'Cable Falls Out',
        desc: 'Your Lightning or USB-C cable no longer clicks in firmly and falls out at the slightest movement — often caused by compacted lint in the port.',
      },
      {
        title: 'Intermittent Charging',
        desc: 'The phone only charges when you hold the cable at a specific angle, or charging drops in and out throughout the night.',
      },
      {
        title: 'No Charge at All',
        desc: 'The port doesn\'t respond to any cable or charger, and the battery percentage isn\'t rising even after hours connected to power.',
      },
      {
        title: 'Debris Visible in Port',
        desc: 'You can see or feel lint, fluff, or debris packed into the charging port — a very common cause of charging failure.',
      },
      {
        title: 'Data Sync Not Working',
        desc: 'Your iPhone is not recognised by iTunes or Finder on a computer, and no data transfer is possible via cable.',
      },
    ],
    benefits: [
      {
        title: 'Ultrasonic Cleaning First',
        desc: 'Before any replacement, we professionally clean the port with ultrasonic equipment. This resolves most lint/debris-related charging issues at no extra cost.',
      },
      {
        title: 'Component-Level Repair Where Possible',
        desc: 'For minor damage, our technicians repair the port at component level rather than replacing the entire assembly, saving you money.',
      },
      {
        title: 'Multi-Cable Test',
        desc: 'We test your port with multiple cables and chargers to confirm a complete repair before returning your phone.',
      },
      {
        title: 'Fast Turnaround',
        desc: 'Port cleaning takes minutes. Full port replacement is typically completed within 15–20 minutes on the spot.',
      },
    ],
    faqs: [
      {
        question: 'Should I get my charging port cleaned or replaced?',
        answer:
          'We always try cleaning first. Lint and debris cause the majority of charging port issues, and a professional clean usually restores full function without a replacement. If the port is physically damaged, a replacement is needed.',
      },
      {
        question: 'Do you repair both Lightning and USB-C ports?',
        answer:
          'Yes. We repair Lightning ports on all iPhone models up to the iPhone 14 series, and USB-C ports on the iPhone 15 and later models.',
      },
      {
        question: 'How much does charging port repair cost?',
        answer:
          'Ultrasonic cleaning is low-cost. Full port replacement pricing varies by model — walk in or call for an exact quote.',
      },
      {
        question: 'How long does a charging port repair take?',
        answer:
          'Port cleaning takes 15–20 minutes. A full port replacement typically takes 15–20 minutes depending on your iPhone model.',
      },
    ],
    relatedServices: [
      { label: 'iPhone Battery Replacement', href: '/iphone-battery-replacement' },
      { label: 'Free iPhone Diagnostic', href: '/iphone-diagnostic-service' },
      { label: 'iPhone Water Damage Repair', href: '/iphone-water-damage-repair' },
    ],
    modelLinks: [
      { label: 'iPhone 17 Pro Max', href: '/iphone-17-pro-max-charging-port-repair-melbourne' },
      { label: 'iPhone 17 Pro', href: '/iphone-17-pro-charging-port-repair-melbourne' },
      { label: 'iPhone 16 Pro Max', href: '/iphone-16-pro-max-charging-port-repair-melbourne' },
      { label: 'iPhone 16 Pro', href: '/iphone-16-pro-charging-port-repair-melbourne' },
      { label: 'iPhone 15 Pro Max', href: '/iphone-15-pro-max-charging-port-repair-melbourne' },
      { label: 'iPhone 15 Pro', href: '/iphone-15-pro-charging-port-repair-melbourne' },
      { label: 'iPhone 14 Pro', href: '/iphone-14-pro-charging-port-repair-melbourne' },
      { label: 'iPhone 13', href: '/iphone-13-charging-port-repair-melbourne' },
    ],
  },

  // -------------------------------------------------------------------------
  // 5. iphone-back-glass-repair
  // -------------------------------------------------------------------------
  {
    slug: 'iphone-back-glass-repair',
    repairSlug: 'back-glass-repair',
    metaTitle: 'iPhone Back Glass Repair Melbourne | Cheapest Repairs Guaranteed | iTech Repairs',
    metaDescription:
      'Cracked iPhone back glass in Melbourne? iTech Repairs — cheapest repairs guaranteed, on the spot 15 minute repairs, wireless charging verified, water sealing re-applied.',
    h1: 'iPhone Back Glass Repair Melbourne',
    intro:
      'Starting with the iPhone 8, Apple introduced glass rear panels — and while they look premium, they crack just as easily as the front. A cracked iPhone back glass exposes sharp edges, compromises the device\'s water resistance, and can interfere with wireless charging. iTech Repairs replaces rear glass panels on all glass-back models from iPhone 8 through to iPhone 17 Pro Max, on the spot in Melbourne.',
    symptoms: [
      {
        title: 'Cracked Rear Glass Panel',
        desc: 'The back of your iPhone has cracked, shattered, or developed fractures — even from a relatively minor drop onto a hard surface.',
      },
      {
        title: 'Sharp Edges on the Back',
        desc: 'Broken glass has created sharp edges or raised shards on the rear of the device that make it uncomfortable or unsafe to hold.',
      },
      {
        title: 'Wireless Charging Affected',
        desc: 'Cracks in the rear glass can disrupt the Qi wireless charging coil beneath, causing unreliable or failed wireless charging.',
      },
      {
        title: 'Appearance Damaged',
        desc: 'The cracked rear glass is an eyesore and reduces the resale value of your iPhone significantly.',
      },
    ],
    benefits: [
      {
        title: 'OEM-Matched Glass',
        desc: 'Replacement glass is colour-matched and polished to match your iPhone\'s original rear panel — Midnight, Starlight, Deep Purple and all other finishes.',
      },
      {
        title: 'Wireless Charging Verified',
        desc: 'After fitting the new rear glass, we test wireless charging with a Qi pad to confirm reliable MagSafe and standard wireless charging.',
      },
      {
        title: 'Water Sealing Re-Applied',
        desc: 'We re-apply water-resistant adhesive gaskets during reassembly to restore the phone\'s original IP-rated water and dust resistance.',
      },
      {
        title: 'On The Spot Repair',
        desc: 'Rear glass replacement is completed on the spot — in most cases within 1–2 hours depending on model and adhesive removal.',
      },
    ],
    faqs: [
      {
        question: 'Which iPhone models have glass backs that can be repaired?',
        answer:
          'All iPhone models from iPhone 8 onwards have glass rear panels. This includes iPhone 8, X, XS, XR, 11, 12, 13, 14, 15, 16 and 17 series.',
      },
      {
        question: 'How much does rear glass repair cost?',
        answer:
          'Pricing varies by model. Older models tend to be less expensive than flagship Pro models. Walk in or call for a free quote.',
      },
      {
        question: 'Will wireless charging still work after back glass repair?',
        answer:
          'Yes. We test wireless charging on every rear glass repair. If the wireless charging coil was also damaged, we will advise you before proceeding.',
      },
    ],
    relatedServices: [
      { label: 'iPhone Screen Repair', href: '/iphone-screen-repair' },
      { label: 'iPhone Back Cover Repair', href: '/iphone-back-cover-repair' },
      { label: 'iPhone Water Damage Repair', href: '/iphone-water-damage-repair' },
    ],
    modelLinks: [
      { label: 'iPhone 17 Pro Max', href: '/iphone-17-pro-max-back-glass-repair-melbourne' },
      { label: 'iPhone 17 Pro', href: '/iphone-17-pro-back-glass-repair-melbourne' },
      { label: 'iPhone 16 Pro Max', href: '/iphone-16-pro-max-back-glass-repair-melbourne' },
      { label: 'iPhone 16 Pro', href: '/iphone-16-pro-back-glass-repair-melbourne' },
      { label: 'iPhone 15 Pro Max', href: '/iphone-15-pro-max-back-glass-repair-melbourne' },
      { label: 'iPhone 15 Pro', href: '/iphone-15-pro-back-glass-repair-melbourne' },
      { label: 'iPhone 14 Pro', href: '/iphone-14-pro-back-glass-repair-melbourne' },
      { label: 'iPhone 13', href: '/iphone-13-back-glass-repair-melbourne' },
    ],
  },

  // -------------------------------------------------------------------------
  // 6. iphone-back-cover-repair
  // -------------------------------------------------------------------------
  {
    slug: 'iphone-back-cover-repair',
    repairSlug: 'back-cover-replacement',
    metaTitle: 'iPhone Back Cover Replacement Melbourne | Cheapest Repairs Guaranteed | iTech Repairs',
    metaDescription:
      'Damaged iPhone back cover in Melbourne? iTech Repairs — cheapest repairs guaranteed, on the spot 15 minute repairs, exact colour match, lifetime warranty. Walk in today.',
    h1: 'iPhone Back Cover Replacement Melbourne',
    intro:
      'The back housing of your iPhone takes more punishment than most people realise — it absorbs impacts, supports the camera module, and contributes to the phone\'s structural integrity. Whether your back cover is cracked, bent, or cosmetically damaged, iTech Repairs replaces back covers and housings for all iPhone models in Melbourne, with an exact colour match and all original buttons re-fitted.',
    symptoms: [
      {
        title: 'Cracked Plastic or Metal Back Cover',
        desc: 'The rear housing has cracked or broken, either from a direct impact or from accumulated stress over time.',
      },
      {
        title: 'Bent Housing',
        desc: 'The iPhone\'s frame or rear cover has bent — from being sat on, placed in a tight pocket, or dropped at an angle — affecting how the device sits flat.',
      },
      {
        title: 'Cosmetic Damage',
        desc: 'Deep scratches, dents, or chipping on the back cover that affect the appearance and perceived value of your device.',
      },
    ],
    benefits: [
      {
        title: 'Exact Colour Match',
        desc: 'We source back covers in the original colour of your iPhone — Space Grey, Silver, Gold, Blue, Purple and all other finishes.',
      },
      {
        title: 'All Buttons Re-Fitted',
        desc: 'Side buttons, mute switch, and SIM tray are removed from the original housing and re-fitted to the new cover to ensure all controls work perfectly.',
      },
      {
        title: 'Water Resistance Maintained',
        desc: 'Original waterproofing seals are replaced during the housing swap to maintain the phone\'s dust and water resistance rating.',
      },
    ],
    faqs: [
      {
        question: 'What is the difference between back cover and back glass repair?',
        answer:
          'Back glass repair replaces just the rear glass panel on glass-back iPhones (iPhone 8 and later). Back cover replacement involves swapping the entire rear housing — including the frame and any plastic or metal elements — which is more common on older models.',
      },
      {
        question: 'How much does back cover replacement cost?',
        answer:
          'Pricing varies based on the iPhone model and the type of housing required. Call us or walk in for a free assessment and exact quote.',
      },
      {
        question: 'Which iPhone models support back cover replacement?',
        answer:
          'We offer back cover and housing replacement across all iPhone generations — from the iPhone 6 through to current models.',
      },
    ],
    relatedServices: [
      { label: 'iPhone Back Glass Repair', href: '/iphone-back-glass-repair' },
      { label: 'iPhone Screen Repair', href: '/iphone-screen-repair' },
      { label: 'iPhone Volume Button Repair', href: '/iphone-volume-button-repair' },
    ],
    modelLinks: [
      { label: 'iPhone 17 Pro Max', href: '/iphone-17-pro-max-back-cover-replacement-melbourne' },
      { label: 'iPhone 17 Pro', href: '/iphone-17-pro-back-cover-replacement-melbourne' },
      { label: 'iPhone 16 Pro Max', href: '/iphone-16-pro-max-back-cover-replacement-melbourne' },
      { label: 'iPhone 16 Pro', href: '/iphone-16-pro-back-cover-replacement-melbourne' },
      { label: 'iPhone 15 Pro Max', href: '/iphone-15-pro-max-back-cover-replacement-melbourne' },
      { label: 'iPhone 15 Pro', href: '/iphone-15-pro-back-cover-replacement-melbourne' },
      { label: 'iPhone 14 Pro', href: '/iphone-14-pro-back-cover-replacement-melbourne' },
      { label: 'iPhone 13', href: '/iphone-13-back-cover-replacement-melbourne' },
    ],
  },

  // -------------------------------------------------------------------------
  // 7. iphone-rear-camera-repair
  // -------------------------------------------------------------------------
  {
    slug: 'iphone-rear-camera-repair',
    repairSlug: 'rear-camera-replacement',
    metaTitle: 'iPhone Rear Camera Repair Melbourne | Cheapest Repairs Guaranteed | iTech Repairs',
    metaDescription:
      'Blurry or broken iPhone rear camera in Melbourne? iTech Repairs — cheapest repairs guaranteed, on the spot 15 minute repairs, video and photo tested. Walk in today.',
    h1: 'iPhone Rear Camera Repair Melbourne',
    intro:
      'Your iPhone camera is one of its most-used features — and when it starts producing blurry photos, crashes on opening, or stops working entirely, it\'s immediately noticeable. iTech Repairs replaces rear camera modules on all iPhone models in Melbourne, from the single-lens iPhone SE through to the triple-camera iPhone 17 Pro Max. We test photo quality, video, optical zoom, and ProRes on Pro models before returning your device.',
    symptoms: [
      {
        title: 'Blurry Photos',
        desc: 'Images are consistently out of focus regardless of lighting conditions — usually a sign of optical image stabilisation failure or a damaged lens element.',
      },
      {
        title: 'Camera Won\'t Open or Crashes',
        desc: 'The camera app freezes on launch, shows a black viewfinder, or crashes back to the home screen immediately.',
      },
      {
        title: 'Black Camera Screen',
        desc: 'The camera launches but shows only a black screen in the viewfinder, with no live preview from the rear camera.',
      },
      {
        title: 'Autofocus Not Working',
        desc: 'The camera cannot lock focus on any subject — images look blurry in the centre, and tapping to focus has no effect.',
      },
      {
        title: 'Cracked Lens Glass',
        desc: 'The protective glass over the camera lens is cracked or shattered, causing flare, blur and debris in photos.',
      },
    ],
    benefits: [
      {
        title: 'Full Camera Module Replacement',
        desc: 'We replace the complete camera module — sensor, lens assembly, and OIS mechanism — not just the outer glass.',
      },
      {
        title: 'Video and Photo Tested',
        desc: 'After repair, we shoot photos and video in multiple lighting conditions to confirm sharpness, focus, and stabilisation.',
      },
      {
        title: 'Optical Zoom Verified',
        desc: 'On multi-lens models, we test every focal length — wide, ultrawide, and telephoto — to ensure all lenses perform correctly.',
      },
      {
        title: 'ProRes Tested on Pro Models',
        desc: 'For iPhone 13 Pro and later Pro models, we verify ProRes video recording is functional after the repair.',
      },
    ],
    faqs: [
      {
        question: 'Will camera quality be as good as before after repair?',
        answer:
          'Yes. We use high-quality replacement modules that match the specifications of the original camera. After fitting, we test image quality before returning your device.',
      },
      {
        question: 'Can you just replace the lens glass rather than the whole module?',
        answer:
          'For minor lens glass cracks, we can replace just the lens glass on some models — see our iPhone Camera Lens Repair service. For module failures, a full replacement is required.',
      },
      {
        question: 'How much does iPhone rear camera repair cost?',
        answer:
          'Pricing varies by model and camera configuration. Pro and Pro Max models with triple-camera systems are priced differently from standard models. Walk in or call for a quote.',
      },
      {
        question: 'Do you repair Pro models with periscope or telephoto cameras?',
        answer:
          'Yes. We stock camera modules for iPhone 15 Pro, 16 Pro, and 17 Pro models including periscope telephoto systems.',
      },
    ],
    relatedServices: [
      { label: 'iPhone Front Camera Repair', href: '/iphone-front-camera-repair' },
      { label: 'iPhone Camera Lens Repair', href: '/iphone-camera-lens-repair' },
      { label: 'iPhone Screen Repair', href: '/iphone-screen-repair' },
    ],
    modelLinks: [
      { label: 'iPhone 17 Pro Max', href: '/iphone-17-pro-max-rear-camera-replacement-melbourne' },
      { label: 'iPhone 17 Pro', href: '/iphone-17-pro-rear-camera-replacement-melbourne' },
      { label: 'iPhone 16 Pro Max', href: '/iphone-16-pro-max-rear-camera-replacement-melbourne' },
      { label: 'iPhone 16 Pro', href: '/iphone-16-pro-rear-camera-replacement-melbourne' },
      { label: 'iPhone 15 Pro Max', href: '/iphone-15-pro-max-rear-camera-replacement-melbourne' },
      { label: 'iPhone 15 Pro', href: '/iphone-15-pro-rear-camera-replacement-melbourne' },
      { label: 'iPhone 14 Pro', href: '/iphone-14-pro-rear-camera-replacement-melbourne' },
      { label: 'iPhone 13', href: '/iphone-13-rear-camera-replacement-melbourne' },
    ],
  },

  // -------------------------------------------------------------------------
  // 8. iphone-front-camera-repair
  // -------------------------------------------------------------------------
  {
    slug: 'iphone-front-camera-repair',
    repairSlug: 'front-camera-replacement',
    metaTitle: 'iPhone Front Camera Repair Melbourne | Cheapest Repairs Guaranteed | iTech Repairs',
    metaDescription:
      'iPhone front camera not working in Melbourne? iTech Repairs — cheapest repairs guaranteed, on the spot 15 minute repairs, Face ID tested, FaceTime verified. Walk in today.',
    h1: 'iPhone Front Camera Repair Melbourne',
    intro:
      'The iPhone\'s front-facing camera handles much more than selfies — it\'s also responsible for FaceTime video calls and, on Face ID-equipped models, the TrueDepth sensor system used for secure authentication. When the front camera fails, it affects video calls, selfie photography, and potentially Face ID. iTech Repairs replaces front camera assemblies on all iPhone models in Melbourne with full post-repair testing.',
    symptoms: [
      {
        title: 'Blurry Selfies',
        desc: 'Front camera photos are consistently out of focus or lack sharpness — the image appears foggy or soft regardless of how still you hold the phone.',
      },
      {
        title: 'Camera Black or Frozen',
        desc: 'Switching to the front camera shows a black screen or frozen image in the viewfinder, and the preview doesn\'t respond.',
      },
      {
        title: 'FaceTime Video Not Working',
        desc: 'During FaceTime calls, the other party can\'t see you — your outgoing video feed is black or unavailable.',
      },
      {
        title: 'Face ID Camera Issues',
        desc: 'If the TrueDepth dot projector or flood illuminator is damaged, Face ID may fail to set up or fail to recognise your face.',
      },
    ],
    benefits: [
      {
        title: 'FaceTime Tested',
        desc: 'After repair, we verify FaceTime video quality with a live test call to confirm the front camera is transmitting a clear image.',
      },
      {
        title: 'Face ID Tested',
        desc: 'We re-enrol Face ID following front camera repairs and verify multiple recognition attempts to confirm functionality.',
      },
      {
        title: 'Selfie Quality Verified',
        desc: 'We take test selfies in different lighting conditions to ensure sharpness, colour accuracy, and portrait mode perform correctly.',
      },
    ],
    faqs: [
      {
        question: 'Will Face ID still work after a front camera repair?',
        answer:
          'In most cases yes, provided the original Face ID components are transferred carefully during the repair. Face ID is paired to the logic board — we always work to preserve the original TrueDepth components.',
      },
      {
        question: 'Can you fix FaceTime video quality with a camera replacement?',
        answer:
          'Yes. A degraded or damaged front camera is a common cause of poor FaceTime video quality. A replacement typically restores clear video calling performance.',
      },
      {
        question: 'How much does front camera repair cost?',
        answer:
          'Pricing varies by iPhone model. Walk in or call us for a free quote before any work begins.',
      },
    ],
    relatedServices: [
      { label: 'iPhone Rear Camera Repair', href: '/iphone-rear-camera-repair' },
      { label: 'iPhone Face ID Repair', href: '/iphone-face-id-repair' },
      { label: 'iPhone Screen Repair', href: '/iphone-screen-repair' },
    ],
    modelLinks: [
      { label: 'iPhone 17 Pro Max', href: '/iphone-17-pro-max-front-camera-replacement-melbourne' },
      { label: 'iPhone 17 Pro', href: '/iphone-17-pro-front-camera-replacement-melbourne' },
      { label: 'iPhone 16 Pro Max', href: '/iphone-16-pro-max-front-camera-replacement-melbourne' },
      { label: 'iPhone 16 Pro', href: '/iphone-16-pro-front-camera-replacement-melbourne' },
      { label: 'iPhone 15 Pro Max', href: '/iphone-15-pro-max-front-camera-replacement-melbourne' },
      { label: 'iPhone 15 Pro', href: '/iphone-15-pro-front-camera-replacement-melbourne' },
      { label: 'iPhone 14 Pro', href: '/iphone-14-pro-front-camera-replacement-melbourne' },
      { label: 'iPhone 13', href: '/iphone-13-front-camera-replacement-melbourne' },
    ],
  },

  // -------------------------------------------------------------------------
  // 9. iphone-camera-lens-repair
  // -------------------------------------------------------------------------
  {
    slug: 'iphone-camera-lens-repair',
    repairSlug: 'camera-lens-replacement',
    metaTitle: 'iPhone Camera Lens Repair Melbourne | Cheapest Repairs Guaranteed | iTech Repairs',
    metaDescription:
      'Cracked or scratched iPhone camera lens in Melbourne? iTech Repairs — cheapest repairs guaranteed, on the spot 15 minute repairs, lens-only saves cost. Walk in today.',
    h1: 'iPhone Camera Lens Repair Melbourne',
    intro:
      'The protective glass over your iPhone\'s camera lens is the first line of defence for the optics beneath. When this glass cracks, shatters, or becomes deeply scratched, light scattering ruins your photos with flare, blur, and reduced contrast. iTech Repairs offers lens glass replacement on all iPhone models — and where possible, we replace just the lens glass rather than the full camera module, saving you money without compromising on image quality.',
    symptoms: [
      {
        title: 'Blurry Photos from Scratched Lens',
        desc: 'Surface scratches on the camera lens glass cause light to scatter, producing hazy, low-contrast images particularly in bright or backlit conditions.',
      },
      {
        title: 'Cracked Lens Glass',
        desc: 'A crack across the lens glass allows dust and moisture into the camera module and creates visible artefacts in every photo.',
      },
      {
        title: 'Lens Glass Has Fallen Out',
        desc: 'The small glass disc covering one or more lenses has become dislodged and fallen out, leaving the sensor exposed.',
      },
      {
        title: 'Flare or Streaks in Photos',
        desc: 'You see radiating flare lines or streak patterns in photos when shooting towards light sources — a sign of lens glass damage.',
      },
    ],
    benefits: [
      {
        title: 'Lens-Only Replacement Where Possible',
        desc: 'When the camera module itself is undamaged, we replace only the lens glass — a more affordable repair that restores full photo quality.',
      },
      {
        title: 'Saves Cost vs Full Module',
        desc: 'A lens glass replacement costs significantly less than a full camera module swap, making it the smart first option for lens damage.',
      },
      {
        title: 'Photo Quality Tested',
        desc: 'After fitting the new lens glass, we shoot test photos in multiple conditions to confirm clarity, sharpness, and freedom from flare.',
      },
    ],
    faqs: [
      {
        question: 'Can you always replace just the lens glass?',
        answer:
          'We attempt lens-only replacement whenever possible. If debris or moisture has entered the module through the cracked lens, a full module replacement may be necessary.',
      },
      {
        question: 'How much does camera lens repair cost?',
        answer:
          'Lens glass replacement is generally more affordable than a full camera module. Pricing varies by model — walk in or call for a quote.',
      },
      {
        question: 'Which iPhone models have separate lens glass that can be replaced?',
        answer:
          'Most iPhone models from the iPhone 11 onwards have individual lens glass elements on the rear camera bump. On older models, the lens glass is integrated into the module.',
      },
    ],
    relatedServices: [
      { label: 'iPhone Rear Camera Repair', href: '/iphone-rear-camera-repair' },
      { label: 'iPhone Front Camera Repair', href: '/iphone-front-camera-repair' },
      { label: 'iPhone Back Glass Repair', href: '/iphone-back-glass-repair' },
    ],
    modelLinks: [
      { label: 'iPhone 17 Pro Max', href: '/iphone-17-pro-max-camera-lens-replacement-melbourne' },
      { label: 'iPhone 17 Pro', href: '/iphone-17-pro-camera-lens-replacement-melbourne' },
      { label: 'iPhone 16 Pro Max', href: '/iphone-16-pro-max-camera-lens-replacement-melbourne' },
      { label: 'iPhone 16 Pro', href: '/iphone-16-pro-camera-lens-replacement-melbourne' },
      { label: 'iPhone 15 Pro Max', href: '/iphone-15-pro-max-camera-lens-replacement-melbourne' },
      { label: 'iPhone 15 Pro', href: '/iphone-15-pro-camera-lens-replacement-melbourne' },
      { label: 'iPhone 14 Pro', href: '/iphone-14-pro-camera-lens-replacement-melbourne' },
      { label: 'iPhone 13', href: '/iphone-13-camera-lens-replacement-melbourne' },
    ],
  },

  // -------------------------------------------------------------------------
  // 10. iphone-speaker-repair
  // -------------------------------------------------------------------------
  {
    slug: 'iphone-speaker-repair',
    repairSlug: 'loudspeaker-replacement',
    metaTitle: 'iPhone Speaker Repair Melbourne | Cheapest Repairs Guaranteed | iTech Repairs',
    metaDescription:
      'Muffled or no sound from your iPhone speaker in Melbourne? iTech Repairs — cheapest repairs guaranteed, on the spot 15 minute repairs, audio fully tested. Walk in today.',
    h1: 'iPhone Speaker Repair Melbourne',
    intro:
      'A muffled, distorted, or completely silent iPhone loudspeaker makes phone calls, music, and media nearly unusable. Before assuming the worst, it\'s worth having our technicians check the speaker grille for debris — but if the loudspeaker assembly itself has failed, iTech Repairs replaces the full loudspeaker unit on all iPhone models in Melbourne, on the spot.',
    symptoms: [
      {
        title: 'Muffled or Distorted Audio',
        desc: 'Sound from the bottom speaker is muffled, crackly, or distorted — often gradually worsening over time, especially after water exposure.',
      },
      {
        title: 'No Sound from Speaker',
        desc: 'The loudspeaker produces no sound at all during calls, music, or video playback, even at maximum volume.',
      },
      {
        title: 'Music Only Through One Speaker',
        desc: 'On stereo iPhone models, sound comes from the top earpiece speaker only, with nothing from the bottom loudspeaker.',
      },
      {
        title: 'Calls on Speaker Very Quiet',
        desc: 'Speaker calls are barely audible even at full volume, making hands-free calling practically impossible.',
      },
    ],
    benefits: [
      {
        title: 'Full Loudspeaker Assembly Replaced',
        desc: 'We replace the complete loudspeaker assembly including the driver and grille mesh, restoring full volume and clarity.',
      },
      {
        title: 'Audio Tested Across Profiles',
        desc: 'We test the repaired speaker using ringtones, media audio, phone calls, and Siri responses to ensure consistent performance.',
      },
      {
        title: 'Ringtone and Media Tested',
        desc: 'Both ringtone volume and media (music/video) audio are verified at multiple volume levels before returning your phone.',
      },
    ],
    faqs: [
      {
        question: 'Is the speaker the same as the earpiece?',
        answer:
          'No. The loudspeaker (or bottom speaker) is the main audio output for media and speakerphone, located at the bottom of the device. The earpiece is the smaller speaker at the top used for phone calls held to your ear.',
      },
      {
        question: 'How much does iPhone speaker repair cost?',
        answer:
          'Speaker replacement pricing varies by model. Walk in or call for an exact quote.',
      },
      {
        question: 'How long does speaker repair take?',
        answer:
          'Loudspeaker replacement is typically completed in 15–20 minutes on the spot.',
      },
      {
        question: 'Can you fix both speakers at once?',
        answer:
          'Yes. If both the bottom loudspeaker and top earpiece speaker are affected, we can replace both components in the same repair session.',
      },
    ],
    relatedServices: [
      { label: 'iPhone Earpiece Repair', href: '/iphone-earpiece-repair' },
      { label: 'iPhone Microphone Repair', href: '/iphone-microphone-repair' },
      { label: 'iPhone Charging Port Repair', href: '/iphone-charging-port-repair' },
    ],
    modelLinks: [
      { label: 'iPhone 17 Pro Max', href: '/iphone-17-pro-max-loudspeaker-replacement-melbourne' },
      { label: 'iPhone 17 Pro', href: '/iphone-17-pro-loudspeaker-replacement-melbourne' },
      { label: 'iPhone 16 Pro Max', href: '/iphone-16-pro-max-loudspeaker-replacement-melbourne' },
      { label: 'iPhone 16 Pro', href: '/iphone-16-pro-loudspeaker-replacement-melbourne' },
      { label: 'iPhone 15 Pro Max', href: '/iphone-15-pro-max-loudspeaker-replacement-melbourne' },
      { label: 'iPhone 15 Pro', href: '/iphone-15-pro-loudspeaker-replacement-melbourne' },
      { label: 'iPhone 14 Pro', href: '/iphone-14-pro-loudspeaker-replacement-melbourne' },
      { label: 'iPhone 13', href: '/iphone-13-loudspeaker-replacement-melbourne' },
    ],
  },

  // -------------------------------------------------------------------------
  // 11. iphone-earpiece-repair
  // -------------------------------------------------------------------------
  {
    slug: 'iphone-earpiece-repair',
    repairSlug: 'earpiece-replacement',
    metaTitle: 'iPhone Earpiece Repair Melbourne | Cheapest Repairs Guaranteed | iTech Repairs',
    metaDescription:
      'Can\'t hear during iPhone calls in Melbourne? iTech Repairs — cheapest repairs guaranteed, on the spot 15 minute earpiece repairs, call quality tested. Walk in today.',
    h1: 'iPhone Earpiece Repair Melbourne',
    intro:
      'The earpiece speaker — the small speaker at the top of your iPhone — is what you hear during regular phone calls. When it becomes muffled, crackly, or completely silent, every phone call becomes a struggle. iTech Repairs replaces iPhone earpiece speakers on all models in Melbourne, with call quality tested after every repair to verify clear, natural voice reproduction.',
    symptoms: [
      {
        title: 'Can\'t Hear During Phone Calls',
        desc: 'You can hear nothing when holding the phone to your ear during a call, even though the microphone is working and the caller can hear you.',
      },
      {
        title: 'Very Quiet on Calls',
        desc: 'Call audio is barely audible at maximum volume, forcing you to strain to hear the other person even in quiet environments.',
      },
      {
        title: 'Earpiece Crackles',
        desc: 'Audio during calls is distorted with crackling, buzzing, or static sounds — often caused by debris in the earpiece grille or a damaged speaker driver.',
      },
      {
        title: 'Forced to Use Speakerphone',
        desc: 'You\'ve started putting all calls on speakerphone because the earpiece is too quiet or distorted to use normally.',
      },
    ],
    benefits: [
      {
        title: 'Earpiece Fully Replaced',
        desc: 'The complete earpiece assembly — including the speaker driver and integrated proximity sensor components — is replaced with a new unit.',
      },
      {
        title: 'Call Quality Tested',
        desc: 'After replacement, we make a test call and listen through the earpiece at multiple volume levels to verify clear audio reproduction.',
      },
      {
        title: 'Voice Clarity Verified',
        desc: 'We check that voice audio sounds natural, clear, and free from distortion during a live call before returning your phone.',
      },
    ],
    faqs: [
      {
        question: 'What is the difference between the earpiece and the loudspeaker?',
        answer:
          'The earpiece is the small rectangular speaker at the top of your iPhone used for regular phone calls held to your ear. The loudspeaker is the bottom speaker used for speakerphone, music, and media. They are separate components.',
      },
      {
        question: 'Does the proximity sensor sit near the earpiece?',
        answer:
          'Yes. On many iPhone models, the proximity sensor (and on Face ID models, some TrueDepth components) are located in the same assembly as the earpiece. We take care to preserve these components during earpiece repair.',
      },
      {
        question: 'How much does earpiece repair cost?',
        answer:
          'Earpiece replacement pricing varies by model. Walk in or call us for a free assessment and quote.',
      },
    ],
    relatedServices: [
      { label: 'iPhone Speaker Repair', href: '/iphone-speaker-repair' },
      { label: 'iPhone Microphone Repair', href: '/iphone-microphone-repair' },
      { label: 'iPhone Proximity Sensor Repair', href: '/iphone-proximity-sensor-repair' },
    ],
    modelLinks: [
      { label: 'iPhone 17 Pro Max', href: '/iphone-17-pro-max-earpiece-replacement-melbourne' },
      { label: 'iPhone 17 Pro', href: '/iphone-17-pro-earpiece-replacement-melbourne' },
      { label: 'iPhone 16 Pro Max', href: '/iphone-16-pro-max-earpiece-replacement-melbourne' },
      { label: 'iPhone 16 Pro', href: '/iphone-16-pro-earpiece-replacement-melbourne' },
      { label: 'iPhone 15 Pro Max', href: '/iphone-15-pro-max-earpiece-replacement-melbourne' },
      { label: 'iPhone 15 Pro', href: '/iphone-15-pro-earpiece-replacement-melbourne' },
      { label: 'iPhone 14 Pro', href: '/iphone-14-pro-earpiece-replacement-melbourne' },
      { label: 'iPhone 13', href: '/iphone-13-earpiece-replacement-melbourne' },
    ],
  },

  // -------------------------------------------------------------------------
  // 12. iphone-microphone-repair
  // -------------------------------------------------------------------------
  {
    slug: 'iphone-microphone-repair',
    repairSlug: 'microphone-replacement',
    metaTitle: 'iPhone Microphone Repair Melbourne | Cheapest Repairs Guaranteed | iTech Repairs',
    metaDescription:
      'Callers can\'t hear you on your iPhone in Melbourne? iTech Repairs — cheapest repairs guaranteed, on the spot 15 minute repairs, calls and Siri tested. Walk in today.',
    h1: 'iPhone Microphone Repair Melbourne',
    intro:
      'When callers repeatedly tell you they can\'t hear you — or your voice sounds muffled, distant, or like you\'re underwater — the problem is almost always a faulty microphone. iPhones have multiple microphones for different scenarios: the primary bottom microphone for calls, a rear microphone for video recording, and a top microphone for noise cancellation. iTech Repairs identifies which microphone has failed and replaces it on the spot.',
    symptoms: [
      {
        title: 'Callers Say They Can\'t Hear You',
        desc: 'People on the other end of phone calls report that your voice is silent, very quiet, or cutting out completely.',
      },
      {
        title: 'Muffled on Calls',
        desc: 'Your voice sounds muffled, distant, or like you\'re speaking through water — callers can hear something but struggle to make out words.',
      },
      {
        title: 'Video Recordings Have No Audio',
        desc: 'Videos recorded with your iPhone have no audio track, or the audio is silent/barely audible on playback.',
      },
      {
        title: 'Siri Not Picking Up Voice',
        desc: 'Siri consistently fails to hear your commands, or responds to the wrong words because the microphone input is unclear.',
      },
    ],
    benefits: [
      {
        title: 'Microphone Module Replaced',
        desc: 'The affected microphone module is replaced with a new unit — the repair is targeted to the specific microphone that has failed.',
      },
      {
        title: 'Full Functional Verification',
        desc: 'We test voice calls, video recordings, and Siri voice recognition after the repair to confirm all three microphone inputs are working.',
      },
      {
        title: 'Voice Memos Test',
        desc: 'We record a Voice Memo and play it back in-store so you can hear the audio quality yourself before taking your phone.',
      },
    ],
    faqs: [
      {
        question: 'Which microphone is most likely to fail?',
        answer:
          'The primary bottom microphone (near the charging port) is the most commonly damaged, particularly from water exposure or physical impact. The rear microphone is the second most common failure point.',
      },
      {
        question: 'How much does microphone repair cost?',
        answer:
          'Pricing varies by model and which microphone needs replacing. Walk in for a free diagnostic and exact quote.',
      },
      {
        question: 'How long does microphone repair take?',
        answer:
          'Most microphone replacements are completed within 15–20 minutes on the spot.',
      },
      {
        question: 'Will you test with Voice Memos before I leave?',
        answer:
          'Yes. We record a short Voice Memo and verify the audio quality in-store so you can confirm the repair is successful before leaving.',
      },
    ],
    relatedServices: [
      { label: 'iPhone Speaker Repair', href: '/iphone-speaker-repair' },
      { label: 'iPhone Earpiece Repair', href: '/iphone-earpiece-repair' },
      { label: 'iPhone Charging Port Repair', href: '/iphone-charging-port-repair' },
    ],
    modelLinks: [
      { label: 'iPhone 17 Pro Max', href: '/iphone-17-pro-max-microphone-replacement-melbourne' },
      { label: 'iPhone 17 Pro', href: '/iphone-17-pro-microphone-replacement-melbourne' },
      { label: 'iPhone 16 Pro Max', href: '/iphone-16-pro-max-microphone-replacement-melbourne' },
      { label: 'iPhone 16 Pro', href: '/iphone-16-pro-microphone-replacement-melbourne' },
      { label: 'iPhone 15 Pro Max', href: '/iphone-15-pro-max-microphone-replacement-melbourne' },
      { label: 'iPhone 15 Pro', href: '/iphone-15-pro-microphone-replacement-melbourne' },
      { label: 'iPhone 14 Pro', href: '/iphone-14-pro-microphone-replacement-melbourne' },
      { label: 'iPhone 13', href: '/iphone-13-microphone-replacement-melbourne' },
    ],
  },

  // -------------------------------------------------------------------------
  // 13. iphone-volume-button-repair
  // -------------------------------------------------------------------------
  {
    slug: 'iphone-volume-button-repair',
    repairSlug: 'volume-button-replacement',
    metaTitle: 'iPhone Volume Button Repair Melbourne | Cheapest Repairs Guaranteed | iTech Repairs',
    metaDescription:
      'iPhone volume buttons not working in Melbourne? iTech Repairs — cheapest repairs guaranteed, on the spot 15 minute repairs, silent switch tested. Walk in today.',
    h1: 'iPhone Volume Button Repair Melbourne',
    intro:
      'Stuck, unresponsive, or broken volume buttons make it impossible to adjust media volume, silence incoming calls, or take photos with the side button shortcut. The mute/silent switch — a uniquely iPhone feature — is particularly prone to mechanical failure over time. iTech Repairs replaces volume buttons, the mute switch, and power button assemblies on all iPhone models in Melbourne with on the spot 15 minute service.',
    symptoms: [
      {
        title: 'Volume Buttons Not Clicking',
        desc: 'The volume up or down buttons feel mushy, don\'t click properly, or don\'t register in iOS when pressed.',
      },
      {
        title: 'Volume Stuck at One Level',
        desc: 'The volume is fixed at a specific level and can\'t be adjusted using the physical side buttons.',
      },
      {
        title: 'Silent Switch Not Working',
        desc: 'The mute/silent toggle switch no longer switches between ring and silent mode, or the orange indicator is always visible regardless of position.',
      },
      {
        title: 'Ringer Stuck',
        desc: 'Your iPhone is stuck in either ring or silent mode regardless of the switch position, causing missed alerts or unwanted ringing.',
      },
    ],
    benefits: [
      {
        title: 'Full Button Assembly Replaced',
        desc: 'We replace the complete button assembly — including the physical button mechanism, flex cable, and contacts — for a reliable, tactile fix.',
      },
      {
        title: 'All Button Functions Tested',
        desc: 'Volume up, volume down, and power/side button are all tested for correct operation after the repair.',
      },
      {
        title: 'Silent Switch Tested',
        desc: 'We toggle the mute switch multiple times and verify that iOS correctly transitions between ring and silent modes.',
      },
    ],
    faqs: [
      {
        question: 'How much does volume button repair cost?',
        answer:
          'Button replacement pricing varies by iPhone model. Walk in or call for a free quote.',
      },
      {
        question: 'Do you repair all the side buttons?',
        answer:
          'Yes. We replace volume up, volume down, the silent/mute switch, and the power/side button. We can replace them individually or all at once.',
      },
      {
        question: 'How long does volume button repair take?',
        answer:
          'Most button replacements are completed within 15–20 minutes on the spot.',
      },
    ],
    relatedServices: [
      { label: 'iPhone Screen Repair', href: '/iphone-screen-repair' },
      { label: 'iPhone Vibration Repair', href: '/iphone-vibration-repair' },
      { label: 'iPhone Back Cover Repair', href: '/iphone-back-cover-repair' },
    ],
    modelLinks: [
      { label: 'iPhone 17 Pro Max', href: '/iphone-17-pro-max-volume-button-replacement-melbourne' },
      { label: 'iPhone 17 Pro', href: '/iphone-17-pro-volume-button-replacement-melbourne' },
      { label: 'iPhone 16 Pro Max', href: '/iphone-16-pro-max-volume-button-replacement-melbourne' },
      { label: 'iPhone 16 Pro', href: '/iphone-16-pro-volume-button-replacement-melbourne' },
      { label: 'iPhone 15 Pro Max', href: '/iphone-15-pro-max-volume-button-replacement-melbourne' },
      { label: 'iPhone 15 Pro', href: '/iphone-15-pro-volume-button-replacement-melbourne' },
      { label: 'iPhone 14 Pro', href: '/iphone-14-pro-volume-button-replacement-melbourne' },
      { label: 'iPhone 13', href: '/iphone-13-volume-button-replacement-melbourne' },
    ],
  },

  // -------------------------------------------------------------------------
  // 14. iphone-vibration-repair
  // -------------------------------------------------------------------------
  {
    slug: 'iphone-vibration-repair',
    repairSlug: 'vibrator-replacement',
    metaTitle: 'iPhone Vibration & Haptic Repair Melbourne | Cheapest Repairs Guaranteed | iTech Repairs',
    metaDescription:
      'iPhone not vibrating in Melbourne? iTech Repairs — cheapest repairs guaranteed, on the spot 15 minute Taptic Engine replacement, all haptics tested. Walk in today.',
    h1: 'iPhone Vibration Repair Melbourne',
    intro:
      'Modern iPhones use Apple\'s Taptic Engine to deliver precise haptic feedback — from the satisfying click of the keyboard to the buzz of an incoming notification. When the Taptic Engine fails, you lose all vibration alerts and the tactile feedback that makes iOS feel polished. iTech Repairs replaces Taptic Engine units and older vibration motors on all iPhone models in Melbourne.',
    symptoms: [
      {
        title: 'No Vibration Alerts',
        desc: 'Incoming calls, messages, and notifications produce no physical buzz — you\'re missing alerts entirely when the phone is on silent.',
      },
      {
        title: 'No Haptic Feedback on Keyboard',
        desc: 'The subtle tap you feel with each key press on the iOS keyboard has disappeared, making typing feel flat and unresponsive.',
      },
      {
        title: 'Notifications Silent',
        desc: 'Alerts that previously triggered a vibration now produce no physical response, even when vibration is enabled in Settings.',
      },
      {
        title: 'Calls Not Vibrating',
        desc: 'Incoming calls no longer cause the phone to vibrate in your pocket — only the ringtone (or silence) indicates a call.',
      },
    ],
    benefits: [
      {
        title: 'Taptic Engine Replaced',
        desc: 'We replace the Taptic Engine (or older vibration motor) with a new unit that restores all haptic feedback patterns.',
      },
      {
        title: 'All Haptic Feedback Verified',
        desc: 'After replacement, we test keyboard haptics, notification vibrations, Ringtone vibration, and system haptic responses to confirm full functionality.',
      },
    ],
    faqs: [
      {
        question: 'What is a Taptic Engine?',
        answer:
          'Apple\'s Taptic Engine is a precision linear actuator that creates haptic feedback — the physical sensations associated with interactions in iOS. It replaced the older spinning vibration motor in the iPhone 7 and is present in all subsequent models.',
      },
      {
        question: 'What are the different types of haptic feedback?',
        answer:
          'iOS uses haptics for keyboard key presses, notification buzzes, system alerts (such as Apple Pay confirmation), ringtone vibration patterns, and game controller feedback. All of these are powered by the Taptic Engine.',
      },
      {
        question: 'How much does vibration/haptic repair cost?',
        answer:
          'Taptic Engine replacement pricing varies by model. Walk in or call for a quote.',
      },
    ],
    relatedServices: [
      { label: 'iPhone Volume Button Repair', href: '/iphone-volume-button-repair' },
      { label: 'iPhone Speaker Repair', href: '/iphone-speaker-repair' },
      { label: 'Free iPhone Diagnostic', href: '/iphone-diagnostic-service' },
    ],
    modelLinks: [
      { label: 'iPhone 17 Pro Max', href: '/iphone-17-pro-max-vibrator-replacement-melbourne' },
      { label: 'iPhone 17 Pro', href: '/iphone-17-pro-vibrator-replacement-melbourne' },
      { label: 'iPhone 16 Pro Max', href: '/iphone-16-pro-max-vibrator-replacement-melbourne' },
      { label: 'iPhone 16 Pro', href: '/iphone-16-pro-vibrator-replacement-melbourne' },
      { label: 'iPhone 15 Pro Max', href: '/iphone-15-pro-max-vibrator-replacement-melbourne' },
      { label: 'iPhone 15 Pro', href: '/iphone-15-pro-vibrator-replacement-melbourne' },
      { label: 'iPhone 14 Pro', href: '/iphone-14-pro-vibrator-replacement-melbourne' },
      { label: 'iPhone 13', href: '/iphone-13-vibrator-replacement-melbourne' },
    ],
  },

  // -------------------------------------------------------------------------
  // 15. iphone-proximity-sensor-repair
  // -------------------------------------------------------------------------
  {
    slug: 'iphone-proximity-sensor-repair',
    repairSlug: 'proximity-sensor-replacement',
    metaTitle: 'iPhone Proximity Sensor Repair Melbourne | Cheapest Repairs Guaranteed | iTech Repairs',
    metaDescription:
      'iPhone screen staying on during calls in Melbourne? iTech Repairs — cheapest repairs guaranteed, on the spot 15 minute proximity sensor fix. Walk in today.',
    h1: 'iPhone Proximity Sensor Repair Melbourne',
    intro:
      'The proximity sensor is a small but critical component — it detects when you hold your iPhone against your ear and automatically turns the screen off to prevent accidental touches during a call. When it fails, the screen stays lit throughout every call, leading to muted microphones, hung-up calls, and accidentally opened apps. iTech Repairs diagnoses and repairs proximity sensor issues on all iPhone models in Melbourne.',
    symptoms: [
      {
        title: 'Screen Doesn\'t Turn Off During Calls',
        desc: 'When you hold the phone to your ear to make or receive a call, the display stays on instead of switching off automatically.',
      },
      {
        title: 'Accidentally Pressing Keys During Calls',
        desc: 'Your cheek or ear triggers screen inputs mid-call — muting, activating the keypad, or even ending the call.',
      },
      {
        title: 'Sensor Blocked or Dirty',
        desc: 'The proximity sensor window at the top of the screen is covered by a screen protector, debris, or adhesive residue, blocking its operation.',
      },
    ],
    benefits: [
      {
        title: 'Sensor Replaced or Cleaned',
        desc: 'We first check for and remove any blockages. If the sensor itself has failed, we replace it with a new unit.',
      },
      {
        title: 'Tested on Live Call Simulation',
        desc: 'We simulate a phone call and bring an object near the sensor to verify the screen correctly switches on and off.',
      },
      {
        title: 'No Screen-On-Ear Issues',
        desc: 'After repair, you can make calls confidently without worrying about accidental screen presses.',
      },
    ],
    faqs: [
      {
        question: 'What does the proximity sensor do?',
        answer:
          'The proximity sensor detects nearby objects — specifically your face during a phone call — and turns the screen off to save battery and prevent accidental touches. It switches the screen back on when you move the phone away from your ear.',
      },
      {
        question: 'Why does the proximity sensor stop working?',
        answer:
          'Common causes include a thick screen protector blocking the sensor window, a poor-quality screen repair that didn\'t correctly fit the sensor assembly, physical damage, or component failure from a drop.',
      },
      {
        question: 'How much does proximity sensor repair cost?',
        answer:
          'Pricing varies by model and whether cleaning or full replacement is needed. Walk in for a free diagnostic and quote.',
      },
      {
        question: 'Does the proximity sensor have anything to do with Face ID?',
        answer:
          'On Face ID models, the proximity sensor is part of the TrueDepth camera assembly. Damage to this area can sometimes affect both proximity sensing and Face ID performance.',
      },
    ],
    relatedServices: [
      { label: 'iPhone Earpiece Repair', href: '/iphone-earpiece-repair' },
      { label: 'iPhone Front Camera Repair', href: '/iphone-front-camera-repair' },
      { label: 'iPhone Face ID Repair', href: '/iphone-face-id-repair' },
      { label: 'iPhone Screen Repair', href: '/iphone-screen-repair' },
    ],
    modelLinks: [
      {
        label: 'iPhone 17 Pro Max',
        href: '/iphone-17-pro-max-proximity-sensor-replacement-melbourne',
      },
      { label: 'iPhone 17 Pro', href: '/iphone-17-pro-proximity-sensor-replacement-melbourne' },
      {
        label: 'iPhone 16 Pro Max',
        href: '/iphone-16-pro-max-proximity-sensor-replacement-melbourne',
      },
      { label: 'iPhone 16 Pro', href: '/iphone-16-pro-proximity-sensor-replacement-melbourne' },
      {
        label: 'iPhone 15 Pro Max',
        href: '/iphone-15-pro-max-proximity-sensor-replacement-melbourne',
      },
      { label: 'iPhone 15 Pro', href: '/iphone-15-pro-proximity-sensor-replacement-melbourne' },
      { label: 'iPhone 14 Pro', href: '/iphone-14-pro-proximity-sensor-replacement-melbourne' },
      { label: 'iPhone 13', href: '/iphone-13-proximity-sensor-replacement-melbourne' },
    ],
  },

  // -------------------------------------------------------------------------
  // 16. iphone-face-id-repair
  // -------------------------------------------------------------------------
  {
    slug: 'iphone-face-id-repair',
    repairSlug: 'face-id-repair',
    metaTitle: 'iPhone Face ID Repair Melbourne | Cheapest Repairs Guaranteed | iTech Repairs',
    metaDescription:
      'iPhone Face ID not working in Melbourne? iTech Repairs — cheapest repairs guaranteed, on the spot 15 minute repairs, honest assessment, no fix no fee. Walk in today.',
    h1: 'iPhone Face ID Repair Melbourne',
    intro:
      'Face ID relies on Apple\'s TrueDepth camera system — a dot projector, flood illuminator, infrared camera, and front camera working in concert to map your face in three dimensions. When any of these components is damaged, Face ID fails entirely. iTech Repairs inspects and replaces TrueDepth camera components on all Face ID-equipped iPhones. We will always give you an honest assessment: Face ID is paired to the logic board at a hardware level, and some issues require Apple\'s systems tools to fully resolve — we will tell you clearly what we can and can\'t fix before charging anything.',
    symptoms: [
      {
        title: 'Face ID Not Recognising Face',
        desc: 'Face ID consistently fails to recognise you, even in good lighting and with your face held correctly in front of the camera.',
      },
      {
        title: '\'Move iPhone Lower\' Error',
        desc: 'iOS shows a persistent \'Move iPhone Lower\' or \'Face ID Is Not Available\' prompt when attempting to use or set up Face ID.',
      },
      {
        title: 'Face ID Not Available Message',
        desc: 'Settings shows \'Face ID is not available\' with no option to set it up — indicating a hardware component failure.',
      },
      {
        title: 'Failed Setup',
        desc: 'Face ID setup fails partway through with an error, even after multiple attempts from different angles.',
      },
    ],
    benefits: [
      {
        title: 'TrueDepth Camera System Checked',
        desc: 'We inspect all TrueDepth components — dot projector, flood illuminator, infrared camera, and front camera — to identify the source of the failure.',
      },
      {
        title: 'Damaged Sensors Replaced',
        desc: 'Where a camera component has failed due to physical damage, we replace it. This restores Face ID functionality in cases where the pairing to the logic board is still intact.',
      },
      {
        title: 'Honest Assessment Before Any Charge',
        desc: 'Face ID is cryptographically paired to the logic board. If the issue is at the board level, we will tell you clearly — and charge nothing for the diagnosis.',
      },
    ],
    faqs: [
      {
        question: 'Why does Face ID break after a screen repair?',
        answer:
          'Face ID can fail if the TrueDepth camera flex cable is damaged during a screen replacement. This is a common result of low-quality screen repairs that don\'t correctly handle the front camera assembly. At iTech Repairs, we always work carefully to preserve Face ID components.',
      },
      {
        question: 'Can you fully restore Face ID?',
        answer:
          'In many cases yes — if the failure is due to damaged hardware components that we can replace. However, Face ID authentication data is cryptographically tied to the Secure Enclave on the logic board. If the board itself has been damaged or replaced, Face ID cannot be restored without Apple\'s diagnostic tools.',
      },
      {
        question: 'How much does Face ID repair cost?',
        answer:
          'We charge nothing for the diagnostic. Component replacement pricing varies. We provide an exact quote after assessment and before any work begins.',
      },
    ],
    relatedServices: [
      { label: 'iPhone Front Camera Repair', href: '/iphone-front-camera-repair' },
      { label: 'iPhone Screen Repair', href: '/iphone-screen-repair' },
      { label: 'iPhone Proximity Sensor Repair', href: '/iphone-proximity-sensor-repair' },
    ],
    modelLinks: [
      { label: 'iPhone 17 Pro Max', href: '/iphone-17-pro-max-face-id-repair-melbourne' },
      { label: 'iPhone 17 Pro', href: '/iphone-17-pro-face-id-repair-melbourne' },
      { label: 'iPhone 16 Pro Max', href: '/iphone-16-pro-max-face-id-repair-melbourne' },
      { label: 'iPhone 16 Pro', href: '/iphone-16-pro-face-id-repair-melbourne' },
      { label: 'iPhone 15 Pro Max', href: '/iphone-15-pro-max-face-id-repair-melbourne' },
      { label: 'iPhone 15 Pro', href: '/iphone-15-pro-face-id-repair-melbourne' },
      { label: 'iPhone 14 Pro', href: '/iphone-14-pro-face-id-repair-melbourne' },
      { label: 'iPhone 13', href: '/iphone-13-face-id-repair-melbourne' },
    ],
  },

  // -------------------------------------------------------------------------
  // 17. iphone-touchscreen-repair
  // -------------------------------------------------------------------------
  {
    slug: 'iphone-touchscreen-repair',
    repairSlug: 'touch-screen-repair',
    metaTitle: 'iPhone Touch Screen Repair Melbourne | Cheapest Repairs Guaranteed | iTech Repairs',
    metaDescription:
      'iPhone touch screen not responding in Melbourne? iTech Repairs — cheapest repairs guaranteed, on the spot 15 minute repairs, all touch zones tested. Walk in today.',
    h1: 'iPhone Touch Screen Repair Melbourne',
    intro:
      'An iPhone with a non-responsive or poorly calibrated touch screen is essentially unusable. Unlike ghost touch — where the screen activates on its own — unresponsive touch means the screen fails to register your deliberate inputs. This can happen across the entire display or only in certain zones. iTech Repairs diagnoses and fixes digitiser failures and touch calibration issues on all iPhone models in Melbourne.',
    symptoms: [
      {
        title: 'Parts of Screen Not Responding',
        desc: 'Certain areas of the screen don\'t register touches at all — the bottom row, the edges, or a specific band across the middle.',
      },
      {
        title: 'Have to Press Hard to Register',
        desc: 'The screen requires significantly more force than normal to register a touch, making everyday use tiring and frustrating.',
      },
      {
        title: 'Entire Touch Unresponsive',
        desc: 'No touches are registered anywhere on the screen, even though the display shows content — a full digitiser failure.',
      },
      {
        title: 'Touch Offset from Taps',
        desc: 'The item that activates when you tap is noticeably offset from where you touched — the digitiser calibration has shifted.',
      },
    ],
    benefits: [
      {
        title: 'Digitiser Calibrated',
        desc: 'Where the underlying panel is intact, we recalibrate the digitiser layer to restore accurate, responsive touch registration.',
      },
      {
        title: 'Touch Response Tested Across All Zones',
        desc: 'After repair, we systematically test touch response in a grid pattern across the entire screen to verify uniform sensitivity.',
      },
      {
        title: 'Multi-Touch Gestures Verified',
        desc: 'We test pinch-to-zoom, swipe, and multi-finger gestures to confirm the digitiser handles all standard iOS interactions correctly.',
      },
    ],
    faqs: [
      {
        question: 'What is the difference between touch screen repair and glass repair?',
        answer:
          'Glass repair addresses visible cracks in the outer display glass. Touch screen repair focuses on the digitiser — the layer that detects touch input. The two layers are often replaced together, but digitiser failure can occur without visible glass damage.',
      },
      {
        question: 'What causes unresponsive touch?',
        answer:
          'Common causes include impact damage affecting the digitiser, a poor-quality screen replacement that used an inferior digitiser, connector issues between the display and logic board, or heat damage.',
      },
      {
        question: 'How much does touch screen repair cost?',
        answer:
          'Pricing depends on the cause. If a new screen assembly is needed, pricing is similar to a full screen replacement. Walk in for a free diagnostic.',
      },
    ],
    relatedServices: [
      { label: 'iPhone Screen Repair', href: '/iphone-screen-repair' },
      { label: 'iPhone Ghost Touch Repair', href: '/iphone-ghost-touch-repair' },
      { label: 'iPhone Screen Replacement', href: '/iphone-screen-replacement' },
    ],
    modelLinks: [
      { label: 'iPhone 17 Pro Max', href: '/iphone-17-pro-max-touch-screen-repair-melbourne' },
      { label: 'iPhone 17 Pro', href: '/iphone-17-pro-touch-screen-repair-melbourne' },
      { label: 'iPhone 16 Pro Max', href: '/iphone-16-pro-max-touch-screen-repair-melbourne' },
      { label: 'iPhone 16 Pro', href: '/iphone-16-pro-touch-screen-repair-melbourne' },
      { label: 'iPhone 15 Pro Max', href: '/iphone-15-pro-max-touch-screen-repair-melbourne' },
      { label: 'iPhone 15 Pro', href: '/iphone-15-pro-touch-screen-repair-melbourne' },
      { label: 'iPhone 14 Pro', href: '/iphone-14-pro-touch-screen-repair-melbourne' },
      { label: 'iPhone 13', href: '/iphone-13-touch-screen-repair-melbourne' },
    ],
  },

  // -------------------------------------------------------------------------
  // 18. iphone-ghost-touch-repair
  // -------------------------------------------------------------------------
  {
    slug: 'iphone-ghost-touch-repair',
    repairSlug: 'ghost-touch-repair',
    metaTitle: 'iPhone Ghost Touch Repair Melbourne | Cheapest Repairs Guaranteed | iTech Repairs',
    metaDescription:
      'iPhone screen tapping by itself in Melbourne? iTech Repairs — cheapest repairs guaranteed, on the spot 15 minute ghost touch repair, 30-min soak test included. Walk in today.',
    h1: 'iPhone Ghost Touch Repair Melbourne',
    intro:
      'Ghost touch is one of the most maddening iPhone problems: the screen registers taps, swipes, and keystrokes with no one touching it. Apps open and close on their own, text types itself, calls get made unintentionally. It\'s not a software glitch — it\'s a digitiser failure, and it requires a physical screen replacement to fix. iTech Repairs resolves ghost touch on all iPhone models in Melbourne on the spot, and tests the replacement for 30+ minutes to confirm it\'s resolved.',
    symptoms: [
      {
        title: 'Screen Taps by Itself',
        desc: 'Your iPhone registers phantom touches while sitting on a table or held in your hand — icons open, menus appear, and taps occur with no input from you.',
      },
      {
        title: 'Apps Open Randomly',
        desc: 'Applications launch, switch, or close on their own as the ghost touch triggers random inputs across the screen.',
      },
      {
        title: 'Text Types Itself',
        desc: 'Characters appear in text fields without you touching the keyboard — ghost touch inputs can lead to accidental messages being sent.',
      },
      {
        title: 'Phone Unusable Due to Random Inputs',
        desc: 'The phantom inputs are so frequent that you cannot reliably use the phone at all — selecting anything intentionally is nearly impossible.',
      },
    ],
    benefits: [
      {
        title: 'Full Screen Replacement',
        desc: 'Ghost touch almost always requires a complete screen assembly replacement. Patch repairs or software fixes do not resolve a faulty digitiser.',
      },
      {
        title: '30+ Minute Soak Test',
        desc: 'After fitting the replacement screen, we leave the phone on and monitor it for over 30 minutes to confirm no ghost inputs occur before returning it to you.',
      },
    ],
    faqs: [
      {
        question: 'What causes ghost touch?',
        answer:
          'Ghost touch is caused by a failing digitiser — the touch-sensing layer in your iPhone\'s screen. Causes include impact damage, an inferior replacement screen fitted elsewhere, heat damage, or the digitiser degrading over time. It is a hardware issue, not a software bug.',
      },
      {
        question: 'Are there any temporary fixes for ghost touch?',
        answer:
          'Some people find that removing a screen protector reduces ghost touch temporarily, as thick protectors can interfere with the digitiser. However, this is a temporary workaround — a screen replacement is the only reliable solution.',
      },
      {
        question: 'How much does ghost touch repair cost?',
        answer:
          'Ghost touch repair requires a full screen replacement. Pricing is the same as a standard screen replacement for your model. Walk in or call for a quote.',
      },
      {
        question: 'How long does ghost touch repair take?',
        answer:
          'The screen replacement itself takes 15–20 minutes. We then perform a 30+ minute soak test before handing the phone back.',
      },
    ],
    relatedServices: [
      { label: 'iPhone Screen Repair', href: '/iphone-screen-repair' },
      { label: 'iPhone Touch Screen Repair', href: '/iphone-touchscreen-repair' },
      { label: 'iPhone Screen Replacement', href: '/iphone-screen-replacement' },
    ],
    modelLinks: [
      { label: 'iPhone 17 Pro Max', href: '/iphone-17-pro-max-ghost-touch-repair-melbourne' },
      { label: 'iPhone 17 Pro', href: '/iphone-17-pro-ghost-touch-repair-melbourne' },
      { label: 'iPhone 16 Pro Max', href: '/iphone-16-pro-max-ghost-touch-repair-melbourne' },
      { label: 'iPhone 16 Pro', href: '/iphone-16-pro-ghost-touch-repair-melbourne' },
      { label: 'iPhone 15 Pro Max', href: '/iphone-15-pro-max-ghost-touch-repair-melbourne' },
      { label: 'iPhone 15 Pro', href: '/iphone-15-pro-ghost-touch-repair-melbourne' },
      { label: 'iPhone 14 Pro', href: '/iphone-14-pro-ghost-touch-repair-melbourne' },
      { label: 'iPhone 13', href: '/iphone-13-ghost-touch-repair-melbourne' },
    ],
  },

  // -------------------------------------------------------------------------
  // 19. iphone-water-damage-repair
  // -------------------------------------------------------------------------
  {
    slug: 'iphone-water-damage-repair',
    repairSlug: 'water-damage-repair',
    metaTitle: 'iPhone Water Damage Repair Melbourne | Cheapest Repairs Guaranteed | iTech Repairs',
    metaDescription:
      'iPhone dropped in water in Melbourne? iTech Repairs — cheapest repairs guaranteed, ultrasonic board cleaning, component-level assessment, no fix no fee. Walk in today.',
    h1: 'iPhone Water Damage Repair Melbourne',
    intro:
      'Water damage is one of the most unpredictable iPhone repairs — outcomes depend heavily on how long the device was submerged, whether it was charging at the time, and how quickly it reaches us. Despite Apple\'s IP ratings, liquid damage does occur. iTech Repairs offers professional ultrasonic cleaning, corrosion treatment, and component-level assessment for water-damaged iPhones in Melbourne. We are completely transparent: we operate a strict no fix, no fee policy on water damage cases.',
    symptoms: [
      {
        title: 'Won\'t Turn On After Water Exposure',
        desc: 'The iPhone was dropped in water, a pool, a toilet, or had liquid spilled on it, and now won\'t power on at all.',
      },
      {
        title: 'Blurry Camera from Moisture',
        desc: 'Condensation or moisture has entered the camera module, causing fogged or blurry images that persist even after the exterior has dried.',
      },
      {
        title: 'Charging Issues After Water',
        desc: 'The iPhone won\'t charge following liquid exposure, or iOS shows the \'Liquid Detected\' warning in the charging port.',
      },
      {
        title: 'Speakers Muffled After Liquid Exposure',
        desc: 'The speaker sounds muffled or gurgling after getting wet — liquid in the speaker grille affects audio output.',
      },
      {
        title: 'Corrosion Visible on Board',
        desc: 'Green or white corrosive residue has formed on internal components or connector points, causing intermittent failures.',
      },
    ],
    benefits: [
      {
        title: 'Ultrasonic Board Cleaning',
        desc: 'We disassemble the device and clean the logic board in an ultrasonic cleaner with a specialist solution that removes mineral deposits and corrosion.',
      },
      {
        title: 'Corrosion Treatment',
        desc: 'Corroded pads and components are treated and where necessary re-soldered to restore electrical connections.',
      },
      {
        title: 'Component-Level Assessment',
        desc: 'We test each major component individually to identify exactly which parts have been damaged and what can be recovered.',
      },
      {
        title: 'No Fix, No Fee',
        desc: 'We don\'t charge for a water damage repair that we can\'t complete. If we cannot restore the device, you pay nothing.',
      },
    ],
    faqs: [
      {
        question: 'How long should I wait before bringing my water-damaged iPhone in?',
        answer:
          'Bring it in immediately. Every hour of delay allows corrosion to spread further across the logic board. Do not attempt to charge it or turn it on — this can cause short circuits. Bring it to us as soon as possible.',
      },
      {
        question: 'Should I put my iPhone in rice?',
        answer:
          'No. The rice myth is a misconception — rice cannot draw moisture out of the logic board, and the delay while waiting allows corrosion to worsen. Bring the phone straight to us instead.',
      },
      {
        question: 'What is the success rate for water damage repair?',
        answer:
          'Success depends on the extent of the damage. Phones that reach us quickly and were not plugged in when damaged have a much higher recovery rate. We will give you an honest assessment before any work begins.',
      },
      {
        question: 'How much does water damage repair cost?',
        answer:
          'We don\'t charge for cases we can\'t fix. For successful repairs, cost varies based on which components need replacement. We provide a quote after assessment.',
      },
    ],
    relatedServices: [
      { label: 'iPhone Charging Port Repair', href: '/iphone-charging-port-repair' },
      { label: 'iPhone Motherboard Repair', href: '/iphone-motherboard-repair' },
      { label: 'iPhone Data Recovery', href: '/iphone-data-recovery' },
      { label: 'Free iPhone Diagnostic', href: '/iphone-diagnostic-service' },
    ],
    modelLinks: [
      { label: 'iPhone 17 Pro Max', href: '/iphone-17-pro-max-water-damage-repair-melbourne' },
      { label: 'iPhone 17 Pro', href: '/iphone-17-pro-water-damage-repair-melbourne' },
      { label: 'iPhone 16 Pro Max', href: '/iphone-16-pro-max-water-damage-repair-melbourne' },
      { label: 'iPhone 16 Pro', href: '/iphone-16-pro-water-damage-repair-melbourne' },
      { label: 'iPhone 15 Pro Max', href: '/iphone-15-pro-max-water-damage-repair-melbourne' },
      { label: 'iPhone 15 Pro', href: '/iphone-15-pro-water-damage-repair-melbourne' },
      { label: 'iPhone 14 Pro', href: '/iphone-14-pro-water-damage-repair-melbourne' },
      { label: 'iPhone 13', href: '/iphone-13-water-damage-repair-melbourne' },
    ],
  },

  // -------------------------------------------------------------------------
  // 20. iphone-data-recovery
  // -------------------------------------------------------------------------
  {
    slug: 'iphone-data-recovery',
    repairSlug: 'data-recovery',
    metaTitle: 'iPhone Data Recovery Melbourne | Cheapest Repairs Guaranteed | iTech Repairs',
    metaDescription:
      'Need to recover iPhone photos or contacts in Melbourne? iTech Repairs — cheapest repairs guaranteed, component-level data extraction, no fix no fee. Walk in to Braybrook today.',
    h1: 'iPhone Data Recovery Melbourne',
    intro:
      'Losing irreplaceable photos, contacts, or messages because your iPhone is broken, won\'t turn on, or was water damaged is devastating. If you don\'t have an iCloud or iTunes backup, all is not necessarily lost. iTech Repairs offers component-level data extraction from broken iPhones in Melbourne — recovering photos, contacts, messages, voice memos, and more from devices that can no longer boot normally.',
    symptoms: [
      {
        title: 'Broken Screen, Data Still Needed',
        desc: 'Your iPhone has a completely shattered or unresponsive screen, but you need to access photos or contacts stored on the device.',
      },
      {
        title: 'Phone Won\'t Turn On',
        desc: 'The iPhone is completely dead — no response from the screen, no boot attempt — but it contains data that hasn\'t been backed up.',
      },
      {
        title: 'Water Damaged Data Recovery',
        desc: 'Liquid damage has made the phone inoperable, but the storage chip may still be intact and readable.',
      },
      {
        title: 'Upgraded Phone, Forgot to Back Up',
        desc: 'You upgraded to a new iPhone without transferring all your data first and need to recover content from the old device.',
      },
    ],
    benefits: [
      {
        title: 'Component-Level Data Extraction',
        desc: 'Where the phone cannot boot, our technicians access the storage at a hardware level to extract your data directly.',
      },
      {
        title: 'Photos, Contacts and Messages Recovered',
        desc: 'We target recovery of photos and videos first, followed by contacts, messages, notes, and voice memos.',
      },
      {
        title: 'Confidential Handling',
        desc: 'Your personal data is handled with complete confidentiality. We do not access content beyond what is needed to verify successful recovery.',
      },
      {
        title: 'No Fix, No Fee',
        desc: 'If we cannot recover your data, we charge nothing for the attempt.',
      },
    ],
    faqs: [
      {
        question: 'What data can be recovered from a broken iPhone?',
        answer:
          'We can typically recover photos, videos, contacts, messages (SMS and iMessage where unencrypted), notes, voice memos, and call logs. The exact data recoverable depends on the state of the device.',
      },
      {
        question: 'Is my personal data kept private during recovery?',
        answer:
          'Yes. Your data is handled by our technicians only, is not stored on our systems beyond what is needed to complete the transfer, and is never shared with any third party.',
      },
      {
        question: 'How much does data recovery cost?',
        answer:
          'Pricing depends on the complexity of the recovery. We charge nothing if recovery is unsuccessful. Walk in or call for an assessment.',
      },
      {
        question: 'Can you recover data if iCloud backup is out of date?',
        answer:
          'Yes. If your iCloud backup is weeks or months old and doesn\'t include recent photos, we can attempt to recover the more recent data directly from the device storage.',
      },
    ],
    relatedServices: [
      { label: 'iPhone Water Damage Repair', href: '/iphone-water-damage-repair' },
      { label: 'iPhone Motherboard Repair', href: '/iphone-motherboard-repair' },
      { label: 'Free iPhone Diagnostic', href: '/iphone-diagnostic-service' },
      { label: 'iPhone Screen Repair', href: '/iphone-screen-repair' },
    ],
    modelLinks: [
      { label: 'iPhone 17 Pro Max', href: '/iphone-17-pro-max-data-recovery-melbourne' },
      { label: 'iPhone 17 Pro', href: '/iphone-17-pro-data-recovery-melbourne' },
      { label: 'iPhone 16 Pro Max', href: '/iphone-16-pro-max-data-recovery-melbourne' },
      { label: 'iPhone 16 Pro', href: '/iphone-16-pro-data-recovery-melbourne' },
      { label: 'iPhone 15 Pro Max', href: '/iphone-15-pro-max-data-recovery-melbourne' },
      { label: 'iPhone 15 Pro', href: '/iphone-15-pro-data-recovery-melbourne' },
      { label: 'iPhone 14 Pro', href: '/iphone-14-pro-data-recovery-melbourne' },
      { label: 'iPhone 13', href: '/iphone-13-data-recovery-melbourne' },
    ],
  },

  // -------------------------------------------------------------------------
  // 21. iphone-motherboard-repair
  // -------------------------------------------------------------------------
  {
    slug: 'iphone-motherboard-repair',
    repairSlug: 'motherboard-repair',
    metaTitle: 'iPhone Motherboard Repair Melbourne | Cheapest Repairs Guaranteed | iTech Repairs',
    metaDescription:
      'iPhone logic board failing in Melbourne? iTech Repairs — cheapest repairs guaranteed, micro-soldering and component-level board repair. Walk in to Braybrook or Spotswood.',
    h1: 'iPhone Motherboard Repair Melbourne',
    intro:
      'The logic board is the heart of your iPhone — when it fails, the entire device can become inoperable. Logic board repair requires micro-soldering skills and specialist diagnostic equipment that go far beyond standard iPhone repairs. iTech Repairs has component-level board repair capability in Melbourne, with micro-soldering technicians who can diagnose and repair logic board faults that other shops simply replace.',
    symptoms: [
      {
        title: 'Phone Won\'t Turn On',
        desc: 'The iPhone shows no response whatsoever — no screen activation, no charging indication, no warmth from components — despite having a known-good battery and screen.',
      },
      {
        title: 'Random Restarts',
        desc: 'The phone reboots unexpectedly during normal use, often multiple times per day, with no consistent trigger.',
      },
      {
        title: 'Boot Loop',
        desc: 'The iPhone repeatedly shows the Apple logo, attempts to boot, then restarts — cycling continuously without ever loading iOS.',
      },
      {
        title: 'No Service or Signal',
        desc: 'The iPhone consistently shows \'No Service\' even in areas with full network coverage, suggesting a baseband chip failure.',
      },
      {
        title: 'Not Recognised by iTunes',
        desc: 'The device is not detected by iTunes or Finder on a computer, even with different cables and ports, suggesting a USB controller failure.',
      },
    ],
    benefits: [
      {
        title: 'Micro-Soldering Capable Technicians',
        desc: 'Our technicians work with microscopes and hot-air rework stations to replace individual components on the logic board — including power ICs, charging controllers, and baseband chips.',
      },
      {
        title: 'Component-Level Diagnosis',
        desc: 'We use DC power supply current draw analysis and specialist diagnostic software to identify the exact failing component.',
      },
      {
        title: 'Board-Level Repair Where Possible',
        desc: 'Rather than recommending a full board replacement (which erases Face ID and other paired data), we repair at component level wherever feasible.',
      },
    ],
    faqs: [
      {
        question: 'Is board repair better than replacing the motherboard entirely?',
        answer:
          'For iPhones, replacing the logic board means losing Face ID, Touch ID, True Tone, and other device-paired features. Component-level repair preserves the original board — and your biometric data — making it the preferred approach wherever possible.',
      },
      {
        question: 'What board-level faults can you repair?',
        answer:
          'Common repairs include power management IC failures, charging controller faults, baseband chip issues, NAND flash storage repair, and short circuit rectification.',
      },
      {
        question: 'How long does a motherboard repair take?',
        answer:
          'Logic board repairs take longer than standard repairs — typically 1 to 3 business days depending on the complexity of the fault.',
      },
      {
        question: 'What is the cost of motherboard repair?',
        answer:
          'Board-level repair pricing varies widely depending on the fault. It is almost always significantly less than the cost of a new device. We provide a quote after diagnosis.',
      },
    ],
    relatedServices: [
      { label: 'iPhone Water Damage Repair', href: '/iphone-water-damage-repair' },
      { label: 'iPhone Data Recovery', href: '/iphone-data-recovery' },
      { label: 'Free iPhone Diagnostic', href: '/iphone-diagnostic-service' },
    ],
    modelLinks: [
      { label: 'iPhone 17 Pro Max', href: '/iphone-17-pro-max-motherboard-repair-melbourne' },
      { label: 'iPhone 17 Pro', href: '/iphone-17-pro-motherboard-repair-melbourne' },
      { label: 'iPhone 16 Pro Max', href: '/iphone-16-pro-max-motherboard-repair-melbourne' },
      { label: 'iPhone 16 Pro', href: '/iphone-16-pro-motherboard-repair-melbourne' },
      { label: 'iPhone 15 Pro Max', href: '/iphone-15-pro-max-motherboard-repair-melbourne' },
      { label: 'iPhone 15 Pro', href: '/iphone-15-pro-motherboard-repair-melbourne' },
      { label: 'iPhone 14 Pro', href: '/iphone-14-pro-motherboard-repair-melbourne' },
      { label: 'iPhone 13', href: '/iphone-13-motherboard-repair-melbourne' },
    ],
  },

  // -------------------------------------------------------------------------
  // 22. iphone-diagnostic-service
  // -------------------------------------------------------------------------
  {
    slug: 'iphone-diagnostic-service',
    repairSlug: 'diagnostic',
    metaTitle: 'Free iPhone Diagnostic Melbourne | Cheapest Repairs Guaranteed | iTech Repairs',
    metaDescription:
      "Not sure what's wrong with your iPhone in Melbourne? Free diagnostic at iTech Repairs — cheapest repairs guaranteed, on the spot 15 minute repairs. Walk in today.",
    h1: 'Free iPhone Diagnostic Service Melbourne',
    intro:
      'Not sure what\'s wrong with your iPhone — or whether it\'s even worth repairing? Walk into iTech Repairs in Braybrook or Spotswood for a completely free diagnostic. Our technicians will identify faults across hardware and software in minutes, give you a plain-English explanation of what\'s wrong, and provide a no-obligation repair quote. We never pressure you into a repair you don\'t need.',
    symptoms: [
      {
        title: 'Phone Acting Strangely',
        desc: 'Your iPhone is behaving unexpectedly — random shutdowns, app crashes, unusual battery drain, or glitchy performance — and you\'re not sure of the cause.',
      },
      {
        title: 'Multiple Issues at Once',
        desc: 'Several things seem wrong simultaneously: the battery is poor, the screen sometimes flickers, and calls sound odd. A diagnostic identifies which faults are related and what to fix first.',
      },
      {
        title: 'Not Sure What\'s Wrong',
        desc: 'The phone just doesn\'t feel right — it\'s slower than it used to be, gets warm, or something is off — but you can\'t pinpoint a specific problem.',
      },
      {
        title: 'Buying a Second-Hand iPhone',
        desc: 'You\'re considering purchasing a used iPhone and want an independent check to verify it hasn\'t been reported stolen, has a healthy battery, and has no hidden faults.',
      },
      {
        title: 'Insurance or Legal Report',
        desc: 'You need a written assessment of your iPhone\'s condition for an insurance claim, warranty dispute, or legal matter.',
      },
    ],
    benefits: [
      {
        title: 'Completely Free',
        desc: 'The diagnostic service costs nothing — no call-out fee, no bench fee, no charge if you decide not to proceed with any repair.',
      },
      {
        title: 'No Obligation',
        desc: 'You are under absolutely no obligation to book a repair after the diagnostic. We will give you the facts and let you decide.',
      },
      {
        title: 'Results in Minutes',
        desc: 'Our technicians can complete a comprehensive hardware and software check on most iPhones in under 15 minutes.',
      },
      {
        title: 'Honest Assessment',
        desc: 'We tell you exactly what is wrong, what is fine, and what we recommend — without upselling repairs you don\'t need.',
      },
      {
        title: 'Written Report Available',
        desc: 'If you need a written diagnostic report for insurance or legal purposes, we can provide one upon request.',
      },
    ],
    faqs: [
      {
        question: 'What does a free iPhone diagnostic cover?',
        answer:
          'Our diagnostic checks battery health, screen and touch response, all cameras, microphone and speaker function, charging port, buttons, Face ID or Touch ID, Wi-Fi and Bluetooth, and general iOS software health.',
      },
      {
        question: 'How long does the diagnostic take?',
        answer:
          'Most diagnostics are completed within 10–15 minutes. More complex issues — such as intermittent faults or suspected logic board problems — may take a little longer.',
      },
      {
        question: 'Is the diagnostic really free?',
        answer:
          'Yes, completely free, with no strings attached. We do not charge a diagnostic fee that is rebated on a repair — it is genuinely free whether you proceed with a repair or not.',
      },
      {
        question: 'Do I have to book a repair after the diagnostic?',
        answer:
          'No. The diagnostic is entirely separate from any repair. We provide the assessment and quote, and the decision is entirely yours.',
      },
    ],
    relatedServices: [
      { label: 'iPhone Screen Repair', href: '/iphone-screen-repair' },
      { label: 'iPhone Battery Replacement', href: '/iphone-battery-replacement' },
      { label: 'iPhone Water Damage Repair', href: '/iphone-water-damage-repair' },
      { label: 'iPhone Motherboard Repair', href: '/iphone-motherboard-repair' },
    ],
    modelLinks: [
      { label: 'iPhone 17 Pro Max', href: '/iphone-17-pro-max-diagnostic-melbourne' },
      { label: 'iPhone 17 Pro', href: '/iphone-17-pro-diagnostic-melbourne' },
      { label: 'iPhone 16 Pro Max', href: '/iphone-16-pro-max-diagnostic-melbourne' },
      { label: 'iPhone 16 Pro', href: '/iphone-16-pro-diagnostic-melbourne' },
      { label: 'iPhone 15 Pro Max', href: '/iphone-15-pro-max-diagnostic-melbourne' },
      { label: 'iPhone 15 Pro', href: '/iphone-15-pro-diagnostic-melbourne' },
      { label: 'iPhone 14 Pro', href: '/iphone-14-pro-diagnostic-melbourne' },
      { label: 'iPhone 13', href: '/iphone-13-diagnostic-melbourne' },
    ],
  },
]

export const IPHONE_SERVICE_BY_SLUG = new Map(
  IPHONE_SERVICE_PAGES.map((p) => [p.slug, p])
)
