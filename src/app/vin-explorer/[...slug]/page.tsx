import { Metadata } from 'next'
import { getMake, getModel, getYear } from '@/lib/data';
import ExplorePageContent from '@/app/components/ExplorePageContent';

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

type Props = {
  params: { slug: string[] }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const [makeSlug, modelSlug, yearSlug] = params.slug;
  let canonicalUrl = 'https://www.chassisvin.com/vin-explorer';
  let title = 'VIN Explorer';
  let description = 'Explore vehicle information by make, model, and year';

  if (makeSlug) {
    const make = getMake(capitalize(makeSlug));
    if (make) {
      canonicalUrl += `/${makeSlug.toLowerCase()}`;
      title = `${make.name} VIN Lookup and History Reports | ${make.name} VIN Decoder | Search by Model`;
      description = `Free ${make.name} VIN Lookup and Vehicles History Report from Chassis VIN, get your ${make.name} VIN lookup Auction History Sales Listings and full history report`;

      if (modelSlug) {
        const model = getModel(make.name, capitalize(modelSlug));
        if (model) {
          canonicalUrl += `/${modelSlug.toLowerCase()}`;
          title = `${make.name} ${model.name} VIN Lookup and History Reports | Search by Year`;
          description = `${make.name} ${model.name} VIN lookup and check ${make.name} ${model.name} History, options and specs for Free. Search ${make.name} ${model.name} by VIN or License Plate`;

          if (yearSlug) {
            const year = getYear(make.name, model.name, parseInt(yearSlug, 10));
            if (year) {
              canonicalUrl += `/${yearSlug}`;
              title = `${year.year} ${make.name} ${model.name} VIN Lookup and History Reports | ChassisVIN`;
              description = `Get full history report for ${year.year} ${make.name} ${model.name}. Check ${year.year} ${make.name} ${model.name} VIN number to get options and specs for free. ${year.year} ${make.name} ${model.name} Full History.`;
            }
          }
        }
      }
    }
  }

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      images: [
        {
          url: "https://www.chassisvin.com/auction-og-image.png",
          width: 1200,
          height: 630,
          alt: "VIN Lookup and Vehicle History Reports For Top Cars",
        },
      ],
      url: canonicalUrl,
      siteName: 'ChassisVIN',
      locale: 'en_US',
      type: 'website',
    },
  }
}

export default function ExplorePage({ params }: { params: { slug: string[] } }) {
  const [make, model, year] = params.slug.map(capitalize);

  if (year) {
    const yearData = getYear(make, model, parseInt(year, 10));
    if (!yearData) return <div>Year not found</div>;
    const title = `${make} ${model} ${yearData.year} VIN Lookup and Vehicle History Reports`;
    const description = `Unlock detailed information about your ${make} ${model} with our VIN decoder. Access build sheets, service history, safety recalls, and more. Try our license plate lookup for complete vehicle insights!`;

    const faqItems = [
      {
        question: `How can I decode a ${yearData.year} ${make} ${model} VIN for free?`,
        answer: `Yes, you can perform a basic ${yearData.year} ${make} ${model} VIN decoding for free to retrieve limited information like manufacturing details and basic specifications. However, for a comprehensive report including accident history, service records, odometer verification, and recalls, a premium VIN decoding service is recommended. This ensures you get detailed insights into your ${yearData.year} ${make} ${model} vehicles past.`
      },
      {
        question: `What details can I find using the ${yearData.year} ${make} ${model} VIN Decoder?`,
        answer: `With the ${yearData.year} ${make} ${model} VIN Decoder, you can access a wealth of information, such as: - Original build sheet details, including factory-installed options. - Safety recalls and service history. - Window sticker information with pricing and features. - ${yearData.year} ${make} ${model}-specific parts compatibility. This tool provides a complete view of your ${yearData.year} ${make} ${model} vehicles specifications and history.`
      },
      {
        question: `Where can I locate the VIN on my ${yearData.year} ${make} ${model}?`,
        answer: `The VIN on your ${yearData.year} ${make} ${model} can usually be found in the following locations: - The lower-left corner of the dashboard, visible through the windshield. - The drivers side door jamb. - The engine block or inside the hood area. For motorcycles, the VIN is typically stamped on the frame. Always ensure youre referencing the correct 17-character VIN for your ${yearData.year} ${make} ${model}.`
      },
      {
        question: `Can I use a ${yearData.year} ${make} ${model} VIN Decoder to determine my cars market value?`,
        answer: `While the ${yearData.year} ${make} ${model} VIN Decoder provides detailed information about the vehicle's features and history, it doesnt directly offer market value. However, the data can help assess the value by cross-referencing specs, mileage, and condition with current market trends. This is especially useful when buying or selling a used ${yearData.year} ${make} ${model}. Used car dealers are advised to sign up for dealer VIN lookup to access detailed car valuation info along with VIN history at a deep discount.`
      },
      {
        question: `Why is the ${yearData.year} ${make} ${model} VIN important for safety recalls?`,
        answer: `The ${yearData.year} ${make} ${model} VIN is crucial for identifying any outstanding safety recalls. Manufacturers use the VIN to track vehicles that need repairs or replacements due to potential safety issues. By using the ${yearData.year} ${make} ${model} VIN Decoder, you can ensure your vehicle is up-to-date on all recalls, keeping you and your passengers safe.`
      }
    ];

    return (
      <ExplorePageContent
        title={title}
        description={description}
        make={make}
        model={model}
        year={yearData.year}
        faqs={faqItems}
      />
    );
  }

  if (model) {
    const modelData = getModel(make, model);
    if (!modelData) return <div>Model not found</div>;
    const title = `${make} ${model} VIN Lookup and Vehicle History Reports`;
    const description = `Unlock detailed information about your ${make} ${model} with our VIN decoder. Access build sheets, service history, safety recalls, and more. Try our license plate lookup for complete vehicle insights!`;
    const listItems = modelData.years.map((y) => ({
      name: y.year.toString(),
      href: `/vin-explorer/${make.toLowerCase()}/${model.toLowerCase()}/${y.year}`
    }));

    const faqItems = [
      {
        question: `How can I decode a ${make} ${model} VIN for free?`,
        answer: `Yes, you can perform basic ${make} ${model} VIN decoding for free to access manufacturing details and basic specifications. For in-depth reports on accident history, service records, odometer verification, and recalls, a premium service is recommended for detailed insights.`
      },
      {
        question: `What details can I find using the ${make} ${model} VIN Decoder?`,
        answer: `With the ${make} ${model} VIN Decoder, you can access: - Original build sheet, including factory options. - Safety recalls and service records. - Window sticker details with pricing and features. -${make} ${model}-specific parts compatibility. This tool provides a full view of your ${make} ${model} vehicles specs and history.`
      },
      {
        question: `Where can I locate the VIN on my ${make} ${model}?`,
        answer: `Find your ${make} ${model} VIN at: - Lower-left corner of the dashboard (visible through the windshield). - Driver’s side door jamb. - Engine block or under the hood. For motorcycles, check the frame. Ensure you use the correct 17-character VIN.`
      },
      {
        question: `Can the ${make} ${model} VIN Decoder determine my car’s market value?`,
        answer: `The ${make} ${model} VIN Decoder doesn’t provide market value but offers detailed specs and history to help you assess value by comparing mileage, condition, and features with current market trends.`
      },
      {
        question: `Why is the ${make} ${model} VIN important for safety recalls?`,
        answer: `The ${make} ${model} VIN identifies vehicles needing safety-related repairs or replacements. Use the ${make} ${model} VIN Decoder to check for outstanding recalls and ensure your vehicle is safe and up-to-date.`
      }
    ];

    return (
      <ExplorePageContent
        title={title}
        description={description}
        make={make}
        model={modelData.name}
        listItems={listItems}
        faqs={faqItems}
      />
    );
  }

  if (make) {
    const makeData = getMake(make);
    if (!makeData) return <div>Make not found</div>;
    const title = `${makeData.name} VIN Lookup and Vehicle History Reports`;
    const description = `Unlock detailed information about your ${makeData.name} with our VIN decoder. Access build sheets, service history, safety recalls, and more. Try our license plate lookup for complete vehicle insights!`;
    const listItems = makeData.models.map((m) => ({
      name: capitalize(m.name),
      href: `/vin-explorer/${make.toLowerCase()}/${m.name.toLowerCase()}`
    }));

    const faqItems = [
      {
        question: `How can I decode a ${makeData.name} VIN for free?`,
        answer: `Yes, you can perform a basic {makeData.name} VIN decoding for free to retrieve limited information like manufacturing details and basic specifications. However, for a comprehensive report including accident history, service records, odometer verification, and recalls, a premium VIN decoding service is recommended. This ensures you get detailed insights into your {makeData.name} vehicle's past.`
      },
      {
        question: `What details can I find using the ${makeData.name} VIN Decoder?`,
        answer: `With the ${makeData.name} VIN Decoder, you can access a wealth of information, such as: Original build sheet details, including factory-installed options. Safety recalls and service history. Window sticker information with pricing and features. ${makeData.name}-specific parts compatibility. This tool provides a complete view of your ${makeData.name} vehicles specifications and history.`
      },
      {
        question: `Where can I locate the VIN on my ${makeData.name}?`,
        answer: `The VIN on your ${makeData.name} can usually be found in the following locations: The lower-left corner of the dashboard, visible through the windshield. The drivers side door jamb. The engine block or inside the hood area. For motorcycles, the VIN is typically stamped on the frame. Always ensure you are referencing the correct 17-character VIN for your ${makeData.name}.`
      },
      {
        question: `Can I use a ${makeData.name} VIN Decoder to determine my cars market value?`,
        answer: `While the ${makeData.name} VIN Decoder provides detailed information about the vehicle's features and history, it does not directly offer market value. However, the data can help assess the value by cross-referencing specs, mileage, and condition with current market trends. This is especially useful when buying or selling a used ${makeData.name}.`
      },
      {
        question: `Why is the ${makeData.name} VIN important for safety recalls?`,
        answer: `The ${makeData.name} VIN is crucial for identifying any outstanding safety recalls. Manufacturers use the VIN to track vehicles that need repairs or replacements due to potential safety issues. By using the {makeData.name} VIN Decoder, you can ensure your vehicle is up-to-date on all recalls, keeping you and your passengers safe.`
      }
    ];

    return (
      <ExplorePageContent
        title={title}
        description={description}
        make={makeData.name}
        listItems={listItems}
        faqs={faqItems}
      />
    );
  }

  return <div>Invalid route</div>;
}