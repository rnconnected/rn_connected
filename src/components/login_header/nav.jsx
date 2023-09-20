import React from "react";
import Link from "next/link";
import Image from "next/image";
import "src/components/login_header/nav.css";

const Nav = () => {
  return (
    <>
      <div className="nav">
        <Link href="/" id="logoDiv">
          <Image
            src="/RNlogo/logo1.png"
            alt="logo"
            width="100"
            height="100"
            id="logo"
          />
        </Link>
        <div id="homeDiv">
          <Link href="/">
            <button className="homeBtn">Home</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
