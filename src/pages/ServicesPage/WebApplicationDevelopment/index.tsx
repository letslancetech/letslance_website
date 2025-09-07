import React from "react";
import { Service } from "../../../interfaces/Data";
import Footer from "../../HomePage/components/footer";
import GetInTouch from "../components/GetInTouch";
import FeaturedProject from "../Aisolution/components/FeaturedProject";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import ChooseLetlance from "./components/ChooseLetlance";

export default function WebApplication() {
  return (
    <>
      {/* {service && <Hero service={service} />}
      {service && <Highlights service={service} />} */}
      <Hero />
      <Highlights />
      <FeaturedProject />
      <ChooseLetlance />
      <GetInTouch />
      <Footer />
    </>
  );
}
