import React from "react";
import flexibleImg from "../../../assets/HomePageImgs/flexible.png";
import costImg from "../../../assets/HomePageImgs/benifit.png";
import expertImg from "../../../assets/HomePageImgs/experts.png";
import riskImg from "../../../assets/HomePageImgs/risk.png";

const services = [
  {
    title: "On Demand, Flexible",
    description:
      "As your business requires, select the most appropriate remote workforce.",
    icon: flexibleImg,
    color: "#7696DF",
  },
  {
    title: "Cost Benefit",
    description:
      "With our Tech team based out of India, We provide pricing that is 3-4x cheaper than HK's industry standard.",
    icon: costImg,
    color: "#4FA06F",
  },
  {
    title: "20+ IT experts",
    description:
      "Scale up with engineers knowledgeable in several technologies",
    icon: expertImg,
    color: "#FFD500",
  },
  {
    title: "Eliminate Risk",
    description:
      "Success can be attained with agile project management and reliable delivery",
    icon: riskImg,
    color: "#0091B9",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="p-page bg-white py-16 text-primary">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Why Choose us?</h2>
        <p className="mt-2 text-base text-gray-600 md:text-lg">
          We offer variety of software and web development services as{" "}
          <br className="hidden md:block" />
          per the requirement of client.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-12 flex flex-wrap justify-center gap-6 overflow-visible">
        {services.map((service, i) => {
          const cardClass = `card-${i}`;
          const customStyle: React.CSSProperties & { [key: string]: string } = {
            "--before-border-color": service.color,
            "--after-border-color": service.color,
          };

          return (
            <div
              key={i}
              className={`relative ${cardClass} z-10 flex w-full max-w-[320px] flex-col items-center gap-y-4 rounded-l bg-white p-6 text-center shadow-md transition before:absolute before:-left-1 before:-top-1 
              before:z-0 before:h-16 before:w-16 before:rounded-md before:border-l-4 before:border-t-4 before:content-[''] after:absolute after:-bottom-1 after:-right-1 
              after:z-0 after:h-16 after:w-16 after:rounded-md after:border-b-4 after:border-r-4 after:content-[''] hover:shadow-xl md:w-[45%] xl:w-[45%] 2xl:w-[22%]`}
              style={customStyle}
            >
              <style>
                {`
                  .${cardClass}::before {
                    border-color: var(--before-border-color);
                  }
                  .${cardClass}::after {
                    border-color: var(--after-border-color);
                  }
                `}
              </style>

              {/* Icon Image */}
              <div className="z-10">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="mx-auto h-28 w-28 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="z-10 text-lg font-semibold">{service.title}</h3>

              {/* Description */}
              <p className="z-10 text-sm text-gray-600">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
