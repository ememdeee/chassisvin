import React from 'react'
import Image from 'next/image'
import SiteForm from './SiteForm'

interface HeroSectionProps {
  logoUrl?: string
  title?: string
  description?: string
  showForm?: boolean
}

export default function Component({
  logoUrl = "/ChassisVIN.webp",
  title = "VIN Number Lookup",
  description = "Enter your Vehicle Identification Number (VIN) or License Plate to get detailed information about any vehicle.",
  showForm = true
}: HeroSectionProps) {
  return (
    <section className='pt-8 pb-16'>
      <div className="container mx-auto px-4">
        <div className={`text-center ${showForm ? 'mb-12' : 'mb-6'}`}>
          {showForm && (
            <Image
              src={logoUrl}
              alt="Vehicle Lookup Logo"
              className="mx-auto mb-6"
              width={80}
              height={80}
            />
          )}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        {showForm && <SiteForm />}
      </div>
    </section>
  )
}