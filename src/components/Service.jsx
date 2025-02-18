import React from "react";
import { serviceData } from "./data/main";

function chunkArray(arr, chunkSize) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
}

function Service() {
  const serviceChunks = chunkArray(serviceData, Math.ceil(serviceData.length / 3));

  return (
    <section className="w-full h-auto flex flex-col justify-center items-center bg-gray-100 py-10">
      <div className="w-full p-10 flex justify-center items-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          Services We Provide
        </h1>
      </div>
      <div className="w-full px-4 md:px-20 lg:px-32 xl:px-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceChunks.map((chunk, index) => (
            <div key={index} className="flex flex-col gap-6">
              {chunk.map((item) => (
                <div
                  key={item.id}
                  className="max-w-sm mx-auto p-6 border-2 border-gray-800 rounded-lg shadow-lg bg-white transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-500"
                >
                  <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900">
                    {item.heading}
                  </h5>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;