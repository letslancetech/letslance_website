import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  Instagram,
  Twitter,
  Youtube,
  Facebook,
} from "lucide-react";
import Touch from "../../../assets/lanceImages/get-in-touch.png";

export default function GetInTouch() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Touch})` }}
    >
      <div className="flex min-h-screen items-center justify-center px-4 py-16 backdrop-blur-sm">
        <div className="w-full max-w-5xl rounded-lg bg-white p-6 shadow-lg md:p-10">
          {/* Heading */}
          <h2 className="mb-8 text-center text-2xl font-bold text-[#07507b] md:text-3xl">
            Get In Touch
          </h2>

          <div className="flex flex-col gap-8 md:flex-row">
            {/* Left: Form */}
            <form className="flex flex-1 flex-col space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="First_Name Last_Name"
                  className="w-full rounded border border-gray-300 px-4 py-2 focus:border-[#07507b] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded border border-gray-300 px-4 py-2 focus:border-[#07507b] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full resize-none rounded border border-gray-300 px-4 py-2 focus:border-[#07507b] focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="rounded bg-[#07507b] px-6 py-2 text-white transition hover:bg-[#063f63]"
              >
                Send
              </button>
            </form>

            {/* Right: Contact Info */}
            <div className="flex-1 space-y-4 text-sm text-gray-700">
              <div className="flex items-start gap-2">
                <MapPin className="mt-1 h-5 w-5 text-[#07507b]" />
                <p className="pt-1">Noida</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-[#07507b]" />
                <span>+91 9653594353</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-[#07507b]" />
                <span>sagar@letslancetech.in</span>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-4 pt-2">
                <Instagram className="h-5 w-5 cursor-pointer text-[#07507b]" />
                <Youtube className="h-5 w-5 cursor-pointer text-[#07507b]" />
                <Twitter className="h-5 w-5 cursor-pointer text-[#07507b]" />
                <Facebook className="h-5 w-5 cursor-pointer text-[#07507b]" />
              </div>

              {/* Map */}
              <div className="pt-4">
                <iframe
                  title="Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112178.57896688058!2d77.24593402032541!3d28.52226367344823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1748843447963!5m2!1sen!2sin"
                  className="h-40 w-full rounded-md border"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
