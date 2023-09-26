import React, { useState, useEffect } from "react";
import "./make_post.css";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { createFeeds } from "./postCardData";
import appwriteService from '@/appwrite/appwriteconfig';

const Make_post = ({ makepostActive, setMakepostActive, handleMakePost }) => {
  const [user, setUser] = useState(null);
  const [postText, setPostText] = useState(""); // Add state to capture post text
  const [selectedFile, setSelectedFile] = useState(null); // Add state to capture selected file

  useEffect(() => {
    async function fetchUser() {
      try {
        const data = await appwriteService.getCurrentUser();
        setUser(data);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchUser();
  }, []);

  const handlePost = async () => {
    try {
      // Create a feed object with the post text and other necessary data
      const feedData = {
        text: postText,
        // Add other properties as needed, e.g., selectedFile
      };

      // Call the createFeeds function to send the document to the database
      const createdFeed = await createFeeds(feedData);

      // Optionally, reset the input fields or close the post modal
      setPostText("");
      setSelectedFile(null);

      // Call any additional handling function, if needed
      handleMakePost();
    } catch (error) {
      console.error('Error posting:', error);
    }
  };
  // Rest of your component code remains the same...
  
  return (
    user && (
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
              <div className="mp_username">{user.name}</div>
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
              value={postText} // Bind the textarea value to the state
              onChange={(e) => {
                e.target.style.height = "auto";
                e.target.style.height = e.target.scrollHeight + "px";
                setPostText(e.target.value); // Update the postText state
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
            <div className="mp_btn">
            <button onClick={handlePost}>Post</button>
            </div>
          </div>
        </div>
      </div>
    </>
    )
  );
};

export default Make_post;

