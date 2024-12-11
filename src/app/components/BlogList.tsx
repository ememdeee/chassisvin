import blogs from '@/data/blogs.json';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import CustomButton from './CustomButton';
import Script from 'next/script';
import Image from 'next/image';

interface BlogListProps {
  limit: number;
  page: number;
  showPagination: boolean;
}

export default function BlogList({ limit, page, showPagination }: BlogListProps) {
  const blogEntries = Object.entries(blogs);
  const totalPages = Math.ceil(blogEntries.length / limit);
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const currentPageBlogs = blogEntries.slice(startIndex, endIndex);

  // Generate schema markup for each blog post
  const schemaMarkup = currentPageBlogs.map(([slug, blog]) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": blog.title,
    "description": blog.description,
    "author": {
      "@type": "Person",
      "name": blog.author.name,
      "url": blog.author.url
    },
    "publisher": {
      "@type": "Organization",
      "name": "ChassisVin",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.chassisvin.com/ChassisVIN.png"
      }
    },
    "datePublished": blog.datePublished,
    "dateModified": blog.dateModified,
    "mainEntityOfPage": `https://www.chassisvin.com/blogs/${slug}`,
    "image": `https://www.chassisvin.com${blog.imageUrl}`,
    "articleBody": blog.description
  }));

  return (
    <>
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentPageBlogs.map(([slug, blog]) => (
            <Link 
              key={slug} 
              href={`/blogs/${slug}`}
              className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col h-full"
            >
              {blog.imageUrl && (
                <div className="relative h-48 w-full">
                  <Image
                    src={blog.imageUrl}
                    alt={blog.title}
                    width= {800}
                    height= {600}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
              <div className={`p-6 flex flex-col flex-grow ${!blog.imageUrl ? 'h-full' : ''}`}>
                <div className="flex-grow space-y-4">
                  <h2 className="text-xl font-semibold text-gray-900 line-clamp-2 leading-tight">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                    {blog.description}
                  </p>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    By {blog.author.name}
                  </span>
                  <span className="text-sm text-gray-500">
                    {new Date(blog.datePublished).toLocaleDateString()}
                  </span>
                </div>
                <div className="mt-5">
                  <span 
                    className="inline-flex items-center text-sm font-medium border border-blue-600 text-blue-600 group-hover:text-white transition-all duration-300 ease-in-out px-3 py-2 rounded-md group-hover:bg-blue-600"
                  >
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {limit <= 3 && (
          <div className="text-center mt-8">
            <CustomButton
              text="View All Blogs"
              href="/blogs"
            />
          </div>
        )}

        {showPagination && totalPages > 1 && (
          <div className="flex justify-center gap-2 pt-4">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <Link
                key={pageNum}
                href={`/blogs?page=${pageNum}&limit=${limit}`}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200
                  ${pageNum === page 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                  }
                `}
              >
                {pageNum}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

