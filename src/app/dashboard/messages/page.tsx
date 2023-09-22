"use client";
import { StreamChat, User } from "stream-chat";
import "stream-chat-react/dist/css/v2/index.css";
import {
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";

const userId = "ancient-boat-3";
const userName = "ancient-boat-3";

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
  <Chat client={chatClient} theme="str-chat__theme-darke">
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default App;
