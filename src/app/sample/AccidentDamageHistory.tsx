import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"
import Image from 'next/image'

interface DamageInfo {
  date: string;
  majorImpact: string[];
  airbags: string;
  repairCost: string;
}

interface AccidentDamageHistoryProps {
  damageInfo: DamageInfo;
}

export default function AccidentDamageHistory({ damageInfo }: AccidentDamageHistoryProps) {
  return (
    <Card className="mb-8" id='accident-damage-history'>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">Accident & Damage History</CardTitle>
        <span className="text-sm text-muted-foreground">SOURCE: Salvage Auction</span>
      </CardHeader>
      <CardContent>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertTriangle className="h-5 w-5 text-yellow-400" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                Not all damage-related events are currently reported to ClearVin, the report may not contain minor damages and scratches or undocumented vehicle issues. We highly recommend getting an independent vehicle inspection to ensure the vehicle does not have hidden damage before making a decision to purchase a vehicle.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative flex justify-center items-center">
            <Image
              src="https://www.clearvin.com/img/damage-viewer-placeholder.png"
              alt="Vehicle damage diagram"
              width={300}
              height={225}
              className="object-contain"
            />
          </div>
          
          <div>
            <dl className="grid grid-cols-1 gap-2">
              <DataItem label="Date" value={damageInfo.date} />
              <DataItem 
                label="Major Impact" 
                value={
                  damageInfo.majorImpact.length > 0 
                    ? <div className="flex flex-wrap gap-2">
                        {damageInfo.majorImpact.map((impact, index) => (
                          <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            {impact}
                          </span>
                        ))}
                      </div>
                    : 'No major impact reported'
                }
              />
              <DataItem label="Airbags" value={damageInfo.airbags} />
              <DataItem label="Repair Cost" value={damageInfo.repairCost} />
            </dl>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

const DataItem: React.FC<{ label: string; value: React.ReactNode }> = ({ label, value }) => (
  <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 rounded-md">
    <dt className="text-sm font-medium text-gray-500">{label}</dt>
    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
      {value || <span className="text-gray-400">Not available</span>}
    </dd>
  </div>
)