import { notFound } from 'next/navigation'
import RepetitivePage, { generateMetadata as generateRepetitiveMetadata } from '@/app/components/RepetitivePage'

type PageParams = { make: string; page: string }

const contentCache: { [key: string]: any } = {}

async function getContents(page: string) {
  if (contentCache[page]) {
    return contentCache[page]
  }

  let contents
  switch (page) {
    case 'vin-decoder':
      contents = await import('@/data/vinDecoderMakes.json')
      break
    case 'window-sticker':
      contents = await import('@/data/windowStickerMakes.json')
      break
    case 'license-plate-lookup':
      contents = await import('@/data/licensePlateLookupStates.json')
      break
    default:
      return null
  }

  contentCache[page] = contents.default
  return contents.default
}

export default async function DynamicMakePage({ params }: { params: PageParams }) {
  const contents = await getContents(params.page)

  if (!contents) {
    notFound()
  }

  return (
    <RepetitivePage
      contents={contents}
      urlPrefix={`/${params.page}/`}
      dataSource={params.page === 'license-plate-lookup' ? 'statesList' : 'makesList'}
      params={params}
    />
  )
}

export async function generateMetadata({ params }: { params: PageParams }) {
  const contents = await getContents(params.page)
  if (!contents) return {}
  return generateRepetitiveMetadata({ contents, params })
}

export async function generateStaticParams() {
  const pages = ['vin-decoder', 'window-sticker', 'license-plate-lookup']
  const allParams: PageParams[] = []

  for (const page of pages) {
    const contents = await getContents(page)
    if (contents) {
      const items = Object.keys(contents)
      items.forEach(item => {
        allParams.push({ page, make: item })
      })
    }
  }

  return allParams
}

// v1 simple, fast, but load all the json. good if json is small. now it not used since we want to try the v2 using await
// import { notFound } from 'next/navigation'
// import RepetitivePage, { generateMetadata as generateRepetitiveMetadata } from '@/app/components/RepetitivePage'
// import vinDecoderMakes from '@/data/vinDecoderMakes.json'
// import windowStickerMakes from '@/data/windowStickerMakes.json'
// import licensePlateLookupStates from '@/data/licensePlateLookupStates.json'

// const contentMap = {
//   'vin-decoder': vinDecoderMakes,
//   'window-sticker': windowStickerMakes,
//   'license-plate-lookup': licensePlateLookupStates,
// }

// type PageParams = { make: string; page: string }

// export default function DynamicMakePage({ params }: { params: PageParams }) {
//   const contents = contentMap[params.page as keyof typeof contentMap]

//   if (!contents) {
//     notFound()
//   }

//   return (
//     <RepetitivePage
//       contents={contents}
//       urlPrefix={`/${params.page}/`}
//       dataSource={params.page === 'license-plate-lookup' ? 'statesList' : 'makesList'}
//       params={params}
//     />
//   )
// }

// export async function generateMetadata({ params }: { params: PageParams }) {
//   const contents = contentMap[params.page as keyof typeof contentMap]
//   if (!contents) return {}
//   return generateRepetitiveMetadata({ contents, params })
// }

// export async function generateStaticParams() {
//   const pages = Object.keys(contentMap)
//   const allParams: PageParams[] = []

//   pages.forEach(page => {
//     const contents = contentMap[page as keyof typeof contentMap]
//     const items = Object.keys(contents)
//     items.forEach(item => {
//       allParams.push({ page, make: item })
//     })
//   })

//   return allParams
// }