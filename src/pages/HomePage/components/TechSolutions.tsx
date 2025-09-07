import React from "react";
import aiImage from "../../../assets/HomePageImgs/evolution.png"; // replace with actual path
import blockchainImage from "../../../assets/HomePageImgs/blockchain.png"; // replace with actual path

export default function TechSolutions() {
  return (
    <section className="p-page space-y-24 bg-[#f1f8ff] py-20 mobile:py-12">
      {/* AI Section */}
      <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
        {/* Left: Image */}
        <div className="flex w-full justify-center lg:w-1/2">
          <img
            src={aiImage}
            alt="AI Illustration"
            className="w-[90%] max-w-[200px] sm:max-w-[300px] 2xl:max-w-[500px]"
          />
        </div>
        {/* Right: Content */}
        <div className="w-full text-center lg:w-1/2 lg:text-left">
          <h2 className="text-2xl font-bold text-[#0a0a0a] sm:text-3xl md:text-[26px] 2xl:text-3xl">
            AI for Smart Business Evolution
          </h2>
          <p className="sm:text-md mt-4 text-base text-gray-700 md:text-[14px] 2xl:text-[16px]">
            Artificial Intelligence is more than automation — it's about
            building smart systems that learn, adapt, and accelerate growth.
            From predictive analytics to conversational AI, our solutions are
            tailored to supercharge your workflows.
          </p>
          <p className="sm:text-md mb-4 mt-4 text-base text-gray-700 md:text-[14px] 2xl:text-[16px]">
            At LetsLance, we develop advanced AI models using tools like OpenAI,
            Hugging Face, Stability AI and custom ML pipelines to solve complex
            challenges, personalize customer experiences, and enhance
            decision-making with real-time insights.
          </p>
          <a
            href="/contact"
            className="mt-5 cursor-pointer font-semibold text-[#07507b] hover:underline md:text-sm 2xl:text-[16px]"
          >
            Build Intelligent Systems That Evolve With Your Business.
          </a>
        </div>
      </div>

      {/* Blockchain Section */}
      <div className="flex flex-col-reverse items-center justify-between gap-10 lg:flex-row">
        {/* Left: Content */}
        <div className="w-full text-center lg:w-1/2 lg:text-left">
          <h2 className="text-2xl font-bold text-[#0a0a0a] sm:text-3xl md:text-[24px] 2xl:text-3xl">
            Blockchain for Secure Digital Trust
          </h2>
          <p className="sm:text-md mt-4 text-base text-gray-700 md:text-[14px] 2xl:text-[16px]">
            Blockchain isn’t just for crypto — it's transforming how industries
            secure data, verify transactions, and eliminate inefficiencies. From
            smart contracts to decentralized identity, we build trust-driven
            systems powered by blockchain.
          </p>
          <p className="sm:text-md mb-3 mt-4 text-base text-gray-700 md:text-[14px] 2xl:text-[16px]">
            At LetsLance, we engineer custom blockchain solutions using
            Solidity, Stellar, Chainlink, web3.js and more. Whether it’s DeFi,
            NFTs, or enterprise blockchain, we help you unlock new business
            models with secure, tamper-proof technology.
          </p>
          <a
            href="/contact"
            className="mt-5 cursor-pointer font-semibold text-[#07507b] hover:underline md:text-sm 2xl:text-[16px]"
          >
            Build Blockchain-Backed Solutions That Scale with Confidence.
          </a>
        </div>
        {/* Right: Image */}
        <div className="flex w-full justify-center lg:w-1/2">
          <img
            src={blockchainImage}
            alt="Blockchain Illustration"
            className="w-[90%] max-w-[200px] sm:max-w-[300px] 2xl:max-w-[500px]"
          />
        </div>
      </div>
    </section>
  );
}
