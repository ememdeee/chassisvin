import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

interface VehicleData {
  ownershipSummary: string;
  odometerReading: string;
  titleHistorySummary: string;
  insuranceRecords: string;
  junkSalvage: string;
  accidentDamage: string;
  lienImpound: string;
  titleBrands: string;
  saleHistoryNumber: string;
  recallsNumber: string;
  titleHistory: {
    currentTitle: { issueDate: string; state: string; mileage: string; };
    historicalTitles: { issueDate: string; state: string; mileage: string; }[];
  };
  [key: string]: unknown;
}

interface VehicleSummaryGridProps {
  vehicle: VehicleData;
}

const VehicleSummaryGrid: React.FC<VehicleSummaryGridProps> = ({ vehicle }) => {
  const summaryItems = [
    { title: 'Ownership History', value: vehicle.ownershipSummary },
    { title: 'Odometer Reading', value: vehicle.odometerReading },
    { title: 'Title History', value: vehicle.titleHistorySummary },
    { title: 'Insurance Records', value: vehicle.insuranceRecords },
    { title: 'Junk & Salvage Information', value: vehicle.junkSalvage },
    { title: 'Accident & Damage History', value: vehicle.accidentDamage },
    { title: 'Lien & Impound records', value: vehicle.lienImpound },
    { title: 'Title Brands', value: vehicle.titleBrands },
    { title: 'Sale History', value: vehicle.saleHistoryNumber },
    { title: 'Recalls', value: vehicle.recallsNumber },
  ];

  const renderValue = (value: unknown) => {
    if (typeof value === 'string') {
      return <p>{value}</p>;
    }
    if (Array.isArray(value)) {
      return (
        <ul>
          {value.map((item, index) => (
            <li key={index}>
              Owner {index + 1}: {item.lengthOfOwnership}, {item.lastReportedOdometer}
            </li>
          ))}
        </ul>
      );
    }
    return null;
  };

  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      {summaryItems.map((item, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="text-sm">{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            {renderValue(item.value)}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default VehicleSummaryGrid;