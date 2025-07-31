import React, { useCallback, useEffect, useState } from "react";
import InputBox from "./InputBox";
import { getRecipeFromMistral } from "../../APP/AI/AI";
import AIRecipe from "../../APP/AIRecipe/AIRecipe";
import { useChatStore } from "../../../../store/useChatStore";
import ReactMarkdown from "react-markdown";

const Chat = ({ chat }) => {
  const [recipe, setRecipe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copyResult, setCopyResult] = useState(false);

  const updateChatResult = useChatStore((state) => state.updateChatResult);
  const updateChatFeedback = useChatStore((state) => state.updateChatFeedback);
  const [resultState, setResultState] = useState(chat?.response);

  const getRecipe = useCallback(async () => {
    try {
      setLoading(true);
      const recipeMarkdown = await getRecipeFromMistral(chat?.ingredients);
      setRecipe(recipeMarkdown);
      if (chat?.id) {
        updateChatResult(chat.id, recipeMarkdown);
      }
    } catch (err) {
      console.error("Error in trying to receive the recipe:", err.message);
    } finally {
      setLoading(false);
    }
  }, [chat?.id, chat?.ingredients, updateChatResult]);

  useEffect(() => {
    if (chat?.chatName) {
      document.title = chat.chatName;
    }

    if (!chat?.result && chat?.ingredients?.length) {
      getRecipe();
    }
  }, [chat, getRecipe]);

  if (!chat)
    return (
      <div className="mt-20 p-8 text-center text-white font-semibold flex justify-center items-center">
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
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          />
        </svg>
        &nbsp;Chat not found — invalid ID or chat was deleted.
      </div>
    );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(chat.result);
      setCopyResult(true);
      setTimeout(() => setCopyResult(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleFeedback = (value) => {
    const newValue = resultState === value ? null : value;
    setResultState(newValue);
    updateChatFeedback(chat.id, newValue);
  };

  return (
    <div key={chat.id} className="mt-20 pb-20 z-10">
      {/* Convo */}
      <div
        key={chat.id}
        className="chatpage font-semibold text-slate-200 flex flex-col p-4 gap-y-6 h-full"
        style={{ minHeight: "100%" }}
      >
        <div className="self-end bg-slate-800 p-3 rounded-l-3xl rounded-t-3xl rounded-br-md px-4 max-w-5/6">
          {chat.ingredients?.map((ingredient, index) => (
            <span key={index} className="text-sm md:text-[15px]">
              {ingredient},&nbsp;
            </span>
          ))}
        </div>

        <div className="p-4 z-10">
          {loading ? (
            <div className="flex justify-center items-center h-32 text-white">
              <svg
                className="animate-spin h-8 w-8 text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
              <span className="ml-3 text-sm">Generating recipe...</span>
            </div>
          ) : chat.result ? (
            <div className="prose prose-invert max-w-none text-gray-300 text-sm md:text-[16px] font-nunito">
              <ReactMarkdown>{chat.result}</ReactMarkdown>
            </div>
          ) : (
            <AIRecipe recipe={recipe} />
          )}
          {chat?.result?.trim() && (
            <div className="flex flex-row flex-nowrap my-3 mb-16 gap-x-2 items-center">
              {/* copy */}
              <div className="relative flex items-center group">
                <div>
                  {!copyResult ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      onClick={handleCopy}
                      className="size-7 cursor-pointer hover:bg-slate-700 rounded-md p-[3px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-7 cursor-pointer hover:bg-slate-700 rounded-md p-[3px]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                {!copyResult && (
                  <p className="hidden whitespace-nowrap absolute group-hover:flex top-8 bg-slate-900 border border-slate-700 px-3 rounded-md transition-all duration-500 ease-in-out">
                    Copy
                  </p>
                )}
              </div>

              {/* thumbs up */}
              <div className="relative flex items-center group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  onClick={() => handleFeedback(true)}
                  className={`${
                    resultState === true && "text-primaryColor"
                  } size-7 cursor-pointer hover:bg-slate-700 rounded-md p-[3px]`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                  />
                </svg>
                <p className="hidden absolute whitespace-nowrap group-hover:flex top-8 bg-slate-900 border border-slate-700 px-3 rounded-md transition-all duration-500 ease-in-out">
                  Good Response
                </p>
              </div>

              {/* thumbs down */}
              <div className="relative flex items-center group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  onClick={() => handleFeedback(false)}
                  className={`${
                    resultState === false && "text-primaryColor"
                  } size-7 cursor-pointer hover:bg-slate-700 rounded-md p-[3px]`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
                  />
                </svg>
                <p className="hidden absolute whitespace-nowrap group-hover:flex top-8 bg-slate-900 border border-slate-700 px-3 rounded-md transition-all duration-500 ease-in-out">
                  Bad Response
                </p>
              </div>

              {/* Regenerate */}
              <button
                disabled={loading}
                onClick={getRecipe}
                className="relative flex items-center group"
              >
                {loading ? (
                  <svg
                    className="animate-spin h-8 w-8 text-gray-200"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="5"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-7 cursor-pointer hover:bg-slate-700 rounded-md p-[3px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                )}

                <span className="hidden absolute group-hover:flex top-8 bg-slate-900 border border-slate-700 px-3 rounded-md transition-all duration-500 ease-in-out">
                  {loading ? "Regenerating" : "Regenerate"}
                </span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Input Box */}
      <div>
        <InputBox />
      </div>
    </div>
  );
};

export default Chat;
