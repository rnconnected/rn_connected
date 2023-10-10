import appwriteService from "@/appwrite/appwriteconfig";
import { useEffect, useState } from "react";
import { StreamChat } from "stream-chat";
import { env } from "@/env";

export default function useInitializedChatClient() {
  const [chatClient, setChatClient] = useState<StreamChat | null>(null);

  useEffect(() => {
    const initializeChat = async () => {
      try {
        const user = await appwriteService.getCurrentUser();

        if (!user?.$id) return;

        const client = StreamChat.getInstance(env.NEXT_PUBLIC_STREAM_KEY);

        await client.connectUser(
          {
            id: user.$id,
            name: user.name,
          },
          async () => {
            const response = await fetch("/api/get-token?userid=" + user.$id,);
            if (!response.ok) {
              throw Error("failed to get token");
            }
            const body = await response.json();
            return body.token;
          }
        );

        setChatClient(client);
      } catch (error) {
        console.error(
          "An error occurred while initializing the chat client:",
          error
        );
      }
    };

    initializeChat();

    return () => {
      if (chatClient) {
        chatClient.disconnectUser().catch((error) => {
          console.error("failed to disconnect user", error);
          console.log("Connection closed");
        });
      }
    };
  }, [chatClient]);

  return chatClient;
}
