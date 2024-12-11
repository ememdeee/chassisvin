import React from 'react'
import HeroSection from './components/HeroSection'
import InfoSection from './components/InfoSection'
import CarHistorySlider from './components/CarHistorySlider'
import Testimonials from './components/Testimonials'
import CustomerSupport from './components/CustomerSupport'
import OfferBanner from './components/OfferBanner'
import FAQBasic from './components/FAQBasic'
import VehicleReportSteps from './components/VehicleReportSteps'
import WhatSetsUsApart from './components/WhatSetsUsApart'
import ServiceList from './components/ServiceList'
import UrlList from './components/url-list'
import CheckOurBlog from './components/CheckOurBlog'

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
    {
      question: "What details are included in a vehicle history report?",
      answer: "A vehicle history report offers key information like accident records, title status, past ownership, service history, odometer readings, theft records, recall updates, and more. This data allows potential buyers to evaluate a vehicle's condition and make informed choices."
    },
    {
      question: "How can a vehicle report be beneficial?",
      answer: "A vehicle report is packed with essential data on a car's history, including accident history, title details, theft records, and service history. This comprehensive insight can help you make confident decisions when buying or selling, ensuring you know a vehicle's background."
    },
    {
      question: "Can I look up a car's accident history?",
      answer: "Yes, you can check a vehicle's accident history by using its VIN with a car history lookup tool. You can also access accident records using a license plate lookup. These tools reveal title issues, accident reports, and other hidden records to boost buyer confidence."
    },
    {
      question: "Is there a free vehicle history report available?",
      answer: "While some sites provide free vehicle specs, a full history report, including accidents and ownership details, typically requires a paid service. Our reports offer all the critical data you need to make well-informed vehicle decisions."
    },
    {
      question: "How can I access vehicle details with a VIN?",
      answer: "To access detailed vehicle history, simply enter the VIN into our tool. You'll receive a complete report covering ownership history, mileage, accident history, and more, giving you a full view of the car's past."
    },
    // Add more FAQ items as needed
  ]

  return (
    <main>
      <HeroSection />
      {/* Add other sections here */}
      <InfoSection />
      <CarHistorySlider/>
      <VehicleReportSteps/>
      <WhatSetsUsApart/>
      <Testimonials/>
      <CustomerSupport/>
      <ServiceList/>
      <UrlList dataSource='makesList' urlPrefix='vin-decoder' />
      <UrlList dataSource='statesList' urlPrefix='license-plate-lookup' />
      <OfferBanner/>
      <FAQBasic title="Frequently Asked Questions" items={faqItems} />
      <CheckOurBlog />
    </main>
  )
}