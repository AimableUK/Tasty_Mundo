import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import client from "../../assets/client.webp";
import clientResult from "../../assets/clientResult.webp";
import avocadoImg from "../../assets/avocado.webp";
import riceImg from "../../assets/rice.webp";
import berriesImg from "../../assets/berries.webp";
import mushroomImg from "../../assets/mushroom.webp";
import salmonImg from "../../assets/salmon.webp";
import lentilsImg from "../../assets/lentils.webp";
import potatoesImg from "../../assets/potatoes.webp";
import cabbageImg from "../../assets/cabbage.webp";
import chickenMeatImg from "../../assets/chickenMeat.webp";
import appleImg from "../../assets/apple.webp";
import cucumberImg from "../../assets/cucumber.webp";
import quinoaImg from "../../assets/quinoa.webp";
import CosmosCanvas from "../canvas/CosmosCanvas";

const Home = () => {
  const taglines = [
    "Unleash Your Inner Chef.",
    "Flavorful Creativity, Unlocked.",
    "Turn Ingredients into Inspiration.",
    "AI That Cooks with You.",
    "Cook Smarter with AI.",
    "Your Imagination, Our Intelligence.",
    "Recipes Born from Your Pantry.",
    "Discover Dishes, Not Limits.",
    "Creativity Meets Cuisine.",
    "From Ingredients to Ideas.",
    "Food Ideas, Reimagined.",
    "Smart Cooking Starts Here.",
    "Inspiration, Served Fresh.",
    "A New Recipe Every Time.",
    "Generative AI, Tasty Results.",
    "Let AI Stir Your Imagination.",
    "Your Ingredients, Infinite Recipes.",
    "Think It. Taste It.",
    "Cooking Reimagined by AI.",
    "Invent Your Next Favorite Dish.",
  ];

  const subTaglines = [
    "Let our intelligent recipe engine turn your everyday ingredients into exciting, chef-inspired meals in seconds.",
    "Tired of wondering what to cook? Simply enter what you have, and let our AI serve up delicious recipe ideas tailored just for you.",
    "Discover how cutting-edge generative AI can revolutionize your kitchen—turning simple groceries into gourmet inspiration.",
    "From what's left in your fridge to a full dinner plan, our AI helps you make the most of every ingredient you have.",
    "Generate unique, step-by-step recipes using AI trained to understand flavors, combinations, and your personal preferences.",
    "Experience a smarter way to cook: just type in your ingredients and watch our AI create something extraordinary for you.",
    "Let go of the guesswork—our platform analyzes your inputs to deliver curated, creative, and delicious recipes in real time.",
    "Empower your cooking journey with AI that understands your pantry, your taste, and your time constraints.",
    "With every reload, discover a new idea—our generative AI brings unlimited culinary creativity right to your fingertips.",
    "AI-driven cooking isn't the future—it's now. Explore intelligent recipes built from the items you already own.",
    "Say goodbye to boring meals. Our platform transforms basic supplies into mouthwatering experiences using smart technology.",
    "Your kitchen companion for effortless cooking—AI helps you plan, create, and enjoy meals like never before.",
    "We combine artificial intelligence and culinary knowledge to help you make the most of every bite.",
    "Enter your ingredients and explore creative meal ideas you never knew you could cook at home.",
    "No matter your skill level, our AI guides you through personalized recipe creation, one smart suggestion at a time.",
    "Build better meals without the stress—our AI helps you discover, adapt, and create recipes based on your lifestyle.",
    "An effortless cooking assistant that listens to what you have and tells you what to make.",
    "Experience the joy of cooking without the planning—our recipe AI handles that for you with a fresh twist every time.",
    "Whether you're meal prepping or improvising dinner, our AI is here to inspire your inner chef.",
    "Cooking should be fun, not frustrating. Let our AI simplify your decisions and spice up your meals.",
  ];

  const placeholders = [
    "What's in your fridge?",
    "Enter what you have...",
    "Type your ingredients...",
    "Got veggies? Type here...",
    "What are you cooking with?",
    "List your ingredients...",
    "Tell me what's at home...",
    "Share your ingredients...",
    "Got food? Let's cook!",
    "Start with what you have...",
    "Any leftovers to use?",
    "What do you have today?",
    "Input what's on hand...",
    "Cooking with what today?",
    "Have tomatoes? Or rice?",
    "Type what's in the kitchen...",
    "What's in your basket?",
    "Drop your ingredients here...",
    "Got anything to cook with?",
    "What's your meal idea?",
  ];

  function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  const randomTagline = getRandomItem(taglines);
  const randomSubTagline = getRandomItem(subTaglines);
  const randomPlaceholder = getRandomItem(placeholders);

  const ingredientImages = [
    {
      id: 1,
      src: avocadoImg,
      alt: "Avocado Image",
      label: "Avocado",
    },
    {
      id: 2,
      src: riceImg,
      alt: "Rice Image",
      label: "Rice",
    },
    {
      id: 3,
      src: berriesImg,
      alt: "Berries Image",
      label: "Berries",
    },
    {
      id: 4,
      src: mushroomImg,
      alt: "Mushroom Image",
      label: "Mushroom",
    },
    {
      id: 5,
      src: salmonImg,
      alt: "Salmon Image",
      label: "Salmon",
    },
    {
      id: 6,
      src: lentilsImg,
      alt: "Lentils Image",
      label: "Lentils",
    },
    {
      id: 7,
      src: potatoesImg,
      alt: "Potatoes Image",
      label: "Potatoes",
    },
    {
      id: 8,
      src: cabbageImg,
      alt: "Cabbage Image",
      label: "Cabbage",
    },
    {
      id: 9,
      src: chickenMeatImg,
      alt: "Chicken Meat Image",
      label: "Chicken Meat",
    },
    {
      id: 10,
      src: appleImg,
      alt: "Apple Image",
      label: "Apple",
    },
    {
      id: 11,
      src: cucumberImg,
      alt: "Cucumber Image",
      label: "Cucumber",
    },
    {
      id: 12,
      src: quinoaImg,
      alt: "Quinoa Image",
      label: "Quinoa",
    },
  ];

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
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-gray-300 mb-4">
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
        <div className=" flex flex-row justify-between">
          <h1 className="font-roboto text-xl md:text-2xl font-semibold">
            Trending Flavors
          </h1>
          <div className="flex flex-row flex-wrap gap-1">
            <button className="rounded-full bg-primaryColor p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
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
            <button className="rounded-full bg-primaryColor p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
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
        <div className="flex flex-row overflow-x-scroll scrollbar-hide whitespace-nowrap">
          {ingredientImages.map(({ id, src, alt, label }) => (
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
