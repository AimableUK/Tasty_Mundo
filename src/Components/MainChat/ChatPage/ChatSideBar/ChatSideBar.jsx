import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ChatSideBar = ({
  tastyMundoBW,
  setSavedChats,
  setRecipeIdea,
  setSettings,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const newChat = () => {
    if (location.pathname == "/c") return;
    navigate("/c");
  };

  return (
    <div className="fixed h-full  hidden md:flex flex-col p-1 py-3 px-2 justify-between border-r border-r-gray-700 items-center">
      {/* SideBar Header */}
      <div className="flex flex-col gap-y-5 items-center">
        <div onClick={newChat} className="cursor-pointer">
          <img
            src={tastyMundoBW}
            alt="TastyMundo Logo"
            className="size-10 cursor-pointer"
          />
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-y-2 items-center">
          {/* New Chat */}
          <div className="relative flex flex-row items-center group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
              onClick={newChat}
              className="bx  bx-edit-alt size-9 cursor-pointer text-gray-300 hover:bg-gray-700
                active:bg-inherit transform duration-100 ease-in-out p-1 rounded-md"
            >
              <path d="m17.71 7.29-3-3a.996.996 0 0 0-1.41 0l-11.01 11A1 1 0 0 0 2 16v3c0 .55.45 1 1 1h3c.27 0 .52-.11.71-.29l11-11a.996.996 0 0 0 0-1.41ZM5.59 18H4v-1.59l7.5-7.5 1.59 1.59zm8.91-8.91L12.91 7.5 14 6.41 15.59 8zM11 18h11v2H11z"></path>
            </svg>
            <p className="hidden group-hover:block text-sm absolute whitespace-nowrap font-semibold -right-28 border border-gray-800 px-3 rounded-md bg-gray-900">
              New Chat
            </p>
          </div>
          {/* Ingredient Ideas */}
          <div className="relative flex flex-row items-center group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
              onClick={() => setRecipeIdea(true)}
              className="size-8 cursor-pointer text-gray-300 hover:bg-gray-700
                active:bg-inherit transform duration-100 ease-in-out rounded-md p-1"
            >
              <path d="m3,12h18c.55,0,1-.45,1-1v-2c0-3.93-4.39-7-10-7S2,5.07,2,9v2c0,.55.45,1,1,1Zm1-3c0-2.71,3.66-5,8-5s8,2.29,8,5v1H4v-1Z"></path>
              <path d="M2 13H22V15H2z"></path>
              <path d="m5,22h14c1.65,0,3-1.35,3-3v-2c0-.55-.45-1-1-1h-9c-.27,0-.52.11-.71.29l-2.29,2.29-2.29-2.29c-.19-.19-.44-.29-.71-.29h-3c-.55,0-1,.45-1,1v2c0,1.65,1.35,3,3,3Zm7.41-4h7.59v1c0,.55-.45,1-1,1h-8.59l2-2Zm-8.41,0h1.59l2,2h-2.59c-.55,0-1-.45-1-1v-1Z"></path>
              <path d="M15 6A1 1 0 1 0 15 8 1 1 0 1 0 15 6z"></path>
              <path d="M12.5 7A.5.5 0 1 0 12.5 8 .5.5 0 1 0 12.5 7z"></path>
              <path d="M17.5 8A.5.5 0 1 0 17.5 9 .5.5 0 1 0 17.5 8z"></path>
            </svg>
            <p className="hidden group-hover:block text-sm absolute whitespace-nowrap font-semibold -right-28 border border-gray-800 px-3 rounded-md bg-gray-900">
              Get Ideas
            </p>
          </div>
          {/* History */}
          <div className="relative flex flex-row items-center group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              imageRendering="optimizeQuality"
              fillRule="evenodd"
              clipRule="evenodd"
              viewBox="0 0 512 513.11"
              onClick={() => setSavedChats(true)}
              className="size-7 self-center text-gray-300 cursor-pointer hover:bg-gray-700 active:bg-inherit transform duration-100 ease-in-out rounded-md p-1"
            >
              <path
                fill="currentColor"
                fillRule="nonzero"
                d="M210.48 160.8c0-14.61 11.84-26.46 26.45-26.46s26.45 11.85 26.45 26.46v110.88l73.34 32.24c13.36 5.88 19.42 21.47 13.54 34.82-5.88 13.35-21.47 19.41-34.82 13.54l-87.8-38.6c-10.03-3.76-17.16-13.43-17.16-24.77V160.8zM5.4 168.54c-.76-2.25-1.23-4.64-1.36-7.13l-4-73.49c-.75-14.55 10.45-26.95 25-27.69 14.55-.75 26.95 10.45 27.69 25l.74 13.6a254.258 254.258 0 0136.81-38.32c17.97-15.16 38.38-28.09 61.01-38.18 64.67-28.85 134.85-28.78 196.02-5.35 60.55 23.2 112.36 69.27 141.4 132.83.77 1.38 1.42 2.84 1.94 4.36 27.86 64.06 27.53 133.33 4.37 193.81-23.2 60.55-69.27 112.36-132.83 141.39a26.24 26.24 0 01-12.89 3.35c-14.61 0-26.45-11.84-26.45-26.45 0-11.5 7.34-21.28 17.59-24.92 7.69-3.53 15.06-7.47 22.09-11.8.8-.66 1.65-1.28 2.55-1.86 11.33-7.32 22.1-15.7 31.84-25.04.64-.61 1.31-1.19 2-1.72 20.66-20.5 36.48-45.06 46.71-71.76 18.66-48.7 18.77-104.46-4.1-155.72l-.01-.03C418.65 122.16 377.13 85 328.5 66.37c-48.7-18.65-104.46-18.76-155.72 4.1a203.616 203.616 0 00-48.4 30.33c-9.86 8.32-18.8 17.46-26.75 27.29l3.45-.43c14.49-1.77 27.68 8.55 29.45 23.04 1.77 14.49-8.55 27.68-23.04 29.45l-73.06 9c-13.66 1.66-26.16-7.41-29.03-20.61zM283.49 511.5c20.88-2.34 30.84-26.93 17.46-43.16-5.71-6.93-14.39-10.34-23.29-9.42-15.56 1.75-31.13 1.72-46.68-.13-9.34-1.11-18.45 2.72-24.19 10.17-12.36 16.43-2.55 39.77 17.82 42.35 19.58 2.34 39.28 2.39 58.88.19zm-168.74-40.67c7.92 5.26 17.77 5.86 26.32 1.74 18.29-9.06 19.97-34.41 3.01-45.76-12.81-8.45-25.14-18.96-35.61-30.16-9.58-10.2-25.28-11.25-36.11-2.39a26.436 26.436 0 00-2.55 38.5c13.34 14.2 28.66 27.34 44.94 38.07zM10.93 331.97c2.92 9.44 10.72 16.32 20.41 18.18 19.54 3.63 36.01-14.84 30.13-33.82-4.66-15-7.49-30.26-8.64-45.93-1.36-18.33-20.21-29.62-37.06-22.33C5.5 252.72-.69 262.86.06 274.14c1.42 19.66 5.02 39 10.87 57.83z"
              />
            </svg>
            <p className="hidden group-hover:block text-sm absolute whitespace-nowrap font-semibold -right-32 border border-gray-800 px-3 rounded-md bg-gray-900">
              Saved Chats
            </p>
          </div>
        </div>
      </div>
      {/* SideBar Footer */}
      <div
        onClick={() => setSettings(true)}
        className="relative cursor-pointer flex flex-row items-center group hover:bg-gray-700 active:bg-inherit transition-all duration-100 ease-in-out rounded-md border-inherit p-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="cursor-pointer"
        >
          <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 6c-1.08 0-2-.92-2-2s.92-2 2-2 2 .92 2 2-.92 2-2 2"></path>
          <path d="m20.42 13.4-.51-.29c.05-.37.08-.74.08-1.11s-.03-.74-.08-1.11l.51-.29c.96-.55 1.28-1.78.73-2.73l-1-1.73a2.006 2.006 0 0 0-2.73-.73l-.53.31c-.58-.46-1.22-.83-1.9-1.11v-.6c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v.6c-.67.28-1.31.66-1.9 1.11l-.53-.31c-.96-.55-2.18-.22-2.73.73l-1 1.73c-.55.96-.22 2.18.73 2.73l.51.29c-.05.37-.08.74-.08 1.11s.03.74.08 1.11l-.51.29c-.96.55-1.28 1.78-.73 2.73l1 1.73c.55.95 1.77 1.28 2.73.73l.53-.31c.58.46 1.22.83 1.9 1.11v.6c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-.6a8.7 8.7 0 0 0 1.9-1.11l.53.31c.95.55 2.18.22 2.73-.73l1-1.73c.55-.96.22-2.18-.73-2.73m-2.59-2.78c.11.45.17.92.17 1.38s-.06.92-.17 1.38a1 1 0 0 0 .47 1.11l1.12.65-1 1.73-1.14-.66c-.38-.22-.87-.16-1.19.14-.68.65-1.51 1.13-2.38 1.4-.42.13-.71.52-.71.96v1.3h-2v-1.3c0-.44-.29-.83-.71-.96-.88-.27-1.7-.75-2.38-1.4a1.01 1.01 0 0 0-1.19-.15l-1.14.66-1-1.73 1.12-.65c.39-.22.58-.68.47-1.11-.11-.45-.17-.92-.17-1.38s.06-.93.17-1.38A1 1 0 0 0 5.7 9.5l-1.12-.65 1-1.73 1.14.66c.38.22.87.16 1.19-.14.68-.65 1.51-1.13 2.38-1.4.42-.13.71-.52.71-.96v-1.3h2v1.3c0 .44.29.83.71.96.88.27 1.7.75 2.38 1.4.32.31.81.36 1.19.14l1.14-.66 1 1.73-1.12.65c-.39.22-.58.68-.47 1.11Z"></path>
        </svg>
        <p className="hidden group-hover:block text-sm absolute whitespace-nowrap font-semibold -right-24 border border-gray-800 px-3 rounded-md bg-gray-900">
          Settings
        </p>
      </div>
    </div>
  );
};

export default ChatSideBar;
