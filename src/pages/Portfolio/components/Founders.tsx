import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import founderBg from "../../../assets/lanceImages/founderBg.png";
import { FaLinkedin as FaLinkedinRaw } from "react-icons/fa";
import keshavGarg from "../../../assets/lanceImages/keshavGarg.png";
import animeta from "../../../assets/portfolio/animeta.png"
import planetReserve from "../../../assets/portfolio/planet-reserve.png"
import mbbs from "../../../assets/portfolio/mbbs-reserve.png";
import krishiyan from "../../../assets/portfolio/krishiyan.png";
import Ideavault from "../../../assets/portfolio/Ideavault.png";
import roarink from "../../../assets/portfolio/roarink.png";
import businessUnlimited from "../../../assets/portfolio/businessUnlimited.png";
import EnhancePT from "../../../assets/portfolio/EnhancePT.png";
import Natours from "../../../assets/portfolio/Natours.png";
import BigwigPly from "../../../assets/portfolio/BigwigPly.png";
import Mantra from "../../../assets/portfolio/Mantra.png";
import GridFlow from "../../../assets/portfolio/GridFlow.png";
const founders = [
  {
    name: "01",
    image: animeta,
    title: "Animeta",
    description:
      "Animeta is an intelligent livestock healthcare app developed by LetsLance to empower farmers with quick and accurate animal disease diagnosis. The client required customized diagnostic flows for different animal types, a robust database for storing diverse conditions, and an easy-to-use interface suitable for rural connectivity. To meet these needs, we implemented PostgreSQL for efficient condition tracking, built real-time chatbot support for instant assistance, and designed a responsive, user-friendly interface that works seamlessly in low-bandwidth environments.",
  },
  {
    name: "02",
    image: planetReserve,
    title: "The Planet Reserve",
    description:
      "The Planet Reserve is a next-gen climate-tech platform designed by us to accelerate global sustainability efforts. The client needed a powerful, transparent system to track emissions, verify climate actions, and support decentralized environmental projects. We delivered a solution powered by advanced dMRV technology, enabling real-time emissions tracking, transparent climate unit issuance, and zero-fee access for developers to promote inclusive green action.",
  },
  {
    name: "03",
    image: mbbs,
    title: "The MBBS Planet",
    description:
      "LetsLance created the MBBS Planet, a comprehensive NEET counselling platform to simplify the medical admission journey for aspiring students. The client sought an AI-powered system capable of delivering accurate college predictions and flawless choice filling. We delivered a robust solution featuring intelligent predictors, real-time mentorship, and personalised counselling tools, offering end-to-end support that has earned the trust of thousands of medical aspirants across the country.",
    linkedin: "https://www.linkedin.com/in/janesmith",
  },
  {
    name: "04",
    image: EnhancePT,
    title: "Enhance PT",
    description:
      "Enhance PT is a personalized fitness and wellness platform built to support seniors, new mothers, and those recovering from injuries. The client needed age-specific programs and a safe, supportive training environment. We delivered a human-first solution led by certified trainers, offering tailored programs like senior mobility, pre/post-natal fitness, and recovery training. Backed by Fitness Australia standards, Enhance PT promotes progress without judgment—fostering a truly inclusive fitness community.",
  },
  {
    name: "05",
    image: Natours,
    title: "Natours",
    description:
      "Natours is an immersive travel booking platform designed to connect adventure seekers with nature through curated tour experiences. The client needed a visually captivating website with detailed tour listings, user testimonials, and a seamless booking flow. To achieve this, we built a responsive, tour-focused UI showcasing highlights like 'The Sea Explorer' and 'The Forest Hiker,' integrated interactive sections for user engagement, and optimized form-based booking for different group sizes—all crafted to inspire users to explore the outdoors.",
  },
  {
    name: "06",
    image: krishiyan,
    title: "KrishiYan",
    description:
      "KrishiYan is a comprehensive agri-tech platform developed by LetsLance to empower farmers and FPOs by digitizing farm operations and improving market access. The client required a centralized solution to manage clustering, training, procurement, and logistics seamlessly. We delivered a cloud-powered mobile-web dashboard ecosystem integrated with local hubs—ensuring real-time connectivity between buyers, operations, and continuous farmer education across regions.",
  },
  {
    name: "07",
    image: Ideavault,
    title: "Ideavault",
    description:
      "Ideavault is a modern investment platform crafted to simplify US stock investing for the Hong Kong market. The client aimed to merge expert investment strategies with the accessibility of fractional investing. We built a seamless, user-friendly solution featuring professionally managed portfolios, dividend tracking, and real-time updates—empowering both novice and seasoned investors to make informed, confident decisions.",
  },
  {
    name: "08",
    image: BigwigPly,
    title: "Big Wig",
    description:
      "Big Wig is a high-performance plywood manufacturing solution developed by LetsLance to support modern construction needs with strength, precision, and export-ready quality. The client required scalable production for various plywood types, consistent finish, and ISO-certified quality control. To meet these goals, we set up advanced conveyor assembly lines, installed jumbo paper impregnated plants for a mirror-like finish, and implemented automated cutting tools, ensuring flawless manufacturing, perfect sizing, and global market readiness.",
  },
  {
    name: "09",
    image: roarink,
    title: "Roarink",
    description:
      "Roarink is a dynamic political engagement platform built to transform how politicians connect with citizens in real time. The client requested a responsive solution to break down traditional communication barriers and foster more transparent dialogue. We developed a robust app ecosystem using Firebase, featuring live updates, personalized user profiles, and intuitive engagement tools—engineered to handle high user volumes seamlessly, even during peak political events.",
  },
  {
    name: "10",
    image: Mantra,
    title: "Organics Mantra",
    description:
      "Organics Mantra is a sustainable farm-to-door delivery platform designed to provide fresh, organic produce to consumers across Hyderabad. The project focused on ensuring traceable sourcing from local farmers, seamless app-based ordering, and eco-conscious logistics. We enabled a smooth user experience with seasonal offers, loyalty rewards, and simplified order management. The system also supports backend tools for farm evaluation, real-time inventory updates, and surprise audits to maintain high purity standards.",
  },
  {
    name: "11",
    image: businessUnlimited,
    title: "Business Unlimited",
    description:
      "Business Unlimited is a tech-driven coaching platform created by LetsLance to support entrepreneurs and professionals in achieving structured personal and business growth. The client needed a comprehensive system that could unify key growth areas into one seamless experience. We delivered a platform that blends proven global coaching methodologies with intuitive tools for wealth creation, team leadership, and time management—empowering users to master their full growth journey in one place.",
  },
  {
    name: "12",
    image: GridFlow,
    title: "GridFlow",
    description:
      "GridFlow is a smart EV charging platform developed by LetsLance to revolutionize sustainable mobility by tackling the infrastructure gap in electric vehicle adoption. The client wanted a seamless experience for EV drivers, a centralized dashboard for operators, and customizable tools for fleet and property managers. To address these goals, we built a robust, real-time monitoring system, integrated smart charging schedules, enabled payment processing, and developed a white-label app platform—delivering accessible, reliable, and intelligent EV charging solutions across global markets.",
  },
];
const FaLinkedin = FaLinkedinRaw as unknown as React.FC<{ size?: number }>;

export default function Founders() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      className="relative bg-cover bg-center py-20"
      // style={{ backgroundImage: `url(${founderBg})` }}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-[#07507b] sm:px-6 lg:px-8">
        {/* <h2 className="mb-16 text-center text-4xl font-bold">
          The Visionaries Behind LetsLance dfdfdf
        </h2> */}

        <div className="space-y-10">
          {founders.map((founder, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center gap-10 text-center md:text-left ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
            
              <div
                className="max-w-xl"
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              >
                <h3 className="text-8xl font-normal text-[#D8D8D8] mb-5">
                  {founder.name}
                </h3>
                <p className="text-5xl mb-2 text-[#0B132A] font-medium">{founder.title}</p>
                <p className="mb-4 text-[#4F5665] text-lg">{founder.description}</p>
                {/* <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-500"
                >
                  <FaLinkedin size={32} />
                </a> */}
              </div>
              <img
                src={founder.image}
                alt={founder.title}
                className="h-50 w-[40%]"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
