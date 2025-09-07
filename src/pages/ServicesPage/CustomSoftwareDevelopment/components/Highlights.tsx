import React from "react";

// Example assumes your icons are in src/assets/icons/
import engineer from "../../../../assets/CustomServicePageImgs/engineer.png";
import bespoke from "../../../../assets/CustomServicePageImgs/bespoke.png";
import intigration from "../../../../assets/CustomServicePageImgs/intigration.png";
import maintainence from "../../../../assets/CustomServicePageImgs/maintenance.png";
import saas from "../../../../assets/CustomServicePageImgs/saas.png";
import software from "../../../../assets/CustomServicePageImgs/software.png";

export default function Highlights() {
  const highlights = [
    {
      icon: bespoke,
      title: "Bespoke Software Development",
      description:
        "Superior custom software development services combined with expert resources, technical prowess to strengthen overall business strategy. Our prototyping approach and robust custom development plan create custom applications from scratch across mobile, web, and cloud platforms ensuring seamless integration, flexibility, and business profitability.",
    },
    {
      icon: engineer,
      title: "Application Migration and Re-Engineering",
      description:
        "Modernize existing software solutions and boost performance by redesigning, refactoring, or migration facilities to fully customized functionally-rich applications. Our software engineers ensure flawless re-engineering of software with advanced enhancements of new features, improved UI/UX, and modern security-based on cutting-edge technologies.",
    },
    {
      icon: software,
      title: "Software Application Maintenance",
      description:
        "Explore the maximum potential of your software application by fine-tuning it with regular software maintenance, upgrades and performance optimization. Our custom software development services enable you to transparently manage all the post-development activities with periodic software updates and real-time issue resolution ensuring high-performing apps at ease.",
    },
    {
      icon: saas,
      title: "SaaS Applications",
      description:
        "Leverage our multi-year experience in building commercial SaaS-based applications to address your specific business challenges and achieve higher productivity, minimum risks, competitive advantage and elevated customer experience. We are experts in creating SaaS applications using various technologies and frameworks using cloud and serverless.",
    },
    {
      icon: intigration,
      title: "Application Integration",
      description:
        "End-to-end application integration services to optimize workflow between disparate business sources that hinders business progress. Our software integration engineers offer state of the art services between on-premise cloud or offline data environments with customization to ensure smoother and flexible business operations with lower integration costs.",
    },
    {
      icon: maintainence,
      title: "Maintenance and Support",
      description:
        "Upscale application performance by making transformational changes as a part of software upgrade and maintenance tailored to specific customer needs. We facilitate clients with custom software support at different levels from infrastructural changes, operation system integration change, web services support or cloud support for seamless business continuity.",
    },
  ];

  return (
    <section className="bg-[#f9f9f9] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-bold text-black">
          Software Services That We Offer
        </h2>

        <div className="grid items-stretch gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="flex h-full flex-col justify-between rounded-3xl border-4 border-[#07507b] bg-white px-6 py-8 text-center shadow-md transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-28 w-28 items-center justify-center">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="h-20 w-16 object-contain"
                  />
                </div>
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
