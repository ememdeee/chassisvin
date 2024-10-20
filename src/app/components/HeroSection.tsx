import React from 'react'
import SiteForm from './SiteForm'

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <img
            src="/placeholder.svg?height=100&width=100"
            alt="Vehicle Lookup Logo"
            className="mx-auto mb-6"
            width={100}
            height={100}
          />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Vehicle Information Lookup
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Enter your Vehicle Identification Number (VIN) or License Plate to get detailed information about any vehicle.
          </p>
        </div>
        <SiteForm />
      </div>
    </section>
  )
}

export default HeroSection