import Breadcrumb from "../components/Breadcrumb";
import HeroSection from "../components/HeroSection";
import TwoColumnContainer from "../components/TwoColumnContainer";
import { TwoColumnSidebar } from "../components/TwoColumnSidebar";
import UrlList from "../components/url-list";

export default function VinDecoderPage() {
    return (
      <main>
        <HeroSection />
        <TwoColumnContainer>
            <div className="content">
                <Breadcrumb />
                <h2>BMW VIN Check: What is a BMW VIN?</h2>
                <p>The modern luxury vehicle market owes a lot to BMW. The 02 Series combined sports car performance with sedan practicality, racking up race wins through the 60s and 70s. This set the course for the brand, leading to legendary vehicles like the M3 and 8 Series. Meanwhile, smooth-running boxer twin and flat four engines established BMW motorcycles as the standard for touring. Today, both the car and motorcycle divisions are known for offering vehicles with class-leading technology.</p>
                <p>If you want to know more about your BMW, or you’re looking at buying one of these sporty luxury vehicles, you can learn a lot by getting a VIN check. Our search engine can decode the vehicle identification number, telling you about where and when it was built. It also tells you information about the model and the equipment installed at the factory. Looking for information on bikes? We also have a BMW motorcycle VIN decoder. Just type in your bike’s VIN into the search box, and you’ll get the same results as our car VIN search.</p>
                <h2>Helli</h2>
                <UrlList urlPrefix="/vin-decoder/" />
                <h3>Helle</h3>
                <h2>mmd</h2>
            </div>
            <TwoColumnSidebar />
        </TwoColumnContainer>
      </main>
    )
  }