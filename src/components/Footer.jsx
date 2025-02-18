import React, { useState } from "react";
import { footerData } from "./data/main";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { FaPhoneAlt } from "react-icons/fa";
import { navData } from "./data/main";
import { Link, useNavigate } from "react-router-dom";
import { jobSection } from "./data/main";
const Footer = () => {
 const [email, setEmail]= useState('')
  const navigate = useNavigate();
  return (
    <div className="bg-gray-900 pt-10 sm:pt-20">
  <div className="mx-auto w-full max-w-[1166px] px-4 sm:px-6 md:px-8 lg:px-10">
    <div className="flex flex-col gap-6 sm:gap-10 md:flex-row md:justify-between">
      {/* Logo and Description Section */}
      <div className="md:w-[360px]">
        <h1 className="text-white font-extrabold">
          {/* <img src="/images/logo1.png" className="w-12 rounded-md" alt="Logo" /> */}
          Design Line Consultancy Services Private Limited 
        </h1>
        <p className="mt-4 text-sm sm:text-base text-white/80 ">
          {footerData.description}
        </p>
        <div className="mt-4 flex gap-4">
          <a
            className="hover:scale-110 text-white"
            target="_blank"
            rel="noopener noreferrer"
            href="#"
          >
            <FaFacebook className="text-blue-600" />
          </a>
          <a
            className="hover:scale-110 text-white"
            target="_blank"
            rel="noopener noreferrer"
            href="/"
          >
            <FaLinkedinIn className="text-blue-400" />
          </a>
          <a
            className="hover:scale-110 text-white"
            target="_blank"
            rel="noopener noreferrer"
            href="/"
          >
            <FaInstagram className="text-pink-500" />
          </a>
          <a
            className="hover:scale-110 text-white"
            target="_blank"
            rel="noopener noreferrer"
            href=""
          >
            <FaTwitter className="text-blue-600" />
          </a>
          <a
            className="hover:scale-110 text-white"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/"
          >
            <FiYoutube className="text-red-600" />
          </a>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="md:w-[316px] space-y-6">
        {/* Phone Section */}
        <div className="flex items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800">
            <FaPhoneAlt className="text-white" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-white">{footerData.contact}</p>
            <p className="text-xs text-white">Contact Number</p>
          </div>
        </div>

        {/* Email Section */}
        <div className="flex items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800">
            <TfiEmail className="text-white" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-white">{footerData.email}, {footerData.email2}</p>
            <p className="text-xs text-white">Email</p>
          </div>
        </div>

        {/* Address Section */}
        <div className="flex items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800">
            <FaLocationDot className="text-white" />
          </div>
          <div className="ml-4">
            <p className="text-xs font-medium text-white">{footerData.adress}</p>
            <p className="text-xs text-white">Address</p>
          </div>
        </div>
      </div>
      <div className="md:w-[116px] space-y-6">
      <div>
          <p className="text-lg font-medium text-white">Pages</p>
          <ul>
            {navData.map((item, index) => (
              <li key={index} className="mt-4">
                <button
                  to={item.path}
                  onClick={() => {
                    window.scrollTo(0, 0); 
                    navigate(`${item.path}`)
                  }}
                  className="text-white hover:text-blue-500 text-sm font-normal"
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Pages and Download Section */}
      
    </div>

    {/* Footer Bottom */}
    <hr className="mt-10 border-white/20" />
    <div className="flex items-center justify-center py-6">
      <p className="text-xs text-white">{footerData.instruction}</p>
    </div>
  </div>
</div>

  );
};

export default Footer;
