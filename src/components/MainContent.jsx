import React from "react";

const MainContent = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between p-5 md:p-10">
        <div className="md:w-1/2 md:mr-5">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3">
            Join our community in creating a <br /> more sustainable future for{" "}
            <br /> everyone
          </h2>
          <p className="text-sm md:text-base lg:text-lg mb-3">
            At Ecoyaan, we are more than just a platform. Our vision is to build
            an eco-conscious community for people and products.
          </p>
          <p className="text-sm md:text-base lg:text-lg">
            Consider us your partner for all things sustainable. To keep you
            motivated on the journey, we will provide you with engaging
            information about climate change, the latest updates on climate
            policies and lifestyle tips that you can adopt to reduce your impact
            on the environment.
          </p>
        </div>
        <div className="md:w-1/2 md:ml-5">
          <img
            src="https://www.ecoyaan.com/images/Impact.png"
            alt=""
            className="w-full md:w-auto  hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      <div className=" flex flex-col md:flex-row items-center justify-between p-5 md:p-10">
        <div className="md:w-1/2 md:mr-5">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3">
            Carefully curated Eco-friendly products
          </h2>
          <p className="text-sm md:text-base lg:text-lg mb-3">
            We believe that every purchase you make can have a positive impact
            on the planet and the future.
          </p>
          <p className="text-sm md:text-base lg:text-lg">
            Soon, we will be connecting you with eco-friendly and sustainable
            products that are carefully selected based on their environmental
            and social benefits.
          </p>
        </div>
        <div className="md:w-1/2 md:ml-5">
          <video
            src="https://www.ecoyaan.com/images/ProductCuration.mp4"
            loop
            muted
            className="w-full md:w-auto hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      <div className="flex items-center justify-between bg-gray-100 p-8 md:p-16">
        <div className="md:w-1/2 md:mr-5">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            For businesses that care deeply about sustainability
          </h2>
          <p className="text-lg md:text-xl mb-4">
            Do you run a business that is committed to sustainability in every
            aspect of your work?
          </p>
          <p className="text-lg md:text-xl mb-8">
            Do you want to showcase your products to an incredible audience of
            eco-conscious consumers who care?
          </p>
          <p className="text-lg md:text-xl mb-8">
            If yes, then you are the perfect fit for our platform. Our community
            appreciates and supports businesses that are transparent, ethical,
            and innovative in their approach to sustainability.
          </p>
          <p className="text-lg md:text-xl font-semibold">Contact us today:</p>
          <button className="bg-green-700 text-white font-semibold text-xl rounded-sm px-4 py-2 mt-3">
            Contact Us
          </button>
        </div>

        <div className="md:w-1/2 md:ml-5">
          <img
            src="https://ecoyaan.com/images/OurStory4.png"
            alt=""
            className="w-full md:w-auto hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </>
  );
};

export default MainContent;
