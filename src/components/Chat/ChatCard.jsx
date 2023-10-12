import React from "react";
import moment from "moment";
import { People, Robot } from "react-bootstrap-icons";
import Avatar from "./Avatar";

const ChatCard = ({ messages }) => {
  return (
    <div className="w-full h-full overflow-y-auto border-2 border-b-none rounded-md rounded-b-none p-4">
      {messages.map((message, index) => (
        <div
          className={`chat ${message.sender == "BOT" ? 'chat-start' : 'chat-end'}`}
          key={index}
        >
          <Avatar
            icon={
              message.sender === "BOT" ? (
                <Robot className="w-full h-full text-gray-700" />
              ) : (
                <People className="w-full h-full text-gray-700" />
              )
            }
          />
          <div className="chat-header">
            {message.sender}
            <time className="text-xs opacity-50 ml-1">
              {moment(message.timestamp).format("HH:mm")}
            </time>
          </div>
          <div className="chat-bubble">{message.text}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatCard;

