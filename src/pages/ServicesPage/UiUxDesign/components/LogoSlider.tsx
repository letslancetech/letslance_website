import React, { useState, useEffect, useRef } from "react";
import logos from "../../../../assets/techstack";

export default function LogoSlider({ interval = 3000 }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef: any = useRef();
  const entries = Object.entries(logos); // [["name", src], ...]

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % entries.length);
    }, interval);
    return () => clearTimeout(timeoutRef.current);
  }, [activeIndex, entries.length, interval]);

  const visibleCount = 9;
  const half = Math.floor(visibleCount / 2);

  const getIndex = (i: number) => (i + entries.length) % entries.length;

  return (
    <div className="mx-auto w-full max-w-6xl overflow-hidden py-20">
      <h4 className="pb-8 text-center text-4xl font-bold text-[#0B132A]">
        Design Tech Stack That Powers Our Creativity
      </h4>
      <p className="mx-auto mb-10 max-w-3xl text-center text-base text-[#4f5665] md:text-lg">
        At LetsLance, we select each tool based on your project’s needs to
        ensure a smooth design process and pixel-perfect results.
      </p>
      <div className="mx-12 flex items-center justify-center">
        {[...Array(visibleCount)].map((_, i) => {
          const logoIndex = getIndex(activeIndex - half + i);
          const [logoName, logoSrc] = entries[logoIndex]; // ✅ Move inside map
          const isActive = i === half;

          return (
            <div className="px-4">
              <div
                key={logoIndex}
                className={`
                m-auto flex h-24 w-24 
                flex-shrink-0 flex-col items-center 
                justify-center transition-transform duration-300 ease-in-out
                ${
                  isActive
                    ? "scale-100 rounded-full bg-white shadow-[0px_0px_76px_rgba(0,0,0,0.12)] grayscale-0 filter"
                    : "scale-90 grayscale filter"
                }
                cursor-pointer
              `}
                onClick={() => setActiveIndex(logoIndex)}
              >
                <img
                  src={logoSrc}
                  alt={`Logo ${logoName}`}
                  className="h-14 w-14 object-contain"
                />
              </div>
              {isActive && (
                <p className=" relative top-[20px] text-center text-3xl font-medium capitalize text-[#07507B]">
                  {logoName}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
