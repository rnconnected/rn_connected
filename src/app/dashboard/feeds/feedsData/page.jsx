"use client";
import React, { useState, useEffect } from "react";
import "src/app/dashboard/feeds/feedsData/feeds.css";
import LeftNav from "src/app/dashboard/components/leftNav";
import TopNav from "src/app/dashboard/feeds/feeds_components/topNav.jsx";
import PostCard from "src/app/dashboard/feeds/feeds_components/postCards.jsx";
import RightNav from "src/app/dashboard/feeds/feeds_components/rightNav.jsx";
import Search_feeds from "../feeds_components/search_head";

const Profile = () => {
  const [makepostActive, setMakepostActive] = useState(false);
  const handleMakePost = () => {
    if (makepostActive) {
      document.querySelector(".mp_bgCont").classList.add("active");
    } else {
      document.querySelector(".mp_bgCont").classList.remove("active");
    }
  };

  useEffect(() => {
    handleMakePost();
  });
  return (
    <>
      <div className="pageCont">
        <div className="leftbar">
          <LeftNav />
        </div>
        <div className="otherHalf">
          <div className="top_nav">
            <Search_feeds />
          </div>
          <div className="bottomHalf">
            <div className="posts">
              <TopNav
                makepostActive={makepostActive}
                setMakepostActive={setMakepostActive}
                handleMakePost={handleMakePost}
              />
              <PostCard />
            </div>
            <div className="suggested_connect">
              <RightNav />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
