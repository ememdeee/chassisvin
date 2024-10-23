'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight } from 'lucide-react'

const Breadcrumb = () => {
  const pathname = usePathname()
  const pathSegments = pathname.split('/').filter(segment => segment !== '')

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    ...pathSegments.map((segment, index) => ({
      label: formatSegment(segment),
      href: `/${pathSegments.slice(0, index + 1).join('/')}`
    }))
  ]

  function formatSegment(segment: string): string {
    // Convert kebab-case or snake_case to Title Case
    return segment
      .split(/[-_]/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
  }

  return (
    <nav aria-label="Breadcrumb" className="text-sm pb-6 md:pb-8">
      <ol className="flex items-center space-x-2">
        {breadcrumbItems.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="h-4 w-4 text-blue-500 mx-2" aria-hidden="true" />
            )}
            {index === breadcrumbItems.length - 1 ? (
              <span className="text-gray-700">{item.label}</span>
            ) : (
              <Link href={item.href} className="text-blue-500 hover:underline">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumb