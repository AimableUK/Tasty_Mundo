import React, { useEffect } from "react";
import InputBox from "./InputBox";

const Chat = ({ chat }) => {
  useEffect(() => {
    document.title = chat.chatName;
  }, [chat.chatName]);

  return (
    <div>
      {/* Convo */}
      <div
        key={chat.id}
        className="font-semibold text-slate-200 flex flex-col p-4 gap-y-6"
      >
        <div className="self-end bg-slate-900 p-3 rounded-l-3xl rounded-t-3xl rounded-br-md px-4 max-w-5/6 text-end text-wrap">
          {chat.ingredients?.map((ingredient, index) => (
            <span key={index} className="">
              {ingredient},&nbsp;
            </span>
          ))}
        </div>
        <div>{chat.result}</div>
      </div>

      {/* Input Box */}
      <div>
        <InputBox />
      </div>
    </div>
  );
};

export default Chat;
