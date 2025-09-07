import React from "react";

// Example assumes your icons are in src/assets/icons/
import automationIcon from "../../../../assets/AiServicePageImgs/automation.png";
import mlIcon from "../../../../assets/AiServicePageImgs/machine.png";
import nlpIcon from "../../../../assets/AiServicePageImgs/language.png";
import visionIcon from "../../../../assets/AiServicePageImgs/vision.png";
import analyticsIcon from "../../../../assets/AiServicePageImgs/analytics.png";
import integrationIcon from "../../../../assets/AiServicePageImgs/intigration.png";

export default function Highlights() {
  const highlights = [
    {
      icon: automationIcon,
      title: "AI-Powered Automation",
      description:
        "Replace repetitive tasks with smart workflows that work 24/7 without fatigue. We build AI bots that think like your team — only faster, scalable, and always on.",
    },
    {
      icon: mlIcon,
      title: "Machine Learning Development",
      description:
        "Turn your data into smart decisions with custom ML models built from scratch. We train machines to understand, evolve, and optimize just like your business does.",
    },
    {
      icon: nlpIcon,
      title: "Natural Language Processing",
      description:
        "Bridge the gap between human language and machine understanding. From chatbots to sentiment engines, we build AI that truly speaks your customers' language.",
    },
    {
      icon: visionIcon,
      title: "Computer Vision",
      description:
        "Give your systems the power to see, recognize, and act on real-world visuals. From quality checks to facial recognition, we provide AI services that help humans see what they miss.",
    },
    {
      icon: analyticsIcon,
      title: "Predictive Data Analytics",
      description:
        "We harness real-time data to uncover trends, forecast outcomes, and guide smarter decisions. With predictive analytics, you lead with confidence and clarity.",
    },
    {
      icon: integrationIcon,
      title: "AI Model Integration",
      description:
        "We seamlessly embed AI into your existing systems to enhance decision-making and automate intelligently. Our models work within your tools and workflows, delivering real value where it matters most.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-bold text-[#07507b]">
          Our AI Services
        </h2>

        <div className="grid place-items-center gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-y-4 rounded-xl border border-gray-200 bg-white px-6 py-8 text-center shadow-md transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-28 w-28 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
