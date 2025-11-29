import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import ProductDemo from "@/components/ProductDemo";
import Industries from "@/components/Industries";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import USPSection from "@/components/USPSection";
import FeatureDeepDive from "@/components/FeatureDeepDive";
import SocialProof from "@/components/SocialProof";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ValueProposition />
      <ProductDemo />
      <Industries />
      <ProblemSection />
      <SolutionSection />
      <USPSection />
      <FeatureDeepDive />
      <SocialProof />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
