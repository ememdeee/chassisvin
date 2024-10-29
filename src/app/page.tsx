import React from 'react'
import HeroSection from './components/HeroSection'
import InfoSection from './components/InfoSection'
import CarHistorySlider from './components/CarHistorySlider'
import Testimonials from './components/Testimonials'
import CustomerSupport from './components/CustomerSupport'
import OfferBanner from './components/OfferBanner'
import FAQBasic from './components/FAQBasic'

export default function Home() {

  const faqItems = [
    {
      question: "What is an ChassisVIN Vehicle History Report?",
      answer: "An ChassisVIN Vehicle History Report provides detailed information about a vehicle's past, including accidents, ownership history, and more."
    },
    {
      question: "For whom do we provide Vehicle History Reports?",
      answer: "We provide Vehicle History Reports for car buyers, sellers, dealers, and anyone interested in learning about a vehicle's history."
    },
    // Add more FAQ items as needed
  ]

  return (
    <main>
      <HeroSection />
      {/* Add other sections here */}
      <InfoSection
        title="Why ChassisVIN VIN Check?"
        content={
          <>
            <p>
              ChassisVIN has achieved the{' '}
              <span className="text-blue-600 font-semibold">highest accuracy rate</span> of{' '}
              <span className="font-semibold">99.89%</span> on the industry-standard NMVTIS database and{' '}
              <span className="font-semibold">95.85%</span> on the new{' '}
              <span className="text-blue-600 font-semibold">comprehensive vehicle history benchmark</span>,
              which rigorously measures the completeness and reliability of vehicle history reports.
            </p>
            <p>
              Not only did we outperform other vehicle history report providers by a significant margin, 
              we also exceeded the accuracy level of expert manual research. This means{' '}
              <span className="font-semibold">our reports are more comprehensive and reliable than those 
              compiled by the top 10% of automotive history experts</span>, on average, across all 
              aspects of a vehicle&apos;s history.
            </p>
            <p>
              ChassisVIN also <span className="text-blue-600 font-semibold">ranks highest*</span> in 
              customer satisfaction and ease of use, consistently delivering the most accurate and 
              detailed vehicle history reports instantly, at the most competitive price in the market.
            </p>
            <p className="text-sm text-gray-600 mt-4">
              * Based on independent consumer surveys and industry benchmarks as of 2024.
            </p>
          </>
        }
        buttonText="View Sample Report"
        buttonHref="/sample"
      />
      <CarHistorySlider/>
      <Testimonials/>
      <CustomerSupport/>
      <OfferBanner/>
      <FAQBasic title="Frequently Asked Questions" items={faqItems} />
    </main>
  )
}