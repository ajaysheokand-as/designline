import React from "react";
import { Link } from "react-router-dom";
import Project from "./Project";
import Footer from "./Footer";
import Service from "./Service";

function ProjectDetailPage() {
  return (
    <>
      <div className="projectDetails w-full h-[60vh] bg-gray-300 flex items-center">
        <div className="flex gap-4 ml-8 md:ml-20 mt-48">
          <Link to="/" className="text-white font-bold text-2xl lg:text-6xl">
            {" "}
            &lt;/<span className="text-blue-500 hover:text-blue-800">Home</span>
            &gt;
          </Link>
          <span className="text-white font-bold text-2xl lg:text-6xl">||</span>
          <h2 className="text-blue-200 font-bold text-2xl lg:text-6xl">
            Projects ↓
          </h2>
        </div>
      </div>
      {/* <Service /> */}
      <Project />
      <Footer />
    </>
  );
}

export default ProjectDetailPage;
