import heroBg from "../../../assets/portfolio/hero.png";
import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#FCFCFC] border-l-[8px] md:border-l-[16px] border-[#292F42] rounded-tl-[10px] md:rounded-tl-[20px] rounded-bl-[10px] md:rounded-bl-[20px]">

      {/* Main content container */}
      <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-6 lg:gap-6 px-4 md:px-2 py-8 md:py-16">
        {/* Left side - Image (40% width) */}
        <div className="w-full lg:w-2/5 lg:flex lg:justify-end order-2 lg:order-1">
          <div className="relative w-full lg:w-auto">
            <img
              src={heroBg}
              alt="Portfolio showcase"
              className="w-full max-w-[400px] md:max-w-[500px] lg:w-[500px] h-auto object-cover shadow-lg rounded-lg mx-auto lg:mx-0"
            />
          </div>
        </div>

        {/* Right side - Text content (60% width) */}
        <div className="w-full lg:w-3/5 lg:flex lg:justify-start order-1 lg:order-2">
          <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-800 leading-tight mb-4 md:mb-6" style={{ fontFamily: 'League Gothic, Arial Black, sans-serif', letterSpacing: '-0.02em' }}>
              OUR<br />
              PORTFOLIO
            </h1>
            <p className="text-base md:text-lg text-gray-600 font-medium" style={{ fontFamily: 'Roboto Flex, sans-serif' }}>
              Our outcomes speak on our behalf
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
