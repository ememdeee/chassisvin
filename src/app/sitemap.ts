import { MetadataRoute } from 'next'
import mainPages from '@/data/pages.json'
import vinDecoderMakes from '@/data/vinDecoderMakes.json'
import windowStickerMakes from '@/data/windowStickerMakes.json'
import licensePlateLookupStates from '@/data/licensePlateLookupStates.json'
import vinCheckStates from '@/data/vinCheckStates.json'
import classicYmmt from '@/data/classicYmmt.json'
import colorDecoderMakes from '@/data/colorDecoderMakes.json'
import blogs from '@/data/blogs.json'
import { getPageDates } from '@/data/pageDates'
import fs from 'fs'
import path from 'path'
import { autoData } from '@/lib/data'

function formatUrl(baseUrl: string, path: string = ''): string {
  const cleanBaseUrl = baseUrl.replace(/\/+$/, '')
  if (!path) {
    return `${cleanBaseUrl}/`
  }
  const cleanPath = path.replace(/^\/+/, '').replace(/\/+$/, '')
  return `${cleanBaseUrl}/${cleanPath}`
}

function getManualPages(dir: string): string[] {
  try {
    const files = fs.readdirSync(dir, { withFileTypes: true })
    let pages: string[] = []

    for (const file of files) {
      if (file.isDirectory()) {
        if (!file.name.startsWith('[')) {
          pages = [...pages, ...getManualPages(path.join(dir, file.name))]
        }
      } else if ((file.name === 'page.tsx' || file.name === 'page.ts') && !dir.includes('[')) {
        const relativePath = path.relative('src/app', dir)
        pages.push(relativePath === '' ? '/' : `/${relativePath}`)
      }
    }

    return pages
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error)
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.chassisvin.com'

  // 1. Homepage
  const homePageDates = getPageDates('/');
  const homeEntry = {
    url: formatUrl(baseUrl),
    lastModified: homePageDates ? new Date(homePageDates.dateModified) : new Date(),
    changeFrequency: 'daily' as const,
    priority: 1,
  }

  // 2. Entries from pages.json
  const pageEntries = Object.entries(mainPages).map(([slug, page]) => ({
    url: formatUrl(baseUrl, slug),
    lastModified: new Date(page.dateModified),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // 3. Manually created pages
  const appDir = path.join(process.cwd(), 'src', 'app')
  const manualPages = getManualPages(appDir)
  const manualEntries = manualPages
    .filter(page => page !== '/') // Remove root page to avoid duplication
    .map(page => {
      const pageDates = getPageDates(page)
      return {
        url: formatUrl(baseUrl, page),
        lastModified: pageDates ? new Date(pageDates.dateModified) : new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }
    })
    
  const vinExplorerDates = getPageDates('/vin-explorer');
  // 4. Entries from other json files
  const dynamicEntries = [
    ...Object.entries(vinDecoderMakes).map(([slug, page]) => ({
      url: formatUrl(baseUrl, `vin-decoder/${slug}`),
      lastModified: new Date(page.dateModified),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...Object.entries(windowStickerMakes).map(([slug, page]) => ({
      url: formatUrl(baseUrl, `window-sticker/${slug}`),
      lastModified: new Date(page.dateModified),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...Object.entries(licensePlateLookupStates).map(([slug, page]) => ({
      url: formatUrl(baseUrl, `license-plate-lookup/${slug}`),
      lastModified: new Date(page.dateModified),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...Object.entries(vinCheckStates).map(([slug, page]) => ({
      url: formatUrl(baseUrl, `vin-check/${slug}`),
      lastModified: new Date(page.dateModified),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...Object.entries(colorDecoderMakes).map(([slug, page]) => ({
      url: formatUrl(baseUrl, `paint-code-by-vin/${slug}`),
      lastModified: new Date(page.dateModified),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...Object.entries(classicYmmt).map(([slug, page]) => ({
      url: formatUrl(baseUrl, `classic-lookup/${slug}`),
      lastModified: new Date(page.dateModified),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    // Add entries for make pages from autoData
    ...autoData.map((make) => ({
      url: formatUrl(baseUrl, `vin-explorer/${make.name.toLowerCase().replace(/\s+/g, '-')}`),
      lastModified: vinExplorerDates ? new Date(vinExplorerDates.dateModified) : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]

  // 5. Entries from blogs.json
  const blogEntries = Object.entries(blogs).map(([slug, blog]) => ({
    url: formatUrl(baseUrl, `blogs/${slug}`),
    lastModified: new Date(blog.dateModified),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Combine all entries in the specified order
  const allEntries = [
    homeEntry,
    ...pageEntries,
    ...manualEntries,
    ...dynamicEntries,
    ...blogEntries,
  ]

  // Remove duplicate entries
  const uniqueEntries = Array.from(new Set(allEntries.map(entry => entry.url)))
    .map(url => allEntries.find(entry => entry.url === url)!)

  return uniqueEntries
}

