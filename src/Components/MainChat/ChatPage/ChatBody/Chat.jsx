import React, { useCallback, useEffect, useState } from "react";
import InputBox from "./InputBox";
import { getRecipeFromMistral } from "../../APP/AI/AI";
import AIRecipe from "../../APP/AIRecipe/AIRecipe";
import { useChatStore } from "../../../../store/useChatStore";
import ReactMarkdown from "react-markdown";

const Chat = ({ chat }) => {
  const [recipe, setRecipe] = useState(false);
  const [loading, setLoading] = useState(false);
  const updateChatResult = useChatStore((state) => state.updateChatResult);

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
