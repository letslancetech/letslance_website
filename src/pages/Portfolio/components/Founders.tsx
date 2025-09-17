import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLinkedin as FaLinkedinRaw } from "react-icons/fa";

const founders = [
  {
    number: "01",
    imageLeft: "https://letslance-portfolio.s3.ap-south-1.amazonaws.com/marketers_left.png",
    imageRight: "https://letslance-portfolio.s3.ap-south-1.amazonaws.com/marketers_right.png",
    title: "MarketersClique",
    description:
      "MarketersClique is a community-based platform designed for social media marketers to connect, learn, and grow, leveraging AI-powered tools to provide a personalized experience and data-driven insights. It offers a space for freelancers, agency professionals, and strategists to engage in expert-led discussions and access curated resources. The platform is designed to help marketers overcome challenges, accelerate their learning with practical, AI-enhanced insights, and stay ahead of the curve in the ever-evolving social media landscape.",
  },
  {
    number: "02",
    imageLeft: "https://letslance-portfolio.s3.ap-south-1.amazonaws.com/tps_left.png",
    imageRight: "https://letslance-portfolio.s3.ap-south-1.amazonaws.com/tps_right.png",
    title: "THE PLANET RESERVE ",
    description:
      "The Planet Reserve is a technology-driven carbon registry that empowers businesses, governments, and individuals to reduce carbon emissions. It focuses on nature-based climate action programs like reforestation and sustainable agriculture to restore the environment. The organization also emphasizes community involvement and provides a transparent registry system for carbon credit transactions.",
  },
  {
    number: "03",
    imageLeft: "https://letslance-portfolio.s3.ap-south-1.amazonaws.com/silisoul_left.png",
    imageRight: "https://letslance-portfolio.s3.ap-south-1.amazonaws.com/silisoul_right.png",
    title: "SILISOUL ",
    description:
      "Silisoul is a streetwear brand that offers a range of clothing for both men and women. Their collection includes oversized t-shirts, joggers, sweatshirts, and cargo trousers. They focus on relaxed and comfortable fits, with many items featuring graphic prints.",
  },
  {
    number: "04",
    imageLeft: "https://letslance-portfolio.s3.ap-south-1.amazonaws.com/goamigo_left.png",
    imageRight: "https://letslance-portfolio.s3.ap-south-1.amazonaws.com/goamigo_right.png",
    title: "GoAmigo",
    description:
      "GoAmigo is a comprehensive bike rental platform that connects users with nearby rental dealers, providing a seamless booking experience for users and an efficient management system for bike dealers. The platform is designed to operate as a two-sided marketplace.",
  },
  {
    number: "05",
    imageLeft: "https://letslance-portfolio.s3.ap-south-1.amazonaws.com/fantom_left.png",
    imageRight: "https://letslance-portfolio.s3.ap-south-1.amazonaws.com/fantom_right.png",
    title: "Fantom ",
    description:
      "Fantom is a high-performance, scalable, and secure contract platform. It is designed to overcome the limitations of previous generation blockchain platforms. Fantom's a BFT consensus mechanism allows it to be much faster and cheaper than older technologies, while also being highly secure.",
  },
  {
    number: "06",
    imageLeft: "https://letslance-portfolio.s3.ap-south-1.amazonaws.com/dropigo_left.png",
    imageRight: "https://letslance-portfolio.s3.ap-south-1.amazonaws.com/dropigo_right.png",
    title: "DropiGo",
    description:
      "DropiGo is an AI-powered, on-demand delivery platform for the Canadian market, offering a seamless and transparent experience for customers and a reliable income source for delivery agents. Using AI for route optimization and real-time updates, DropiGo aims to solve common delivery challenges and become Canada's top choice for deliveries.",
  },
  {
    number: "07",
    imageLeft: "https://letslance-portfolio.s3.ap-south-1.amazonaws.com/finzo_left.png",
    imageRight: "https://letslance-portfolio.s3.ap-south-1.amazonaws.com/finzo_right.png",
    title: "Finzo ",
    description:
      "Finzo is a comprehensive digital banking platform for the Indian market, focused on delivering a secure and modern financial experience. It allows users to open an account in minutes, conduct seamless UPI payments, and manage utility recharges. The platform also offers unique products like high-interest 'Smart Fixed Deposits' and an agent program for earning commissions through referrals.",
  },
  {
    number: "08",
    imageLeft: "https://letslance-portfolio.s3.ap-south-1.amazonaws.com/animeta_left.png",
    imageRight: "https://letslance-portfolio.s3.ap-south-1.amazonaws.com/animeta_right.png",
    title: "Animeta",
    description:
      "Animeta is an intelligent livestock healthcare app developed by LetsLance to empower farmers with quick and accurate animal disease diagnosis. The client required customized diagnostic flows for different animal types, a robust database for storing diverse conditions, and an easy-to-use interface suitable for rural connectivity. To meet these needs, we implemented PostgreSQL for efficient condition tracking, built real-time chatbot support for instant assistance, and designed a responsive, user-friendly interface that works seamlessly in low-bandwidth environments.",
  },
  {
    number: "09",
    imageLeft: "https://letslance-portfolio.s3.ap-south-1.amazonaws.com/tms_left.png",
    imageRight: "https://letslance-portfolio.s3.ap-south-1.amazonaws.com/tms_right.png",
    title: "The MBBS Planet",
    description:
      "LetsLance created the MBBS Planet, a comprehensive NEET counselling platform to simplify the medical admission journey for aspiring students. The client sought an AI-powered system capable of delivering accurate college predictions and flawless choice filling. We delivered a robust solution featuring intelligent predictors, real-time mentorship, and personalised counselling tools, offering end-to-end support that has earned the trust of thousands of medical aspirants across the country.",
  },
  {
    number: "10",
    imageLeft: "https://letslance-portfolio.s3.ap-south-1.amazonaws.com/enhancept_left.png",
    imageRight: "https://letslance-portfolio.s3.ap-south-1.amazonaws.com/enhancept_right.png",
    title: "Enhance PT",
    description:
      "Enhance PT is a personalized fitness and wellness platform built to support seniors, new mothers, and those recovering from injuries. The client needed age-specific programs and a safe, supportive training environment. We delivered a human-first solution led by certified trainers, offering tailored programs like senior mobility, pre/post-natal fitness, and recovery training. Backed by Fitness Australia standards, Enhance PT promotes progress without judgment—fostering a truly inclusive fitness community.",
  },
  {
    number: "11",
    imageLeft: "https://letslance-portfolio.s3.ap-south-1.amazonaws.com/ideavault_left.png",
    imageRight: "https://letslance-portfolio.s3.ap-south-1.amazonaws.com/ideavault_right.png",
    imageCenter: "https://letslance-portfolio.s3.ap-south-1.amazonaws.com/ideavault_center.png",
    title: "Ideavault",
    description:
      "Ideavault is a modern investment platform crafted to simplify US stock investing for the Hong Kong market. The client aimed to merge expert investment strategies with the accessibility of fractional investing. We built a seamless, user-friendly solution featuring professionally managed portfolios, dividend tracking, and real-time updates—empowering both novice and seasoned investors to make informed, confident decisions.",
    ideavault: true,
  },
  {
    number: "12",
    imageLeft: "https://letslance-portfolio.s3.ap-south-1.amazonaws.com/krishiyan_left.png",
    imageRight: "https://letslance-portfolio.s3.ap-south-1.amazonaws.com/krishiyan_right.png",
    title: "KrishiYan",
    description:
      "KrishiYan is a comprehensive agri-tech platform developed by LetsLance to empower farmers and FPOs by digitizing farm operations and improving market access. The client required a centralized solution to manage clustering, training, procurement, and logistics seamlessly. We delivered a cloud-powered mobile-web dashboard ecosystem integrated with local hubs—ensuring real-time connectivity between buyers, operations, and continuous farmer education across regions.",
  },
  {
    number: "13",
    imageLeft: "https://letslance-portfolio.s3.ap-south-1.amazonaws.com/bigwig_left.png",
    imageRight: "https://letslance-portfolio.s3.ap-south-1.amazonaws.com/bigwig_right.png",
    title: "Big Wig",
    description:
      "Big Wig is a high-performance plywood manufacturing solution developed by LetsLance to support modern construction needs with strength, precision, and export-ready quality. The client required scalable production for various plywood types, consistent finish, and ISO-certified quality control. To meet these goals, we set up advanced conveyor assembly lines, installed jumbo paper impregnated plants for a mirror-like finish, and implemented automated cutting tools, ensuring flawless manufacturing, perfect sizing, and global market readiness.",
  },
  {
    number: "14",
    imageLeft: "https://letslance-portfolio.s3.ap-south-1.amazonaws.com/roarink_left.png",
    imageRight: "https://letslance-portfolio.s3.ap-south-1.amazonaws.com/roarink_right.png",
    title: "Roarink",
    description:
      "Roarink is a dynamic political engagement platform built to transform how politicians connect with citizens in real time. The client requested a responsive solution to break down traditional communication barriers and foster more transparent dialogue. We developed a robust app ecosystem using Firebase, featuring live updates, personalized user profiles, and intuitive engagement tools—engineered to handle high user volumes seamlessly, even during peak political events.",
  },
  {
    number: "15",
    imageLeft: "https://letslance-portfolio.s3.ap-south-1.amazonaws.com/organica_left.png",
    imageRight: "https://letslance-portfolio.s3.ap-south-1.amazonaws.com/organica_right.png",
    imageCenter: "https://letslance-portfolio.s3.ap-south-1.amazonaws.com/organic_bottom.png",
    title: "Organics Mantra",
    description:
      "Organics Mantra is a sustainable farm-to-door delivery platform designed to provide fresh, organic produce to consumers across Hyderabad. The project focused on ensuring traceable sourcing from local farmers, seamless app-based ordering, and eco-conscious logistics. We enabled a smooth user experience with seasonal offers, loyalty rewards, and simplified order management. The system also supports backend tools for farm evaluation, real-time inventory updates, and surprise audits to maintain high purity standards.",
    organic: true,
  },
  {
    number: "16",
    imageLeft: "https://letslance-portfolio.s3.ap-south-1.amazonaws.com/gridflow_left.png",
    imageRight: "https://letslance-portfolio.s3.ap-south-1.amazonaws.com/gridflow_right.png",
    title: "GridFlow",
    description:
      "GridFlow is a smart EV charging platform developed by LetsLance to revolutionize sustainable mobility by tackling the infrastructure gap in electric vehicle adoption. The client wanted a seamless experience for EV drivers, a centralized dashboard for operators, and customizable tools for fleet and property managers. To address these goals, we built a robust, real-time monitoring system, integrated smart charging schedules, enabled payment processing, and developed a white-label app platform—delivering accessible, reliable, and intelligent EV charging solutions across global markets.",
  },
  {
    number: "17",
    imageLeft: "https://letslance-portfolio.s3.ap-south-1.amazonaws.com/bu_left.png",
    imageRight: "https://letslance-portfolio.s3.ap-south-1.amazonaws.com/bu_right.png",
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
                  className="text-4xl lg:text-5xl font-normal text-[#07507B] leading-tight" 
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
              {founder.ideavault ? (
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
                  {/* Center Image - Hidden on mobile, visible on desktop */}
                  <div className="relative group -mt-40 -ml-20 hidden lg:block">
                    <img
                      src={founder.imageCenter}
                      alt={`${founder.title} center`}
                      className="w-48 h-auto transition-transform duration-300 group-hover:scale-105"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    />
                  </div>
                </div>
              </div>
              ) : founder.organic ? (
                // Organics Mantra Layout: Left/Right columns on top, center image at bottom with left alignment
                <div className="p-8">
                  {/* Left and Right Columns at Top */}
                  <div className="flex flex-col lg:flex-row mb-8">
                    {/* Left Column - Text and Left Image */}
                    <div className="flex-1 p-4 lg:pr-8">
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
                      <div className="relative group ml-0 lg:ml-12">
                        <img
                          src={founder.imageLeft}
                          alt={`${founder.title} left`}
                          className="w-full lg:w-64 h-auto transition-transform duration-300 group-hover:scale-105"
                          data-aos="fade-right"
                          data-aos-delay="100"
                        />
                      </div>
                    </div>

                    {/* Right Column - Right Image */}
                    <div className="flex-1 p-4 lg:pl-8">
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

                  {/* Center Image at Bottom - Hidden on mobile, visible on desktop */}
                  <div className="relative group -mt-0 lg:-mt-48 hidden lg:block">
                    <img
                      src={founder.imageCenter}
                      alt={`${founder.title} center`}
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    />
                  </div>
                </div>
              ) : (
                // Two Column Layout for Other Projects
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
                  <div className="flex-1 p-4 mt-8">
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
              )}
            </div>
          ))}

          <div className="mt-12 text-center" data-aos="fade-up">
            <p
              className="text-4xl font-semibold"
              style={{ fontFamily: 'Syne, sans-serif', color: '#292F42' }}
            >
              AND MANY MORE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
