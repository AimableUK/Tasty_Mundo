import { useState } from "react";
import tastyMundoLogo from "/tastyMundo.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <div>
      {/* Desktop */}
      <header className="header hidden md:flex z-10 text-white w-full fixed flex-col md:flex-row pt-2 gap-2 justify-between md:p-3 md:gap-10 pb-2 md:pl-20 md:pr-20 items-center">
        <div className="flex flex-row items-center">
          <Link to={"/"}>
            <img
              className="w-10 h-10"
              src={tastyMundoLogo}
              alt="Tasty Mundo Logo"
            />
          </Link>
          <Link to={"/"}>
            <h3 className="font-nunito font-bold">Tasty Mundo</h3>
          </Link>
        </div>
        <div>
          <ul className="flex">
            <Link
              className="font-nunito font-bold mr-5 hover:text-primaryColor transition ease-in-out duration-200"
              to={"/"}
            >
              Home
            </Link>
            <Link
              className="font-nunito font-bold mr-5 hover:text-primaryColor transition ease-in-out duration-200"
              to={"/aboutus"}
            >
              AboutUs
            </Link>
            <Link
              className="font-nunito font-bold hover:text-primaryColor transition ease-in-out duration-200"
              to={"/services"}
            >
              Services
            </Link>
          </ul>
        </div>
      </header>

      {/* Mobile + Ipad */}
      <header className="header z-10 text-white w-full fixed flex md:hidden flex-col md:flex-row p-2 px-3 gap-2 justify-between">
        {/* visible header */}
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center">
            <Link to={"/"}>
              <img
                className="w-10 h-10"
                src={tastyMundoLogo}
                alt="Tasty Mundo Logo"
              />
            </Link>
            <Link to={"/"}>
              <h3 className="font-nunito font-bold">Tasty Mundo</h3>
            </Link>
          </div>
          <div className="relative">
            <div
              onClick={() => setMenu(!menu)}
              className={`cursor-pointer transition-transform duration-300 ease-in-out ${
                menu ? "rotate-90" : "rotate-0"
              }`}
            >
              {menu ? (
                // Close Icon
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
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger Icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>

        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            menu ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col sm:flex-row">
            <Link
              className="font-nunito font-bold mr-5 hover:text-primaryColor transition ease-in-out duration-200"
              to={"/"}
            >
              Home
            </Link>
            <Link
              className="font-nunito font-bold mr-5 hover:text-primaryColor transition ease-in-out duration-200"
              to={"/aboutus"}
            >
              About Us
            </Link>
            <Link
              className="font-nunito font-bold hover:text-primaryColor transition ease-in-out duration-200"
              to={"/services"}
            >
              Services
            </Link>
          </ul>
        </div>
      </header>
    </div>
  );
}
