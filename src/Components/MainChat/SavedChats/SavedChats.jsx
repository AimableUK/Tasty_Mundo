import React, { useState } from "react";
import SavedChatsList from "../../../Data/SavedChats/SavedChats";

const SavedChats = ({ dialogRef, savedChats, setSavedChats }) => {
  const [previewChat, setPreviewChat] = useState(false);

  return (
    savedChats && (
      <div className="fixed inset-0 bg-black bg-opacity-40 z-40 flex items-center justify-center py-5 ">
        <div
          ref={dialogRef}
          className="relative bg-slate-950 border-2 border-slate-800 rounded-xl max-w-5xl w-full shadow-xl z-50 h-full flex flex-col"
        >
          {/* Search Bar */}
          <div className="flex flex-row items-center border-b-2 border-slate-800 px-2 py-1">
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-t-md py-3 px-3 outline-none bg-slate-950"
            />
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
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="flex flex-row h-full">
              {/* Left Panel */}
              <div className="flex-1 px-2 border-r border-slate-800 overflow-y-auto">
                <div className="pt-2">
                  <div className="flex justify-between px-2 pb-2">
                    <h3 className="font-semibold text-sm text-gray-300">
                      Actions
                    </h3>
                    <h3 className="font-semibold text-sm text-gray-300">
                      Show All
                    </h3>
                  </div>
                  <button className="flex w-full rounded-xl bg-slate-900 p-3 gap-2 items-center font-semibold text-gray-200 hover:bg-slate-800 active:scale-95 transition-all duration-200 ease-in-out">
                    <i class="bx  bx-edit-alt bx-sm"></i>
                    Create New Chat
                  </button>
                </div>
                <div className="px-1 pt-4">
                  <h3 className="font-semibold text-gray-300">History</h3>
                  {/* History */}
                  <div className="py-2 flex flex-col gap-y-2">
                    {SavedChatsList.map((chat) => (
                      <div
                        onClick={() => setPreviewChat(true)}
                        key={chat.id}
                        className="group flex flex-row justify-between cursor-pointer w-full rounded-xl bg-slate-900 p-3 gap-2 items-center font-semibold text-gray-200 hover:bg-slate-800 transition-all duration-200 ease-in-out"
                      >
                        <h4 className="py-1">{chat.chatName}</h4>
                        <p className="flex group-hover:hidden">
                          {chat.generatedAt}
                        </p>
                        <div className="hidden group-hover:flex flex-row flex-nowrap">
                          <div
                            className="cursor-pointer text-gray-300 hover:bg-gray-700
                            active:bg-inherit transform duration-100 ease-in-out rounded-md p-1"
                          >
                            <i className="bx bx-xs bx-arrow-in-up-right-stroke-circle"></i>
                          </div>

                          <div
                            className="cursor-pointer text-gray-300 hover:bg-gray-700
                            active:bg-inherit transform duration-100 ease-in-out rounded-md p-1"
                          >
                            <i className="bx bx-pencil bx-xs"></i>
                          </div>
                          <div
                            className="cursor-pointer text-gray-300 hover:bg-gray-700
                            active:bg-inherit transform duration-100 ease-in-out rounded-md p-1"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Panel */}
              <div className="flex-1 ">
                {previewChat ? (
                  <p className="font-semibold text-slate-200">
                    {/* {Select a Conversation to Previe} */}
                  </p>
                ) : (
                  <p className="font-semibold text-slate-200">
                    Select a Conversation to Preview
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Buttons in Dialog */}
          <div className="border-t-2 border-slate-800 flex justify-between items-center p-2">
            {/* Close Icon */}

            <i
              onClick={() => setSavedChats(false)}
              className="bx bx-shrink-right bx-xs cursor-pointer active:scale-75 transition-all duration-150 ease-out pl-2"
            ></i>

            {/* Buttons */}
            <div className="flex gap-2">
              <button className="flex items-center bg-slate-900 hover:bg-slate-800 active:bg-slate-700 px-3 py-1 rounded-md text-gray-200 font-semibold">
                View
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="size-4 ml-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.25 2a.75.75 0 0 0-.75.75v6.5H4.56l.97-.97a.75.75 0 0 0-1.06-1.06L2.22 9.47a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 0 0 1.06-1.06l-.97-.97h8.69A.75.75 0 0 0 14 10V2.75a.75.75 0 0 0-.75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button className="flex items-center bg-slate-900 hover:bg-slate-800 active:bg-slate-700 px-3 py-1 rounded-md text-gray-200 font-semibold">
                Delete
                <span className="ml-1 flex items-center gap-1">
                  Ctrl+
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="size-3"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 14a.75.75 0 0 1-.75-.75V4.56L4.03 7.78a.75.75 0 0 1-1.06-1.06l4.5-4.5a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L8.75 4.56v8.69A.75.75 0 0 1 8 14Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  D
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default SavedChats;
