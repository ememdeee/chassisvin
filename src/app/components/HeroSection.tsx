import React from 'react'
import Image from 'next/image'
import SiteForm from './SiteForm'

interface HeroSectionProps {
  logoUrl?: string
  title?: string
  description?: string
}

export default function Component({
  logoUrl = "/dummyLogo.webp",
  title = "Chassis VIN",
  description = "Enter your Vehicle Identification Number (VIN) or License Plate to get detailed information about any vehicle."
}: HeroSectionProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Image
            src={logoUrl}
            alt="Vehicle Lookup Logo"
            className="mx-auto mb-6"
            width={100}
            height={100}
          />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        <SiteForm />
      </div>
    </section>
  )
}