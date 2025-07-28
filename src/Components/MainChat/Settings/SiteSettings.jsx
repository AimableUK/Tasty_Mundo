import React, { useEffect } from "react";

const SiteSettings = ({ dialogRef, settings, setSettings }) => {
  return (
    settings && (
      <div className="fixed inset-0 bg-black bg-opacity-40 z-40 flex items-center justify-center md:py-16 pt-10">
        <div
          ref={dialogRef}
          className="relative flex flex-col md:flex-row bg-slate-950 border border-slate-800 md:rounded-xl rounded-t-xl max-w-3xl w-full shadow-xl z-50 h-full"
        >
          <div className="w-2/6 bg-gray-900 rounded-l-xl p-2 pt-2">
            <button
                onClick={() => setSettings(false)}
              className="flex items-center gap-1 bg-slate-900 hover:bg-slate-700 active:bg-slate-500 rounded-full text-gray-200 font-semibold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.7}
                stroke="currentColor"
                className="size-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </div>
          <div className="w-4/6 bg-gray-800 rounded-r-xl"></div>
        </div>
      </div>
    )
  );
};

export default SiteSettings;
