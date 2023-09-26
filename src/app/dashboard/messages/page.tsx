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

const userId = "650f07ea901515c754ed";
const ChatClient = StreamChat.getInstance(process.env.NEXT_PUBLIC_STREAM_KEY!);

ChatClient.connectUser(
  {
    id: "650f07ea901515c754ed",
    name: "Chima anupkorunku",
  },
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjUwZjA3ZWE5MDE1MTVjNzU0ZWQifQ.SCB58-VbUMiHADtzZPbq4WLcmVVmp5KvsIRyTO4W4qA"
);

const channel = ChatClient.channel("messaging", "chanel_1", {
  name: "chanel_1",
  members: [userId],
});

const Chatpage = () => {
  return (
    <div className="chatpageCont">
      <LeftNav />
      <div className="chatapi">
        <Chat client={ChatClient}>
          <Channel channel={channel}>
            <Window>
              <ChannelHeader />
              <MessageList />
              <MessageInput />
            </Window>
          </Channel>
        </Chat>
      </div>
    </div>
  );
};

export default Chatpage;
