import React from "react";

const SavedChats = ({ savedChats, setSavedChats }) => {
  return (
    savedChats && (
      <div className="fixed inset-0 bg-black bg-opacity-40 z-40 flex items-center justify-center py-5">
        <div className="relative bg-slate-950 border-2 border-slate-800 rounded-xl max-w-5xl w-full shadow-xl z-50 h-full flex flex-col">
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
              <div className="flex-1 px-2 border-r border-slate-800">
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
                <div className="px-1">
                  <h3 className="font-semibold text-gray-300">History</h3>
                </div>
              </div>

              {/* Right Panel */}
              <div className="flex-1 ">
                <p className="font-semibold text-slate-200">
                  Select a Conversation to Preview
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Buttons in Dialog */}
          <div className="border-t-2 border-slate-800 flex justify-between items-center p-2">
            {/* Close Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              onClick={() => setSavedChats(false)}
              className="size-6 cursor-pointer active:scale-90 transition-all duration-150 ease-out"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

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
