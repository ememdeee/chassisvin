import { notFound } from 'next/navigation'
import { cache } from 'react'
import RepetitivePage, { generateMetadata as generateRepetitiveMetadata } from '@/app/components/RepetitivePage'
import { ContentMap, PageParams, Content } from './types'
import { Metadata } from 'next'

// Lazy load only the required data
const getContentMap = cache(async (page: keyof ContentMap): Promise<Record<string, Content>> => {
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
    case 'paint-code-by-vin':
      return import('@/data/colorDecoderMakes.json').then(m => m.default)
    case 'vehicle-recalls':
      return import('@/data/recallsMakes.json').then(m => m.default)
    default:
      return {}
  }
})

export default async function DynamicMakePage({ params }: { params: PageParams }) {
  const contents = await getContentMap(params.page)

  if (!contents || Object.keys(contents).length === 0) {
    notFound()
  }

  return <RepetitivePage contents={contents} params={params} />
}

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const contents = await getContentMap(params.page)
  if (!contents || Object.keys(contents).length === 0) return {}
  return generateRepetitiveMetadata({ contents, params })
}

export async function generateStaticParams() {
  const pages: (keyof ContentMap)[] = ['vin-decoder', 'vin-check', 'window-sticker', 'license-plate-lookup', 'classic-lookup', 'paint-code-by-vin', 'vehicle-recalls']
  
  return pages.flatMap(async page => {
    const contents = await getContentMap(page)
    return Object.keys(contents).map(make => ({ page, make }))
  })
}

