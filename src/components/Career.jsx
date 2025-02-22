import React from "react";
import Footer from "./Footer";
import {benefitsSection , jobSection, footerData } from "./data/main";
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
      {/* Future Aspects */}
      <section className="py-16 bg-gray-100 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Future Aspects</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
          At Design Line Consultancy Services Pvt. Ltd., our vision is to be recognized as a world-class consulting organization, delivering cutting-edge, sustainable, and value-driven engineering solutions. We are committed to shaping a better future by integrating innovation, technology, and expertise to meet the evolving needs of our clients and communities. Our goal is to ensure excellence in every project—delivering solutions on time, within budget, and as promised—anywhere in the world. By fostering a culture of integrity, collaboration, and continuous improvement, we aim to set new benchmarks in the industry and contribute to a more sustainable and resilient future.
          </p>
        </div>
      </section>
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
        &nbsp;OR &nbsp; 
        <a href={`mailto:${footerData.email2}`} className="text-blue-500">
          {footerData.email2}
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
