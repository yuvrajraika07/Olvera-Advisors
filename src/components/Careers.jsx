import React from "react";
import paintingPhoto from "../assets/images/2Q9A5622.png";

const Careers = () => {
  return (
    <div className="mt-6" id="Careers">
      <div className="relative flex">
        <div className="flex flex-col">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="401"
            height="401"
            viewBox="0 0 401 401"
            fill="none"
            className="rotate-180 sm:rotate-180 md:rotate-180 lg:rotate-0 lg:ml-56 md:ml-0 sm:ml-0 sm:pb-0 md:pb-0 lg:pb-40 w-full mt-6"
          >
            <path
              d="M283.684 337.527C208.127 383.348 109.73 359.242 63.9096 283.684C18.0888 208.127 42.195 109.73 117.752 63.9096C193.31 18.0888 291.706 42.1951 337.527 117.753C383.348 193.31 359.242 291.706 283.684 337.527Z"
              stroke="url(#paint0_linear_1_455)"
              stroke-width="80"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_455"
                x1="371.729"
                y1="97.011"
                x2="29.7074"
                y2="304.426"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#C2278E" stop-opacity="0.14" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="204"
            // height="250"
            viewBox="0 0 204 401"
            fill="none"
            className="lg:visible md:invisible sm:invisible xs:invisible rotate-2 sm:rotate-2 md:rotate-2 lg:rotate-0 sm:pb-0 md:pb-0 lg:pb-0 h-96 lg:h-64 md:h-96 sm:h-96"
          >
            <path
              d="M164 200.719C164 289.084 92.3655 360.719 4 360.719C-84.3656 360.719 -156 289.084 -156 200.719C-156 112.353 -84.3656 40.7185 4 40.7185C92.3655 40.7185 164 112.353 164 200.719Z"
              stroke="url(#paint0_linear_1_453)"
              stroke-width="80"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_453"
                x1="4"
                y1="0.718506"
                x2="4"
                y2="400.719"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#C2278E" stop-opacity="0.14" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="md:flex md:items-center sm:flex sm:flex-col xs:flex xs:flex-col lg:flex lg:flex-row h-96 mt-12 absolute">
          <div className="w-full md:w-1/2 sm:w-96 lg:w-full sm:text-center md:text-center lg:text-left text-center ">
            <div className="lg:px-32 md:px-0 sm:px-0">
              <h1 className="pb-4 font-semibold text-[#292929BF] uppercase font-oswald tracking-widest ">
                CAREERS
              </h1>
              <a href="#">
                <h5 className="pb-8 font-semibold tracking-tight font-extrabold font-plus_jakarta text-4xl text-[#2D2D2D] capitalize">
                  Careers at Olvera
                </h5>
              </a>
              <p className="font-normal text-[#6E6E6E] leading-6 font-archivo">
                Navigate change, develop on-demand skills. Your turnaround
                journey starts with Olvera.
              </p>

              <div className="">
                <a
                  href="#SearchCareers"
                  className="inline-flex justify-center hover:[#FF74D0]  items-center p-3 px-4 text-base font-medium text-center text-[#00000] rounded-full bg-[#FF74D0] hover:bg-[#C2278E]  focus:ring-1 focus:ring-gray-400 mt-6"
                >
                  Search Careers
                </a>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-3/4 md:w-full sm:w-full pb-0 py-36 lg:py-80 md:py-36 sm:py-56 xs:flex xs:mt-12 sm:mt-0 md:mt-0 lg:mt-44">
            <div className="max-w-md p-0 md:p-0 lg:ml-36 md:ml-0 sm:ml-0 w-full">
              <img src={paintingPhoto} alt="2Q9A5622" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
