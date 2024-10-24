import { notFound } from 'next/navigation'
import Head from 'next/head'
import HeroSection from '@/app/components/HeroSection'
import TwoColumnContainer from '@/app/components/TwoColumnContainer'
import Breadcrumb from '@/app/components/Breadcrumb'
import { TwoColumnSidebar } from '@/app/components/TwoColumnSidebar'
import UrlList from '@/app/components/url-list'

interface Section {
  heading: string;
  content: string;
}

interface Content {
  title: string;
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  sections: Section[];
}

interface RepetitivePageProps {
  contents: { [key: string]: Content };
  urlPrefix: string;
  dataSource: any;
  params: { page: string; make?: string };
}

function getContent(contents: { [key: string]: Content }, key: string): Content | null {
  return contents && contents[key] ? contents[key] : null
}

export function generateMetadata({ contents, params }: Pick<RepetitivePageProps, 'contents' | 'params'>) {
  const key = params.make || params.page
  const content = getContent(contents, key)
  if (!content) return {}

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: {
      canonical: content.canonical,
    },
  }
}

export default function RepetitivePage({ contents, urlPrefix, dataSource, params }: RepetitivePageProps) {
  const key = params.make || params.page
  const content = getContent(contents, key)

  if (!content) {
    notFound()
  }

  return (
    <>
      <Head>
        <link rel="canonical" href={content.canonical} />
      </Head>
      <main>
        <HeroSection title={content.title} />
        <TwoColumnContainer>
          <div className="content">
            <Breadcrumb />
            {content.sections.map((section, index) => (
              <div key={index}>
                <h2>{section.heading}</h2>
                <p>{section.content}</p>
              </div>
            ))}
            <UrlList dataSource={dataSource} urlPrefix={urlPrefix} />
          </div>
          <TwoColumnSidebar />
        </TwoColumnContainer>
      </main>
    </>
  )
}