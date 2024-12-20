import React from 'react'
import SiteForm from './SiteForm'
import CustomButton from './CustomButton'

interface HeroCta {
  text: string;
  link: string;
}

interface HeroSectionProps {
  logoUrl?: string
  title?: string
  description?: string
  showForm?: boolean
  heroCta?: HeroCta[]
  reportType?: 'VHR' | 'WS'
}

export default function Component({
  // logoUrl = "/ChassisVIN.webp",
  title = "Cars, Motorcycles, Trucks, Vehicle History by VIN/Chassis",
  description = "Discover car history with top alternatives to Carfax. Access comprehensive vehicle history reports, including unique auction and sales images, accident details, title branding, theft records, sales data, outstanding recalls, and much more.",
  showForm = true,
  heroCta = [],
  reportType = 'VHR'
}: HeroSectionProps) {
  return (
    <section className='pt-8 pb-16'>
      <div className="container mx-auto px-4">
        <div className={`text-center ${showForm ? 'mb-12' : 'mb-6'}`}>
          {/* {showForm && (
            <Image
              src={logoUrl}
              alt="Vehicle Lookup Logo"
              className="mx-auto mb-6"
              width={80}
              height={80}
            />
          )} */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        {showForm && <SiteForm reportType={reportType} />}
        {heroCta && heroCta.length > 0 && (
          <div className="flex justify-center mt-6 space-x-4">
            {heroCta.map((cta, index) => (
              <CustomButton key={index} text={cta.text} href={cta.link} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}