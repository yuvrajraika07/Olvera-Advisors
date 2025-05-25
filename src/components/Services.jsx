import React from "react";
import { services, servicesTotalData } from "./api/Data";

const Services = () => {
  return (
    <div className="" id="Services">
      <div className="">
        <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 mb-6">
          <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-2  lg:grid-cols-4 xl:grid-cols-4 dark:text-white sm:p-8 ">
            {servicesTotalData.map(({ name, totalCount }, id) => (
              <div className="flex flex-col items-center justify-center font-semibold ">
                <dt className="mb-2 text-3xl font-extrabold text-6xl text-[#CC0E8c] ">
                  {totalCount}
                </dt>
                <dd className="text-[#292929] text-xl ">{name}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="relative flex">
        <div className="flex flex-col">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="401"
            height="401"
            viewBox="0 0 401 401"
            fill="none"
            className="rotate-180 sm:rotate-180 md:rotate-180 lg:rotate-0 lg:ml-56 md:ml-0 sm:ml-0 sm:pb-0 md:pb-0 lg:pb-44 w-full"
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

        <div className="md:flex md:items-center h-72 mt-12 absolute">
          <div className="w-full md:w-1/2 sm:w-96 lg:w-full sm:text-center md:text-center lg:text-left text-center">
            <div className="lg:px-32 md:px-0 sm:px-0">
              <h1 className="pb-4 font-semibold text-[#292929BF] uppercase font-oswald tracking-widest ">
                SERVICES
              </h1>
              <a href="#">
                <h5 className="pb-8 font-semibold tracking-tight font-extrabold font-plus_jakarta text-4xl text-[#2D2D2D] capitalize">
                  Our services that can help your business
                </h5>
              </a>
              <p className="font-normal text-[#6E6E6E] leading-6 font-archivo">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit tempor
                incididunt ut labore et dolore magna aliqua. <br />
                <br />
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
              </p>
            </div>
          </div>

          <div className="w-full p-5 pb-0 py-2 lg:py-80 md:py-96 sm:py-54 xs:flex mt-12 sm:mt-0 md:mt-0 lg:mt-44">
            <div className="max-w-md p-0 space-y-4 md:p-0 lg:ml-32 md:ml-0 sm:ml-0">
              {services.map(({ name, id }) => (
                <>
                  <div
                    className="flex items-end justify-around gap-6 lg:gap-44 md:gap-36 sm:gap-6 xs:gap-3"
                    key={id + 1}
                  >
                    <div>
                      <div className="w-24 mb-2.5 text-[#C2278E] font-montserrat font-semibold">
                        {id}
                      </div>
                      <div className="w-56 font-montserrat text-xl font-extrabold capitalize">
                        {name}
                      </div>
                    </div>
                    <div className="w-12 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="14"
                        viewBox="0 0 48 4"
                        fill="none"
                        className=""
                      >
                        <path
                          d="M1.00317 2.10125L46.9975 1.81603"
                          stroke="#0F0F0F"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="14"
                        viewBox="0 0 11 14"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.93975 6.77299L2.02682 11.589L1.96762 2.04305L8.93975 6.77299Z"
                          stroke="#0F0F0F"
                          stroke-width="2"
                        />
                      </svg>
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="14"
                    viewBox="0 0 48 4"
                    fill="none"
                    className="absolute pb-2.5"
                  >
                    <path
                      d="M1.00317 2.10125L46.9975 1.81603"
                      stroke="#0F0F0F"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <hr className="relative pb-6" />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
