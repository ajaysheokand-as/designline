import React from "react";
import { clientsData } from "./data/main";

function Clients() {
  console.log("clientsData=>", clientsData);
  return (
    <section className="w-full h-auto bg-gray-300 py-8 flex flex-col">
      {/* Header Section */}
      <div className="w-full flex justify-center items-center">
        <h1 className="text-3xl font-bold sm:text-6xl text-center my-4">
          Our Clients
        </h1>
      </div>

      {/* Clients Grid */}
      <div className="w-full px-4">
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 p-4 justify-center">
          {clientsData?.map((item, index) => (
            <div
              key={index}
              className="bg-white flex justify-center items-center p-4 rounded-lg shadow-md"
            >
              <img
                src={item?.img}
                className="w-[150px] md:w-[180px] lg:w-[200px] rounded-lg"
                alt={`Client ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;