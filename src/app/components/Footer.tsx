import React from 'react'
import { Twitter, Linkedin, Github, Search, Smartphone } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex flex-col md:flex-row items-center mb-6 md:mb-0">
            <div className="w-full md:w-10 md:h-10 md:mr-4 flex justify-center md:justify-start md:block">
            <Image
              src="/ChassisVIN.webp"
              alt="ChassisVIN"
              className="mx-auto mb-6"
              width={40}
              height={40}
            />
            </div>
            <nav className="flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-gray-900">Chassis VIN</Link>
              <Link href="/contact-us" className="text-gray-600 hover:text-gray-900">Contact Us</Link>
              <Link href="/about-us" className="text-gray-600 hover:text-gray-900">About</Link>
            </nav>
          </div>
          <div className="flex items-center space-x-6 mb-6 md:mb-0">
            <Link href="/faq" className="flex items-center text-gray-600 hover:text-gray-900">
              <Search className="w-5 h-5 mr-2" />
              <span>FAQ</span>
            </Link>
            <Link href="#" className="flex items-center text-gray-600 hover:text-gray-900">
              <Smartphone className="w-5 h-5 mr-2" />
              <span>Mobile App</span>
            </Link>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p className='text-center'>© 2024 ChassisVIN. Made with ❤ by <a href='https://www.basrh.com/'  target="_blank" rel="noopener noreferrer">Basrh</a> | <a href='https://cloudteamize.com/' target="_blank" rel="noopener noreferrer">CloudTeamize</a></p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/sitemap.xml" className="hover:text-gray-700">Sitemap</Link>
            <Link href="/privacy-policy" className="hover:text-gray-700">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-gray-700">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer