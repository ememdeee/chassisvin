import { Metadata } from 'next'
import BlogList from "../components/BlogList";

interface BlogPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export const metadata: Metadata = {
  title: 'Our Blog Articles | ChassisVIN',
  description: 'Discover insights about vehicle history, maintenance, and buying guides on our blog.',
  alternates: {
    canonical: 'https://www.chassisvin.com/blogs',
  },
  other: {
    datePublished: '2024-12-09',
    dateModified: '2024-12-17',
  },
}

export default function BlogPage({ searchParams }: BlogPageProps) {
  const page = Number(searchParams.page) || 1;
  const limit = Number(searchParams.limit) || 9;
  const showPagination = true;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-12">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">Our Blog Articles</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover insights about vehicle history, maintenance, and buying guides
          </p>
        </div>
        <BlogList page={page} limit={limit} showPagination={showPagination} />
      </div>
    </div>
  );
}