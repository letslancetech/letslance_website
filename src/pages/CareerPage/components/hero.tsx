import digitalBanner from "../../../assets/lanceImages/digitalBanner.png";
import comingSoon from "../../../assets/lanceImages/comingsoon.png";

export default function Career() {
  return (
    <section className="flex items-center justify-center bg-white px-4 pb-40 pt-60 text-center">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold text-black sm:text-4xl">
          Stay tuned for upcoming opportunities!
        </h1>
        <p className="mt-4 text-base text-gray-600 sm:text-lg">
          Even if there are no current openings, we’d love to hear from you.
        </p>

        <div className="mt-6 text-sm sm:text-base">
          <p className="font-semibold text-gray-800">
            Send us your resume and portfolio at:
          </p>
          <a
            href="mailto:sagar@letslancetech.in"
            className="mt-1 inline-block text-blue-700 hover:underline"
          >
            sagar@letslancetech.in
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-500 sm:text-base">
          Let us know what you’re great at — and we’ll keep you in mind for
          future roles!
        </p>
      </div>
    </section>
  );
}
