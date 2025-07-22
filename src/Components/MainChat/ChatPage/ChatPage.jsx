import React from "react";
import tastyMundoBW from "../../../assets/tastyMundoBW.png";
import ChatSideBar from "./ChatSideBar/ChatSideBar";
import ChatHeader from "./ChatHeader/ChatHeader";

const ChatPage = () => {
  return (
    <div className="flex flex-row h-screen bg-primaryBody text-white">
      {/* SideBar */}
      <ChatSideBar tastyMundoBW={tastyMundoBW} />
      {/* Other */}
      <div className="w-full">
        {/* Header */}
        <ChatHeader tastyMundoBW={tastyMundoBW} />
        {/* Body */}
        <div></div>
      </div>
    </div>
  );
};

export default ChatPage;
