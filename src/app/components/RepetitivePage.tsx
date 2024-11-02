import { notFound } from 'next/navigation'
import Head from 'next/head'
import HeroSection from '@/app/components/HeroSection'
import TwoColumnContainer from '@/app/components/TwoColumnContainer'
import Breadcrumb from '@/app/components/Breadcrumb'
import { TwoColumnSidebar } from '@/app/components/TwoColumnSidebar'
import UrlList from '@/app/components/url-list'
import SectionContent from './SectionContent'
import FAQBasic from './FAQBasic'
import ServiceList from './ServiceList'

interface Section {
  heading: string;
  headingLevel?: string;
  content: string;
}

interface DataSource {
  source: string;
  prefix: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface Content {
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  dataSources: DataSource[];
  reportType: string;
  heroForm: boolean;
  sections: Section[];
  faqs: FAQItem[];
}

interface RepetitivePageProps {
  contents: { [key: string]: Content };
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

export default function RepetitivePage({ contents, params }: RepetitivePageProps) {
  const key = params.make || params.page
  const content = getContent(contents, key)

  if (!content) {
    notFound()
  }

  const renderHeading = (section: Section) => {
    switch (section.headingLevel) {
      case "h3":
        return <h3>{section.heading}</h3>
      case "h4":
        return <h4>{section.heading}</h4>
      case "h2":
      default:
        return <h2>{section.heading}</h2>
    }
  }

  return (
    <>
      <Head>
        <link rel="canonical" href={content.canonical} />
      </Head>
      <main>
        <HeroSection showForm={content.heroForm} title={content.title} description={content.description} reportType={content.reportType as 'VHR' | 'WS'} />
        <TwoColumnContainer>
          <div>
            <Breadcrumb />
            {content.sections.map((section, index) => (
              <div className="content" key={index}>
                {renderHeading(section)}
                <SectionContent content={section.content} />
              </div>
            ))}
            {content.dataSources.map((dataSource, index) => (
              dataSource.source && dataSource.source.trim() !== "" && (
                <UrlList 
                  key={`${dataSource.source}-${index}`}
                  dataSource={dataSource.source} 
                  urlPrefix={dataSource.prefix} 
                />
              )
            ))}
            <ServiceList />
            {content.faqs && content.faqs.length > 0 && (
              <FAQBasic title="Frequently Asked Questions" items={content.faqs} />
            )}
          </div>
          <TwoColumnSidebar />
        </TwoColumnContainer>
      </main>
    </>
  )
}