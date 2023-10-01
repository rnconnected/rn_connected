import React, { useEffect, useState } from "react";
import { getFeeds } from "./postCardData";
import Image from "next/image";
import { Icon } from "@iconify/react";
import "src/app/dashboard/feeds/feeds_components/postCards.css";

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

  const fetchData = async () => {
    try {
      const data = await getFeeds();
      console.log(data);
      setFeeds(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Initial data fetch when the component mounts

    const intervalId = setInterval(() => {
      fetchData(); // Fetch data every 5 seconds (adjust the interval as needed)
    }, 5000);

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const handleLikeClick = (postId) => {
    setLikeStates((prevLikeStates) => ({
      ...prevLikeStates,
      [postId]: !prevLikeStates[postId] || false,
    }));
  };

  return (
    // <div>
    //   {feeds.map((feed) => (
    //     <div key={feed.id}>{feed.text}</div>
    //   ))}
    // </div>

    <>
      {feeds.map((feed) => {
        const postId = feed.id;
        const isLiked = likeStates[postId] || false;
        return (
          <div key={feed.id} className="post_Card">
            <div className="posters_Header">
              <div className="posters_data">
                <div className="posters_img_Cont">
                  {/* <Image
                    src={feed.poster_dp}
                    height={500}
                    width={500}
                    alt=""
                    className="posters_img"
                  /> */}
                </div>
                <div className="posters_infoTxt">
                  <div className="name">{feed.Username}</div>
                  {/* <div className="position_role">{feed.poster_position}</div> */}
                  <div className="datePosted">{calculateTimeDifference(feed.$createdAt)}</div>
                </div>
              </div>
              <div className="menu_btnRight">
                <div className="menuBtn">
                  <Icon icon="ci:hamburger-md" />
                </div>
                {/* <div className="friend_Status">{feed.connection_status}</div> */}
              </div>
            </div>
            <div className="posters_words">{feed.text}</div>
            <div className="postImages">
              {/* {feed.image_post.map((img) => {
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
              })} */}
            </div>
            <div className="reactions">
              <div className="like_Section">
                <div className="likes">
                  <span className="react_icon">
                    <Icon icon="fluent:heart-32-filled" className="heart" />
                  </span>
                  {/* <span className="likeNo">
                    {isLiked
                      ? "you and " + (feed.likes_num - 1) + " others"
                      : feed.likes_num}
                  </span> */}
                </div>
              </div>
              <div className="react_Left">
                {/* <div className="comment_no">
                  {feed.comments.length} comments
                </div> */}
                {/* <Icon icon="mdi:dot" /> */}
                {/* <div className="shares_no"> {feed.repost_num} repost</div> */}
              </div>
            </div>
            {/* <div className="reaction_Icons">
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
              <div className="comment_icon">
                <Icon icon="iconamoon:comment-dots" className="Ricon" />
                <span>Comment</span>
              </div>
              <div className="repost">
                <Icon icon="bx:repost" className="Ricon" />
                <span>Repost</span>
              </div>
            </div> */}
            {/* this is the comment section */}
            <div className="comment_section">
              <div className="main_commentCo">
                <div className="main_comments">
                  <div className="commentor_img_Cont">
                    {/* <Image
                      src={feed.poster_dp}
                      height={500}
                      width={500}
                      alt=""
                      className="commentors_img"
                    /> */}
                  </div>
                  <div className="eachComment_wrapper">
                    <div className="eachComment">
                      Lorem ipsum dolor sit amet consect adipisicing elit.{" "}
                    </div>
                    <div className="eachComment_reaction">
                      <span>Like</span>
                      <span>Reply</span>
                      <span>1hr ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="post_comment">
                <div className="commentor_img_Cont">
                  {/* <Image
                    src={feed.poster_dp}
                    height={500}
                    width={500}
                    alt=""
                    className="commentors_img"
                  /> */}
                </div>
                <div className="dunno">
                  <textarea
                    name="comment"
                    className="comment_input"
                    cols=""
                    rows="1"
                    placeholder="Add a comment..."
                    onChange={(e) => {
                      e.target.style.height = "auto";
                      e.target.style.height = e.target.scrollHeight + "px";
                    }}
                  ></textarea>
                  <div className="comment_bottom">
                    <div className="emojiApi">
                      <div className="emoji">
                        <Icon icon="la:smile" className="Ricon" />
                      </div>
                      <div className="uploadimg">
                        <label htmlFor="upload">
                          <Icon icon="carbon:image" className="Ricon" />
                        </label>
                        <input type="file" accept="image/*" id="upload" />
                      </div>
                    </div>
                    <span>
                      <Icon icon="fluent:send-32-regular" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* this is the end of the comment section */}
          </div>
        );
      })}
    </>
  );
}

//   return (
//     <>
//       {post_Card.map((info) => {
//         const postId = feed.id;
//         const isLiked = likeStates[postId] || false;
//         return (
//           <div key={info.id} className="post_Card">
//             <div className="posters_Header">
//               <div className="posters_data">
//                 <div className="posters_img_Cont">
//                   <Image
//                     src={info.poster_dp}
//                     height={500}
//                     width={500}
//                     alt=""
//                     className="posters_img"
//                   />
//                 </div>
//                 <div className="posters_infoTxt">
//                   <div className="name">{info.poster_name}</div>
//                   <div className="position_role">{info.poster_position}</div>
//                   <div className="datePosted"> 2hrs ago</div>
//                 </div>
//               </div>
//               <div className="menu_btnRight">
//                 <div className="menuBtn">
//                   <Icon icon="ci:hamburger-md" />
//                 </div>
//                 <div className="friend_Status">{info.connection_status}</div>
//               </div>
//             </div>
//             <div className="posters_words">{info.posters_txt}</div>
//             <div className="postImages">
//               {info.posted_img.map((img) => {
//                 return (
//                   <Image
//                     key={img.id}
//                     src={img}
//                     height={1000}
//                     width={1000}
//                     alt=""
//                     className="post_img"
//                   />
//                 );
//               })}
//             </div>
//             <div className="reactions">
//               <div className="like_Section">
//                 <div className="likes">
//                   <span className="react_icon">
//                     <Icon icon="fluent:heart-32-filled" className="heart" />
//                   </span>
//                   <span className="likeNo">
//                     {isLiked
//                       ? "you and " + (info.likes_num - 1) + " others"
//                       : info.likes_num}
//                   </span>
//                 </div>
//               </div>
//               <div className="react_Left">
//                 <div className="comment_no">
//                   {info.comments.length} comments
//                 </div>
//                 <Icon icon="mdi:dot" />
//                 <div className="shares_no"> {info.repost_num} repost</div>
//               </div>
//             </div>
//             <div className="reaction_Icons">
//               <div
//                 className={"like_icon" + (isLiked ? " liked" : "")}
//                 onClick={() => {
//                   handleLikeClick(postId);
//                   isLiked ? (info.likes_num -= 1) : (info.likes_num += 1);
//                 }}
//               >
//                 {isLiked ? (
//                   <Icon icon="fluent:heart-32-filled" className="heart" />
//                 ) : (
//                   <Icon icon="tabler:heart" className="Ricon" />
//                 )}
//                 <span>Like</span>
//               </div>
//               <div className="comment_icon">
//                 <Icon icon="iconamoon:comment-dots" className="Ricon" />
//                 <span>Comment</span>
//               </div>
//               <div className="repost">
//                 <Icon icon="bx:repost" className="Ricon" />
//                 <span>Repost</span>
//               </div>
//             </div>
//             {/* this is the comment section */}
//             <div className="comment_section">
//               <div className="main_commentCo">
//                 <div className="main_comments">
//                   <div className="commentor_img_Cont">
//                     <Image
//                       src={info.poster_dp}
//                       height={500}
//                       width={500}
//                       alt=""
//                       className="commentors_img"
//                     />
//                   </div>
//                   <div className="eachComment_wrapper">
//                     <div className="eachComment">
//                       Lorem ipsum dolor sit amet consect adipisicing elit.{" "}
//                     </div>
//                     <div className="eachComment_reaction">
//                       <span>Like</span>
//                       <span>Reply</span>
//                       <span>1hr ago</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="post_comment">
//                 <div className="commentor_img_Cont">
//                   <Image
//                     src={info.poster_dp}
//                     height={500}
//                     width={500}
//                     alt=""
//                     className="commentors_img"
//                   />
//                 </div>
//                 <div className="dunno">
//                   <textarea
//                     name="comment"
//                     className="comment_input"
//                     cols=""
//                     rows="1"
//                     placeholder="Add a comment..."
//                     onChange={(e) => {
//                       e.target.style.height = "auto";
//                       e.target.style.height = e.target.scrollHeight + "px";
//                     }}
//                   ></textarea>
//                   <div className="comment_bottom">
//                     <div className="emojiApi">
//                       <div className="emoji">
//                         <Icon icon="la:smile" className="Ricon" />
//                       </div>
//                       <div className="uploadimg">
//                         <label htmlFor="upload">
//                           <Icon icon="carbon:image" className="Ricon" />
//                         </label>
//                         <input type="file" accept="image/*" id="upload" />
//                       </div>
//                     </div>
//                     <span>
//                       <Icon icon="fluent:send-32-regular" />
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* this is the end of the comment section */}
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default PostCard;
