import React, { useState, useEffect } from "react";
import banner1 from "../../../assets/HomePageImgs/banner.png";
import banner2 from "../../../assets/HomePageImgs/banner2.png";
import banner3 from "../../../assets/HomePageImgs/banner3.png";
import banner4 from "../../../assets/HomePageImgs/banner4.png";
import circle1 from "../../../assets/HomePageImgs/circle1.png";
import circle2 from "../../../assets/HomePageImgs/circle2.png";
import oval from "../../../assets/HomePageImgs/oval.png";
import square from "../../../assets/HomePageImgs/square.png";
import arrow from "../../../assets/HomePageImgs/arrow.png";
import "animate.css";

const heroContents = [
  {
    animatedTitle: "Streamline Your Business",
    img: banner1,
  },
  {
    animatedTitle: "Engage Users",
    img: banner3,
  },
  {
    animatedTitle: "Solve Real Problems",
    img: banner4,
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [typing, setTyping] = useState(true);

  const fullText = heroContents[index].animatedTitle;

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (typedText.length < fullText.length) {
        timeout = setTimeout(() => {
          setTypedText(fullText.slice(0, typedText.length + 1));
        }, 100); // slower typing
      } else {
        timeout = setTimeout(() => setTyping(false), 2500); // longer pause when done
      }
    } else {
      if (typedText.length > 0) {
        timeout = setTimeout(() => {
          setTypedText(fullText.slice(0, typedText.length - 1));
        }, 40); // slower delete
      } else {
        setTyping(true);
        setIndex((prev) => (prev + 1) % heroContents.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [typedText, typing]);

  return (
    <section className="relative min-h-[95vh] overflow-hidden mobile:overflow-clip">
      <div className="absolute left-0 top-0 z-0 h-full w-full bg-[#eff9ff] bg-opacity-80" />

      {/* Floating Shapes */}
      <img
        src={circle1}
        alt="Circle Top Left"
        className="absolute left-[10%] top-[10%] h-6 w-6 animate-float-slow sm:left-[20rem] sm:top-[10rem] sm:h-10 sm:w-10"
      />
      <img
        src={oval}
        alt="Oval Bottom Left"
        className="absolute bottom-[6%] left-[10%] h-10 w-12 animate-float-slow sm:bottom-[6rem] sm:left-[20rem] sm:h-14 sm:w-16"
      />
      <img
        src={circle2}
        alt="Circle Top Right"
        className="absolute right-[15%] top-[10%] h-6 w-6 animate-float-slow sm:right-[55rem] sm:top-[10rem] sm:h-10 sm:w-10"
      />
      <img
        src={square}
        alt="Square Bottom Right"
        className="absolute bottom-[6%] right-[15%] h-12 w-12 animate-float-slow sm:bottom-[7rem] sm:right-[55rem] sm:h-16 sm:w-16"
      />

      {/* Content Layout */}
      <div className="absolute left-0 top-0 flex h-full w-full flex-col-reverse items-center justify-center gap-y-10 pt-20 sm:flex-row sm:items-center sm:gap-x-14 sm:pt-0 md:px-[8vw] 2xl:px-[20vw]">
        {" "}
        {/* Text Content */}
        <div className="flex w-full flex-col items-center gap-y-4 px-4 text-center sm:w-1/2 sm:items-start sm:px-0 sm:text-left">
          <h1 className=" text-[36px] font-bold text-black drop-shadow-lg sm:text-[38px]">
            Develop Apps That
          </h1>
          <h2 className="min-h-[2.5rem] text-[36px] font-bold leading-none text-[#07507b] sm:text-[38px]">
            {typedText}
            <span className="ml-1 animate-pulse border-r-2 border-[#07507b]"></span>
          </h2>
          <p className="mb-5 max-w-[90%] text-sm leading-6 text-[#797979] sm:max-w-full sm:text-lg sm:leading-8">
            We craft high-performance web and mobile apps that are built to
            win—fast, secure, and ready to scale as your business grows. Join
            brands that accelerated their growth by up to 3x with our solutions.
          </p>

          <div className="relative z-50 flex flex-wrap justify-center gap-4 sm:justify-start">
            <a href="/contact">
              <button className="rounded-full bg-[rgba(7,80,123,1)] px-5 py-2 text-sm text-white transition hover:shadow-lg sm:px-6 sm:py-3 sm:text-base">
                Consult Our Experts →
              </button>
            </a>
            <a href="/portfolio">
              <button className="rounded-full bg-white px-5 py-2 text-sm text-black shadow-lg transition hover:shadow-lg sm:px-6 sm:py-3 sm:text-base">
                View Our Work →
              </button>
            </a>
          </div>
        </div>
        {/* Banner Images */}
        <div className="relative hidden w-full items-center justify-center sm:flex sm:w-1/2">
          <img
            src={banner2}
            alt="Background Animation"
            className="animate__animated animate__fadeInTopRight absolute right-[-10rem] top-[-10rem] z-0 h-[60vh] w-[90vw] max-w-none transition-transform duration-1000 sm:right-[-23rem] sm:top-[-20rem] sm:h-[100vh] md:w-[75vw] 2xl:h-[95vh] 2xl:w-[45vw]"
          />

          <img
            src={arrow}
            alt="Top Right Floating Shape"
            className="absolute right-2 top-2 z-20 h-10 w-10 animate-float-slow sm:right-0 sm:top-0 sm:h-16 sm:w-16"
          />

          <img
            key={index}
            src={heroContents[index].img}
            alt="Hero Illustration"
            className="animate__animated animate__zoomIn relative z-10 max-h-[40vh] w-full object-contain sm:max-h-[50vh]"
          />
        </div>
      </div>
    </section>
  );
}
