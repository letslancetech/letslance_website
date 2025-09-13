import AllInsight from "./components/AllInsight";
import Hero from "./components/Hero";
import Insight from "./components/Insight";
import Founders from "../Portfolio/components/Founders";
import Footer from "../HomePage/components/footer";


export default function Portfolio() {
  return (
    <section className="bg-[#FCFCFC] min-h-screen pt-24">
      <Hero />
      {/* <Insight />
      <AllInsight /> */}
         <Founders />
         <Footer/>
    </section>
  );
}
