import React, { useState, useEffect } from "react";
import { navData } from "./data/main";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { MdMenuOpen } from "react-icons/md";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full p-4 flex items-center justify-between z-50 md:hidden">
        <div className="flex items-center">
          <img
            src="/favicon.png"
            alt="Logo"
            className="h-10 rounded-md"
          />
        </div>
        <div
          className="text-white text-lg cursor-pointer uppercase"
          onClick={() => setMenuActive(!menuActive)}
        >
          <span
            className={`text-3xl ${
              isScrolled ? "text-gray-600" : "text-white"
            }`}
          >
            {menuActive ? <MdMenuOpen /> : <IoMenu />}
          </span>
        </div>
      </div>
      <nav
        className={`fixed top-0 left-0 w-full transition-all duration-500 z-40 ${
          isScrolled
            ? "bg-white text-gray-800 h-20 px-6"
            : "bg-transparent text-white h-24 px-10"
        }`}
      >
        <div className="flex items-center justify-between h-full">
          <div className="hidden md:block">
            <img
              src="/logo.png"
              alt="Logo"
              className={`rounded-lg transition-all duration-500 ${
                isScrolled ? "h-12" : "h-16"
              }`}
            />
          </div>
          <ul
            className={`${
              menuActive ? "block" : "hidden"
            } absolute top-16 left-0 w-full py-2 text-gray-800 md:bg-transparent md:static md:flex md:items-center md:justify-end md:space-x-8 ${
              isScrolled ? "bg-white" : "bg-gray-800"
            }`}
          >
            {navData?.map((item) => (
              <li>
                <Link
                  className={`block px-4 py-2 font-bold text-center md:inline md:px-2 ${
                    isScrolled
                      ? "hover:text-blue-600"
                      : "hover:bg-blue-500 text-white hover:rounded-md"
                  }`}
                  to={item.path}
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <Link
              to="/contact"
              className="px-[9.4rem] ml-[1px] py-2 border-2 border-blue-500 sm:w-auto md:px-4 md:py-2 hover:border-black bg-blue-500 text-white sm:rounded-lg cursor-pointer"
            >
              Let's Talk
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
