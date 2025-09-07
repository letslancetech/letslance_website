import React from "react";
import customIcon from "../../../../assets/CustomServicePageImgs/custom.png";
import techIcon from "../../../../assets/CustomServicePageImgs/tech.png";
import supportIcon from "../../../../assets/CustomServicePageImgs/support.png";

export default function ChooseLetlance() {
  const features = [
    {
      icon: customIcon,
      title: "100+ Successful Custom Builds",
      borderClass:
        "rounded-tl-[50px] rounded-br-[50px] rounded-bl-[50px] rounded-tr-[10px]",
    },
    {
      icon: techIcon,
      title: "Future-Ready Tech Stack",
      borderClass: "rounded-[50px]",
    },
    {
      icon: supportIcon,
      title: "End-to-End Support",
      borderClass:
        "rounded-tr-[50px] rounded-br-[50px] rounded-bl-[50px] rounded-tl-[10px]",
    },
  ];

  return (
    <section className="py-16 md:px-8">
      <h1 className="mb-6 text-center text-3xl font-bold text-[#1c1c1c] md:text-4xl">
        Why Choose LetsLance?
      </h1>
      <p className="mx-auto mb-10 max-w-3xl text-center text-base text-gray-600 md:text-[15px]">
        We specialize in crafting custom software that’s built around your
        unique business goals. From strategy to scale, our focus is on
        delivering lasting value through every line of code.
      </p>

      <div className="p-page flex flex-wrap justify-center gap-6 px-4">
        {features.map((item, index) => (
          <div
            key={index}
            className={`mx-auto flex w-full flex-col items-center justify-between border-[5px] border-[#01426c] px-6 py-10 text-center shadow-sm sm:w-[48%] lg:w-[30%] ${item.borderClass}`}
          >
            <img
              src={item.icon}
              alt={item.title}
              className="mb-6 h-16 w-16 object-contain"
            />
            <div className="mb-4 h-0.5 w-full bg-[#5f9bbe]" />
            <h3 className=" whitespace-nowrap font-semibold text-[#1c1c1c] md:text-[70%] lg:text-[65%] 2xl:text-[85%]">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
