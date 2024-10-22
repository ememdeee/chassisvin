import React from 'react'
import SiteForm from './SiteForm'
import Image from 'next/image'
import Link from 'next/link'

export default function SaveBanner() {
  return (
    <section 
      className="relative bg-blue-50 md:bg-transparent py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: "url('https://epicvin.com/img2/bunners-bg/webp/save-banner-bg@1x.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="relative max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Save Thousands of Dollars</h2>
        <p className="text-lg text-gray-600 mb-6">Learn everything there is to know about your next car.</p>
        
        <div className="max-w-xl mx-auto">
          <SiteForm />
        </div>

        <div className="mt-4 flex flex-col items-center text-sm text-gray-600">
          <div className="flex items-center mb-2">
            <button className="text-blue-500 hover:text-blue-600 transition-colors duration-200 mr-1">Where</button>
            <span>to find the VIN?</span>
          </div>
          <div>
            <span>No VIN?</span>{' '}
            <Link href="/price" className="text-blue-500 hover:text-blue-600 transition-colors duration-200">
              Get EpicVIN reports
            </Link>
          </div>
        </div>

        <div className="mt-6 flex justify-center items-center space-x-4">
          <Image src="/img2/vin-check/png/guaranteed-safe-checkout.png" alt="Safe checkout guaranteed" width={56} height={28} />
          <Image src="/img2/vin-check/png/niada.png" alt="Niada logo" width={41} height={25} />
          <Image src="/img2/vin-check/png/blockchain.png" alt="Blockchain confirmed data" width={70} height={21} />
        </div>
      </div>
    </section>
  )
}