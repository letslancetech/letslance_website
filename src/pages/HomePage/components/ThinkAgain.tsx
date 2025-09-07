import React from "react";
import thinkAgain from "../../../assets/HomePageImgs/thinkAgain.gif";
export default function ThinkAgain() {
  return (
    <section className="w-full bg-white px-6 py-16 md:px-12 lg:px-24">
      <div className="flex flex-col-reverse items-center justify-center gap-10 lg:flex-row">
        {/* Left Text Content */}
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-3xl font-bold leading-8 text-black md:text-2xl lg:text-3xl xl:text-2xl">
            Think We're Just Another <br className="hidden md:block" />
            Tech Team? <span className="text-[#07507b]">Think Again.</span>
          </h2>
          <p className="2xl:text-md mt-4 text-sm text-gray-500 md:text-lg">
            We don’t just deliver projects — we build success stories.
          </p>
          <p className="mt-4 text-lg font-semibold text-[#07507b] ">
            Your idea deserves the spotlight — let’s make it happen.
          </p>
        </div>

        {/* Right Illustration */}
        <div className="w-full max-w-md md:max-w-lg lg:max-w-xl">
          <img
            src={thinkAgain} // Replace with your actual path
            alt="Vision Animation"
            className="m-auto object-contain sm:w-[75%] md:w-[75%] 2xl:w-full"
          />
        </div>
      </div>
    </section>
  );
}
