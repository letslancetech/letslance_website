import React from "react";
import functional from "../../../../assets/testingImgs/functional.png";
import perfomance from "../../../../assets/testingImgs/perfomance.png";
import security from "../../../../assets/testingImgs/security.png";
import usability from "../../../../assets/testingImgs/usability.png";
import compatibility from "../../../../assets/testingImgs/compatibility.png";
import quality from "../../../../assets/testingImgs/quality.png";
import effectiveness from "../../../../assets/testingImgs/effectiveness.png";
import mobile from "../../../../assets/testingImgs/mobile.png";
export default function Highlights() {
  const highlights = [
    {
      icon: functional,
      title: "Functional Testing",
      description:
        "Validating the software system to conform to each functional requirement of the application meets the expected output. Our experienced QA testing team implements functional testing to majorly focus on user interface, database, security, API's, client or server application and similar functionalities of the application.",
    },
    {
      icon: perfomance,
      title: "Performance Testing",
      description:
        "Increasing load time, inefficient responsiveness and instability can be overcome by performance testing. Our profound experience in performance testing by executing quality checks and software behaviour analysis under load and stress guarantees flawless, reliable and smarter applications.",
    },
    {
      icon: security,
      title: "Security Testing",
      description:
        "Uncover potential vulnerabilities of your running application by enabling security testing with every release. Our QA testing services are performed by a talented pool of test engineers who execute risk assessment and penetration testing to shield applications from hackers or malicious threats.",
    },
    {
      icon: usability,
      title: "Usability Testing",
      description:
        "Monitor application behaviour when multiple functions of the application operate concurrently. Our software testing services entail an in-depth analysis of user behaviour patterns that identify potential usability issues in the initial phase and create a seamless product.",
    },
    {
      icon: compatibility,
      title: "Compatibility Testing",
      description:
        "Explore the possibilities of compatibility testing with LetsLance's software testing services where an application is tested meticulously across different browsers, databases, hardware, operating systems, server infrastructures, resolution displays and devices.",
    },
    {
      icon: mobile,
      title: "Mobile App Testing",
      description:
        "Scalability, security and multi-platform support are the cornerstones of a mobile app. LetsLance provides cross platform, functional/non-functional testing with manual testing as well as automated testing approach for diverse mobile applications.",
    },
    {
      icon: quality,
      title: "Enhanced Quality",
      description:
        "Reduce manual workforce that performs repetitive testing and prone to errors. Employ humans in more strategic tasks and adopt test automation as a sure-shot solution to excel in mundane tasks with 100% consistent and accurate results.",
    },
    {
      icon: effectiveness,
      title: "Cost-Effectiveness",
      description:
        "Identification of errors at the right time can save man hours, reduce cost and fix problems faster. With test automation, you can perform different test scenarios multiple times until the results are satisfactory.",
    },
  ];

  return (
    <section className="bg-[#f9f9f9] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-bold text-black">
          Our Quality Assurance Services
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
