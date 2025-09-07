import React from "react";
import approach from "../../../assets/HomePageImgs/approach.png";
import agility from "../../../assets/HomePageImgs/agility.png";
import extension from "../../../assets/HomePageImgs/extension.png";
import latestTech from "../../../assets/HomePageImgs/latestTech.png";

export default function Innovation() {
  return (
    <section className="bg-[#f6fcff] px-4 py-16 md:px-12 lg:px-20">
      {/* Header */}
      <div className="mb-12 text-center">
        <h2 className="text-2xl font-semibold md:text-3xl">
          Innovation is available to you now.
        </h2>
        <p className="mt-2 text-sm text-gray-700 md:text-base">
          We create cutting-edge business software by combining <br />
          <strong>Design Thinking</strong> and{" "}
          <strong>Practical Creativity</strong>
        </p>
      </div>

      <div className="mx-auto max-w-7xl space-y-10">
        {/* User Oriented Approach */}
        <div className="flex flex-col-reverse items-center gap-8 rounded-2xl bg-[#e8f9f0] p-6 md:flex-row md:p-12">
          <div className="md:w-1/2">
            <h3 className="mb-4 text-2xl font-semibold">
              User Oriented Approach
            </h3>
            <p className=" text-sm leading-[2] text-gray-700 md:text-[14px] 2xl:text-[16px]">
              Our implementation strategy is centred on modifying the special
              software solution for your unique requirements, encouraging
              collaboration, and minimising conflicts.
            </p>
          </div>
          <div className="flex justify-center md:w-1/2">
            <img
              src={approach}
              alt="Target"
              className="h-auto w-full max-w-sm object-contain"
            />
          </div>
        </div>

        {/* Two Cards Section */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Card 1 */}
          <div className="overflow-hidden rounded-2xl bg-[#f1f8ff] p-6 shadow-sm md:p-8">
            <h4 className="mb-4 text-xl font-semibold md:text-2xl">
              Decision-making using agility
            </h4>
            <div className="leading-[2] text-gray-700">
              <img
                src={agility}
                alt="Agile"
                className="float-right mb-2 ml-4 mt-8 h-24 w-24 object-contain md:mt-20 md:h-32 md:w-32"
                style={{
                  shapeOutside: "circle(40%)",

                  clipPath: "circle(85%)",
                  WebkitClipPath: "circle(50%)",
                }}
              />
              <p className="text-sm leading-[2] md:text-[14px] 2xl:text-[16px]">
                We plan our entire process and produce high-quality work using
                our value-driven approach to designing custom software. Our
                software engineers ensure properly tested and measured
                processes, extracting productive end results by using Agile
                methodology by keeping a watch on everything including budget,
                time, resources, technology, and security.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="overflow-hidden rounded-2xl bg-[#f1f1fb] p-6 shadow-sm md:p-8">
            <h4 className="mb-3 text-xl font-semibold">Team Extension</h4>
            <div className="leading-[2] text-gray-700">
              <img
                src={extension}
                alt="Team"
                className="float-right mb-2 mr-4 mt-8 h-24 w-24 object-contain md:mt-20 md:h-32 md:w-32"
                style={{
                  shapeOutside: "circle(40%)",

                  clipPath: "circle(85%)",
                  WebkitClipPath: "circle(50%)",
                }}
              />
              <p className="text-sm leading-[2] md:text-[14px] 2xl:text-[16px]">
                Customers can use the capabilities of our software developers as
                needed thanks to our adaptable business models. With a focus on
                serving worldwide software outsourcing needs across a range of
                technologies, the skilled talent pool can help you expand your
                business and achieve your goals with both short- and long-term
                engagements at a reasonable cost.
              </p>
            </div>
          </div>
        </div>

        {/* Final Wide Card */}
        <div className="flex flex-col items-center gap-8 rounded-2xl bg-[#e8f9f0] p-6 md:flex-row md:p-12">
          <div className="md:w-2/3">
            <h4 className="mb-4 text-2xl font-semibold">
              Providing solution by latest technologies
            </h4>
            <p className="text-sm leading-[2] text-gray-700 md:text-[14px] 2xl:text-[16px]">
              Our solution-driven approach combined with the latest technology
              empowers your website to stand out from the competition, captivate
              your audience, and achieve your business goals. Experience the
              transformative power of innovation as we bring your website to the
              forefront of the digital landscape, delivering a seamless and
              engaging user experience that leaves a lasting impression on your
              visitors.
            </p>
          </div>
          <div className="flex justify-center md:w-1/3">
            <img
              src={latestTech}
              alt="Lightbulb"
              className="h-auto w-full max-w-[180px] object-contain md:max-w-[220px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
