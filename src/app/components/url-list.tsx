'use client'

import React from 'react'
import Link from 'next/link'

const makesList = [
  'Acura', 'Alfa Romeo', 'Aston Martin', 'Audi', 'Bentley', 'BMW', 'Buick',
  'Cadillac', 'Chevrolet', 'Chrysler', 'Daewoo', 'Datsun', 'Dodge', 'Ducati',
  'Eagle', 'Ferrari', 'FIAT', 'Forest River', 'Ford', 'Freightliner', 'Geo',
  'GMC', 'Harley-Davidson', 'Honda', 'HUMMER', 'Hyundai', 'Infiniti',
  'International', 'Isuzu', 'Jaguar', 'Jayco', 'Jeep', 'Kawasaki', 'Kenworth',
  'Kia', 'KTM', 'Lamborghini', 'Land Rover', 'Lexus', 'Lincoln', 'Lotus', 'Mack',
  'Maserati', 'Maybach', 'Mazda', 'McLaren', 'Mercedes-Benz', 'Mercury', 'MINI',
  'Mitsubishi', 'Nissan', 'Oldsmobile', 'Opel', 'Peterbilt', 'Peugeot',
  'Plymouth', 'Polaris', 'Pontiac', 'Porsche', 'RAM', 'Rolls-Royce', 'Saab',
  'Saturn', 'Smart', 'Subaru', 'Suzuki', 'Tesla', 'Triumph', 'Toyota',
  'Volkswagen', 'Volvo', 'Volvo Truck', 'Yamaha'
]

interface UrlListProps {
  urlPrefix: string;
}

const UrlList: React.FC<UrlListProps> = ({ urlPrefix }) => {
  const columns = React.useMemo(() => {
    const itemsPerColumnLarge = Math.ceil(makesList.length / 4)
    const itemsPerColumnMedium = Math.ceil(makesList.length / 3)
    
    const largeColumns = Array.from({ length: 4 }, (_, i) => 
      makesList.slice(i * itemsPerColumnLarge, (i + 1) * itemsPerColumnLarge)
    )
    
    const mediumColumns = Array.from({ length: 3 }, (_, i) => 
      makesList.slice(i * itemsPerColumnMedium, (i + 1) * itemsPerColumnMedium)
    )

    return { largeColumns, mediumColumns }
  }, [])

  return (
    <div className="pb-8">
      <div className="hidden lg:grid lg:grid-cols-4 gap-6">
        {columns.largeColumns.map((column, colIndex) => (
          <div key={colIndex}>
            <ul className="space-y-2">
              {column.map((make) => (
                <li key={make}>
                  <Link 
                    href={`${urlPrefix}${make.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-blue-500 hover:underline text-sm"
                  >
                    {make}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 lg:hidden gap-6">
        {columns.mediumColumns.map((column, colIndex) => (
          <div key={colIndex}>
            <ul className="space-y-2">
              {column.map((make) => (
                <li key={make}>
                  <Link 
                    href={`${urlPrefix}${make.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-blue-500 hover:underline text-sm"
                  >
                    {make}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UrlList