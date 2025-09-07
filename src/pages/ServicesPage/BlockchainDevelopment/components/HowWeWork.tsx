import React from "react";
import workStepsImage from "../../../assets/lanceImages/workStep.png";
import { motion } from "framer-motion";

const stepDetails = [
  {
    title: "Discover & Define",
    description:
      "We start by understanding your goals, challenges, and target users. This helps us define a clear roadmap and project scope tailored to your needs.",
  },
  {
    title: "Design & Prototype",
    description:
      "Our team creates intuitive, user-centric designs and prototypes to bring your ideas to life and ensure the best user experience.",
  },
  {
    title: "Develop & Integrate",
    description:
      "We build high-performance solutions using the latest technologies—seamlessly integrating with your existing systems if needed.",
  },
  {
    title: "Test & Refine",
    description:
      "Every product undergoes rigorous testing to ensure it's bug-free, secure, and optimized. We fine-tune until it's just right.",
  },
  {
    title: "Launch & Support",
    description:
      "After deployment, we provide ongoing support, updates, and improvements to ensure long-term success.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function HowWeWork() {
  return (
    <section className="bg-[#f5faff] px-4 py-16 md:px-12">
      <div className="mx-auto max-w-7xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-3xl font-bold text-[#07507b] md:text-4xl"
        >
          How We Work?
        </motion.h2>

        {/* Top 3 Steps */}
        <div className=" flex flex-col gap-12 text-center md:flex-row md:justify-between">
          {stepDetails.slice(0, 3).map((step, index) => (
            <motion.div
              key={index}
              className="md:w-[30%]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={index}
            >
              <h3 className="mb-2 text-xl font-semibold text-gray-800">
                {step.title}
              </h3>
              <p className="mx-auto max-w-xs text-sm leading-relaxed text-gray-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Image in between */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative  w-full overflow-x-auto"
        >
          <img
            src={workStepsImage}
            alt="How We Work steps"
            className="mx-auto w-full max-w-6xl"
          />
        </motion.div>

        {/* Bottom 2 Steps */}
        <div className="flex flex-col gap-12 text-center md:flex-row md:justify-center">
          {stepDetails.slice(3).map((step, index) => (
            <motion.div
              key={index}
              className="md:w-[40%]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={index + 3}
            >
              <h3 className="mb-2 text-xl font-semibold text-gray-800">
                {step.title}
              </h3>
              <p className="mx-auto max-w-xs text-sm leading-relaxed text-gray-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
