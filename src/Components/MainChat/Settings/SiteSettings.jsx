import React, { useRef, useState } from "react";
import { useSettingsStore } from "../../../store/settingsStore";

const SiteSettings = ({ dialogRef, settings, setSettings }) => {
  const [settingView, setSettingView] = useState("general");
  const [feedbackForm, setFeedbackForm] = useState(false);

  const appVersion = "v1.0.0";
  const formRef = useRef(null);

  const { clearSavedRecipes, resetAllSettings, savedRecipes } =
    useSettingsStore();

  const exportData = () => {
    const data = {
      savedRecipes,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "recipe_data.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const viewForm = () => {
    setFeedbackForm((prev) => !prev);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const settingsTitles = {
    general: "General",
    data: "Data & Privacy",
    about: "About App",
  };

  const settingsComponents = {
    general: <div>General</div>,
    data: (
      <div className="md:p-4 max-w-2xl mx-auto">
        <div className="bg-gray-900 rounded-xl p-4 mb-4 shadow">
          <h3 className="text-lg font-semibold mb-2">Saved Recipes</h3>
          <p className="text-sm text-gray-400 mb-3">
            You have {savedRecipes.length} recipe(s) saved on your device.
          </p>
          <button
            onClick={clearSavedRecipes}
            className="px-4 py-2 bg-red-800 text-white rounded-xl hover:bg-red-900 active:bg-red-950 transition"
          >
            Delete All Saved Recipes
          </button>
        </div>

        <div className="bg-gray-900 rounded-xl p-4 mb-4 shadow">
          <h3 className="text-lg font-semibold mb-2">Export My Data</h3>
          <p className="text-sm text-gray-400 mb-3">
            Download your saved recipes and ingredients as a JSON file.
          </p>
          <button
            onClick={exportData}
            className="px-4 py-2 bg-blue-800 text-gray-100 font-semibold rounded-xl hover:bg-blue-900 active:bg-blue-950 transition"
          >
            Export My Data
          </button>
        </div>

        <div className="bg-gray-900 rounded-xl p-4 mb-4 shadow">
          <h3 className="text-lg font-semibold mb-2">Reset Everything</h3>
          <p className="text-sm text-gray-400 mb-3">
            This will erase all your preferences, saved recipes, and ingredient
            history from this device.
          </p>
          <button
            onClick={resetAllSettings}
            className="px-4 py-2 bg-red-800 text-white rounded-xl hover:bg-red-900 active:bg-red-950 transition"
          >
            Reset All Settings
          </button>
        </div>
      </div>
    ),
    about: (
      <div className="md:p-4 text-gray-100 space-y-4 transition-all duration-500 ease-in-out">
        <div className="bg-gray-900 p-4 rounded-xl shadow-md space-y-2">
          <h3 className="text-lg font-medium">App Purpose</h3>
          <p className="text-sm text-gray-300">
            This app helps you generate food recipes based on ingredients you
            already have at home. It uses AI to provide smart suggestions — all
            within your browser, no internet needed after getting your RECIPE.
          </p>
        </div>

        <div className="bg-gray-900 p-4 rounded-xl shadow-md space-y-2">
          <h3 className="text-lg font-medium">Version</h3>
          <p className="text-sm text-gray-300">{appVersion}</p>
        </div>

        <div className="bg-gray-900 p-4 rounded-xl shadow-md space-y-2">
          <h3 className="text-lg font-medium">Data Privacy</h3>
          <p className="text-sm text-gray-300">
            All your settings, saved recipes, and preferences are stored locally
            on your device using your browser's storage (localStorage). Nothing
            is uploaded or shared — your data stays yours.
          </p>
        </div>

        <div className="bg-gray-900 p-4 rounded-xl shadow-md space-y-2">
          <h3 className="text-lg font-medium">Limitations</h3>
          <p className="text-sm text-gray-300">
            This is a demo app and does not include real-time backend support or
            cloud syncing. Make sure to export your data if needed before
            clearing the app's storage.
          </p>
        </div>

        <div className="bg-gray-900 p-4 rounded-xl shadow-md space-y-2">
          <h3 className="text-lg font-medium">Contact & Feedback</h3>
          <p className="text-sm text-gray-300">
            Have a suggestion or question?{" "}
            <span
              onClick={viewForm}
              className="cursor-pointer underline text-blue-400 active:text-blue-300"
            >
              Send us a Feedback
            </span>
            &nbsp;right now.
          </p>
        </div>

        {feedbackForm && (
          <div
            ref={formRef}
            className="bg-gray-900 p-4 rounded-xl shadow-md space-y-2 w-full transition-all duration-200 ease-in"
          >
            <form autoComplete="off" className="w-full flex flex-col gap-y-2">
              <h3 className="flex justify-center font-semibold">
                FeedBack Form
              </h3>
              <div className="flex flex-row flex-nowrap gap-x-2">
                <label htmlFor="name" className="">
                  Name:&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name..."
                  className="w-full outline-none rounded-lg p-1 bg-gray-800 px-3"
                />
              </div>
              <div className="flex flex-row flex-nowrap gap-x-2">
                <label htmlFor="email" className="">
                  Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your Email..."
                  className="w-full outline-none rounded-lg p-1 bg-gray-800 px-3"
                />
              </div>
              <div className="flex flex-row flex-nowrap gap-x-2">
                <label htmlFor="message" className="">
                  Message:
                </label>
                <textarea
                  name="message"
                  type="text"
                  placeholder="Enter your Feedback..."
                  className="w-full outline-none rounded-lg p-1 bg-gray-800 px-3"
                />
              </div>
              <button className="bg-gray-800 rounded-full p-1 px-7 w-fit flex self-center hover:bg-gray-700 transition-all duration-200 ease-in active:bg-gray-600">
                Submit
              </button>
            </form>
          </div>
        )}

        <div className="text-center text-xs text-gray-500 mt-6">
          &copy; {new Date().getFullYear()} Tasty Mundo AI — All rights
          reserved.
        </div>
      </div>
    ),
  };

  return (
    settings && (
      <div className="fixed inset-0 bg-black bg-opacity-40 z-40 flex items-center justify-center md:py-16 pt-10">
        <div
          ref={dialogRef}
          className="relative flex flex-col md:flex-row bg-slate-950 border border-slate-800 md:rounded-xl rounded-t-xl max-w-3xl w-full shadow-xl z-50 h-full"
        >
          <div className="flex md:hidden self-center p-[1px] md:p-[2px] rounded-full my-2 bg-slate-300 w-2/6 "></div>

          <div className="flex flex-row overflow-x-auto md:overflow-hidden gap-1 scrollbar-hide md:flex-col justify-between md:justify-start gap-y-4 md:w-3/12 bg-gray-900 md:rounded-l-xl p-2 h-fit md:h-full">
            <button
              onClick={() => setSettings(false)}
              className="flex items-center gap-1 w-fit hover:bg-slate-700 active:bg-slate-500 rounded-full text-gray-200 font-semibold"
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
            {/* Actions */}
            <div className="flex flex-row md:flex-col overflow-x-scroll md:overflow-hidden scrollbar-hide items-center">
              <button
                onClick={() => setSettingView("general")}
                className={`${
                  settingView === "general" && "bg-gray-800"
                } flex whitespace-nowrap text-sm flex-row md:w-full p-2 hover:bg-gray-800 active:bg-inherit rounded-xl items-center transition-all duration-100 ease-in-out`}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="size-5"
                  >
                    <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 6c-1.08 0-2-.92-2-2s.92-2 2-2 2 .92 2 2-.92 2-2 2"></path>
                    <path d="m20.42 13.4-.51-.29c.05-.37.08-.74.08-1.11s-.03-.74-.08-1.11l.51-.29c.96-.55 1.28-1.78.73-2.73l-1-1.73a2.006 2.006 0 0 0-2.73-.73l-.53.31c-.58-.46-1.22-.83-1.9-1.11v-.6c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v.6c-.67.28-1.31.66-1.9 1.11l-.53-.31c-.96-.55-2.18-.22-2.73.73l-1 1.73c-.55.96-.22 2.18.73 2.73l.51.29c-.05.37-.08.74-.08 1.11s.03.74.08 1.11l-.51.29c-.96.55-1.28 1.78-.73 2.73l1 1.73c.55.95 1.77 1.28 2.73.73l.53-.31c.58.46 1.22.83 1.9 1.11v.6c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-.6a8.7 8.7 0 0 0 1.9-1.11l.53.31c.95.55 2.18.22 2.73-.73l1-1.73c.55-.96.22-2.18-.73-2.73m-2.59-2.78c.11.45.17.92.17 1.38s-.06.92-.17 1.38a1 1 0 0 0 .47 1.11l1.12.65-1 1.73-1.14-.66c-.38-.22-.87-.16-1.19.14-.68.65-1.51 1.13-2.38 1.4-.42.13-.71.52-.71.96v1.3h-2v-1.3c0-.44-.29-.83-.71-.96-.88-.27-1.7-.75-2.38-1.4a1.01 1.01 0 0 0-1.19-.15l-1.14.66-1-1.73 1.12-.65c.39-.22.58-.68.47-1.11-.11-.45-.17-.92-.17-1.38s.06-.93.17-1.38A1 1 0 0 0 5.7 9.5l-1.12-.65 1-1.73 1.14.66c.38.22.87.16 1.19-.14.68-.65 1.51-1.13 2.38-1.4.42-.13.71-.52.71-.96v-1.3h2v1.3c0 .44.29.83.71.96.88.27 1.7.75 2.38 1.4.32.31.81.36 1.19.14l1.14-.66 1 1.73-1.12.65c-.39.22-.58.68-.47 1.11Z"></path>
                  </svg>
                </span>
                &nbsp;General
              </button>
              <button
                onClick={() => setSettingView("data")}
                className={`${
                  settingView === "data" && "bg-gray-800"
                } flex whitespace-nowrap text-sm flex-row md:w-full p-2 hover:bg-gray-800 active:bg-inherit rounded-xl items-center transition-all duration-100 ease-in-out`}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="size-5"
                  >
                    <path d="M12 2C7.66 2 4 3.83 4 6v12c0 2.17 3.66 4 8 4s8-1.83 8-4V6c0-2.17-3.66-4-8-4m0 2c3.68 0 5.91 1.49 6 2-.09.51-2.32 2-6 2S6.07 6.49 6 6.01C6.07 5.51 8.31 4 12 4M6 8.61C7.48 9.46 9.64 10 12 10s4.52-.55 6-1.39V10c-.07.5-2.31 2-6 2s-5.93-1.51-6-2zm0 4c1.48.85 3.64 1.39 6 1.39s4.52-.55 6-1.39V14c-.07.5-2.31 2-6 2s-5.93-1.51-6-2zM12 20c-3.69 0-5.93-1.51-6-2v-1.39c1.48.85 3.64 1.39 6 1.39s4.52-.55 6-1.39V18c-.07.5-2.31 2-6 2"></path>
                  </svg>
                </span>
                &nbsp;Data & Privacy
              </button>
              <button
                onClick={() => setSettingView("about")}
                className={`${
                  settingView === "about" && "bg-gray-800"
                } flex whitespace-nowrap items-center text-sm flex-row md:w-full p-2 hover:bg-gray-800 active:bg-inherit rounded-xl transition-all duration-100 ease-in-out`}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="size-5"
                  >
                    <path d="m17.13,5.54c-.8-2.12-2.81-3.54-5.13-3.54s-4.33,1.42-5.13,3.54c-2.74.31-4.87,2.65-4.87,5.46,0,2.07,1.18,3.95,3,4.88v2.12c0,.55.45,1,1,1h12c.55,0,1-.45,1-1v-2.12c1.82-.93,3-2.81,3-4.88,0-2.82-2.13-5.15-4.87-5.46Zm.53,8.75c-.4.14-.67.52-.67.94v1.78H7v-1.78c0-.42-.27-.8-.67-.94-1.4-.5-2.33-1.82-2.33-3.28,0-1.93,1.57-3.5,3.42-3.5.04,0,.14.01.18.02.49,0,.9-.31,1-.78.36-1.61,1.76-2.73,3.41-2.73s3.05,1.12,3.41,2.73c.1.47.51.81,1,.78.06,0,.12,0,.09-.01,1.93,0,3.5,1.57,3.5,3.5,0,1.47-.94,2.79-2.33,3.28Z"></path>
                    <path d="M5 20H19V22H5z"></path>
                  </svg>
                </span>
                &nbsp;About App
              </button>
            </div>
          </div>
          <div className="md:w-9/12 bg-gray-800 md:rounded-r-xl p-2 md:p-4 h-full overflow-y-auto">
            {/* Header */}
            <div className="flex flex-col flex-nowrap gap-y-2">
              <h3 className="text-lg">
                {settingsTitles[settingView] || "Settings"}
              </h3>
              <div className="bg-gray-500 h-[0.2px] mb-2 md:mb-0"></div>
            </div>
            {/* Setting Views */}
            {settingsComponents[settingView] || (
              <div>Choose a Setting to Preview</div>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default SiteSettings;
