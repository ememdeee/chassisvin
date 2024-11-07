import React from 'react'
import { Search, FilePlus, Eye, Check } from 'lucide-react'
import CustomButton from './CustomButton'

export default function VehicleReportSteps() {
  const steps = [
    { title: "Enter the VIN or Search by License Plate", description: "Locate your Vehicle Identification Number (VIN) or Licence plate number and enter it into our search bar.", icon: Search },
    { title: "Choose Your Report", description: "Select the type of report you need. Consider getting a window sticker for easy access to vehicle specifications and features.", icon: FilePlus },
    { title: "Review and Purchase", description: "Review the report preview and complete your purchase.", icon: Eye },
    { title: "Access Your Report", description: "Access your vehicle history report and print it easily via the website or our mobile app.", icon: Check },
  ]

  return (
    <section className="bg-blue-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How to get your Vehicle Reports?</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Getting a vehicle report is a breeze! Just enter the VIN to access car facts by VIN, including accident history and more. Our full vehicle history reports cover everything from specs and usage history to mileage readings, ensuring you have all the necessary information.
          </p>
        </div>

        <div className="relative mb-10">
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-blue-100 md:left-1/2 md:-ml-0.5"></div>

          {steps.map((step, index) => (
            <div 
              key={index}
              className={`relative flex flex-col md:flex-row gap-6 mb-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 md:w-1/2"></div>
              <div className={`w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shrink-0 z-10 mx-auto md:mx-0 ${index === steps.length - 1 ? 'bg-emerald-500' : ''} transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg group`}>
                <step.icon className="w-6 h-6 text-white transition-transform duration-300 ease-in-out group-hover:scale-110" />
              </div>
              <div className="flex-1 md:w-1/2">
                <h3 className="text-xl font-semibold mb-2">{`Step ${index + 1}: ${step.title}`}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <CustomButton href='/vin-decoder' text='Check Vehicle History Now!'/>
        </div>
      </div>
    </section>
  )
}