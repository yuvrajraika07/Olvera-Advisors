import React from "react";

const Home = () => {
  return (
    <>
      <div className="font-montserrat" id="Home">
        <figure className="relative flex">
          <section className="imageLinearGradient bg-gray-400 bg-blend-multiply h-screen z-0">
            <a className="absolute text-4xl text-[#FFF] lg:top-36 lg:w-1/3 lg:left-52 md:left-18 md:top-36 md:w-1/2  sm:left-36 sm:w-1/2 sm:top-56 font-extrabold lg:text-[56px] md:text-[56px] font-montserrat mt-48 lg:mt-24 md:mt-0 ml-6 lg:ml-0 md:ml-0 leading-[2.4rem] sm:leading-[1rem] md:leading-[3.5rem] lg:leading-[4rem] ">
              Start your story with Olvera
            </a>

            <a
              href="#ContactUs"
              className="lg:visible md:invisible sm:invisible xs:invisible mt-24 font-normal uppercase bg-[#C2278E] rounded-full absolute lg:top-72 lg:w-1/6 lg:left-52 md:left-18 md:top-72 sm:left-6 sm:w-1/3 sm:top-80 md:w-1/5 sm:text-1xl lg:text-2xl font-bold xs:top-72 font-sans hover:[#FF74D0]  items-center py-2 px-4 text-base font-medium text-center text-[#00000] rounded-full bg-[#FF74D0] hover:bg-[#C2278E]  focus:ring-1 focus:ring-gray-400 cursor-pointer z-10"
            >
              CONTACT US
            </a>
          </section>
        </figure>
      </div>
    </>
  );
};

export default Home;
