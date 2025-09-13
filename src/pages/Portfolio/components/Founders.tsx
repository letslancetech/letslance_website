import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import founderBg from "../../../assets/lanceImages/founderBg.png";
import { FaLinkedin as FaLinkedinRaw } from "react-icons/fa";
import keshavGarg from "../../../assets/lanceImages/keshavGarg.png";
import animeta_left from "../../../assets/portfolio/animeta_left.png";
import animeta_right from "../../../assets/portfolio/animeta_right.png";
import planetReserve_left from "../../../assets/portfolio/tps_left.png";
import planetReserve_right from "../../../assets/portfolio/tps_right.png";
import mbbs_left from "../../../assets/portfolio/tms_left.png";
import mbbs_right from "../../../assets/portfolio/tms_right.png";
import krishiyan_left from "../../../assets/portfolio/krishiyan_left.png";
import krishiyan_right from "../../../assets/portfolio/krishiyan_right.png";
import Ideavault_left from "../../../assets/portfolio/ideavault_left.png";
import Ideavault_right from "../../../assets/portfolio/ideavault_right.png";
import roarink_left from "../../../assets/portfolio/roarink_left.png";
import roarink_right from "../../../assets/portfolio/roarink_right.png";
import businessUnlimited_left from "../../../assets/portfolio/bu_left.png";
import businessUnlimited_right from "../../../assets/portfolio/bu_right.png";
import EnhancePT_left from "../../../assets/portfolio/enhancept_left.png";
import EnhancePT_right from "../../../assets/portfolio/enhancept_right.png";
import Natours_left from "../../../assets/portfolio/natours_left.png";
import Natours_right from "../../../assets/portfolio/natours_right.png";
import BigwigPly_left from "../../../assets/portfolio/bigwig_left.png";
import BigwigPly_right from "../../../assets/portfolio/bigwig_right.png";
import Mantra_left from "../../../assets/portfolio/organic_left.png";
import Mantra_right from "../../../assets/portfolio/organic_right.png";
import GridFlow_left from "../../../assets/portfolio/gridflow_left.png";
import GridFlow_right from "../../../assets/portfolio/gridflow_right.png";
import MarketersClique_left from "../../../assets/portfolio/marketers_left.png";
import MarketersClique_right from "../../../assets/portfolio/marketers_right.png";
import ThePlanetReserve_left from "../../../assets/portfolio/tps_left.png";
import ThePlanetReserve_right from "../../../assets/portfolio/tps_right.png";
import Silisoul_left from "../../../assets/portfolio/silisoul_left.png";
import Silisoul_right from "../../../assets/portfolio/silisoul_right.png";
import GoAmigo_left from "../../../assets/portfolio/goamigo_left.png";
import GoAmigo_right from "../../../assets/portfolio/goamigo_right.png";
import Fantom_left from "../../../assets/portfolio/fantom_left.png";
import Fantom_right from "../../../assets/portfolio/fantom_right.png";
import DropiGo_left from "../../../assets/portfolio/dropigo_left.png";
import DropiGo_right from "../../../assets/portfolio/dropigo_right.png";
import Finzo_left from "../../../assets/portfolio/finzo_left.png";
import Finzo_right from "../../../assets/portfolio/finzo_right.png";

const founders = [
  {
    number: "01",
    imageLeft: MarketersClique_left,
    imageRight: MarketersClique_right,
    title: "MarketersClique",
    description:
      "MarketersClique is a community-based platform designed for social media marketers to connect, learn, and grow, leveraging AI-powered tools to provide a personalized experience and data-driven insights. It offers a space for freelancers, agency professionals, and strategists to engage in expert-led discussions and access curated resources. The platform is designed to help marketers overcome challenges, accelerate their learning with practical, AI-enhanced insights, and stay ahead of the curve in the ever-evolving social media landscape.",
  },
  {
    number: "02",
    imageLeft: ThePlanetReserve_left,
    imageRight: ThePlanetReserve_right,
    title: "THE PLANET RESERVE ",
    description:
      "The Planet Reserve is a technology-driven carbon registry that empowers businesses, governments, and individuals to reduce carbon emissions. It focuses on nature-based climate action programs like reforestation and sustainable agriculture to restore the environment. The organization also emphasizes community involvement and provides a transparent registry system for carbon credit transactions.",
  },
  {
    number: "03",
    imageLeft: Silisoul_left,
    imageRight: Silisoul_right,
    title: "SILISOUL ",
    description:
      "Silisoul is a streetwear brand that offers a range of clothing for both men and women. Their collection includes oversized t-shirts, joggers, sweatshirts, and cargo trousers. They focus on relaxed and comfortable fits, with many items featuring graphic prints.",
  },
  {
    number: "04",
    imageLeft: GoAmigo_left,
    imageRight: GoAmigo_right,
    title: "GoAmigo",
    description:
      "GoAmigo is a comprehensive bike rental platform that connects users with nearby rental dealers, providing a seamless booking experience for users and an efficient management system for bike dealers. The platform is designed to operate as a two-sided marketplace.",
  },
  {
    number: "05",
    imageLeft: Fantom_left,
    imageRight: Fantom_right,
    title: "Fantom ",
    description:
      "Fantom is a high-performance, scalable, and secure contract platform. It is designed to overcome the limitations of previous generation blockchain platforms. Fantom's a BFT consensus mechanism allows it to be much faster and cheaper than older technologies, while also being highly secure.",
  },
  {
    number: "06",
    imageLeft: DropiGo_left,
    imageRight: DropiGo_right,
    title: "DropiGo",
    description:
      "DropiGo is an AI-powered, on-demand delivery platform for the Canadian market, offering a seamless and transparent experience for customers and a reliable income source for delivery agents. Using AI for route optimization and real-time updates, DropiGo aims to solve common delivery challenges and become Canada's top choice for deliveries.",
  },
  {
    number: "07",
    imageLeft: Finzo_left,
    imageRight: Finzo_right,
    title: "Finzo ",
    description:
      "Finzo is a comprehensive digital banking platform for the Indian market, focused on delivering a secure and modern financial experience. It allows users to open an account in minutes, conduct seamless UPI payments, and manage utility recharges. The platform also offers unique products like high-interest 'Smart Fixed Deposits' and an agent program for earning commissions through referrals.",
  },
  {
    number: "08",
    imageLeft: animeta_left,
    imageRight: animeta_right,
    title: "Animeta",
    description:
      "Animeta is an intelligent livestock healthcare app developed by LetsLance to empower farmers with quick and accurate animal disease diagnosis. The client required customized diagnostic flows for different animal types, a robust database for storing diverse conditions, and an easy-to-use interface suitable for rural connectivity. To meet these needs, we implemented PostgreSQL for efficient condition tracking, built real-time chatbot support for instant assistance, and designed a responsive, user-friendly interface that works seamlessly in low-bandwidth environments.",
  },
  {
    number: "09",
    imageLeft: mbbs_left,
    imageRight: mbbs_right,
    title: "The MBBS Planet",
    description:
      "LetsLance created the MBBS Planet, a comprehensive NEET counselling platform to simplify the medical admission journey for aspiring students. The client sought an AI-powered system capable of delivering accurate college predictions and flawless choice filling. We delivered a robust solution featuring intelligent predictors, real-time mentorship, and personalised counselling tools, offering end-to-end support that has earned the trust of thousands of medical aspirants across the country.",
  },
  {
    number: "10",
    imageLeft: EnhancePT_left,
    imageRight: EnhancePT_right,
    title: "Enhance PT",
    description:
      "Enhance PT is a personalized fitness and wellness platform built to support seniors, new mothers, and those recovering from injuries. The client needed age-specific programs and a safe, supportive training environment. We delivered a human-first solution led by certified trainers, offering tailored programs like senior mobility, pre/post-natal fitness, and recovery training. Backed by Fitness Australia standards, Enhance PT promotes progress without judgment—fostering a truly inclusive fitness community.",
  },
  {
    number: "11",
    imageLeft: Ideavault_left,
    imageRight: Ideavault_right,
    title: "Ideavault",
    description:
      "Ideavault is a modern investment platform crafted to simplify US stock investing for the Hong Kong market. The client aimed to merge expert investment strategies with the accessibility of fractional investing. We built a seamless, user-friendly solution featuring professionally managed portfolios, dividend tracking, and real-time updates—empowering both novice and seasoned investors to make informed, confident decisions.",
  },
  {
    number: "12",
    imageLeft: krishiyan_left,
    imageRight: krishiyan_right,
    title: "KrishiYan",
    description:
      "KrishiYan is a comprehensive agri-tech platform developed by LetsLance to empower farmers and FPOs by digitizing farm operations and improving market access. The client required a centralized solution to manage clustering, training, procurement, and logistics seamlessly. We delivered a cloud-powered mobile-web dashboard ecosystem integrated with local hubs—ensuring real-time connectivity between buyers, operations, and continuous farmer education across regions.",
  },
  {
    number: "13",
    imageLeft: BigwigPly_left,
    imageRight: BigwigPly_right,
    title: "Big Wig",
    description:
      "Big Wig is a high-performance plywood manufacturing solution developed by LetsLance to support modern construction needs with strength, precision, and export-ready quality. The client required scalable production for various plywood types, consistent finish, and ISO-certified quality control. To meet these goals, we set up advanced conveyor assembly lines, installed jumbo paper impregnated plants for a mirror-like finish, and implemented automated cutting tools, ensuring flawless manufacturing, perfect sizing, and global market readiness.",
  },
  {
    number: "14",
    imageLeft: roarink_left,
    imageRight: roarink_right,
    title: "Roarink",
    description:
      "Roarink is a dynamic political engagement platform built to transform how politicians connect with citizens in real time. The client requested a responsive solution to break down traditional communication barriers and foster more transparent dialogue. We developed a robust app ecosystem using Firebase, featuring live updates, personalized user profiles, and intuitive engagement tools—engineered to handle high user volumes seamlessly, even during peak political events.",
  },
  {
    number: "15",
    imageLeft: Mantra_left,
    imageRight: Mantra_right,
    title: "Organics Mantra",
    description:
      "Organics Mantra is a sustainable farm-to-door delivery platform designed to provide fresh, organic produce to consumers across Hyderabad. The project focused on ensuring traceable sourcing from local farmers, seamless app-based ordering, and eco-conscious logistics. We enabled a smooth user experience with seasonal offers, loyalty rewards, and simplified order management. The system also supports backend tools for farm evaluation, real-time inventory updates, and surprise audits to maintain high purity standards.",
  },
  {
    number: "16",
    imageLeft: GridFlow_left,
    imageRight: GridFlow_right,
    title: "GridFlow",
    description:
      "GridFlow is a smart EV charging platform developed by LetsLance to revolutionize sustainable mobility by tackling the infrastructure gap in electric vehicle adoption. The client wanted a seamless experience for EV drivers, a centralized dashboard for operators, and customizable tools for fleet and property managers. To address these goals, we built a robust, real-time monitoring system, integrated smart charging schedules, enabled payment processing, and developed a white-label app platform—delivering accessible, reliable, and intelligent EV charging solutions across global markets.",
  },
  {
    number: "17",
    imageLeft: businessUnlimited_left,
    imageRight: businessUnlimited_right,
    title: "Business Unlimited",
    description:
      "Business Unlimited is a tech-driven coaching platform created by LetsLance to support entrepreneurs and professionals in achieving structured personal and business growth. The client needed a comprehensive system that could unify key growth areas into one seamless experience. We delivered a platform that blends proven global coaching methodologies with intuitive tools for wealth creation, team leadership, and time management—empowering users to master their full growth journey in one place.",
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
      className="relative bg-[#FCFCFC] py-20"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-[#07507b] sm:px-6 lg:px-8">
        {/* <h2 className="mb-16 text-center text-4xl font-bold">
          The Visionaries Behind LetsLance dfdfdf
        </h2> */}

        <div className="space-y-16">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden"
              style={{
                boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.16)'
              }}
              data-aos="fade-up"
            >
              {/* Top Curved Header Section */}
              <div 
                className="bg-white flex justify-between items-center px-8"
                style={{ 
                  height: 100,
                  background: '#FFFFFF',
                  borderBottomLeftRadius: 50,
                  borderBottomRightRadius: 50,
                  boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.16)'
                }}
              >
                <h3 
                  className="text-4xl lg:text-5xl font-normal text-[#0B132A] leading-tight" 
                  style={{ fontFamily: 'Londrina Solid, sans-serif' }}
                >
                  {founder.title}
                </h3>
                <span 
                  className="text-4xl lg:text-5xl font-normal text-[#0B132A]"
                  style={{ fontFamily: 'SF Distant Galaxy AltOutline, sans-serif' }}
                >
                  {founder.number}
                </span>
              </div>

              {/* Two Column Layout */}
              <div className="flex flex-col lg:flex-row">
                {/* Left Column - Text and Left Image */}
                <div className="flex-1 p-8">
                  <p 
                    className="text-sm leading-relaxed mb-8" 
                    style={{ 
                      fontFamily: 'Syne, sans-serif',
                      color: '#1F1F1FD9'
                    }}
                  >
                    {founder.description}
                  </p>
                  
                  {/* Left Image */}
                  <div className="relative group">
                    <img
                      src={founder.imageLeft}
                      alt={`${founder.title} left`}
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                      data-aos="fade-right"
                      data-aos-delay="100"
                    />
                  </div>
                </div>

                {/* Right Column - Right Image */}
                <div className="flex-1 p-4">
                  <div className="relative group">
                    <img
                      src={founder.imageRight}
                      alt={`${founder.title} right`}
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                      data-aos="fade-left"
                      data-aos-delay="200"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
