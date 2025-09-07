import React from "react";
import { Service } from "../../../interfaces/Data";
import Footer from "../../HomePage/components/footer";
import FeaturedProject from "./components/FeaturedProject";
import WhyChooseUs from "./components/WhyChooseUs";
import Highlights from "./components/Highlights";
import GetInTouch from "../components/GetInTouch";
import HowWeWork from "./components/HowWeWork";
import Hero from "./components/Hero";

export default function AiSolution() {
  return (
    <>
      {/* <div className="pt-500">fdhtfdfdf</div> */}
      {/* <Hero /> */}
      <Hero />
      <Highlights />

      <WhyChooseUs />
      <FeaturedProject />
      <HowWeWork />
      <GetInTouch />
      <Footer />
    </>
  );
}
