import React from "react";
import http from "../../../../assets/WebAppImgs/http.png";
import backend from "../../../../assets/WebAppImgs/backend.png";
import saas from "../../../../assets/WebAppImgs/saas.png";
import progress from "../../../../assets/WebAppImgs/progress.png";
import ecommerce from "../../../../assets/WebAppImgs/ecommerce.png";
import custom from "../../../../assets/WebAppImgs/custom.png";

export default function Highlights() {
  const highlights = [
    {
      icon: http,
      title: "Front-end Web Development",
      description:
        "Utilize the reusable components and deliver component-driven architecture using advanced Frontend technologies like React.js, Angular, and Vue.js. LetsLance is a web application development company that combines amazing UI designs with required functionalities effortlessly.",
    },
    {
      icon: backend,
      title: "Back-end Development",
      description:
        "Seamlessly navigate between multiple features of an application by accessing the talented pool of backend web developers who can make your application scalable. We offer AWS and Azure services to host the backend services on cloud, and SQL and NoSQL databases to store and fetch data reliably using Microservices.",
    },
    {
      icon: saas,
      title: "SaaS Application Development",
      description:
        "Comprehensively delve deep into the client's need to understand the scope of web application and its expandability. Our team of web app developers are adept and backed up by technical soundness to offer secured and multi-tenant SaaS application development solutions benefiting business in the longer run.",
    },
    {
      icon: progress,
      title: "Progressive Web Apps",
      description:
        "Aligning to the modern needs of app development, we create native web apps with enhanced technology features, faster application load times, highly interactive visual content and hassle-free navigation between distinct features within the application.",
    },
    {
      icon: ecommerce,
      title: "Ecommerce Web App Development Company",
      description:
        "Customize and build eCommerce Web Apps using Shopify, Magento and custom frameworks to amplify business growth and boost online web presence. Our adept web developers ensure growth and user engagement by developing agile, secure, & user-friendly eCommerce apps.",
    },
    {
      icon: custom,
      title: "Custom Web Application Development services",
      description:
        "We help you deliver superior web development services combined with expert resources, technical prowess to strengthen overall business strategy. Our experience in custom web app development assures compatibility, scalability and intuitive user experiences.",
    },
  ];

  return (
    <section className="bg-[#f9f9f9] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-bold text-black">
          Our Web Application Services
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
