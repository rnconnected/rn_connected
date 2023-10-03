import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import "./comment_section.css";

const Comment_section = ({ feed }) => {
  return (
    <div className="comment_section">
      <div className="main_commentCo">
        {feed.comments.map((comment, index) => {
          return (
            <div className="main_comments" key={index}>
              <div className="commentor_img_Cont">
                <Image
                  src={comment.commentor_img}
                  alt=""
                  className="commentors_img"
                  height={500}
                  width={500}
                />
              </div>
              <div className="eachComment_wrapper">
                <div className="eachComment_section">
                  <div className="commentorName">{comment.commentor}</div>
                  <div className="commentorsComment">{comment.comment}</div>
                  <small className="comment_likesNo">
                    <span>
                      <Icon icon="fluent:heart-32-filled" className="heart" />
                    </span>
                    <span>{comment.comment_likes}</span>
                  </small>
                </div>
                <div className="eachComment_reaction">
                  <span>Like</span>
                  <span>Reply</span>
                  <span>1hr ago</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comment_section;
