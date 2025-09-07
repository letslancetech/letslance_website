import MaterialIcon from "../../../../common/MaterialIcon";
import { Service } from "../../../../interfaces/Data";

export default function Highlights(props: { service: Service }) {
  return (
    <section className="bg-white py-16">
      <div className="p-page">
        {/* Section Heading */}
        <h2 className="mb-12 text-center text-4xl font-bold text-[#07507b]">
          Our AI Services
        </h2>

        {/* Highlights Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {props.service.highlights.map((highlight: any, i: number) => (
            <div
              key={i}
              className="flex min-h-[300px] flex-col items-center gap-y-4 rounded-[2rem] bg-back px-6 py-8 text-primary shadow-2xl"
            >
              <MaterialIcon
                codepoint={highlight.codepoint}
                className="text-[4rem]"
              />
              <div className="flex flex-col gap-y-2 text-center">
                <div className="border-b-2 border-primary pb-2 text-xl font-semibold">
                  {highlight.title}
                </div>
                <div className="text-base text-[#333]">
                  {highlight.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
