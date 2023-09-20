"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

const images = [
  {
    src: "/home_img/bg.jpg",
    btn: "Join Our Community",
    info: "Leaveraging on technology our dynamic community provides the tools and resources for nurses to thrive well in their career and  personal lives.",
    btnAddress: "/signup",
  },
  {
    src: "/home_img/nursechatting.jpeg",
    btn: "Connect with nurses",
    info: "Build meaningful relationship with professionals, and ultimately contribute to the advancement of healthcare.",
    btnAddress: "/connect",
  },
  {
    src: "/home_img/searchjob.jpg",
    btn: "Find job",
    info: "RN encourages nurses to search for jobs that align with their skills and interests, and emphasizes the importance of a fulfilling Career",
    btnAddress: "/find",
  },
];

const arr = [
  { id: "hello world", txt: "fuck it" },
  { id: "hi world", txt: "suck it" },
];

function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel_cont">
      {images.map((items, index) => (
        <div
          key={index}
          style={{
            backgroundImage: `url(${items.src})`,
          }}
          className={`carousel  ${index === currentImageIndex ? "active" : ""}`}
        >
          <div className="content">
            <div className="alltxt">
              {items.info}
              <Link href={images[currentImageIndex].btnAddress}>
                <button className="joinCom">{items.btn}</button>
              </Link>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={goToPreviousImage}
        className={`carousel_prev ${currentImageIndex > 0 ? "show" : ""}`}
      >
        <Icon icon="mingcute:left-line" />
      </button>
      <button
        onClick={goToNextImage}
        className={`carousel_next ${currentImageIndex < 2 ? "show" : ""}`}
      >
        <Icon icon="mingcute:right-line" />
      </button>
    </div>
  );
}

export default Carousel;
