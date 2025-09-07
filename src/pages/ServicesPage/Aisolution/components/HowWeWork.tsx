import React from "react";
import workStepsImage from "../../../../assets/lanceImages/workStep.png";

export default function HowWeWork() {
  return (
    <section className="bg-[#f5faff] px-4 pt-16 md:px-12">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-[#07507b] md:text-4xl">
          How We Work?
        </h2>

        {/* Top 3 Steps */}
        <div className="mt-[-43px] flex flex-col gap-12 text-center md:flex-row md:justify-between">
          <div className="animate__animated animate__fadeInDown relative top-16 mx-auto w-full max-w-xs sm:top-[78px] md:right-[60px] md:top-[160px] md:w-[17%]">
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              Discover & Define
            </h3>
            <p className="mx-auto max-w-xs text-sm leading-relaxed text-gray-600">
              We start by understanding your goals, challenges, and target
              users. This helps us define a clear roadmap and project scope
              tailored to your needs.
            </p>
          </div>

          <div className="animate__animated animate__fadeInDown relative top-16 mx-auto w-full max-w-xs sm:top-[78px] md:right-[-7px] md:top-[160px] md:w-[18%]">
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              Design & Prototype
            </h3>
            <p className="mx-auto max-w-xs text-sm leading-relaxed text-gray-600">
              Our team creates intuitive, user-centric designs and prototypes to
              bring your ideas to life and ensure the best user experience.
            </p>
          </div>

          <div className="animate__animated animate__fadeInDown relative top-16 mx-auto w-full max-w-xs  sm:top-[78px] md:left-[50px] md:top-[160px] md:w-[18%]">
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              Develop & Integrate
            </h3>
            <p className="mx-auto max-w-xs text-sm leading-relaxed text-gray-600">
              We build high-performance solutions using the latest
              technologies—seamlessly integrating with your existing systems if
              needed.
            </p>
          </div>
        </div>

        {/* Image in between */}
        <div className="animate__animated animate__zoomIn relative my-16 w-full overflow-x-auto">
          <img
            src={workStepsImage}
            alt="How We Work steps"
            className="mx-auto w-full max-w-6xl px-2"
          />
        </div>

        {/* Bottom 2 Steps */}
        <div className="flex flex-col gap-12 text-center md:flex-row md:justify-center">
          <div className="animate__animated animate__fadeInUp relative mx-auto w-full max-w-xs md:bottom-[160px] md:left-[80px] md:w-[18%]">
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              Test & Refine
            </h3>
            <p className="mx-auto max-w-xs text-sm leading-relaxed text-gray-600">
              Every product undergoes rigorous testing to ensure it's bug-free,
              secure, and optimized. We fine-tune until it's just right.
            </p>
          </div>

          <div className="animate__animated animate__fadeInUp relative mx-auto mb-5 w-full max-w-xs md:bottom-[160px] md:right-[75px] md:w-[18%] xl:mb-0">
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              Launch & Support
            </h3>
            <p className="mx-auto max-w-xs text-sm leading-relaxed text-gray-600">
              After deployment, we provide ongoing support, updates, and
              improvements to ensure long-term success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
