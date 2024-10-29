import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

interface ValueData {
  roughBase: string;
  averageBase: string;
  cleanBase: string;
}

interface BlackBookValueProps {
  tradeIn: ValueData;
  retail: ValueData;
}

export default function BlackBookValue({ tradeIn, retail }: BlackBookValueProps) {
  return (
    <Card className="mb-8">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">Black Book Value Information</CardTitle>
        <span className="text-sm text-muted-foreground">SOURCE: Black Book</span>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Trade-in values</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Rough Base</span>
                <span className="font-semibold">{tradeIn.roughBase}</span>
              </div>
              <div className="flex justify-between">
                <span>Average Base</span>
                <span className="font-semibold">{tradeIn.averageBase}</span>
              </div>
              <div className="flex justify-between">
                <span>Clean Base</span>
                <span className="font-semibold">{tradeIn.cleanBase}</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Retail values</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Rough Base</span>
                <span className="font-semibold">{retail.roughBase}</span>
              </div>
              <div className="flex justify-between">
                <span>Average Base</span>
                <span className="font-semibold">{retail.averageBase}</span>
              </div>
              <div className="flex justify-between">
                <span>Clean Base</span>
                <span className="font-semibold">{retail.cleanBase}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}