import React from "react";
import { Service } from "../../../interfaces/Data";
import Footer from "../../HomePage/components/footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import FeaturedProject from "../Aisolution/components/FeaturedProject";
import GetInTouch from "../components/GetInTouch";
import WhyPartnerWithUs from "./components/Partners";

export default function MobileAppDevelopment() {
  return (
    <>
      {/* {service && <Hero service={service} />}
      {service && <Highlights service={service} />} */}
      <Hero />
      <Highlights />
      <FeaturedProject />
      <WhyPartnerWithUs />
      <GetInTouch />
      <Footer />
    </>
  );
}
