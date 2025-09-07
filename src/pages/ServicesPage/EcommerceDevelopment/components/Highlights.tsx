import React from "react";
import design from "../../../../assets/EcommerceImgs/ux-design.png";
import online from "../../../../assets/EcommerceImgs/online.png";
import b2b from "../../../../assets/EcommerceImgs/b2b.png";
import marketplace from "../../../../assets/EcommerceImgs/marketplace.png";
import consulting from "../../../../assets/EcommerceImgs/consulting.png";
import ecommerce from "../../../../assets/EcommerceImgs/e-commerce.png";

export default function Highlights() {
  const highlights = [
    {
      icon: design,
      title: "UI/UX Design",
      description:
        "Shape your ecommerce business with creative designs & layouts that are appealing, interactive & engaging for customers and influence them into frequent visiting and buying. We offer customized UI/UX design development services with animated, trending and innovative graphics that deliver unmatched user experience.",
    },
    {
      icon: online,
      title: "Online Stores",
      description:
        "Through our advanced eCommerce development services, we offer a seamless and device-agnostic in store experience to customers online. Our experienced design and development teams are proficient in offering tailor made solutions and efficiently handling complex project requirements.",
    },
    {
      icon: b2b,
      title: "B2B Portals",
      description:
        "Connect multiple B2B vendors such as suppliers, distributors, manufacturers and retailers on a unified platform for seamless business performance. Our ecommerce software developers provide solutions that help in managing global trade, personalized catalogues, wholesale pricing and trade partnerships.",
    },
    {
      icon: marketplace,
      title: "MarketPlaces",
      description:
        "Develop a one-stop multi-vendor marketplace that enables vendors and customers to come together on a single platform. Our custom-built solutions offer a variety of features as well as easy setup facilities for vendors. We strive to deliver the best, regardless of the size and complexity of the solution.",
    },
    {
      icon: consulting,
      title: "Ecommerce Consulting",
      description:
        "Gain insights from customer interactions, purchase trends and history. Highlight challenges, investigate the root cause and suggest effective solutions for rapid progression. Ecommerce consulting can revolve around customer experience, data, analytics, business workflows or technology.",
    },
    {
      icon: ecommerce,
      title: "Ecommerce Mobile Apps",
      description:
        "Enable mobility to scale up current ecommerce online stores by creating a feature-rich mobile app. Utilize our ecommerce mobile app development services and enhance virtual shopping experience by adding interesting and responsive product catalogue visuals & allowing easy navigation by designing an intuitive layout.",
    },
  ];

  return (
    <section className="bg-[#f9f9f9] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-bold text-black">
          Our Ecommerce Services
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
