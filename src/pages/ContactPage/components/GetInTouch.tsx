import whatsapp from "../../../assets/lanceImages/whatsapp.png";
import calendly from "../../../assets/lanceImages/calendly.png";
import phone from "../../../assets/lanceImages/phone.png";
import location from "../../../assets/lanceImages/locations.png";
import links from "../../../assets/lanceImages/links.png";
import call from "../../../assets/lanceImages/call.png";
import consultationImg from "../../../assets/lanceImages/consultation.png"; // replace with your actual path
import React from "react";
export default function ContactPage() {
  return (
    <section className="">
      <div className="bg-[#f4fafd] py-10">
        <div className="mx-auto max-w-6xl  text-center">
          <h2 className="mb-2 text-3xl font-semibold text-[#03210d]">
            Let’s make success happen
          </h2>
          <p className="mb-12 text-gray-500">
            Choose your favourite way to get in touch with us.
          </p>

          {/* Contact Info Section */}
          <div className="mb-20 grid grid-cols-1 gap-10 text-center md:grid-cols-3">
            {/* Address */}
            <div className="flex flex-col items-center gap-3">
              <img src={location} alt="Location" className="h-14 w-12" />
              <h3 className="font-semibold text-gray-700">Address</h3>
              <p className="text-gray-600">Noida</p>
              {/* <p className="text-gray-600">Carrington NC 27601</p> */}
            </div>

            {/* Contact */}
            <div className="flex flex-col items-center gap-3">
              <img src={call} alt="Phone" className="h-12 w-12" />
              <h3 className="font-semibold text-gray-700">
                Contact Information
              </h3>
              <p className="text-gray-600">Mobile : +91 9653594353</p>
              <p className="text-gray-600">Email: sagar@letslancetech.in</p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center gap-3">
              <img src={links} alt="Links" className="h-12 w-12" />
              <h3 className="font-semibold text-gray-700">Quick Links</h3>
              <div className="mt-1 flex gap-2">
                <button className="flex items-center gap-1 rounded-md bg-[#e9fdf1] px-3 py-1 text-sm shadow-sm">
                  <img src={whatsapp} alt="WhatsApp" className="h-4 w-4" />
                  Whatsapp
                </button>
                <button className="flex items-center gap-1 rounded-md bg-[#e6f1ff] px-3 py-1 text-sm shadow-sm">
                  <img src={calendly} alt="Calendly" className="h-4 w-4" />
                  Calendly
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Form + Illustration */}
      <div className="mx-auto max-w-6xl text-center">
        <div className="my-16 flex flex-col items-center justify-between gap-12 lg:flex-row">
          {/* Form Box */}
          <div className="w-full rounded-lg bg-[#fafafa] p-8 shadow-md lg:w-1/2">
            <h3 className="mb-6 text-2xl font-semibold text-[#03210d]">
              Book your free consultation
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-md border border-gray-300 p-2"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-md border border-gray-300 p-2"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full rounded-md border border-gray-300 p-2"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-md border border-gray-300 p-2"
                />
              </div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full rounded-md border border-gray-300 p-2"
              />
              <button
                type="submit"
                className="rounded-md bg-[#014570] px-6 py-2 text-white"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Illustration */}
          <div className="w-full lg:w-1/2">
            <img
              src={consultationImg}
              alt="Consultation Illustration"
              className="mx-auto w-full md:max-w-xs 2xl:max-w-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
