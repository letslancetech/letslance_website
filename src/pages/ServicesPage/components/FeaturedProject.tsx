import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const FeaturedProject = () => {
  const projects = [
    {
      id: "01",
      title: "Prism Studios",
      subtitle: "Web design",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "02",
      title: "Elysian Fields",
      subtitle: "Logo Design",
      image:
        "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "03",
      title: "Astra Vision",
      subtitle: "Animation",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "04",
      title: "Neon Quest",
      subtitle: "App Development",
      image:
        "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "05",
      title: "Lunar Lab",
      subtitle: "Product Design",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "06",
      title: "Nova Node",
      subtitle: "Branding",
      image:
        "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section className="overflow-hidden bg-[#d9d9d9] px-4 py-10 md:px-10">
      <h2 className="mb-10 text-center text-2xl font-bold text-gray-900 md:text-4xl">
        Our Featured Projects
      </h2>
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
            <div className="relative mx-auto flex h-[420px] w-full max-w-sm flex-col items-center justify-between rounded-2xl bg-white p-4 shadow-md">
              {index % 2 === 0 ? (
                <>
                  <div className="absolute left-1/2 top-0 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border-4 border-[#d9d9d9] bg-white text-sm font-semibold shadow">
                    {project.id}
                  </div>
                  <h3 className="mt-8 text-center text-lg font-semibold md:text-xl">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-center text-sm text-gray-500">
                    {project.subtitle}
                  </p>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-80 w-full rounded-xl object-cover"
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
                    <p className="mb-4 text-center text-sm text-gray-500">
                      {project.subtitle}
                    </p>
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
  );
};

export default FeaturedProject;
