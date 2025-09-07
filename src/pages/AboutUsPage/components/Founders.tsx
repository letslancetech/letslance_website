import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import founderBg from "../../../assets/lanceImages/founderBg.png";
import { FaLinkedin as FaLinkedinRaw } from "react-icons/fa";
import sagarKumar from "../../../assets/lanceImages/sagarKumar.png";
import keshavGarg from "../../../assets/lanceImages/keshavGarg.png";

const founders = [
  {
    name: "Sagar Kumar",
    image: sagarKumar,
    title: "Co-Founder",
    description:
      "Introducing Sagar Kumar, the co-founder of LetsLance. Currently pursuing a degree in Economics at IIT Kharagpur, Sagar possesses a strong background in entrepreneurship. He has successfully completed his tenure as Vice President, Gymkhana IIT Kharagpur. Notably, Sagar's expertise lies in investment, where he has displayed remarkable proficiency.",
    linkedin: "https://www.linkedin.com/in/sagar-kumar-ab5041224/",
  },
  {
    name: "Keshav Garg",
    image: keshavGarg,
    title: "Co-Founder",
    description:
      "Meet Keshav Garg, the visionary co-founder of LetsLance. Keshav is a rising star in the fintech industry with a wealth of experience in wealth and asset management, private equity, and venture capital. Despite his young age, Keshav has already established himself as an accomplished investor, with a strong track record of success in global equities.",
    linkedin: "https://www.linkedin.com/in/keshavgarg07/",
  },
];
const FaLinkedin = FaLinkedinRaw as unknown as React.FC<{ size?: number }>;

export default function Founders() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: `url(${founderBg})` }}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-[#07507b] sm:px-6 lg:px-8">
        <h2 className="mb-16 text-center text-4xl font-bold">
          The Visionaries Behind LetsLance
        </h2>

        <div className="space-y-24">
          {founders.map((founder, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center gap-10 text-center md:text-left ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <img
                src={founder.image}
                alt={founder.name}
                className="h-100 w-80"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              />
              <div
                className="max-w-xl"
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              >
                <h3 className="text-3xl font-semibold text-black">
                  {founder.name}
                </h3>
                <p className="text-md mb-2 text-black">{founder.title}</p>
                <p className="mb-4 text-black">{founder.description}</p>
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-500"
                >
                  <FaLinkedin size={32} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
