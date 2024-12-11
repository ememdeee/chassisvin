import RepetitivePage, { generateMetadata as generateRepetitiveMetadata } from '@/app/components/RepetitivePage'
import contents from '@/data/blogs.json'

export default function Page({ params }: { params: { page: string } }) {
  
  return (
    <RepetitivePage
      contents={contents}
      params={params}
    />
  )
}

export async function generateMetadata({ params }: { params: { page: string } }) {
  return generateRepetitiveMetadata({ contents, params })
}

export async function generateStaticParams() {
  return Object.keys(contents).map(page => ({ page }))
}