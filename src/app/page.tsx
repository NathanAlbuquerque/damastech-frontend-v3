import { CtaSection } from "@/components/sections/landing/CtaSection";
import { FaqSection } from "@/components/sections/landing/FaqSection";
import { FeaturesSection } from "@/components/sections/landing/FeaturesSection";
import { HeroSection } from "@/components/sections/landing/HeroSection";
import { JourneySection } from "@/components/sections/landing/JourneySection";
import { NewsletterSection } from "@/components/sections/landing/NewsletterSection";
import { SupportersSection } from "@/components/sections/landing/SupportersSection";
import { TestimonialsSection } from "@/components/sections/landing/TestimonialsSection";
import { TracksSection } from "@/components/sections/landing/TracksSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <JourneySection />
      <TracksSection />
      <TestimonialsSection />
      <CtaSection />
      <FaqSection />
      <NewsletterSection />
      <SupportersSection />
    </>
  );
}
