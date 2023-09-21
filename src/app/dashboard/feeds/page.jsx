"use client";

import React, { useState, useEffect } from "react";
import "src/app/dashboard/feeds/feeds.css";
import LeftNav from "src/app/dashboard/components/leftNav";
import TopNav from "src/app/dashboard/feeds/feeds_components/topNav.jsx";
import PostCard from "src/app/dashboard/feeds/feeds_components/postCards.jsx";
import RightNav from "src/app/dashboard/feeds/feeds_components/rightNav.jsx";
// import appwriteService from "@/appwrite/appwriteconfig";
// import useAuth from "@/context/useAuth";
import Login from "@/app/login/page";

const Profile = () => {


  return (

    <>
     
        <div className="pageCont">
          <div className="leftbar">
            <LeftNav />
          </div>
          <div className="otherHalf">
            <div className="top_nav">
              <TopNav />
            </div>
            <div className="bottomHalf">
              <div className="posts">
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
