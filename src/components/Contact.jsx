import React from "react";
import Footer from "./Footer";
import { footerData } from "./data/main";
import { PhoneIcon } from "./data/main";
import { MailIcon } from "./data/main";
import { LocationIcon } from "./data/main";

function Contact() {
  return (
    <>
      <div className="contactDiv w-full h-[60vh] flex items-center md:pl-20">
        <div>
          <h1 className="text-white text-4xl font-bold mt-48 md:text-[8rem]">
            Contact <span className="text-blue-500">US</span>
          </h1>
        </div>
      </div>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="lg:mb-0 mb-10">
              <div className="group w-full h-full">
                <div className="relative h-full">
                  <img
                    src="/images/blog.jpg"
                    alt="Contact Us"
                    className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700 object-cover"
                  />
                  <h1 className="font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11">
                    Contact US
                  </h1>
                  <div className="absolute bottom-0 w-full lg:p-11 p-5">
                    <div className="bg-white rounded-lg p-6 block">
                      <a href="#" className="flex items-center mb-6">
                        <PhoneIcon className="text-blue-500" />
                        <h5 className="text-black text-base font-normal leading-6 ml-5">
                          {footerData.contact}
                        </h5>
                      </a>
                      <a href="#" className="flex items-center mb-6">
                        <MailIcon />
                        <h5 className="text-black text-base font-normal leading-6 ml-5">
                          {footerData.email}
                        </h5>
                      </a>
                      <a href="javascript:;" class="flex items-center">
                        <LocationIcon />
                        <h5 class="text-black text-base font-normal leading-6 ml-5">
                          {footerData.adress}
                        </h5>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
              <h2 className="text-blue-500 font-manrope text-4xl font-semibold leading-10 mb-11">
                Send Us A Message
              </h2>
              <input
                type="text"
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-md border border-gray-200 focus:outline-none pl-4 mb-10"
                placeholder="Name"
              />
              <input
                type="text"
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-md border border-gray-200 focus:outline-none pl-4 mb-10"
                placeholder="Email"
              />
              <input
                type="number"
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-md border border-gray-200 focus:outline-none pl-4 mb-10 [&::-webkit-inner-spin-button]:appearance-none"
                placeholder="Contact No."
              />
              <button className="w-full h-12 text-white text-base font-semibold leading-6 rounded-md transition-all duration-700 hover:bg-blue-600 bg-blue-500 shadow-sm">
                Send
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
