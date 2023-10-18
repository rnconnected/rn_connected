/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import NavBar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { Icon } from "@iconify/react";
import "src/app/about/about.css";
import Image from "next/image";
import Faq from "@/app/about/faq";
import Contact from "@/app/about/contact";
import Slidemenu from "@/components/slideMenu/slidemenu";

const iconKey = [
  {
    id: 1,
    icon: <Icon icon="tabler:book-filled" />,
    h2: "Transparent",
    text: "Ut cras odio tincidunt ac vitae tincidunt morbi tincidunt tellus.",
  },
  {
    id: 2,
    icon: <Icon icon="pixelarticons:frame" />,
    h2: "Accountabilty",
    text: "Ut cras odio tincidunt ac vitae tincidunt morbi tincidunt tellus.",
  },
  {
    id: 3,
    icon: <Icon icon="fa-solid:users" />,
    h2: "Commitment",
    text: "Ut cras odio tincidunt ac vitae tincidunt morbi tincidunt tellus.",
  },
  {
    id: 4,
    icon: <Icon icon="heroicons:users-solid" />,
    h2: "Fairness",
    text: "Ut cras odio tincidunt ac vitae tincidunt morbi tincidunt tellus.",
  },
];

const patners = [
  {
    id: 1,
    img: "/about/partners/partner1.png",
  },
  {
    id: 2,
    img: "/about/partners/partner1.png",
  },
  {
    id: 3,
    img: "/about/partners/partner1.png",
  },
  {
    id: 4,
    img: "/about/partners/partner1.png",
  },
  {
    id: 5,
    img: "/about/partners/partner1.png",
  },
  {
    id: 6,
    img: "/about/partners/partner1.png",
  },
];

const About = () => {
  return (
    <div>
      <NavBar />
      <Slidemenu />
      <main>
        <div className="headIntro">
          <div className="header_bg">
            <Image
              src={"/about/icons.png"}
              height={1000}
              width={1000}
              alt=""
              className="header_img"
            />
          </div>
          <div className="All_txt">
            <div>
              <h1 className="about_us">About Us</h1>
              <div className="about_txt">
                At RN Connected, we envision a revolutionary social platform
                that brings together nurse professionals from across the globe,
                built by nurses for nurses. As nurses ourselves, we understand
                the unique challenges and opportunities that nurse professionals
                face throughout their careers.
              </div>
              <button className="explore_btn">Explore</button>
            </div>
          </div>
        </div>
        {/* this is the end of the header section xxxxxxxxxxxxxxxxxxxxx */}
        {/* this is the begining of our Vision section */}
        <div className="aim_section">
          <div className="vision_section">
            <div className="vision_left">
              <div className="txt_img">
                <Image
                  src={"/about/line.svg"}
                  height={1000}
                  width={1000}
                  alt=""
                  className="sticks"
                />
                <h1>OUR VISION</h1>
              </div>
              <div className="vision_txt txt">
                We envision a future where our platform plays a key role in
                improving the healthcare industry by bringing together the best
                and brightest Nurse professionals to share their knowledge,
                collaborate, and make a positive impact on patient care.
              </div>
            </div>
            <div className="vision_right">
              <Image
                src={"/about/Vision-img.png"}
                height={1000}
                width={1000}
                alt=""
                className="vision_img"
              />
            </div>
          </div>
        </div>
        {/* this is the end of our Vision section xxxxxxxxxxxxxxxxxxxxxxx */}
        {/* this is the begining of our mission section xxxxxxxxxxxxxxxxxxxxxx */}
        <div className="aim_section2">
          <div className="vision_section2">
            <div className="mission_left">
              <Image
                src={"/about/Mission-img.png"}
                height={1000}
                width={1000}
                alt=""
                className="vision_img"
              />
            </div>
            <div className="mission_right">
              <div className="txt_img abnormal">
                <Image
                  src={"/about/line.svg"}
                  height={1000}
                  width={1000}
                  alt=""
                  className="sticks"
                />
                <h1>OUR MISSION</h1>
              </div>
              <div className="vision_txt txt">
                Our mission is to provide a comprehensive platform that
                seamlessly integrates the best aspects of social media,
                professional networking, and healthcare job search to support
                health professionals in advancing their careers and building
                connections within the industry. We strive to create a dynamic
                community where healthcare professionals can connect with
                like-minded individuals, share their experiences and insights.
              </div>
            </div>
          </div>
        </div>
        {/* this is the end of the mission section */}
        {/* this is the video playing area */}
        <div className="video_bg">
          <div className="videobg_content">
            <div className="txt_img2">
              <Image
                src={"/about/company-line.png"}
                height={1000}
                width={1000}
                alt=""
                className="sticks"
              />
              <h1 style={{ color: "white" }}>COMPANY'S PROFILE</h1>
            </div>
            <video
              src="/anim_img/nursesbg.mp4"
              className="video"
              controls
            ></video>
          </div>
        </div>
        {/* this is the end of the video player section */}
        <div className="ourValues_section">
          <div className="values_left">
            <div className="txt_img txtimg_values">
              <Image
                src={"/about/line.svg"}
                height={1000}
                width={1000}
                alt=""
                className="sticks"
              />
              <h1>OUR VALUES</h1>
            </div>
            <div className=" txt valuesTxt">
              We envision a future where our platform plays a key role in
              improving the healthcare industry by bringing together the best
              and brightest Nurse professionals to share their knowledge,
              collaborate, and make a positive impact on patient care.
            </div>
          </div>
          <div className="right_cont">
            <div className="values_right">
              {iconKey.map((info) => {
                return (
                  <div className="values_icons" key={info.id}>
                    <h1>{info.icon}</h1>
                    <h3>{info.h2}</h3>
                    <p className="txt">{info.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* this is the end of our values section xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/}
        {/* our Partners section xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
        <div className="ourPatner_section">
          <h2>OUR PARTNERS</h2>
          <div className="patners_cont">
            {patners.map((info) => {
              return (
                <div className="patners" key={info.id}>
                  <Image
                    src={info.img}
                    width={1000}
                    height={1000}
                    alt=""
                    className="patners_img"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default About;
