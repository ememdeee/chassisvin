'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import CustomButton from './CustomButton'

interface Testimonial {
  name: string
  image: string
  rating: number
  text: string
  carSaved: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Jason Creed',
    image: '/placeholder.svg?height=100&width=100',
    rating: 5,
    text: "Once I decided to buy a good looking Cadillac Escalade. I really appreciate that my colleague advised me to take your service guys. As it turns out that Cadillac is Salvage, Junk and even flood damaged car - that's what I learned from your ChassisVIN report. I was about to buy it, thankfully I checked the report first. I skipped a lot of trouble. I Appreciate what you do!",
    carSaved: 'Cadillac Escalade'
  },
  {
    name: 'Sarah Johnson',
    image: '/placeholder.svg?height=100&width=100',
    rating: 5,
    text: "ChassisVIN saved me from making a huge mistake. The car I was interested in had a hidden accident history that only showed up in their detailed report. Their service is invaluable for any serious car buyer.",
    carSaved: 'Honda Civic'
  },
  {
    name: 'Mike Thompson',
    image: '/placeholder.svg?height=100&width=100',
    rating: 5,
    text: "I've used several vehicle history report services, but ChassisVIN stands out for its comprehensive data and user-friendly interface. It's now my go-to for any used car purchase.",
    carSaved: 'Ford F-150'
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    console.log('Current Index:', currentIndex)
    console.log('Is Auto Playing:', isAutoPlaying)

    if (isAutoPlaying) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const newIndex = (prevIndex + 1) % testimonials.length
          console.log('Auto-advancing to index:', newIndex)
          return newIndex
        })
      }, 5000)
      return () => clearInterval(timer)
    }
  }, [isAutoPlaying, currentIndex])

  const nextTestimonial = () => {
    console.log('Next Story button clicked')
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % testimonials.length
      console.log('Advancing to index:', newIndex)
      return newIndex
    })
    setIsAutoPlaying(false)
    console.log('Auto-play disabled')
  }

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-blue-600 mb-2">98% POSITIVE FEEDBACK</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Real Stories, Real Savings</h2>
          <p className="text-xl text-gray-700">Discover how ChassisVIN has helped customers make informed decisions and avoid costly mistakes.</p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className="w-full md:w-2/3 bg-white shadow-lg rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    width={64}
                    height={64}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">{testimonials[currentIndex].name}</h3>
                    <div className="flex">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-blue-500 text-blue-500" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">&ldquo;{testimonials[currentIndex].text}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-blue-600">Car Saved: {testimonials[currentIndex].carSaved}</p>
                  <CustomButton text="Next Story" onClick={nextTestimonial} />
                </div>
              </div>

              <div className="w-full md:w-1/3 space-y-4">
                <div className="bg-blue-500 text-white rounded-lg p-6">
                  <h4 className="text-2xl font-bold mb-2">4.5 / 5</h4>
                  <p className="text-sm">Average Customer Rating</p>
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-white text-white" />
                    ))}
                  </div>
                </div>
                <div className="bg-white text-gray-900 rounded-lg p-6 shadow-lg">
                  <h4 className="text-2xl font-bold mb-2">10,000+</h4>
                  <p className="text-sm">Customers Helped</p>
                </div>
                <div className="bg-gray-100 text-gray-900 rounded-lg p-6">
                  <h4 className="text-2xl font-bold mb-2">$5M+</h4>
                  <p className="text-sm">Saved in Potential Losses</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}