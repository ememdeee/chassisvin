import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { HelpCircle } from "lucide-react"

interface SalvageEntry {
  dateObtained: string;
  entity: string;
  location: string;
  contactInfo: string;
  export: string;
  disposition: string;
}

interface JunkSalvageRecordsProps {
  records: SalvageEntry[];
}

export default function JunkSalvageRecords({ records }: JunkSalvageRecordsProps) {
  return (
    <Card className="mb-8" id="junk-salvage-information">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">Junk & Salvage Records</CardTitle>
        <span className="text-sm text-muted-foreground">SOURCE: NMVTIS</span>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-sm">
          If this VIN has a record in the <strong>Junk/Salvage or Insurance information</strong> then the business that submitted the VIN to NMVTIS deemed the vehicle to be either <em>a junk, salvage, or in the case of an insurer, a total loss.</em> The information in the <strong>DISPOSITION</strong> field in the Junk/Salvage section denotes what has happened to the VIN (i.e., vehicle) since it came into the possession of the business.
        </p>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date Obtained</TableHead>
              <TableHead>Entity</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Contact Info</TableHead>
              <TableHead className="text-right">
                Export
                <HelpCircle className="inline-block ml-1 h-4 w-4" />
              </TableHead>
              <TableHead className="text-right">DISPOSITION</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {records.map((record, index) => (
              <TableRow key={index}>
                <TableCell>{record.dateObtained}</TableCell>
                <TableCell className="font-medium">{record.entity}</TableCell>
                <TableCell>{record.location}</TableCell>
                <TableCell>{record.contactInfo}</TableCell>
                <TableCell className="text-right">{record.export}</TableCell>
                <TableCell className="text-right font-medium">{record.disposition}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}