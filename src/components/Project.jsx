import React from "react";
import { projectData } from "./data/main";

function Project() {
  return (
    <>
    <section className="w-full h-auto flex flex-col pt-8 sm:pt-0">
      <div className="w-full flex justify-center items-center py-6">
            <h2 className="text-xl font-bold sm:text-3xl md:text-6xl">OUR PROJECTS</h2>
      </div>
      <div className="w-full flex justify-center items-center gap-8 md:gap-20 p-4 flex-wrap ">
      {
        projectData?.map((item) => {
          return(
            <div className="max-w-sm rounded overflow-hidden shadow-lg" key={Math.random()}>
              <div className="w-full h-60  overflow-hidden">
            <img
              className="w-full h-60 cursor-pointer transform duration-700 hover:scale-110"
              src={item.image}
              alt="#"
              />
              </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.heading}</div>
              <p className="text-gray-700 text-base ">{item.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #consultancy
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #design
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #designline
              </span>
            </div>
          </div>
          )
        })
      }
        
      </div>
    </section>
    </>
  );
}

export default Project;
