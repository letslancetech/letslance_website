import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import bigwig from "../../../assets/lanceImages/bigwig.png";
import ideavault from "../../../assets/lanceImages/Ideavault.png";
import krishiyan from "../../../assets/lanceImages/krishyan.png";
import mantra from "../../../assets/lanceImages/mantra.png";
import mgb from "../../../assets/lanceImages/mgb.png";
import onwayz from "../../../assets/lanceImages/onwayz.png";
import pt from "../../../assets/lanceImages/pt.png";
import terra from "../../../assets/lanceImages/terra.png";
import zauba from "../../../assets/lanceImages/zauba.png";
import { Autoplay } from "swiper/modules";

export default function TrustLeaders() {
  const logos = [
    bigwig,
    ideavault,
    krishiyan,
    mantra,
    mgb,
    onwayz,
    pt,
    terra,
    zauba,
  ];

  return (
    <section className="relative -top-10 mx-4 rounded-2xl bg-white px-4 py-10 shadow-2xl sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32">
      <h2 className="font-Playfair mb-8 text-center text-2xl font-semibold text-[#07507b] sm:text-3xl md:text-3xl lg:text-4xl">
        Trusted by Industry Leaders
      </h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        className="mx-auto max-w-6xl"
      >
        {logos.map((src, index) => (
          <SwiperSlide
            key={index}
            className="flex h-28 items-center justify-center sm:h-32"
          >
            <div className="rounded-xl bg-white px-6 py-2 shadow-lg">
              <img
                src={src}
                alt={`Logo ${index + 1}`}
                className="h-16 w-24 object-contain sm:h-20 sm:w-28"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
