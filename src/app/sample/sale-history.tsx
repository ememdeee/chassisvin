import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface SaleEntry {
  date: string;
  event: string;
  price: string;
}

interface SaleHistoryProps {
  sales: SaleEntry[];
}

export default function SaleHistory({ sales }: SaleHistoryProps) {
  return (
    <Card className="mb-8" id="sale-history">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">Sale History</CardTitle>
        <span className="text-sm text-muted-foreground">SOURCE: CLEARVIN</span>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Event</TableHead>
              <TableHead className="text-right">Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sales.map((sale, index) => (
              <TableRow key={index}>
                <TableCell>{sale.date}</TableCell>
                <TableCell>{sale.event}</TableCell>
                <TableCell className="text-right">{sale.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}