import {
  Channel as StreamChatChannel,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";
import { ChannelHeader } from "../ChannelHeader";
import "src/app/dashboard/messages/components/ChannelHeader/channelHeader.css";

export const Channel = () => (
  <StreamChatChannel>
    <Window>
      <ChannelHeader />
      <div className="messageList">
        <MessageList />
      </div>
      <MessageInput focus />
    </Window>
    <Thread />
  </StreamChatChannel>
);
