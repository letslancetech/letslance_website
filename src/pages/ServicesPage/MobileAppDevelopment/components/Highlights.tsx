import React from "react";
import design from "../../../../assets/EcommerceImgs/ux-design.png";
import online from "../../../../assets/EcommerceImgs/online.png";
import b2b from "../../../../assets/EcommerceImgs/b2b.png";
import prototype from "../../../../assets/mobileDevImgs/prototype.png";
import native from "../../../../assets/mobileDevImgs/native.png";
import platform from "../../../../assets/mobileDevImgs/platform.png";

export default function Highlights() {
  const highlights = [
    {
      icon: prototype,
      title: "Design & Prototyping of Apps",
      description:
        "Designing visually appealing apps that are also interactive and user friendly have always been at the forefront of our mobile app development services. Our mobile app design team aims at creating highly engaging, easy to use and consistent user interfaces across different types of mobile platforms.",
    },
    {
      icon: native,
      title: "Native App development",
      description:
        "We have a team of experienced iOS and Android app developers who understand your objectives and goals and bring your ideas to reality by creating mobile apps that are unique, secure and engaging. If you are looking for a mobile application development company, LetsLance is the right place to be.",
    },
    {
      icon: platform,
      title: "Cross-Platform App development",
      description:
        "Having hands-on experience in React Native, Flutter and Xamarin technologies, we have succeeded in creating powerful and innovative cross platform hybrid apps for small, medium and large enterprises. Get market-ready and cost-effective custom mobile apps that reach a wider audience in no time.",
    },
    // {
    //   icon: marketplace,
    //   title: "MarketPlaces",
    //   description:
    //     "Develop a one-stop multi-vendor marketplace that enables vendors and customers to come together on a single platform. Our custom-built solutions offer a variety of features as well as easy setup facilities for vendors. We strive to deliver the best, regardless of the size and complexity of the solution.",
    // },
    // {
    //   icon: consulting,
    //   title: "Ecommerce Consulting",
    //   description:
    //     "Gain insights from customer interactions, purchase trends and history. Highlight challenges, investigate the root cause and suggest effective solutions for rapid progression. Ecommerce consulting can revolve around customer experience, data, analytics, business workflows or technology.",
    // },
    // {
    //   icon: ecommerce,
    //   title: "Ecommerce Mobile Apps",
    //   description:
    //     "Enable mobility to scale up current ecommerce online stores by creating a feature-rich mobile app. Utilize our ecommerce mobile app development services and enhance virtual shopping experience by adding interesting and responsive product catalogue visuals & allowing easy navigation by designing an intuitive layout.",
    // },
  ];

  return (
    <section className="bg-[#f9f9f9] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-bold text-black">
          Our Mobile App Development Services
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
