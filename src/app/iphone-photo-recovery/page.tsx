import type { Metadata } from 'next'
import Link from 'next/link'
import { business } from '@/data'

export const metadata: Metadata = {
  title: 'iPhone Photo Recovery Melbourne | Recover Deleted Photos | iTech Repairs',
  description: 'Recover deleted photos from your iPhone in Melbourne. Accidentally deleted photos? We can recover them. Same day service, highest success rate.',
  alternates: { canonical: 'https://www.itechrepairs.com.au/iphone-photo-recovery' },
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
            <span className="text-white">iPhone Photo Recovery</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4">
            iPhone Photo Recovery Melbourne
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mb-6 leading-relaxed">
            Accidentally deleted your iPhone photos? Lost photos after a factory reset, screen damage, or water exposure? iTech Repairs Melbourne specialises in iPhone photo recovery. We recover photos and videos from all iPhone models — same day, highest success rate, no photo — no fee.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-primary/20 border border-primary/40 text-primary-light text-xs font-semibold px-3 py-1.5 rounded-full">Same Day Recovery</span>
            <span className="bg-primary/20 border border-primary/40 text-primary-light text-xs font-semibold px-3 py-1.5 rounded-full">99% Success Rate</span>
            <span className="bg-primary/20 border border-primary/40 text-primary-light text-xs font-semibold px-3 py-1.5 rounded-full">No Photos Recovered, No Fee</span>
            <span className="bg-primary/20 border border-primary/40 text-primary-light text-xs font-semibold px-3 py-1.5 rounded-full">All iPhone Models</span>
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

      {/* Scenarios */}
      <section className="py-12 bg-white">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Photo Loss Scenarios We Fix</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Accidentally Deleted', desc: 'Deleted photos that are no longer in the Recently Deleted album. We scan for residual data on the storage chip.' },
              { title: 'Broken Screen iPhone', desc: 'iPhone with a shattered or unresponsive screen. We extract photos without needing to use the touchscreen.' },
              { title: 'Water Damaged iPhone', desc: 'Photos trapped on a water-damaged iPhone that will not turn on or has a black screen.' },
              { title: 'Factory Reset', desc: 'Photos lost after a factory reset. Recovery is possible within a short window before data is overwritten.' },
              { title: "Won't Turn On", desc: "iPhone that is completely dead. We diagnose the cause and extract photos from the storage chip." },
              { title: 'No iCloud Backup', desc: 'No iCloud or iTunes backup exists. We recover directly from the device storage without needing a backup.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 bg-gray-50">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How iPhone Photo Recovery Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">1</div>
              <h3 className="font-bold text-gray-900 mb-2">Stop Using the Phone</h3>
              <p className="text-gray-600 text-sm leading-relaxed">The moment you realise photos are missing, stop using the phone. Every new file written can overwrite deleted data. Bring it to us immediately.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">2</div>
              <h3 className="font-bold text-gray-900 mb-2">Free Assessment</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Our specialist scans the device to determine what photos are recoverable and provides a fixed quote before starting work.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">3</div>
              <h3 className="font-bold text-gray-900 mb-2">Photos Delivered</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Recovered photos are transferred to a USB drive, your new phone, or a secure cloud folder. Most jobs are done same day.</p>
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
              { q: 'How soon should I come in after accidentally deleting photos?', a: 'As soon as possible. When you delete a photo it is not immediately destroyed — it remains in storage until overwritten by new data. The less you use the phone after deletion, the higher the recovery chance.' },
              { q: 'Can you recover photos if I already emptied the Recently Deleted folder?', a: 'Yes. Emptying the Recently Deleted folder marks the space as available but does not immediately destroy the data. Our specialist tools can scan for and recover the underlying photo data.' },
              { q: 'Can you recover photos from a dead iPhone?', a: 'In most cases yes. We diagnose why the phone is dead, restore power to the storage system, and extract the photos. Even completely dead iPhones often have intact storage.' },
              { q: 'Do I need an iCloud or iTunes backup for photo recovery?', a: 'No. We recover directly from the iPhone storage. A backup is helpful but not required.' },
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
            <Link href="/iphone-data-recovery" className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">iPhone Data Recovery</Link>
            <Link href="/iphone-deleted-photo-recovery" className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">Deleted Photo Recovery</Link>
            <Link href="/data-recovery-melbourne" className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">Data Recovery Melbourne</Link>
            <Link href="/iphone-water-damage-repair" className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">iPhone Water Damage Repair</Link>
            <Link href="/iphone-repair-melbourne" className="text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">iPhone Repair Melbourne</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-primary text-white">
        <div className="container-page text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">Recover Your iPhone Photos Today</h2>
          <p className="text-white/80 mb-6 text-sm">Walk in to Braybrook or Spotswood — no appointment needed. Open 7 days, 9am–9pm.</p>
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
