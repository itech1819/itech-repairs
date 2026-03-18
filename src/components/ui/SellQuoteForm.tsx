'use client'

import { useState } from 'react'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const DEVICES = ['iPhone', 'Samsung', 'Google Pixel', 'iPad', 'MacBook', 'Other']
const CONDITIONS = [
  'Brand New / Sealed',
  'Like New',
  'Used – Good Condition',
  'Cracked Screen',
  'Not Working',
  'Broken / Damaged',
]

interface Props {
  compact?: boolean
}

export default function SellQuoteForm({ compact = false }: Props) {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setError('')
    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      device: (form.elements.namedItem('device') as HTMLSelectElement).value,
      condition: (form.elements.namedItem('condition') as HTMLSelectElement).value,
    }
    try {
      const res = await fetch('/api/sell-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (!res.ok || !json.success) throw new Error(json.error ?? 'Something went wrong.')
      setStatus('success')
      form.reset()
    } catch (err: unknown) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Failed to send. Please call us.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 text-center">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-7 h-7 text-green-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="font-bold text-gray-900 text-lg mb-1">Quote Request Sent!</h3>
        <p className="text-gray-500 text-sm">Our Melbourne team will be in touch shortly with a cash offer.</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
      {!compact && (
        <div className="bg-charcoal px-6 pt-6 pb-5">
          <h2 className="text-white font-extrabold text-xl sm:text-2xl leading-tight mb-1">
            Get an Instant Cash Quote
          </h2>
          <p className="text-gray-300 text-sm">Enter your details — our Melbourne team contacts you fast.</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3">
            {['Takes less than 10 seconds', 'Instant cash offers', 'Melbourne local buyers'].map((t) => (
              <span key={t} className="text-xs text-green-400 font-medium flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 flex-shrink-0"><path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" /></svg>
                {t}
              </span>
            ))}
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit} className="p-6 space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="sell-name" className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">First Name</label>
            <input
              id="sell-name"
              name="name"
              type="text"
              required
              placeholder="e.g. Sarah"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="sell-phone" className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Phone Number</label>
            <input
              id="sell-phone"
              name="phone"
              type="text"
              inputMode="tel"
              required
              placeholder="e.g. 0412 345 678"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="sell-device" className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Device</label>
            <select
              id="sell-device"
              name="device"
              required
              defaultValue=""
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="" disabled>Select device…</option>
              {DEVICES.map((d) => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="sell-condition" className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Condition</label>
            <select
              id="sell-condition"
              name="condition"
              required
              defaultValue=""
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="" disabled>Select condition…</option>
              {CONDITIONS.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>

        {status === 'error' && (
          <p className="text-red-600 text-xs bg-red-50 border border-red-200 rounded-lg px-3 py-2">{error}</p>
        )}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-primary hover:bg-primary-dark disabled:opacity-60 text-white font-bold py-3.5 px-6 rounded-lg transition-colors text-base flex items-center justify-center gap-2"
        >
          {status === 'submitting' ? (
            <>
              <svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              Sending…
            </>
          ) : 'Get My Quote'}
        </button>
        <p className="text-center text-xs text-gray-400">No obligation · We buy used, broken &amp; sealed devices</p>
      </form>
    </div>
  )
}
