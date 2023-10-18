"use client";
import React from "react";
import NavBar from "@/components/navbar/navbar";
import { Icon } from "@iconify/react/dist/iconify.js";
import "src/app/connect/connect.css";
import Image from "next/image";
import Footer from "@/components/footer/footer";
import Slidemenu from "@/components/slideMenu/slidemenu";

const Connect = () => {
  return (
    <>
      <NavBar />
      <Slidemenu />
      <main className="connect_main">
        <div className="con_search_cont">
          <div className="inner_cont">
            <div className="con_label">Connections</div>
            <input
              type="search"
              className="con_fname"
              placeholder="First Name"
            />
            <input
              type="search"
              className="con_lname"
              placeholder="Last Name"
            />
            <button>
              <Icon icon="ic:outline-search" />
            </button>
          </div>
        </div>

        <div className="centervw">
          <div className=" con_med_img">
            <Image
              src="/home_img/Health professional team-amico 2.png"
              alt="logo"
              width={1000}
              height={1000}
              className="con_med_imgs"
            />
          </div>
        </div>

        <div className="centervw con">
          <div className="txt">
            Try searching for your fellow nurses within or outside your
            location.
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Connect;
