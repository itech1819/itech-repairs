export interface BrandServicePageData {
  slug: string
  hubHref: string
  hubLabel: string
  /** Canonical repair slug used to build model-specific repair page hrefs */
  repairSlug: string
  metaTitle: string
  metaDescription: string
  h1: string
  intro: string
  symptoms: { title: string; desc: string }[]
  benefits: { title: string; desc: string }[]
  faqs: { question: string; answer: string }[]
  relatedServices: { label: string; href: string }[]
}

// ─── SAMSUNG ─────────────────────────────────────────────────────────────────

const samsungRelated = (exclude: string) => [
  { label: 'Samsung Screen Repair', href: '/samsung-screen-repair' },
  { label: 'Samsung Battery Replacement', href: '/samsung-battery-replacement' },
  { label: 'Samsung Charging Port Repair', href: '/samsung-charging-port-repair' },
  { label: 'Samsung Back Glass Repair', href: '/samsung-back-glass-repair' },
  { label: 'Samsung Camera Repair', href: '/samsung-camera-repair' },
  { label: 'Samsung Speaker Repair', href: '/samsung-speaker-repair' },
  { label: 'Samsung Microphone Repair', href: '/samsung-microphone-repair' },
  { label: 'Samsung Water Damage Repair', href: '/samsung-water-damage-repair' },
  { label: 'Free Device Inspection', href: '/samsung-free-device-inspection' },
  { label: 'Insurance Damage Report', href: '/samsung-insurance-damage-report' },
].filter(s => !s.href.includes(exclude))

// ─── PIXEL ────────────────────────────────────────────────────────────────────

const pixelRelated = (exclude: string) => [
  { label: 'Google Pixel Screen Repair', href: '/google-pixel-screen-repair' },
  { label: 'Google Pixel Battery Replacement', href: '/google-pixel-battery-replacement' },
  { label: 'Google Pixel Charging Port Repair', href: '/google-pixel-charging-port-repair' },
  { label: 'Google Pixel Camera Repair', href: '/google-pixel-camera-repair' },
  { label: 'Google Pixel Water Damage Repair', href: '/google-pixel-water-damage-repair' },
  { label: 'Free Device Inspection', href: '/google-pixel-free-device-inspection' },
  { label: 'Insurance Damage Report', href: '/google-pixel-insurance-damage-report' },
].filter(s => !s.href.includes(exclude))

// ─── IPAD ─────────────────────────────────────────────────────────────────────

const ipadRelated = (exclude: string) => [
  { label: 'iPad Screen Repair', href: '/ipad-screen-repair' },
  { label: 'iPad Battery Replacement', href: '/ipad-battery-replacement' },
  { label: 'iPad Charging Port Repair', href: '/ipad-charging-port-repair' },
  { label: 'iPad Camera Repair', href: '/ipad-camera-repair' },
  { label: 'iPad Water Damage Repair', href: '/ipad-water-damage-repair' },
  { label: 'Free Device Inspection', href: '/ipad-free-device-inspection' },
  { label: 'Insurance Damage Report', href: '/ipad-insurance-damage-report' },
].filter(s => !s.href.includes(exclude))

// ─── MACBOOK ──────────────────────────────────────────────────────────────────

const macbookRelated = (exclude: string) => [
  { label: 'MacBook Screen Repair', href: '/macbook-screen-repair' },
  { label: 'MacBook Battery Replacement', href: '/macbook-battery-replacement' },
  { label: 'MacBook Keyboard Repair', href: '/macbook-keyboard-repair' },
  { label: 'MacBook Trackpad Repair', href: '/macbook-trackpad-repair' },
  { label: 'MacBook Water Damage Repair', href: '/macbook-water-damage-repair' },
  { label: 'Free Device Inspection', href: '/macbook-free-device-inspection' },
  { label: 'Insurance Damage Report', href: '/macbook-insurance-damage-report' },
].filter(s => !s.href.includes(exclude))

// ─── PAGE DATA ────────────────────────────────────────────────────────────────

export const BRAND_SERVICE_PAGES: BrandServicePageData[] = [

  // ═══ SAMSUNG ════════════════════════════════════════════════════════════════

  {
    slug: 'samsung-screen-repair',
    hubHref: '/samsung-repair-melbourne',
    repairSlug: 'screen-repair',
    hubLabel: 'Samsung Repair Melbourne',
    metaTitle: 'Samsung Screen Repair Melbourne | On The Spot 15 Min | iTech Repairs',
    metaDescription: 'Samsung screen repair Melbourne. AMOLED display specialists for all Galaxy models. On the spot 15 minute repairs. Lifetime warranty. Cheapest price guaranteed.',
    h1: 'Samsung Screen Repair Melbourne',
    intro: 'All Galaxy models · AMOLED display specialists · On The Spot 15 Min · Cheapest Price Guaranteed',
    symptoms: [
      { title: 'Cracked or Shattered Screen', desc: 'Glass cracked from a drop, sharp edges exposed, or display visually damaged but still functional.' },
      { title: 'Black or Blank Display', desc: 'Screen completely dark despite the phone appearing on. May indicate LCD or OLED panel failure.' },
      { title: 'Lines or Discolouration', desc: 'Vertical or horizontal lines across the screen, ink blotches, or unusual colour banding.' },
      { title: 'Unresponsive Touch', desc: 'Screen does not register taps or swipes in certain zones, or touch is erratic and unpredictable.' },
      { title: 'Ghost Touch', desc: 'Screen activates on its own without you touching it — a sign of digitiser or display assembly damage.' },
      { title: 'Green or Purple Tint', desc: 'Display showing an unnatural tint or colour shift, common after drops or software faults on AMOLED panels.' },
    ],
    benefits: [
      { title: 'AMOLED Display Specialists', desc: 'We use quality replacement panels matched to Samsung\'s original AMOLED, Super AMOLED, and Dynamic AMOLED specifications for vivid colour reproduction.' },
      { title: 'On The Spot 15 Minute Repairs', desc: 'Most Samsung screen repairs are completed on the spot in around 15 minutes while you wait in-store. No appointment needed.' },
      { title: 'Lifetime Warranty', desc: 'Every Samsung screen repair comes with a lifetime warranty on parts and labour. If the same fault returns, we fix it free of charge.' },
      { title: 'All Galaxy Models Supported', desc: 'Galaxy S series, A series, Z Fold, Z Flip and older Note models — we stock display panels for all popular Samsung devices.' },
    ],
    faqs: [
      { question: 'How long does a Samsung screen repair take?', answer: 'Most Samsung screen repairs are completed on the spot in 15 minutes. Complex models like the Z Fold or Z Flip may take 30–45 minutes due to the foldable display assembly.' },
      { question: 'Do you use original Samsung screens?', answer: 'We use quality aftermarket panels that match Samsung\'s original AMOLED display specifications for brightness, colour accuracy, and touch sensitivity. Original OEM panels are available on request.' },
      { question: 'Will my Samsung screen repair void the warranty?', answer: 'Third-party screen repairs do not void your Samsung warranty for unrelated faults. We provide our own lifetime warranty covering the repair itself.' },
      { question: 'Can you repair a Samsung screen that still works but is cracked?', answer: 'Yes. We can replace a cracked Samsung screen even if it\'s still functional. This prevents further damage and restores the premium look of your device.' },
      { question: 'Do I need an appointment?', answer: 'No appointment needed. Walk into our Braybrook or Spotswood store any time during business hours, 7 days a week 9am–9pm.' },
    ],
    relatedServices: samsungRelated('samsung-screen-repair'),
  },

  {
    slug: 'samsung-battery-replacement',
    hubHref: '/samsung-repair-melbourne',
    repairSlug: 'battery-replacement',
    hubLabel: 'Samsung Repair Melbourne',
    metaTitle: 'Samsung Battery Replacement Melbourne | 15 Min On The Spot | iTech Repairs',
    metaDescription: 'Samsung battery replacement Melbourne. Fast 15 minute service for all Galaxy models. Restore full charge capacity. Lifetime warranty. Cheapest price guaranteed.',
    h1: 'Samsung Battery Replacement Melbourne',
    intro: 'All Galaxy models · Fast 15 min service · Restore full charge capacity · Lifetime Warranty',
    symptoms: [
      { title: 'Battery Draining Too Fast', desc: 'Phone goes from 100% to dead in a few hours, even with light usage. Sign of a degraded cell.' },
      { title: 'Unexpected Shutdowns', desc: 'Phone powers off at 20%, 30%, or even 60% battery remaining — a classic sign of battery failure.' },
      { title: 'Won\'t Charge to 100%', desc: 'Battery stops charging at 80–90% or charges slowly despite using a genuine charger.' },
      { title: 'Swollen Battery', desc: 'Back glass bulging, screen lifting, or unusual pressure from inside — a swollen battery requires immediate replacement.' },
      { title: 'Phone Hot During Charging', desc: 'Excessive heat during charging or use indicates a failing battery struggling to hold or deliver charge safely.' },
      { title: 'Poor Standby Life', desc: 'Battery depletes overnight with no active use, indicating the battery can no longer hold a charge efficiently.' },
    ],
    benefits: [
      { title: 'High-Capacity Replacement Cells', desc: 'We fit genuine-grade batteries that meet or exceed Samsung\'s original capacity specifications, restoring full standby and talk time.' },
      { title: 'On The Spot 15 Min Repair', desc: 'Samsung battery replacements completed on the spot in around 15 minutes. Walk in any time — no appointment needed.' },
      { title: 'Lifetime Warranty', desc: 'Every battery replacement comes with a lifetime warranty. If the new battery fails, we replace it at no cost.' },
      { title: 'Safe Swollen Battery Removal', desc: 'Our technicians safely handle swollen batteries using proper equipment to prevent thermal runaway or further device damage.' },
    ],
    faqs: [
      { question: 'How do I know if my Samsung battery needs replacing?', answer: 'Check Settings > Battery > Battery Usage or use a battery health app. If capacity is below 80% or you experience shutdowns at higher percentages, replacement is recommended.' },
      { question: 'How long does Samsung battery replacement take?', answer: 'Most Samsung battery replacements take around 15 minutes on the spot. Some flagship models with more complex disassembly may take up to 30 minutes.' },
      { question: 'Is it worth replacing a Samsung battery?', answer: 'Absolutely. A new battery extends your device\'s life by 2–3 years and costs a fraction of a new phone. Most customers notice an immediate improvement in battery life.' },
      { question: 'Can you replace a swollen Samsung battery safely?', answer: 'Yes. We safely remove swollen batteries using proper heat and extraction tools. Do not delay — a swollen battery can damage the screen and chassis if left untreated.' },
    ],
    relatedServices: samsungRelated('samsung-battery-replacement'),
  },

  {
    slug: 'samsung-charging-port-repair',
    hubHref: '/samsung-repair-melbourne',
    repairSlug: 'charging-port-repair',
    hubLabel: 'Samsung Repair Melbourne',
    metaTitle: 'Samsung Charging Port Repair Melbourne | Fast Walk-In | iTech Repairs',
    metaDescription: 'Samsung charging port repair Melbourne. USB-C port cleaning and replacement for all Galaxy models. On the spot 15 minute service. Lifetime warranty guaranteed.',
    h1: 'Samsung Charging Port Repair Melbourne',
    intro: 'USB-C port cleaning & replacement · All Galaxy models · On The Spot 15 Min · Lifetime Warranty',
    symptoms: [
      { title: 'Cable Won\'t Stay In', desc: 'USB-C cable feels loose, falls out easily, or requires holding in a specific position to charge.' },
      { title: 'Intermittent Charging', desc: 'Phone charges sometimes but not reliably. Wiggling the cable affects the charge connection.' },
      { title: 'Not Charging at All', desc: 'Phone shows no charging indicator despite trying multiple cables and chargers.' },
      { title: 'Slow Charging Speed', desc: 'Charging speed dropped significantly or fast charging no longer works.' },
      { title: 'No Data Transfer', desc: 'USB-C connection doesn\'t allow file transfers or computer recognition.' },
      { title: 'Lint or Debris in Port', desc: 'Visible lint, dust, or debris packed into the charging port blocking proper cable seating.' },
    ],
    benefits: [
      { title: 'Ultrasonic Port Cleaning First', desc: 'We start with a thorough clean of the USB-C port before any replacement — often resolving the issue without a costly swap.' },
      { title: 'Full Port Replacement Available', desc: 'When cleaning isn\'t enough, we fit a new USB-C charging port assembly restoring fast charging and data connectivity.' },
      { title: 'On The Spot 15 Min Repair', desc: 'Samsung charging port repairs completed on the spot in around 15 minutes. Walk in, no appointment necessary.' },
      { title: 'Lifetime Warranty', desc: 'All charging port repairs carry a lifetime warranty. If charging issues return due to the repair, we fix it free.' },
    ],
    faqs: [
      { question: 'Can you clean my Samsung charging port without replacing it?', answer: 'Yes. We always start with a thorough clean of the port using professional tools and compressed air. Many charging issues are resolved by cleaning alone, saving you money.' },
      { question: 'How do I know if I need a port replacement vs a new cable?', answer: 'Try multiple cables and chargers. If none work reliably, the port itself is likely the issue. Walk in and we\'ll diagnose it free of charge.' },
      { question: 'How long does Samsung charging port repair take?', answer: 'Cleaning takes 10–15 minutes. Full port replacement takes around 20–30 minutes depending on the model.' },
    ],
    relatedServices: samsungRelated('samsung-charging-port-repair'),
  },

  {
    slug: 'samsung-back-glass-repair',
    hubHref: '/samsung-repair-melbourne',
    repairSlug: 'back-glass-repair',
    hubLabel: 'Samsung Repair Melbourne',
    metaTitle: 'Samsung Back Glass Repair Melbourne | On The Spot | iTech Repairs',
    metaDescription: 'Samsung back glass repair Melbourne. Cracked rear panel replacement for all Galaxy S series. On the spot 15 minute service. Lifetime warranty. Cheapest price guaranteed.',
    h1: 'Samsung Back Glass Repair Melbourne',
    intro: 'Cracked rear panel replacement · Galaxy S series & more · On The Spot 15 Min · Lifetime Warranty',
    symptoms: [
      { title: 'Cracked Rear Glass', desc: 'Back panel cracked or shattered from a drop, exposing sharp edges and the internal chassis.' },
      { title: 'Wireless Charging Not Working', desc: 'Cracked back glass can interfere with the wireless charging coil beneath, causing Qi charging to fail.' },
      { title: 'Sharp Edges After Drop', desc: 'Broken rear glass with sharp fragments that risk cutting your hand or damaging your case.' },
      { title: 'Water Ingress Risk', desc: 'Cracked back glass compromises the IP67/IP68 water resistance rating, leaving internals exposed.' },
      { title: 'Cosmetic Damage', desc: 'Back glass damage that devalues your device and looks unprofessional even if the front screen is intact.' },
    ],
    benefits: [
      { title: 'Laser Removal Equipment', desc: 'We use professional laser removal to safely detach the cracked rear glass without damaging the chassis or internal components.' },
      { title: 'Wireless Charging Preserved', desc: 'Our repair process carefully handles the wireless charging coil to ensure Qi and Samsung wireless charging work correctly after repair.' },
      { title: 'On The Spot 15 Min Repair', desc: 'Most Samsung back glass replacements completed on the spot in 15 minutes. No appointment needed.' },
      { title: 'Lifetime Warranty', desc: 'All Samsung back glass repairs include a lifetime warranty on parts and labour.' },
    ],
    faqs: [
      { question: 'Is it worth repairing a cracked Samsung back glass?', answer: 'Yes. Beyond aesthetics, cracked rear glass compromises IP water resistance and risks internal damage. Repair is far cheaper than replacement and restores full water resistance.' },
      { question: 'Which Samsung models have glass backs that can be repaired?', answer: 'All Galaxy S series (S22, S23, S24, S25, S26 and Ultra variants) have glass backs. Z Fold and Z Flip rear panels are also repairable. We carry panels for all popular models.' },
      { question: 'How long does Samsung back glass repair take?', answer: 'Most back glass replacements take 15 minutes on the spot. Z Fold and Z Flip models may take 30–45 minutes.' },
    ],
    relatedServices: samsungRelated('samsung-back-glass-repair'),
  },

  {
    slug: 'samsung-camera-repair',
    hubHref: '/samsung-repair-melbourne',
    repairSlug: 'camera-repair',
    hubLabel: 'Samsung Repair Melbourne',
    metaTitle: 'Samsung Camera Repair Melbourne | All Galaxy Models | iTech Repairs',
    metaDescription: 'Samsung camera repair Melbourne. Fix blurry, black, or cracked camera lens on all Galaxy models. On the spot service. Lifetime warranty. Cheapest price guaranteed.',
    h1: 'Samsung Camera Repair Melbourne',
    intro: 'Rear & front camera module repair · Lens replacement · All Galaxy models · Lifetime Warranty',
    symptoms: [
      { title: 'Blurry Photos', desc: 'Camera produces consistently blurry images that auto-focus cannot correct, indicating a lens or sensor issue.' },
      { title: 'Black Viewfinder', desc: 'Camera app opens but displays a black or frozen preview — suggests a failed camera module or connection.' },
      { title: 'Cracked Camera Lens', desc: 'Outer lens glass cracked from a drop, causing haze, light flares, and reduced image quality.' },
      { title: 'Camera Not Switching', desc: 'Can\'t switch between main, ultrawide, or telephoto lenses — one or more camera modules unresponsive.' },
      { title: 'Flash Not Working', desc: 'LED flash fails to activate for photos or torch mode, often due to a camera flex cable fault.' },
      { title: 'Front Camera Issues', desc: 'Selfie camera blurry, dark, or non-functional affecting FaceTime, video calls, and selfies.' },
    ],
    benefits: [
      { title: 'Full Camera Diagnostic', desc: 'We test all cameras — main, ultrawide, telephoto, and front — to identify exactly which module has failed before starting any repair.' },
      { title: 'Lens Replacement Option', desc: 'If only the outer lens glass is cracked (not the sensor), we replace just the lens cover — a faster, more affordable fix than a full module swap.' },
      { title: 'All Camera Modes Verified', desc: 'Post-repair testing covers autofocus, OIS, Night Mode, 4K video, and zoom switching across all lenses.' },
      { title: 'Lifetime Warranty', desc: 'Every Samsung camera repair carries a lifetime warranty on parts and labour.' },
    ],
    faqs: [
      { question: 'Can you just replace the cracked camera lens without replacing the whole camera?', answer: 'Yes. If the camera sensor and module are intact, we replace only the cracked outer lens glass — which is significantly cheaper than a full camera module replacement.' },
      { question: 'How long does Samsung camera repair take?', answer: 'Lens replacement takes 15–20 minutes. Full camera module replacement takes 30–45 minutes depending on the Galaxy model.' },
      { question: 'Will my Samsung camera quality be the same after repair?', answer: 'Yes. We use quality replacement parts matched to Samsung\'s specifications, and we verify photo quality, autofocus, and video performance before returning your device.' },
    ],
    relatedServices: samsungRelated('samsung-camera-repair'),
  },

  {
    slug: 'samsung-speaker-repair',
    hubHref: '/samsung-repair-melbourne',
    repairSlug: 'speaker-repair',
    hubLabel: 'Samsung Repair Melbourne',
    metaTitle: 'Samsung Speaker Repair Melbourne | Earpiece & Loudspeaker | iTech Repairs',
    metaDescription: 'Samsung speaker repair Melbourne. Fix muffled, distorted, or silent speakers on all Galaxy models. On the spot 15 min service. Lifetime warranty guaranteed.',
    h1: 'Samsung Speaker Repair Melbourne',
    intro: 'Loudspeaker & earpiece repair · All Galaxy models · On The Spot 15 Min · Lifetime Warranty',
    symptoms: [
      { title: 'No Sound from Speaker', desc: 'Loudspeaker produces no audio during calls, media playback, or when testing with ringtones.' },
      { title: 'Muffled or Distorted Audio', desc: 'Sound is quiet, scratchy, or distorted especially at higher volumes — sign of speaker damage.' },
      { title: 'Earpiece Silent During Calls', desc: 'Can\'t hear the other person during calls unless you use speakerphone — earpiece speaker failed.' },
      { title: 'One Side of Stereo Silent', desc: 'For dual-speaker Galaxy models, one speaker is silent while the other works normally.' },
      { title: 'Audio Cutting In and Out', desc: 'Speaker audio intermittently cuts out during playback, often caused by a loose speaker flex cable.' },
    ],
    benefits: [
      { title: 'Speaker Grille Clean First', desc: 'We start with a professional clean of the speaker grille — often resolving muffled sound without any parts replacement.' },
      { title: 'Targeted Module Replacement', desc: 'When cleaning isn\'t enough, we replace only the failed speaker driver with a matched unit, restoring full volume and clarity.' },
      { title: 'Stereo Balance Tested', desc: 'Post-repair audio testing covers volume levels, frequency response, and stereo balance across all Samsung speaker configurations.' },
      { title: 'Lifetime Warranty', desc: 'All Samsung speaker repairs carry a lifetime warranty on parts and labour.' },
    ],
    faqs: [
      { question: 'Can you fix a Samsung earpiece speaker?', answer: 'Yes. We repair both the bottom loudspeaker and the top earpiece. Walk in and we\'ll diagnose which speaker has failed before any work begins.' },
      { question: 'Is it possible to clean a Samsung speaker without replacing it?', answer: 'Often yes. Lint and debris are the most common cause of muffled speakers. We always start with a thorough clean before recommending a replacement.' },
      { question: 'How long does Samsung speaker repair take?', answer: 'Speaker cleaning takes 10–15 minutes. Full speaker replacement takes 15–20 minutes on the spot.' },
    ],
    relatedServices: samsungRelated('samsung-speaker-repair'),
  },

  {
    slug: 'samsung-microphone-repair',
    hubHref: '/samsung-repair-melbourne',
    repairSlug: 'microphone-replacement',
    hubLabel: 'Samsung Repair Melbourne',
    metaTitle: 'Samsung Microphone Repair Melbourne | Galaxy All Models | iTech Repairs',
    metaDescription: 'Samsung microphone repair Melbourne. Fix muffled calls, failed voice assistant, and video audio issues. On the spot service. Lifetime warranty. Walk in today.',
    h1: 'Samsung Microphone Repair Melbourne',
    intro: 'Microphone replacement for all Galaxy models · Fix call audio · Voice assistant · Lifetime Warranty',
    symptoms: [
      { title: 'People Can\'t Hear You on Calls', desc: 'The person you\'re calling reports your voice is very quiet, muffled, or completely absent.' },
      { title: 'Voice Assistant Not Working', desc: 'Bixby or Google Assistant fails to activate or responds incorrectly — indicating a microphone pickup failure.' },
      { title: 'Video Audio Silent or Muffled', desc: 'Videos you record have very low or no audio despite the video itself recording correctly.' },
      { title: 'Speakerphone Audio Poor', desc: 'While using speakerphone, the other party can barely hear you due to a failed primary microphone.' },
      { title: 'Noise Cancellation Not Working', desc: 'Background noise is not being filtered during calls — the secondary noise-cancelling microphone may have failed.' },
    ],
    benefits: [
      { title: 'Multi-Microphone Diagnosis', desc: 'Modern Samsung devices have 2–3 microphones. We identify exactly which one has failed before replacing it, avoiding unnecessary parts costs.' },
      { title: 'Full Audio Testing', desc: 'Post-repair testing covers call recording, video audio, voice assistant activation, and speakerphone quality.' },
      { title: 'On The Spot 15 Min Repair', desc: 'Microphone replacements typically completed on the spot in 15 minutes. Walk in any time, no appointment needed.' },
      { title: 'Lifetime Warranty', desc: 'Every Samsung microphone repair includes a lifetime warranty on parts and labour.' },
    ],
    faqs: [
      { question: 'How do I know if my Samsung microphone is faulty?', answer: 'Record a voice memo and play it back. If audio is muffled or silent, your microphone likely needs repair. Also test speakerphone — if the other person can\'t hear you, the primary microphone has failed.' },
      { question: 'Can a software update fix a Samsung microphone issue?', answer: 'Occasionally. We always check for software causes first. If a reset or update doesn\'t resolve it, a hardware replacement is needed.' },
      { question: 'How long does Samsung microphone repair take?', answer: 'Most microphone replacements take 15–20 minutes on the spot.' },
    ],
    relatedServices: samsungRelated('samsung-microphone-repair'),
  },

  {
    slug: 'samsung-water-damage-repair',
    hubHref: '/samsung-repair-melbourne',
    repairSlug: 'water-damage-repair',
    hubLabel: 'Samsung Repair Melbourne',
    metaTitle: 'Samsung Water Damage Repair Melbourne | Urgent Service | iTech Repairs',
    metaDescription: 'Samsung water damage repair Melbourne. Ultrasonic board cleaning, corrosion removal, data recovery. All Galaxy models. Act fast for best results. Lifetime warranty.',
    h1: 'Samsung Water Damage Repair Melbourne',
    intro: 'Ultrasonic board cleaning · Corrosion removal · Data recovery · Act fast for best results',
    symptoms: [
      { title: 'Screen Flickering After Water Exposure', desc: 'Display shows flickering lines, unusual colours, or flashes after the device got wet.' },
      { title: 'Won\'t Turn On After Drop in Water', desc: 'Device completely unresponsive after liquid exposure. Power it off immediately and bring it in.' },
      { title: 'Charging Issues After Water Damage', desc: 'Phone no longer charges or charges intermittently following water or liquid exposure.' },
      { title: 'Speaker Sounds Muffled', desc: 'Water trapped in the speaker grille causing muffled or distorted audio after liquid damage.' },
      { title: 'Buttons Not Responding', desc: 'Physical buttons have become sticky or unresponsive due to corrosion from moisture ingress.' },
      { title: 'Phone Working But Acting Strange', desc: 'Random crashes, ghost touch, or app failures after water exposure — corrosion may be spreading.' },
    ],
    benefits: [
      { title: 'Act Fast — Better Outcomes', desc: 'The sooner you bring in your water-damaged Samsung, the higher the success rate. Don\'t leave it in rice — bring it straight to us.' },
      { title: 'Professional Ultrasonic Cleaning', desc: 'We use ultrasonic cleaning equipment to remove corrosive mineral deposits from the logic board that rice and drying simply cannot address.' },
      { title: 'Data Preservation Priority', desc: 'We always prioritise data preservation throughout the repair process, attempting data recovery before any component replacement.' },
      { title: 'No Fix, No Fee', desc: 'If we cannot recover your Samsung from water damage, you don\'t pay for the repair attempt. Free diagnostic included.' },
    ],
    faqs: [
      { question: 'My Samsung says it\'s IP67/IP68 water resistant. Why is it damaged?', answer: 'IP ratings degrade over time and apply to clean water at specific depths. Saltwater, pool chemicals, and high pressure can defeat the rating. Older devices also lose their seal integrity.' },
      { question: 'Should I put my Samsung in rice after water damage?', answer: 'No. Rice is ineffective at removing corrosion and can introduce starch particles. Power off your device immediately and bring it to us — time is critical for successful recovery.' },
      { question: 'Can you recover data from a water-damaged Samsung?', answer: 'In many cases yes. Our data recovery process can retrieve photos, contacts, and files even from severely damaged devices. Success rate depends on the extent of corrosion damage.' },
      { question: 'How long does Samsung water damage repair take?', answer: 'Initial assessment takes 20–30 minutes. Full cleaning and repair takes 2–4 hours. Complex cases with component replacement may take longer.' },
    ],
    relatedServices: samsungRelated('samsung-water-damage-repair'),
  },

  {
    slug: 'samsung-free-device-inspection',
    hubHref: '/samsung-repair-melbourne',
    repairSlug: 'inspection',
    hubLabel: 'Samsung Repair Melbourne',
    metaTitle: 'Free Samsung Device Inspection Melbourne | Walk In | iTech Repairs',
    metaDescription: 'Free Samsung device inspection in Melbourne. We check screen, battery, cameras, speakers, charging, and more. No charge, no obligation. Walk in today.',
    h1: 'Free Samsung Device Inspection Melbourne',
    intro: 'Free comprehensive inspection · No obligation to repair · All Galaxy models · Walk in today',
    symptoms: [
      { title: 'Not Sure What\'s Wrong', desc: 'Something feels off but you can\'t identify the specific fault. Our free inspection pinpoints exactly what needs repair.' },
      { title: 'Buying a Second-Hand Galaxy', desc: 'Checking a used Samsung before purchase. We verify screen quality, battery health, iCloud/account lock status, and all functions.' },
      { title: 'Random Crashes or Freezing', desc: 'Device crashes, freezes, or reboots unexpectedly. We run a full hardware and software diagnostic to find the cause.' },
      { title: 'Pre-Repair Assessment', desc: 'Need a written quote before committing to a repair? Walk in for a free assessment with no pressure to proceed.' },
      { title: 'Insurance or Warranty Check', desc: 'Documenting your device\'s current condition for insurance purposes or before a warranty claim.' },
    ],
    benefits: [
      { title: 'Completely Free — No Hidden Fees', desc: 'Our device inspection is 100% free. There\'s no charge even if you decide not to proceed with any repair.' },
      { title: 'Comprehensive Multi-Point Check', desc: 'We check screen quality, battery health, all cameras, speakers, microphone, charging port, buttons, and logic board health.' },
      { title: 'Written Quote Provided', desc: 'You\'ll leave with a clear written quote for any faults found. No hidden charges, no pressure sales.' },
      { title: 'Walk In Any Time', desc: 'No appointment needed. Visit our Braybrook or Spotswood store any time 7 days 9am–9pm.' },
    ],
    faqs: [
      { question: 'Is the Samsung inspection really free?', answer: 'Yes, completely free. We check your device and provide a written quote at no cost. There is absolutely no obligation to book a repair.' },
      { question: 'What do you check during a Samsung inspection?', answer: 'We check the screen for dead pixels and touch response, battery health percentage, all cameras, speakers, microphone, charging port, physical buttons, and run a software diagnostic.' },
      { question: 'How long does the free inspection take?', answer: 'A standard inspection takes 10–15 minutes. More complex diagnostics for intermittent faults may take up to 30 minutes.' },
      { question: 'Can you check if a second-hand Samsung is locked?', answer: 'Yes. We check for Samsung account lock (previously Find My Mobile), carrier lock status, and overall device health before you commit to a purchase.' },
    ],
    relatedServices: samsungRelated('samsung-free-device-inspection'),
  },

  {
    slug: 'samsung-insurance-damage-report',
    hubHref: '/samsung-repair-melbourne',
    repairSlug: 'insurance-report',
    hubLabel: 'Samsung Repair Melbourne',
    metaTitle: 'Samsung Insurance Damage Report Melbourne | Same Visit | iTech Repairs',
    metaDescription: 'Professional Samsung insurance damage reports in Melbourne. Written assessments for all Galaxy models accepted by all major Australian insurers. Walk in today.',
    h1: 'Samsung Insurance Damage Report Melbourne',
    intro: 'Professional written assessments · Accepted by all major Australian insurers · Same visit available',
    symptoms: [
      { title: 'Filing an Insurance Claim', desc: 'Your insurer requires a professional damage assessment report from an authorised repairer before approving your claim.' },
      { title: 'Accidental Damage Documentation', desc: 'Documenting physical damage from a drop, crush, or accident for home and contents or device insurance.' },
      { title: 'Water Damage Insurance Claim', desc: 'Providing technical evidence of water damage extent and probable cause for an insurance or warranty claim.' },
      { title: 'Work or Business Device Claim', desc: 'Business device insurance requiring a formal technical assessment on company letterhead.' },
    ],
    benefits: [
      { title: 'Professional Letterhead Reports', desc: 'All reports are issued on iTech Repairs letterhead with full technician details, accepted by all major Australian device insurers.' },
      { title: 'Detailed Technical Assessment', desc: 'Reports cover all identified damage, probable cause of damage, and itemised repair cost estimates.' },
      { title: 'Same Visit Assessment', desc: 'Walk in for your assessment. Most reports are ready within 24–48 hours. Express turnaround available on request.' },
      { title: 'Accepted by All Major Insurers', desc: 'Our reports are accepted by all major Australian device insurers including Woolworths Insurance, Budget Direct, and all major telco insurers.' },
    ],
    faqs: [
      { question: 'What does your Samsung insurance damage report include?', answer: 'The report includes a full description of all damage found, the probable cause, device identification details (IMEI/serial), and an itemised cost estimate for all required repairs.' },
      { question: 'How quickly can I get my insurance report?', answer: 'Most reports are ready within 24–48 hours. Express same-day reports are available for urgent claims — please mention this when you walk in.' },
      { question: 'Do I need an appointment for the insurance assessment?', answer: 'No appointment needed. Walk into our Braybrook or Spotswood store any time 7 days 9am–9pm and we\'ll perform the assessment straight away.' },
      { question: 'How much does the insurance damage report cost?', answer: 'There is a small fee for the written report. Please walk in or call us for current pricing. The assessment itself is performed at the time of the report.' },
    ],
    relatedServices: samsungRelated('samsung-insurance-damage-report'),
  },

  // ═══ GOOGLE PIXEL ═══════════════════════════════════════════════════════════

  {
    slug: 'google-pixel-screen-repair',
    hubHref: '/google-pixel-repair-melbourne',
    repairSlug: 'screen-repair',
    hubLabel: 'Google Pixel Repair Melbourne',
    metaTitle: 'Google Pixel Screen Repair Melbourne | 15 Min On The Spot | iTech Repairs',
    metaDescription: 'Google Pixel screen repair Melbourne. All Pixel models. OLED display specialists. On the spot 15 minute service. Lifetime warranty. Cheapest price guaranteed.',
    h1: 'Google Pixel Screen Repair Melbourne',
    intro: 'All Pixel models · OLED display specialists · On The Spot 15 Min · Lifetime Warranty',
    symptoms: [
      { title: 'Cracked or Shattered Screen', desc: 'Screen cracked from a drop with visible damage to the glass or OLED panel underneath.' },
      { title: 'Black or Unresponsive Display', desc: 'Screen completely blank despite the phone appearing to be on — OLED panel failure or disconnection.' },
      { title: 'Green or Pink Lines', desc: 'Vertical lines of colour across the display, common after drops on Pixel OLED panels.' },
      { title: 'Touch Not Working', desc: 'Portions of the screen not responding to touch input after damage to the digitiser layer.' },
      { title: 'Burn-In or Image Retention', desc: 'Ghost images or app outlines visible on the screen even when displaying other content.' },
    ],
    benefits: [
      { title: 'Pixel OLED Specialists', desc: 'Google Pixel phones use high-resolution OLED panels. We source quality replacement displays matched to the original specifications for each Pixel generation.' },
      { title: 'On The Spot 15 Min Repair', desc: 'Most Pixel screen repairs completed in 15 minutes on the spot. Walk in any time, no appointment needed.' },
      { title: 'Lifetime Warranty', desc: 'Every Pixel screen repair carries a lifetime warranty on parts and labour. Same fault returns? We fix it free.' },
      { title: 'Camera Features Preserved', desc: 'Pixel\'s camera functionality including Night Sight and computational photography is fully verified after every screen repair.' },
    ],
    faqs: [
      { question: 'Can you repair a Google Pixel screen same day?', answer: 'Yes. Walk in and most Pixel screen repairs are completed on the spot in 15 minutes. Older models with parts in stock are always same-day.' },
      { question: 'Does a screen repair affect Pixel\'s camera or face unlock?', answer: 'No. We carefully handle all sensors and verify camera function, face unlock, and fingerprint sensor after every Pixel screen repair.' },
      { question: 'How much does a Pixel screen repair cost?', answer: 'Pricing varies by model. Walk in for a free assessment and quote. We guarantee the cheapest price in Melbourne.' },
    ],
    relatedServices: pixelRelated('google-pixel-screen-repair'),
  },

  {
    slug: 'google-pixel-battery-replacement',
    hubHref: '/google-pixel-repair-melbourne',
    repairSlug: 'battery-replacement',
    hubLabel: 'Google Pixel Repair Melbourne',
    metaTitle: 'Google Pixel Battery Replacement Melbourne | Fast 15 Min | iTech Repairs',
    metaDescription: 'Google Pixel battery replacement Melbourne. Restore full charge capacity on all Pixel models. On the spot 15 minute service. Lifetime warranty guaranteed.',
    h1: 'Google Pixel Battery Replacement Melbourne',
    intro: 'All Pixel models · Fast 15 min service · Restore full charge capacity · Lifetime Warranty',
    symptoms: [
      { title: 'Battery Draining Too Fast', desc: 'Pixel going from full charge to dead in a few hours with minimal usage.' },
      { title: 'Random Shutdowns', desc: 'Phone powers off unexpectedly at 15–30% battery — a classic sign of a failing cell.' },
      { title: 'Won\'t Charge Fully', desc: 'Battery stops at 80–90% or charges extremely slowly despite using a genuine charger.' },
      { title: 'Adaptive Battery Not Working', desc: 'Pixel\'s Adaptive Battery feature no longer provides meaningful improvements in standby life.' },
      { title: 'Phone Running Hot', desc: 'Device consistently runs hot during light tasks — often caused by a degraded battery working harder than it should.' },
    ],
    benefits: [
      { title: 'High-Capacity Replacement Cells', desc: 'We fit batteries that meet or exceed Google\'s original Pixel capacity specifications, restoring all-day battery life.' },
      { title: 'Adaptive Battery Preserved', desc: 'After replacement, Google\'s Adaptive Battery feature learns your usage patterns again within a few days, optimising standby life.' },
      { title: 'On The Spot 15 Min Repair', desc: 'Pixel battery replacements completed in 15 minutes on the spot. No appointment needed.' },
      { title: 'Lifetime Warranty', desc: 'Every Pixel battery replacement includes a lifetime warranty on the new cell and labour.' },
    ],
    faqs: [
      { question: 'How do I check my Pixel battery health?', answer: 'On Pixel phones, go to Settings > Battery > Battery usage. Third-party apps can also show detailed battery health percentage.' },
      { question: 'Will Pixel battery replacement affect Tensor performance?', answer: 'No. Pixel\'s Tensor chip performance is independent of battery replacement. A new battery often improves performance as the phone no longer throttles due to power delivery issues.' },
      { question: 'How long does Pixel battery replacement take?', answer: 'Most Pixel battery replacements take 15 minutes on the spot. Walk in any time 7 days 9am–9pm.' },
    ],
    relatedServices: pixelRelated('google-pixel-battery-replacement'),
  },

  {
    slug: 'google-pixel-charging-port-repair',
    hubHref: '/google-pixel-repair-melbourne',
    repairSlug: 'charging-port-repair',
    hubLabel: 'Google Pixel Repair Melbourne',
    metaTitle: 'Google Pixel Charging Port Repair Melbourne | Walk In | iTech Repairs',
    metaDescription: 'Google Pixel charging port repair Melbourne. USB-C port cleaning and replacement for all Pixel models. On the spot service. Lifetime warranty guaranteed.',
    h1: 'Google Pixel Charging Port Repair Melbourne',
    intro: 'USB-C port cleaning & replacement · All Pixel models · On The Spot Service · Lifetime Warranty',
    symptoms: [
      { title: 'Cable Won\'t Stay Connected', desc: 'USB-C cable loose or falls out — lint or debris packed in the port is usually the cause.' },
      { title: 'Not Charging Despite Multiple Cables', desc: 'Tried multiple cables and chargers with no charging response — the port itself needs repair.' },
      { title: 'Pixel Wireless Charging Only Works', desc: 'Wireless charging works but wired charging has completely stopped — the USB-C port has failed.' },
      { title: 'Slow or Intermittent Charging', desc: 'Charges sometimes but not reliably, or charges much slower than expected with a genuine charger.' },
    ],
    benefits: [
      { title: 'Clean Before Replace', desc: 'We start with professional port cleaning using compressed air and precision tools — resolving many issues without any parts cost.' },
      { title: 'Full USB-C Port Replacement', desc: 'When cleaning isn\'t sufficient, we fit a new USB-C assembly restoring fast charging and data connectivity.' },
      { title: 'On The Spot Service', desc: 'Pixel charging port repairs completed on the spot in 15–20 minutes. No appointment needed.' },
      { title: 'Lifetime Warranty', desc: 'All Pixel charging port repairs include a lifetime warranty.' },
    ],
    faqs: [
      { question: 'Can you fix a Pixel charging port without replacing it?', answer: 'Often yes. Compressed air cleaning and debris removal resolves many charging issues. We always try this first before recommending replacement.' },
      { question: 'How long does Pixel charging port repair take?', answer: 'Cleaning: 10–15 minutes. Full replacement: 20–30 minutes on the spot.' },
    ],
    relatedServices: pixelRelated('google-pixel-charging-port-repair'),
  },

  {
    slug: 'google-pixel-camera-repair',
    hubHref: '/google-pixel-repair-melbourne',
    repairSlug: 'camera-repair',
    hubLabel: 'Google Pixel Repair Melbourne',
    metaTitle: 'Google Pixel Camera Repair Melbourne | All Pixel Models | iTech Repairs',
    metaDescription: 'Google Pixel camera repair Melbourne. Fix blurry photos, cracked lens, black viewfinder on all Pixel models. Preserve Night Sight and computational photography.',
    h1: 'Google Pixel Camera Repair Melbourne',
    intro: 'Rear & front camera repair · Lens replacement · Preserve Night Sight · Lifetime Warranty',
    symptoms: [
      { title: 'Blurry Photos Despite Auto-Focus', desc: 'All photos blurry even in good light — indicates a lens module or optical stabilisation fault.' },
      { title: 'Black Camera Viewfinder', desc: 'Camera app shows a black or frozen preview — camera module disconnection or failure.' },
      { title: 'Cracked Camera Lens Glass', desc: 'Outer lens glass cracked causing lens flare, haze, and reduced image quality across all shots.' },
      { title: 'Night Sight Not Working Properly', desc: 'Pixel\'s signature Night Sight mode producing poor results — may indicate sensor calibration issues.' },
      { title: 'Front Camera Dark or Blurry', desc: 'Selfie camera producing dark or out-of-focus images, affecting video calls and face unlock.' },
    ],
    benefits: [
      { title: 'Pixel Camera Expertise', desc: 'Pixel is renowned for its computational photography. We carefully handle all camera modules to preserve Night Sight, Magic Eraser, and all Tensor camera features.' },
      { title: 'Lens-Only Replacement Available', desc: 'If only the outer lens glass is cracked, we replace just the lens cover — a faster, more affordable repair than a full module swap.' },
      { title: 'Full Camera Testing', desc: 'Post-repair verification covers all lenses, autofocus, Night Sight, 4K video, and portrait mode.' },
      { title: 'Lifetime Warranty', desc: 'All Pixel camera repairs include a lifetime warranty on parts and labour.' },
    ],
    faqs: [
      { question: 'Will Pixel camera quality be the same after repair?', answer: 'Yes. We use quality replacement parts and verify all computational photography features including Night Sight before returning your device.' },
      { question: 'How long does Pixel camera repair take?', answer: 'Lens replacement: 15–20 minutes. Full camera module: 30–45 minutes on the spot.' },
    ],
    relatedServices: pixelRelated('google-pixel-camera-repair'),
  },

  {
    slug: 'google-pixel-water-damage-repair',
    hubHref: '/google-pixel-repair-melbourne',
    repairSlug: 'water-damage-repair',
    hubLabel: 'Google Pixel Repair Melbourne',
    metaTitle: 'Google Pixel Water Damage Repair Melbourne | Urgent | iTech Repairs',
    metaDescription: 'Google Pixel water damage repair Melbourne. Professional ultrasonic cleaning, corrosion removal, data recovery for all Pixel models. Act fast. Lifetime warranty.',
    h1: 'Google Pixel Water Damage Repair Melbourne',
    intro: 'Ultrasonic board cleaning · Corrosion removal · Data recovery · Act fast — better results',
    symptoms: [
      { title: 'Pixel Dropped in Water', desc: 'Device was submerged or exposed to significant liquid. Power off immediately and bring it in.' },
      { title: 'Screen Flickering After Water', desc: 'Display showing unusual flickers, lines, or colour shifts after water exposure.' },
      { title: 'Won\'t Turn On After Liquid Damage', desc: 'Completely unresponsive after water exposure — immediate professional cleaning is critical.' },
      { title: 'Corrosion Visible in Port', desc: 'Green or white residue visible in the charging port — indicating active corrosion spreading inside.' },
    ],
    benefits: [
      { title: 'Professional Ultrasonic Cleaning', desc: 'We use ultrasonic cleaning equipment to remove corrosive mineral deposits that rice and air drying cannot address.' },
      { title: 'Act Fast for Best Results', desc: 'The sooner you bring your water-damaged Pixel to us, the higher the recovery success rate. Don\'t delay.' },
      { title: 'Data Recovery Priority', desc: 'We always attempt to preserve and recover your photos, contacts, and files before any component replacement.' },
      { title: 'No Fix, No Fee', desc: 'If we cannot recover your Pixel from water damage, you don\'t pay for the repair attempt.' },
    ],
    faqs: [
      { question: 'My Pixel has IP68 rating — why is it water damaged?', answer: 'IP68 ratings apply to clean water at specific depths and degrade over time. Saltwater, pool water, and drops from height can all defeat the rating on any Pixel model.' },
      { question: 'Should I put my Pixel in rice?', answer: 'No. Power off your device immediately and bring it straight to us. Rice is ineffective at removing corrosion and wastes critical recovery time.' },
      { question: 'How long does Pixel water damage repair take?', answer: 'Initial assessment: 20–30 minutes. Full cleaning and component repair: 2–4 hours depending on damage extent.' },
    ],
    relatedServices: pixelRelated('google-pixel-water-damage-repair'),
  },

  {
    slug: 'google-pixel-free-device-inspection',
    hubHref: '/google-pixel-repair-melbourne',
    repairSlug: 'inspection',
    hubLabel: 'Google Pixel Repair Melbourne',
    metaTitle: 'Free Google Pixel Device Inspection Melbourne | Walk In | iTech Repairs',
    metaDescription: 'Free Google Pixel inspection in Melbourne. We check screen, battery, cameras, speakers, and all functions. No charge, no obligation. Walk in any time.',
    h1: 'Free Google Pixel Device Inspection Melbourne',
    intro: 'Free comprehensive inspection · No obligation · All Pixel models · Walk in 7 days 9am–9pm',
    symptoms: [
      { title: 'Not Sure What\'s Wrong', desc: 'Something is wrong but you can\'t identify the specific fault. Our free inspection pinpoints exactly what needs repair.' },
      { title: 'Buying a Second-Hand Pixel', desc: 'Checking a used Pixel before purchase. We verify screen quality, battery health, Google account lock status, and all functions.' },
      { title: 'Random Issues or Glitches', desc: 'Device behaving unexpectedly. Walk in for a free hardware and software assessment.' },
    ],
    benefits: [
      { title: 'Completely Free', desc: '100% free inspection with no hidden fees. No charge even if you decide not to proceed with any repair.' },
      { title: 'Comprehensive Multi-Point Check', desc: 'We check screen, battery health, all cameras, speakers, microphone, charging port, and run a software diagnostic.' },
      { title: 'Written Quote', desc: 'You\'ll receive a clear written quote for any faults found. No pressure, no obligation.' },
      { title: 'Walk In Any Time', desc: 'No appointment. Open 7 days 9am–9pm at our Braybrook and Spotswood stores.' },
    ],
    faqs: [
      { question: 'Is the Pixel inspection really free?', answer: 'Yes, 100% free. No charge, no obligation, no pressure to book a repair.' },
      { question: 'Can you check if a second-hand Pixel is Google account locked?', answer: 'Yes. We check for Google account lock (Factory Reset Protection), verify carrier unlock status, and assess overall device health.' },
      { question: 'How long does the Pixel inspection take?', answer: '10–15 minutes for a standard check. Complex diagnostics may take up to 30 minutes.' },
    ],
    relatedServices: pixelRelated('google-pixel-free-device-inspection'),
  },

  {
    slug: 'google-pixel-insurance-damage-report',
    hubHref: '/google-pixel-repair-melbourne',
    repairSlug: 'insurance-report',
    hubLabel: 'Google Pixel Repair Melbourne',
    metaTitle: 'Google Pixel Insurance Damage Report Melbourne | iTech Repairs',
    metaDescription: 'Professional Google Pixel insurance damage reports Melbourne. Written assessments for all Pixel models accepted by all major Australian insurers. Walk in today.',
    h1: 'Google Pixel Insurance Damage Report Melbourne',
    intro: 'Professional written assessments · Accepted by all major Australian insurers · Same visit available',
    symptoms: [
      { title: 'Filing an Insurance Claim', desc: 'Your insurer requires a professional damage assessment from an authorised repairer.' },
      { title: 'Accidental Damage Documentation', desc: 'Documenting physical or liquid damage for home and contents or device insurance.' },
      { title: 'Business Device Claim', desc: 'Formal technical assessment required for a work or business device insurance claim.' },
    ],
    benefits: [
      { title: 'Professional Letterhead Reports', desc: 'Reports issued on iTech Repairs letterhead with full technician details and IMEI/serial number.' },
      { title: 'Accepted by All Major Insurers', desc: 'Our reports are accepted by all major Australian device and home contents insurers.' },
      { title: 'Same Visit Assessment', desc: 'Walk in for your assessment. Most reports ready within 24–48 hours.' },
      { title: 'Detailed Technical Content', desc: 'Reports cover all damage found, probable cause, and itemised repair cost estimates.' },
    ],
    faqs: [
      { question: 'What does the Pixel insurance report include?', answer: 'Full damage description, probable cause, device identification (IMEI/serial), and itemised repair cost estimate.' },
      { question: 'How quickly can I get my Pixel insurance report?', answer: 'Most reports ready within 24–48 hours. Express same-day reports available on request.' },
    ],
    relatedServices: pixelRelated('google-pixel-insurance-damage-report'),
  },

  // ═══ IPAD ════════════════════════════════════════════════════════════════════

  {
    slug: 'ipad-screen-repair',
    hubHref: '/ipad-repair-melbourne',
    repairSlug: 'screen-repair',
    hubLabel: 'iPad Repair Melbourne',
    metaTitle: 'iPad Screen Repair Melbourne | All iPad Models | iTech Repairs',
    metaDescription: 'iPad screen repair Melbourne. All iPad models including Pro, Air, mini. On the spot service. Lifetime warranty. Cheapest price guaranteed. Walk in today.',
    h1: 'iPad Screen Repair Melbourne',
    intro: 'All iPad models · iPad Pro, Air, mini, standard · On The Spot Service · Lifetime Warranty',
    symptoms: [
      { title: 'Cracked or Shattered Screen', desc: 'iPad glass cracked from a drop, with sharp edges or visible display damage beneath the glass.' },
      { title: 'Unresponsive Touch Zones', desc: 'Parts of the screen not responding to touch input, making apps and on-screen keyboard difficult to use.' },
      { title: 'Black or Blank Display', desc: 'Screen completely dark despite the iPad appearing to be on — indicates LCD or OLED panel failure.' },
      { title: 'LCD Damage (Ink Blotch)', desc: 'Dark ink-like blotches or bleeding under the glass caused by LCD panel damage beneath intact glass.' },
      { title: 'Ghost Touch', desc: 'Screen activating on its own — phantom swipes or taps without you touching the display.' },
      { title: 'Apple Pencil Not Working', desc: 'Apple Pencil fails to register on the screen after a drop — may indicate digitiser layer damage.' },
    ],
    benefits: [
      { title: 'All iPad Models Supported', desc: 'iPad Pro (all sizes), iPad Air, iPad mini, and standard iPad — every generation supported with parts in stock.' },
      { title: 'Glass-Only or Full Assembly', desc: 'Where possible, we perform glass-only replacement to keep costs lower. Full LCD/OLED assembly replacement available when needed.' },
      { title: 'Apple Pencil Compatibility Verified', desc: 'Post-repair testing includes Apple Pencil functionality for all supported iPad models.' },
      { title: 'Lifetime Warranty', desc: 'Every iPad screen repair includes a lifetime warranty on parts and labour.' },
    ],
    faqs: [
      { question: 'Can you just replace the glass on an iPad without replacing the LCD?', answer: 'For iPads where the LCD is undamaged, we can perform a glass-only replacement, which is less expensive. We\'ll advise the best option after inspection.' },
      { question: 'How long does iPad screen repair take?', answer: 'Standard iPad screen repairs take 60–90 minutes. iPad Pro with Face ID or Liquid Retina XDR displays may take longer due to complexity.' },
      { question: 'Will my iPad work with an Apple Pencil after screen repair?', answer: 'Yes. We verify Apple Pencil compatibility as part of our post-repair testing process for all iPad models that support it.' },
    ],
    relatedServices: ipadRelated('ipad-screen-repair'),
  },

  {
    slug: 'ipad-battery-replacement',
    hubHref: '/ipad-repair-melbourne',
    repairSlug: 'battery-replacement',
    hubLabel: 'iPad Repair Melbourne',
    metaTitle: 'iPad Battery Replacement Melbourne | All iPad Models | iTech Repairs',
    metaDescription: 'iPad battery replacement Melbourne. Restore full charge capacity on all iPad models. Same-day service available. Lifetime warranty. Cheapest price guaranteed.',
    h1: 'iPad Battery Replacement Melbourne',
    intro: 'All iPad models · Restore full charge capacity · Same-day service · Lifetime Warranty',
    symptoms: [
      { title: 'iPad Battery Draining Fast', desc: 'iPad going from full charge to dead in a few hours of light usage.' },
      { title: 'Random Shutdowns', desc: 'iPad powers off unexpectedly at 20–40% battery remaining.' },
      { title: 'Won\'t Hold Charge', desc: 'iPad needs to stay plugged in constantly to function — battery no longer holds charge.' },
      { title: 'Swollen Battery', desc: 'Back of iPad bulging, screen lifting from frame, or pressure from inside — requires urgent replacement.' },
      { title: 'Slow Charging', desc: 'iPad taking 6–8+ hours to charge from flat — significantly longer than when new.' },
    ],
    benefits: [
      { title: 'High-Capacity Replacement Cells', desc: 'iPad batteries are larger than phone batteries. We fit high-quality cells that restore full capacity for all-day use.' },
      { title: 'Safe Swollen Battery Removal', desc: 'Swollen iPad batteries require careful handling. We safely remove and dispose of degraded cells with proper equipment.' },
      { title: 'Same-Day Service', desc: 'iPad battery replacements available same day for most models. Call ahead to confirm parts availability.' },
      { title: 'Lifetime Warranty', desc: 'Every iPad battery replacement includes a lifetime warranty.' },
    ],
    faqs: [
      { question: 'Is iPad battery replacement worth it?', answer: 'Absolutely. An iPad battery replacement is a fraction of the cost of a new iPad and extends device life by 2–3 years.' },
      { question: 'How long does iPad battery replacement take?', answer: 'iPad battery replacements typically take 60–90 minutes due to the larger form factor compared to phones.' },
      { question: 'What if my iPad battery is swollen?', answer: 'Stop charging your iPad immediately and bring it in. Swollen batteries risk display damage and should be replaced urgently. We handle swollen batteries safely.' },
    ],
    relatedServices: ipadRelated('ipad-battery-replacement'),
  },

  {
    slug: 'ipad-charging-port-repair',
    hubHref: '/ipad-repair-melbourne',
    repairSlug: 'charging-port-repair',
    hubLabel: 'iPad Repair Melbourne',
    metaTitle: 'iPad Charging Port Repair Melbourne | USB-C & Lightning | iTech Repairs',
    metaDescription: 'iPad charging port repair Melbourne. USB-C and Lightning port cleaning and replacement for all iPad models. Walk-in service. Lifetime warranty guaranteed.',
    h1: 'iPad Charging Port Repair Melbourne',
    intro: 'USB-C & Lightning port cleaning and replacement · All iPad models · Lifetime Warranty',
    symptoms: [
      { title: 'iPad Not Charging', desc: 'iPad shows no charging indicator despite trying multiple cables and chargers.' },
      { title: 'Charging Cable Loose', desc: 'USB-C or Lightning cable doesn\'t click in securely or feels loose in the port.' },
      { title: 'Accessory Not Recognized', desc: 'iPad showing "This accessory may not be supported" message when connecting standard cables.' },
      { title: 'Charging Only on One Side', desc: 'For USB-C iPads, cable only charges in one orientation — indicates port damage.' },
    ],
    benefits: [
      { title: 'USB-C & Lightning Both Supported', desc: 'We repair both USB-C ports (newer iPads) and Lightning ports (older models) with the correct replacement components.' },
      { title: 'Clean First Approach', desc: 'We always attempt cleaning before replacement — saving you money when debris is the only cause.' },
      { title: 'Apple Pencil Connectivity Tested', desc: 'For USB-C iPads with Apple Pencil charging, we verify pencil connectivity after port repair.' },
      { title: 'Lifetime Warranty', desc: 'All iPad charging port repairs include a lifetime warranty.' },
    ],
    faqs: [
      { question: 'Can you clean an iPad charging port?', answer: 'Yes. We start with professional cleaning using compressed air and precision tools. Many iPad charging issues are resolved without any replacement.' },
      { question: 'How long does iPad charging port repair take?', answer: 'Cleaning: 15 minutes. Full replacement: 45–60 minutes depending on the iPad model.' },
    ],
    relatedServices: ipadRelated('ipad-charging-port-repair'),
  },

  {
    slug: 'ipad-camera-repair',
    hubHref: '/ipad-repair-melbourne',
    repairSlug: 'camera-repair',
    hubLabel: 'iPad Repair Melbourne',
    metaTitle: 'iPad Camera Repair Melbourne | All iPad Models | iTech Repairs',
    metaDescription: 'iPad camera repair Melbourne. Fix blurry, black, or cracked camera on all iPad models. Rear and front camera replacement. Lifetime warranty guaranteed.',
    h1: 'iPad Camera Repair Melbourne',
    intro: 'Rear & front camera repair · Lens replacement · All iPad models · Lifetime Warranty',
    symptoms: [
      { title: 'Blurry iPad Camera', desc: 'All photos and videos from the rear camera are blurry regardless of lighting conditions.' },
      { title: 'Black Camera Preview', desc: 'Camera app opens to a black screen — camera module failure or disconnection.' },
      { title: 'Cracked Camera Lens', desc: 'Rear camera glass cracked causing flares and haze in every photo taken.' },
      { title: 'Front Camera Not Working', desc: 'Front-facing camera dark or non-functional, affecting FaceTime and video calls.' },
      { title: 'Center Stage Not Functioning', desc: 'Center Stage auto-framing feature not working correctly on supported iPad models.' },
    ],
    benefits: [
      { title: 'Lens Replacement Option', desc: 'If only the outer lens glass is cracked, we replace just the lens — a much more affordable fix than a full module replacement.' },
      { title: 'Both Cameras Tested', desc: 'Post-repair testing covers rear camera, front camera, 4K video, and Center Stage functionality.' },
      { title: 'All iPad Models Supported', desc: 'From iPad mini to iPad Pro — we carry camera modules for all current and recent iPad generations.' },
      { title: 'Lifetime Warranty', desc: 'Every iPad camera repair includes a lifetime warranty on parts and labour.' },
    ],
    faqs: [
      { question: 'How long does iPad camera repair take?', answer: 'Lens replacement: 20 minutes. Camera module replacement: 45–60 minutes on the spot.' },
      { question: 'Can you repair the front FaceTime camera on an iPad?', answer: 'Yes. We repair both rear and front-facing iPad cameras for all current and recent models.' },
    ],
    relatedServices: ipadRelated('ipad-camera-repair'),
  },

  {
    slug: 'ipad-water-damage-repair',
    hubHref: '/ipad-repair-melbourne',
    repairSlug: 'water-damage-repair',
    hubLabel: 'iPad Repair Melbourne',
    metaTitle: 'iPad Water Damage Repair Melbourne | Urgent Service | iTech Repairs',
    metaDescription: 'iPad water damage repair Melbourne. Professional ultrasonic cleaning, corrosion removal for all iPad models. Act fast for best results. Lifetime warranty.',
    h1: 'iPad Water Damage Repair Melbourne',
    intro: 'Ultrasonic board cleaning · Corrosion removal · Act fast for best results · No Fix No Fee',
    symptoms: [
      { title: 'iPad Dropped in Water', desc: 'Device was submerged or exposed to significant liquid. Power off immediately and bring it in.' },
      { title: 'Screen Flickering After Water', desc: 'Display showing unusual flickers or ink blotches after liquid exposure.' },
      { title: 'Won\'t Turn On', desc: 'iPad completely unresponsive after water exposure. Time is critical — bring it in immediately.' },
      { title: 'Charging Port Corroded', desc: 'Green or white residue visible in the USB-C or Lightning port — active corrosion needs immediate treatment.' },
    ],
    benefits: [
      { title: 'Professional Ultrasonic Cleaning', desc: 'Ultrasonic cleaning removes corrosive mineral deposits from iPad logic boards that drying alone cannot address.' },
      { title: 'Data Preservation', desc: 'We prioritise recovering your photos, documents, and data before any component replacement.' },
      { title: 'Larger Board Expertise', desc: 'iPad logic boards are larger and more complex than phone boards. Our technicians have specific iPad water damage experience.' },
      { title: 'No Fix, No Fee', desc: 'If we cannot recover your iPad, you don\'t pay for the repair attempt.' },
    ],
    faqs: [
      { question: 'Should I put my iPad in rice after water damage?', answer: 'No. Power off immediately and bring it straight to us. Rice is ineffective and wastes critical recovery time.' },
      { question: 'How long does iPad water damage repair take?', answer: 'Initial assessment: 20–30 minutes. Full cleaning and repair: 2–6 hours depending on damage severity.' },
    ],
    relatedServices: ipadRelated('ipad-water-damage-repair'),
  },

  {
    slug: 'ipad-free-device-inspection',
    hubHref: '/ipad-repair-melbourne',
    repairSlug: 'inspection',
    hubLabel: 'iPad Repair Melbourne',
    metaTitle: 'Free iPad Device Inspection Melbourne | Walk In | iTech Repairs',
    metaDescription: 'Free iPad inspection in Melbourne. We check screen, battery, cameras, Touch ID, charging port, and more. No charge, no obligation. Walk in today.',
    h1: 'Free iPad Device Inspection Melbourne',
    intro: 'Free comprehensive inspection · No obligation · All iPad models · Walk in 7 days 9am–9pm',
    symptoms: [
      { title: 'Not Sure What\'s Wrong', desc: 'Something is wrong with your iPad but you can\'t identify the specific fault.' },
      { title: 'Buying a Second-Hand iPad', desc: 'Checking a used iPad before purchase — we verify screen, battery health, Apple ID lock status, and all functions.' },
      { title: 'Performance Issues', desc: 'iPad running slowly or crashing. We diagnose hardware and software causes.' },
    ],
    benefits: [
      { title: 'Completely Free', desc: '100% free inspection. No charge, no obligation, no pressure.' },
      { title: 'Multi-Point iPad Check', desc: 'Screen quality, battery health, Touch ID/Face ID, cameras, speakers, microphone, charging port, and software.' },
      { title: 'Written Quote', desc: 'Clear written quote for any faults. No hidden charges.' },
      { title: 'Walk In Any Time', desc: 'No appointment. Open 7 days 9am–9pm.' },
    ],
    faqs: [
      { question: 'Is the iPad inspection really free?', answer: 'Yes, completely free with no obligation to proceed with any repair.' },
      { question: 'Can you check if a second-hand iPad is iCloud locked?', answer: 'Yes. We check iCloud Activation Lock status, verify battery health, and assess overall condition.' },
    ],
    relatedServices: ipadRelated('ipad-free-device-inspection'),
  },

  {
    slug: 'ipad-insurance-damage-report',
    hubHref: '/ipad-repair-melbourne',
    repairSlug: 'insurance-report',
    hubLabel: 'iPad Repair Melbourne',
    metaTitle: 'iPad Insurance Damage Report Melbourne | iTech Repairs',
    metaDescription: 'Professional iPad insurance damage reports Melbourne. Written assessments for all iPad models accepted by all major Australian insurers. Walk in today.',
    h1: 'iPad Insurance Damage Report Melbourne',
    intro: 'Professional written assessments · Accepted by all major Australian insurers · Same visit available',
    symptoms: [
      { title: 'Filing an Insurance Claim', desc: 'Your insurer requires a professional damage assessment from an authorised repairer.' },
      { title: 'Accidental Damage Documentation', desc: 'Documenting screen, physical, or liquid damage for insurance purposes.' },
    ],
    benefits: [
      { title: 'Professional Letterhead Reports', desc: 'Reports issued on iTech Repairs letterhead with technician details and device serial number.' },
      { title: 'Accepted by All Major Insurers', desc: 'Reports accepted by all major Australian device and contents insurers.' },
      { title: 'Same Visit Assessment', desc: 'Walk in for your assessment. Most reports ready within 24–48 hours.' },
    ],
    faqs: [
      { question: 'What does the iPad insurance report include?', answer: 'Full damage description, probable cause, serial number, and itemised repair cost estimate.' },
      { question: 'How quickly can I get my iPad insurance report?', answer: 'Most reports ready within 24–48 hours. Express same-day available on request.' },
    ],
    relatedServices: ipadRelated('ipad-insurance-damage-report'),
  },

  // ═══ MACBOOK ═════════════════════════════════════════════════════════════════

  {
    slug: 'macbook-screen-repair',
    hubHref: '/macbook-repair-melbourne',
    repairSlug: 'screen-repair',
    hubLabel: 'MacBook Repair Melbourne',
    metaTitle: 'MacBook Screen Repair Melbourne | Retina Display Specialists | iTech Repairs',
    metaDescription: 'MacBook screen repair Melbourne. Retina and Liquid Retina XDR display repair for all MacBook Air and MacBook Pro models. Lifetime warranty. Walk in today.',
    h1: 'MacBook Screen Repair Melbourne',
    intro: 'Retina & Liquid Retina XDR display repair · All MacBook Air & Pro models · Lifetime Warranty',
    symptoms: [
      { title: 'Cracked MacBook Screen', desc: 'Display cracked or shattered from a drop or pressure, with visible damage to the Retina panel.' },
      { title: 'Black or No Display', desc: 'MacBook powers on (chime heard, fans spin) but screen is completely dark — display or cable failure.' },
      { title: 'Vertical Lines on Screen', desc: 'Vertical lines of colour or white lines across the display — typical of display panel or GPU damage.' },
      { title: 'Backlight Failure', desc: 'Very faint image visible in bright light but screen appears black — backlight circuit failure.' },
      { title: 'Flickering Display', desc: 'Screen flickering, flashing, or randomly going dark during use.' },
      { title: 'Stage Light or Flexgate Issue', desc: 'Bright stripe along the bottom of the screen common on 2016–2019 MacBook Pro models.' },
    ],
    benefits: [
      { title: 'Retina Display Specialists', desc: 'We source display panels matched to your exact MacBook model — preserving True Tone, P3 colour, and ProMotion where applicable.' },
      { title: 'Intel & Apple Silicon Both Supported', desc: 'We repair MacBooks running Intel, M1, M2, M3, M4, and M5 chips with the correct display assemblies for each.' },
      { title: 'Full Display Calibration', desc: 'Post-repair testing covers dead pixels, backlight uniformity, True Tone, and hinge operation.' },
      { title: 'Lifetime Warranty', desc: 'Every MacBook screen repair includes a lifetime warranty on parts and labour.' },
    ],
    faqs: [
      { question: 'How long does MacBook screen repair take?', answer: 'Most MacBook screen repairs take 1–2 hours. We\'ll give you a time estimate when you bring it in.' },
      { question: 'Do you preserve True Tone after MacBook screen repair?', answer: 'Yes. We use display panels that support True Tone and verify its correct operation after fitting.' },
      { question: 'Can you fix the Flexgate issue on older MacBook Pros?', answer: 'Yes. We address the stage-light / Flexgate display cable issue on affected 2016–2019 MacBook Pro models.' },
    ],
    relatedServices: macbookRelated('macbook-screen-repair'),
  },

  {
    slug: 'macbook-battery-replacement',
    hubHref: '/macbook-repair-melbourne',
    repairSlug: 'battery-replacement',
    hubLabel: 'MacBook Repair Melbourne',
    metaTitle: 'MacBook Battery Replacement Melbourne | All MacBook Models | iTech Repairs',
    metaDescription: 'MacBook battery replacement Melbourne. Restore all-day battery life on all MacBook Air and Pro models. M1, M2, M3, M4, M5, and Intel supported. Lifetime warranty.',
    h1: 'MacBook Battery Replacement Melbourne',
    intro: 'All MacBook Air & Pro models · Intel & Apple Silicon · Restore all-day battery life · Lifetime Warranty',
    symptoms: [
      { title: 'MacBook Battery Draining Fast', desc: 'MacBook going from full charge to dead in 2–3 hours of light use — far less than Apple\'s rated battery life.' },
      { title: 'Swollen Battery', desc: 'Trackpad no longer clicks properly or keyboard is elevated — a swollen battery pushing up from below. Urgent repair needed.' },
      { title: 'Service Battery Warning', desc: 'macOS displaying "Service Battery" in the menu bar — Apple\'s own indicator that replacement is required.' },
      { title: 'MacBook Only Works Plugged In', desc: 'MacBook shuts off immediately when unplugged — battery no longer holds any useful charge.' },
      { title: 'Random Shutdowns', desc: 'MacBook powers off unexpectedly at 20–40% battery remaining.' },
    ],
    benefits: [
      { title: 'Apple Silicon & Intel Both Supported', desc: 'We replace batteries in all MacBook Air and Pro models from 2015 onwards, including M1, M2, M3, M4, and M5 chip models.' },
      { title: 'Safe Swollen Battery Handling', desc: 'Swollen MacBook batteries require careful professional handling. We safely remove and dispose of damaged cells.' },
      { title: 'SMC Reset Performed', desc: 'After every MacBook battery replacement, we perform an SMC reset to ensure accurate battery percentage reporting and charging behaviour.' },
      { title: 'Lifetime Warranty', desc: 'Every MacBook battery replacement includes a lifetime warranty on the replacement cell and labour.' },
    ],
    faqs: [
      { question: 'How do I know if my MacBook battery needs replacing?', answer: 'Go to Apple Menu > System Information > Power. Check Cycle Count and Condition. If condition shows "Replace Soon" or "Service Battery", replacement is due.' },
      { question: 'How long does MacBook battery replacement take?', answer: 'Most MacBook battery replacements take 60–90 minutes. We\'ll confirm the timeframe when you bring your MacBook in.' },
      { question: 'Will replacing the MacBook battery affect my data?', answer: 'No. MacBook battery replacement does not affect your data, software, or system settings.' },
    ],
    relatedServices: macbookRelated('macbook-battery-replacement'),
  },

  {
    slug: 'macbook-keyboard-repair',
    hubHref: '/macbook-repair-melbourne',
    repairSlug: 'keyboard-replacement',
    hubLabel: 'MacBook Repair Melbourne',
    metaTitle: 'MacBook Keyboard Repair Melbourne | Butterfly & Scissor Keys | iTech Repairs',
    metaDescription: 'MacBook keyboard repair Melbourne. Fix stuck, broken, or non-responsive keys on all MacBook models. Butterfly and scissor mechanism keyboards. Lifetime warranty.',
    h1: 'MacBook Keyboard Repair Melbourne',
    intro: 'Butterfly & scissor keyboard repair · All MacBook Air & Pro models · Lifetime Warranty',
    symptoms: [
      { title: 'Keys Stuck or Not Registering', desc: 'One or more keys stuck down, require excessive pressure, or register multiple keystrokes from a single press.' },
      { title: 'Keys Fallen Off', desc: 'Individual keycaps have broken off or the mechanism beneath has snapped.' },
      { title: 'Keyboard Completely Unresponsive', desc: 'All or most keyboard keys not working — possibly a debris intrusion or keyboard flex cable issue.' },
      { title: 'Backlight Not Working', desc: 'Keyboard backlight no longer illuminates despite being enabled in System Settings.' },
      { title: 'Touch Bar Issues', desc: 'Touch Bar unresponsive, displaying incorrect content, or not showing at all.' },
      { title: 'Debris Under Keys', desc: 'Dust or crumbs causing keys to feel scratchy, double-register, or stick.' },
    ],
    benefits: [
      { title: 'Butterfly Keyboard Specialists', desc: 'We replace the infamously problematic butterfly keyboard on 2016–2019 MacBook Pro models with the full keyboard deck replacement Apple recommended.' },
      { title: 'Scissor Mechanism Keyboards', desc: 'Scissor-switch keyboards on 2020+ MacBook Air and Pro models are repaired with matched replacement units.' },
      { title: 'Every Key Tested Post-Repair', desc: 'After replacement, we test every key for actuation, travel, and backlight uniformity before returning your MacBook.' },
      { title: 'Lifetime Warranty', desc: 'All MacBook keyboard repairs include a lifetime warranty on parts and labour.' },
    ],
    faqs: [
      { question: 'Can individual MacBook keys be replaced or does the whole keyboard need replacing?', answer: 'On most MacBook models, the keyboard is integrated into the top case, requiring full keyboard deck replacement. Individual keycap repairs are possible in some cases — we\'ll advise after inspection.' },
      { question: 'How long does MacBook keyboard repair take?', answer: 'Keyboard deck replacement typically takes 1–2 hours depending on the MacBook model.' },
      { question: 'Do you fix the butterfly keyboard on MacBook Pro 2016–2019?', answer: 'Yes. We replace butterfly keyboard decks on affected MacBook Pro models. The scissor-switch replacement is significantly more reliable.' },
    ],
    relatedServices: macbookRelated('macbook-keyboard-repair'),
  },

  {
    slug: 'macbook-trackpad-repair',
    hubHref: '/macbook-repair-melbourne',
    repairSlug: 'trackpad-replacement',
    hubLabel: 'MacBook Repair Melbourne',
    metaTitle: 'MacBook Trackpad Repair Melbourne | Force Touch | iTech Repairs',
    metaDescription: 'MacBook trackpad repair Melbourne. Fix cracked, sunken, or unresponsive Force Touch trackpad on all MacBook models. Lifetime warranty. Walk in today.',
    h1: 'MacBook Trackpad Repair Melbourne',
    intro: 'Force Touch trackpad repair · All MacBook Air & Pro models · Lifetime Warranty',
    symptoms: [
      { title: 'Trackpad Cracked', desc: 'Trackpad glass surface cracked from a drop, with sharp edges or surface damage.' },
      { title: 'Trackpad Sunken or Elevated', desc: 'Trackpad visibly tilted, sunken, or raised above the palm rest — often caused by a swollen battery beneath.' },
      { title: 'Click Not Working', desc: 'Trackpad no longer registers click or Force Touch — haptic feedback absent or non-functional.' },
      { title: 'Cursor Jumping Erratically', desc: 'Cursor moving unpredictably or phantom gestures being registered — digitiser damage beneath the glass.' },
      { title: 'Multi-Touch Gestures Failing', desc: 'Three or four-finger gestures not registering correctly after physical damage to the trackpad.' },
    ],
    benefits: [
      { title: 'Force Touch Preserved', desc: 'We fit trackpad replacements calibrated for Force Touch sensitivity, haptic strength settings, and all system gesture recognition.' },
      { title: 'Swollen Battery Check', desc: 'A sunken or raised trackpad often indicates a swollen battery beneath. We check and address both issues in the same service visit.' },
      { title: 'Full Gesture Testing', desc: 'Post-repair testing covers Force Touch, all multi-finger gestures, cursor accuracy, and drag lock functionality.' },
      { title: 'Lifetime Warranty', desc: 'Every MacBook trackpad repair includes a lifetime warranty on parts and labour.' },
    ],
    faqs: [
      { question: 'Can a MacBook trackpad be repaired without replacing the whole unit?', answer: 'In most cases, the full trackpad unit needs to be replaced. Cracked glass or mechanical failure cannot be partially repaired safely.' },
      { question: 'How long does MacBook trackpad repair take?', answer: 'MacBook trackpad replacement typically takes 60–90 minutes.' },
      { question: 'If my trackpad is raised, does my battery also need replacing?', answer: 'A raised trackpad is a strong indicator of a swollen battery beneath. We inspect both in the same visit and will advise if both need attention.' },
    ],
    relatedServices: macbookRelated('macbook-trackpad-repair'),
  },

  {
    slug: 'macbook-water-damage-repair',
    hubHref: '/macbook-repair-melbourne',
    repairSlug: 'water-damage-repair',
    hubLabel: 'MacBook Repair Melbourne',
    metaTitle: 'MacBook Water Damage Repair Melbourne | Logic Board Specialists | iTech Repairs',
    metaDescription: 'MacBook water damage repair Melbourne. Ultrasonic logic board cleaning, corrosion removal, microsoldering for all MacBook models. Act fast. Lifetime warranty.',
    h1: 'MacBook Water Damage Repair Melbourne',
    intro: 'Logic board cleaning · Microsoldering · Data recovery · Act fast for best results',
    symptoms: [
      { title: 'MacBook Dropped Liquid On', desc: 'Liquid spilled on keyboard or liquid exposure — power off immediately, do not charge, bring it in now.' },
      { title: 'Won\'t Power On After Liquid', desc: 'MacBook completely unresponsive after spill. Time-critical — corrosion spreads every hour.' },
      { title: 'No Display After Liquid', desc: 'MacBook powers on (chime, fan) but display is dark after liquid exposure — display circuit corrosion.' },
      { title: 'Keyboard Keys Sticky After Spill', desc: 'Keys sticking or not registering after liquid has entered the keyboard deck.' },
      { title: 'Random Shutdowns After Spill', desc: 'MacBook crashing or randomly shutting down after a liquid event — corrosion causing intermittent faults.' },
    ],
    benefits: [
      { title: 'Professional Ultrasonic Cleaning', desc: 'MacBook logic boards require specialist ultrasonic cleaning equipment to remove corrosive residue that compressed air cannot address.' },
      { title: 'Component-Level Microsoldering', desc: 'We perform microsoldering repairs on corroded or shorted logic board components — not just cleaning and hoping for the best.' },
      { title: 'Data Recovery Priority', desc: 'MacBook data is often recoverable even from severely damaged logic boards. We prioritise your files, photos, and documents throughout the repair.' },
      { title: 'No Fix, No Fee', desc: 'If we cannot recover your MacBook from water damage, you don\'t pay for the repair attempt.' },
    ],
    faqs: [
      { question: 'What should I do immediately after spilling liquid on my MacBook?', answer: 'Power off immediately (hold power button), turn it upside down to drain, do not connect power, and bring it to us right away. Do not use rice — bring it straight in.' },
      { question: 'Can you recover data from a water-damaged MacBook?', answer: 'In many cases yes. MacBook SSDs are often recoverable even when the logic board has significant liquid damage. Success rate depends on the extent of corrosion.' },
      { question: 'How long does MacBook water damage repair take?', answer: 'Initial assessment: 30 minutes. Full cleaning and repair: 2–8 hours depending on damage severity. Complex component replacement may take 1–3 days.' },
    ],
    relatedServices: macbookRelated('macbook-water-damage-repair'),
  },

  {
    slug: 'macbook-free-device-inspection',
    hubHref: '/macbook-repair-melbourne',
    repairSlug: 'inspection',
    hubLabel: 'MacBook Repair Melbourne',
    metaTitle: 'Free MacBook Inspection Melbourne | Walk In | iTech Repairs',
    metaDescription: 'Free MacBook inspection in Melbourne. We check screen, battery, keyboard, trackpad, charging, and more. No charge, no obligation. Walk in today.',
    h1: 'Free MacBook Inspection Melbourne',
    intro: 'Free comprehensive MacBook inspection · No obligation · All models · Walk in 7 days',
    symptoms: [
      { title: 'Not Sure What\'s Wrong', desc: 'MacBook behaving oddly but you can\'t identify the fault. Our free inspection pinpoints exactly what needs repair.' },
      { title: 'Buying a Second-Hand MacBook', desc: 'Checking a used MacBook before purchase — we verify battery health, display quality, logic board health, and all functions.' },
      { title: 'Performance Issues', desc: 'MacBook running slowly, overheating, or freezing. We diagnose thermal, hardware, and software causes.' },
      { title: 'Pre-Repair Quote', desc: 'Need a written quote before committing to a repair? Walk in for a free assessment.' },
    ],
    benefits: [
      { title: 'Completely Free', desc: '100% free inspection with no hidden fees and no obligation to proceed.' },
      { title: 'Comprehensive MacBook Check', desc: 'Screen quality, battery cycle count and health, keyboard function, trackpad, charging, speakers, microphone, and system diagnostics.' },
      { title: 'Written Quote Provided', desc: 'Clear written quote for any faults found. No pressure.' },
      { title: 'Walk In Any Time', desc: 'No appointment. Open 7 days 9am–9pm.' },
    ],
    faqs: [
      { question: 'Is the MacBook inspection really free?', answer: 'Yes, 100% free. No charge, no obligation.' },
      { question: 'Can you check a second-hand MacBook for problems before I buy it?', answer: 'Yes. We check battery health (cycle count), screen quality, keyboard, trackpad, logic board health, and verify there are no Activation Lock or MDM restrictions.' },
      { question: 'How long does the MacBook inspection take?', answer: '15–30 minutes for a standard inspection. More complex diagnostics may take longer.' },
    ],
    relatedServices: macbookRelated('macbook-free-device-inspection'),
  },

  {
    slug: 'macbook-insurance-damage-report',
    hubHref: '/macbook-repair-melbourne',
    repairSlug: 'insurance-report',
    hubLabel: 'MacBook Repair Melbourne',
    metaTitle: 'MacBook Insurance Damage Report Melbourne | iTech Repairs',
    metaDescription: 'Professional MacBook insurance damage reports Melbourne. Written assessments for all MacBook models accepted by all major Australian insurers. Walk in today.',
    h1: 'MacBook Insurance Damage Report Melbourne',
    intro: 'Professional written assessments · Accepted by all major Australian insurers · Same visit available',
    symptoms: [
      { title: 'Filing an Insurance Claim', desc: 'Your insurer requires a professional damage assessment report from an authorised repairer.' },
      { title: 'Accidental Damage or Liquid Spill', desc: 'Documenting physical or liquid damage for home and contents or business insurance.' },
      { title: 'Business MacBook Claim', desc: 'Formal technical assessment required for a company device insurance claim.' },
    ],
    benefits: [
      { title: 'Professional Letterhead Reports', desc: 'Reports on iTech Repairs letterhead with technician details, serial number, and full technical findings.' },
      { title: 'Accepted by All Major Insurers', desc: 'Our reports are accepted by all major Australian device and home contents insurers.' },
      { title: 'Same Visit Assessment', desc: 'Walk in for your assessment. Most reports ready within 24–48 hours.' },
      { title: 'Detailed Technical Content', desc: 'Reports include all damage found, probable cause, and itemised repair cost estimates.' },
    ],
    faqs: [
      { question: 'What does the MacBook insurance report include?', answer: 'Full damage description, probable cause, MacBook serial number, and itemised repair cost estimate for all identified faults.' },
      { question: 'How quickly can I get my MacBook insurance report?', answer: 'Most reports ready within 24–48 hours. Express same-day reports available on request.' },
    ],
    relatedServices: macbookRelated('macbook-insurance-damage-report'),
  },
]

export const BRAND_SERVICE_BY_SLUG = new Map(BRAND_SERVICE_PAGES.map(p => [p.slug, p]))
