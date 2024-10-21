import React from 'react'
import Link from 'next/link'

interface CustomButtonProps {
  text: string
  href: string
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, href }) => {
  return (
    <Link 
      href={href} 
      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      {text} <span className="ml-2">→</span>
    </Link>
  )
}

export default CustomButton