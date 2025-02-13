import React from "react";
import { clientsData } from "./data/main";

function Clients() {
  return (
    <>
      <section className="w-full h-auto bg-gray-300 py-8 flex flex-col">
        {/* Header Section */}
        <div className="w-full h-[30%] flex justify-center items-center">
          <h1 className="text-3xl font-bold sm:text-6xl text-center my-4">
            Our Clients
          </h1>
        </div>
        <div className="w-full">
          <div className="grid gap-3 grid-cols-2 md:grid-cols-4 p-4 justify-center">
            {clientsData?.map((item, index) => (
              <div
                key={index}
                className=" bg-white flex justify-center rounded-lg items-center my-4 sm:my-8 "
              >
                <img src={item.img} className="w-[200px] rounded-lg" alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Clients;
