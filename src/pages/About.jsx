import React from "react";
import { FaLinkedin } from "react-icons/fa";
import Card from "../components/Card";
const About = () => {
  const teamData = [
    {
      name: "Shruthi",
      role: "SOCIAL MEDIA",
      description:
        "Shruthi is in charge of our Instagram. She is a practising Vegan and cares deeply about sustainability. Follow her small business here",
      imgSrc: "https://www.ecoyaan.com/images/about-us-social-media-team-01.png",
    },
    {
      name: "Urmil",
      role: "SOCIAL MEDIA",
      description:
        "Urmil creates engaging content for us. She runs her own sustainable apparel store with her sister and advocates for slow fashion. Check out her business here",
      imgSrc: "https://www.ecoyaan.com/images/about-us-social-media-team-02.png",
    },
    {
      name: "Divya",
      role: "UX DESIGN",
      description:
        "Divya creates user-friendly and engaging interfaces for our platform. Check out more of her work on Behance",
      imgSrc: "https://www.ecoyaan.com/images/about-us-product-team-01.png",
    },
    {
      name: "Prashanith",
      role: "ENGINEERING",
      description:
        "Prashanith is our front-end engineer, who brings the UX designs to life",
      imgSrc: "https://www.ecoyaan.com/images/about-us-product-team-02.png",
    },
    {
      name: "Sai Abhilash",
      role: "ENGINEERING",
      description:
        "Sai Abhilash is our back-end engineer, who manages and optimises the infrastructure and logic of our platform",
      imgSrc: "https://www.ecoyaan.com/images/about-us-product-team-03.png",
    },
    {
      name: "Ecoyaan",
      role: "TEAM ECOYAAN",
      description: "This spot awaits you. Check out our open positions",
      imgSrc: "https://www.ecoyaan.com/images/favicon.png",
    },
  ];
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:mr-4 md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">About Ecoyaan</h1>
          <p className="mb-4 text-xl font-thin">
            At Ecoyaan, we are more than just a platform. Our goal is to build a
            community of eco-conscious people who share a common vision and
            passion for a more sustainable world.
          </p>
          <p className="mb-4 text-xl font-thin">
            We recognize that sustainability is a journey (as the Sanskrit word
            “yaan” suggests). To keep you motivated on this journey, on our
            platform and our social media pages, you can find:
          </p>
          <ul className="list-disc pl-4 mb-4 text-lg font-light">
            <li>
              Tips and tricks to adopt a more eco-friendly and low-waste
              lifestyle
            </li>
            <li>
              Videos, posts, and quizzes on climate change and sustainability
            </li>
            <li>
              Events and pledges that invite you to adopt a more sustainable
              lifestyle
            </li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://ecoyaan.com/images/about-us-sustainable-lifestyle-partner.png"
            alt="About Ecoyaan"
            className="w-full hover:scale-105 transition-transform duration-300 "
          />
        </div>
      </div>
      <h1 className="text-3xl font-bold my-8">Our Values</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <div className="flex  mb-4 flex-col sm:flex-row">
          <img
            src="https://ecoyaan.com/images/Trust.png"
            alt="Trust"
            className="w-48 h-32 mb-5 hover:scale-105 transition-transform duration-300"
          />
          <div className="ml-4">
            <h2 className="text-xl font-bold mb-2">Trust</h2>
            <p className="text-lg font-thin">
              We value the trust of our community. We strive to be transparent
              and honest in everything we do, from the content we share today to
              sourcing our products in the future
            </p>
          </div>
        </div>

        <div className="flex mb-4 flex-col sm:flex-row">
          <img
            src="https://ecoyaan.com/images/Authenticity.png"
            alt="Authenticity"
            className="w-48 h-32 mb-5 hover:scale-105 transition-transform duration-300"
          />
          <div className="ml-4">
            <h2 className="text-xl font-bold mb-2">Authenticity</h2>
            <p className="text-lg font-thin">
              We are genuine in our mission to promote sustainability and
              environmental awareness. An authentic community of eco-conscious
              people can inspire each other on the journey towards
              sustainability.
            </p>
          </div>
        </div>
        <div className="flex mb-4 flex-col sm:flex-row">
          <img
            src="https://ecoyaan.com/images/Impact.png"
            alt="Impact"
            className="w-48 h-32 mb-5 hover:scale-105 transition-transform duration-300"
          />
          <div className="ml-4">
            <h2 className="text-xl font-bold mb-2">Impact</h2>
            <p className="text-lg font-thin">
              We measure our success by our impact on the planet and our
              community. We aim to empower our sellers and customers to make
              responsible choices that benefit their well-being and the
              well-being of others.
            </p>
          </div>
        </div>
        <div className="flex mb-4  flex-col sm:flex-row">
          <img
            src="https://ecoyaan.com/images/FunAndEngaging.png"
            alt="Fun & Engaging"
            className="w-48 h-32 mb-5 hover:scale-105 transition-transform duration-300"
          />
          <div className="ml-4">
            <h2 className="text-xl font-bold mb-2">Fun & Engaging</h2>
            <p className="text-lg font-thin">
              Moving towards a sustainable lifestyle and the constant news
              around climate change can be stressful. We aim to inject fun and
              creativity into everything we do, from designing our products to
              providing services.
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-3xl font-bold my-8">Our Story</h1>
      <div className="flex flex-col md:flex-row justify-around">
        <div className="md:w-1/2">
          <img
            src="https://ecoyaan.com/images/about-us-founding-team-01.png"
            alt=""
            className="w-48 h-48"
          />
          <img
            src="https://ecoyaan.com/images/about-us-founding-team-02.png"
            alt=""
            className="w-48 h-48 mt-4 md:mt-0"
          />
        </div>
        <div className="md:w-1/2 max-w-full">
          <p className="text-lg mb-4">
            We started Ecoyaan after watching an episode of “Our Planet II”,
            where we saw the devastating impact of plastic pollution and climate
            change on the albatross birds. That moment ignited our mission.
          </p>
          <p className="text-lg mb-4">
            Our research suggests that many Indians understand global warming,
            yet access to sustainable practices and products remains limited. We
            also noticed that there is a lack of support for eco-friendly
            businesses.
          </p>
          <p className="text-lg mb-4">
            We created Ecoyaan to connect consumers, businesses, and
            sustainability experts. We want to make it easy and convenient for
            people to access eco-friendly products and services, learn and share
            best practices, and support sustainability initiatives.
          </p>
          <p className="text-lg">
            As founders, we are not perfect, but we are passionate. We believe
            that every small step matters. Join us and be a part of the Ecoyaan
            community — together, we’ll make a difference.
          </p>
          <p>
            Connect with the founders on LinkedIn here :
            <a
              className="underline text-blue-600"
              href="https://www.linkedin.com/in/abhishekrao"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Abhishek Rao
            </a>
            <span className="inline-block mx-2">
              <FaLinkedin className="text-blue-600 text-xl" />
            </span>
            <a
              className="underline text-blue-600"
              href="https://www.linkedin.com/in/sarwanjeet-singh-77b52930"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sarwanjeet Singh
            </a>
            <span className="inline-block">
              <FaLinkedin className="text-blue-600 text-xl" />
            </span>
          </p>
        </div>
      </div>
      <h1 className="text-3xl font-bold my-8">Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {teamData.map((member, index) => (
          <Card key={index} name={member.name} role={member.role} description={member.description} imgSrc={member.imgSrc} />
        ))}
      </div>
    </div>
  );
};

export default About;


