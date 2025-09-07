export default function OurValue() {
  const values = [
    {
      title: "Client-Centric Approach",
      description:
        "We prioritize our clients' needs and work closely with them to deliver tailored solutions.",
    },
    {
      title: "Innovation and Creativity",
      description:
        "We embrace innovation and creativity to develop cutting-edge solutions for our clients.",
    },
    {
      title: "Integrity and Transparency",
      description:
        "We maintain honesty, integrity, and transparency in all our interactions and processes.",
    },
    {
      title: "Collaboration and Communication",
      description:
        "We foster a collaborative environment, valuing open communication and teamwork.",
    },
    {
      title: "Continuous Learning and Growth",
      description:
        "We continuously enhance our skills and stay updated with the latest industry trends.",
    },
  ];

  return (
    <section className="p-page flex flex-col gap-10 bg-[#f0f9ff] py-20 lg:flex-row lg:gap-x-6">
      {/* Left Section */}
      <div className="flex flex-col justify-center gap-y-4 lg:w-[45%]">
        <div className="flex flex-col gap-y-2">
          <h2 className="text-[2rem] font-bold text-[#07507b]">
            Our Firms, Our Values
          </h2>
          <div className="h-[2px] w-full bg-primary" />
        </div>
        <p className="text-lg font-semibold text-gray-700">
          Our shared values and complementary skills have created a powerful
          partnership aiming to deliver our alternative capabilities to wealth
          companies.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex flex-wrap justify-start gap-6 lg:w-[55%]">
        {values.map((value, i) => (
          <div
            key={i}
            className="w-full rounded-3xl bg-primary px-6 py-5 text-back sm:w-[48%] lg:w-[46%]"
          >
            <div className="mb-3">
              <h3 className="text-lg font-semibold">{value.title}</h3>
              <div className="mt-1 h-[1px] w-full bg-back" />
            </div>
            <p className="text-sm">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
