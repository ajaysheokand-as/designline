import React from "react";
import { homeSection } from "./data/main";
import { Typewriter } from "react-simple-typewriter";

export const Header = () => {
  const desc = homeSection.description;

  return (
    <section
      id="mainSection"
      className="relative h-screen flex justify-center items-center pt-20 sm:pt-20 lg:pt-0"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/video/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for better readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0"></div>

      {/* Content Section */}
      <div className="relative z-10 gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        {/* Text Content */}
        <div className="font-light text-white sm:text-lg">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
            {homeSection.heading}
          </h2>
          <p className="text-lg">
            {homeSection.test},
            <span className="mb-4 text-2xl font-bold text-blue-500">
              <Typewriter
                words={[...desc]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>
        </div>

        {/* Image Section */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="w-full h-[90%] rounded-lg overflow-hidden">
            <img
              className="w-full h-full rounded-lg transform hover:scale-105 duration-700 cursor-pointer"
              src={homeSection.owner1}
              alt="office content 1"
            />
          </div>
          <div className="w-full h-auto md:h-96 lg:mt-12 overflow-hidden bg-green-300 rounded-lg">
            <img
              className="w-full h-full rounded-lg transform hover:scale-105 duration-700 cursor-pointer"
              src={homeSection.owner2}
              alt="office content 2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};