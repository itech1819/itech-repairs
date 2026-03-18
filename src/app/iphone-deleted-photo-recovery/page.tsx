import type { Metadata } from 'next'
import Link from 'next/link'
import { business } from '@/data'

export const metadata: Metadata = {
  title: 'Recover Deleted iPhone Photos Melbourne | iTech Repairs',
  description: 'Recover accidentally deleted photos from your iPhone in Melbourne. Fast, affordable photo recovery. Same day service at Braybrook & Spotswood stores.',
  alternates: { canonical: 'https://www.itechrepairs.com.au/iphone-deleted-photo-recovery' },
}

export default function Page() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-charcoal text-white py-12 md:py-16">
        <div className="container-page">
          <nav className="text-sm text-gray-400 mb-4 flex flex-wrap items-center gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/data-recovery-melbourne" className="hover:text-white">Data Recovery Melbourne</Link>
            <span>/</span>
            <span className="text-white">Recover Deleted iPhone Photos</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4">
            Recover Deleted iPhone Photos Melbourne
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mb-6 leading-relaxed">
            Accidentally deleted your iPhone photos and emptied the Recently Deleted folder? Do not panic — in many cases those photos are still recoverable. iTech Repairs Melbourne specialises in recovering accidentally deleted photos from all iPhone models. Same-day service, no photos recovered — no fee.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-primary/20 border border-primary/40 text-primary-light text-xs font-semibold px-3 py-1.5 rounded-full">Same Day Recovery</span>
            <span className="bg-primary/20 border border-primary/40 text-primary-light text-xs font-semibold px-3 py-1.5 rounded-full">No Photos Recovered, No Fee</span>
            <span className="bg-primary/20 border border-primary/40 text-primary-light text-xs font-semibold px-3 py-1.5 rounded-full">All iPhone Models</span>
            <span className="bg-primary/20 border border-primary/40 text-primary-light text-xs font-semibold px-3 py-1.5 rounded-full">Braybrook & Spotswood</span>
          </div>
          <div className="bg-amber-900/30 border border-amber-700/50 rounded-lg p-4 mb-6 max-w-xl">
            <p className="text-amber-300 text-sm font-semibold mb-1">Act Fast — Stop Using Your iPhone Now</p>
            <p className="text-amber-200 text-sm">Every photo or file you save to your iPhone after deleting photos can overwrite the deleted data. Stop using the phone and bring it in immediately for the best recovery chance.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={business.phoneHref} className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3 rounded-lg transition-colors text-sm sm:text-base">
              Call {business.phoneDisplay}
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-lg transition-colors text-sm sm:text-base">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* How Recovery Works */}
      <section className="py-12 bg-white">
        <div className="container-page max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Deleted Photo Recovery Works on iPhone</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            When you delete a photo on your iPhone and empty the Recently Deleted folder, iOS marks that storage space as available to be reused — but does not immediately destroy the underlying data. The photo data remains physically present on the NAND flash storage chip until new data is written over it.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Using professional forensic data recovery tools, our specialists can scan the NAND storage and recover photo files that have been marked as deleted but not yet overwritten. The success rate is highest the sooner you come in after the deletion, and the less you have used the phone since.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This is why we always say: stop using your iPhone the moment you realise photos are missing. Every new photo, message, or app download reduces the recovery chances.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 bg-gray-50">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Recovery Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">1</div>
              <h3 className="font-bold text-gray-900 mb-2">Bring It In</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Walk in to Braybrook or Spotswood — no appointment needed. Our specialist will assess your phone immediately.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">2</div>
              <h3 className="font-bold text-gray-900 mb-2">Deep Storage Scan</h3>
              <p className="text-gray-600 text-sm leading-relaxed">We run a forensic-grade scan of the iPhone&apos;s NAND storage to locate deleted photo data that has not yet been overwritten.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">3</div>
              <h3 className="font-bold text-gray-900 mb-2">Photos Delivered</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Recovered photos are copied to a USB drive or transferred directly to your new device. Same-day service for most cases.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-white">
        <div className="container-page max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'Can you recover photos I deleted months ago?', a: 'Possibly — but it depends on how much the phone has been used since deletion. Photos deleted weeks or months ago may have been overwritten by new data. We assess the phone first and tell you exactly what is recoverable before charging anything.' },
              { q: 'What if I already did a factory reset?', a: 'A factory reset makes recovery significantly harder but not always impossible. Bring the phone in and we will assess what residual data remains.' },
              { q: 'Do you need my Apple ID password?', a: 'For locked devices, we may need your Apple ID or PIN to access the file system. We handle all data with strict privacy — your content is seen only as necessary for the recovery process.' },
              { q: 'How much does deleted photo recovery cost?', a: 'Pricing starts from $89 for standard deleted photo recovery and is confirmed after a free assessment. No recovery — no fee.' },
              { q: 'Can you recover videos as well as photos?', a: 'Yes. We recover photos, videos, Live Photos, and Portrait mode files. All major image and video formats stored on iPhone are supported.' },
            ].map(({ q, a }) => (
              <div key={q} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="py-10 bg-gray-50 border-t border-gray-100">
        <div className="container-page">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related Services</h2>
          <div className="flex flex-wrap gap-2">
            <Link href="/iphone-photo-recovery" className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">iPhone Photo Recovery</Link>
            <Link href="/iphone-data-recovery" className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">iPhone Data Recovery</Link>
            <Link href="/data-recovery-melbourne" className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">Data Recovery Melbourne</Link>
            <Link href="/iphone-water-damage-repair" className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">iPhone Water Damage Repair</Link>
            <Link href="/iphone-repair-melbourne" className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">iPhone Repair Melbourne</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-primary text-white">
        <div className="container-page text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">Recover Your Deleted iPhone Photos Today</h2>
          <p className="text-white/80 mb-6 text-sm">Walk in to Braybrook or Spotswood — open 7 days, 9am–9pm. No appointment needed.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={business.phoneHref} className="inline-flex items-center justify-center bg-white text-primary font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors text-sm">
              Call {business.phoneDisplay}
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-primary transition-colors text-sm">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
