import React from "react";
import Footer from "./Footer";
import { careerPage , benefitsSection , jobSection } from "./data/main";
function Career() {
  return (
    <>
      <section className="w-full flex justify-center items-center">
        <div className="aboutDiv w-full h-[60vh] flex justify-left items-center">
          <div>
            <h1 className="text-white text-6xl lg:text-[10rem] font-bold ml-8 md:ml-16 mt-40">
              CARE<span className="text-blue-500">ER </span>
            </h1>
          </div>
        </div>
      </section>
      <div className="max-w-6xl mx-auto p-6 ">
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="md:w-1/2 mt-6 md:mt-0 md:pl-6">
            <img
              src={careerPage.img}
              alt="Two professionals discussing work at a laptop"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {careerPage.heading}
            </h1>
            <p className="text-gray-700 mb-4">
             {careerPage.paragraph1}
            </p>
            <p className="text-gray-700">
             
             {careerPage.paragraph2}
            </p>
          </div>
        </div>
      </div>
      <section>
        <div className="max-w-6xl mx-auto p-6">
          <h1 className="text-4xl font-bold mb-4">{benefitsSection.heading}</h1>
          <p className="mb-4">
            {benefitsSection.paragraph}
          </p>
          <p className="font-bold mb-4">
           {benefitsSection.benefitsHeading}
          </p>
          <ul className="list-none mb-4">
          {benefitsSection.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start mb-2">
                                <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                                <span>{benefit}</span>
                            </li>
                        ))}
          </ul>
          <div className="flex w-full border-2">
            <img
              src={benefitsSection.img}
              alt="A group of diverse people in a meeting room having a discussion"
              className=""
            />
          </div>
        </div>
      </section>
      <div className="p-6 md:p-20">
        <div className="border-l-4 border-green-500 pl-4">
          <p className="text-green-500 font-bold">HIRING</p>
        </div>
        <h1 className="text-3xl font-bold mt-2">{jobSection.heading}</h1>
        <p className="mt-4 text-gray-700">
        {jobSection.paragraph}
        </p>
        {/* <div>

        <p className="mt-4 font-bold">Click Here for Details</p>
        <button className="mt-2 bg-blue-500 text-white font-bold py-2 px-4 rounded inline-flex items-center">
          <span>HOT JOBS</span>
          <i className="fas fa-arrow-right ml-2"></i>
        </button>
        </div> */}
        <p className="mt-4">
          {jobSection.emailText}
        </p>
        <a href={`mailto:${jobSection.email}`} className="text-blue-500">
          {jobSection.email}
        </a>
        <p className="mt-4">
         {jobSection.text}
        </p>
      </div>
      <Footer/>
    </>
  );
}

export default Career;
