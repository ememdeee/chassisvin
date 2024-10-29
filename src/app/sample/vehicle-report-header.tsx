import React from 'react'
import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import CustomButton from '../components/CustomButton'

interface VehicleData {
  id: string
  year: number
  make: string
  model: string
  vin: string
  reportId: string
  dateGenerated: string
  rating: number
  auctionSales: {
    images: string[]
  }[]
  // Add other properties as needed
}

interface VehicleReportHeaderProps {
  vehicle: VehicleData
}

const getRatingColor = (rating: number) => {
  if (rating >= 4.5) return 'text-green-600'
  if (rating >= 3.5) return 'text-lime-600'
  if (rating >= 2.5) return 'text-yellow-600'
  if (rating >= 1.5) return 'text-orange-600'
  return 'text-red-600'
}

const getRatingLabel = (rating: number) => {
  if (rating >= 4.5) return 'Excellent'
  if (rating >= 3.5) return 'Good'
  if (rating >= 2.5) return 'Average'
  if (rating >= 1.5) return 'Fair'
  return 'Poor'
}

export default function VehicleReportHeader({ vehicle }: VehicleReportHeaderProps) {
  const vehicleImage = vehicle.auctionSales[0]?.images[0] || "/placeholder.svg"
  const ratingColor = getRatingColor(vehicle.rating)
  const ratingLabel = getRatingLabel(vehicle.rating)
  const ratingPercentage = (vehicle.rating / 5) * 100

  return (
    <Card className="mb-8" id='report-summary'>
      <CardHeader className="flex flex-row justify-between items-center">
        <div>
          <CardTitle className="text-3xl">Vehicle History Report For</CardTitle>
          <p className="text-2xl font-semibold mt-2">VIN# {vehicle.vin}</p>
        </div>
        <Image src="/placeholder.svg" alt="ClearVin Logo" width={150} height={40} />
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <Image 
              src={vehicleImage}
              alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`} 
              width={400} 
              height={300} 
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
              <h2 className="text-2xl font-semibold mb-3">{vehicle.year} {vehicle.make} {vehicle.model}</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Report ID</p>
                  <p className="font-medium">{vehicle.reportId}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Date Generated</p>
                  <p className="font-medium">{vehicle.dateGenerated}</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">ClearVin Vehicle Rating</h3>
              <div className="flex items-center justify-between mb-2">
                <span className={`text-2xl font-bold ${ratingColor}`}>{ratingLabel}</span>
                <span className="text-3xl font-bold">{vehicle.rating}/5</span>
              </div>
              <Progress value={ratingPercentage} className="h-2 w-full" />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>Poor</span>
                <span>Excellent</span>
              </div>
            </div>
            <div className="mt-6 space-y-2 md:space-y-0 space-x-4">
              <CustomButton
                text="Download PDF" 
                onClick={() => alert('PDF download initiated')} 
              />
              <CustomButton 
                text="Print Report" 
                onClick={() => alert('Print dialog opened')} 
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}