import { Link } from "react-router-dom";
import { useState } from "react";
import client from "../../assets/client.png";
import clientResult from "../../assets/clientResult.png";
import CosmosCanvas from "../canvas/CosmosCanvas";

const Home = () => {
  const faqs = [
    {
      id: 1,
      question: "What is TastyStructure?",
      answer:
        "TastyStructure is a recipe generator that helps you create delicious meals based on the ingredients you have available.",
    },
    {
      id: 2,
      question: "How do I use TastyStructure?",
      answer:
        "Simply enter the ingredients you have, and TastyStructure will generate recipes that match your available ingredients.",
    },
    {
      id: 3,
      question: "Do I need an account to use TastyStructure?",
      answer:
        "No, you can generate recipes without an account. However, creating an account allows you to save recipes and get personalized recommendations.",
    },
    {
      id: 4,
      question: "Can I filter recipes based on dietary preferences?",
      answer:
        "Yes! You can filter recipes for vegetarian, vegan, gluten-free, or other dietary needs.",
    },
    {
      id: 5,
      question: "What if I have food allergies?",
      answer:
        "You can specify allergies when entering ingredients, and TastyStructure will exclude recipes that contain those allergens.",
    },
    {
      id: 6,
      question: "Where do the recipes come from?",
      answer:
        "Our recipes are sourced from curated databases, community contributions, and AI-generated suggestions to give you a variety of meal ideas.",
    },
    {
      id: 7,
      question: "Can I submit my own recipes?",
      answer:
        "Yes! You can share your favorite recipes with the TastyStructure community.",
    },
    {
      id: 8,
      question: "Does TastyStructure support multiple cuisines?",
      answer:
        "Absolutely! You can explore recipes from various cuisines, including Italian, Mexican, Asian, Mediterranean, and more.",
    },
    {
      id: 9,
      question: "Is TastyStructure free to use?",
      answer:
        "Yes! TastyStructure is free to use, with potential premium features in the future.",
    },
    {
      id: 10,
      question: "Can I use TastyStructure on my phone?",
      answer:
        "Yes! TastyStructure is mobile-friendly, so you can generate recipes easily on any device.",
    },
  ];

  return (
    <div>
      {/* Welcome Text */}
      <div className="text-white">
        <CosmosCanvas />
        <div className="absolute inset-0 flex items-center justify-center flex-col font-nunito mt-10 md:mt-0 mx-10 md:mx-20 lg:mx-48 text-center gap-5">
          <h1 className="font-homenaje text-4xl md:text-6xl font-semibold">
            Unleash Your Inner Chef.
          </h1>
          <p className="font-bold md:text-xl">
            Harness the power of generative AI and smart tools to turn your
            ingredients into delicious recipes and share your culinary
            creativity with the world.
          </p>
          <section className="flex flex-row items-center gap-1">
            <div className="flex flex-row px-4 py-3 rounded-full text-[#06071B] bg-[#0e0f26]">
              <input
                type="text"
                placeholder="What's in your fridge?"
                className="outline-none w-[200px] md:focus:w-[350px] lg:focus:w-[550px] bg-[#0e0f26] text-white transform transition-all duration-300 ease-in-out"
              />
            </div>
            <button className="p-3 rounded-full font-bold bg-[#0e0f26] flex flex-row flex-nowrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 48 48"
                className="size-6"
              >
                <radialGradient
                  id="oDvWy9qKGfkbPZViUk7TCa_eoxMN35Z6JKg_gr1"
                  cx="-670.437"
                  cy="617.13"
                  r=".041"
                  gradientTransform="matrix(128.602 652.9562 653.274 -128.6646 -316906.281 517189.719)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#1ba1e3"></stop>
                  <stop offset="0" stop-color="#1ba1e3"></stop>
                  <stop offset=".3" stop-color="#5489d6"></stop>
                  <stop offset=".545" stop-color="#9b72cb"></stop>
                  <stop offset=".825" stop-color="#d96570"></stop>
                  <stop offset="1" stop-color="#f49c46"></stop>
                </radialGradient>
                <path
                  fill="url(#oDvWy9qKGfkbPZViUk7TCa_eoxMN35Z6JKg_gr1)"
                  d="M22.882,31.557l-1.757,4.024c-0.675,1.547-2.816,1.547-3.491,0l-1.757-4.024	c-1.564-3.581-4.378-6.432-7.888-7.99l-4.836-2.147c-1.538-0.682-1.538-2.919,0-3.602l4.685-2.08	c3.601-1.598,6.465-4.554,8.002-8.258l1.78-4.288c0.66-1.591,2.859-1.591,3.52,0l1.78,4.288c1.537,3.703,4.402,6.659,8.002,8.258	l4.685,2.08c1.538,0.682,1.538,2.919,0,3.602l-4.836,2.147C27.26,25.126,24.446,27.976,22.882,31.557z"
                ></path>
                <radialGradient
                  id="oDvWy9qKGfkbPZViUk7TCb_eoxMN35Z6JKg_gr2"
                  cx="-670.437"
                  cy="617.13"
                  r=".041"
                  gradientTransform="matrix(128.602 652.9562 653.274 -128.6646 -316906.281 517189.719)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#1ba1e3"></stop>
                  <stop offset="0" stop-color="#1ba1e3"></stop>
                  <stop offset=".3" stop-color="#5489d6"></stop>
                  <stop offset=".545" stop-color="#9b72cb"></stop>
                  <stop offset=".825" stop-color="#d96570"></stop>
                  <stop offset="1" stop-color="#f49c46"></stop>
                </radialGradient>
                <path
                  fill="url(#oDvWy9qKGfkbPZViUk7TCb_eoxMN35Z6JKg_gr2)"
                  d="M39.21,44.246l-0.494,1.132	c-0.362,0.829-1.51,0.829-1.871,0l-0.494-1.132c-0.881-2.019-2.467-3.627-4.447-4.506l-1.522-0.676	c-0.823-0.366-0.823-1.562,0-1.928l1.437-0.639c2.03-0.902,3.645-2.569,4.511-4.657l0.507-1.224c0.354-0.853,1.533-0.853,1.886,0	l0.507,1.224c0.866,2.088,2.481,3.755,4.511,4.657l1.437,0.639c0.823,0.366,0.823,1.562,0,1.928l-1.522,0.676	C41.677,40.619,40.091,42.227,39.21,44.246z"
                ></path>
              </svg>
            </button>
          </section>
        </div>
      </div>

      {/* Why US */}
      <section className="p-10 flex flex-col md:flex-row bg-[#06071b]">
        <div className="main max-w-7xl mx-auto relative z-20 grid md:grid-cols-2 gap-12 items-center">
          {/* <!-- Text Content --> */}
          <div className="p-8 rounded-xl shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
            <h2 className="text-4xl font-extrabold text-gray-300 mb-4">
              "Unlock a World of Culinary Creativity!
            </h2>
            <div className="main flex items-center space-x-4 p-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-400">
                  Got food? Let's cook!
                </h3>
                <p className="text-gray-300 text-sm">
                  Transform your kitchen with Our App! <br />
                  Discover endless recipe ideas using fresh ingredients and cook
                  like a Professional Chef. Start your culinary journey today!"
                </p>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="relative p-2">
            <div className="flex flex-row flex-nowrap gap-3">
              <img
                src={client}
                alt="Why we Exist"
                className="card p-1 w-full relative rounded-xl shadow-xl object-cover hover:opacity-90 transition-opacity duration-300"
              />
              <img
                src={clientResult}
                alt="Why we Exist"
                className="card p-1 w-full relative rounded-xl shadow-xl object-cover hover:opacity-90 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Generate Recipe */}
      <section>
        <div></div>
        <div></div>
      </section>

      {/* Trending Flavors */}
      <section>
        {/* Header */}
        <div>
          <h1></h1>
          <div></div>
        </div>

        {/* Flavors */}
        <div></div>
      </section>

      {/* New From TastyMundo */}
      <section>
        <h1></h1>
        <div></div>
      </section>

      {/* Testimonial */}
      <section>
        {/* Picture */}
        <div></div>

        {/* Details */}
        <div>
          {/* stars */}
          <div></div>

          {/* Testimonial */}
          <div></div>

          {/* Name + Other */}
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>

      {/* Your Recent Discorvies */}
      <section>
        <h1></h1>
        <div></div>
      </section>

      {/* Trending in Season */}
      <section>
        {/* Header */}
        <div>
          <h1></h1>
          <div></div>
        </div>

        {/* Flavors */}
        <div></div>
      </section>

      {/* FAQ */}
      <section>
        <div></div>
        <div></div>
      </section>
    </div>
  );
};

export default Home;
