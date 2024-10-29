import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AlertCircle } from "lucide-react"

interface Owner {
  id: number;
  dateOfPurchase: string;
  lengthOfOwnership: string;
  ownedInStates: string;
  lastReportedOdometer: string;
  usage: string;
}

interface OwnershipHistoryProps {
  owners: Owner[];
}

export default function OwnershipHistory({ owners }: OwnershipHistoryProps) {
  return (
    <Card className="mb-8" id="ownership-history">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">Ownership History</CardTitle>
        <span className="text-sm text-muted-foreground">SOURCE: CHASSISVIN</span>
      </CardHeader>
      <CardContent>
        <div className="bg-red-100 p-2 mb-4 flex items-center">
          <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
          <span className="text-red-700 font-semibold">MULTIPLE OWNERS REPORTED</span>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>OWNER</TableHead>
              <TableHead>DATE OF PURCHASE</TableHead>
              <TableHead>LENGTH OF OWNERSHIP</TableHead>
              <TableHead>OWNED IN STATES</TableHead>
              <TableHead>LAST REPORTED ODOMETER</TableHead>
              <TableHead>USAGE</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {owners.map((owner, index) => (
              <TableRow key={owner.id}>
                <TableCell>Owner {index + 1}</TableCell>
                <TableCell>{owner.dateOfPurchase}</TableCell>
                <TableCell>{owner.lengthOfOwnership}</TableCell>
                <TableCell>{owner.ownedInStates}</TableCell>
                <TableCell>{owner.lastReportedOdometer}</TableCell>
                <TableCell>{owner.usage}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}