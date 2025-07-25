import React, { useState } from "react";
import tastyMundoBW from "../../../assets/tastyMundoBW.png";
import ChatSideBar from "./ChatSideBar/ChatSideBar";
import ChatHeader from "./ChatHeader/ChatHeader";
import ChatBody from "./ChatBody/ChatBody";
import SavedChats from "../SavedChats/SavedChats";

const ChatPage = () => {
  const [savedChats, setSavedChats] = useState(false);

  return (
    <div className="flex flex-row h-screen bg-primaryBody text-white">
      {/* SideBar */}
      <ChatSideBar tastyMundoBW={tastyMundoBW} setSavedChats={setSavedChats} />
      {/* Other */}
      <div className="w-full h-full">
        {/* Header */}
        <ChatHeader tastyMundoBW={tastyMundoBW} />
        {/* Body */}
        <ChatBody />
      </div>

      <SavedChats savedChats={savedChats} setSavedChats={setSavedChats} />
    </div>
  );
};

export default ChatPage;
