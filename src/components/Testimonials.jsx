import React, { useEffect } from "react";
import playbtn from "../assets/images/noun-play.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import frame1 from "../assets/Frame.svg";
import galleryicon from "../assets/Color_.svg";
import icon1 from "../assets/images/icon1.svg";
import icon2 from "../assets/images/icon2.svg";

const Testimonials = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 1440 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1440, min: 976 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 976, min: 480 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="font-montserrat" id="Testimonials">
        <figure className="relative flex mt-0 py-0 pb-1 sm:mt-72 md:mt-96 lg:mt-0 sm:py-24 md:py-36 lg:py-0">
          <section className="mt-24 lg:mt-0 imageLinearGradient3 bg-gray-400 bg-blend-multiply h-screen">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <a
                  href="#"
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white"
                >
                  <img
                    src={playbtn}
                    alt=""
                    className="w-1/2 lg:w-full md:w-1/2 sm:w-1/2 xs:w-1/3"
                  />
                </a>
              </div>
            </div>
          </section>
        </figure>

        <div className="px-4 mx-auto max-w-screen-xl text-center py-20 lg:py-20">
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-center text-gray font-plus_jakarta text-5xl xs:text-2xl font-bold"
          >
            What our clients say about us
          </a>
        </div>
      </div>
      <div className="h-full w-full">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          autoPlaySpeed={1000}
          ssr={true}
          focusOnSelect={true}
          className="w-full"
        >
          <div
            role="status"
            className="bg-[#C2278E] max-w-sm p-4 border border-gray-200 rounded shadow md:p-6 dark:border-gray-700 h-full ml-24 "
          >
            <div className="flex items-center justify-center mb-4 bg-gray-300 rounded dark:bg-gray-700"></div>
            <div className=" w-72 mb-2">
              <img src={icon1} alt="" />
            </div>
            <div className="text-[#FFF] text-base mb-2.5 flex">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
              <a className="self-end w-full">
                <img src={icon2} alt="" />
              </a>
            </div>

            <div className=" flex items-center mt-4 space-x-4">
              <a href="#" className="relative flex">
                <img className="" src={galleryicon} alt="" />
              </a>
              <a href="#" className="absolute">
                <img src={frame1} alt="" />
              </a>
              <div className="font-poppins tracking-wider">
                <div className="w-32 mb-0.1 text-base text-[#FFF] font-bold">
                  Aaron Boby
                </div>
                <div className="text-[14px] text-[#FFF] font-light">
                  2 November 2021
                </div>
              </div>
            </div>
          </div>

          <div
            role="status"
            className="bg-[#C2278E] max-w-sm p-4 border border-gray-200 rounded shadow md:p-6 dark:border-gray-700 h-full ml-24 "
          >
            <div className="flex items-center justify-center mb-4 bg-gray-300 rounded dark:bg-gray-700"></div>
            <div className=" w-72 mb-2">
              <img src={icon1} alt="" />
            </div>
            <div className="text-[#FFF] text-base mb-2.5 flex">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
              <a className="self-end w-full">
                <img src={icon2} alt="" />
              </a>
            </div>

            <div className=" flex items-center mt-4 space-x-4">
              <a href="#" className="relative flex">
                <img className="" src={galleryicon} alt="" />
              </a>
              <a href="#" className="absolute">
                <img src={frame1} alt="" />
              </a>
              <div className="font-poppins tracking-wider">
                <div className="w-32 mb-0.1 text-base text-[#FFF] font-bold">
                  Daren Axell
                </div>
                <div className="text-[14px] text-[#FFF] font-light">
                  28 August 2021
                </div>
              </div>
            </div>
          </div>
          <div
            role="status"
            className="bg-[#C2278E] max-w-sm p-4 border border-gray-200 rounded shadow md:p-6 dark:border-gray-700 h-full ml-24 "
          >
            <div className="flex items-center justify-center mb-4 bg-gray-300 rounded dark:bg-gray-700"></div>
            <div className=" w-72 mb-2">
              <img src={icon1} alt="" />
            </div>
            <div className="text-[#FFF] text-base mb-2.5 flex">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
              <a className="self-end w-full">
                <img src={icon2} alt="" />
              </a>
            </div>

            <div className=" flex items-center mt-4 space-x-4">
              <a href="#" className="relative flex">
                <img className="" src={galleryicon} alt="" />
              </a>
              <a href="#" className="absolute">
                <img src={frame1} alt="" />
              </a>
              <div className="font-poppins tracking-wider">
                <div className="w-36 mb-0.1 text-base text-[#FFF] font-bold">
                  Dion Chainning
                </div>
                <div className="text-[14px] text-[#FFF] font-light">
                  22 August 2021
                </div>
              </div>
            </div>
          </div>
          <div
            role="status"
            className="bg-[#C2278E] max-w-sm p-4 border border-gray-200 rounded shadow md:p-6 dark:border-gray-700 h-full ml-24 "
          >
            <div className="flex items-center justify-center mb-4 bg-gray-300 rounded dark:bg-gray-700"></div>
            <div className=" w-72 mb-2">
              <img src={icon1} alt="" />
            </div>
            <div className="text-[#FFF] text-base mb-2.5 flex">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
              <a className="self-end w-full">
                <img src={icon2} alt="" />
              </a>
            </div>

            <div className=" flex items-center mt-4 space-x-4">
              <a href="#" className="relative flex">
                <img className="" src={galleryicon} alt="" />
              </a>
              <a href="#" className="absolute">
                <img src={frame1} alt="" />
              </a>
              <div className="font-poppins tracking-wider">
                <div className="w-32 mb-0.1 text-base text-[#FFF] font-bold">
                  Jade Walker
                </div>
                <div className="text-[14px] text-[#FFF] font-light">
                  25 December 2022
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Testimonials;
