import React, { useState, useEffect, useRef } from "react";
import logos from "../../../../assets/technologies";

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
    <div className="w-full max-w-6xl mx-auto overflow-hidden py-20">
      <h4 className="font-bold text-[#0B132A] text-4xl text-center pb-8">
        Technologies We Work With
      </h4>
      <div className="flex justify-center items-center mx-12">
        {[...Array(visibleCount)].map((_, i) => {
          const logoIndex = getIndex(activeIndex - half + i);
          const [logoName, logoSrc] = entries[logoIndex]; // ✅ Move inside map
          const isActive = i === half;

          return (
            <div className="px-4">
            <div
              key={logoIndex}
              className={`
                flex-shrink-0 transition-transform duration-300 ease-in-out 
                w-24 h-24 m-auto 
                flex flex-col items-center justify-center
                ${isActive ? "scale-100 filter grayscale-0 rounded-full bg-white shadow-[0px_0px_76px_rgba(0,0,0,0.12)]" : "scale-90 filter grayscale"}
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
                <p className=" text-[#07507B] relative top-[20px] text-3xl font-medium text-center capitalize">{logoName}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
