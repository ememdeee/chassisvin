import { notFound } from 'next/navigation'
import RepetitivePage, { generateMetadata as generateRepetitiveMetadata } from '@/app/components/RepetitivePage'
import vinDecoderMakes from '@/data/vinDecoderMakes.json'
import windowStickerMakes from '@/data/windowStickerMakes.json'
import licensePlateLookupStates from '@/data/licensePlateLookupStates.json'
import vinDecoderStates from '@/data/vinDecoderStates.json'

const contentMap = {
  'vin-decoder': { ...vinDecoderMakes, ...vinDecoderStates },
  'window-sticker': windowStickerMakes,
  'license-plate-lookup': licensePlateLookupStates,
}

type PageParams = { make: string; page: string }

export default function DynamicMakePage({ params }: { params: PageParams }) {
  const contents = contentMap[params.page as keyof typeof contentMap]

  if (!contents) {
    notFound()
  }

  return (
    <RepetitivePage
      contents={contents}
      urlPrefix={`/${params.page}/`}
      params={params}
    />
  )
}

export async function generateMetadata({ params }: { params: PageParams }) {
  const contents = contentMap[params.page as keyof typeof contentMap]
  if (!contents) return {}
  return generateRepetitiveMetadata({ contents, params })
}

export async function generateStaticParams() {
  const pages = Object.keys(contentMap)
  const allParams: PageParams[] = []

  pages.forEach(page => {
    const contents = contentMap[page as keyof typeof contentMap]
    const items = Object.keys(contents)
    items.forEach(item => {
      allParams.push({ page, make: item })
    })
  })

  return allParams
}