import heroBg from "../../../assets/portfolio/hero.png";
import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#FCFCFC] border-l-[8px] md:border-l-[16px] border-[#292F42] rounded-tl-[10px] md:rounded-tl-[20px] rounded-bl-[10px] md:rounded-bl-[20px]">

      {/* Main content container */}
      <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-6 lg:gap-12 px-4 md:px-8 lg:px-16 py-8 md:py-16 max-w-7xl mx-auto">
        {/* Left side - Image (40% width) */}
        <div className="w-full lg:w-2/5 lg:flex lg:justify-end order-2 lg:order-1">
          <div className="relative w-full lg:w-auto">
            <img
              src={heroBg}
              alt="Portfolio showcase"
              className="w-full max-w-[400px] md:max-w-[600px] lg:w-[750px] h-auto object-cover shadow-lg rounded-lg mx-auto lg:mx-0"
            />
          </div>
        </div>

        {/* Right side - Text content (60% width) */}
        <div className="w-full lg:w-3/5 lg:flex lg:justify-start order-1 lg:order-2">
          <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#292F42] leading-tight mb-4 md:mb-6 tracking-wider" style={{ fontFamily: 'League Gothic, Arial Black, sans-serif' }}>
              OUR<br />
              PORTFOLIO
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-[#292F42] font-regular tracking-wide" style={{ fontFamily: 'Roboto Flex, sans-serif' }}>
              Our outcomes speak on our behalf
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
