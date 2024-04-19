import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        <div className="relative">
          <img
            src="https://www.ecoyaan.com/images/carousel-1.png"
            alt="Slide 1"
            className="h-[600px] w-full"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center bg-black bg-opacity-50 text-white z-10">
            <div className="ml-10">
              <h2 className=" mb-2 text-black font-semibold text-3xl">
                Buy Less, Buy Better!
              </h2>
              <p className="text-2xl mb-4 text-black font-thin ">
                Authentic source of truth for your sustainability needs.
              </p>
              <button className=" text-xl px-4 py-2 bg-green-600 rounded-full text-white hover:bg-green-700 font-semibold hover:underline ">
                AboutUs
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://www.ecoyaan.com/images/carousel-2.png"
            alt="Slide 2"
            className="h-[600px] w-full"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center bg-black bg-opacity-50 text-white z-10">
            <div className="ml-10">
              <h2 className=" mb-2 text-black font-semibold text-3xl">
                Follow us on Instagram
              </h2>
              <p className="text-2xl mb-4 text-black font-thin ">
                For climate news, lifestyle tips, & updates
              </p>
              <button className=" text-xl font-semibold  px-4 py-2 bg-green-600 rounded-full text-white hover:bg-green-700  hover:underline">
                FollowUs
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://www.ecoyaan.com/images/carousel-3.png"
            alt="Slide 3"
            className="h-[600px] w-full"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center bg-black bg-opacity-50 text-white z-10">
            <div className="ml-10">
              <h2 className=" mb-2 text-black font-semibold text-3xl">
                Are you a business that truly cares about sustainability?
              </h2>
              <p className="text-2xl mb-4 text-black font-thin ">
                We would love to work with you
              </p>
              <button className=" text-xl px-4 py-2 bg-green-600 rounded-full text-white hover:bg-green-700 font-semibold hover:underline">
                GetInTouch
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
