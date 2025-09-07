import { Link, NavLink, useLocation } from "react-router-dom";
import MaterialIcon from "./MaterialIcon";
import { twMerge } from "tailwind-merge";
import { ReactNode, useEffect, useRef, useState } from "react";
import useFetch from "../hooks/useFetch";
import { Industry, Service } from "../interfaces/Data";
import lanceLogo from "../assets/HomePageImgs/logoImg.png";
import React from "react";

const navItems = [
  { title: "About Us", to: "/aboutus" },
  { title: "Services", dropdown: <DropdownServices /> },
  { title: "Industries", dropdown: <DropdownIndustries /> },
  { title: "Portfolio", to: "/portfolio" },
  { title: "Digital Products", to: "/DigitalProducts" },
  { title: "Careers", to: "/Career" },
];

const navStickThreshold = 64;

export default function Navbar() {
  const [mobileNavShown, setMobileNavShown] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [dropdownElememt, setDropdownElement] = useState<ReactNode | null>(
    null
  );
  const navRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const location = useLocation();
  const [activeClicked, setActiveClicked] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setDropdownElement(null);
  }, [location]);

  return (
    <>
      <nav
        ref={navRef}
        className={twMerge(
          "fixed left-0 top-0 z-[100] flex w-full items-center justify-between px-[4vw] py-3 duration-500 md:px-[8vw] 2xl:px-[20vw]",
          "bg-white shadow-sm",
          scrollY > navStickThreshold && ""
        )}
      >
        <Link
          to="/"
          className={twMerge(
            "group flex w-max items-center duration-300",
            scrollY < navStickThreshold && ""
          )}
        >
          <img
            src={lanceLogo}
            alt="letslance logo"
            className="mr-4 aspect-square h-16 duration-inherit group-hover:rotate-[360deg] mobile:h-14"
          />
          <h1 className="font-Ysabeau text-2xl font-medium text-primary duration-inherit group-hover:scale-105 mobile:-ml-2 mobile:text-2xl">
            LetsLance
          </h1>
        </Link>
        <div className="ml-auto hidden items-center text-front text-opacity-70 lg:flex">
          {navItems.map((item, i) => (
            <div className="px-2 2xl:px-4" key={i}>
              {item.to && (
                <NavLink
                  to={item.to}
                  onClick={() => setActiveClicked(item.title)}
                  className={({ isActive }) =>
                    twMerge(
                      "relative inline-block whitespace-nowrap py-1 text-sm text-black duration-300 hover:text-primary  2xl:text-[16px]",
                      (isActive || activeClicked === item.title) &&
                        "after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-full after:-translate-x-1/2 after:bg-primary after:content-['']"
                    )
                  }
                >
                  {item.title}
                </NavLink>
              )}
              {item.dropdown && (
                <button
                  className={twMerge(
                    "relative inline-block whitespace-nowrap  py-1 text-sm text-black duration-300 hover:text-primary 2xl:text-[16px]",
                    dropdownElememt === item.dropdown &&
                      "after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-full after:-translate-x-1/2 after:bg-primary after:content-['']"
                  )}
                  onClick={() => setDropdownElement(item.dropdown)}
                >
                  {item.title}
                </button>
              )}
            </div>
          ))}
          <Link
            to="/contact"
            className="ml-3 rounded-xl border border-primary p-3 px-6 font-medium text-black outline outline-0 outline-primary duration-150 hover:outline-2"
          >
            Contact
          </Link>
        </div>

        <div className="relative lg:hidden">
          <button onClick={() => setMobileNavShown(!mobileNavShown)}>
            <MaterialIcon
              className={`text-4xl ${
                scrollY < navStickThreshold ? "text-black" : "text-front"
              }`}
              codepoint="e5d2"
            />
          </button>
          {mobileNavShown && (
            <div className="absolute right-0 top-full flex flex-col gap-y-2 rounded-lg border bg-background py-3 shadow-md">
              {navItems.map((item, i) => (
                <div className="flex flex-col items-center" key={i}>
                  {item.to && (
                    <NavLink
                      onClick={() => {
                        setMobileNavShown(false);
                        setActiveClicked(item.title);
                      }}
                      to={item.to}
                      className={({ isActive }) =>
                        twMerge(
                          "relative px-4 py-1 duration-300 hover:text-primary",
                          (isActive || activeClicked === item.title) &&
                            "after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-4/5 after:-translate-x-1/2 after:bg-primary after:content-['']"
                        )
                      }
                    >
                      {item.title}
                    </NavLink>
                  )}
                  {item.dropdown && (
                    <button
                      className={twMerge(
                        "px-4 py-1 duration-300 hover:text-primary",
                        dropdownElememt === item.dropdown &&
                          "after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-4/5 after:-translate-x-1/2 after:bg-primary after:content-['']"
                      )}
                      onClick={() => {
                        setDropdownElement(item.dropdown);
                        setMobileNavShown(false);
                      }}
                    >
                      {item.title}
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>

      <div
        className={twMerge(
          "fixed left-0 top-0 z-[99] min-h-[40vh] w-full rounded-b-[2rem] bg-primary duration-500",
          dropdownElememt
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        )}
      >
        {dropdownElememt}
        <button
          className="absolute right-12 top-24 z-[100] text-back mobile:right-5 mobile:top-20"
          onClick={() => {
            setDropdownElement(null);
          }}
        >
          <MaterialIcon
            codepoint="e5cd"
            className="text-[2rem] mobile:text-[1.7rem]"
          />
        </button>
      </div>
    </>
  );
}

function DropdownIndustries() {
  const [industries] = useFetch<Industry[]>("/data/industries.json");

  return (
    <div className="p-page flex w-full flex-wrap gap-x-10 gap-y-6 py-16 pt-28 text-back">
      {industries &&
        industries.map((industry, i) => (
          <Link
            key={i}
            className="w-[22%] pb-1 text-base duration-300 hover:translate-x-[5%] hover:scale-110 hover:cursor-pointer hover:border-b mobile:text-sm"
            to={`/industries/${industry.id}`}
          >
            {industry.title}
          </Link>
        ))}
    </div>
  );
}

function DropdownServices() {
  const [services] = useFetch<Service[]>("/data/services.json");

  return (
    <div className="p-page flex w-full flex-wrap gap-x-10 gap-y-6 py-16 pt-28 text-back mobile:justify-evenly">
      {services &&
        services.map((service, i) => (
          <Link
            key={i}
            className="w-[34%] pb-1 text-base duration-300 hover:translate-x-[5%] hover:scale-110 hover:cursor-pointer hover:border-b mobile:text-sm"
            to={`/services/${service.id}`}
          >
            {service.title}
          </Link>
        ))}
    </div>
  );
}
