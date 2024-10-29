import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface TitleEntry {
  issueDate: string;
  state: string;
  mileage: string;
}

interface TitleHistoryInformationProps {
  currentTitle: TitleEntry;
  historicalTitles: TitleEntry[];
}

export default function TitleHistoryInformation({ currentTitle, historicalTitles }: TitleHistoryInformationProps) {
  return (
    <Card className="mb-8" id="title-history">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">Title History Information</CardTitle>
        <span className="text-sm text-muted-foreground">SOURCE: NMVTIS</span>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Current Title Information</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title Issue Date</TableHead>
                <TableHead>State</TableHead>
                <TableHead className="text-right">Mileage</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>{currentTitle.issueDate}</TableCell>
                <TableCell>{currentTitle.state}</TableCell>
                <TableCell className="text-right">{currentTitle.mileage}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Historical Title Information</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title Issue Date</TableHead>
                <TableHead>State</TableHead>
                <TableHead className="text-right">Mileage</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {historicalTitles.map((title, index) => (
                <TableRow key={index}>
                  <TableCell>{title.issueDate}</TableCell>
                  <TableCell>{title.state}</TableCell>
                  <TableCell className="text-right">{title.mileage}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}