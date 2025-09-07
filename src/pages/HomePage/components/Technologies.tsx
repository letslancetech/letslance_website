import useFetch from "../../../hooks/useFetch";
import { Skill } from "../../../interfaces/Data";

export default function Technologies() {
  const [skills] = useFetch<Skill[]>("/data/skills.json");

  return (
    <section className=" bg-white px-[4vw] py-16 text-center md:px-[8vw] 2xl:px-[20vw]">
      {/* Heading */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-primary md:text-4xl">
          Technologies we work with
        </h2>
        <p className="mt-2 text-gray-600 md:text-lg">
          Here are some of the modern tools, languages, and frameworks our team
          is proficient in.
        </p>
      </div>

      {/* Flex-based Skills Grid */}
      <div className="flex flex-wrap justify-center gap-5">
        {skills &&
          skills.map((skill, i) => (
            <div
              key={i}
              className="flex aspect-square basis-[22%] items-center justify-center rounded-xl bg-[#f9f9f9] p-3 shadow-sm transition hover:shadow-md sm:basis-[8%] md:basis-[8%] lg:basis-[8%] xl:basis-[8%]"
            >
              <img
                src={skill.imageUrl}
                alt={skill.name}
                className="max-h-[40px] object-contain"
              />
            </div>
          ))}
      </div>
    </section>
  );
}
