import { Metadata } from 'next'
import { autoData } from '@/lib/data';
import ExplorePageContent from '../components/ExplorePageContent';

export const metadata: Metadata = {
  title: "VIN Lookup and Vehicle History Reports For Top Cars",
  description: "Explore VIN decoder, window sticker, and license plate lookup for top cars. Get detailed vehicle history, specs, and ownership insights to make informed decisions.",

  alternates: {
    canonical: 'https://www.chassisvin.com/vin-explorer', // Replace with your actual URL
  },
  openGraph: {
    images: [
      {
        url: 'https://www.chassisvin.com/auction-og-image.png',
        width: 1200,
        height: 630,
        alt: 'ChassisVIN - Vehicle History Reports',
      },
    ],
    type: 'article',
    siteName: 'ChassisVIN',
    locale: 'en_US',
    url: 'https://www.chassisvin.com/vin-explorer',
    publishedTime: '2024-12-09T15:00:00+00:00',
    modifiedTime: '2024-12-09T15:00:00+00:00',
  },
};

export default function ExploreRootPage() {
  const title = "VIN Lookup and Vehicle History Reports";
  const description = "Explore VIN decoder, window sticker, license plate lookup, and dealer signups for top car makes. Get detailed vehicle history, specs, and ownership insights to make informed decisions.";
  const listItems = autoData.map((m) => ({
    name: m.name,
    href: `/vin-explorer/${m.name.toLowerCase().replace(/\s+/g, '-')}`
  }));

  const faqItems = [
    {
      question: "What is a VIN?",
      answer: "A VIN (Vehicle Identification Number) is a unique code assigned to every motor vehicle at the time of its manufacture. This 17-character code acts as a fingerprint for the vehicle, providing essential details such as the manufacturer, place of origin, and year of production. You can typically find the VIN on the dashboard near the windshield, inside the driver's side door jamb, or in vehicle documents like the title, registration, and insurance policy."
    },
    {
      question: "What Does a VIN Consist Of?",
      answer: "Though it may appear cryptic, each character in a VIN holds specific information: First character: Indicates the country where the vehicle was manufactured. Other characters: Reveal details such as the manufacturer, model type, engine specifications, and series. Decoding this information manually can be challenging, which is why VIN decoder services exist to simplify the process."
    },
    {
      question: "How Does a VIN Decoder Work?",
      answer: "A VIN decoder analyzes the 17-character VIN and extracts detailed information from it. Using a comprehensive database, these services provide data such as: Make and model of the vehicle, Year of manufacture, Engine type and specifications, Country of origin, Recall and service bulletin history, Accident reports, Ownership history, And much more. VIN decoders offer an accurate and efficient way to understand a vehicle's history and specifications."
    },
    {
      question: "Why is a VIN Decoder Important?",
      answer: "For Consumers: VIN decoders provide invaluable insights for individuals considering the purchase of a used car. By revealing potential red flags like previous accidents, recalls, or undisclosed issues, buyers can make informed decisions and avoid costly mistakes. For Dealerships and Resellers: Dealerships rely on VIN decoders to evaluate the condition and history of vehicles in their inventory. This transparency builds trust with potential buyers and ensures accurate appraisals. For Regulatory Bodies: Law enforcement and regulatory agencies use VIN decoders to verify compliance, investigate vehicle theft, and ensure road safety standards. These tools are crucial for maintaining regulatory oversight and public safety."
    },
    {
      question: "What is the Anatomy of a VIN?",
      answer: "Each VIN is structured to include: World Manufacturer Identifier (WMI): The first three characters denote the manufacturer and country of origin. Vehicle Descriptor Section (VDS): Characters 4-9 provide details about the vehicle’s features and model specifications. Vehicle Identifier Section (VIS): Characters 10-17 include production year, assembly plant, and a unique serial number."
    },
    {
      question: "How to Use a VIN Decoder?",
      answer: "Using a VIN decoder is simple: Locate your vehicle’s VIN (on the dashboard, door jamb, or documentation). Input the VIN into a trusted VIN decoder service. Review the detailed report, which may include accident history, recalls, and ownership details."
    },
    {
      question: "Benefits of Using a VIN Decoder Service",
      answer: "Access comprehensive vehicle history, Ensure transparency when buying or selling vehicles, Protect against fraud or undisclosed issues, Simplify regulatory checks and investigations."
    }
  ];

  return (
    <ExplorePageContent
      title={title}
      description={description}
      listItems={listItems}
      faqs={faqItems}
    />
  );
}