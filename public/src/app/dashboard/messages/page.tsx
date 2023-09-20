"use client";
import React, { useEffect, useState } from "react";
import "src/app/dashboard/messages/message.css";
import LeftNav from "@/app/dashboard/components/leftNav";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  Window,
  MessageList,
  ChannelHeader,
  MessageInput,
  Thread,
} from "stream-chat-react";

const userID = "6509a2af4396c5a7c810";
const chatClient = StreamChat.getInstance(
  process.env.NEXT_PUBLIC_STREAM_API_KEY!
);

chatClient.connectUser(
  {
    id: userID,
    name: "Chima",
  },
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjUwOWEyYWY0Mzk2YzVhN2M4MTAifQ.S6lQQGSpCHf2rIFIcmYAcE-5G2lzO4aqRPBYKJq4YHQ"
);

const channel = chatClient.channel("messaging", "channel_1", {
  name: "Chima",
  members: [userID],
});

const Message = () => {
  return (
    <>
      <Chat client={chatClient}>
        <Channel channel={channel}>
          <LeftNav />
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread/>
        </Channel>
      </Chat>
    </>
  );
};

export default Message;

// const chatClient = new StreamChat(userID);
