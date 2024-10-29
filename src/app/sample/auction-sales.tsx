import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface AuctionSale {
  date: string
  name: string
  primaryDamage: string
  docType: string
  condition: string
  acv: string
  seller: string
  location: string
  secondaryDamage: string
  titleIssueDate: string
  salePrice: string
  estRepairCosts: string
  salesDate: string
  images: string[]
}

interface AuctionSalesProps {
  sales: AuctionSale[]
}

export default function AuctionSales({ sales }: AuctionSalesProps) {
  return (
    <Card className="mb-8" id="auction">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">Auction Sales</CardTitle>
        <span className="text-sm text-muted-foreground">SOURCE: Salvage Auction</span>
      </CardHeader>
      <CardContent>
        {sales.map((sale, index) => (
          <div key={index} className="mb-8 last:mb-0">
            <p className="font-semibold mb-4">PUT UP FOR SALE {sale.date}</p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <DataItem label="Name Of The Auction" value={sale.name} />
                <DataItem label="Primary Damage" value={sale.primaryDamage} />
                <DataItem label="Doc Type" value={sale.docType} />
                <DataItem label="Condition" value={sale.condition} />
                <DataItem label="ACV" value={sale.acv} />
                <DataItem label="Seller" value={sale.seller} />
              </div>
              <div>
                <DataItem label="Location" value={sale.location} />
                <DataItem label="Secondary Damage" value={sale.secondaryDamage} />
                <DataItem label="Title Issue Date" value={sale.titleIssueDate} />
                <DataItem label="Sale Price" value={sale.salePrice} />
                <DataItem label="Est. Repair Costs" value={sale.estRepairCosts} />
                <DataItem label="Sales Date" value={sale.salesDate} />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Auction Images</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {sale.images.map((image, imgIndex) => (
                  <div key={imgIndex} className="aspect-square relative">
                    <Image
                      src={image}
                      alt={`Auction image ${imgIndex + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

function DataItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="mb-2">
      <span className="font-medium">{label}:</span> <span>{value}</span>
    </div>
  )
}