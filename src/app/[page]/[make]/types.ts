interface Section {
  heading: string;
  headingLevel?: string;
  content: string;
}

interface DataSource {
  source: string;
  prefix: string;
}

interface HeroCta {
  text: string;
  link: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface Author {
  name: string;
  url: string;
}

export interface Content {
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  imageUrl: string;
  author: Author;
  datePublished: string,
  dateModified: string,
  dataSources: DataSource[];
  reportType: string;
  heroForm: boolean;
  heroCta: HeroCta[];
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
  'paint-code-by-vin': Record<string, Content>;
  'vehicle-recalls': Record<string, Content>;
}

export type PageParams = { 
  make: string; 
  page: keyof ContentMap;
}

