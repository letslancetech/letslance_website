import React from "react";
import icon1 from "../../../../assets/mobileDevImgs/custom.png";
import icon2 from "../../../../assets/mobileDevImgs/performance.png";
import icon3 from "../../../../assets/mobileDevImgs/experience.png";
import icon4 from "../../../../assets/mobileDevImgs/security.png";

export default function WhyPartnerWithUs() {
  const features = [
    {
      icon: icon1,
      title: "Custom-Built Solutions",
      desc: "We customize every app to align with your goals.",
    },
    {
      icon: icon2,
      title: "Blazing Fast Performance",
      desc: "Your users get speed they can feel, every time.",
    },
    {
      icon: icon3,
      title: "Delightful User Experience",
      desc: "Intuitive, engaging, and sleek interfaces that your customers actually enjoy using.",
    },
    {
      icon: icon4,
      title: "Ironclad Security",
      desc: "We protect your app like it’s our own.",
    },
  ];

  return (
    <section className="px-4 py-16 md:px-8">
      <h2 className="mb-12 text-center text-3xl font-bold text-[#0c1a2b] md:text-4xl">
        Why Partner With Us?
      </h2>

      <div className="flex flex-wrap justify-center gap-x-6 gap-y-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex w-full max-w-xs flex-col items-center text-center sm:w-[48%] lg:w-[22%]"
          >
            {/* Icon + Line */}
            <div className="relative mb-6 flex flex-col items-center">
              {/* Big circle with icon */}
              <div className="flex h-40 w-40 items-center justify-center rounded-full border-[5px] border-[#07507b]">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="h-16 w-16 object-contain"
                />
              </div>

              {/* Vertical line from circle down */}
              <div className="h-12 w-0.5 bg-[#5f9bbe]" />

              {/* Horizontal line touching vertical one */}
              <div className="h-0.5 w-[230px] bg-[#5f9bbe]" />
            </div>

            {/* Title + Description */}
            <div className="text-center">
              <h3 className="mb-2 text-lg font-bold text-[#1c1c1c]">
                {feature.title}
              </h3>
              <p className="w-52 text-sm text-gray-600">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
