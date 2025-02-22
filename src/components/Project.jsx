import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { projectData } from "./data/main";

const ITEMS_PER_PAGE = 6;

const Project = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();
  const navigate = useNavigate();
  const isProjectsPage = location.pathname.includes("/project");
  const totalPages = Math.ceil(projectData.length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) setCurrentPage(page);
  };

  const displayedProjects = isProjectsPage
    ? projectData.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)
    : projectData.slice(0, ITEMS_PER_PAGE);

  // Function to generate pagination numbers with "..."
  const getPaginationNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);
    } else {
      if (currentPage <= 3) {
        pageNumbers.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pageNumbers.push(1, "...", currentPage, "...", totalPages);
      }
    }
    return pageNumbers;
  };

  return (
    <section className="w-full h-auto flex flex-col pt-8 sm:pt-0 bg-gray-50">
      {/* Section Heading */}
      <div className="w-full flex justify-center items-center py-6">
        <h2 className="text-xl font-bold sm:text-3xl md:text-6xl">OUR PROJECTS</h2>
      </div>

      {/* Projects Grid */}
      <div className="w-full flex justify-center items-center gap-8 md:gap-20 p-4 flex-wrap">
        {displayedProjects.map((item) => (
          <div
            key={item.id}
            className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* Background Image Title */}
            <div
              className="w-full h-32 flex items-center justify-center text-white font-bold text-2xl"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundBlendMode: "darken",
                backgroundColor: "rgba(0,0,0,0.5)",
              }}
            >
              {item.heading}
            </div>

            {/* Project Description */}
            <div className="px-6 py-4">
              <p className="text-gray-700 text-base">{item.description}</p>
            </div>

            {/* Memo Date */}
            {/* {item.memoDate && (
              <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  {`Memo Date: ${item.memoDate}`}
                </span>
              </div>
            )} */}
          </div>
        ))}
      </div>

      {/* See More Button or Pagination */}
      <div className="w-full flex justify-center my-6">
        {!isProjectsPage ? (
          <button
            onClick={() => navigate("/project")}
            className="px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-105"
          >
            See More
          </button>
        ) : (
          <nav className="flex space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className={`px-3 py-2 border rounded-md ${
                currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "hover:bg-blue-100"
              }`}
              disabled={currentPage === 1}
            >
              ◀
            </button>

            {getPaginationNumbers().map((num, index) =>
              num === "..." ? (
                <span key={index} className="px-3 py-2 text-gray-500">...</span>
              ) : (
                <button
                  key={index}
                  onClick={() => handlePageChange(num)}
                  className={`px-3 py-2 border rounded-md ${
                    num === currentPage ? "bg-blue-500 text-white" : "hover:bg-blue-100"
                  }`}
                >
                  {num}
                </button>
              )
            )}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className={`px-3 py-2 border rounded-md ${
                currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "hover:bg-blue-100"
              }`}
              disabled={currentPage === totalPages}
            >
              ▶
            </button>
          </nav>
        )}
      </div>
    </section>
  );
};

export default Project;