import React from "react";
import { Service } from "../../../interfaces/Data";
import Footer from "../../HomePage/components/footer";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import FeaturedProject from "../Aisolution/components/FeaturedProject";
import GetInTouch from "../components/GetInTouch";

export default function SoftwareProductDevelopment({
  service,
}: {
  service: Service;
}) {
  return (
    <>
      {service && <Hero service={service} />}
      {service && <Highlights service={service} />}
      <FeaturedProject />
      <GetInTouch />
      <Footer />
    </>
  );
}
