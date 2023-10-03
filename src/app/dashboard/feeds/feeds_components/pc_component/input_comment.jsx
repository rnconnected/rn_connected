import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import "./input_comment.css";

const Comment_input = (feed) => {
  return (
    <>
      <div className="post_comment">
        <div className="commentor_img_Cont">
          <Image
            src={feed.poster_dp}
            height={500}
            width={500}
            alt=""
            className="commentors_img"
          />
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
              <Icon icon="fluent:send-32-regular" className="Ricon" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment_input;
