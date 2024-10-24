import RepetitivePage, { generateMetadata as generateRepetitiveMetadata } from '@/app/components/RepetitivePage'
import contents from '@/data/pages.json'

export default function Page({ params }: { params: { page: string } }) {
  return (
    <RepetitivePage
      contents={contents}
      urlPrefix={`/${params.page}/`}
      dataSource={`${params.page}List`}
      params={params}
    />
  )
}

export async function generateMetadata({ params }: { params: { page: string } }) {
  return generateRepetitiveMetadata({ contents: contents, params })
}

export async function generateStaticParams() {
  return Object.keys(contents).map(page => ({ page }))
}