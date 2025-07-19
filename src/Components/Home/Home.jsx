import { useRef } from "react";

// client
import client from "../../assets/client.webp";
import clientResult from "../../assets/clientResult.webp";

// canvas
import CosmosCanvas from "../canvas/CosmosCanvas";

// foods
import TastyNew from "../TastyNew/TastyNew.jsx";
import TastyDiscoveries from "../TastyDiscoveries/TastyDiscoveries.jsx";
import trendingFlavors from "../../Data/TastyFoods/trendingFlavors.js";
import ingredientsInSeason from "../../Data/TastyFoods/ingredientsInSeason.js";

// welcome text
import taglines from "../../Data/WelcomeText/taglines.js";
import subTaglines from "../../Data/WelcomeText/subTaglines.js";
import placeholders from "../../Data/WelcomeText/placeholders.js";

// faq
import faqData from "../../Data/FAQ/faqData.js";

// Testimonials
import Testimonials from "../Testimonials/Testimonials.jsx";
import { getDailyItems } from "../../utils/getDailyItems.js";

const Home = () => {
  const trendingRef = useRef(null);
  const ingredientsRef = useRef(null);

  function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  const randomTagline = getRandomItem(taglines);
  const randomSubTagline = getRandomItem(subTaglines);
  const randomPlaceholder = getRandomItem(placeholders);

  // Trending Flavors
  const scrollLeft = (ref) =>
    ref.current?.scrollBy({ left: -200, behavior: "smooth" });

  const scrollRight = (ref) =>
    ref.current?.scrollBy({ left: 200, behavior: "smooth" });

  const trendingToday = getDailyItems(trendingFlavors, null, "trending");
  const seasonalIngredientsToday = getDailyItems(
    ingredientsInSeason,
    null,
    "ingredients"
  );

  return (
    <div>
      {/* Welcome Text */}
      <div className="text-white">
        <CosmosCanvas />
        <div className="absolute inset-0 flex items-center justify-center flex-col font-nunito mt-10 md:mt-0 mx-10 md:mx-20 lg:mx-48 text-center gap-5">
          <h1 className="font-homenaje text-4xl md:text-6xl font-semibold">
            {randomTagline}
          </h1>
          <p className="font-bold md:text-xl">{randomSubTagline}</p>
          <section className="flex flex-row items-center gap-1">
            <div className="flex flex-row px-4 py-3 rounded-full text-primaryBody bg-[#0e0f26]">
              <input
                type="text"
                placeholder={randomPlaceholder}
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
                  <stop offset="0" stopColor="#1ba1e3"></stop>
                  <stop offset="0" stopColor="#1ba1e3"></stop>
                  <stop offset=".3" stopColor="#5489d6"></stop>
                  <stop offset=".545" stopColor="#9b72cb"></stop>
                  <stop offset=".825" stopColor="#d96570"></stop>
                  <stop offset="1" stopColor="#f49c46"></stop>
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
                  <stop offset="0" stopColor="#1ba1e3"></stop>
                  <stop offset="0" stopColor="#1ba1e3"></stop>
                  <stop offset=".3" stopColor="#5489d6"></stop>
                  <stop offset=".545" stopColor="#9b72cb"></stop>
                  <stop offset=".825" stopColor="#d96570"></stop>
                  <stop offset="1" stopColor="#f49c46"></stop>
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
      <section className="p-3 md:px-10 py-4 pt-10 flex flex-col md:flex-row bg-primaryBody">
        <div className="main wrapper pl-3 pt-3 lg:pt-0">
          {/* Images */}
          <div className="relative px-4 md:px-0 p-2">
            <div className="images-section flex flex-row flex-nowrap gap-3">
              <img
                src={client}
                loading="lazy"
                alt="Why we Exist"
                className="card p-1 relative rounded-xl shadow-xl object-cover hover:opacity-90 transition-opacity duration-300"
              />
              <img
                src={clientResult}
                alt="Why we Exist"
                loading="lazy"
                className="card p-1 relative rounded-xl shadow-xl object-cover hover:opacity-90 transition-opacity duration-300"
              />
            </div>
          </div>
          {/* <!-- Text Content --> */}
          <div className="p-4 md:p-8 rounded-xl shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
            <h2 className="text-2xl font-roboto md:text-4xl lg:text-5xl font-extrabold text-gray-300 mb-4">
              "Unlock a World of Culinary Creativity!
            </h2>
            <div className="main flex items-center space-x-4 p-4">
              <div>
                <h3 className="md:text-xl font-semibold text-gray-400">
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
        </div>
      </section>

      {/* Trending Flavors */}
      <section className="p-3 md:px-10 py-4 flex flex-col gap-y-2 bg-primaryBody text-white">
        {/* Header */}
        <div className=" flex flex-row justify-between items-center">
          <h1 className="font-roboto text-lg md:text-2xl font-semibold">
            Trending Flavors
          </h1>
          <div className="flex flex-row flex-wrap gap-1">
            <button
              onClick={() => scrollLeft(trendingRef)}
              className="rounded-full bg-primaryColor border p-2 active:scale-90 transition-all duration-150 ease-in"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="size-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              onClick={() => scrollRight(trendingRef)}
              className="rounded-full bg-primaryColor border p-2 active:scale-90 transition-all duration-150 ease-in"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="size-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Flavors */}
        <div
          ref={trendingRef}
          className="flex flex-row overflow-x-scroll scrollbar-hide whitespace-nowrap"
        >
          {trendingToday.map(({ id, src, alt, label }) => (
            <div key={id} className="menu flex flex-col items-center mx-2">
              <img
                src={src}
                loading="lazy"
                alt={alt}
                className="size-20 rounded-full"
              />
              <h3 className="mt-2 text-sm font-medium">{label}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* New From TastyMundo */}
      <TastyNew />

      {/* Testimonial */}
      <Testimonials />

      {/* Your Recent Discorvies */}
      <TastyDiscoveries />

      {/* Ingredients in Season */}
      <section className="p-3 md:px-10 py-4 flex flex-col gap-y-2 bg-primaryBody text-white">
        {/* Header */}
        <div className=" flex flex-row justify-between items-center">
          <h1 className="font-roboto text-lg md:text-2xl font-semibold">
            Ingredients in season
          </h1>
          <div className="flex flex-row flex-wrap gap-1">
            <button
              onClick={() => scrollLeft(ingredientsRef)}
              className="rounded-full bg-primaryColor border p-2 active:scale-90 transition-all duration-150 ease-in"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="size-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              onClick={() => scrollRight(ingredientsRef)}
              className="rounded-full bg-primaryColor border p-2 active:scale-90 transition-all duration-150 ease-in"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="size-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Flavors */}
        <div
          ref={ingredientsRef}
          className="flex flex-row overflow-x-scroll scrollbar-hide whitespace-nowrap"
        >
          {seasonalIngredientsToday.map(({ id, src, alt, label }) => (
            <div key={id} className="menu flex flex-col items-center mx-2">
              <img
                src={src}
                loading="lazy"
                alt={alt}
                className="size-20 rounded-full"
              />
              <h3 className="mt-2 text-sm font-medium">{label}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-2 md:py-4 bg-primaryBody">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
          <div className="text-center">
            <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">
              F.A.Q
            </p>
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-300">
              Frequently Asked&nbsp;
              <span className="text-primaryColor">Questions</span>
            </h3>
          </div>

          <div className="mt-5 md:mt-14">
            <ul>
              {faqData.map((faq) => (
                <li key={faq.id} className="text-left mb-7">
                  {/* Question */}
                  <div className="flex flex-row items-start mb-3">
                    <div className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                      <svg
                        width="30px"
                        fill="white"
                        height="30px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g data-name="Layer 2">
                          <g data-name="menu-arrow">
                            <rect
                              width="24"
                              height="24"
                              transform="rotate(180 12 12)"
                              opacity="0"
                            ></rect>
                            <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z" />
                            <circle cx="12" cy="19" r="1" />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="bg-gray-300 p-4 rounded px-6 w-full flex items-center">
                      <h4 className="text-md leading-6 font-medium text-gray-900">
                        {faq.question}
                      </h4>
                    </div>
                  </div>

                  {/* Answer */}
                  <div className="flex flex-row items-start">
                    <div className="bg-indigo-300 rounded-md p-4 px-6 w-full flex items-center">
                      <p className="text-gray-700 text-sm">{faq.answer}</p>
                    </div>
                    <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                        />
                      </svg>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
