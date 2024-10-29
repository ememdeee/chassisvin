import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CheckCircle } from "lucide-react"

interface TitleBrandInformationProps {
  brands: { title: string; reported: boolean }[];
}

export default function TitleBrandInformation({ brands }: TitleBrandInformationProps) {
  const [showAll, setShowAll] = React.useState(false);
  const visibleBrands = showAll ? brands : brands.slice(0, 10);

  return (
    <Card className="mb-8" id='title-brands'>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">Title Brand Information</CardTitle>
        <span className="text-sm text-muted-foreground">SOURCE: NMVTIS</span>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>BRAND CATEGORY</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {visibleBrands.map((brand, index) => (
              <TableRow key={index}>
                <TableCell>{brand.title}</TableCell>
                <TableCell className="text-right">
                  {brand.reported ? (
                    "Reported"
                  ) : (
                    <div className="flex items-center justify-end text-green-600">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      <span>No Brand Reported</span>
                    </div>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {brands.length > 10 && (
          <button
            className="mt-4 text-blue-600 hover:underline"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : `Show More (${brands.length - 10})`}
          </button>
        )}
      </CardContent>
    </Card>
  )
}