import Footer from "../HomePage/components/footer";
import Form from "./components/Form";
import Hero from "./components/Hero";
import GetInTouch from "./components/GetInTouch";
import Map from "./components/map";
import React from "react";

export default function ContactPage() {
  return (
    <section>
      <Hero />
      <GetInTouch />
      {/* <Form /> */}
      <Map />
      <Footer />
    </section>
  );
}
