import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import tastyMundoLogo from "/tastyMundo.png";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import useMenuStore from "../../store/useMenuStore";

const Footer = () => {
  const location = useLocation();

  const menuItem = useMenuStore((state) => state.menuItem);
  const setMenuItem = useMenuStore((state) => state.setMenuItem);

  useEffect(() => {
    setMenuItem(location.pathname);
  }, [location.pathname, setMenuItem]);

  const MySocials = [
    {
      icon: <FaLinkedin />,
      url: `https://rw.linkedin.com/in/ukobizaba-aimable-a104122a7`,
    },
    { icon: <FaEnvelope />, url: `mailto:aimableukobizaba@gmail.com` },
  ];

  useEffect(() => {
    scrollToTop();
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-primaryBody text-white flex flex-col md:flex-row justify-between p-6 gap-3 md:gap-10 pb-2 md:pl-20 md:pr-20 items-center border-t border-gray-700">
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
      <div>
        <ul className="flex">
          <Link
            className={`${
              menuItem === "home" ? "text-primaryColor" : "text-white"
            } font-nunito font-bold mr-5 hover:text-primaryColor transition ease-in-out duration-200`}
            to={"/"}
            onClick={() => {
              setMenuItem("home");
              scrollToTop();
            }}
          >
            Home
          </Link>
          <Link
            className={`${
              menuItem === "aboutUs" ? "text-primaryColor" : "text-white"
            } font-nunito font-bold mr-5 hover:text-primaryColor transition ease-in-out duration-200`}
            to={"/aboutUs"}
            onClick={() => {
              setMenuItem("aboutUs");
              scrollToTop();
            }}
          >
            AboutUs
          </Link>
          <Link
            className={`${
              menuItem === "services" ? "text-primaryColor" : "text-white"
            } font-nunito font-bold hover:text-primaryColor transition ease-in-out duration-200`}
            to={"/services"}
            onClick={() => {
              setMenuItem("services");
              scrollToTop();
            }}
          >
            Services
          </Link>
        </ul>
      </div>
      <div className="flex flex-row mb-5">
        {MySocials.map((option, index) => (
          <div key={index} className="relative">
            <button
              className="text-primary text-2xl m-2 hover:text-primaryColor"
              onClick={() => window.open(option.url, "_blank")}
            >
              {option.icon}
            </button>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
