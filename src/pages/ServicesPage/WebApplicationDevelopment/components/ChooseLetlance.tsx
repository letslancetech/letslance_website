import React from "react";
import centric from "../../../../assets/WebAppImgs/centric.png";
import scalable from "../../../../assets/WebAppImgs/scalable.png";
import fastSecure from "../../../../assets/WebAppImgs/fastSecure.png";

export default function ChooseLetlance() {
  const features = [
    {
      icon: centric,
      title: "User-Centric Design",
      borderClass:
        "rounded-tl-[50px] rounded-br-[50px] rounded-bl-[50px] rounded-tr-[10px]",
    },
    {
      icon: scalable,
      title: "Scalable Architecture",
      borderClass: "rounded-[50px]",
    },
    {
      icon: fastSecure,
      title: "Fast & Secure Apps",
      borderClass:
        "rounded-tr-[50px] rounded-br-[50px] rounded-bl-[50px] rounded-tl-[10px]",
    },
  ];

  return (
    <section className="py-16 md:px-8">
      <h1 className="mb-6 text-center text-3xl font-bold text-[#1c1c1c] md:text-4xl">
        Why Choose Our Services?
      </h1>
      <p className="mx-auto mb-10 max-w-3xl text-center text-base text-gray-600 md:text-lg">
        We turn your ideas into powerful web solutions that perform flawlessly
        across devices. Our approach blends creativity, technology, and strategy
        to deliver real business impact.
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
            <h3 className=" whitespace-nowrap text-[92%] font-semibold text-[#1c1c1c]">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
