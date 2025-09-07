import React from "react";
import missionBg from "../../../assets/lanceImages/ourMission.png"; // update path as needed

export default function OurMission() {
  return (
    <section
      className="relative flex items-center justify-center bg-cover bg-center px-4 py-24 text-white"
      style={{ backgroundImage: `url(${missionBg})` }}
    >
      {/* Black gradient overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div> */}

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
          Our Mission
        </h2>
        <p className="text-sm text-gray-200 sm:text-base md:text-lg">
          At LetsLance, our mission is to empower businesses and entrepreneurs
          by delivering cutting-edge digital solutions built on innovation,
          collaboration, and integrity. We aim to bridge the gap between
          ambitious ideas and real-world execution, transforming challenges into
          scalable opportunities through technology. Guided by a commitment to
          quality and impact, we strive to create value not just for clients,
          but for the larger ecosystem we’re a part of.
        </p>
      </div>
    </section>
  );
}
