import type { DeviceCategory } from '@/types'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface DeviceRepairContent {
  /** ~120-word device+repair-specific intro replacing the generic longDescription */
  intro: string
  /** 4–5 symptoms that lead customers to seek this repair */
  commonProblems: string[]
  /** 4–5 numbered repair process steps */
  repairProcess: string[]
  /** Device-specific "Why Choose Us" paragraph */
  whyChooseUs: string
}

// ---------------------------------------------------------------------------
// Repair category grouping
// ---------------------------------------------------------------------------

function getRepairCategory(repairSlug: string): string {
  if (repairSlug.includes('screen') || repairSlug.includes('display') || repairSlug.includes('lcd')) return 'screen'
  if (repairSlug.includes('battery')) return 'battery'
  if (repairSlug.includes('charging') || repairSlug.includes('charge')) return 'charging'
  if (repairSlug.includes('camera') || repairSlug.includes('lens')) return 'camera'
  if (repairSlug.includes('speaker') || repairSlug.includes('earpiece') || repairSlug.includes('loudspeaker')) return 'audio'
  if (repairSlug.includes('microphone')) return 'audio'
  if (repairSlug.includes('back-glass') || repairSlug.includes('back-cover')) return 'back'
  if (repairSlug.includes('water')) return 'water'
  if (repairSlug.includes('face-id') || repairSlug.includes('touch-id') || repairSlug.includes('biometric')) return 'biometric'
  if (repairSlug.includes('button') || repairSlug.includes('vibrat') || repairSlug.includes('proximity')) return 'buttons'
  if (repairSlug.includes('ghost-touch') || repairSlug.includes('touch-screen')) return 'touchscreen'
  if (repairSlug.includes('motherboard') || repairSlug.includes('logic-board')) return 'motherboard'
  if (repairSlug.includes('data-recovery')) return 'data'
  if (repairSlug.includes('keyboard')) return 'keyboard'
  if (repairSlug.includes('trackpad')) return 'trackpad'
  return 'general'
}

// ---------------------------------------------------------------------------
// Content matrix: brand → repairCategory → content
// ---------------------------------------------------------------------------

type ContentMatrix = Partial<Record<string, DeviceRepairContent>>

const IPHONE_CONTENT: ContentMatrix = {
  screen: {
    intro: `iPhone screens use Super Retina XDR OLED technology, delivering vivid colours and deep blacks that make cracked or malfunctioning displays immediately noticeable. A damaged screen — whether it needs a repair or a full screen replacement — affects more than appearance. It can compromise Face ID performance, touch accuracy, and True Tone display calibration. If you are searching for iPhone screen repair near me in Melbourne, iTech Repairs in Braybrook and Spotswood offers walk-in service with no appointment needed. We replace your iPhone display with a premium-grade OLED panel matched to your specific model's original specifications, including correct brightness output, True Tone response, and oleophobic coating. Every screen repair and screen replacement includes a full biometric verification test to confirm Face ID is functioning correctly after the job is done. Most iPhone screen repairs are completed in 15 minutes on the spot, and every repair is backed by our lifetime warranty and cheapest price guarantee.`,
    commonProblems: [
      'Cracked or shattered front glass from a drop or impact — even hairline cracks worsen over time',
      'Touch not responding in certain areas of the screen, or completely unresponsive',
      'Black screen with a faint backlight glow visible from the sides — display connector has failed',
      'Green, pink, purple, or flickering lines appearing across the screen after impact',
      'Face ID failing or giving errors — often caused by improper screen replacement elsewhere',
      'Screen lifting or separating from the frame after a previous low-quality repair',
    ],
    repairProcess: [
      'We inspect the display under magnification and test Face ID, touch calibration, and True Tone before opening the device',
      'The OLED display assembly is carefully separated using calibrated heat pads and precision suction tooling to avoid flex cable damage',
      'A matched OLED panel for your specific iPhone model is installed using manufacturer-grade adhesive and correctly routed flex cables',
      'Touch accuracy, brightness levels, True Tone, auto-brightness, and Face ID are verified and calibrated after installation',
      'Your iPhone is returned with a full function test report, oleophobic coating confirmed, and covered by our lifetime warranty',
    ],
    whyChooseUs: `iPhone screen repairs and screen replacements demand precision — the TrueDepth camera, Face ID dot projector, and flood illuminator must all be handled correctly to preserve biometric security. A low-quality screen replacement from an untrained technician can permanently disable Face ID, which Apple cannot restore without motherboard-level repair. Our technicians are trained specifically on Apple OLED display assemblies and use calibrated tooling to prevent flex cable damage. We stock OLED panels for all current iPhone generations so most screen repairs are completed in 15 minutes while you wait. We guarantee the cheapest price in Melbourne — if you find a lower quote locally, we will match it.`,
  },
  battery: {
    intro: `iPhone batteries are lithium-ion cells engineered to Apple's tight capacity and voltage tolerances. As your iPhone ages, battery health degrades — dropping below 80% health often triggers performance throttling, unexpected shutdowns, and poor standby times. At iTech Repairs in Melbourne, we install premium-grade replacement batteries calibrated to your iPhone model and recalibrate battery health reporting in your device settings. Most iPhone battery replacements take just 15 minutes on the spot.`,
    commonProblems: [
      'Battery draining from 100% to 20% within a few hours of light use',
      'iPhone shutting down unexpectedly at 20–30% charge',
      'Device only working while plugged in and dying immediately when unplugged',
      'Battery health reading below 80% in Settings → Battery → Battery Health',
      'Performance throttling causing noticeable app slowdowns and lag',
    ],
    repairProcess: [
      'We run a battery health diagnostic to confirm degradation and rule out software causes',
      'The iPhone is opened using precision tools and the adhesive battery tabs are carefully released',
      'A premium-grade replacement battery matched to your iPhone model is installed',
      'We run a post-installation charge cycle and verify the Battery Health percentage resets correctly',
      'Your iPhone is returned with battery performance confirmed and covered by our lifetime warranty',
    ],
    whyChooseUs: `iPhone batteries use adhesive pull-tabs that must be removed correctly to avoid tearing inside the case. Our technicians follow Apple-aligned disassembly procedures and install batteries calibrated to each iPhone model's capacity spec. We verify your Battery Health percentage and performance throttling status after every replacement — not just power on.`,
  },
  charging: {
    intro: `iPhone charging ports use the Lightning or USB-C connector standard depending on model, and are susceptible to lint compaction, corrosion from moisture, and physical damage from cable stress. A failing charging port often mimics a dead battery — the device won't charge and may show intermittent connection warnings. At iTech Repairs in Melbourne, we clean, assess, and replace iPhone charging ports at component level, resolving most faults without unnecessary full board replacements.`,
    commonProblems: [
      'iPhone not charging or only charging at certain angles',
      'Repeated "This accessory is not supported" warnings',
      'Wireless charging working but cable charging failing',
      'Loose or wobbly Lightning/USB-C connector fit',
      'Charging port visibly filled with lint or debris',
    ],
    repairProcess: [
      'We inspect the port under magnification for debris, bent pins, and corrosion',
      'Ultrasonic cleaning removes lint and oxidation from the connector cavity',
      'If cleaning does not resolve the fault, the charging port assembly is replaced at component level',
      'Multi-cable charging test and data sync verification confirms the repair',
      'Fast-charge and wireless charging compatibility is verified before return',
    ],
    whyChooseUs: `Many charging port faults are caused by compacted lint rather than hardware failure — we always clean first before recommending replacement. When a port replacement is needed, we replace the connector assembly rather than the entire flex cable where possible, keeping cost down. All repairs include a 15-minute walk-in turnaround for most iPhone models.`,
  },
  camera: {
    intro: `iPhone cameras are some of the most sophisticated mobile imaging systems available, with multi-lens arrays, LiDAR scanners, and computational photography engines built into each generation. Camera faults — whether from impact, moisture, or component failure — can affect photo quality, video stabilisation, portrait mode depth mapping, and autofocus. At iTech Repairs in Melbourne, we replace iPhone camera modules using matched assemblies for your specific model to preserve camera performance and software compatibility.`,
    commonProblems: [
      'Blurry photos that don\'t clear up even after tapping to refocus',
      'Camera app crashing or showing a black screen',
      'Clicking or rattling noise from the camera module area when moving the phone',
      'Video stabilisation or autofocus not working correctly',
      'Cracked camera lens causing visible spots or flare in photos',
    ],
    repairProcess: [
      'We run a camera diagnostic testing all lenses, flash, autofocus, and video stabilisation',
      'The faulty camera module is carefully removed without disturbing surrounding components',
      'A matched replacement camera assembly for your specific iPhone model is installed',
      'All camera functions are verified — photo, video, portrait mode, and ultrawide where applicable',
      'Front camera and Face ID performance is confirmed before the device is returned',
    ],
    whyChooseUs: `iPhone camera systems are deeply integrated with Apple's ISP and Secure Enclave — using mismatched replacement cameras causes software warnings and degrades performance. We source matched camera assemblies for each iPhone generation and verify all software-integrated camera functions post-repair. Walk in any day for a free camera diagnostic.`,
  },
  audio: {
    intro: `iPhone audio components — the loudspeaker, earpiece, and microphone — are precision assemblies that can fail from impact, moisture ingress, or gradual wear. Muffled call audio, no speaker output, or a microphone that cuts out during calls and video recordings are common signs of audio component failure. At iTech Repairs in Melbourne, we diagnose and replace iPhone audio components with matched assemblies, restoring full call quality and media playback.`,
    commonProblems: [
      'No audio from the loudspeaker during media playback or speakerphone calls',
      'Earpiece producing muffled, crackly, or very quiet audio during phone calls',
      'Microphone not picking up your voice during calls, recordings, or Siri',
      'Audio cutting in and out intermittently',
      'One speaker sounding noticeably louder or different to the other (on stereo models)',
    ],
    repairProcess: [
      'We run a full audio diagnostic testing both speakers, earpiece, and all microphones',
      'The faulty audio component is identified and targeted for replacement only',
      'The replacement speaker, earpiece, or microphone assembly is installed with correct seating',
      'Audio output and microphone sensitivity are tested across call, speakerphone, and recording modes',
      'Volume range and stereo balance are verified before the device is returned',
    ],
    whyChooseUs: `iPhone audio faults often have overlapping symptoms — what sounds like a speaker failure may be a software EQ issue, grille blockage, or microphone fault instead. We diagnose accurately before replacing any parts. Most audio component repairs are completed in 15–20 minutes on the spot at our Braybrook store.`,
  },
  back: {
    intro: `iPhone rear glass or back cover damage is common after drops, especially on models with glass backs required for wireless charging. A cracked back panel compromises water resistance, exposes internal components, and creates sharp edges that are uncomfortable to hold. At iTech Repairs in Melbourne, we replace iPhone rear glass and back cover panels with precision adhesive application and reseal the device to restore its original look and IP water resistance rating.`,
    commonProblems: [
      'Cracked or shattered rear glass panel from a drop',
      'Spider-web cracking across the back without the front being damaged',
      'Sharp glass edges from a partial break making the phone uncomfortable to hold',
      'Visible gaps or lifted glass at the edges of the rear panel',
      'Wireless charging becoming unreliable after rear glass damage',
    ],
    repairProcess: [
      'We assess the extent of rear glass damage and inspect for any internal impact damage',
      'The cracked rear glass is removed using precision heating tools and thin separators',
      'A matched replacement rear panel for your specific iPhone model is fitted',
      'Manufacturer-grade adhesive ensures a flush, sealed fit with restored water resistance',
      'Wireless charging functionality is verified before the device is returned',
    ],
    whyChooseUs: `Rear glass replacement on modern iPhones requires frame-level disassembly on some models — our technicians are equipped with the correct tooling for each generation. We use matched replacement glass panels that preserve wireless charging coil alignment and antenna performance. Most rear glass replacements are completed same day.`,
  },
  water: {
    intro: `iPhone water damage requires immediate professional intervention. Even water-resistant iPhones can suffer internal corrosion when liquid breaches the seals — and the damage worsens the longer the device remains untreated. At iTech Repairs in Melbourne, we use ultrasonic cleaning equipment to flush corrosive mineral deposits from the logic board, microsoldering tools for component-level repair, and precision drying techniques to maximise the chance of full recovery. Bring your device in immediately — do not attempt to charge it first.`,
    commonProblems: [
      'iPhone not turning on after liquid exposure',
      'Intermittent shutdowns or reboots after getting wet',
      'Touch screen becoming unresponsive after water contact',
      'Speaker producing distorted or muffled audio after water exposure',
      'Charging port showing corrosion or refusing to charge after liquid exposure',
    ],
    repairProcess: [
      'The iPhone is opened immediately and any residual liquid is absorbed before it causes further corrosion',
      'The logic board and all components are placed into the ultrasonic cleaner to remove mineral deposits',
      'Corrosion spots are treated with flux and microsoldering tools where required',
      'The device is precision-dried and reassembled for a full functional test',
      'We provide an honest outcome assessment — and if we can\'t fix it, there\'s no charge',
    ],
    whyChooseUs: `Water damage recovery success rates drop dramatically with each hour the device goes untreated — walk in immediately for the best outcome. We use commercial-grade ultrasonic cleaning equipment and have microsoldering capability for component-level board repairs. No fix, no fee applies to all water damage assessments at iTech Repairs.`,
  },
  biometric: {
    intro: `iPhone Face ID and Touch ID are secured biometric systems that are tightly paired to the device's Secure Enclave processor. Face ID relies on the TrueDepth camera array — any damage to the dot projector, flood illuminator, or infrared camera will disable Face ID permanently until repaired. At iTech Repairs in Melbourne, we assess biometric failures, diagnose the root cause, and perform component-level restoration where possible.`,
    commonProblems: [
      'Face ID not working after dropping the phone or after a previous screen repair',
      '"Face ID is not available" or "Face ID has been disabled" error messages',
      'Touch ID fingerprint scanner not recognised or "Unable to complete Touch ID setup"',
      'Biometrics failing after the device got wet',
      'Face ID failing intermittently in different lighting conditions',
    ],
    repairProcess: [
      'We run a full biometric diagnostic to isolate the failing component within the Face ID system',
      'The TrueDepth camera system is carefully inspected under magnification for physical damage',
      'Component-level assessment determines whether the fault is in the flex cable, camera module, or logic board',
      'Targeted repair or replacement of the affected biometric component is performed',
      'Full Face ID or Touch ID functionality is verified in multiple conditions before return',
    ],
    whyChooseUs: `Face ID is cryptographically paired to the Secure Enclave — it cannot be bypassed or cloned. When Face ID fails, the repair must address the actual hardware fault rather than attempt workarounds. Our technicians understand Apple's biometric architecture and perform repairs that restore genuine functionality, not substitutes.`,
  },
  buttons: {
    intro: `iPhone physical buttons — the side button, volume controls, and mute switch — experience daily mechanical stress and can fail from impact, moisture, or wear over time. A stuck, unresponsive, or rattling button affects device usability for taking screenshots, adjusting volume, and accessing Siri or AssistiveTouch. At iTech Repairs in Melbourne, we replace individual button assemblies on most iPhone models in 15–20 minutes on the spot.`,
    commonProblems: [
      'Volume up or down button not clicking or not registering presses',
      'Side/power button stuck down or not registering double-clicks for Apple Pay',
      'Mute switch loose, broken, or not toggling properly',
      'Buttons rattling inside the frame after a drop',
      'Siri not activating from the side button',
    ],
    repairProcess: [
      'We confirm the fault is hardware-based rather than a software accessibility setting',
      'The affected button bracket and flex cable assembly is carefully removed',
      'A matched replacement button assembly for your iPhone model is installed',
      'All button functions are tested — single press, double press, and long press actions',
      'AssistiveTouch and Siri activation are verified before the device is returned',
    ],
    whyChooseUs: `iPhone button assemblies are routed through flex cables that run beneath the display — careless disassembly can damage nearby components. Our technicians follow model-specific procedures for each iPhone generation, minimising risk to the display and biometric connections during button repairs.`,
  },
  touchscreen: {
    intro: `iPhone ghost touch and touchscreen faults — where the screen registers touches that aren't happening, or fails to respond to real touches — are often caused by display damage, digitiser failure, or residual moisture on the display connector. At iTech Repairs in Melbourne, we diagnose the root cause of ghost touch and touchscreen faults and perform the targeted repair, which is most commonly a display assembly replacement.`,
    commonProblems: [
      'Screen tapping, scrolling, or opening apps by itself without being touched',
      'Specific areas of the screen not responding to touch',
      'Touch response delayed or requiring multiple attempts to register',
      'Keyboard typing incorrect letters due to digitiser miscalibration',
      'Ghost touch worsening when the phone is charging',
    ],
    repairProcess: [
      'We clean and inspect the charging port and display connectors for moisture or debris',
      'Touch calibration software tests identify which areas of the digitiser are misfiring',
      'If the display connector is the cause, it is reseated and tested',
      'If the digitiser panel is faulty, a matched display assembly replacement is performed',
      'Full touch accuracy testing across all screen zones confirms the repair',
    ],
    whyChooseUs: `Ghost touch can sometimes be caused by a faulty USB cable or charger rather than hardware damage — we always rule out software and peripheral causes before recommending a replacement. Most touchscreen fault repairs are completed in 15 minutes on the spot at our Braybrook store.`,
  },
  motherboard: {
    intro: `iPhone motherboard repair requires microsoldering expertise and specialist diagnostic equipment. Logic board faults can cause a wide range of symptoms — no power, boot loops, no service, failed Face ID, or a device that works only when held in specific positions. At iTech Repairs in Melbourne, our technicians perform component-level iPhone logic board diagnostics and targeted microsoldering repairs to recover devices that other repairers have given up on.`,
    commonProblems: [
      'iPhone not turning on despite confirmed working battery and charging port',
      'Boot loop — stuck on the Apple logo and unable to reach the home screen',
      'No cellular service or "No SIM" errors that persist after reinserting the SIM',
      'Face ID, Bluetooth, or Wi-Fi permanently disabled by a logic board fault',
      'Device working only in certain positions, suggesting a broken solder joint',
    ],
    repairProcess: [
      'We run a full board-level diagnostic using professional DC power supply and multimeter testing',
      'Short circuits, broken traces, or failed capacitors are identified under a microscope',
      'Component-level microsoldering repairs are performed using a hot-air rework station',
      'The board is cleaned, reassembled, and power-tested before full device assembly',
      'We provide an honest outcome — if the board cannot be recovered, we will tell you before charging for the repair',
    ],
    whyChooseUs: `Motherboard repair requires equipment and skills beyond standard phone repair. Our technicians have microsoldering experience across iPhone logic board generations and access to component-level diagrams. No fix, no fee applies — we only charge if we successfully restore your device.`,
  },
  data: {
    intro: `iPhone data recovery is possible even when a device has a broken screen, failed battery, or water-damaged logic board. Contacts, photos, messages, and app data stored on the iPhone's NAND flash memory can often be extracted even when the device cannot boot normally. At iTech Repairs in Melbourne, we use professional data extraction tools and board-level techniques to recover your data and transfer it to a new device or backup.`,
    commonProblems: [
      'iPhone with a black or broken screen that cannot be unlocked to access data',
      'Device not turning on after a drop or water damage with unsynced data on board',
      'iPhone stuck in a boot loop preventing access to photos and contacts',
      'Passcode forgotten with no iCloud backup available',
      'Data not appearing in iCloud backup that needs to be recovered locally',
    ],
    repairProcess: [
      'We assess the device to determine whether data is accessible via software or requires hardware intervention',
      'Screen mirroring or external display adapters are used where the board is functional but the screen is broken',
      'For board-level faults, chip-off or JTAG data extraction techniques are applied where possible',
      'Recovered data is transferred to an encrypted storage medium and provided to you securely',
      'We provide an honest assessment before starting — if data recovery is not possible, there is no charge',
    ],
    whyChooseUs: `Data recovery success depends on the type of fault and how quickly the device is brought in — especially for water damage. We use professional extraction tools and have experience across all iPhone storage architectures. Walk in with your non-functional iPhone for a free data recovery assessment.`,
  },
}

const SAMSUNG_CONTENT: ContentMatrix = {
  screen: {
    intro: `Samsung Galaxy screens use Dynamic AMOLED and Super AMOLED display technology across the range, delivering high refresh rates, vivid colours, and curved glass designs on flagship models. A cracked or malfunctioning Samsung screen often presents with pink or green lines, unresponsive touch zones, or a completely black panel with backlighting. At iTech Repairs in Melbourne, we replace Samsung Galaxy screens with matched AMOLED assemblies to restore original colour accuracy, refresh rate, and S Pen compatibility where applicable.`,
    commonProblems: [
      'Cracked front glass or shattered curved display from a drop',
      'Pink, green, or flickering lines appearing across the AMOLED panel',
      'Touch screen not responding or registering ghost touches',
      'Black screen with the phone still vibrating and receiving notifications',
      'S Pen not responding or misregistering on the display after impact',
    ],
    repairProcess: [
      'We run a full display diagnostic confirming AMOLED panel health and touch calibration',
      'The Samsung frame is carefully separated using calibrated heat to soften the curved glass adhesive',
      'A matched AMOLED display assembly for your specific Galaxy model is installed',
      'Colour accuracy, refresh rate, touch sensitivity, and S Pen calibration are verified',
      'The device is returned with full function confirmation and covered by our lifetime warranty',
    ],
    whyChooseUs: `Samsung curved displays require specialised heating and separation tools — flat-blade entry can crack the panel further. Our technicians are equipped with curved-display tooling and source matched AMOLED panels that preserve your Samsung's refresh rate, HDR capabilities, and fingerprint sensor integration where applicable.`,
  },
  battery: {
    intro: `Samsung Galaxy batteries are lithium-ion or lithium-polymer cells with varying capacities across the range — from compact A-series batteries to the large 5000mAh+ cells in S Ultra and Note models. Battery degradation causes rapid drain, unexpected shutdowns, and swollen cells that can push up the display. At iTech Repairs in Melbourne, we replace Samsung batteries using matched cells for your specific model and verify charge cycle performance after installation.`,
    commonProblems: [
      'Galaxy battery draining from full to empty within a few hours of normal use',
      'Unexpected shutdowns at 15–25% battery level',
      'Swollen battery causing the screen to lift or the back panel to bubble',
      'Device only running when connected to charger',
      'Battery percentage jumping erratically rather than draining steadily',
    ],
    repairProcess: [
      'We confirm battery degradation using Samsung diagnostic mode and battery health tools',
      'The rear panel or display assembly is removed to access the battery, depending on the model',
      'A matched replacement battery for your Galaxy model is installed with correct adhesive strips',
      'Post-installation charge cycle and capacity test confirms the replacement battery is calibrated',
      'The device is sealed and returned with battery performance verified under our lifetime warranty',
    ],
    whyChooseUs: `Samsung battery replacement complexity varies significantly across models — some require full display removal while others use a rear panel approach. Our technicians follow model-specific disassembly procedures and source batteries matched to each Galaxy model's original capacity specification.`,
  },
  charging: {
    intro: `Samsung Galaxy devices use USB-C charging across all current models and support fast charging protocols including Super Fast Charge and wireless PowerShare. Charging port faults — caused by lint, corrosion, or physical damage — are common and often misdiagnosed as battery failures. At iTech Repairs in Melbourne, we clean, assess, and replace Samsung charging ports at component level for most Galaxy models.`,
    commonProblems: [
      'Samsung not charging or only charging when held at a specific angle',
      'USB-C cable fitting loosely or falling out of the port',
      'Wireless charging working but wired charging not working',
      '"Moisture detected" warning appearing without the device being wet',
      'Slow charging despite using a fast charge cable and adapter',
    ],
    repairProcess: [
      'We inspect the charging port under magnification for debris, corrosion, or pin damage',
      'Ultrasonic cleaning removes lint compaction and oxidation from the USB-C connector',
      'If the port is damaged beyond cleaning, the charging port flex is replaced at component level',
      'Fast charge, data sync, and cable compatibility are tested with multiple cables',
      'Wireless charging functionality is verified before the device is returned',
    ],
    whyChooseUs: `Samsung "moisture detected" errors are often triggered by lint in the port rather than actual moisture — we clean first before recommending a replacement. When replacement is needed, we swap the charging port flex assembly with a matched component for your Galaxy model.`,
  },
  camera: {
    intro: `Samsung Galaxy cameras feature multi-lens systems with up to 200MP sensors, 100x Space Zoom, and advanced video stabilisation on flagship models. Camera faults — from impact cracking the lens array to moisture affecting the sensor — noticeably degrade photo and video quality. At iTech Repairs in Melbourne, we replace Samsung camera modules using matched assemblies that preserve zoom range, autofocus performance, and video stabilisation for your specific model.`,
    commonProblems: [
      'Blurry photos that don\'t clear up on any camera lens',
      'Camera app crashing or freezing on launch',
      'Cracked camera lens cover causing spots, flare, or blur in photos',
      'Specific zoom level not working (e.g. 10x zoom lens producing dark images)',
      'Video stabilisation not functioning after a drop',
    ],
    repairProcess: [
      'We test all camera lenses and zoom levels, flash, and video stabilisation functions',
      'The cracked lens cover or faulty camera module is identified and targeted for replacement',
      'A matched camera assembly for your Samsung model is installed',
      'All camera functions are retested across all lenses, zoom levels, and video modes',
      'Front camera performance is confirmed before the device is returned',
    ],
    whyChooseUs: `Samsung camera systems span multiple physical modules — replacing the wrong module wastes money. We accurately diagnose which camera component has failed and replace only what is needed. Most Samsung camera repairs are completed same day at our Melbourne store.`,
  },
  audio: {
    intro: `Samsung Galaxy devices include stereo speakers, call earpieces, and multiple microphones for video and voice. Audio failures — muffled speakers, crackly earpiece output, or microphone drop-outs — significantly impact call quality and media experience. At iTech Repairs in Melbourne, we diagnose Samsung audio faults accurately and replace the affected speaker, earpiece, or microphone assembly.`,
    commonProblems: [
      'No sound from one or both speakers during media playback',
      'Earpiece producing muffled or distorted audio during phone calls',
      'Microphone not picking up voice during calls or video recordings',
      'Audio cutting in and out intermittently when using Bluetooth or speakerphone',
      'Speaker grille sounding blocked or rattling during louder audio',
    ],
    repairProcess: [
      'We run a full audio diagnostic testing speakers, earpiece, and all microphones',
      'The faulty audio component is confirmed before any disassembly',
      'The replacement speaker, earpiece, or microphone is installed with correct seating',
      'Audio output and microphone capture quality are tested across call and recording modes',
      'Volume range and sound balance are confirmed before the device is returned',
    ],
    whyChooseUs: `Samsung audio faults can mimic each other — we diagnose accurately rather than replacing parts by assumption. Most Samsung audio component repairs are completed on the spot in 15–20 minutes at our Braybrook store.`,
  },
  back: {
    intro: `Samsung Galaxy rear glass replacement is required when the back panel cracks, which is common on glass-backed flagship models. The rear glass on Samsung Galaxy devices is adhered with strong bonding adhesive and requires precision heating and separation tools to remove without damaging the wireless charging coil or NFC antenna beneath. At iTech Repairs in Melbourne, we replace Samsung rear glass panels and reapply sealing adhesive to restore wireless charging and water resistance.`,
    commonProblems: [
      'Cracked or shattered rear glass panel after a drop',
      'Back glass lifting or separating at the edges',
      'Wireless charging becoming unreliable after rear glass impact',
      'NFC payment not working after the rear panel was damaged',
      'Sharp rear glass edges making the device uncomfortable to hold',
    ],
    repairProcess: [
      'We assess the rear glass damage and inspect for any internal impact transmitted through the back',
      'Precision heating tools soften the bonding adhesive around the rear glass perimeter',
      'The cracked panel is carefully removed without disturbing the wireless charging coil or NFC antenna',
      'A matched replacement rear glass for your Samsung model is fitted with fresh adhesive',
      'Wireless charging and NFC functionality are verified before the device is returned',
    ],
    whyChooseUs: `Samsung rear glass is bonded with industrial-strength adhesive that requires controlled heat and the correct separation tools — forcing the panel causes internal damage. Our technicians have the equipment and experience to remove Samsung rear glass cleanly across all current Galaxy models.`,
  },
  water: {
    intro: `Samsung Galaxy devices carry IP67 or IP68 water resistance ratings, but these degrade over time as seals age and may not protect against pressure at depth. When liquid ingress occurs, mineral deposits corrode the logic board components rapidly. At iTech Repairs in Melbourne, we treat Samsung water damage with commercial ultrasonic cleaning equipment and microsoldering repair capability for component-level board recovery.`,
    commonProblems: [
      'Samsung not turning on after being submerged or exposed to rain',
      'Intermittent shutdowns or reboots appearing after liquid exposure',
      'Touchscreen becoming unresponsive or registering ghost touches after water contact',
      'Speaker or microphone sounding muffled after liquid exposure',
      'Charging port showing corrosion or moisture warnings after water damage',
    ],
    repairProcess: [
      'The device is opened immediately to remove residual liquid before corrosion advances',
      'The logic board and affected components are placed in the ultrasonic cleaner',
      'Corrosion is treated with flux and microsoldering tools where component damage is found',
      'The device is precision-dried and reassembled for a full functional test',
      'We provide an honest outcome — no fix, no fee applies to all water damage assessments',
    ],
    whyChooseUs: `Samsung IP ratings do not guarantee survival in all water exposure scenarios, and corrosion begins within minutes of ingress. Bring your Galaxy in immediately for the best recovery outcome. Our ultrasonic cleaning and microsoldering capability gives water-damaged Samsung devices the best possible chance of full recovery.`,
  },
  general: {
    intro: `Samsung Galaxy devices are precision-engineered smartphones and tablets that require specialist knowledge and matched components for reliable repair. At iTech Repairs in Melbourne, our technicians are experienced across the full Samsung Galaxy range — from budget A-series to flagship S Ultra and Z Fold models — and carry parts for the most current and popular models. Most common Samsung repairs are completed in 15 minutes on the spot.`,
    commonProblems: [
      'Physical damage from drops or impacts affecting device function',
      'Component failure causing intermittent or consistent faults',
      'Software and hardware conflicts showing as error messages or crashes',
      'Degraded performance from ageing components',
      'Cosmetic damage affecting resale value or usability',
    ],
    repairProcess: [
      'We perform a free diagnostic to identify the exact fault and affected components',
      'The correct matched replacement component for your Samsung model is sourced',
      'Our technicians perform the repair using model-specific tools and procedures',
      'Full function testing covers all related device features after the repair',
      'Your device is returned with the repair covered by our lifetime warranty',
    ],
    whyChooseUs: `iTech Repairs carries stock for popular Samsung Galaxy models and can source parts for most other models within 1–2 business days. Walk in any day for a free diagnostic — open 7 days 9am–9pm at our Braybrook store.`,
  },
}

const MACBOOK_CONTENT: ContentMatrix = {
  screen: {
    intro: `MacBook screens use Retina and Liquid Retina XDR display technology with True Tone, P3 wide colour, and on newer models, ProMotion 120Hz refresh. MacBook display failures include the notorious Flexgate cable fault on 2016–2019 MacBook Pro models, where a short display cable causes a stage-light backlight pattern then total screen failure. At iTech Repairs in Melbourne, we diagnose MacBook display failures accurately — replacing only the failed component whether that's the cable, backlight, or full display assembly.`,
    commonProblems: [
      'Stage-light or anti-light pattern appearing at the bottom of the screen when opened past 40°',
      'Screen flickering, especially when the lid angle is adjusted',
      'Black screen with the MacBook still running (keyboard backlight and fan still on)',
      'Backlight visible but no image on the display',
      'Cracked or physically damaged Retina display panel',
    ],
    repairProcess: [
      'We run Apple Diagnostics and a display cable flex test to identify the exact failure point',
      'For Flexgate faults, the backlight cable is replaced or extended without requiring a full screen assembly',
      'For panel failures, the Retina display is replaced with a matched assembly for your MacBook model',
      'True Tone calibration data is preserved or restored using the display EEPROM where applicable',
      'Brightness, colour accuracy, and hinge tension are all verified before return',
    ],
    whyChooseUs: `Many MacBook screen failures are caused by the display flex cable rather than the panel itself — the Flexgate fix costs significantly less than a full display replacement. We diagnose accurately to quote only the repair that's actually needed. Our technicians carry MacBook-specific parts including flex cables for the 2016–2019 generation.`,
  },
  battery: {
    intro: `MacBook batteries are lithium-polymer cells that are either removable (older models) or adhered into the lower case with industrial adhesive on modern unibody designs. Battery degradation causes reduced runtime, unexpected shutdowns, and on older models, swelling that warps the trackpad or lifts the bottom case. At iTech Repairs in Melbourne, we replace MacBook batteries with matched capacity cells and recalibrate the battery controller for accurate health reporting in macOS.`,
    commonProblems: [
      'MacBook shutting down unexpectedly before the battery reads empty',
      'Battery health showing "Service Recommended" or "Replace Now" in macOS',
      'Swollen battery causing trackpad to click poorly or bottom case to bow outward',
      'MacBook running for under 2 hours on a full charge',
      'MacBook only running when connected to power and turning off when unplugged',
    ],
    repairProcess: [
      'We run Battery Health diagnostics in macOS and Apple Service Toolkit to confirm degradation',
      'The lower case is removed and adhesive battery strips are carefully released',
      'A matched replacement battery for your MacBook model is installed with correct seating',
      'Battery cycle count is verified and the SMC is reset for accurate capacity reporting',
      'Runtime is tested and battery health is confirmed before the MacBook is returned',
    ],
    whyChooseUs: `Modern MacBook batteries are adhered into the chassis — incorrect removal techniques cause the swollen cells to puncture, which is a fire risk. Our technicians use the correct battery removal tools and procedures for each MacBook generation. Most MacBook battery replacements are completed same day.`,
  },
  keyboard: {
    intro: `MacBook keyboard failures became widespread on the 2016–2019 butterfly mechanism generation, where dust ingress causes keys to double-register, stick, or stop responding entirely. Later MacBook models returned to a scissor-switch mechanism with improved reliability. At iTech Repairs in Melbourne, we replace MacBook keyboard assemblies — which on modern models requires full top case replacement — and verify every key and the Touch Bar before returning your MacBook.`,
    commonProblems: [
      'Keys repeating characters or double-typing when pressed once',
      'Specific keys not registering at all despite feeling like they click',
      'Sticky or stiff keys that require excessive force to actuate',
      'Backlight not illuminating evenly across all keys',
      'Touch Bar not responding or showing incorrect functions',
    ],
    repairProcess: [
      'We test every key using a keystroke logger and verify Touch Bar functionality',
      'For butterfly mechanism Macs, the top case assembly including keyboard is replaced',
      'For scissor-switch models, individual key caps or the full keyboard deck is replaced as required',
      'Every key actuation, travel, and backlight zone is tested post-installation',
      'Touch Bar and Touch ID functionality are confirmed before the MacBook is returned',
    ],
    whyChooseUs: `MacBook keyboard replacement often requires full top case disassembly on modern models — we have the tooling and Apple-aligned procedures for each MacBook generation. We stock top case assemblies for the most common affected butterfly keyboard MacBook models for same-day turnaround.`,
  },
  trackpad: {
    intro: `MacBook trackpads use Force Touch technology with haptic feedback simulating a physical click through vibration. Trackpad failures — including unresponsive touch zones, Force Touch not working, or erratic cursor behaviour — are often caused by a swollen battery pushing on the trackpad from below, liquid damage, or a failed haptic module. At iTech Repairs in Melbourne, we diagnose MacBook trackpad faults and perform targeted replacement of the trackpad assembly or battery as required.`,
    commonProblems: [
      'MacBook trackpad not clicking or clicking feeling stiff and different to normal',
      'Cursor jumping or moving erratically without being touched',
      'Force Touch not registering different pressure levels',
      'Trackpad surface feeling raised, bowed, or uneven due to battery swelling',
      'Specific zones of the trackpad not responding to touch',
    ],
    repairProcess: [
      'We inspect the trackpad and check for battery swelling beneath the trackpad assembly',
      'If battery swelling is the cause, the battery is replaced first to restore trackpad alignment',
      'If the trackpad itself has failed, the Force Touch assembly is replaced with a matched unit',
      'Haptic feedback calibration and Force Touch pressure sensitivity are verified',
      'Full cursor movement, click, and gesture function tests confirm the repair',
    ],
    whyChooseUs: `MacBook trackpad faults are frequently caused by battery swelling rather than the trackpad itself — we always check the battery first before recommending a trackpad replacement. Diagnosing the root cause correctly saves you money and prevents repeat faults.`,
  },
  water: {
    intro: `MacBook water damage is a serious fault because the logic board and keyboard are directly exposed when liquid enters through the keyboard. Coffee, tea, and water spills are the most common causes and the damage can be rapid if the MacBook is not powered off and brought in immediately. At iTech Repairs in Melbourne, we perform MacBook logic board cleaning using ultrasonic equipment and microsoldering for component-level repair of water-damaged MacBook logic boards.`,
    commonProblems: [
      'MacBook not turning on after a liquid spill onto the keyboard',
      'MacBook turning on but showing no image on the display after a spill',
      'Keyboard keys not working or registering incorrect characters after liquid exposure',
      'MacBook running but with no audio, no charging, or no Wi-Fi after liquid exposure',
      'Intermittent random shutdowns or kernel panics after liquid exposure',
    ],
    repairProcess: [
      'The MacBook is opened immediately and any residual liquid is absorbed before it advances further',
      'The logic board is removed and placed in the ultrasonic cleaner to remove mineral deposits',
      'Microsoldering tools address corroded traces, failed capacitors, and component shorts',
      'The logic board is dried, reassembled, and tested for full functionality',
      'We provide an honest outcome — if the board cannot be recovered, there is no charge',
    ],
    whyChooseUs: `MacBook liquid spills deteriorate quickly — the faster you bring it in, the better the recovery rate. Do not turn the MacBook on after a spill. Our microsoldering technicians have recovered MacBooks that were written off by other repairers. No fix, no fee on all MacBook water damage assessments.`,
  },
  general: {
    intro: `MacBook repairs require precision tooling, model-specific components, and experience with both Intel and Apple Silicon architectures. At iTech Repairs in Melbourne, our technicians service the full MacBook range — MacBook Air, MacBook Pro, and older MacBook models — across all recent generations. We carry parts for common repairs and can source specialist components for most MacBook models.`,
    commonProblems: [
      'Performance degradation or unusual slowdowns',
      'Hardware component failure causing persistent error messages',
      'Physical damage from drops or liquid exposure',
      'Display, keyboard, or trackpad faults reducing usability',
      'Charging problems or battery health issues',
    ],
    repairProcess: [
      'We run Apple Diagnostics and a professional service toolkit assessment to identify the fault',
      'The correct replacement component is sourced for your specific MacBook model and year',
      'Our technicians perform the repair with MacBook-specific tools and ESD precautions',
      'Full post-repair testing covers all system functions relevant to the repair',
      'Your MacBook is returned with the repair covered by our lifetime warranty',
    ],
    whyChooseUs: `MacBook repairs require the right tools and knowledge — most common faults including screen, battery, keyboard, and trackpad issues are resolved same day or next business day at our Braybrook store. Walk in for a free diagnostic assessment.`,
  },
}

const IPAD_CONTENT: ContentMatrix = {
  screen: {
    intro: `iPad screens use Liquid Crystal Display or ProMotion OLED technology depending on the model, with True Tone and P3 wide colour support across the Pro range. A cracked iPad screen significantly impacts Apple Pencil accuracy, touch responsiveness, and ProMotion refresh rate performance on Pro models. At iTech Repairs in Melbourne, we replace iPad display assemblies with matched panels that preserve True Tone calibration, ProMotion refresh, and Apple Pencil pressure sensitivity.`,
    commonProblems: [
      'Cracked or shattered iPad front glass from a drop or impact',
      'Touch not registering accurately or Apple Pencil missing strokes after screen damage',
      'Black display with the iPad still responding to button presses',
      'Flickering or lines appearing across the screen after impact',
      'Dead zones in the touch layer making parts of the screen unresponsive',
    ],
    repairProcess: [
      'We test touch accuracy, Apple Pencil responsiveness, and ProMotion refresh before opening the device',
      'The iPad display assembly is carefully separated using precision heating tools',
      'A matched replacement display for your specific iPad model is installed',
      'True Tone calibration, touch accuracy, and Apple Pencil sensitivity are verified',
      'The sealed iPad is returned with full function confirmation and lifetime warranty',
    ],
    whyChooseUs: `iPad screen repair is more complex than phone screens due to the larger display and the precision required for Apple Pencil calibration on Pro models. Our technicians carry matched display assemblies for the most popular iPad models and verify Apple Pencil compatibility after every screen repair.`,
  },
  battery: {
    intro: `iPad batteries are large-capacity lithium-polymer cells — ranging from around 7,600mAh in iPad mini to over 10,000mAh in iPad Pro models — that are adhered into the chassis. Battery degradation on iPads causes reduced session length, unexpected shutdowns, and on older models, swelling that bows the rear panel. At iTech Repairs in Melbourne, we replace iPad batteries with matched capacity cells and verify charge performance after installation.`,
    commonProblems: [
      'iPad not holding charge for more than a couple of hours during normal use',
      'Unexpected shutdowns before the battery indicator reaches zero',
      'iPad only working when plugged in and turning off immediately when unplugged',
      'Swollen battery causing the screen to bulge or lift slightly from the frame',
      'Battery percentage jumping or draining rapidly during active use',
    ],
    repairProcess: [
      'We confirm battery degradation using iPad diagnostic tools and current draw testing',
      'The iPad display is carefully removed to access the adhered battery beneath',
      'A matched replacement battery for your iPad model is installed with correct adhesive',
      'Charge cycle performance and battery health indicators are verified post-installation',
      'The iPad is sealed and returned with battery performance confirmed under our lifetime warranty',
    ],
    whyChooseUs: `iPad battery replacement requires full display removal on most models — incorrect technique risks damage to the digitiser flex cables. Our technicians follow iPad model-specific procedures and source batteries matched to each model's original capacity specification.`,
  },
  charging: {
    intro: `iPad devices use Lightning or USB-C charging depending on the model, and the larger battery capacity means charging port health is critical for reliable daily use. A faulty iPad charging port can prevent the device from charging entirely or cause slow, intermittent charging that makes the iPad impractical for work or education use. At iTech Repairs in Melbourne, we clean and replace iPad charging ports at component level for most models.`,
    commonProblems: [
      'iPad not charging or only charging when the cable is held at a specific angle',
      'USB-C cable fitting loosely in the port',
      'Very slow charging speed even with a high-wattage adapter',
      'iPad charging intermittently and pausing repeatedly',
      'Charging port visibly blocked with lint or debris',
    ],
    repairProcess: [
      'We inspect the charging port under magnification for debris and pin damage',
      'Ultrasonic cleaning removes lint and oxidation from the connector cavity',
      'If damage is beyond cleaning, the charging port assembly is replaced',
      'Multi-wattage charging and data sync tests verify the repair',
      'USB-C hub and accessory compatibility is tested where applicable',
    ],
    whyChooseUs: `iPad charging ports are frequently clogged with lint from bags and cases — we clean first before recommending replacement. When replacement is needed, we source matched connector assemblies for each iPad model.`,
  },
  camera: {
    intro: `iPad cameras range from basic single-lens setups on entry-level models to the dual-lens wide and ultrawide systems on iPad Pro. A faulty iPad camera impacts video calls, document scanning, and Creative workflows on Pro models. At iTech Repairs in Melbourne, we replace iPad camera modules with matched assemblies to restore all camera functions including ultrawide, Smart HDR, and Centre Stage.`,
    commonProblems: [
      'Blurry photos or video that doesn\'t clear up regardless of lighting',
      'Camera app freezing or showing a black screen on launch',
      'Cracked rear camera glass causing visible damage in photos',
      'Front-facing camera producing distorted or dark video during FaceTime calls',
      'Centre Stage tracking not working correctly',
    ],
    repairProcess: [
      'We test all camera functions — photo, video, autofocus, and front camera',
      'The faulty camera module is identified and removed without disturbing surrounding components',
      'A matched replacement camera for your iPad model is installed',
      'All camera modes including ultrawide, Smart HDR, and Centre Stage are verified',
      'Front camera and microphone quality for video calls are confirmed before return',
    ],
    whyChooseUs: `iPad cameras are integrated with Apple's ISP and Centre Stage algorithm — using mismatched modules degrades performance. We source matched camera assemblies for each iPad model and verify all software-integrated functions after every repair.`,
  },
  water: {
    intro: `iPads do not carry official IP water resistance ratings on most models, making liquid ingress a significant risk from spills, rain, or accidental submersion. Water damage on iPads can affect the display, charging port, logic board, and speakers. At iTech Repairs in Melbourne, we treat iPad water damage with ultrasonic board cleaning and component-level microsoldering repair.`,
    commonProblems: [
      'iPad not turning on after liquid exposure',
      'Touchscreen becoming unresponsive after liquid contact',
      'Speaker producing distorted audio after getting wet',
      'iPad charging intermittently or not charging after water exposure',
      'Logic board fault causing intermittent shutdowns after a liquid incident',
    ],
    repairProcess: [
      'The iPad is opened immediately and any liquid is absorbed before further corrosion',
      'The logic board and affected components are cleaned in the ultrasonic bath',
      'Corroded components are treated with microsoldering tools where required',
      'The device is dried and reassembled for a full functional test',
      'We provide an honest assessment — no fix, no fee applies',
    ],
    whyChooseUs: `iPad water damage recovery depends heavily on response speed — bring your device in immediately rather than waiting to see if it dries out on its own. Our team has the equipment and experience to give your iPad the best possible recovery outcome.`,
  },
  general: {
    intro: `iPad repairs require large-format precision tooling and matched components across Apple's diverse iPad lineup — from iPad mini to iPad Pro. At iTech Repairs in Melbourne, our technicians service all iPad generations and carry parts for the most popular current models. Most iPad repairs including screen, battery, and charging port faults are completed same day.`,
    commonProblems: [
      'Physical damage from drops affecting the screen or frame',
      'Battery degradation causing short runtimes or unexpected shutdowns',
      'Charging port faults preventing reliable daily charging',
      'Camera faults affecting video calls and document scanning',
      'Software and hardware faults causing crashes or loss of function',
    ],
    repairProcess: [
      'We perform a free diagnostic to identify the exact fault and components affected',
      'The correct matched replacement part for your iPad model is confirmed',
      'Our technicians perform the repair using iPad-specific tooling and procedures',
      'Full functional testing covers all device features relevant to the repair',
      'Your iPad is returned with the repair covered by our lifetime warranty',
    ],
    whyChooseUs: `iTech Repairs carries parts for popular iPad models and can source components for most other models within 1–2 business days. Free diagnostic assessments are available any day — walk in to our Braybrook store, open 7 days 9am–9pm.`,
  },
}

const PIXEL_CONTENT: ContentMatrix = {
  screen: {
    intro: `Google Pixel screens use OLED and LTPO OLED display technology across the range, delivering accurate colours that the Pixel's computational photography pipeline is calibrated against. A cracked or failing Pixel screen affects photo preview accuracy, fingerprint sensor performance on under-display models, and Face Unlock on newer Pixel generations. At iTech Repairs in Melbourne, we replace Google Pixel screens with matched OLED assemblies to preserve the Pixel's camera accuracy, sensor integrations, and Android update compatibility.`,
    commonProblems: [
      'Cracked front glass from a drop, particularly on the curved Pixel Pro edges',
      'OLED burn-in showing ghost images from the navigation bar or status icons',
      'Under-display fingerprint sensor not recognising registered fingerprints after screen damage',
      'Green tint, lines, or flickering on the OLED panel after impact',
      'Touch sensitivity reduced or unresponsive in areas of the screen',
    ],
    repairProcess: [
      'We run a full display diagnostic including OLED uniformity, touch calibration, and fingerprint sensor tests',
      'The Pixel display assembly is carefully separated using precision heating tools',
      'A matched OLED panel for your specific Pixel model is installed',
      'Fingerprint sensor, Face Unlock, and touch accuracy are all verified post-installation',
      'The device is returned with full function confirmation and lifetime warranty',
    ],
    whyChooseUs: `Google Pixel under-display fingerprint sensors are calibrated to the specific OLED panel — using mismatched screens degrades fingerprint accuracy. We source matched OLED assemblies for each Pixel model and verify all sensor integrations after every screen repair.`,
  },
  battery: {
    intro: `Google Pixel batteries are lithium-polymer cells integrated into the chassis, and battery health degrades over time affecting the all-day use that Pixel is known for. The Pixel's Adaptive Battery feature uses AI to prioritise battery allocation, but this cannot compensate for a physically degraded cell. At iTech Repairs in Melbourne, we replace Pixel batteries with matched capacity cells and verify battery health reporting in Android System settings post-installation.`,
    commonProblems: [
      'Pixel battery draining to empty within a few hours of moderate use',
      'Unexpected device shutdowns before battery reaches 20%',
      'Adaptive Battery not extending battery life as it previously did',
      'Device only running when plugged in',
      'Battery health percentage declining rapidly in Android battery settings',
    ],
    repairProcess: [
      'We confirm battery degradation using Android battery stats and current draw testing',
      'The Pixel rear panel or display is removed to access the battery, depending on the model',
      'A matched replacement battery for your Pixel model is installed',
      'Post-installation charge cycle verifies the replacement battery reports correctly in Android',
      'Adaptive Battery and battery health indicators are verified before the device is returned',
    ],
    whyChooseUs: `Pixel battery replacement complexity varies by generation — we follow Pixel-specific disassembly procedures and source batteries matched to each model's capacity specification. Most Pixel battery replacements are completed in 15–20 minutes on the spot.`,
  },
  camera: {
    intro: `Google Pixel cameras are among the most sophisticated on any smartphone, powered by Google's Tensor chip and computational photography algorithms. Camera faults — whether from physical damage to the camera bar or component failure — degrade photo and video quality in ways that cannot be software-corrected. At iTech Repairs in Melbourne, we replace Google Pixel camera modules with matched assemblies that maintain the Tensor chip's camera integration and software compatibility.`,
    commonProblems: [
      'Blurry photos that Google\'s computational sharpening cannot correct',
      'Camera bar cracked or camera glass visibly chipped causing lens flare',
      'Camera app crashing or failing to launch on any camera mode',
      'Night Sight or astrophotography mode producing worse results than before damage',
      'Video stabilisation not working correctly after impact',
    ],
    repairProcess: [
      'We test all camera functions across all lenses, Night Sight, and video stabilisation',
      'The faulty camera module or cracked camera glass is identified for targeted replacement',
      'A matched camera assembly for your Pixel model is installed',
      'Computational photography functions, Night Sight, and video mode are retested',
      'Front camera and Face Unlock performance are confirmed before the device is returned',
    ],
    whyChooseUs: `Google Pixel cameras are deeply integrated with the Tensor chip\'s ISP — camera module replacements must match the original assembly to preserve Night Sight, Astrophotography, and Video Boost capabilities. We source matched modules and verify all Tensor-powered camera functions post-repair.`,
  },
  charging: {
    intro: `Google Pixel devices use USB-C charging with support for fast wired charging and wireless charging on most models. Charging port faults reduce the practicality of a Pixel for daily use and can affect data transfer to and from Google Photos local backups. At iTech Repairs in Melbourne, we clean and replace Pixel charging ports for most models.`,
    commonProblems: [
      'Pixel not charging or only charging at certain cable angles',
      'USB-C port fitting loosely or cable falling out',
      'Wireless charging working but wired charging failing',
      'Slow charging despite using the correct Pixel fast-charge adapter',
      'No data transfer when connecting to a computer',
    ],
    repairProcess: [
      'We inspect the charging port for debris, bent pins, and corrosion',
      'Ultrasonic cleaning removes lint and oxidation from the USB-C cavity',
      'If the port is damaged, the charging port flex is replaced at component level',
      'Fast charge, data sync, and cable compatibility are verified across multiple cables',
      'Wireless charging is tested before the device is returned',
    ],
    whyChooseUs: `Pixel charging port faults are frequently caused by lint from pockets and cases — we clean before recommending replacement. Walk in any day for a free charging port assessment at our Braybrook store.`,
  },
  water: {
    intro: `Google Pixel devices carry IP67 or IP68 water resistance ratings, but seals degrade with age and physical damage can compromise water resistance before the rated depth. Liquid ingress on Pixel devices can affect the logic board, display, and charging system. At iTech Repairs in Melbourne, we perform Pixel water damage recovery using ultrasonic cleaning and microsoldering board-level repair.`,
    commonProblems: [
      'Pixel not turning on after liquid exposure',
      'OLED display showing colour distortion after water contact',
      'Fingerprint sensor or Face Unlock failing after liquid exposure',
      'Charging not working after the device was submerged',
      'Intermittent reboots or software crashes after water damage',
    ],
    repairProcess: [
      'The device is opened immediately to absorb residual liquid before corrosion advances',
      'The logic board is cleaned in the ultrasonic bath to remove mineral deposits',
      'Microsoldering tools address corroded components and broken traces',
      'The device is reassembled and tested for full functionality',
      'No fix, no fee applies — we only charge if your Pixel is recovered',
    ],
    whyChooseUs: `Pixel water damage recovery is time-sensitive — the faster you bring your device in, the better the outcome. Our team has ultrasonic cleaning and microsoldering capability to give your Pixel the best possible recovery chance.`,
  },
  general: {
    intro: `Google Pixel repairs require matched components and knowledge of the Tensor chip platform to maintain the device's deep software-hardware integration. At iTech Repairs in Melbourne, our technicians service all Pixel generations and can source parts for most current models. Walk in any day for a free Pixel diagnostic.`,
    commonProblems: [
      'Physical damage from drops affecting display or camera bar',
      'Battery degradation reducing all-day usage',
      'Charging faults preventing reliable daily charging',
      'Camera module damage degrading computational photography quality',
      'Water damage or software faults causing loss of function',
    ],
    repairProcess: [
      'We perform a free diagnostic to identify the fault and affected components',
      'The correct matched replacement for your Pixel model is confirmed',
      'Our technicians perform the repair using Pixel-specific tools and procedures',
      'Full function testing covers all Tensor-integrated features',
      'Your Pixel is returned with the repair covered by our lifetime warranty',
    ],
    whyChooseUs: `Google Pixel repairs require matched components to maintain the Tensor chip integrations for camera, security, and Android update compatibility. iTech Repairs sources matched Pixel components and verifies all software integrations after every repair.`,
  },
}

const CONTENT_MAP: Record<DeviceCategory, ContentMatrix> = {
  iphone: IPHONE_CONTENT,
  samsung: SAMSUNG_CONTENT,
  macbook: MACBOOK_CONTENT,
  ipad: IPAD_CONTENT,
  pixel: PIXEL_CONTENT,
}

const FALLBACK_CONTENT: DeviceRepairContent = {
  intro: `Our technicians at iTech Repairs in Melbourne are experienced across all major device brands and repair types. We carry parts for the most popular models and can source specialist components within 1–2 business days. Every repair is performed with precision tooling, covered by our lifetime warranty on parts and labour, and completed as quickly as possible — most common repairs in 15 minutes on the spot at our Braybrook store.`,
  commonProblems: [
    'Physical damage from drops or impacts affecting device function',
    'Component failure causing intermittent or persistent faults',
    'Degraded performance from ageing hardware components',
    'Liquid exposure causing corrosion or short circuits',
    'Connectivity faults affecting Wi-Fi, Bluetooth, or cellular',
  ],
  repairProcess: [
    'We perform a free diagnostic to accurately identify the fault and affected components',
    'The correct matched replacement component is confirmed before any work begins',
    'Our technicians perform the repair using correct tooling and procedures for your device',
    'Full functional testing covers all device features relevant to the repair performed',
    'Your device is returned with the repair covered by our lifetime warranty',
  ],
  whyChooseUs: `iTech Repairs provides professional device repair services in Melbourne with a commitment to the cheapest price guaranteed, lifetime warranty on every repair, and on-the-spot 15-minute turnaround for most common faults. Walk in any day — open 7 days 9am–9pm at our Braybrook and Spotswood stores.`,
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Returns device+repair specific content for a RepairPage.
 * Falls back through: brand+repairCategory → brand+general → universal fallback
 */
export function getDeviceRepairContent(
  brand: DeviceCategory,
  repairSlug: string,
): DeviceRepairContent {
  const matrix = CONTENT_MAP[brand]
  if (!matrix) return FALLBACK_CONTENT

  const category = getRepairCategory(repairSlug)
  return matrix[category] ?? matrix['general'] ?? FALLBACK_CONTENT
}
