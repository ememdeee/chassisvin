import React from 'react'
import CustomButton from './CustomButton'

interface InfoSectionProps {
  title: string
  content: React.ReactNode
  buttonText: string
  buttonHref: string
}

const InfoSection: React.FC<InfoSectionProps> = ({ title, content, buttonText, buttonHref }) => {
  return (
    <section className="max-w-3xl mx-auto px-4 md:px-0 py-12">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">
          {title}
        </h2>
        <div className="space-y-4">
          {content}
        </div>
        <div className="mt-8 text-center">
          <CustomButton text={buttonText} href={buttonHref} />
        </div>
      </div>
    </section>
  )
}

export default InfoSection