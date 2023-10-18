"use client";
import React, { useEffect, useState, useRef } from "react";
import "./slidemenu.css";
import Link from "next/link";
import Login from "../buttons/loginbtn";
import Signup from "../buttons/signup";

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

const Slidemenu = () => {
  const SlidItems = ({ text, href }) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
      const currentPath = window.location.pathname;
      setIsActive(currentPath === href);
    }, [href]);

    return (
      <Link href={href}>
        <div className="slide_navLink" id={isActive ? "active_link" : ""}>
          {text}
        </div>
      </Link>
    );
  };

  const removeSlider = () => {
    document.querySelector(".slideMenu_cont").classList.remove("active");

    setTimeout(() => {
      document.querySelector(".darkcloud").classList.remove("active");
    }, 400);
  };

  return (
    <div className="darkcloud" onClick={removeSlider}>
      <div className="slideMenu_cont ">
        <div className="slideNorth">
          <div className="cancelSlide">
            <div className="x" onClick={removeSlider}>
              X
            </div>
          </div>
          {MENU_LIST.map((menu) => {
            return (
              <div key={menu.text} className="slide_navLinks">
                <SlidItems {...menu} />
              </div>
            );
          })}
        </div>
        <div className="slideSouth">
          <Login />
          <Signup />
        </div>
      </div>
    </div>
  );
};

export default Slidemenu;
