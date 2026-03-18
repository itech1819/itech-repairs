import type { Metadata } from 'next'
import Link from 'next/link'
import { business } from '@/data'
import SellQuoteForm from '@/components/ui/SellQuoteForm'
import SchemaScript from '@/components/seo/SchemaScript'
import { generateFAQSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Sell My Device Melbourne – Instant Cash for Phones, iPads & MacBooks | iTech Repairs',
  description: 'Sell your phone, tablet or laptop in Melbourne for instant cash. iTech Repairs buys iPhones, Samsung, iPad, MacBook and more. Walk in to Braybrook or Spotswood today.',
  alternates: { canonical: 'https://www.itechrepairs.com.au/sell-my-device' },
}

const faqs = [
  { question: 'What devices does iTech Repairs buy?', answer: 'We buy iPhones (all models), Samsung Galaxy phones, Google Pixel phones, iPads, MacBooks, and other phones and laptops. All brands and conditions accepted.', category: 'general' },
  { question: 'Do you buy broken or damaged devices?', answer: 'Yes. We buy devices with cracked screens, water damage, dead batteries, and non-functional devices. Broken devices still have value — walk in for a free assessment.', category: 'general' },
  { question: 'How do I get a quote?', answer: 'Walk in to our Braybrook or Spotswood store for an instant cash quote. No appointment needed. Alternatively, fill in the short form above and our team will contact you quickly.', category: 'general' },
  { question: 'How quickly will I get paid?', answer: 'If you accept our offer, you get paid on the spot — same day, in cash or bank transfer.', category: 'general' },
  { question: 'Do you buy iCloud-locked or account-locked phones?', answer: 'Yes, we accept locked devices at a reduced price. Bring your device in and we will give you an honest assessment.', category: 'general' },
  { question: 'Do you buy sealed or brand new iPhones?', answer: 'Yes. We pay premium prices for sealed, unopened iPhones. Sealed devices attract our highest offers.', category: 'general' },
  { question: 'What if I want to repair rather than sell?', answer: 'No problem. We can give you both a repair quote and a sell quote. If repairing your device increases its value by more than the repair cost, it is often worth fixing first.', category: 'general' },
]

const sellSubPages = [
  { href: '/sell-my-iphone', label: 'Sell My iPhone', desc: 'All iPhone models, all conditions' },
  { href: '/sell-my-samsung', label: 'Sell My Samsung', desc: 'Galaxy S series, A series, Z Fold & Flip' },
  { href: '/sell-my-ipad', label: 'Sell My iPad', desc: 'iPad Pro, Air, Mini and standard iPads' },
  { href: '/sell-my-macbook', label: 'Sell My MacBook', desc: 'MacBook Air and MacBook Pro, all generations' },
  { href: '/sell-broken-phone', label: 'Sell Broken Phone', desc: 'Cracked, water damaged, or not working' },
  { href: '/sell-sealed-iphone', label: 'Sell Sealed iPhone', desc: 'Unopened or brand new iPhones — highest prices' },
]

export default function SellMyDevicePage() {
  return (
    <>
      <SchemaScript schema={generateFAQSchema(faqs)} />

      {/* Hero + Form */}
      <section id="quote" className="bg-charcoal text-white py-12 md:py-16">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <nav className="text-sm text-gray-400 mb-4 flex flex-wrap items-center gap-1">
                <Link href="/" className="hover:text-white">Home</Link>
                <span>/</span>
                <span className="text-white">Sell My Device</span>
              </nav>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 leading-tight">
                Sell My Phone Melbourne —{' '}
                <span className="text-primary">Instant Cash Today</span>
              </h1>
              <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed max-w-xl">
                Melbourne&apos;s trusted phone buyers. iTech Repairs pays instant cash for iPhones, Samsung Galaxy, Google Pixel, iPads, MacBooks and more — used, broken, or sealed. Walk in or get a quote online in seconds.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <a
                  href={business.phoneHref}
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3.5 rounded-lg transition-colors text-sm sm:text-base"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                  </svg>
                  Call {business.phoneDisplay}
                </a>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: '💰', label: 'Instant cash offers' },
                  { icon: '📍', label: 'Melbourne local buyers' },
                  { icon: '🔓', label: 'We buy broken & sealed' },
                  { icon: '⚡', label: 'Fast response' },
                ].map(({ icon, label }) => (
                  <div key={label} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="text-base">{icon}</span>
                    {label}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SellQuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Popular sell pages */}
      <section className="py-10 md:py-14 bg-white">
        <div className="container-page">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">What Would You Like to Sell?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sellSubPages.map(({ href, label, desc }) => (
              <Link
                key={href}
                href={href}
                className="group flex flex-col gap-1 bg-gray-50 hover:bg-primary hover:text-white border border-gray-200 hover:border-primary rounded-xl p-5 transition-all"
              >
                <span className="font-bold text-gray-900 group-hover:text-white text-sm sm:text-base">{label}</span>
                <span className="text-gray-500 group-hover:text-white/80 text-xs sm:text-sm">{desc}</span>
                <span className="text-primary group-hover:text-white text-xs font-semibold mt-1">Get a quote →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-10 md:py-14 bg-gray-50">
        <div className="container-page">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-8 text-center">How Selling Your Device Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Get a Quote', desc: 'Fill in the form above or walk in to our Braybrook or Spotswood store. Takes less than 10 seconds online.' },
              { step: '2', title: 'We Assess It', desc: 'Our technicians check your device model, condition, screen, and functionality in minutes.' },
              { step: '3', title: 'Instant Offer', desc: 'We give you a fair cash offer on the spot — no pressure, no obligation.' },
              { step: '4', title: 'Get Paid', desc: 'Accept and receive instant cash or bank transfer. Same-day, every day.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white font-extrabold text-lg flex items-center justify-center mx-auto mb-3">{step}</div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Devices we buy + conditions */}
      <section className="py-10 md:py-14 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">Devices We Buy</h2>
              <ul className="space-y-2.5">
                {[
                  'All iPhone models — iPhone 17 series down to older iPhones',
                  'Samsung Galaxy phones — S series, A series, Z Fold & Z Flip',
                  'Google Pixel phones — all generations',
                  'iPads — Pro, Air, Mini and standard',
                  'MacBooks — Air and Pro, all generations',
                  'Other smartphones and tablets',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-gray-700 text-sm">
                    <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">Conditions We Accept</h2>
              <ul className="space-y-2.5">
                {[
                  { label: 'Brand New / Sealed', note: 'Highest prices paid' },
                  { label: 'Like New / Excellent', note: 'Great cash offer' },
                  { label: 'Used – Good Condition', note: 'Fair market price' },
                  { label: 'Cracked Screen', note: 'Still worth good money' },
                  { label: 'Not Working / Dead', note: 'We still buy it' },
                  { label: 'Water Damaged', note: 'Parts still have value' },
                ].map(({ label, note }) => (
                  <li key={label} className="flex items-start justify-between gap-2 text-sm">
                    <span className="flex items-start gap-2 text-gray-700">
                      <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                      {label}
                    </span>
                    <span className="text-gray-400 text-xs mt-0.5 whitespace-nowrap">{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-10 md:py-14 bg-gray-50">
        <div className="container-page">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-8 text-center">Why Sell to iTech Repairs?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Instant Cash Payment', desc: 'Get paid on the spot the moment you accept our offer. Cash or bank transfer, same day.' },
              { title: 'Melbourne-Based Buyers', desc: 'Walk-in stores in Braybrook and Spotswood. No postage, no waiting, no couriers.' },
              { title: 'All Conditions Accepted', desc: 'Working, cracked, water-damaged, or broken — we assess everything and make a fair offer.' },
              { title: 'Trusted Local Business', desc: 'Serving Melbourne\'s west for years. Hundreds of satisfied customers and devices purchased.' },
              { title: 'Price Beat Guarantee', desc: 'Found a better price? Show us and we\'ll beat it. We are committed to offering the best prices in Melbourne.' },
              { title: 'Repair Option Available', desc: 'Not sure whether to sell or repair? We can give you both quotes so you can make the best decision.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-5 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-1.5 text-sm sm:text-base">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Second form */}
      <section className="py-10 md:py-14 bg-charcoal">
        <div className="container-page">
          <div className="max-w-xl mx-auto text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Ready to Get Your Cash Offer?</h2>
            <p className="text-gray-300 text-sm sm:text-base">Fill in the quick form below — takes less than 10 seconds. Our Melbourne team will be in touch fast.</p>
          </div>
          <div className="max-w-lg mx-auto">
            <SellQuoteForm compact />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 md:py-14 bg-white">
        <div className="container-page max-w-3xl">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map(({ question, answer }) => (
              <div key={question} className="border border-gray-200 rounded-xl p-4 sm:p-5">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-2">{question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="container-page">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Explore more</p>
          <div className="flex flex-wrap gap-2">
            {[
              { href: '/sell-my-iphone', label: 'Sell My iPhone' },
              { href: '/sell-my-samsung', label: 'Sell My Samsung' },
              { href: '/sell-my-ipad', label: 'Sell My iPad' },
              { href: '/sell-my-macbook', label: 'Sell My MacBook' },
              { href: '/sell-broken-phone', label: 'Sell Broken Phone' },
              { href: '/sell-sealed-iphone', label: 'Sell Sealed iPhone' },
              { href: '/sell-broken-iphone', label: 'Sell Broken iPhone' },
              { href: '/cash-for-iphone-melbourne', label: 'Cash for iPhone Melbourne' },
              { href: '/iphone-buyers-melbourne', label: 'iPhone Buyers Melbourne' },
              { href: '/sell-my-device-melbourne', label: 'Sell My Device Melbourne' },
              { href: '/how-much-is-my-iphone-worth', label: 'How Much Is My iPhone Worth?' },
              { href: '/iphone-repair-melbourne', label: 'iPhone Repair Melbourne' },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="text-xs sm:text-sm text-primary hover:underline border border-gray-200 bg-white px-3 py-1.5 rounded-full">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
