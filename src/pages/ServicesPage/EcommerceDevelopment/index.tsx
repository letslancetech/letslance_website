import React from "react";
import { Service } from "../../../interfaces/Data";
import Footer from "../../HomePage/components/footer";
import FeaturedProject from "../Aisolution/components/FeaturedProject";
import GetInTouch from "../components/GetInTouch";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
// import ChooseLetlance from "./components/ChooseLetlance";

export default function EcommerceDevelopment() {
  return (
    <>
      {/* {service && <Hero service={service} />}
      {service && <Highlights service={service} />} */}
      <Hero />
      <Highlights />
      <FeaturedProject />
      {/* <ChooseLetlance /> */}
      <GetInTouch />
      <Footer />
    </>
  );
}
