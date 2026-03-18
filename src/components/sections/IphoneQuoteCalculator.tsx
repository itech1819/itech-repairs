'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  BUYBACK_MODELS,
  CONDITION_BANDS,
  estimatePriceRange,
  type ConditionKey,
} from '@/data/buybackPricing'
import { business } from '@/data'

export default function IphoneQuoteCalculator() {
  const [modelSlug, setModelSlug] = useState('')
  const [storageIndex, setStorageIndex] = useState(0)
  const [condition, setCondition] = useState<ConditionKey | ''>('')
  const [result, setResult] = useState<[number, number] | null>(null)

  const selectedModel = BUYBACK_MODELS.find((m) => m.modelSlug === modelSlug)

  function handleEstimate() {
    if (!modelSlug || !condition) return
    const range = estimatePriceRange(modelSlug, storageIndex, condition as ConditionKey)
    setResult(range)
  }

  function handleReset() {
    setModelSlug('')
    setStorageIndex(0)
    setCondition('')
    setResult(null)
  }

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
      <div className="bg-primary px-6 py-5 text-white">
        <h2 className="text-lg font-bold">iPhone Quote Calculator</h2>
        <p className="text-white/80 text-sm mt-1">
          Get an estimated value for your iPhone in seconds.
          Final offers confirmed in-store after inspection.
        </p>
      </div>

      <div className="p-6 space-y-5">
        {/* Step 1: Model */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            1. Select your iPhone model
          </label>
          <select
            value={modelSlug}
            onChange={(e) => {
              setModelSlug(e.target.value)
              setStorageIndex(0)
              setResult(null)
            }}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-800 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
          >
            <option value="">— Choose a model —</option>
            {BUYBACK_MODELS.map((m) => (
              <option key={m.modelSlug} value={m.modelSlug}>
                {m.displayName}
              </option>
            ))}
          </select>
        </div>

        {/* Step 2: Storage */}
        {selectedModel && (
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              2. Storage capacity
            </label>
            <div className="flex flex-wrap gap-2">
              {selectedModel.storageOptions.map((storage, idx) => (
                <button
                  key={storage}
                  onClick={() => { setStorageIndex(idx); setResult(null) }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
                    storageIndex === idx
                      ? 'bg-primary text-white border-primary'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-primary hover:text-primary'
                  }`}
                >
                  {storage}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Condition */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            3. Device condition
          </label>
          <div className="space-y-2">
            {CONDITION_BANDS.map((band) => (
              <label
                key={band.condition}
                className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                  condition === band.condition
                    ? 'border-primary bg-primary/5'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name="condition"
                  value={band.condition}
                  checked={condition === band.condition}
                  onChange={() => { setCondition(band.condition); setResult(null) }}
                  className="mt-0.5 accent-primary"
                />
                <div>
                  <div className="text-sm font-semibold text-gray-800">{band.label}</div>
                  <div className="text-xs text-gray-500">{band.description}</div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Estimate button */}
        <button
          onClick={handleEstimate}
          disabled={!modelSlug || !condition}
          className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary-dark transition-colors text-sm disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Get My Estimate
        </button>

        {/* Result */}
        {result && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center">
            <div className="text-xs text-green-600 font-semibold uppercase tracking-wider mb-1">
              Estimated Offer Range
            </div>
            <div className="text-3xl font-extrabold text-green-700">
              ${result[0].toLocaleString()} – ${result[1].toLocaleString()}
            </div>
            <p className="text-xs text-gray-500 mt-2 mb-4 leading-relaxed">
              Estimates are indicative only. Final cash offer is confirmed in-store after our technician
              inspects your device. Walk in today — no appointment needed.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <a
                href={business.phoneHref}
                className="inline-flex items-center justify-center bg-primary text-white font-bold px-5 py-2.5 rounded-lg hover:bg-primary-dark transition-colors text-sm"
              >
                Call {business.phoneDisplay}
              </a>
              <Link
                href="/sell-my-iphone"
                className="inline-flex items-center justify-center border border-gray-300 text-gray-700 font-semibold px-5 py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-sm"
              >
                Sell My iPhone
              </Link>
            </div>
            <button onClick={handleReset} className="mt-3 text-xs text-gray-400 hover:text-gray-600 underline">
              Start again
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
