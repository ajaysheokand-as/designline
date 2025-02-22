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
                  className="relative group w-full h-64 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${item.img})`,
                    }}
                  ></div>

                  {/* Overlay & Hover Effect */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h5 className="text-2xl font-bold text-white text-center px-4">
                      {item.heading}
                    </h5>
                  </div>
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