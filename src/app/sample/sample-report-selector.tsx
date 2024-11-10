import React from 'react'
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Vehicle {
  id: string
  year: number
  make: string
  model: string
}

interface SampleReportSelectorProps {
  vehicleData: Vehicle[]
  onSelectVehicle: (vehicleId: string) => void
}

export default function SampleReportSelector({ vehicleData, onSelectVehicle }: SampleReportSelectorProps) {
  return (
    <Card className="mb-4">
      <CardHeader>
        <span className="text-base font-semibold leading-none tracking-tight">Select Sample Report</span>
      </CardHeader>
      <CardContent>
        <Select defaultValue={vehicleData[0].id} onValueChange={(value) => onSelectVehicle(value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select a vehicle" />
          </SelectTrigger>
          <SelectContent>
            {vehicleData.map((vehicle) => (
              <SelectItem key={vehicle.id} value={vehicle.id}>
                {vehicle.year} {vehicle.make} {vehicle.model}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  )
}