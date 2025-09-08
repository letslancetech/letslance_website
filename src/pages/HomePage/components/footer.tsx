import lanceLogo from "../../../assets//HomePageImgs/logoImg.png";
import email from "../../../assets/lanceImages/email.png";
import phone from "../../../assets/lanceImages/telephone.png";
import facebook from "../../../assets/lanceImages/facebook.png";
import youtube from "../../../assets/lanceImages/youtube.png";
import twitter from "../../../assets/lanceImages/twitter.png";
import insta from "../../../assets/lanceImages/instagram.png";
import linkedin from "../../../assets/lanceImages/linkedin.png";
import React from "react";
export default function Footer() {
  return (
    <footer className="bg-[#f8f9fa] text-black">
      <div className="w-full">
        {/* <div
          className="mx-auto hidden lg:block"
          style={{
            width: "100%",
            height: 0,
            borderTop: "150px solid black",
            borderLeft: "300px solid transparent",
            borderRight: "300px solid transparent",
          }}
        ></div>

        <div
          className="mx-auto block lg:hidden"
          style={{
            width: "100%",
            height: 0,
            borderTop: "100px solid black", // reduced height on small screens
            borderLeft: "160px solid transparent",
            borderRight: "160px solid transparent",
          }}
        ></div> */}
      </div>
      {/* Newsletter Section */}
      <div className="relative flex flex-col items-center justify-center px-4 py-16">
        <div className="absolute top-[-2rem] flex w-full flex-col items-center justify-between gap-8 rounded-xl bg-white p-10 shadow-md md:max-w-[80%] lg:flex-row 2xl:max-w-[70%]">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-semibold text-primary md:text-[1.3rem] 2xl:text-[1.8rem]">
              Subscribe to our Newsletter
            </h3>
            <p className="mt-2 text-xs text-gray-600 md:text-[0.9rem] 2xl:text-[1rem]">
              Stay updated with our latest news and offers.
            </p>
          </div>
          <div className="flex w-full max-w-xl flex-col items-center gap-2 md:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-56 flex-grow rounded-l-md border border-gray-300 px-8 py-2 focus:outline-none sm:w-72 xl:w-72"
            />
            <button className="rounded-md bg-[#07507b] px-6 py-2 text-white hover:bg-opacity-90">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      {/* Footer Main Section */}
      <div className="mt-40 w-full px-6 py-14 text-white md:mt-20 xl:mt-0">
        <div className="mx-auto mt-6 grid max-w-7xl grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {/* Logo & Description */}
          <div>
            <div className="mb-7 flex items-center gap-3">
              <img
                src={lanceLogo}
                alt="Logo"
                // width={180}
                // height={40}
                className="aspect-square h-16 duration-inherit group-hover:rotate-[360deg] mobile:h-14"
              />

              <h1 className="font-Ysabeau text-2xl font-medium text-primary duration-inherit group-hover:scale-105 mobile:-ml-2 mobile:text-2xl">
                LetsLance
              </h1>
            </div>
            <p className="text-sm text-black">
              We are your go-to source for dependable and forward-thinking tech
              outsourcing, designed to elevate your business with precision and
              innovation.
            </p>

            {/* place to add backed by Innow8 apps in some styled way*/}
            <div className="mt-4">
              <span className="text-primary">Backed by &nbsp;
                <a href="https://innow8apps.com/" className=" cursor-pointer underline" target="_blank" rel="noopener noreferrer">Innow8 Apps</a>
              </span>
              </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-[#07507b]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-black">
              <li>
                <a href="/AboutUs">About</a>
              </li>
              <li>
                <a href="/Career">Careers</a>
              </li>
              <li>
                <a href="/DigitalProducts">Digital Products</a>
              </li>
              <li>
                <a href="/portfolio">Portfolio</a>
              </li>
              <li>
                <a href="/TermsAndConditions">Terms of use</a>
              </li>
              <li>
                <a href="/privacy">Privacy policy</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-[#07507b]">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-black">
              <li>
                <a href="/services/9">AI Solutions</a>
              </li>
              <li>
                <a href="/services/10">Blockchain Development</a>
              </li>
              <li>
                <a href="/services/1">Custom Software Development</a>
              </li>
              <li>
                <a href="/services/5">E-commerce Development</a>
              </li>
              <li>
                <a href="/services/6">Mobile App Development</a>
              </li>
              <li>
                <a href="/services/2">Website Development</a>
              </li>
              {/* <li>
                <a href="/services/3">Dedicated Development Team</a>
              </li>
              <li>
                <a href="/services/4">Software Product Development</a>
              </li> */}

              <li>
                <a href="/services/8">UI/UX Design</a>
              </li>
              <li>
                <a href="/services/7">Quality Assurance</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-[#07507b]">
              Contact Information
            </h4>
            <div className="mb-2 flex items-center text-sm text-black">
              <img
                src={email}
                alt="Email"
                width={18}
                height={18}
                className="mr-2"
              />
              sagar@letslancetech.in
            </div>
            <div className="flex items-center text-sm text-black">
              <img
                src={phone}
                alt="Phone"
                width={18}
                height={18}
                className="mr-2"
              />
              +91 9653594353
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-[#07507b]">
              Follow Us On
            </h4>
            <div className="flex items-center gap-3">
              <img src={facebook} alt="Facebook" width={24} height={24} />
              <img src={insta} alt="Instagram" width={24} height={24} />
              <img src={twitter} alt="Twitter" width={24} height={24} />
              <img src={youtube} alt="YouTube" width={24} height={24} />
              <img src={linkedin} alt="LinkedIn" width={24} height={24} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
