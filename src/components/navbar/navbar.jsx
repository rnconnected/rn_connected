"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Login from "../buttons/loginbtn";
import Signup from "../buttons/signup";
import Image from "next/image";
import "./navbar.css";
import { Icon } from "@iconify/react/dist/iconify.js";

const MENU_LIST = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About Us",
    href: "/about",
  },
  {
    text: "Find Jobs",
    href: "/find",
  },
  {
    text: "Articles",
    href: "/articles",
  },
  {
    text: "connect",
    href: "/connect",
  },
];

const NavBar = ({}) => {
  const NavItem = ({ text, href }) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
      const currentPath = window.location.pathname;
      setIsActive(currentPath === href);
    }, [href]);

    return (
      <Link href={href}>
        <div className="navLink" id={isActive ? "active" : ""}>
          {text}
        </div>
      </Link>
    );
  };

  const prevScrollPosRef = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      const screenSize = window.innerWidth;
      const currentScrollPos = window.pageYOffset;

      if (screenSize <= 360) {
        if (currentScrollPos > prevScrollPosRef.current) {
          document.querySelector(".section").style.position = "absolute";
          document.querySelector(".section").style.top = "-5rem";
          document.querySelector(".section").style.position = "sticky";
        } else {
          document.querySelector(".section").style.position = "sticky";
          document.querySelector(".section").style.top = 0;
        }
        prevScrollPosRef.current = currentScrollPos;
      } else {
        document.querySelector(".section").style.top = 0;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="section">
        <div className="navTop">
          <div className="logo">
            <Link href="/">
              <Image
                src="/RNlogo/logo1.png"
                alt="logo"
                height={500}
                width={500}
              />
            </Link>
          </div>
          <div
            className="hamburger"
            onClick={() => {
              document.querySelector(".darkcloud").classList.add("active");
              document.querySelector(".slideMenu_cont").classList.add("active");
            }}
          >
            <Icon icon="mdi:hamburger-menu" />
          </div>
          <div className="navBottom">
            {MENU_LIST.map((menu) => {
              return (
                <div key={menu.text} className="navLinks">
                  <NavItem {...menu} />
                </div>
              );
            })}
          </div>
          <div className="btns">
            <Login />
            <Signup />
          </div>
        </div>
      </section>
    </>
  );
};

export default NavBar;
