'use client'
import React, { useState, useRef, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NavItem = ({ children }: { children: React.ReactNode }) => (
  <button className="px-5 py-2.5 text-base font-medium text-gray-700 hover:bg-white hover:shadow-sm rounded-full transition-all duration-200">
    {children}
  </button>
)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <nav className="py-6">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex-1 flex justify-center">
            <div className="hidden md:flex items-center space-x-1 bg-gray-50 rounded-full shadow-inner p-1.5">
              <NavItem>Ask AI</NavItem>
              <NavItem>iAsk Pro</NavItem>
              <NavItem>Summary</NavItem>
              <NavItem>Docs</NavItem>
              <NavItem>Image</NavItem>
              <NavItem>Grammar</NavItem>
            </div>
          </div>
          <div className="md:hidden">
            <button
              ref={buttonRef}
              onClick={toggleMenu}
              className="p-2 rounded-full text-gray-500 bg-gray-50 hover:text-gray-600 hover:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 shadow-sm"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="md:hidden mt-2 absolute right-4 w-48 bg-white rounded-lg shadow-lg py-2 z-10"
        >
          <a href="#" className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-50">Ask AI</a>
          <a href="#" className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-50">iAsk Pro</a>
          <a href="#" className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-50">Summary</a>
          <a href="#" className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-50">Docs</a>
          <a href="#" className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-50">Image</a>
          <a href="#" className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-50">Grammar</a>
          <div className="border-t border-gray-200 my-2"></div>
          <a href="#" className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-50">Sign Up</a>
          <a href="#" className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-50">Log In</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar