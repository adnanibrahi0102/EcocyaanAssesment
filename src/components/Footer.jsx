import React from "react";
import { FaArrowUp, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="text-black py-8">
        <div className="container mx-auto flex flex-col md:flex-row items-start justify-between px-4">
          <div className="flex flex-col  md:flex-row gap-4 mb-4 md:mb-0">
            <div className="md:mr-4">
              <h4 className="text-lg font-bold mb-2">Company</h4>
              <ul>
                <li className="hover:underline">About Us</li>
                <li className="hover:underline">Sell on Ecoyaan</li>
                <li className="hover:underline">Careers</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">Links</h4>
              <ul>
                <li className="hover:underline">Privacy Policy</li>
                <li className="hover:underline">Terms of use</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-bold mb-2">Follow Us</h4>
            <div className="flex gap-4 mb-4 md:mb-0">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:scale-110 transition-transform ease-in-out"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:scale-110 transition-transform ease-in-out"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:scale-110 transition-transform ease-in-out"
              >
                <FaFacebook />
              </a>
            </div>
            <div className="flex flex-col md:flex-row items-center mt-4">
              <input
                type="email"
                placeholder="Your Email Address"
                className="px-4 py-2 rounded-md mr-2 shadow-md mb-2 md:mb-0"
              />
              <button className="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800">
                Subscribe
              </button>
            </div>
            <p className="text-sm mt-2">
              By subscribing, you agree to receive notifications.{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
          <div>
            <p className="text-sm">
              Registered Address:
              <br />
              1-N-12T-781/1
              <br />
              Sri Krishna Vilasa,
              <br />
              Urvastores,
              <br />
              Ashoknagar(MR),
              <br />
              Mangalore,
              <br />
              Dakshina Kannada- 575006,
              <br />
              Karnataka, India
            </p>
            <p className="text-sm mt-2">
              Legal Business Name:
              <br />
              Kindkarma E-Retail Private Limited
            </p>
            <p className="text-sm mt-2">CIN: U47912KA2023PTC182592</p>
            <p className="text-sm mt-2">Telephone: +91 9980490777</p>
          </div>
        </div>
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-green-500 text-white rounded-full p-2 hover:bg-green-700"
        >
          <FaArrowUp />
        </button>
      </footer>
      <div className="bg-gray-900 text-center py-3">
        <h3 className="text-white text-xl font-light">
          © 2023 - 2024, Ecoyaan TM
        </h3>
      </div>
    </>
  );
};

export default Footer;
