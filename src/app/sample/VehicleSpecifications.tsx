import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import {
  Hash,
  Car,
  Truck,
  Scissors,
  Cog,
  Compass,
  Fuel,
  AlertTriangle,
  Users,
  ArrowUpDown,
  ArrowLeftRight,
  Map,
  CalendarDays,
  MapPin,
  Wrench,
  CircleDot,
  ShipWheel,
  Droplet,
  Ruler,
  Building2,
  Building
} from 'lucide-react'

interface VehicleSpecificationsProps {
  vehicle: {
    vin: string;
    make: string;
    model: string;
    year: number;
    style?: string;
    trim?: string;
    transmission?: string;
    wheelDrive?: string;
    fuelType?: string;
    antibrakeSystem?: string;
    standardSeating?: number;
    overallHeight?: string;
    overallWidth?: string;
    highwayMileage?: string;
    madeIn?: string;
    engine?: string;
    cylinders?: number;
    steeringType?: string;
    tankSize?: string;
    tires?: string;
    overallLength?: string;
    cityMileage?: string;
  };
}

const SpecRow: React.FC<{ icon: React.ReactNode; label: string; value: string | number | undefined }> = ({ icon, label, value }) => (
  <div className="flex items-center py-2 border-b mb-8">
    <div className="mr-2">{icon}</div>
    <span className="flex-1 font-semibold">{label}:</span>
    <span>{value || '-'}</span>
  </div>
)

export default function VehicleSpecifications({ vehicle }: VehicleSpecificationsProps) {
  return (
    <Card className="mb-8" id="vehicle-specifications">
      <CardHeader>
        <CardTitle>Vehicle Specifications</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SpecRow icon={<Hash size={24} />} label="VIN" value={vehicle.vin} />
          <SpecRow icon={<Car size={24} />} label="Make" value={vehicle.make} />
          <SpecRow icon={<Truck size={24} />} label="Style" value={vehicle.style} />
          <SpecRow icon={<Scissors size={24} />} label="Trim" value={vehicle.trim} />
          <SpecRow icon={<Cog size={24} />} label="Transmission" value={vehicle.transmission} />
          <SpecRow icon={<Compass size={24} />} label="Wheel drive" value={vehicle.wheelDrive} />
          <SpecRow icon={<Fuel size={24} />} label="Fuel type" value={vehicle.fuelType} />
          <SpecRow icon={<AlertTriangle size={24} />} label="Anti Brake System" value={vehicle.antibrakeSystem} />
          <SpecRow icon={<Users size={24} />} label="Standard Seating" value={vehicle.standardSeating} />
          <SpecRow icon={<ArrowUpDown size={24} />} label="Overall Height" value={vehicle.overallHeight} />
          <SpecRow icon={<ArrowLeftRight size={24} />} label="Overall Width" value={vehicle.overallWidth} />
          <SpecRow icon={<Map size={24} />} label="Highway Mileage" value={vehicle.highwayMileage} />
          <SpecRow icon={<CalendarDays size={24} />} label="Year" value={vehicle.year} />
          <SpecRow icon={<Car size={24} />} label="Model" value={vehicle.model} />
          <SpecRow icon={<MapPin size={24} />} label="Made In" value={vehicle.madeIn} />
          <SpecRow icon={<Wrench size={24} />} label="Engine" value={vehicle.engine} />
          <SpecRow icon={<CircleDot size={24} />} label="Cylinders" value={vehicle.cylinders} />
          <SpecRow icon={<ShipWheel size={24} />} label="Steering Type" value={vehicle.steeringType} />
          <SpecRow icon={<Droplet size={24} />} label="Tank Size" value={vehicle.tankSize} />
          <SpecRow icon={<Ruler size={24} />} label="Tires" value={vehicle.tires} />
          <SpecRow icon={<Building2 size={24} />} label="Overall Length" value={vehicle.overallLength} />
          <SpecRow icon={<Building size={24} />} label="City Mileage" value={vehicle.cityMileage} />
        </div>
      </CardContent>
    </Card>
  )
}