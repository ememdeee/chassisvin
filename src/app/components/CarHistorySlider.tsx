'use client'
import React, { useState, useEffect, useRef } from 'react'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import CustomButton from './CustomButton'

const tabs = [
  { id: 'odometer', title: 'Odometer Check', content: 'Odometer check content...', icon: '👁️' },
  { id: 'ownership', title: 'Ownership History', content: 'Ownership history content...', icon: '🏠' },
  { id: 'photos', title: 'Photos on Sale', content: 'Photos on sale content...', icon: '📸' },
  { id: 'damage', title: 'Damage Check', content: 'Damage check content...', icon: '🔨' },
  { id: 'technical', title: 'Technical Data', content: 'Technical data content...', icon: '🔧' },
  { id: 'stolen', title: 'Stolen VIN Check', content: 'Stolen VIN check content...', icon: '🚨' },
]

const CarHistorySlider: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const startProgress = () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      intervalRef.current = setInterval(() => {
        if (!isPaused) {
          setProgress((prevProgress) => {
            if (prevProgress >= 100) {
              setActiveTab((prevTab) => (prevTab + 1) % tabs.length)
              return 0
            }
            return prevProgress + 0.5
          })
        }
      }, 50)
    }

    startProgress()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [activeTab, isPaused])

  const handleTabClick = (index: number) => {
    setActiveTab(index)
    setProgress(0)
  }

  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  return (
    <section className='bg-blue-50'>
      <div className="max-w-6xl mx-auto px-4 py-12" ref={containerRef}>
        <h2 className="text-3xl font-bold mb-4">Always Check the History of a Car Before Buying It</h2>
        <p className="text-gray-600 mb-6">Uncover comprehensive insights with an ChassisVIN Vehicle History Report</p>
        
        <div className="overflow-x-auto">
          <div className={`flex ${isMobile ? 'flex-wrap gap-2' : 'space-x-4'} pb-2 relative`}>
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                className={`px-3 py-2 text-sm md:text-base font-medium transition-colors duration-200 whitespace-nowrap
                  ${isMobile ? 'rounded-full border ' : ''}
                  ${index === activeTab
                    ? isMobile ? 'bg-blue-500 text-white' : 'text-blue-500 border-b-2 border-blue-500'
                    : isMobile ? 'border-gray-300 text-gray-500' : 'text-gray-500 hover:text-gray-700'
                  }`}
                onClick={() => handleTabClick(index)}
              >
                {isMobile && <span className="mr-1">{tab.icon}</span>}
                {tab.title}
              </button>
            ))}
          </div>
        </div>
        <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-3 mb-4">
              <div
                className="h-full bg-blue-500 transition-all duration-50"
                style={{ width: `${progress}%` }}
              ></div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 mb-4">
          <div className="md:w-1/2">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Car History Visualization"
              width={400}
              height={300}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
            <div className="pt-4">
              <div className="text-4xl mb-4">{tabs[activeTab].icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{tabs[activeTab].title}</h3>
              <p className="mb-6">{tabs[activeTab].content}</p>
              <CustomButton href='#' text='Check Your Car'/>
            </div>
          </div>
        </div>
        
        {/* New blue rectangular element with mobile responsiveness */}
        <div className="mt-8 p-4 sm:p-6 border-2 border-blue-500 rounded-lg bg-blue-50/25">
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-4 space-y-4 sm:space-y-0">
            <div className="flex-shrink-0">
              <Image
                src="/placeholder.svg?height=50&width=50"
                alt="NMVTIS Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-lg sm:text-xl font-semibold text-blue-700 mb-2 sm:mb-3">Official NMVTIS Source</h4>
              <p className="text-sm sm:text-base text-gray-700">
                ChassisVIN is an approved NMVTIS data provider. NMVTIS is a national database designed to protect consumers from fraud and unsafe vehicles, to prevent stolen vehicles from being resold, and to provide users with accurate and complete vehicle information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CarHistorySlider