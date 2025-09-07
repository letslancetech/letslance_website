import React from "react";
import Footer from "./components/footer";
import Hero from "./components/Hero";
import IndustryDropdown from "./components/IndustryDropdown";
import Innocation from "./components/Innovation";
import ServiceSection from "./components/Service";
import Technologies from "./components/Technologies";
import Testimonials from "./components/Testimonials";
import TrustLeaders from "./components/trustLeader";
import WhyChooseUs from "./components/WhyChooseUs";
import ThinkAgain from "./components/ThinkAgain";
import YourVision from "./components/YourVision";
import TechSolutions from "./components/TechSolutions";
import Innovation from "./components/Innovation";

export default function HomePage() {
  return (
    <>
      <Hero />

      <TrustLeaders />

      <IndustryDropdown />
      <TechSolutions />
      <Innovation />
      <ServiceSection />
      <Testimonials />
      <Technologies />
      <WhyChooseUs />
      <ThinkAgain />
      <YourVision />
      <Footer />
    </>
  );
}
