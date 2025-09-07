import vision from "../../../assets/HomePageImgs/yourVision.gif";
import solution from "../../../assets/HomePageImgs/solution.png";
import agile from "../../../assets/HomePageImgs/agile.png";
import support from "../../../assets/HomePageImgs/support.png";
import decision from "../../../assets/HomePageImgs/decision.png";
export default function YourVision() {
  return (
    <section className="w-full bg-white px-6 pb-12 pt-2 md:px-12 lg:px-24">
      <div className="flex flex-col items-center justify-center gap-12 lg:flex-row">
        {/* Left Image/Illustration */}
        <div className="w-full max-w-md md:max-w-lg lg:max-w-xl">
          <img
            src={vision}
            alt="Vision Animation"
            className="m-auto object-contain sm:w-[75%] md:w-[75%] 2xl:w-full"
          />
        </div>

        {/* Right Content */}
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-3xl font-bold text-[#07507b] md:text-2xl lg:text-3xl xl:text-2xl">
            Ready to Bring Your Vision to Life?
          </h2>
          <p className="2xl:text-md mt-4 text-gray-500 md:text-sm">
            Scale without limits with our future-ready development services —
            built for dreamers, doers, and disruptors.
          </p>

          {/* Features */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-3">
              <img src={solution} alt="Custom Icon" className="h-6 w-6" />
              <span className="text-[15px] text-gray-700">
                Custom-Built Solutions
              </span>
            </div>
            <div className="flex items-center gap-3">
              <img src={agile} alt="Agile Icon" className="h-6 w-6" />
              <span className="text-[15px] text-gray-700">Agile Approach</span>
            </div>
            <div className="flex items-center gap-3">
              <img src={support} alt="Support Icon" className="h-6 w-6" />
              <span className="text-[15px] text-gray-700">24/7 Support</span>
            </div>
            <div className="flex items-center gap-3">
              <img src={decision} alt="AI Icon" className="h-6 w-6" />
              <span className="text-[15px] text-gray-700">
                AI That Powers Smart Decisions
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <a href="/contact">
              <button className="duration-30 rounded-full bg-[#07507b] px-6 py-3 text-white shadow-md transition-all">
                Let’s Talk →
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
