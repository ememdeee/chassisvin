import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sample Vehicle History Report | ChassisVIN',
  description: 'View a comprehensive sample vehicle history report from ChassisVIN. Includes ownership history, title information, accident records, and more.',
  alternates: {
    canonical: 'https://www.chassisvin.com/sample',
  },
}

export default function SampleReportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}