import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";

import git from "../../../assets/lanceImages/socialIcon1.png";
import facebook from "../../../assets/lanceImages/socialIcon2.png";
import linked from "../../../assets/lanceImages/socialIcon3.png";

export default function TeamSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const teamData = [
    {
      name: "Zane Sorell",
      role: "CEO",
      description:
        "Enjoys adventurous travel, seeks new cultures and offbeat destinations",
      imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
      socials: {
        facebook: facebook,
        github: git,
        linkedin: linked,
      },
    },
    {
      name: "Maya Mathy",
      role: "Founder",
      description: "Pop music lover, seeks joy and exciting pop concerts",
      imageUrl: "https://randomuser.me/api/portraits/women/50.jpg",
      socials: {
        facebook: facebook,
        github: git,
        linkedin: linked,
      },
    },
    {
      name: "Alexis Jensen",
      role: "CTO",
      description: "Bookworm, creative software developer with precision",
      imageUrl: "https://randomuser.me/api/portraits/women/51.jpg",
      socials: {
        facebook: facebook,
        github: git,
        linkedin: linked,
      },
    },
    {
      name: "Keira Battye",
      role: "Product Designer",
      description: "Creative painter capturing beauty with imaginative artwork",
      imageUrl: "https://randomuser.me/api/portraits/women/60.jpg",
      socials: {
        facebook: facebook,
        github: git,
        linkedin: linked,
      },
    },
    {
      name: "Dominic Game",
      role: "3D Artist",
      description: "Football enthusiast, enjoys movie nights with friends",
      imageUrl: "https://randomuser.me/api/portraits/men/52.jpg",
      socials: {
        facebook: facebook,
        github: git,
        linkedin: linked,
      },
    },
    {
      name: "James Vial",
      role: "Head of Front-End",
      description:
        "Culinary artist, explores diverse flavors, skilled in cooking",
      imageUrl: "https://randomuser.me/api/portraits/men/53.jpg",
      socials: {
        facebook: facebook,
        github: git,
        linkedin: linked,
      },
    },
  ];

  return (
    <section className="animate__animated animate__bounceInUp px-4 py-16 md:px-12">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="mb-3 text-3xl font-bold text-sky-900 md:text-4xl">
          Meet the Team
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-gray-600">
          A great company is built by great people. At LetsLance, we’ve brought
          together a diverse team of innovators, problem-solvers, and creative
          thinkers—all united by a shared passion for excellence.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teamData.map((member, idx) => (
            <div
              key={idx}
              className="flex h-52 flex-row overflow-hidden rounded-xl border bg-white shadow-md"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay={idx * 100}
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="flex w-[50%] items-center justify-center p-3">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="h-full w-full rounded-lg object-cover"
                />
              </div>

              <div className="flex w-[55%] flex-col items-start justify-center pr-4">
                <h3 className="text-base font-semibold text-gray-900 md:text-lg">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-sky-600">
                  {member.role}
                </p>
                <p className="mt-1 line-clamp-2 text-left text-sm text-gray-500">
                  {member.description}
                </p>

                <div className="mt-2 flex gap-3">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <img
                      src={member.socials.facebook}
                      alt="facebook"
                      className="h-3 w-3"
                    />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <img
                      src={member.socials.github}
                      alt="github"
                      className="h-3 w-3"
                    />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <img
                      src={member.socials.linkedin}
                      alt="linkedin"
                      className="h-3 w-3"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
