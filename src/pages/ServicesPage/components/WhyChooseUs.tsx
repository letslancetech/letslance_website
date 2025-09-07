import React from "react";
import { Globe, Settings, Code, Shield } from "lucide-react";
import CustomAI from "../../../assets/lanceImages/customAi.png";
import domain from "../../../assets/lanceImages/domain.png";
import development from "../../../assets/lanceImages/development.png";
import ethical from "../../../assets/lanceImages/ethical.png";
const WhyChooseUs = () => {
  const features = [
    {
      number: "01",
      icon: CustomAI,
      title: "Custom-Built AI Models",
      description:
        "Our AI solutions aren't off-the-shelf. We analyze your business needs and build models specifically trained on your data to deliver meaningful insights and results.",
    },
    {
      number: "02",
      icon: domain,
      title: "Domain Expertise Across Industries",
      description:
        "Whether it's finance, healthcare, eCommerce, manufacturing, or real estate, we bring AI expertise tailored to your domain for maximum impact.",
    },
    {
      number: "03",
      icon: development,
      title: "End-to-End Development & Integration",
      description:
        "From idea to deployment and beyond, we take care of the entire lifecycle — model design, training, testing, deployment, and ongoing support.",
    },
    {
      number: "04",
      icon: ethical,
      title: "Responsible & Ethical AI",
      description:
        "We prioritize fairness, transparency, and explainability in every model we build, ensuring your AI stays compliant and trustworthy.",
    },
  ];

  return (
    <section className="bg-slate-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-800 lg:text-4xl">
            Why Choose Our AI Solutions?
          </h2>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {features.map((feature, index) => (
            <div key={index} className="relative">
              <div className="rounded-[10%] border-[5px] border-[#07507b] p-5">
                {/* Card container with fixed height for consistency */}
                <div
                  className="relative flex h-80 flex-col rounded-[10%] bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md lg:h-96 lg:p-8"
                  style={{
                    boxShadow: "11px 11px 55px -13px rgba(7, 80, 123, 1)",
                  }}
                >
                  {" "}
                  {/* Number badge - positioned at top right with margin */}
                  <div className="absolute -right-10 -top-10">
                    <div
                      className="flex h-36 w-36 items-center justify-center rounded-full"
                      style={{
                        background:
                          "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(225, 230, 239, 1))",
                      }}
                    >
                      <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#07507b] text-2xl font-bold text-white shadow-lg">
                        {feature.number}
                      </div>
                    </div>
                  </div>
                  {/* Card content */}
                  <div className="flex flex-1 flex-col justify-center text-center">
                    {/* Icon */}
                    <div className="mb-4 flex justify-center">
                      <div className="flex h-12 w-12 items-center justify-center">
                        <img
                          src={feature.icon}
                          alt={feature.title}
                          className="h-10 w-10 object-contain"
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="mb-3 text-lg font-semibold leading-tight text-slate-800 lg:text-xl">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-slate-600 lg:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
