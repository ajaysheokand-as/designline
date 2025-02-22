import React, { useState } from "react";
import Footer from "./Footer";
const images = [
  "/images/gallery/g13.jpg",
  "/images/gallery/g14.jpg",
  "/images/gallery/g15.jpg",
  "/images/gallery/g17.jpg",
  "/images/gallery/g12.jpg",
  "/images/gallery/g2.jpg",
  "/images/gallery/g3.jpg",
  "/images/gallery/g4.jpg",
  "/images/gallery/g5.jpg",
  "/images/gallery/g6.jpg",
  "/images/gallery/g7.jpg",
  "/images/gallery/g8.jpg",
  "/images/gallery/g9.jpg",
  "/images/gallery/g10.jpg",
  "/images/gallery/g11.jpg",
  "/images/gallery/g1.jpg",
  
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 ">
      <section className="w-full flex justify-center items-center">
        <div className="aboutDiv w-full h-[60vh] flex justify-left items-center">
          <div>
            <h1 className="text-white text-6xl lg:text-[10rem] font-bold ml-8 md:ml-16 mt-40">
              GALL<span className="text-blue-500">ERY </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-10 px-4 md:px-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">View Image</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox (Fullscreen Image Preview) */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-full rounded-lg shadow-lg"
          />
          <button
            className="absolute top-5 right-5 text-white text-3xl font-bold"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default Gallery;