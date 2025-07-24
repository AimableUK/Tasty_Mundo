import React from "react";
import tastyMundoBW from "../../../assets/tastyMundoBW.png";
import ChatSideBar from "./ChatSideBar/ChatSideBar";
import ChatHeader from "./ChatHeader/ChatHeader";
import ChatBody from "./ChatBody/ChatBody";

const ChatPage = () => {
  return (
    <div className="flex flex-row h-screen bg-primaryBody text-white">
      {/* SideBar */}
      <ChatSideBar tastyMundoBW={tastyMundoBW} />
      {/* Other */}
      <div className="w-full h-full">
        {/* Header */}
        <ChatHeader tastyMundoBW={tastyMundoBW} />
        {/* Body */}
        <ChatBody />
      </div>
    </div>
  );
};

export default ChatPage;
