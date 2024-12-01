import { MetadataRoute } from 'next'
import { ContentMap, Content } from './[page]/[make]/types'
import contents from '@/data/pages.json'
import fs from 'fs'
import path from 'path'

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

  const getContentMap = async (page: keyof ContentMap): Promise<Record<string, Content>> => {
    switch (page) {
      case 'vin-decoder':
        return import('@/data/vinDecoderMakes.json').then(m => m.default)
      case 'vin-check':
        return import('@/data/vinCheckStates.json').then(m => m.default)
      case 'window-sticker':
        return import('@/data/windowStickerMakes.json').then(m => m.default)
      case 'license-plate-lookup':
        return import('@/data/licensePlateLookupStates.json').then(m => m.default)
      case 'classic-lookup':
        return import('@/data/classicYmmt.json').then(m => m.default)
      default:
        return {}
    }
  }

  const pages: (keyof ContentMap)[] = ['vin-decoder', 'vin-check', 'window-sticker', 'license-plate-lookup', 'classic-lookup']

  // 1. Homepage
  const homeEntry = {
    url: formatUrl(baseUrl),
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 1,
  }

  // 2. Entries from pages.json
  const staticEntries = Object.entries(contents).map(([key]) => ({
    url: formatUrl(baseUrl, key),
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // 3. Manually created pages
  const appDir = path.join(process.cwd(), 'src', 'app')
  const manualPages = getManualPages(appDir)
  const manualEntries = manualPages
    .filter(page => page !== '/') // Remove root page to avoid duplication
    .map(page => ({
      url: formatUrl(baseUrl, page),
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))

  // 4. Entries from other JSON files
  const dynamicEntries = await Promise.all(
    pages.map(async (pageType) => {
      const pageContents = await getContentMap(pageType)
      return Object.keys(pageContents).map((make) => ({
        url: formatUrl(baseUrl, `${pageType}/${make}`),
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }))
    })
  )
  const flattenedDynamicEntries = dynamicEntries.flat()

  // Combine all entries in the specified order
  const allEntries = [
    homeEntry,
    ...staticEntries,
    ...manualEntries,
    ...flattenedDynamicEntries,
  ]

  // Remove duplicate entries
  const uniqueEntries = Array.from(new Set(allEntries.map(entry => entry.url)))
    .map(url => allEntries.find(entry => entry.url === url)!)

  return uniqueEntries
}