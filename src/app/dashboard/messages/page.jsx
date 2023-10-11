/* eslint-disable @next/next/no-async-client-component */
"use client";
import { PrimitiveFilter, StreamChat, User } from "stream-chat";
import "stream-chat-react/dist/css/v2/index.css";
import "./layout.css";
import "./message.css";
import LeftNav from "@/app/dashboard/components/leftNav";
import appwriteService from "@/appwrite/appwriteconfig";
import React, { useEffect, useState } from "react";
import {
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Window,
  LoadingIndicator,
  ChannelList,
} from "stream-chat-react";
import useInitializedChatClient from "@/app/dashboard/messages/useInitializedChatClient";

const Chatpage = () => {
  const ChatClient = useInitializedChatClient();
  const [user, setUser] = useState();

  const fetchUser = async () => {
    try {
      const data = await appwriteService.getCurrentUser();
      setUser(data);
    } catch (error) {
      console.log("something went wrong", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  console.log(user);

  if (!ChatClient || !user) {
    return (
      <div>
        
        <LoadingIndicator size={100} />
      </div>
    );
  }
  return (
    
    <div className="chatpageCont">
      <LeftNav />
      <div className="chatapi">
        <Chat client={ChatClient}>
          <div className="messagerow">
          <ChannelList
            filters={{
              type: "messaging",
              members: {
                $in: [user?.$id],
              },
            }}
            sort={{ last_message_at: -1 }}
            options={{ state: true, presence: true, limit: 10 }}
          />
          <Channel>
            <Window>
              <ChannelHeader />
              <MessageList />
              <MessageInput />
            </Window>
          </Channel>
          </div>
        </Chat>
      </div>
    </div>
  );
};

export default Chatpage;
