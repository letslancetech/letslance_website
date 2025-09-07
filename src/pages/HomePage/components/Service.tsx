import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { Service } from "../../../interfaces/Data";

export default function ServiceSection() {
  const [services] = useFetch<Service[]>("/data/HomeService.json");

  return (
    <div className="flex flex-col gap-y-12 bg-[#F8FCFF] py-16 text-primary md:pl-28 md:pr-28 2xl:pl-[11vw] 2xl:pr-[11vw]">
      <h2 className="text-center text-3xl font-semibold md:text-4xl">
        Services we provide
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {services &&
          services.map(
            (service, i) =>
              service.id < 11 && (
                <Link
                  to={`/services/${service.id}`}
                  key={i}
                  className="group flex min-h-[320px] w-full flex-col rounded-2xl bg-white p-6 shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg sm:w-[50%] md:w-[40%] lg:w-[40%] 2xl:w-[30%]" // set min-height
                >
                  {/* Icon */}
                  <div className="self-start">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="m-0 h-20 w-24 object-contain"
                    />
                  </div>

                  {/* Title & Description (flex-1 ensures equal space) */}
                  <div className="mt-4 flex flex-1 flex-col gap-y-3">
                    <h3 className="text-[16px] font-semibold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {service.description}
                    </p>
                  </div>

                  {/* Read More */}
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-[#007aff] group-hover:underline">
                    Read More <span className="text-lg">→</span>
                  </div>
                </Link>
              )
          )}
      </div>
    </div>
  );
}
