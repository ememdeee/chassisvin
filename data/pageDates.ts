interface PageDate {
    datePublished: string;
    dateModified: string;
  }
  
  interface PageDates {
    [key: string]: PageDate;
  }
  
  export const pageDates: PageDates = {
    '/': {
      datePublished: '2024-10-21',
      dateModified: '2024-12-17',
    },
    '/blogs': {
      datePublished: '2024-11-01',
      dateModified: '2024-12-17',
    },
    '/sample': {
        datePublished: '2024-10-21',
        dateModified: '2024-12-17',
      },
    '/vin-explorer': {
      datePublished: '2024-12-22',
      dateModified: '2024-12-22',
    },
    // Add more pages as needed
  };
  
  export function getPageDates(path: string): PageDate | null {
    return pageDates[path] || null;
  }
  
  