import React from "react";
import { Service } from "../../../../interfaces/Data";
import uiBanner from "../../../../assets/uiImgs/uiBanner.png";

export default function Hero() {
  return (
    <section className="sdsd relative z-0 bg-white pb-32 pt-44">
      <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:gap-16 md:px-[8vw] 2xl:px-[20vw]">
        {/* Left Content */}
        <div className="w-full text-center md:w-1/2 md:text-left">
          <h1 className="font-tienne text-4xl font-semibold leading-snug text-black drop-shadow-lg md:text-5xl">
            UI/UX Design
          </h1>
          <p className="mt-4 text-base text-[#4f5665] md:text-lg">
            Create memorable digital experiences that captivate and convert with
            intuitive, user-centric UI/UX design. Our design team combines
            creativity with deep user understanding to deliver visually stunning
            interfaces that maximize engagement and drive business results.
          </p>
          <a href="/contact">
            <button className="mt-6 rounded-xl bg-[#07507b] px-6 py-3 text-white transition-all duration-300 hover:bg-[#063f5e]">
              Get Started
            </button>
          </a>
        </div>

        {/* Right Image */}
        <div className="flex w-full justify-center md:w-1/2">
          <img
            src={uiBanner}
            alt="uiBanner"
            className="w-full max-w-xs md:max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
