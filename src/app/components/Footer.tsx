import React from 'react'
import { Twitter, Linkedin, Github, Search, Smartphone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mr-4"></div>
            <nav className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">Chassis VIN</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
            </nav>
          </div>
          <div className="flex items-center space-x-6 mb-6 md:mb-0">
            <a href="#" className="flex items-center text-gray-600 hover:text-gray-900">
              <Search className="w-5 h-5 mr-2" />
              <span>iAsk Browser Search</span>
            </a>
            <a href="#" className="flex items-center text-gray-600 hover:text-gray-900">
              <Smartphone className="w-5 h-5 mr-2" />
              <span>Mobile App</span>
            </a>
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
          <p>© 2024 AI Search Inc. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-700">Privacy Policy</a>
            <a href="#" className="hover:text-gray-700">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer