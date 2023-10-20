'use client';

import { useEffect, useState } from 'react';

import { StreamChat, ChannelSort, ChannelFilters } from 'stream-chat';
import { ChannelList, Chat } from 'stream-chat-react';

import { Channel } from '@/app/dashboard/messages/components/Channel';
import {
  StreamTheme,
  StreamVideo,
  StreamVideoClient,
} from '@stream-io/video-react-sdk';

import { Video } from '@/app/dashboard/messages/components/Video';
import '@stream-io/video-react-sdk/dist/css/styles.css';
import '../messages/components/layout.css';
import '../messages/components/styles/index.scss';

import { User } from '@supabase/supabase-js';
import ChannelListHeader from '@/app/dashboard/messages/components/ChannelListHeader';

export default function Messages({ user }: { user: User }) {
  const apiKey = process.env.NEXT_PUBLIC_REACT_APP_STREAM_KEY || 'Set API Key';

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const chatClient = StreamChat.getInstance(apiKey);
  const [videoClient, setVideoClient] = useState<StreamVideoClient>();

  const sort: ChannelSort = { last_message_at: -1 };
  const filters: ChannelFilters = {
    type: 'messaging',
    members: { $in: [user.id] },
  };

  const chatUser = chatClient.user;

  useEffect(() => {
    console.log('user', user);
    const userId = user.id;
    fetch("/api/create-user", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: userId }),
    })
      .then(async (res) => {
        if (res.status === 200) {
          const response = await res.json();
          console.log(response);
  
          await chatClient.connectUser({ id: userId }, response.userToken);
  
          const _videoClient = new StreamVideoClient({
            apiKey,
            user: chatUser,
            token: response.userToken,
          });
  
          await _videoClient.connectUser({ id: userId }, response.userToken);
  
          setVideoClient(_videoClient);
  
          setIsLoading(false);
        } else {
          // Handle the error, e.g., show an error message
          console.error('Error in response. Status code:', res.status);
          setIsLoading(false); // You may want to set isLoading to false even in case of an error
        }
      })
      .catch((error) => {
        // Handle network or other errors
        console.error('An error occurred while fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading && (
        <div className="text-white w-full flex items-center justify-center">
          <p>Loading…</p>
        </div>
      )}
      {!isLoading && videoClient && (
        <div id="root">
          <Chat client={chatClient}>
            <StreamVideo client={videoClient}>
              <StreamTheme as="main" className="main-container">
                <div className="channel-list-container">
                  <ChannelListHeader user={chatUser} />
                  <ChannelList
                    sort={sort}
                    filters={filters}
                    showChannelSearch
                  />
                </div>
                <Channel />
                <Video />
              </StreamTheme>
            </StreamVideo>
          </Chat>
        </div>
      )}
    </>
  );
}
