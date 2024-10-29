'use client'

import { useState, useEffect } from 'react'
import VehicleSpecifications from './VehicleSpecifications'
import OwnershipHistory from './OwnershipHistory'
import AverageMilesDriven from './AverageMilesDriven'
import VehicleSummaryGrid from './VehicleSummaryGrid'
import OdometerReading from './OdometerReading'
import TitleHistoryInformation from './TitleHistoryInformation'
import JunkSalvageRecords from './JunkSalvageRecords'
import InsuranceRecords from './InsuranceRecords'
import EmissionSafetyInspection from './EmissionSafetyInspection'
import AccidentDamageHistory from './AccidentDamageHistory'
import LienImpoundRecords from './LienImpoundRecords'
import TheftRecords from './TheftRecords'
import TitleBrandInformation from './title-brand-information'
import BlackBookValue from './black-book-value'
import SaleHistory from './sale-history'
import EbayAuctions from './ebay-auctions'
import AuctionSales from './auction-sales'
import Recalls from './recalls'
import NMVTISDisclaimer from './nmvtis-disclaimer'
import VehicleReportHeader from './vehicle-report-header'
import SampleReportSelector from './sample-report-selector'
import ReportSections from './report-sections'
import { vehicleData } from './vehicle-data'
import CustomButton from '../components/CustomButton'

export default function SampleReport() {
  const [selectedVehicle, setSelectedVehicle] = useState(vehicleData[0])
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(true)

  const handleSelectVehicle = (vehicleId: string) => {
    const vehicle = vehicleData.find(v => v.id === vehicleId)
    if (vehicle) {
      setSelectedVehicle(vehicle)
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024)
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(false)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = () => {
    if (!isDesktop) {
      setIsSidebarOpen(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto my-8 p-4">
        <div className="flex gap-8">
          <div className={`
            ${isDesktop ? 'w-1/4 sticky top-8 self-start' : 'fixed inset-x-0 bottom-0 w-full z-50 bg-white transition-transform duration-300 ease-in-out transform'}
            ${!isDesktop && (isSidebarOpen ? 'translate-y-0' : 'translate-y-full')}
          `}>
            <div className="p-4 pb-16">
              <SampleReportSelector
                vehicleData={vehicleData} 
                onSelectVehicle={handleSelectVehicle} 
              />
              <ReportSections closeSidebar={closeSidebar} />
            </div>
          </div>
          <div className={isDesktop ? 'w-3/4' : 'w-full'}>
            <VehicleReportHeader vehicle={selectedVehicle} />
            <VehicleSummaryGrid vehicle={selectedVehicle} />
            <VehicleSpecifications vehicle={selectedVehicle} />
            <OwnershipHistory owners={selectedVehicle.ownershipHistory} />
            <AverageMilesDriven data={selectedVehicle.averageMilesDriven} />
            <OdometerReading entries={selectedVehicle.odometerReadings} />
            <TitleHistoryInformation 
              currentTitle={selectedVehicle.titleHistory.currentTitle}
              historicalTitles={selectedVehicle.titleHistory.historicalTitles}
            />
            <EmissionSafetyInspection inspections={selectedVehicle.emissionSafetyInspections} />
            <InsuranceRecords />
            <JunkSalvageRecords records={selectedVehicle.junkSalvageRecords} />
            <AccidentDamageHistory damageInfo={selectedVehicle.accidentDamageHistory} />
            <LienImpoundRecords lienRecords={selectedVehicle.lienRecords} />
            <TheftRecords />
            <TitleBrandInformation brands={selectedVehicle.titleBrandInformation} />
            <BlackBookValue tradeIn={selectedVehicle.blackBookValue.tradeIn} retail={selectedVehicle.blackBookValue.retail} />
            <SaleHistory sales={selectedVehicle.saleHistory} />
            <EbayAuctions />
            <AuctionSales sales={selectedVehicle.auctionSales} />
            <Recalls recalls={selectedVehicle.recalls} />
            <NMVTISDisclaimer />
          </div>
        </div>
      </main>
      {!isDesktop && (
        <div className="fixed inset-x-0 bottom-4 z-50 flex justify-center">
          <CustomButton
            text={isSidebarOpen ? "Close Menu" : "Open Menu"}
            onClick={toggleSidebar}
          />
        </div>
      )}
    </div>
  )
}