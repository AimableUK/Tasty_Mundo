import React from "react";
import tastyMundoBW from "../../../../assets/tastyMundoBW.png";
import ChatTaglines from "../../../../Data/WelcomeText/ChatTaglines";
import InputBox from "./InputBox";

const ChatBody = () => {
  function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  const chatTaglines = getRandomItem(ChatTaglines);

  return (
    <div className="">
      {/* Welcome Text */}
      <div className="flex flex-col items-center justify-center fixed md:left-1/2 top-1/4 md:-translate-x-1/2">
        <div className="flex flex-col md:flex-row flex-nowrap items-center gap-x-2 text-center">
          <img
            src={tastyMundoBW}
            alt="TastyMundo Logo"
            className="size-16 md:size-10"
          />
          <h1 className="flex flex-nowrap font-bold text-lg md:text-2xl text-gray-200">
            Welcome to TASTY MUNDO
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center text-center px-3 md:px-5 py-3">
          <p className="text-lg md:text-xl text-gray-400 mb-6 font-nunito">
            {chatTaglines}
          </p>
        </div>
      </div>

      {/* Input Box */}
      <InputBox />
    </div>
  );
};

export default ChatBody;
