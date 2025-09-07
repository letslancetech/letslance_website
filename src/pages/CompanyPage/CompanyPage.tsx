import Founders from "../Portfolio/components/Founders";
import About from "./components/About";
import Hero from "./components/Hero";
import OurValue from "./components/OurValue";
import TeamSection from "./components/TeamSection";
import WorkWithUs from "./components/WorkWithus";
import OurMission from "./components/OurMission";
import Footer from "../HomePage/components/footer";

export default function CompanyPage() {
  return (
    <>
      <Hero />
      <About />
      <Founders />
      {/* <TeamSection />
      <WorkWithUs />
      <OurMission />
      <OurValue /> */}
      <Footer />
    </>
  );
}
