import React, { useState } from "react";
import tastyMundoBW from "../../../assets/tastyMundoBW.png";
import ChatSideBar from "./ChatSideBar/ChatSideBar";
import ChatHeader from "./ChatHeader/ChatHeader";
import ChatBody from "./ChatBody/ChatBody";
import SavedChats from "../SavedChats/SavedChats";
import RecipeIdea from "../RecipeIdea/RecipeIdea";

const ChatPage = () => {
  const [savedChats, setSavedChats] = useState(false);
  const [recipeIdea, setRecipeIdea] = useState(false);

  return (
    <div className="flex flex-row h-screen bg-primaryBody text-white">
      {/* SideBar */}
      <ChatSideBar
        tastyMundoBW={tastyMundoBW}
        setSavedChats={setSavedChats}
        setRecipeIdea={setRecipeIdea}
      />
      {/* Other */}
      <div className="w-full h-full">
        {/* Header */}
        <ChatHeader tastyMundoBW={tastyMundoBW} />
        {/* Body */}
        <ChatBody />
      </div>

      <SavedChats savedChats={savedChats} setSavedChats={setSavedChats} />
      <RecipeIdea recipeIdea={recipeIdea} setRecipeIdea={setRecipeIdea} />
    </div>
  );
};

export default ChatPage;
