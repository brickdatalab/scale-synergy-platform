import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import HowItWorks from "@/components/HowItWorks";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import ProductPreview from "@/components/ProductPreview";
import AddOns from "@/components/AddOns";
import WhyDifferent from "@/components/WhyDifferent";
import Delivery from "@/components/Delivery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { ScrollIndicator } from "@/components/ScrollIndicator";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ScrollIndicator />
      <TrustBar />
      <HowItWorks />
      <Problem />
      <Solution />
      <ProductPreview />
      <AddOns />
      <WhyDifferent />
      <Delivery />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
