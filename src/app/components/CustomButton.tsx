import React from 'react'
import Link from 'next/link'
import Script from 'next/script'

interface CustomButtonProps {
  text: string
  href?: string
  onClick?: () => void
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, href, onClick }) => {
  const className = "inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"

  if (href === '#') {
    return (
      <>
        <button 
          type="button"
          className={className}
          data-scroll-top
        >
          {text} <span className="ml-2">→</span>
        </button>
        <Script id="scroll-top-script" strategy="afterInteractive">
          {`
            document.addEventListener('click', function(e) {
              if (e.target && e.target.hasAttribute('data-scroll-top')) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            });
          `}
        </Script>
      </>
    )
  }

  if (href && href !== '#') {
    const shouldOpenNewTab = href.includes('.');
    return (
      <Link 
        href={href} 
        className={className}
        {...(shouldOpenNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {text} <span className="ml-2">→</span>
      </Link>
    )
  }

  return (
    <button 
      type="button"
      onClick={onClick}
      className={className}
    >
      {text} <span className="ml-2">→</span>
    </button>
  )
}

export default CustomButton