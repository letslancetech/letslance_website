import React from "react";
import { Service } from "../../../interfaces/Data";
import aiSolution from "../../../assets/lanceImages/aiSolution.png";

export default function Hero(props: { service: Service }) {
  return (
    <section className="sdsd relative z-0 bg-white pb-32 pt-44">
      <div className="p-page flex flex-col items-center justify-center gap-10 md:flex-row md:gap-16">
        {/* Left Content */}
        <div className="w-full text-center md:w-1/2 md:text-left">
          <h1 className="font-tienne text-4xl font-semibold leading-snug text-black drop-shadow-lg md:text-5xl">
            {props.service.title}
          </h1>
          <p className="mt-4 text-base text-[#4f5665] md:text-lg">
            {props.service.description}
          </p>
          <button className="mt-6 rounded-xl bg-[#07507b] px-6 py-3 text-white transition-all duration-300 hover:bg-[#063f5e]">
            Get Started
          </button>
        </div>

        {/* Right Image */}
        <div className="flex w-full justify-center md:w-1/2">
          <img
            src={aiSolution}
            alt="AI Solution"
            className="w-full max-w-xs md:max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
