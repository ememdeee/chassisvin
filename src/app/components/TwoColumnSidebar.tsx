import React from 'react'
import SiteForm from './SiteForm'
import { PageNavigation } from './PageNavigation'

export function TwoColumnSidebar() {
  return (
    <aside className="w-full bg-white py-6 px-3 sticky top-0">
      <div className="mb-6">
        <div className="relative">
          <SiteForm forceMobileLayout={true} />
        </div>
      </div>
      <PageNavigation />
    </aside>
  )
}