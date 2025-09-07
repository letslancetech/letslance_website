import { Link } from "react-router-dom";
import heroBg from "../../../assets/portfolio/banner.png";
import React from "react";

export default function Hero() {
  return (
    <section
      className="relative h-[60vh] w-full bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Optional dark overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

      {/* Centered content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
        Our Portfolio
        </h1>
        <p className="max-w-2xl text-sm text-gray-200 sm:text-base md:text-lg">
        We let our work do the talking
        </p>
      </div>
    </section>
  );
}
