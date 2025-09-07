import digitalBanner from "../../../assets/lanceImages/digitalBanner.png";
import comingSoon from "../../../assets/lanceImages/comingsoon.png";

export default function DigitalProducts() {
  return (
    <section
      className="relative z-0 flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${digitalBanner})` }}
    >
      <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:gap-16">
        {/* Left Image */}
        <div className="flex w-full items-center justify-center md:w-1/2">
          <img
            src={comingSoon}
            alt="mobileBanner"
            className="w-full max-w-xs md:max-w-md"
          />
        </div>

        {/* Right Content */}
        <div className="w-full text-center md:w-1/2 md:text-left">
          <h1 className="font-tienne text-4xl font-semibold leading-snug text-[#396279] drop-shadow-lg md:whitespace-nowrap md:text-[60px]">
            Coming Soon !!
          </h1>
        </div>
      </div>
    </section>
  );
}
