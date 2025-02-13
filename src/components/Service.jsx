import React from "react";
import { serviceData } from "./data/main";
import { useNavigate ,Link } from "react-router-dom";

function Service() {

  return (
    <section className="w-full h-auto flex flex-col justify-center items-center">
      <div className="w-full p-10  flex justify-center items-center">
        <h1 className="text-3xl my-4 sm:my-0 md:text-5xl font-bold">
          Our Services
        </h1>
      </div>
      <div className="w-full p-2 sm:p-0 overflow-hidden">
        <div className="w-full p-2 sm:p-0 flex flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-12 ">
          {serviceData?.map((item) => {
            return (
              <div key={item.id} class="max-w-sm max-h-sm p-4  border-2 border-gray-800 rounded-lg shadow bg-transparent">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    {item.heading}
                  </h5>
                <p class="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                  {item.description}
                </p>
                <Link
                 to={`/project/${item.id}`}
                  id={item.id}
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-sm hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Service;
