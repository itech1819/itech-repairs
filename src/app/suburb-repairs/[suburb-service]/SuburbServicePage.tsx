import Link from 'next/link'
import type { SuburbServicePage } from '@/data/suburbServicePages'
import { business } from '@/data/business'

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface Props {
  page: SuburbServicePage
}

// ---------------------------------------------------------------------------
// Content helpers — unique copy per device+service combination
// ---------------------------------------------------------------------------

function getCommonIssues(deviceSlug: string, serviceSlug: string): string[] {
  const key = `${deviceSlug}:${serviceSlug}`

  const map: Record<string, string[]> = {
    'iphone:screen-repair': [
      'Cracked or shattered front glass making the display unusable',
      'OLED touch layer not registering swipes or taps accurately',
      'Face ID failing to function correctly after a drop',
      'Dead pixels, dark patches, or colour distortion across the panel',
      'Screen flickering or going completely black at random intervals',
    ],
    'iphone:battery-replacement': [
      'Battery draining from 100% to zero within a few hours of light use',
      'Unexpected shutdowns — phone powers off even when battery shows charge',
      'iPhone stuck at the 20% warning and refusing to charge past that point',
      'iOS throttling processor speed due to worn battery capacity',
      'Visibly swollen battery causing the screen to separate from the frame',
    ],
    'iphone:charging-port-repair': [
      'Lightning or USB-C cable fitting loosely and losing connection',
      'iPhone not charging at all despite trying multiple cables',
      'Charging only working at specific angles — a sign of debris or damage',
      'Data sync no longer recognised by a computer when plugged in',
      'Visible lint or corrosion blocking the charging contacts',
    ],
    'iphone:repair': [
      'Physical damage from a drop — cracked screen, broken buttons, or bent frame',
      'Water or liquid ingress affecting the logic board or display',
      'Microphone or speaker failure causing muffled calls',
      'Camera module producing blurry or black images',
      'Software and boot-loop issues preventing normal startup',
    ],
    'samsung:screen-repair': [
      'AMOLED vertical or horizontal lines appearing across the display',
      'Curved edge glass shattered from a corner drop',
      'Ghost touch — screen registering phantom taps with no input',
      'S Pen digitiser accuracy lost after glass damage (Galaxy Note / S Ultra)',
      'Screen burn-in leaving ghost images from a static display element',
    ],
    'samsung:battery-replacement': [
      'Battery life declining rapidly — barely lasting half a day',
      'Samsung Galaxy shutting down unexpectedly at 20–30% remaining',
      'Slow charging even on a fast-charge adaptor indicating battery wear',
      'Phone running warm and battery swelling against the rear panel',
      'Battery health report in Device Care showing critical degradation',
    ],
    'samsung:repair': [
      'Shattered display or unresponsive touch layer after a drop',
      'Charging port not holding the cable or failing to charge',
      'Rear camera producing blurry, streaked, or black images',
      'Water damage from submersion beyond the IP rating',
      'Boot-loop or soft-brick after a failed software update',
    ],
    'macbook:screen-repair': [
      'Flexgate stage-light effect — bright band at the bottom of the display',
      'Screen flickering or strobing when the lid is at certain angles',
      'Completely black or blank display despite the MacBook being powered on',
      'Cracked Retina panel after pressure on the lid or a drop',
      'Backlight strips failing, leaving the screen very dim or unlit',
    ],
    'macbook:repair': [
      'Keyboard keys sticking, not registering, or repeating characters',
      'MacBook not booting past the Apple logo — spinning wheel on startup',
      'Liquid damage — coffee or water spill on the keyboard',
      'Trackpad clicking or scrolling erratically',
      'USB-C or MagSafe port not charging or detecting accessories',
    ],
    'ipad:screen-repair': [
      'Cracked touch glass making it impossible to interact with the display',
      'Apple Pencil accuracy noticeably off after screen damage',
      'Dead zones where the screen does not respond to touch at all',
      'LCD bleed or dark patches spreading from the point of impact',
      'Screen separating from the frame after a heavy drop',
    ],
    'ipad:repair': [
      'Cracked or shattered screen preventing normal use',
      'Battery failing to hold a charge for a full day of use',
      'Charging port bent or damaged from repeated connector insertions',
      'Front or rear camera producing distorted or completely black images',
      'Speaker grille blocked or damaged, muffling audio output',
    ],
    'google-pixel:screen-repair': [
      'Cracked Gorilla Glass from a drop on concrete or pavement',
      'Touch layer unresponsive in sections of the display',
      'OLED burn-in leaving permanent ghost images from the navigation bar',
      'Under-display fingerprint sensor failing to unlock after screen damage',
      'Green tint or colour shift appearing across part of the Pixel display',
    ],
    'google-pixel:repair': [
      'Screen cracked or display completely dark after a drop',
      'Battery draining quickly or device shutting down unexpectedly',
      'Charging failing — USB-C port bent, corroded, or debris-blocked',
      'Camera glass cracked, leaving the sensor exposed and prone to flare',
      'Overheating during normal use pointing to thermal or battery faults',
    ],
  }

  return (
    map[key] ?? [
      'Physical damage from a drop affecting the device externally or internally',
      'Component failure causing intermittent or total loss of function',
      'Liquid or moisture damage to sensitive internal electronics',
      'Connectivity issues — Wi-Fi, Bluetooth, or cellular signal problems',
      'Performance degradation — freezing, crashing, or slow response',
    ]
  )
}

function getIntroParagraphs(page: SuburbServicePage): [string, string] {
  const { device, service, suburb, serviceSlug } = page

  const isGeneral = serviceSlug === 'repair'

  if (isGeneral) {
    return [
      `If you are looking for reliable ${device} repair near ${suburb}, you are closer than you think. iTech Repairs is based in Braybrook — just a short drive from ${suburb} — and our team handles everything from cracked screens and battery replacements to water damage and charging port faults. We stock parts for all current ${device} models and can diagnose most faults on the spot.`,
      `Every ${device} repair at iTech Repairs comes with our cheapest price guarantee and a lifetime warranty on parts and labour. There is no need to book ahead — walk in any day between 9am and 9pm and our technician will assess your device for free. Most repairs are completed in around 15 minutes while you wait, so customers from ${suburb} are rarely without their device for long.`,
    ]
  }

  return [
    `Residents of ${suburb} in need of ${device} ${service} have a fast, affordable option nearby. iTech Repairs operates from our Braybrook store — a quick trip from ${suburb} — and we carry quality replacement parts for all popular ${device} models. Our technicians complete most ${service.toLowerCase()} jobs on the spot while you wait, with no appointment required.`,
    `What sets iTech Repairs apart is our commitment to the cheapest price in Melbourne, backed by a lifetime warranty on every repair. If you find a cheaper price locally, we will match it — no questions asked. Walk in any time between 9am and 9pm, seven days a week, for a free diagnostic. Most ${device} ${service.toLowerCase()} jobs take around 15 minutes, meaning ${suburb} customers can often be back on the road within the hour.`,
  ]
}

function getRepairTime(serviceSlug: string, device: string): string {
  if (serviceSlug.includes('screen-repair')) return '15 minutes'
  if (serviceSlug.includes('battery-replacement')) return '15–20 minutes'
  if (serviceSlug.includes('charging-port')) return '20–30 minutes'
  if (device === 'MacBook') return '30–60 minutes'
  return '15–30 minutes'
}

function getFAQs(page: SuburbServicePage): Array<{ q: string; a: string }> {
  const { device, service, suburb } = page
  const repairTime = getRepairTime(page.serviceSlug, device)

  return [
    {
      q: `How long does ${device} ${service} take near ${suburb}?`,
      a: `For customers coming from ${suburb}, the good news is that most ${device} ${service.toLowerCase()} jobs at iTech Repairs take around ${repairTime} on the spot. You can walk in, have the repair completed while you wait, and be back in ${suburb} well within the hour.`,
    },
    {
      q: `How much does ${device} ${service} cost for customers from ${suburb}?`,
      a: `We operate on a cheapest price guarantee — meaning our price for ${device} ${service.toLowerCase()} is the lowest you will find in Melbourne. We provide a free quote before any work begins, so there are no surprises. If you have seen a lower price elsewhere in the area, bring it in and we will match it.`,
    },
    {
      q: `Do you serve customers from ${suburb}?`,
      a: `Absolutely. We regularly see customers travelling from ${suburb} to our Braybrook store at 16 W Central Park Ave — it is a straightforward drive of just a few minutes. Our store is open 7 days 9am–9pm, so you can come in before or after work or on weekends.`,
    },
    {
      q: `Is there parking near iTech Repairs for customers from ${suburb}?`,
      a: `Yes — there is ample street parking available directly on and around W Central Park Ave in Braybrook. Customers from ${suburb} will find the drive and parking easy, and our technicians aim to have your device ready before your parking expires.`,
    },
    {
      q: `Do I need an appointment for ${device} ${service} from ${suburb}?`,
      a: `No appointment is necessary. iTech Repairs operates on a walk-in basis, open seven days a week from 9am to 9pm. Customers from ${suburb} are welcome to come in at any time — we will assess your device for free and provide a quote before beginning any repair.`,
    },
  ]
}

// ---------------------------------------------------------------------------
// JSON-LD schema builders
// ---------------------------------------------------------------------------

function buildServiceSchema(page: SuburbServicePage): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${page.device} ${page.service} ${page.suburb}`,
    description: `Professional ${page.device} ${page.service} for customers from ${page.suburb}, Melbourne. Cheapest price guaranteed, lifetime warranty, 15 min on-the-spot repairs at iTech Repairs Braybrook.`,
    serviceType: page.service,
    areaServed: {
      '@type': 'City',
      name: page.suburb,
      containedInPlace: {
        '@type': 'State',
        name: 'Victoria',
        containedInPlace: {
          '@type': 'Country',
          name: 'Australia',
        },
      },
    },
    provider: {
      '@type': 'RepairShop',
      name: 'iTech Repairs',
      telephone: business.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: business.address,
        addressLocality: business.suburb,
        addressRegion: business.state,
        postalCode: business.postcode,
        addressCountry: 'Australia',
      },
    },
  }
}

function buildFAQSchema(faqs: Array<{ q: string; a: string }>): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: a,
      },
    })),
  }
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function TrustBadgesBar() {
  return (
    <section className="bg-red-600 text-white py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap justify-center sm:justify-between gap-4 text-sm font-semibold">
          <span>Cheapest Price Guaranteed</span>
          <span>Lifetime Warranty</span>
          <span>15 Min Repairs</span>
          <span>No Fix, No Fee</span>
          <span>Walk-ins Welcome</span>
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export default function SuburbServicePageComponent({ page }: Props) {
  const { device, service, suburb, nearbySuburbs, coreServiceHref, deviceHubHref, serviceSlug } = page

  const commonIssues = getCommonIssues(page.deviceSlug, serviceSlug)
  const [intro1, intro2] = getIntroParagraphs(page)
  const repairTime = getRepairTime(serviceSlug, device)
  const faqs = getFAQs(page)

  const serviceSchema = buildServiceSchema(page)
  const faqSchema = buildFAQSchema(faqs)

  const isGeneral = serviceSlug === 'repair'

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, faqSchema]) }}
      />

      <div className="min-h-screen bg-white">

        {/* ── Page Header with H1 ── */}
        <header className="bg-white border-b border-gray-100 py-6 sm:py-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              {device} {service} {suburb}
            </h1>
            <p className="mt-3 text-base sm:text-lg text-gray-600">
              Serving {suburb} and surrounding Melbourne suburbs{' '}
              <span className="font-semibold text-gray-800">| 15 minute on-the-spot repairs</span>
            </p>
          </div>
        </header>

        {/* ── Trust Badges Bar ── */}
        <TrustBadgesBar />

        <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-16">

          {/* ── Intro Section ── */}
          <section>
            <p className="text-gray-700 leading-relaxed text-lg mb-5">{intro1}</p>
            <p className="text-gray-700 leading-relaxed text-lg">{intro2}</p>

            {/* Quick CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <a
                href={business.phoneHref}
                className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3.5 rounded-lg transition-colors"
              >
                Call Now — {business.phoneDisplay}
              </a>
              <a
                href={`mailto:${business.email}?subject=${encodeURIComponent(`${device} ${service} Quote from ${suburb}`)}`}
                className="inline-flex items-center justify-center border-2 border-red-600 text-red-600 hover:bg-red-50 font-bold px-6 py-3.5 rounded-lg transition-colors"
              >
                Get Free Quote
              </a>
            </div>
          </section>

          {/* ── Common Issues Section ── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Common {device} {isGeneral ? 'Repair' : service} Problems
            </h2>
            <p className="text-gray-600 mb-6">
              These are the most frequent faults we see from {suburb} customers bringing in their {device}
              {isGeneral ? '' : ` for ${service.toLowerCase()}`}:
            </p>
            <ul className="space-y-3">
              {commonIssues.map((issue) => (
                <li key={issue} className="flex items-start gap-3 text-gray-700">
                  <span className="flex-shrink-0 w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-red-600 text-xs font-bold">!</span>
                  </span>
                  <span>{issue}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ── Why Choose Section ── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why Customers in {suburb} Choose iTech Repairs
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              {suburb} residents choose iTech Repairs because our Braybrook store is conveniently
              accessible — a short drive away — and because we consistently offer the best combination of
              price, quality, and speed in Melbourne&apos;s west. Whether you need a quick{' '}
              {isGeneral ? `${device} repair` : service.toLowerCase()} or a full diagnosis, our
              technicians are ready to help the moment you walk through the door.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Cheapest Price Guaranteed',
                  desc: `We guarantee the lowest price for ${device} ${isGeneral ? 'repairs' : service.toLowerCase()} in Melbourne. Find a lower price locally and we will match it on the spot.`,
                },
                {
                  title: 'Lifetime Warranty',
                  desc: 'Every repair at iTech Repairs is covered by a lifetime warranty on parts and labour. If the same fault returns, we fix it at no cost.',
                },
                {
                  title: '15 Minute On-The-Spot Repairs',
                  desc: `Most ${device} ${isGeneral ? 'repairs' : service.toLowerCase()} are completed in ${repairTime} while you wait — no appointments, no drop-off.`,
                },
                {
                  title: 'Experienced Technicians',
                  desc: `Our technicians have serviced thousands of ${device} devices and are trained on all current models and repair techniques.`,
                },
              ].map((point) => (
                <div key={point.title} className="flex gap-3 p-4 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-red-600 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{point.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Nearby Areas ── */}
          <section className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nearby Areas We Service</h2>
            <p className="text-gray-600 mb-6">
              As well as {suburb}, we regularly serve customers from these surrounding suburbs. Our
              Braybrook location makes it easy for residents across Melbourne&apos;s west to reach us
              quickly.
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {nearbySuburbs.map((s) => (
                <li
                  key={s}
                  className="border border-gray-200 rounded-xl p-3 bg-white text-sm text-gray-700"
                >
                  <span className="font-semibold text-gray-900">{device} {isGeneral ? 'Repair' : service}</span>
                  <br />
                  <span className="text-gray-500">{s}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ── Repair Process ── */}
          <section className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              How We {isGeneral ? 'Repair' : service} Your {device} in {suburb}
            </h2>
            <ol className="space-y-5">
              {[
                {
                  title: 'Walk in or call ahead — no appointment needed',
                  detail: `Our Braybrook store at 16 W Central Park Ave is open 7 days from 9am to 9pm. ${suburb} customers can walk in at any time, or call ahead on ${business.phoneDisplay} to let us know you are coming.`,
                },
                {
                  title: 'Free diagnostic assessment identifies the exact fault',
                  detail: `We inspect your ${device} at no charge and explain exactly what the problem is before quoting. There is no obligation to proceed — we only start work with your approval.`,
                },
                {
                  title: `Repair completed on the spot in most cases`,
                  detail: `Most ${device} ${isGeneral ? 'repairs' : service.toLowerCase()} are completed in ${repairTime} while you wait. We use quality replacement parts and test the device fully before handing it back.`,
                },
                {
                  title: 'Full function test and lifetime warranty applied before return',
                  detail: `Before your ${device} is returned, we run a comprehensive function check covering the repaired area and all related systems. Your lifetime warranty on parts and labour is activated at this point.`,
                },
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{step.title}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* ── FAQ Section ── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Frequently Asked Questions — {device} {isGeneral ? 'Repair' : service} near {suburb}
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group border border-gray-200 rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-5 font-semibold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                    <span>{faq.q}</span>
                    <span className="ml-4 text-gray-400 group-open:rotate-180 transition-transform text-lg">
                      ↓
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* ── CTA Banner ── */}
          <section className="bg-red-600 text-white rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Book Your {device} {isGeneral ? 'Repair' : service} Today
            </h2>
            <p className="text-red-100 text-lg mb-8 max-w-xl mx-auto">
              Walk in from {suburb} — no appointment needed. Repairs completed in around {repairTime}.
              Lifetime warranty on every repair. Open 7 days, 9am–9pm.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={business.phoneHref}
                className="bg-white text-red-600 hover:bg-red-50 font-bold px-8 py-3 rounded-lg transition-colors"
              >
                Call {business.phoneDisplay}
              </a>
              <a
                href={`mailto:${business.email}?subject=${encodeURIComponent(`${device} ${service} Quote from ${suburb}`)}`}
                className="border-2 border-white text-white hover:bg-red-700 font-bold px-8 py-3 rounded-lg transition-colors"
              >
                Get Free Quote
              </a>
            </div>
            <p className="mt-6 text-red-200 text-sm">
              {business.address}, {business.suburb} VIC {business.postcode} · 7 Days 9am–9pm
            </p>
          </section>

          {/* ── Internal Links ── */}
          <section className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Related Pages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <Link
                href={coreServiceHref}
                className="text-sm text-gray-700 hover:text-red-600 hover:underline py-1 transition-colors flex items-center gap-2"
              >
                <span className="text-gray-300">→</span>
                {device} {service} — All Models &amp; All Melbourne
              </Link>
              {deviceHubHref !== coreServiceHref && (
                <Link
                  href={deviceHubHref}
                  className="text-sm text-gray-700 hover:text-red-600 hover:underline py-1 transition-colors flex items-center gap-2"
                >
                  <span className="text-gray-300">→</span>
                  {device} Repair Melbourne
                </Link>
              )}
              <Link
                href="/iphone-repair-braybrook"
                className="text-sm text-gray-700 hover:text-red-600 hover:underline py-1 transition-colors flex items-center gap-2"
              >
                <span className="text-gray-300">→</span>
                iPhone Repair Braybrook
              </Link>
              <Link
                href="/samsung-repair-braybrook"
                className="text-sm text-gray-700 hover:text-red-600 hover:underline py-1 transition-colors flex items-center gap-2"
              >
                <span className="text-gray-300">→</span>
                Samsung Repair Braybrook
              </Link>
            </div>
          </section>

        </main>
      </div>
    </>
  )
}
