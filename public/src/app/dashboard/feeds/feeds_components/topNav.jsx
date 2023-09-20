"use client";
import React, { useState, useEffect } from "react";
import "src/app/dashboard/feeds/feeds_components/topNav.css";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";

const ProfileMedia = [
  {
    id: 1,
    text: "Photo",
    icon: <Icon icon="heroicons:photo" />,
    href: "/photo",
    color: "green",
  },
  {
    id: 2,
    text: "Video",
    icon: <Icon icon="tabler:video" />,
    href: "/video",
    color: "orange",
  },
  {
    id: 3,
    text: "Articles",
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

const TopNav = () => {
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
    <div className="topnavCont">
      <div className="upper">
        <div className="dp">
          <Image
            src="/RNlogo/logo1.png"
            alt=""
            width={500}
            height={500}
            className="dpImg"
          />
        </div>
        <div className="inputArea">
          <div className="search_Icon">
            <Icon icon="ic:round-search" />
          </div>
          <input type="search" className="searchInput" />
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
    </div>
  );
};

export default TopNav;
