import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const ChatHeader = ({ tastyMundoBW }) => {
  const [showMore, setShowMore] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = () => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowMore(false);
      }
    };

    if (showMore) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMore]);

  return (
    <div className="flex flex-row p-1 py-4 px-2 md:px-4 justify-between w-full border-b border-b-gray-700 items-center">
      <p className="font-roboto font-semibold text-gray-200">Tasty Mundo</p>
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 cursor-pointer"
          onClick={() => setShowMore((prev) => !prev)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
        {showMore && (
          <div
            ref={dropdownRef}
            className="flex absolute right-0 flex-col items-start border border-gray-800 gap-y-1 rounded-md p-1 bg-gray-900"
          >
            <Link to="/">
              <button className="flex flex-row flex-nowrap items-center font-semibold border-gray-900 hover:bg-gray-800 rounded-md p-1 px-2 gap-1 transition-all duration-200 ease-in-out active:scale-95">
                <span>
                  <img
                    src={tastyMundoBW}
                    className="size-7"
                    alt="Tasty Mundo Logo"
                  />
                </span>
                HOME
              </button>
            </Link>

            <button className="flex flex-row flex-nowrap items-center hover:text-red-400 font-semibold border-gray-900 hover:bg-gray-800 rounded-md p-1 px-2 gap-1 transition-all duration-200 ease-in-out active:scale-95">
              <span>
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
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </span>
              DELETE
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatHeader;
