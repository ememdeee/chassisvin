'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const sections = [
  { id: "report-summary", name: "Report summary" },
  { id: "vehicle-specifications", name: "Vehicle Specifications" },
  { id: "ownership-history", name: "Ownership History" },
  { id: "odometer-reading", name: "Odometer Reading" },
  { id: "title-history", name: "Title History" },
  { id: "emission-safety-inspection", name: "Emission & Safety Inspection" },
  { id: "insurance-records", name: "Insurance Records" },
  { id: "junk-salvage-information", name: "Junk & Salvage Information" },
  { id: "accident-damage-history", name: "Accident & Damage History" },
  { id: "lien-impound-records", name: "Lien & Impound Records" },
  { id: "theft-records", name: "Theft Records" },
  { id: "title-brands", name: "Title Brands" },
  { id: "sale-history", name: "Sale History" },
  { id: "auction", name: "Auction" },
  { id: "recalls", name: "Recalls" }
]

interface ReportSectionsProps {
  closeSidebar: () => void;
}

export default function ReportSections({ closeSidebar }: ReportSectionsProps) {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observers = sections.map(section => {
      const element = document.getElementById(section.id)
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(section.id)
            }
          },
          { threshold: 0.5 } // Trigger when 50% of the section is visible
        )
        observer.observe(element)
        return observer
      }
      return null
    }).filter(Boolean)

    return () => {
      observers.forEach(observer => observer?.disconnect())
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 20 // Adjust this value to increase or decrease the space
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    closeSidebar()
  }

  return (
    <Card>
      <CardHeader>
        <span className="text-base font-semibold leading-none tracking-tight">Report Sections</span>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(section.id)
                }}
                className={`hover:underline transition-colors duration-200 cursor-pointer ${
                  activeSection === section.id
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-600'
                }`}
              >
                {section.name}
              </a>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}