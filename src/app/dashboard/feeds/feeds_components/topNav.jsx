"use client";
import React, { useState, useEffect } from "react";
import "src/app/dashboard/feeds/feeds_components/topNav.css";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Make_post from "src/app/dashboard/feeds/feeds_components/make_post.jsx";
import User_dp from "../../components/user_dp";

const ProfileMedia = [
  {
    id: 1,
    text: "Media",
    icon: <Icon icon="heroicons:photo" />,
    href: "/photo",
    color: "green",
  },
  {
    id: 3,
    text: "Document",
    icon: <Icon icon="bx:file" />,
    href: "/Articles",
    color: "purple",
  },
  {
    id: 4,
    text: "Events",
    icon: <Icon icon="uil:calender" />,
    href: "/Events",
    color: "brown",
  },
];

const TopNav = ({ makepostActive, setMakepostActive, handleMakePost }) => {
  const NavItem = ({ text, href, icon, color }) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
      const currentPath = window.location.pathname;
      setIsActive(currentPath === href);
    }, [href]);

    return (
      <Link href={href} key={text} className="media_links">
        <div className="media_Icons" id={isActive ? "active" : ""}>
          <span style={{ color }}>{icon}</span>
          <span className="mediaTxt">{text}</span>
        </div>
      </Link>
    );
  };

  return (
    <div className="postArea">
      <div className="upper">
        <div className="dp_cont">
          <User_dp />
        </div>
        <div className="postBtn_cont">
          <button
            className="searchInput"
            onClick={() => {
              setMakepostActive(true);
              handleMakePost();
            }}
          >
            Start a post
          </button>
        </div>
      </div>
      <div className="lower">
        {ProfileMedia.map((item) => {
          return (
            <div className="mediaL" key={item.id}>
              <NavItem {...item} />
            </div>
          );
        })}
      </div>
      <div className="mp_bgCont">
        <Make_post
          makepostActive={makepostActive}
          setMakepostActive={setMakepostActive}
          handleMakePost={handleMakePost}
        />
      </div>
    </div>
  );
};

export default TopNav;
