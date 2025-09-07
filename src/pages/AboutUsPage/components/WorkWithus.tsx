import React from "react";
import workBg from "../../../assets/lanceImages/workBg.png";

export default function WorkWithUs() {
  return (
    <section className="animate__animated animate__bounceInUp px-4 py-16 md:px-12">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="mb-3 text-3xl font-bold text-[#07507b] md:text-4xl">
          Why Work With Us?
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-gray-600">
          At LetsLance, trust is the foundation of every relationship we build.
          Our clients rely on us not just for delivering projects, but for being
          true partners in their success. Here’s why they choose to work with
          us:
        </p>

        {/* Top Two Items */}
        <div className="mb-10 flex flex-col items-center justify-center gap-8 md:flex-row md:gap-16">
          <div className="max-w-sm text-center sm:mb-5 md:max-w-xs md:text-center 2xl:max-w-md">
            <h3 className="mb-2 text-2xl font-medium">
              Strong Ethical Standards
            </h3>
            <p className="text-sm text-[#696969]">
              We understand the unique challenges of your industry and tailor
              our solutions to fit seamlessly within your business environment.
            </p>
          </div>
          <div className="max-w-sm text-center sm:mb-5 md:max-w-xs md:text-center 2xl:max-w-md">
            <h3 className="mb-2 text-2xl font-medium">
              Proactive Problem Solving
            </h3>
            <p className="text-sm text-[#696969]">
              We anticipate potential challenges early and work collaboratively
              to overcome them before they impact your project.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="mb-10">
          <img
            src={workBg}
            alt="work with us"
            className="mx-auto w-full md:max-w-3xl 2xl:max-w-5xl"
          />
        </div>

        {/* Bottom Three Items */}
        <div className="mb-10 flex flex-col items-center justify-center gap-8 md:flex-row md:gap-16">
          <div className="max-w-sm text-center sm:mb-5 md:max-w-xs md:text-center 2xl:max-w-md">
            <h3 className="mb-2 text-2xl font-medium">Deep Industry Insight</h3>
            <p className="text-sm text-[#696969]">
              We understand the unique challenges of your industry and tailor
              our solutions to fit seamlessly within your business environment.
            </p>
          </div>
          <div className="max-w-sm text-center sm:mb-5 md:max-w-xs md:text-center 2xl:max-w-md">
            <h3 className="mb-2 text-2xl font-medium">
              Consistent Quality Delivery
            </h3>
            <p className="text-sm text-[#696969]">
              Our rigorous quality assurance processes guarantee that every
              product we deliver meets the highest standards.
            </p>
          </div>
          <div className="max-w-sm text-center sm:mb-5 md:max-w-xs md:text-center 2xl:max-w-md">
            <h3 className="mb-2 text-2xl font-medium">
              Long-Term Partnership Focus
            </h3>
            <p className="text-sm text-[#696969]">
              We don’t just aim for short-term wins — we’re invested in your
              ongoing growth and success, supporting you every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
