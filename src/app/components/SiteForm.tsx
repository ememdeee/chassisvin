'use client'

import React, { useState } from 'react'
import { ChevronDown, Info } from 'lucide-react'
import Link from 'next/link'

interface SiteFormProps {
  forceMobileLayout?: boolean
}

const SiteForm: React.FC<SiteFormProps> = ({ forceMobileLayout = false }) => {
  const [inputType, setInputType] = useState<'VIN' | 'LP'>('VIN')
  const [vinInput, setVinInput] = useState('')
  const [plateInput, setPlateInput] = useState('')
  const [stateInput, setStateInput] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [showVinTooltip, setShowVinTooltip] = useState(false)

  const states = [
    { value: 'al', label: 'Alabama' },
    { value: 'ak', label: 'Alaska' },
    { value: 'az', label: 'Arizona' },
    // ... add all other states here
    { value: 'wy', label: 'Wyoming' },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (inputType === 'VIN') {
      if (vinInput.length < 5 || vinInput.length > 17) {
        setError('Please ensure that your VIN is in proper format. 5 - 17 digits')
        return
      }
      // Process VIN submission
    } else {
      if (!plateInput) {
        setError('The plate field is required.')
        return
      }
      if (!stateInput) {
        setError('The state field is required.')
        return
      }
      // Process License Plate submission
    }

    // If no errors, proceed with form submission
    console.log('Form submitted:', { inputType, vinInput, plateInput, stateInput })
  }

  const mobileLayout = forceMobileLayout || 'md'

  return (
    <div className={`w-full ${forceMobileLayout ? '' : 'max-w-3xl mx-auto'}`}>
      <div className="flex justify-start mb-4 space-x-2">
        <button
          onClick={() => setInputType('VIN')}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            inputType === 'VIN'
              ? 'bg-black text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          by VIN
        </button>
        <button
          onClick={() => setInputType('LP')}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            inputType === 'LP'
              ? 'bg-black text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          by US License Plate
        </button>
      </div>
      <form onSubmit={handleSubmit} className="relative">
        <div className={`bg-white ${mobileLayout === true ? 'rounded-3xl' : 'md:rounded-full rounded-3xl'} shadow-lg border-2 border-blue-200 ${mobileLayout === true ? 'p-0' : 'md:p-2'} ${mobileLayout === true ? '' : 'md:flex md:items-center'}`}>
          {inputType === 'VIN' ? (
            <input
              type="text"
              placeholder="Enter VIN Number"
              value={vinInput}
              onChange={(e) => setVinInput(e.target.value)}
              className={`w-full px-6 py-4 text-lg ${mobileLayout === true ? 'rounded-3xl' : 'rounded-3xl md:rounded-full'} focus:outline-none`}
            />
          ) : (
            <div className={`w-full ${mobileLayout === true ? '' : 'md:flex md:items-center'}`}>
              <input
                type="text"
                placeholder="License Plate"
                value={plateInput}
                onChange={(e) => setPlateInput(e.target.value)}
                className={`w-full ${mobileLayout === true ? '' : 'md:w-1/2'} px-6 py-4 text-lg ${mobileLayout === true ? 'rounded-t-3xl rounded-b-none' : 'rounded-t-3xl rounded-b-none md:rounded-l-full'} focus:outline-none border-b ${mobileLayout === true ? '' : 'md:border-b-0 md:border-r'} border-gray-200`}
              />
              <div className={`relative w-full ${mobileLayout === true ? '' : 'md:w-1/2'}`}>
                <select
                  value={stateInput}
                  onChange={(e) => setStateInput(e.target.value)}
                  className={`w-full px-6 py-4 text-lg appearance-none focus:outline-none ${mobileLayout === true ? 'rounded-3xl' : 'rounded-3xl md:rounded-r-full'}`}
                >
                  <option value="" disabled>State</option>
                  {states.map((state) => (
                    <option key={state.value} value={state.value}>{state.label}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-6 flex items-center px-2 text-gray-700">
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
            </div>
          )}
        </div>
        <button
          type="submit"
          className={`w-full ${mobileLayout === true ? '' : 'md:w-auto md:absolute md:right-2 md:top-1/2 md:transform md:-translate-y-1/2'} bg-blue-500 text-white px-6 py-4 rounded-3xl ${mobileLayout === true ? '' : 'md:rounded-full'} hover:bg-blue-600 transition-colors duration-200 shadow-md mt-2 ${mobileLayout === true ? '' : 'md:mt-0'} min-w-[140px] whitespace-nowrap`}
        >
          Check {inputType === 'VIN' ? 'VIN' : 'Plate'}
        </button>
      </form>
      {error && (
        <div className="mt-2 text-red-500 text-sm">
          {error}
        </div>
      )}
      <div className="mt-2 text-sm text-gray-600 flex flex-wrap items-center">
        <div 
          className="relative inline-block cursor-pointer"
          onMouseEnter={() => setShowVinTooltip(true)}
          onMouseLeave={() => setShowVinTooltip(false)}
        >
          <span className="flex items-center">
            Where to find the VIN? <Info className="ml-1 h-4 w-4" />
          </span>
          {showVinTooltip && (
            <div className="absolute z-10 w-64 p-4 mt-2 bg-white rounded-lg shadow-xl border border-gray-200">
              <h3 className="font-bold mb-2">Looking for the VIN?</h3>
              <p>Here is where you&apos;ll find it:</p>
              <ul className="list-disc list-inside mt-2">
                <li>On the driver&apos;s side dashboard near the windshield</li>
                <li>Inside the driver&apos;s side door near the latch</li>
                <li>On the owner&apos;s insurance card or other docs</li>
              </ul>
            </div>
          )}
        </div>
        <span className="mx-2">•</span>
        <span>No VIN? Get our reports</span>
        <span className="mx-2">•</span>
        <Link href="/sample" className="text-blue-500 hover:text-blue-600 transition-colors duration-200">
          View our sample report
        </Link>
      </div>
    </div>
  )
}

export default SiteForm