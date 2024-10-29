import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CheckCircle } from "lucide-react"

interface LienRecord {
  date: string;
  state: string;
  reportedBy: string;
  event: string;
}

interface LienImpoundRecordsProps {
  lienRecords: LienRecord[];
}

export default function LienImpoundRecords({ lienRecords }: LienImpoundRecordsProps) {
  return (
    <Card className="mb-8" id='lien-impound-records'>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">Lien & Impound Records</CardTitle>
        <span className="text-sm text-muted-foreground">SOURCE: CLEARVIN</span>
      </CardHeader>
      <CardContent>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
          <p className="text-sm text-yellow-700">
            Lien and Impounds records are collected from multiple sources to reflect both <strong>historical</strong> and <strong>current title data</strong>. We highly recommend vehicle status verification directly with the state Motor Vehicle Department if any lien records appear in this report.
          </p>
        </div>

        <h4 className="text-lg font-semibold mb-2">Impound Information</h4>
        <div className="flex items-center text-green-600 mb-4">
          <CheckCircle className="h-5 w-5 mr-2" />
          <span>No issues reported</span>
        </div>

        <h4 className="text-lg font-semibold mb-2">Historical Title Lien Records</h4>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>State</TableHead>
              <TableHead>Reported By</TableHead>
              <TableHead className="text-right">Event</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {lienRecords.map((record, index) => (
              <TableRow key={index}>
                <TableCell>{record.date}</TableCell>
                <TableCell>{record.state}</TableCell>
                <TableCell>{record.reportedBy}</TableCell>
                <TableCell className="text-right">{record.event}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}