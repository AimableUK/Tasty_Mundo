import { useEffect, useRef, useState } from "react";

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
import Chat from "../HomeChatInput/Chat.jsx";
import { Link, useNavigate } from "react-router-dom";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { contactUsSchema } from "../../Schema/contactUsSchema.js";
import emailjs from "@emailjs/browser";
import { useChatStore } from "../../store/useChatStore.js";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const trendingRef = useRef(null);
  const ingredientsRef = useRef(null);
  const [ingredientsList, setIngredientsList] = useState([]);
  const [ingredientsTop, setIngredientsTop] = useState("");

  const [ingredients, setIngredients] = useState("");

  const addChat = useChatStore((state) => state.addChat);
  const navigate = useNavigate();

  // Sending Email
  const [submitStatus, setSubmitStatus] = useState(null);

  async function onSubmit(values, actions) {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_KEY,
        import.meta.env.VITE_EMAILJS_TEMPLATE_KEY,
        {
          name: values.name,
          email: values.email,
          phone: values.phone,
          subject: values.subject,
          message: values.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus("success");

      setTimeout(() => {
        actions.resetForm();
        setSubmitStatus(null);
      }, 3000);
    } catch (e) {
      setSubmitStatus("error");
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }
  }

  const [randomTagline, setRandomTagline] = useState("");
  const [randomSubTagline, setRandomSubTagline] = useState("");
  const [randomPlaceholder, setRandomPlaceholder] = useState("");

  function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  useEffect(() => {
    if (taglines?.length && subTaglines?.length && placeholders?.length) {
      setRandomTagline(getRandomItem(taglines));
      setRandomSubTagline(getRandomItem(subTaglines));
      setRandomPlaceholder(getRandomItem(placeholders));
    }
  }, []);

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

  const addIngredient = (label) => {
    if (!label) return;
    setIngredientsList((prev) => {
      if (prev.includes(label)) return prev;
      return [...prev, label];
    });
  };

  const parseIngredients = (text) => {
    return text
      .split(",")
      .flatMap((part) =>
        part
          .trim()
          .split(" ")
          .map((word) => word.trim().replace(/[^a-zA-Z0-9]/g, ""))
      )
      .filter(Boolean);
  };

  const handleSubmit = () => {
    const trimmed = ingredientsTop.trim();
    if (!trimmed) return;

    const ingredientsArray = parseIngredients(trimmed);

    const shuffled = [...ingredientsArray].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(2, ingredientsArray.length));
    const chatName = selected.length
      ? `${selected.join(" ")} Recipe`
      : "Custom Recipe";

    const newId = uuidv4();
    const newChat = {
      id: newId,
      chatName,
      ingredients: ingredientsArray,
      generatedAt: new Date().toISOString(),
      result: "",
      response: null,
    };

    addChat(newChat);
    setIngredientsTop("");
    setTimeout(() => {
      navigate(`/c/${newId}`);
    }, 50);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    const array = value
      .split(",")
      .map((i) => i.trim())
      .filter(Boolean);
    setIngredientsList(array);
  };

  const isValidInput =
    ingredientsTop
      .trim()
      .split(/[\s,]+/)
      .filter(Boolean).length >= 2;

  return (
    <div className="relative">
      {/* Welcome Text */}
      <div className="text-white relative">
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
                value={ingredientsTop}
                onChange={(e) => setIngredientsTop(e.target.value)}
                className="outline-none w-[200px] md:focus:w-[350px] lg:focus:w-[550px] bg-[#0e0f26] text-white transform transition-all duration-300 ease-in-out"
              />
            </div>
            <button
              disabled={!isValidInput}
              onClick={handleSubmit}
              className={`hover:scale-95 active:scale-90 transition-all duration-200 ease-in-out p-3 rounded-full font-bold bg-[#0e0f26] flex flex-row flex-nowrap ${
                !isValidInput ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
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
          <Link to="/c">
            <button className="mr-8 group outline-none text-lg font-roboto font-semibold flex flex-nowrap items-center hover:scale-x-110 border border-primaryBody hover:border-primaryColor hover:text-primaryColor active:scale-95 gap-3 p-2 rounded-full px-5 bg-[#0e0f26] text-white transform transition-all duration-300 ease-in-out">
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 group-hover:rotate-180 transition-all duration-300 ease-out group-hover:text-primaryColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>

      {/* Why US */}
      <section className="p-3 md:px-10 py-4 pt-10 flex flex-col md:flex-row bg-primaryBody">
        <div className="rounded-md main wrapper pl-3 pt-3 lg:pt-0">
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
          <div className="p-4 md:py-8 md:pl-16 md:pr-4 rounded-xl shadow-lg transform transition duration-300 ease-in-out">
            <h2 className="text-2xl font-roboto md:text-3xl lg:text-4xl font-extrabold text-gray-300 mb-4">
              "Unlock a World of Culinary Creativity!
            </h2>
            <div className="rounded-md main flex items-center space-x-4 p-4">
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
            <div
              onClick={() => addIngredient(label)}
              key={id}
              className="menu flex flex-col items-center mx-2 active:scale-90"
            >
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

      <Chat
        randomPlaceholder={randomPlaceholder}
        ingredientsList={ingredientsList}
        setIngredientsList={setIngredientsList}
        onAddIngredient={addIngredient}
        trendingRef={trendingRef}
        ingredientsRef={ingredientsRef}
        handleInputChange={handleInputChange}
      />

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
            <div
              onClick={() => addIngredient(label)}
              key={id}
              className="menu flex flex-col items-center mx-2 active:scale-90"
            >
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

      <section className="md:px-20 bg-primaryBody pb-3 transition duration-200 ease-in-out">
        <section className="contact-section">
          <div className="container mx-auto px-4 py-8">
            <div className="grid md:grid-cols-2 gap-8 bg-gray-200 rounded-lg shadow-lg overflow-hidden">
              <div className="p-3 md:p-8 bg-gray-800 text-white">
                <h2 className="text-2xl text-blue-400 mb-8 relative pb-4">
                  Contact Information
                  <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
                </h2>

                {/* Location */}
                <div className="flex items-start gap-2 md:gap-4 mb-8">
                  <div className="w-12 h-12 text-blue-500 md:text-white md:bg-blue-500 flex items-center justify-center rounded-full text-xl">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h3 className="text-lg mb-1">Our Location</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Kigali, Rwanda
                    </p>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex items-start gap-2 md:gap-4 mb-8">
                  <div className="w-12 h-12 text-blue-500 md:text-white md:bg-blue-500 flex items-center justify-center rounded-full text-xl">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h3 className="text-lg mb-1">Phone Number</h3>
                    <p className="text-gray-300 leading-relaxed">
                      <a
                        href="tel:+250794115143"
                        className="hover:text-blue-400"
                      >
                        +250 794115143
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-2 md:gap-4 mb-8">
                  <div className="w-12 h-12 text-blue-500 md:text-white md:bg-blue-500 flex items-center justify-center rounded-full text-xl">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h3 className="text-lg mb-1">Email Address</h3>
                    <p className="text-gray-300 leading-relaxed">
                      <a
                        href="mailto:vumiriyaemile@gmail.com"
                        className="hover:text-blue-400"
                      >
                        vumiriyaemile@gmail.com
                      </a>
                      <br />
                    </p>
                  </div>
                </div>

                {/* Socials */}
                <div className="flex gap-2 md:gap-4 mt-8">
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-700 flex items-center justify-center rounded-full text-white transition duration-300 hover:bg-blue-500 transform hover:-translate-y-1"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-700 flex items-center justify-center rounded-full text-white transition duration-300 hover:bg-pink-500 transform hover:-translate-y-1"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-700 flex items-center justify-center rounded-full text-white transition duration-300 hover:bg-blue-400 transform hover:-translate-y-1"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-700 flex items-center justify-center rounded-full text-white transition duration-300 hover:bg-blue-700 transform hover:-translate-y-1"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="p-3 md:p-8 bg-gray-200">
                <h2 className="text-2xl text-blue-500 mb-8 relative pb-4">
                  Send Us a Message
                  <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
                </h2>
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                  }}
                  validationSchema={contactUsSchema}
                  onSubmit={onSubmit}
                >
                  {({ isSubmitting }) => (
                    <Form autoComplete="off" className="space-y-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block mb-2 font-medium"
                        >
                          Your Name
                        </label>
                        <Field
                          type="text"
                          id="name"
                          name="name"
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 ease-in-out"
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="text-red-400 text-sm font-semibold"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 font-medium"
                        >
                          Email Address
                        </label>
                        <Field
                          type="email"
                          id="email"
                          name="email"
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 ease-in-out"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-red-400 text-sm font-semibold"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block mb-2 font-medium"
                        >
                          Phone Number
                        </label>
                        <Field
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 ease-in-out"
                        />
                        <ErrorMessage
                          name="phone"
                          component="div"
                          className="text-red-400 text-sm font-semibold"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block mb-2 font-medium"
                        >
                          Subject
                        </label>
                        <Field
                          as="textarea"
                          id="subject"
                          name="subject"
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 ease-in-out"
                        />
                        <ErrorMessage
                          name="subject"
                          component="div"
                          className="text-red-400 text-sm font-semibold"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block mb-2 font-medium"
                        >
                          Your Message
                        </label>
                        <Field
                          type="text"
                          as="textarea"
                          id="message"
                          name="message"
                          className="w-full p-3 border border-gray-300 rounded-md min-h-[150px] resize-y focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 ease-in-out"
                        />
                        <ErrorMessage
                          name="message"
                          component="div"
                          className="text-red-400 text-sm font-semibold"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex items-center gap-2 bg-gradient-to-br from-blue-500 to-blue-400 text-white font-semibold py-3 px-6 rounded-full hover:scale-105 hover:shadow-lg transition duration-300"
                      >
                        <i className="fas fa-paper-plane"></i> Send Message
                      </button>
                      {isSubmitting && <span className="loader"></span>}
                      {submitStatus === "success" && (
                        <p className="text-green-500 font-semibold">
                          Message sent successfully!
                        </p>
                      )}
                      {submitStatus === "error" && (
                        <p className="text-red-500 font-semibold">
                          Failed to send message. Please try again.
                        </p>
                      )}
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
