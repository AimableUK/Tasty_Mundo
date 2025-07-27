import React, { useEffect, useRef, useState } from "react";
import tastyMundoBW from "../../../assets/tastyMundoBW.png";
import ChatSideBar from "./ChatSideBar/ChatSideBar";
import ChatHeader from "./ChatHeader/ChatHeader";
import ChatBody from "./ChatBody/ChatBody";
import SavedChatsList from "../../../Data/SavedChats/SavedChats";
import SavedChats from "../SavedChats/SavedChats";
import RecipeIdea from "../RecipeIdea/RecipeIdea";
import useClickOutside from "../Utils/useClickOutside/useClickOutside";
import { useNavigate, useParams } from "react-router-dom";
import Chat from "./ChatBody/Chat";

const ChatPage = () => {
  const { chatId } = useParams();
  const navigate = useNavigate();

  const [activeChat, setActiveChat] = useState(null);

  useEffect(() => {
    if (chatId) {
      const chat = SavedChatsList.find((c) => c.id === Number(chatId));
      if (chat) {
        setActiveChat(chat);
      } else {
        setActiveChat(null);
      }
    } else {
      setActiveChat(null);
    }
  }, [chatId]);

  const [savedChats, setSavedChats] = useState(false);
  const [recipeIdea, setRecipeIdea] = useState(false);

  const savedRef = useRef(null);
  const recipeRef = useRef(null);

  useClickOutside(savedRef, savedChats, () => setSavedChats(false));
  useClickOutside(recipeRef, recipeIdea, () => setRecipeIdea(false));

  return (
    <div className="flex flex-row h-screen overflow-x-hidden overflow-y-scroll bg-primaryBody text-white">
      {/* SideBar */}
      <ChatSideBar
        tastyMundoBW={tastyMundoBW}
        setSavedChats={setSavedChats}
        setRecipeIdea={setRecipeIdea}
      />
      {/* Other */}
      <div className="w-full h-full">
        {/* Header */}
        <ChatHeader
          tastyMundoBW={tastyMundoBW}
          setRecipeIdea={setRecipeIdea}
          setSavedChats={setSavedChats}
        />

        {/* Body */}
        {activeChat ? <Chat chat={activeChat} /> : <ChatBody />}
      </div>

      <SavedChats
        dialogRef={savedRef}
        savedChats={savedChats}
        setSavedChats={setSavedChats}
      />

      <RecipeIdea
        dialogRef={recipeRef}
        recipeIdea={recipeIdea}
        setRecipeIdea={setRecipeIdea}
      />
    </div>
  );
};

export default ChatPage;
