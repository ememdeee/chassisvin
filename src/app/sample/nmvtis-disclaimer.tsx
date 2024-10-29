import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function NMVTISDisclaimer() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">NMVTIS Consumer Access Product Disclaimer</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-center mb-6">
          <Image
            src="https://www.clearvin.com/img/nmvtis_logo_for_white.png"
            alt="NMVTIS logo"
            width={256}
            height={115}
          />
        </div>
        <p>
          The National Motor Vehicle Title Information System (NMVTIS) is an electronic system that contains information on certain automobiles titled in the United States. NMVTIS is intended to serve as a reliable source of title and{' '}
          <Link href="https://vehiclehistory.bja.ojp.gov/nmvtis_glossary" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            brand
          </Link>{' '}
          history for automobiles, but it does not contain detailed information regarding a vehicle's repair history.
        </p>
        <p>
          All states, insurance companies, and junk and salvage yards are required by federal law to regularly report information to NMVTIS. However, NMVTIS does not contain information on all motor vehicles in the United States because{' '}
          <Link href="https://vehiclehistory.bja.ojp.gov/nmvtis_states" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            some states
          </Link>{' '}
          are not yet providing their vehicle data to the system. Currently, the data provided to NMVTIS by states is provided in a variety of time frames; while some states report and update NMVTIS data in "real-time" (as title transactions occur), other states send updates less frequently, such as once every 24 hours or within a period of days.
        </p>
        <p>
          Information on previous, significant vehicle damage may not be included in the system if the vehicle was never determined by an insurance company (or other appropriate entity) to be a "total loss" or branded by a state titling agency. Conversely, an insurance carrier may be required to report a "total loss" even if the vehicle's titling-state has not determined the vehicle to be "salvage" or "junk."
        </p>
        <p>
          A vehicle history report is NOT a substitute for an independent vehicle inspection. Before making a decision to purchase a vehicle, consumers are <strong>strongly encouraged to also obtain an independent vehicle inspection</strong> to ensure the vehicle does not have hidden damage. The{' '}
          <Link href="https://vehiclehistory.bja.ojp.gov/nmvtis_vehiclehistory" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Approved NMVTIS Data Providers
          </Link>{' '}
          (look for the NMVTIS logo) can include vehicle condition data from sources other than NMVTIS.
        </p>
        <p>NMVTIS data <strong>INCLUDES</strong> (as available by those entities required to report to the System):</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Information from{' '}
            <Link href="https://vehiclehistory.bja.ojp.gov/nmvtis_states" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              participating
            </Link>{' '}
            state motor vehicle titling agencies.
          </li>
          <li>
            Information on automobiles, buses, trucks, motorcycles, recreational vehicles, motor homes, and truck tractors. NMVTIS may not currently include commercial vehicles if those vehicles are not included in a state's primary database for title records (in some states, those vehicles are managed by a separate state agency), although these records may be added at a later time.
          </li>
          <li>
            Information on "brands" applied to vehicles provided by participating state motor vehicle titling agencies. Brand types and definitions vary by state, but may provide useful information about the condition or prior use of the vehicle.
          </li>
          <li>Most recent odometer reading in the state's title record.</li>
          <li>
            Information from insurance companies, and auto recyclers, including junk and salvage yards, that is required by law to be reported to the system, beginning March 31, 2009. This information will include if the vehicle was determined to be a "total loss" by an insurance carrier.
          </li>
          <li>
            Information from junk and salvage yards receiving a "cash for clunker" vehicle traded-in under the Consumer Assistance to Recycle and Save Act of 2009 (CARS) Program.
          </li>
        </ul>
        <p>
          Consumers are advised to visit{' '}
          <Link href="https://vehiclehistory.bja.ojp.gov" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            vehiclehistory.bja.ojp.gov
          </Link>{' '}
          for details on how to interpret the information in the system and understand the meaning of various labels applied to vehicles by the participating state motor vehicle titling agencies.
        </p>
      </CardContent>
    </Card>
  )
}