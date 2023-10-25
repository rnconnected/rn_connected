import React from "react";
import {
  Avatar,
  useChannelPreviewInfo,
  useChannelStateContext,
  useChatContext,
  useTranslationContext,
} from "stream-chat-react";
import type { ChannelResponse } from "stream-chat";
import { CreateCallButton, StreamChatType } from "../CreateCallButton";
import { Icon } from "@iconify/react/dist/iconify.js";

export type ChannelHeaderProps = {
  /** Manually set the image to render, defaults to the Channel image */
  image?: string;
  /** Show a little indicator that the Channel is live right now */
  live?: boolean;
  /** Set title manually */
  title?: string;
};

const UnMemoizedChannelHeader = (props: ChannelHeaderProps) => {
  const { image: overrideImage, live, title: overrideTitle } = props;

  const { channel, watcher_count } =
    useChannelStateContext<StreamChatType>("ChannelHeader");
  const { openMobileNav } = useChatContext<StreamChatType>("ChannelHeader");
  const { t } = useTranslationContext("ChannelHeader");
  const { displayImage, displayTitle } = useChannelPreviewInfo({
    channel,
    overrideImage,
    overrideTitle,
  });
  const { member_count, subtitle } = (channel?.data as ChannelResponse) || {};

  return (
    <div
      className="str-chat__header-livestream str-chat__channel-header"
      id="str-chat__header"
    >
      <button aria-label="Menu" onClick={openMobileNav} className="backBtn">
        <Icon icon="material-symbols:arrow-back-ios" />
      </button>

      <Avatar
        image={displayImage}
        name={displayTitle}
        shape="rounded"
        size={channel?.type === "commerce" ? 60 : 40}
      />
      <div className="str-chat__header-livestream-left str-chat__channel-header-end">
        <p className="str-chat__header-livestream-left--title str-chat__channel-header-title">
          {displayTitle}{" "}
          {live && (
            <span className="str-chat__header-livestream-left--livelabel">
              {t<string>("live")}
            </span>
          )}
        </p>
        {!!subtitle && (
          <p className="str-chat__header-livestream-left--subtitle">
            {t<string>("{{ subtitle }}", {
              subtitle: subtitle,
            })}
          </p>
        )}
        <p className="str-chat__header-livestream-left--members str-chat__channel-header-info">
          {!live && !!member_count && member_count > 0 && (
            <>
              {/* {member_count === 1
                ? t("offline")
                : t("{{ memberCount }} members", {
                    memberCount: member_count,
                  })}
              , */}
            </>
          )}

          <>
            {watcher_count === 2
              ? t("online")
              : t("offline", {
                  watcherCount: watcher_count,
                })}
          </>
        </p>
      </div>
      <CreateCallButton />
    </div>
  );
};

/**
 * The ChannelHeader component renders some basic information about a Channel.
 */
export const ChannelHeader = React.memo(
  UnMemoizedChannelHeader
) as typeof UnMemoizedChannelHeader;
