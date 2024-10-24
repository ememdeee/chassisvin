import RepetitivePage, { generateMetadata as generateRepetitiveMetadata } from '@/app/components/RepetitivePage'
import contents from '@/data/vinDecoderMakes.json'

export default function MakeVinDecoderPage({ params }: { params: { make: string } }) {
  return (
    <RepetitivePage
      contents={contents}
      urlPrefix="/vin-decoder/"
      dataSource="makesList"
      params={params}
    />
  )
}

export async function generateMetadata({ params }: { params: { make: string } }) {
  return generateRepetitiveMetadata({ contents, params })
}