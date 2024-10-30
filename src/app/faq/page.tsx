import FAQBasic from "../components/FAQBasic"
import HeroSection from '../components/HeroSection'


export default function faq() {
    const faqItems = [
        {
          question: "What is a ChassisVIN Vehicle History Report?",
          answer: "A ChassisVIN Vehicle History Report provides detailed information about a vehicle's past, including accidents, ownership history, and more."
        },
        {
          question: "For whom do we provide Vehicle History Reports?",
          answer: "We provide Vehicle History Reports for car buyers, sellers, dealers, and anyone interested in learning about a vehicle's history."
        },
        {
          question: "What is a VIN and why is it important?",
          answer: "A Vehicle Identification Number (VIN) is a unique 17-character code assigned to every vehicle. It provides essential information about the vehicle's make, model, year, and place of manufacture. Checking the VIN is crucial before purchasing a used car to uncover any potential issues like past accidents, theft history, or outstanding recalls."
        },
        {
          question: "Where can I find my vehicle's VIN?",
          answer: "The VIN can be found in several places on your vehicle: on the dashboard through the windshield on the driver's side, on the driver’s side door jamb, on your vehicle's title or registration, and on your insurance card."
        },
        {
          question: "What services do you provide?",
          answer: "At ChassisVIN, we offer a range of services including VIN Decoding, Window Sticker Generation, License Plate Lookup, and Vehicle History Reports covering ownership history, accident reports, title status, and more."
        },
        {
          question: "How does a VIN decoder work?",
          answer: "A VIN decoder interprets the unique VIN to provide detailed specifications about the vehicle. It extracts information such as the manufacturer, model year, body style, engine type, and other vital data based on the VIN structure and database lookups."
        },
        {
          question: "Do you provide reports for all vehicles?",
          answer: "We provide reports for a wide range of vehicles, including standard passenger vehicles, motorcycles, RVs, and classic cars. However, some older or less common vehicles may not have comprehensive data available."
        },
        {
          question: "Is the VIN check free?",
          answer: "Yes! You can perform a free VIN check on our website. For more detailed vehicle history reports, there may be a nominal fee, especially if you opt for our Unlimited Vehicle History Reports package."
        },
        {
          question: "How accurate is the information provided in your reports?",
          answer: "ChassisVIN utilizes data from multiple reliable sources, including the National Motor Vehicle Title Information System (NMVTIS), to ensure our reports are as accurate and comprehensive as possible. However, we recommend checking multiple sources if you're making a significant investment."
        },
        {
          question: "Can I get a report if I only have a license plate number?",
          answer: "Absolutely! Our license plate lookup feature allows you to retrieve vehicle information even if you do not have the VIN. Simply enter the U.S. license plate number, and we will provide you with the available details."
        },
        {
          question: "What if I can't find my VIN or license plate number?",
          answer: "If you’re unable to locate your VIN or license plate number, you can still request a vehicle history report using other identifying information. Our customer support team is also available to assist you in finding the necessary details."
        },
        {
          question: "How do I contact your customer support?",
          answer: "You can reach our dedicated customer support team via our website's contact page or by email. We offer chat support 24/7 and typically respond within 10 minutes during business hours (7 am - 6 pm EST, Monday - Friday)."
        },
        {
          question: "What is chassis information, and where can I find it?",
          answer: "Chassis information refers to the structural framework of a vehicle that houses the body and other essential components. This information can typically be found on the VIN plate, in the owner’s manual, or in detailed vehicle history reports."
        },
        {
          question: "How do I get started with my VIN check?",
          answer: "Getting started is easy! Simply enter your VIN or license plate number in the designated fields on our homepage and click 'Check VIN.' You’ll receive instant results and have the option to purchase more detailed reports if needed."
        }
    ];
      
  return (
    <section className='px-4 pb-8'>
        <HeroSection showForm={false} title="Answers to Your Most Asked Questions" description="Got a question? You’re in the right place. We’ve gathered the most frequently asked questions to make finding answers quick and easy. Explore below to get the information you need!" />
        <FAQBasic title="Frequently Asked Questions" items={faqItems} />
    </section>
  )
}