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

export interface Content {
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  imageUrl: string;
  dateModified: string,
  dataSources: DataSource[];
  reportType: string;
  heroForm: boolean;
  tags: string[];
  sections: Section[];
  faqs: FAQItem[];
}

export type ContentMap = {
  'vin-decoder': Record<string, Content>;
  'vin-check': Record<string, Content>;
  'window-sticker': Record<string, Content>;
  'license-plate-lookup': Record<string, Content>;
  'classic-lookup': Record<string, Content>;
}

export type PageParams = { 
  make: string; 
  page: keyof ContentMap;
}

