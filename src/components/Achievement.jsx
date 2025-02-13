import React from "react";
import { SvgIcon1, SvgIcon2, SvgIcon3, SvgIcon4 } from "./data/main";

function Achievement() {
  return (
    <>
      <section className="flex flex-col mt-20 bg-gray-200 py-8 md:py-20">
        <p className="font-semibold text-2xl md:text-3xl text-center">
          Our Outstanding Achievements
        </p>
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-y-5 lg:gap-y-0 gap-x-5 place-items-center w-full mx-auto max-w-7xl px-5">
          <div className="flex flex-col justify-center items-center bg-[#F3F9FF] px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center">
            <div className="flex flex-row justify-center items-center">
              <SvgIcon1 />
              <p className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
                1.2K+
              </p>
            </div>
            <p className="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">
              Our Experts
            </p>
          </div>
          <div className="flex flex-col justify-center items-center bg-[#F3F9FF] px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center">
            <div className="flex flex-row justify-center items-center">
              <SvgIcon2 />
              <p className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
                4.9
              </p>
            </div>
            <p className="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">
              Expert Rating
            </p>
          </div>
          <div className="flex flex-col justify-center items-center bg-[#F3F9FF] px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center">
            <div className="flex flex-row justify-center items-center">
              <SvgIcon3 />
              <p className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
                2.5K+
              </p>
            </div>
            <p className="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center line-clamp-1">
              Project Completed
            </p>
          </div>
          <div className="flex flex-col justify-center items-center bg-[#F3F9FF] px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center">
            <div className="flex flex-row justify-center items-center">
              <SvgIcon4 />
              <p className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
                10K+
              </p>
            </div>
            <p className="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">
              Lane Km
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Achievement;
