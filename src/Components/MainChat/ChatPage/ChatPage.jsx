import React, { useEffect, useRef, useState } from "react";
import tastyMundoBW from "../../../assets/tastyMundoBW.png";
import ChatSideBar from "./ChatSideBar/ChatSideBar";
import ChatHeader from "./ChatHeader/ChatHeader";
import ChatBody from "./ChatBody/ChatBody";
import SavedChats from "../SavedChats/SavedChats";
import RecipeIdea from "../RecipeIdea/RecipeIdea";
import useClickOutside from "../Utils/useClickOutside/useClickOutside";
import { useNavigate, useParams } from "react-router-dom";
import Chat from "./ChatBody/Chat";
import SiteSettings from "../Settings/SiteSettings";
import { useChatStore } from "../../../store/useChatStore";
import toast, { Toaster } from "react-hot-toast";

const ChatPage = () => {
  const chats = useChatStore((state) => state.chats);
  const editChatName = useChatStore((state) => state.editChatName);
  const deleteChat = useChatStore((state) => state.deleteChat);

  const { chatId } = useParams();
  const navigate = useNavigate();

  const [activeChat, setActiveChat] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    if (chatId) {
      const chat = chats.find((c) => String(c.id) === String(chatId));
      if (chat) {
        setActiveChat(chat);
      } else {
        setActiveChat(null);
        toast.error("Chat not found!");
        setTimeout(() => {
          navigate("/c");
        }, 3000);
      }
    } else {
      setActiveChat(null);
    }

    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatId, navigate]);

  const [savedChats, setSavedChats] = useState(false);
  const [recipeIdea, setRecipeIdea] = useState(false);
  const [settings, setSettings] = useState(false);

  const savedRef = useRef(null);
  const recipeRef = useRef(null);
  const settingsRef = useRef(null);

  useClickOutside(savedRef, savedChats, () => setSavedChats(false));
  useClickOutside(recipeRef, recipeIdea, () => setRecipeIdea(false));
  useClickOutside(settingsRef, settings, () => setSettings(false));

  return (
    <div className="flex flex-row h-screen overflow-x-hidden overflow-y-scroll bg-primaryBody text-white">
      {/* SideBar */}
      <ChatSideBar
        tastyMundoBW={tastyMundoBW}
        setSavedChats={setSavedChats}
        setRecipeIdea={setRecipeIdea}
        setSettings={setSettings}
      />
      {/* Other */}
      <div className="w-full h-full">
        {/* Header */}
        <ChatHeader
          setRecipeIdea={setRecipeIdea}
          setSavedChats={setSavedChats}
          setSettings={setSettings}
          chats={chats}
          deleteChatData={deleteChat}
        />

        {/* Body */}
        {isLoading ? (
          <div className="flex fixed justify-center left-1/2 -tanslate-x-1/2 pt-10">
            <span className="chat-loader"></span>
          </div>
        ) : activeChat ? (
          <Chat chat={activeChat} />
        ) : (
          <ChatBody />
        )}
      </div>

      <Toaster position="top-center" reverseOrder={true} />

      <SavedChats
        dialogRef={savedRef}
        savedChats={savedChats}
        deleteChatData={deleteChat}
        editChatName={editChatName}
        setSavedChats={setSavedChats}
      />

      <RecipeIdea
        dialogRef={recipeRef}
        recipeIdea={recipeIdea}
        setRecipeIdea={setRecipeIdea}
      />

      <SiteSettings
        dialogRef={settingsRef}
        settings={settings}
        setSettings={setSettings}
      />
    </div>
  );
};

export default ChatPage;
