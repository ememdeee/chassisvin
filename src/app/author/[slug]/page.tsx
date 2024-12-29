import { notFound } from 'next/navigation'
import Image from 'next/image'
import authors from '@/data/authors.json'
import { Linkedin, Twitter } from 'lucide-react'
import Breadcrumb from '@/app/components/Breadcrumb'
import HeroSection from '@/app/components/HeroSection'
import BlogList from '@/app/components/BlogList'
import CustomButton from '@/app/components/CustomButton'
import TwoColumnContainer from '@/app/components/TwoColumnContainer'
import { TwoColumnSidebar } from '@/app/components/TwoColumnSidebar'

export default function AuthorPage({ params }: { params: { slug: string } }) {
  const authorSlug = params.slug
  const author = authors[authorSlug as keyof typeof authors]

  if (!author) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <HeroSection 
        title={`${author.fullName} - Insights and Expertise on Car VIN Decoding`}
        description={`Explore the work of ${author.fullName} on ChassisVIN.com, where they share expert insights on car VIN decoding, including tips, guides, and detailed information to help you understand vehicle identification, car history, and more.`}
        showForm={false}
      />
      <TwoColumnContainer>
        <div className="space-y-8">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb />
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg border border-gray-200 overflow-hidden p-6 md:p-8 mx-4 shadow-md">
              <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
                <div className="flex-shrink-0 mb-6 md:mb-0">
                  <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto md:mx-0">
                    <Image
                      src={author.image}
                      alt={author.fullName}
                      fill
                      className="rounded-full object-cover border-4 border-white shadow-lg"
                      priority
                    />
                  </div>
                </div>
                <div className="flex-grow">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center md:text-left">
                    {author.fullName}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {author.bio}
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <a 
                      href={author.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group inline-flex items-center text-sm font-medium bg-white border border-blue-600 text-blue-600 transition-all duration-300 ease-in-out px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white shadow-sm"
                    >
                      <Linkedin className="h-5 w-5 mr-2" />
                      <span className="hidden sm:inline">Connect on</span> LinkedIn
                    </a>
                    <a 
                      href={author.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group inline-flex items-center text-sm font-medium bg-white border border-blue-600 text-blue-600 transition-all duration-300 ease-in-out px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white shadow-sm"
                    >
                      <Twitter className="h-5 w-5 mr-2" />
                      <span className="hidden sm:inline">Follow on</span> Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="max-w-4xl mx-auto pt-8 px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Latest Articles by {author.fullName}
            </h2>
            <BlogList 
              showPagination={false} 
              author={author.fullName} 
              limit={6} 
            />
            <div className="mt-12 text-center">
              <CustomButton href='/blogs' text='View All Articles' />
            </div>
          </section>
        </div>
        <TwoColumnSidebar />
      </TwoColumnContainer>
    </div>
  )
}
