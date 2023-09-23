"use client";
import { StreamChat, User } from "stream-chat";
import "stream-chat-react/dist/css/v2/index.css";
import "./layout.css";
import LeftNav from "@/app/dashboard/components/leftNav";
import {
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
  useChannelStateContext,
} from "stream-chat-react";
import { useState, useEffect } from "react";

const Users = () => {
  const { channel } = useChannelStateContext();
  const [channelUsers, setChannelUsers] = useState<Array<{ name: string; online: boolean }>>([]);

  useEffect(() => {
    const updateChannelUsers = () => {
      setChannelUsers(
        Object.values(channel.state.members).map((user) => ({
          name: user.user_id!,
          online: !!user.user!.online,
        })),
      );
    };

    updateChannelUsers();
  }, [ channel]);

  return (
    <ul className='users-list'>
      {channelUsers.map((member) => (
        <li key={member.name}>
          {member.name} - {member.online ? 'online' : 'offline'}
        </li>
      ))}
    </ul>
  );
};

const userId = "ancient-boat-3";
const userName = "Chimaobim Dike";

const user: User = {
  id: userId,
  name: userName,
};

const apiKey = "bgs3nw84u9em";
const userToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYW5jaWVudC1ib2F0LTMifQ.x4mZF65eS0eq-O6C0aGFZKTjoa2vjlhtlcbG3c2fCNY";

const chatClient = new StreamChat(apiKey);
chatClient.connectUser(user, userToken);

const channel = chatClient.channel("messaging", "custom_channel_id", {
  image: "/RNlogo/logo1.png",
  name: "Chimaobim Dike",
  members: [userId],
});

const App = () => (
  <div className="chat_div">
    <LeftNav />
    <Chat client={chatClient} theme="str-chat__theme-dark">
      
      <Channel channel={channel}>
        <Window>
          <Users />
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  </div>
);

export default App;
