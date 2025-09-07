import React from "react";
import prototype from "../../../../assets/uiImgs/prototype.png";
import info from "../../../../assets/uiImgs/info.png";
import ux from "../../../../assets/uiImgs/ux.png";
import usability from "../../../../assets/testingImgs/usability.png";
import ui from "../../../../assets/uiImgs/ui.png";
import wireframe from "../../../../assets/uiImgs/wireframe.png";
import testing from "../../../../assets/uiImgs/testing.png";
export default function Highlights() {
  const highlights = [
    {
      icon: prototype,
      title: "Prototyping",
      description:
        "Conceptualization of page structure is initiated with Prototyping wherein we optimize the page layout, illustrating structural arrangement and alignments meticulously designed for the user to have an intuitive and responsive digital experience.",
    },
    {
      icon: info,
      title: "Information Architecture design",
      description:
        "Organise, structure and label the content according to the theme of the business on web or on mobile apps. After deep analysis of customer's needs, resolve issues of system structure, content management and navigation and recommend best fit as per the business goals.",
    },
    {
      icon: ux,
      title: "User Experience (UX) Development",
      description:
        "A holistic approach wherein all the possibilities and features is taken into account to trace end-user interaction and add further enhancements. To accomplish business objectives, we perform in-depth analysis on core features and apply rendering of visuals as per the need.",
    },
    {
      icon: ui,
      title: "User Interface (UI) Development",
      description:
        "Maximize profit and improve business profitability by engaging more customers through enticing web designs of applications. After thoroughly considering information architecture we turn your ideas into seamless functional designs.",
    },
    {
      icon: wireframe,
      title: "Wireframing",
      description:
        "Information architecture is an outline of the design to be developed, the immediate next step is to visualize and create a blueprint called wireframe in designing. We offer wireframing services using the latest digital assets to strategically present each information distinct and appealing.",
    },
    {
      icon: testing,
      title: "Usability Testing",
      description:
        "Testing a product to determine its acceptance in the marketplace based on specific scenarios and usability tests. We offer a comprehensive set of usability testing like screen resolution tests, compatibility testing, crowd testing and similar tests within faster lifecycle and at accessible prices.",
    },
  ];

  return (
    <section className="bg-[#f9f9f9] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-bold text-black">
          Our UI/UX Design Services
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="flex w-full max-w-sm flex-col justify-between rounded-3xl border-4 border-[#07507b] bg-white px-6 py-8 text-center shadow-md transition-shadow duration-300 hover:shadow-xl md:w-[48%] lg:w-[31%]"
            >
              <div className="flex flex-col items-center">
                {item.icon && (
                  <div className="mb-4 flex h-28 w-28 items-center justify-center">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="h-20 w-16 object-contain"
                    />
                  </div>
                )}
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
