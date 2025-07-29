import React from "react";
import { Link } from "react-router-dom";
import tastyMundoLogo from "/tastyMundo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-primaryBody text-white flex flex-col md:flex-row justify-between p-6 gap-3 md:gap-10 pb-2 md:pl-20 md:pr-20 items-center border-t border-gray-700">
      <div className="flex flex-row items-center">
        <Link to={"/"} onClick={scrollToTop}>
          <img
            className="w-10 h-10"
            src={tastyMundoLogo}
            alt="Tasty Mundo Logo"
          />
        </Link>
        <Link to={"/"} onClick={scrollToTop}>
          <h3>Tasty Mundo</h3>
        </Link>
      </div>
      <div className="text-center">
        &copy; {new Date().getFullYear()} Tasty Mundo AI — All rights reserved.
      </div>
      <button
        onClick={scrollToTop}
        className="group flex flex-row mb-5 items-center gap-1 bg-gray-700 p-1 px-3 rounded-full font-semibold"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill={"currentColor"}
          viewBox="0 0 24 24"
        >
          <path d="m4,14h4v3c0,.55.45,1,1,1h6c.55,0,1-.45,1-1v-3h4c.38,0,.73-.22.9-.57.17-.35.12-.76-.12-1.06L12.78,2.38c-.38-.47-1.18-.47-1.56,0L3.22,12.38c-.24.3-.29.71-.12,1.06.17.35.52.57.9.57ZM12,4.6l5.92,7.4h-2.92c-.55,0-1,.45-1,1v3h-4v-3c0-.55-.45-1-1-1h-2.92l5.92-7.4Z"></path>
          <path d="M8 20H16V22H8z"></path>
        </svg>
        Back to Top
      </button>
    </footer>
  );
};

export default Footer;
