import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Animeta from "../../../../assets/portfolio/animeta.png";
import Planet from "../../../../assets/portfolio/planet-reserve.png";
import Mbbs from "../../../../assets/portfolio/mbbs-reserve.png";
import KrishiYan from "../../../../assets/portfolio/krishiyan.png";
import Ideavault from "../../../../assets/portfolio/Ideavault.png";
import Roarink from "../../../../assets/portfolio/roarink.png";
import Business from "../../../../assets/portfolio/businessUnlimited.png";
import EnhancePT from "../../../../assets/portfolio/EnhancePT.png";
import Natours from "../../../../assets/portfolio/Natours.png";
import BigwigPly from "../../../../assets/portfolio/BigwigPly.png";
import Mantra from "../../../../assets/portfolio/Mantra.png";
import GridFlow from "../../../../assets/portfolio/GridFlow.png";

const FeaturedProject = () => {
  const projects = [
    // {
    //   id: "01",
    //   title: "Animeta",
    //   subtitle: "Web design",
    //   image: Animeta,
    // },
    // {
    //   id: "02",
    //   title: "The Planet Reserve",
    //   subtitle: "Logo Design",
    //   image: Planet,
    // },
    // {
    //   id: "03",
    //   title: "The MBBS Planet",
    //   subtitle: "Animation",
    //   image: Mbbs,
    // },
    {
      id: "01",
      title: "Ideavault",
      subtitle: "Product Design",
      image: Ideavault,
    },
    {
      id: "02",
      title: "Big Wig",
      subtitle: "BigwigPly",
      image: BigwigPly,
    },
    {
      id: "03",
      title: "KrishiYan",
      subtitle: "App Development",
      image: KrishiYan,
    },
    {
      id: "04",
      title: "GridFlow",
      subtitle: "GridFlow",
      image: GridFlow,
    },

    // {
    //   id: "06",
    //   title: "Roarink",
    //   subtitle: "Branding",
    //   image: Roarink,
    // },
    {
      id: "05",
      title: "Business Unlimited",
      subtitle: "Branding",
      image: Business,
    },
    // {
    //   id: "08",
    //   title: "Enhance PT",
    //   subtitle: "Enhance PT",
    //   image: EnhancePT,
    // },
    // {
    //   id: "09",
    //   title: "Natours",
    //   subtitle: "Natours",
    //   image: Natours,
    // },

    {
      id: "06",
      title: "Organics Mantra",
      subtitle: "Mantra",
      image: Mantra,
    },
  ];

  return (
    <>
      <h2 className="mb-10 pb-7 pt-16 text-center text-4xl font-bold text-gray-900 md:text-4xl">
        Our Featured Projects
      </h2>
      <section className="overflow-hidden bg-[rgba(217,217,217,0.45)] px-4 py-10 md:px-10">
        <Swiper
          className="mb-7 overflow-visible"
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={10}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          loop={true}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.id}>
              <div className="relative mx-auto flex h-[420px] w-full max-w-sm flex-col items-center justify-evenly rounded-2xl bg-white p-4 shadow-md">
                {index % 2 === 0 ? (
                  <>
                    <div className="absolute left-1/2 top-0 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border-4 border-[#d9d9d9] bg-white text-sm font-semibold shadow">
                      {project.id}
                    </div>
                    <h3 className="mt-8 text-center text-lg font-semibold md:text-xl">
                      {project.title}
                    </h3>
                    {/* <p className="mb-4 text-center text-sm text-gray-500">
                      {project.subtitle}
                    </p> */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-72 w-full rounded-xl object-cover"
                    />
                  </>
                ) : (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-72 w-full rounded-xl object-cover"
                    />
                    <div className="mt-4 flex flex-col items-center">
                      <h3 className="text-center text-lg font-semibold md:text-xl">
                        {project.title}
                      </h3>
                      {/* <p className="mb-4 text-center text-sm text-gray-500">
                        {project.subtitle}
                      </p> */}
                      <div className="absolute bottom-0 left-1/2 z-10 flex h-16 w-16 -translate-x-1/2 translate-y-1/2 transform items-center justify-center rounded-full border-4 border-[#d9d9d9] bg-white text-sm font-semibold shadow">
                        {project.id}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default FeaturedProject;
