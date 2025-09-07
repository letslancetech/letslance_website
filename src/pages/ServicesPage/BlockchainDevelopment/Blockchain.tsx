import React from "react";
import { Service } from "../../../interfaces/Data";
import Footer from "../../HomePage/components/footer";
import Hero from "./components/Hero";
import WhyChoose from "./components/WhyChoose";
import DevelopmentServices from "./components/DevelopmentServices"
import FeaturedProject from "../Aisolution/components/FeaturedProject";
import GetInTouch from "./components/GetInTouch"
import LogoSlider from "./components/LogoSlider";
import Highlights from "../components/Highlights11";

export default function Blockchain({ service }: { service: Service }) {
  return (
    <>
      <Hero />
      <WhyChoose />
      <DevelopmentServices />
      <FeaturedProject />
      <div className=" flex items-center justify-center bg-gray-50">
        <LogoSlider /> {/* You can change the speed */}
      </div>
      <GetInTouch />
      <Footer />
    </>
  );
}
