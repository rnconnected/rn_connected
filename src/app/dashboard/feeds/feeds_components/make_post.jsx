import React from "react";
import "./make_post.css";
import Image from "next/image";
import { Icon } from "@iconify/react";

const Make_post = ({ makepostActive, setMakepostActive, handleMakePost }) => {
  return (
    <>
      <div className="make_postCont">
        <div className="make_post_top">
          <div className="mp_userDp_cont">
            <div className="mp_dp">
              <Image
                src="/RNlogo/logo1.png"
                alt="Your dp"
                height={500}
                width={500}
                className="mp_dpImg"
              />
            </div>
            <div className="mp_username_postType">
              <div className="mp_username">{"user name"}</div>
              <small>Post to everyone</small>
            </div>
          </div>
          <div
            className="mp_cancel"
            onClick={() => {
              setMakepostActive(false);
              handleMakePost();
            }}
          >
            X
          </div>
        </div>
        <div className="mp_body">
          <div className="mp_input">
            <textarea
              name=""
              id="makePost"
              cols=""
              rows="2"
              placeholder="What's on your mind?"
              onChange={(e) => {
                e.target.style.height = "auto";
                e.target.style.height = e.target.scrollHeight + "px";
              }}
            />
            <button className="emojis">
              <Icon icon="mdi:smiley-outline" />
            </button>
          </div>
          <div className="mp_icons">
            <div className="mp_icon">
              <div class="file-input-label">
                <span style={{ color: "darkgreen" }}>
                  <Icon icon="pajamas:media" />
                </span>
                <span>Media</span>
              </div>
              <input
                type="file"
                id="videoInput"
                name="videoInput"
                accept="video/*,image/* "
              />
            </div>
            <div className="mp_icon">
              <div class="file-input-label">
                <span style={{ color: "#111858" }}>
                  <Icon icon="mdi:events" />
                </span>
                <span>Event</span>
              </div>
            </div>
            <div className="mp_icon">
              <div class="file-input-label">
                <span style={{ color: "#6B4500" }}>
                  <Icon icon="ion:document-outline" />
                </span>
                <span>Document</span>
              </div>
              <input
                type="file"
                id="videoInput"
                name="videoInput"
                accept="document/*"
              />
            </div>
          </div>
          <div className="mp_post_btnCont">
            <div className="mp_btn">Post</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Make_post;
