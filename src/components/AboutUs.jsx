import React, { useEffect, useState } from "react";
import { aboutImages } from "./api/Data";

const AboutUs = () => {
  const [view, setView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setView(true);
      } else {
        setView(false);
      }
    };

    // Initial setup
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="py-2 m-auto bg-[#C2278E]" id="AboutUs">
        <div className="fillLinear w-full h-full">
          <div className="text-[#000] lg:px-12 py-1 bg-[length:1455px_450px] flex lg:justify-between  w-full absolute flex-wrap h-12 justify-center">
            <div className="text-[#FFF] lg:py-24 font-plus_jakarta text-3xl font-normal sm:py-6 sm:text-center ">
              About Olvera
            </div>
            <p className="lg:hidden md:hidden text-[#FFF] lg:py-12 font-plus_jakarta text-3xl font-normal text-center p-12 text-4xl font-extrabold">
              Change is the one true constant in business
            </p>
            <a className="text-[#FFF] lg:py-56 lg:w-1/3 lg:text-left font-archivo font-normal sm:py-0 text-lg lg:mr-44 sm:mr-0 sm:w-full sm:text-center px-2 text-center ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center w-full absolute p-14 lg:p-0 md:p-1 mt-20 md:mt-24 lg:mt-96 sm:py-56 py-80 lg:py-0">
            {aboutImages.map(({ name, logo }, id) => (
              <span
                className="w-full sm:w-1/2 md:w-5/12 lg:w-1/2 mx-auto"
                key={id}
              >
                <img
                  className="object-contain w-screen"
                  src={logo}
                  alt={name}
                />
              </span>
            ))}
          </div>
          {!view ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-11/12"
              height="586"
              viewBox="0 0 1162 586"
              fill="none"
            >
              <path
                d="M596.13 0L0 586H584.026L1162 0H596.13Z"
                fill="url(#paint0_linear_1_254)"
              />

              <defs>
                <linearGradient
                  id="paint0_linear_1_254"
                  x1="992.542"
                  y1="-4.7218e-05"
                  x2="78.114"
                  y2="672.302"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#871561" />
                  <stop offset="1" stop-color="#C2278E" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-full"
              height="594"
              viewBox="0 0 410 594"
              fill="none"
            >
              <path
                d="M210.339 0L0 594H206.068L410 0H210.339Z"
                fill="url(#paint0_linear_1_681)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_681"
                  x1="350.208"
                  y1="-4.78626e-05"
                  x2="-116.289"
                  y2="119.386"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#871561" />
                  <stop offset="1" stop-color="#C2278E" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          )}
        </div>
      </div>
    </>
  );
};

export default AboutUs;
