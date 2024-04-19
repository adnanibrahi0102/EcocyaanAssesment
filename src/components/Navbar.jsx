import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white p-4 flex justify-between items-center border border-white sticky top-0 z-10">
      <div className="flex items-center">
        <span className="text-green-500  text-3xl font-bold ml-6">
          Ecocyaan
        </span>
      </div>
      <div className="hidden md:flex space-x-4 gap-4 mr-10">
        <Link
          to="/"
          className="text-black hover:scale-110 transition-transform duration-300 font-semibold  text-xl "
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-black hover:scale-110 transition-transform duration-300 font-semibold  text-xl"
        >
          About Us
        </Link>
        <Link
          to="/sell"
          className="text-black hover:scale-110 transition-transform duration-300 font-semibold  text-xl "
        >
          Sell on Ecocyaan
        </Link>
        <Link
          to="/careers"
          className="text-black hover:scale-110 transition-transform duration-300 font-semibold  text-xl"
        >
          Careers
        </Link>
      </div>
      <div className="flex md:hidden space-x-4 gap-4 mr-10">
        <button onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {/* Sidebar */}
      {isOpen && (
        <div className="fixed top-0 right-0 h-full bg-white z-20 shadow-lg py-4 px-8 w-48 transition-transform duration-300 md:hidden">
          <button className="absolute top-2 right-2" onClick={closeMenu}>
            <FaTimes />
          </button>
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-black hover:bg-green-700 hover:text-white px-2 py-1 rounded-md font-semibold text-xl transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-black  hover:bg-green-700 hover:text-white px-2 py-1 rounded-md font-semibold text-xl transition-colors duration-300"
            >
              About Us
            </Link>
            <Link
              to="/sell"
              className="text-black  hover:bg-green-700 hover:text-white px-2 py-1 rounded-md font-semibold text-xl transition-colors duration-300"
            >
              Sell on Ecocyaan
            </Link>
            <Link
              to="/careers"
              className="text-black  hover:bg-green-700 hover:text-white px-2 py-1 rounded-md font-semibold text-xl transition-colors duration-300"
            >
              Careers
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
