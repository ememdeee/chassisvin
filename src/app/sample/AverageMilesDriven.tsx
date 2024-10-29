import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Bar, ComposedChart } from 'recharts'

interface MileageData {
  date: string;
  mileage: number;
  projectedMileage?: number;
}

interface AverageMilesDrivenProps {
  data: MileageData[];
}

export default function AverageMilesDriven({ data }: AverageMilesDrivenProps) {
  return (
    <Card className="mb-8">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">Average Miles Driven</CardTitle>
        <span className="text-sm text-muted-foreground">SOURCE: USDOT</span>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="mileage" fill="#2563eb" />
              <Line type="monotone" dataKey="mileage" stroke="#2563eb" dot={{ fill: '#2563eb', r: 4 }} />
              <Line type="monotone" dataKey="projectedMileage" stroke="#9ca3af" strokeDasharray="5 5" dot={false} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}