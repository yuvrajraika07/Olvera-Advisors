import React, { useEffect } from "react";
import { navInfo, navSocialIcons } from "./api/Data";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Olvera_logo from "../assets/images/Olvera-Logo-Black 1.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      // Automatically close the mobile menu when the screen size is large
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 z-0">
      <div className="flex justify-between">
        <div className="flex justify-start">
          <div className="py-2 sm:px-0 md: px-0 lg:px-12">
            <a href={"/"}>
              <img
                src={Olvera_logo}
                alt="Olvera-Logo-Black"
                className="max-w-lg mx-auto"
              />
            </a>
          </div>
        </div>
        <div className="hidden md:block m-auto flex flex-shrink-0">
          <div className="flex">
            {navInfo.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                className="py-3 px-4 font-semibold text-[#292929BF] rounded md:hover:bg-transparent md:border-0 hover:text-[#1C1C1C] hover-underline-animation uppercase"
              >
                {label}
              </a>
            ))}

            <a
              href="#ContactUs"
              class="hidden lg:block py-3 px-4 font-semibold text-[#FFF] justify-center hover:text-[#F1F1F1]  items-center p-3 px-4 text-base font-medium text-center text-[#00000] rounded-full bg-[#C2278E] hover:bg-[#870f5e]  focus:ring-1 focus:ring-gray-400 uppercase ml-1"
            >
              CONTACT US
            </a>
          </div>
        </div>
        <div className="hidden lg:block mr-auto flex flex-shrink-0">
          <div className="flex">
            {navSocialIcons.map((link, index) => (
              <a
                href={link.href}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-2 rounded hover:text-[#2C2C2C] md:hover:bg-transparent md:border-0 hover:text-blue-900"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="flex">
          <button className="items-center justify-center text-gray-600 rounded-md hover:text-gray-900 focus:outline-none focus:text-gray-900 md:hidden cursor-default">
            <FiSearch className="mr-4" size={25} />
          </button>
          <button
            className="flex items-center justify-center text-gray-600 rounded-md hover:text-gray-900 focus:outline-none focus:text-gray-900 md:hidden"
            onClick={handleToggle}
          >
            {isOpen ? <FaTimes size={30} /> : <FaBars size={25} />}
          </button>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } fixed top-0 left-0 w-full h-full bg-gray- z-10`}
        id="navbar-default"
      >
        <div className="w-full md:w-1/2 bg-white">
          <div className="flex justify-between px-4 py-3">
            <div>
              <a href={"/"} className="py-1 px-3">
                <span className="text-xl italic font-bold whitespace-nowrap">
                  <img
                    src={Olvera_logo}
                    alt="Olvera-Logo-Black"
                    className="max-w-lg mx-auto"
                  />
                </span>
              </a>
            </div>
            <div className="md:hidden">
              <button
                onClick={handleToggle}
                className="text-gray-600 focus:outline-none"
              >
                <FaTimes />
              </button>
            </div>
          </div>
          <div className="py-1 px-4">
            <div className="divide-y">
              {navInfo.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="block py-3 text-sky-700 rounded hover:text-blue-700 md:hover:bg-transparent md:border-0 hover:text-blue-700 md:p-0 font-semibold text-[#292929BF] rounded md:hover:bg-transparent md:border-0 hover:text-[#1C1C1C] hover-underline-animation_2 uppercase"
                >
                  {label}
                </a>
              ))}
            </div>
            <div className="flex justify-between">
              {navSocialIcons.map((link, index) => (
                <a
                  href={link.href}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-4 block py-3rounded md:hover:bg-transparent md:border-0 hover:text-blue-700 md:p-0 rounded hover:text-[#2C2C2C] md:hover:bg-transparent md:border-0 hover:text-blue-900"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
