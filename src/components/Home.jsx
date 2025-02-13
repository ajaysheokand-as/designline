import React from "react";
import { homeSection } from "./data/main";
import { Typewriter } from "react-simple-typewriter";
import Slider from "./Slider";
import Service from "./Service";
import Achievement from "./Achievement";
import Project from "./Project";
import Clients from "./Clients";
import Footer from "./Footer";

function Home() {
  const desc = homeSection.description;
  return (
    <>
      <section
        id="mainSection"
        className="h-screen pt-20 sm:pt-20 lg:pt-0 relative flex justify-center items-center"
      >
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-white sm:text-lg">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
              {homeSection.heading}
            </h2>
            <p className=" text-lg">
              {homeSection.test},
            <span className="mb-4 text-2xl font-bold text-blue-500">
              {" "}
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
                className="w-full h-full rounded-lg tensform hover:scale-105 duration-700 cursor-pointer"
                src={homeSection.owner2}
                alt="office content 2"
              />
            </div>
          </div>
        </div>
      </section>
      <Slider />
      <Service />
      <Achievement />
      <Project />
      <Clients />
      <Footer />
    </>
  );
}

export default Home;
