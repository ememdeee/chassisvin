import React from 'react'
import HeroSection from './components/HeroSection'
import InfoSection from './components/InfoSection'
import CarHistorySlider from './components/CarHistorySlider'

export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* Add other sections here */}
      <InfoSection
        title="Why Choose Our Service?"
        content={
          <>
            <p>
              Our service achieved the{' '}
              <span className="text-blue-600 font-semibold">highest performance</span> of{' '}
              <span className="font-semibold">93.89%</span> on the gold-standard benchmark and{' '}
              <span className="font-semibold">85.85%</span> on the brand new{' '}
              <span className="text-blue-600 font-semibold">advanced benchmark</span> test, which
              rigorously measures the accuracy of various services.
            </p>
            <p>
              Not only did we outperform the previous best score by 12 percentage points, we also exceeded the
              score that represents expert-level performance. This means{' '}
              <span className="font-semibold">our accuracy surpasses the top 10% of human experts</span>, on average, in every
              subject/task which was measured.
            </p>
            <p>
              Our service also <span className="text-blue-600 font-semibold">scores the highest*</span> on the reliability benchmark, consistently
              delivering the most accurate and factual results in an instant.
            </p>
          </>
        }
        buttonText="Try Our Service Now"
        buttonHref="/try-service"
      />
      <CarHistorySlider/>
    </main>
  )
}