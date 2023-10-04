import React, { useEffect, useState } from "react";
import { getFeeds } from "./postCardData";
import Image from "next/image";
import "src/app/dashboard/feeds/feeds_components/postCards.css";
import { Icon } from "@iconify/react";
import post_Card from "./postCards.json";
import Commentbtn from "@/app/dashboard/feeds/feeds_components/pc_component/commentbtn";
import Sharebtn from "@/app/dashboard/feeds/feeds_components/pc_component/pc_sharebtn";
import Comment_section from "./pc_component/comment_section";
import Comment_input from "./pc_component/input_comment";

export default function PostFeed() {
  const [likeStates, setLikeStates] = useState({});
  const [feeds, setFeeds] = useState([]);

  const calculateTimeDifference = (timestamp) => {
    const currentDate = new Date();
    const feedDate = new Date(timestamp);
    const timeDifference = Math.floor((currentDate - feedDate) / (1000 * 60));

    if (timeDifference < 60) {
      return `${timeDifference} minutes ago`;
    } else {
      const hoursDifference = Math.floor(timeDifference / 60);
      return `${hoursDifference} hours ago`;
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getFeeds();
        console.log(data);
        setFeeds(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const handleLikeClick = (postId) => {
    setLikeStates((prevLikeStates) => ({
      ...prevLikeStates,
      [postId]: !prevLikeStates[postId] || false,
    }));
  };

  const [commentActive, setCommentActive] = useState(false);

  return (
    <>
      {post_Card.map((feed, index) => {
        const postId = feed.id;
        const isLiked = likeStates[postId] || false;
        return (
          <div
            className={`activePost_overlay ${commentActive ? "active" : ""}`}
            key={index}
          >
            <div className={`postCard_cont ${commentActive ? "active" : ""}`}>
              <div
                className={`postCard_activeHeader ${
                  commentActive ? "active" : ""
                }`}
              >
                <div className="posters_name_header">
                  {feed.poster_name + "'s" + " Post"}
                </div>
                <span
                  className="close_active_PostBtn"
                  onClick={() => setCommentActive(false)}
                >
                  X
                </span>
              </div>
              <div className={`scrollable ${commentActive ? "active" : ""}`}>
                <div className={`post_Card ${commentActive ? "active" : ""}`}>
                  <div className="posters_Header">
                    <div className="posters_data">
                      <div className="posters_img_Cont">
                        <Image
                          src={feed.poster_dp}
                          height={500}
                          width={500}
                          alt=""
                          className="posters_img"
                        />
                      </div>
                      <div className="posters_infoTxt">
                        <div className="name">{feed.poster_name}</div>
                        <div className="position_role">
                          {feed.poster_position}
                        </div>
                        <div className="datePosted">
                          {calculateTimeDifference(feed.$createdAt)}
                        </div>
                      </div>
                    </div>
                    <div className="menu_btnRight">
                      <div className="menuBtn">
                        <Icon icon="ci:hamburger-md" />
                      </div>
                      <div className="friend_Status">
                        {feed.connection_status}
                      </div>
                    </div>
                  </div>
                  <div className="posters_words">{feed.text}</div>
                  <div className="postImages">
                    {feed.posted_img.map((img) => {
                      return (
                        <Image
                          key={img.id}
                          src={img}
                          height={1000}
                          width={1000}
                          alt=""
                          className="post_img"
                        />
                      );
                    })}
                  </div>
                  <div className="reactions">
                    <div className="like_Section">
                      <div className="likes">
                        <span className="react_icon">
                          <Icon
                            icon="fluent:heart-32-filled"
                            className="heart"
                          />
                        </span>
                        <span className="likeNo">
                          {isLiked
                            ? "you and " + (feed.likes_num - 1) + " others"
                            : feed.likes_num}
                        </span>
                      </div>
                    </div>
                    <div className="react_Left">
                      <div className="comment_no">
                        {feed.comments.length} comments
                      </div>
                      <Icon icon="mdi:dot" />
                      <div className="shares_no"> {feed.repost_num} repost</div>
                    </div>
                  </div>
                  <div className="reaction_Icons">
                    <div
                      className={"like_icon" + (isLiked ? " liked" : "")}
                      onClick={() => {
                        handleLikeClick(postId);
                        isLiked ? (feed.likes_num -= 1) : (feed.likes_num += 1);
                      }}
                    >
                      {isLiked ? (
                        <Icon icon="fluent:heart-32-filled" className="heart" />
                      ) : (
                        <Icon icon="tabler:heart" className="Ricon" />
                      )}
                      <span>Like</span>
                    </div>
                    <Commentbtn setCommentActive={setCommentActive} postId={postId} />
                    <Sharebtn />
                  </div>
                  {/* this is the comment section */}
                  <Comment_section feed={feed} commentActive={commentActive} />
                  {/* this is the end of the comment section */}
                </div>
              </div>
              <div className={`commentInput  ${commentActive ? "active" : ""}`}>
                <Comment_input feed={feed} />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
