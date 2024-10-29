'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavItemProps = {
  href: string
  children: React.ReactNode
  isActive: boolean
}

const NavItem = ({ href, children, isActive }: NavItemProps) => (
  <Link href={href} passHref>
    <button
      className={`px-5 py-2.5 text-base font-medium text-gray-700 rounded-full transition-all duration-200 ${
        isActive ? 'bg-white shadow-sm' : 'hover:bg-white hover:shadow-sm'
      }`}
    >
      {children}
    </button>
  </Link>
)

type NavLink = {
  name: string
  href: string
}

const navLinks: NavLink[] = [
  { name: 'Check VIN', href: '/' },
  { name: 'Vin Decoder', href: '/vin-decoder' },
  { name: 'Window Sticker', href: '/window-sticker' },
  { name: 'License Plate Lookup', href: '/license-plate-lookup' },
  { name: 'Sample', href: '/sample' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const pathname = usePathname()

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
              {navLinks.map((link) => (
                <NavItem key={link.href} href={link.href} isActive={pathname === link.href}>
                  {link.name}
                </NavItem>
              ))}
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
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} passHref>
              <span className={`block px-4 py-2 text-base text-gray-700 hover:bg-gray-50 ${
                pathname === link.href ? 'bg-gray-100' : ''
              }`}>
                {link.name}
              </span>
            </Link>
          ))}
          <div className="border-t border-gray-200 my-2"></div>
          <Link href="/signup" passHref>
            <span className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-50">Sign Up</span>
          </Link>
          <Link href="/login" passHref>
            <span className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-50">Log In</span>
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar