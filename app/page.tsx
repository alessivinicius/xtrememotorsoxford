import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { FeaturedVehicles } from "@/components/vehicles/FeaturedVehicles";
import { WhyXtreme } from "@/components/WhyXtreme";
import { OwnerSection } from "@/components/OwnerSection";
import { ReviewsSection } from "@/components/reviews/ReviewsSection";
import { BuyingProcess } from "@/components/BuyingProcess";
import { WarrantyBanner } from "@/components/WarrantyBanner";
import { SellYourCarTeaser } from "@/components/SellYourCarTeaser";
import { CTASection } from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <FeaturedVehicles />
      <WhyXtreme />
      <OwnerSection />
      <ReviewsSection />
      <BuyingProcess />
      <WarrantyBanner />
      <SellYourCarTeaser />
      <CTASection />
    </>
  );
}
