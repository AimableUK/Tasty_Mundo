import { Link } from "react-router-dom";
import { useState } from "react";

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

  return <div></div>;
};

export default Home;
