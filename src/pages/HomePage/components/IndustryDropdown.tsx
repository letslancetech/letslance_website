import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { Industry } from "../../../interfaces/Data";

export default function IndustryDropdown() {
  const [industries] = useFetch<Industry[]>("/data/industries.json");

  return (
    <section className="p-page flex flex-col gap-y-10 rounded-t-[3rem] py-24 mobile:py-16">
      {/* Heading */}
      <div className="text-center">
        <h2 className="font-tienne text-3xl font-bold text-[#0a0a0a] sm:text-2xl md:text-3xl 2xl:text-4xl">
          Solving with precision, delivering with pride
        </h2>
        <p className="mx-auto mt-4 max-w-5xl text-gray-600 sm:text-sm md:text-[16px] xl:leading-6 2xl:text-[18px]">
          Whether it's small start-ups in the ideation stage, mid-sized
          companies concentrating on growth, or major corporations actively
          optimising operations across various industries, we excel at
          delivering the best-suited solution as per the specific demands.
        </p>
      </div>

      {/* Industry Tags */}
      <div className="flex flex-wrap justify-center gap-4 text-center text-lg text-front">
        {industries &&
          industries.map((industry, i) => (
            <Link
              to={`/industries/${industry.id}`}
              key={i}
              className="min-w-[140px] whitespace-nowrap rounded-2xl border border-[#d4d4d4] bg-white px-4 py-3 text-sm text-[#4d4d4d] shadow-sm duration-300 hover:scale-105 hover:shadow-md md:text-sm 2xl:text-lg"
            >
              {industry.title}
            </Link>
          ))}
      </div>
    </section>
  );
}
