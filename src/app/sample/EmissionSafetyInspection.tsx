import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface InspectionEntry {
  date: string;
  location: string;
  dataSource: string;
  result: string;
}

interface EmissionSafetyInspectionProps {
  inspections: InspectionEntry[];
}

export default function EmissionSafetyInspection({ inspections }: EmissionSafetyInspectionProps) {
  return (
    <Card className="mb-8" id="emission-safety-inspection">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">Emission & Safety Inspection</CardTitle>
        <span className="text-sm text-muted-foreground">SOURCE: CLEARVIN</span>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Data Source</TableHead>
              <TableHead className="text-right">Result</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inspections.map((inspection, index) => (
              <TableRow key={index}>
                <TableCell>{inspection.date}</TableCell>
                <TableCell className="font-medium">{inspection.location}</TableCell>
                <TableCell className="font-medium">{inspection.dataSource}</TableCell>
                <TableCell className="text-right font-medium">{inspection.result}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}