"use client";
import React, { useEffect, useState, useRef } from "react";
import "src/app/dashboard/components/leftNav.css";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import appwriteService from "@/appwrite/appwriteconfig";
import useAuth from "@/context/useAuth";

const sidebar_List = [
  {
    text: "Home",
    href: "/dashboard/feeds",
    icon: <Icon icon="tabler:home" />,
  },
  {
    text: "Connections",
    href: "/dashboard/connections",
    icon: <Icon icon="heroicons:user-group" />,
  },
  {
    text: "Continuing Edu.",
    href: "/dashboard/education",
    icon: <Icon icon="tabler:book" />,
  },
  {
    text: "Jobs",
    href: "/dashboard/jobs",
    icon: <Icon icon="icon-park-outline:handbag" />,
  },
  {
    text: "Messages",
    href: "/dashboard/messages",
    icon: <Icon icon="tabler:message" />,
  },
  {
    text: "Notifications",
    href: "/dashboard/notifications",
    icon: <Icon icon="mdi:bell-outline" />,
  },
  {
    text: "My Profile",
    href: "/dashboard/profile",
    icon: <Icon icon="heroicons:user" />,
  },
];

const LeftNav = () => {
  const router = useRouter();
  const { setAuthStatus } = useAuth();
 
    const logoutuser = async () => {
      try {
        appwriteService.logout();
        setAuthStatus(true);
        router.push("/login");
      } catch (error) {
        console.error(error.message);
      }
    };

  const NavItem = ({ text, href, icon }) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
      const currentPath = window.location.pathname;
      setIsActive(currentPath === href);
    }, [href]);

    return (
      <Link href={href} key={text} className="links">
        <div className="asideIcons" id={isActive ? "active" : ""} title={text}>
          <span style={{ fontSize: "1.5rem" }}>{icon}</span>
          <span className="Ltxt">{text}</span>
        </div>
      </Link>
    );
  };

  return (
    <div className="leftNavCont">
      <div className="logo">
        <Image
          src={"/RNlogo/logowhite.png"}
          height={1000}
          width={1000}
          alt="logo"
          className="logoImg"
        />
      </div>
      <div className="flex1">
        <div className="asideIcons_plate">
          {sidebar_List.map((item) => {
            return (
              <div className="dashlink" key={item.text}>
                <NavItem {...item} />
              </div>
            );
          })}
        </div>

        <div className="footer">
          <div className="asideIcons" title="Settings">
            <Icon icon="tabler:settings" />
            <span className="Ltxt">Settings</span>
          </div>
          <button
            onClick={() => logoutuser()}
            className="asideIcons"
            title="Logout"
          >
            <Icon icon="tabler:logout" />
            <span className="Ltxt">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
