import Link from 'next/link'
import Image from 'next/image'
import authors from '@/data/authors.json'
import BlogList from '../components/BlogList'
import Breadcrumb from '../components/Breadcrumb'
import HeroSection from '@/app/components/HeroSection'
import TwoColumnContainer from '../components/TwoColumnContainer'

export default function AuthorListPage() {
  return (
    <div className="min-h-screen">
      <HeroSection 
        title="Meet Our Expert Authors"
        description="Discover the brilliant minds behind our insightful articles on car VIN decoding, vehicle history, and automotive expertise."
        showForm={false}
      />
      <TwoColumnContainer forceOneColumn={true}>
        <div className="space-y-12 px-4 md:px-6 lg:px-8">
          <Breadcrumb />
          <h1 className="text-3xl font-bold text-center !mt-0">Our Authors</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(authors).map(([slug, author]) => (
              <div key={slug} className="bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200">
                <div className="p-6 flex flex-col sm:flex-row sm:items-center sm:space-x-6">
                  <div className="flex-shrink-0 mb-4 sm:mb-0">
                    <div className="relative w-32 h-32 mx-auto sm:mx-0">
                      <Image
                        src={author.image}
                        alt={author.fullName}
                        fill
                        className="rounded-full object-cover border-4 border-white shadow-lg"
                      />
                    </div>
                  </div>
                  <div className="flex-grow text-center sm:text-left">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      {author.fullName}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {author.bio}
                    </p>
                    <Link 
                      href={`/author/${slug}`}
                      className="inline-flex items-center text-sm font-medium bg-white border border-blue-600 text-blue-600 transition-all duration-300 ease-in-out px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white shadow-sm"
                    >
                      View Full Profile
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-8">Latest Articles</h2>
            <BlogList showPagination={false} limit={6} />
          </section>
        </div>
      </TwoColumnContainer>
    </div>
  )
}