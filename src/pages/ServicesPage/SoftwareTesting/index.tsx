import React from "react";
import { Service } from "../../../interfaces/Data";
import Footer from "../../HomePage/components/footer";

import FeaturedProject from "../Aisolution/components/FeaturedProject";
import GetInTouch from "../components/GetInTouch";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";

export default function SoftwareTesting() {
  return (
    <>
      {/* {service && <Hero service={service} />}
      {service && <Highlights service={service} />} */}
      <Hero />
      <Highlights />
      <FeaturedProject />
      <GetInTouch />
      <Footer />
    </>
  );
}
