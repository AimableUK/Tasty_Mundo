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
    <div className="flex flex-row p-1 py-3 md:py-4 px-4 justify-between w-full border-b border-b-gray-700 items-center">
      <div className="flex flex-row flex-nowrap items-center gap-x-3">
        <div className="space-y-1 cursor-pointer flex flex-col md:hidden">
          <div className="w-5 h-0.5 bg-white rounded-full"></div>
          <div className="w-3 h-0.5 bg-white rounded-full"></div>
        </div>
        <p className="font-roboto font-semibold text-gray-200">Tasty Mundo</p>
      </div>
      <div className="relative flex flex-row flex-nowrap items-center gap-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.4}
          stroke="currentColor"
          className="md:hidden size-8 cursor-pointer active:scale-105 transform duration-100 ease-in-out rounded-md p-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
          />
        </svg>
        <div
          onClick={() => setShowMore((prev) => !prev)}
          className="cursor-pointer flex flex-col md:flex-row gap-[3px] active:scale-110"
        >
          <div className="size-1 bg-white rounded-full"></div>
          <div className="size-1 bg-white rounded-full"></div>
          <div className="size-1 bg-white rounded-full"></div>
        </div>
        {showMore && (
          <div
            ref={dropdownRef}
            className="flex absolute right-1 top-8 md:top-4 flex-col items-start border border-gray-800 gap-y-1 rounded-md p-1 bg-gray-900"
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
