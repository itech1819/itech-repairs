import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import {
  getDevice,
  getProblem,
  isValidDeviceSlug,
  isValidProblemSlug,
  getAllDeviceProblemParams,
} from '@/data/deviceProblems'
import { business } from '@/data'

// ─── Static generation ───────────────────────────────────────────────────────

export async function generateStaticParams() {
  return getAllDeviceProblemParams()
}

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ device: string; problem: string }>
}): Promise<Metadata> {
  const { device: deviceSlug, problem: problemSlug } = await params

  if (!isValidDeviceSlug(deviceSlug) || !isValidProblemSlug(problemSlug)) {
    return { title: 'Page Not Found | iTech Repairs' }
  }

  const device = getDevice(deviceSlug)!
  const problem = getProblem(problemSlug)!

  return {
    title: problem.metaTitle(device.displayName),
    description: problem.metaDescription(device.displayName),
    alternates: {
      canonical: `https://www.itechrepairs.com.au/help/${deviceSlug}/${problemSlug}`,
    },
    openGraph: {
      title: problem.metaTitle(device.displayName),
      description: problem.metaDescription(device.displayName),
      url: `https://www.itechrepairs.com.au/help/${deviceSlug}/${problemSlug}`,
      siteName: business.name,
      locale: 'en_AU',
      type: 'website',
    },
    robots: { index: true, follow: true },
  }
}

// ─── Page component ──────────────────────────────────────────────────────────

export default async function DeviceProblemPage({
  params,
}: {
  params: Promise<{ device: string; problem: string }>
}) {
  const { device: deviceSlug, problem: problemSlug } = await params

  if (!isValidDeviceSlug(deviceSlug) || !isValidProblemSlug(problemSlug)) {
    notFound()
  }

  const device = getDevice(deviceSlug)!
  const problem = getProblem(problemSlug)!

  const causes = problem.causes(device)
  const solutions = problem.solutions(device)

  const urgencyBadge =
    problem.urgency === 'critical'
      ? { label: 'Act Immediately', colour: 'bg-red-600 text-white' }
      : problem.urgency === 'high'
      ? { label: 'Repair Recommended', colour: 'bg-orange-500 text-white' }
      : { label: 'Repair Advised', colour: 'bg-yellow-500 text-charcoal' }

  return (
    <>
      {/* ── Schema ──────────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: `Can a ${device.displayName} with ${problem.name.toLowerCase()} be repaired?`,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: `Yes. iTech Repairs in Melbourne specialises in ${device.displayName} repairs including ${problem.name.toLowerCase()} faults. Walk in to our Braybrook or Spotswood store — no appointment needed.`,
                },
              },
              {
                '@type': 'Question',
                name: `How long does ${device.displayName} ${problem.name.toLowerCase()} repair take?`,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Most iPhone repairs at iTech Repairs are completed on the spot in 15–30 minutes. Complex logic board repairs may take longer — we provide a time estimate before starting any work.',
                },
              },
            ],
          }),
        }}
      />

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-border py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="flex items-center gap-2 text-sm text-charcoal-light mb-4 flex-wrap">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/iphone-repair-melbourne" className="hover:text-primary transition-colors">iPhone Repairs</Link>
            <span>/</span>
            <span className="text-charcoal">{device.displayName} {problem.name}</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${urgencyBadge.colour}`}>
              {urgencyBadge.label}
            </span>
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-surface border border-gray-border text-charcoal-light">
              Melbourne — Braybrook &amp; Spotswood
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight leading-tight mb-4">
            {problem.h1(device.displayName)}
          </h1>

          <p className="text-lg text-charcoal-light leading-relaxed mb-6 max-w-3xl">
            {problem.intro(device)}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${business.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-7 py-3.5 rounded-xl text-base transition-colors shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>
              Call Now — {business.phoneDisplay}
            </a>
            <Link
              href={problem.repairPageSlug}
              className="inline-flex items-center justify-center gap-2 bg-transparent border border-charcoal text-charcoal hover:bg-charcoal hover:text-white font-bold px-7 py-3.5 rounded-xl text-base transition-colors"
            >
              {problem.repairPageLabel}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Symptoms ────────────────────────────────────────────────────── */}
      <section className="py-10 md:py-14 border-b border-gray-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6">
            Common Symptoms
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {problem.symptoms.map((symptom) => (
              <div key={symptom} className="flex items-start gap-3 p-4 bg-gray-surface rounded-lg border border-gray-border">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true">
                  <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-charcoal">{symptom}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Causes + Solutions ───────────────────────────────────────────── */}
      <section className="py-10 md:py-14 border-b border-gray-border bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Causes */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6">
                Common Causes
              </h2>
              <ul className="space-y-3">
                {causes.map((cause, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-charcoal-light text-sm leading-relaxed">{cause}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6">
                How to Fix It
              </h2>
              <ul className="space-y-3">
                {solutions.map((solution, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                    </svg>
                    <span className="text-charcoal-light text-sm leading-relaxed">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why iTech Repairs ────────────────────────────────────────────── */}
      <section className="py-10 md:py-14 bg-gray-surface border-b border-gray-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-8">
            Why Choose iTech Repairs for Your {device.displayName}?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: '💰', title: 'Cheapest Price Guaranteed', body: 'Find a verified lower price for the same repair with the same warranty and we\'ll beat it.' },
              { icon: '⚡', title: 'On-the-Spot 15 Minute Repairs', body: 'Most iPhone repairs — including screen and battery replacements — are completed while you wait.' },
              { icon: '🛡️', title: 'Lifetime Warranty', body: 'Every repair carries a lifetime warranty on parts and labour. If the same fault returns, we fix it free.' },
              { icon: '📍', title: 'Two Melbourne Locations', body: 'Walk in to our Braybrook or Spotswood stores — open 7 days, 9am to 9pm, no appointment needed.' },
              ...(problem.isDataRecoveryRisk
                ? [{ icon: '💾', title: 'Data Recovery Specialists', body: 'We extract data from damaged iPhones at the component level — even when the device won\'t power on.' }]
                : [{ icon: '🔧', title: 'Expert Technicians', body: 'Our Melbourne technicians have repaired thousands of iPhones across all models and fault types.' }]),
              { icon: '🆓', title: 'Free Diagnostic Service', body: `Not sure what's wrong? We assess your ${device.displayName} and quote you at no charge before starting any work.` },
            ].map((point) => (
              <div key={point.title} className="flex gap-3 p-5 bg-white rounded-xl border border-gray-border">
                <div className="text-2xl flex-shrink-0" aria-hidden="true">{point.icon}</div>
                <div>
                  <h3 className="font-bold text-charcoal text-sm mb-1">{point.title}</h3>
                  <p className="text-charcoal-light text-sm leading-relaxed">{point.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Internal links ───────────────────────────────────────────────── */}
      <section className="py-10 md:py-14 border-b border-gray-border bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-xl font-bold text-charcoal mb-5">
            Related {device.displayName} Repair Services
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link href={problem.repairPageSlug} className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary-dark transition-colors">
              {problem.repairPageLabel}
            </Link>
            {problem.secondaryRepairSlug && problem.secondaryRepairLabel && (
              <Link href={problem.secondaryRepairSlug} className="px-4 py-2 bg-gray-surface border border-gray-border text-charcoal text-sm font-medium rounded-full hover:border-primary hover:text-primary transition-colors">
                {problem.secondaryRepairLabel}
              </Link>
            )}
            <Link href="/iphone-repair-melbourne" className="px-4 py-2 bg-gray-surface border border-gray-border text-charcoal text-sm font-medium rounded-full hover:border-primary hover:text-primary transition-colors">
              All iPhone Repairs Melbourne
            </Link>
            <Link href="/iphone-battery-replacement" className="px-4 py-2 bg-gray-surface border border-gray-border text-charcoal text-sm font-medium rounded-full hover:border-primary hover:text-primary transition-colors">
              Battery Replacement
            </Link>
            <Link href="/iphone-screen-repair" className="px-4 py-2 bg-gray-surface border border-gray-border text-charcoal text-sm font-medium rounded-full hover:border-primary hover:text-primary transition-colors">
              Screen Repair
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="bg-primary text-white py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Ready to Fix Your {device.displayName}?
          </h2>
          <p className="text-red-100 text-lg mb-8 leading-relaxed">
            Walk in to our Braybrook or Spotswood store — open 7 days, 9am to 9pm.
            No appointment needed. Free diagnostic included.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${business.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl text-lg hover:bg-red-50 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>
              Call {business.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-primary transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
          <p className="text-red-200 text-sm mt-6">
            📍 Braybrook &amp; Spotswood, Melbourne — serving the entire western suburbs
          </p>
        </div>
      </section>
    </>
  )
}
