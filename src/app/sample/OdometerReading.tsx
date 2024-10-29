import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AlertCircle } from "lucide-react"

interface OdometerEntry {
  date: string;
  mileage: string;
  dataSource: string;
  warning?: string;
}

interface OdometerReadingProps {
  entries: OdometerEntry[];
}

export default function OdometerReading({ entries }: OdometerReadingProps) {
  return (
    <Card className="mb-8" id="odometer-reading">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">Odometer Reading</CardTitle>
        <span className="text-sm text-muted-foreground">SOURCE: CLEARVIN</span>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Mileage</TableHead>
              <TableHead className="text-right">Data Source</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {entries.map((entry, index) => (
              <TableRow key={index}>
                <TableCell>{entry.date}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    {entry.mileage}
                    {entry.warning && (
                      <div className="ml-2 flex items-center text-red-600">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        <span className="text-xs">{entry.warning}</span>
                      </div>
                    )}
                  </div>
                </TableCell>
                <TableCell className="text-right font-medium">{entry.dataSource}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}