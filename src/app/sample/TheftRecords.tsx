import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function TheftRecords() {
  return (
    <Card className="mb-8" id='theft-records'>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">Theft Records</CardTitle>
        <span className="text-sm text-muted-foreground">SOURCE: NVS</span>
      </CardHeader>
      <CardContent>
        <h4 className="text-lg font-semibold mb-2">Stolen Summary</h4>
        <div className="flex items-center text-green-600">
          <CheckCircle className="h-5 w-5 mr-2" />
          <span>No issues reported</span>
        </div>
      </CardContent>
    </Card>
  )
}