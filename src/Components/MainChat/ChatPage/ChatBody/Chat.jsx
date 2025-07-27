import React, { useEffect } from "react";
import InputBox from "./InputBox";

const Chat = ({ chat }) => {
  useEffect(() => {
    document.title = chat.chatName;
  }, [chat.chatName]);

  return (
    <div className="mt-20 pb-20">
      {/* Convo */}
      <div
        key={chat.id}
        className="chatpage font-semibold text-slate-200 flex flex-col p-4 gap-y-6"
      >
        <div className="self-end bg-slate-900 p-3 rounded-l-3xl rounded-t-3xl rounded-br-md px-4 max-w-5/6">
          {chat.ingredients?.map((ingredient, index) => (
            <span key={index} className="text-sm md:text-[15px]">
              {ingredient},&nbsp;
            </span>
          ))}
        </div>
        <div>
          <p className="text-sm md:text-[16px] font-nunito font-normal">
            {chat.result}
          </p>
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
