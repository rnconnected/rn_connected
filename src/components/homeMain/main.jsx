"use client";
import "./main.css";
import Image from "next/image";
import Link from "next/link";
import Search_job from "./search_job";
import Carousel from "@/components/homeMain/carosel";

const Main = () => {
  const explore_btn = [
    "christianity",
    "confucious",
    "fitness programm",
    "Awakening",
    "Time management",
    "fermentum amet",
    "alot going on",
    "Stress management",
    "see all",
  ];

  const find_jobs = [
    "Nurse Educator",
    "Midwifery",
    "Nurse Educator",
    "surgeon assistant",
    "Student",
    "Nursing Practioner",
    "Nurse Educator",
    "Midwifery",
    "Nurse Educator",
    "Midwifery",
  ];
  return (
    <>
      <main>
        <Carousel />
        <div className="searchJob">
          <div className="searchJob_cont">
            <Search_job />
          </div>
        </div>

        {/* another section entirely xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/}
        <div className="med_prof">
          <div className="med_img">
            <Image
              src="/home_img/Group 68.png"
              alt="none"
              height={1000}
              width={1000}
              className="med_imgs"
            />
          </div>
          <div className="medprof_txt">
            <h2 className="med_h2">
              Are you a nurse trying to find a professional community to build
              your career?
            </h2>
            <div className="medTxt txt">
              Rn focuses on fostering a strong sense of community among
              healthcare professionals. Thereby, empowering them to make
              informed decisions about their career and also build meaningful
              relationship with other professionals.
            </div>
          </div>
        </div>

        <section className="areYou">
          <div className="areyou_txt">
            <h2>Are you an employer?</h2>
            <h3>
              You can post job and recruit nurses based on your preference.
            </h3>
          </div>
          <button className="postJob_btn">Post a job</button>
        </section>

        <section className="nurse_icons">
          <div className="nurseIcon_cont">
            <div className="nurse_plus">
              <Image
                src="/home_img/Health professional team-amico 2.png"
                alt="none"
                height={1000}
                width={1000}
                className="nurse_plus_img"
              />
              <div className="plus_txt">Make connections with other nurses</div>
              <div className="ttcont">
                <Link href={"/signup"}>
                  <button className="plus_btn">Connect Now</button>
                </Link>
              </div>
            </div>
            <div className="nurse_desk">
              <Image
                src="/home_img/Doctor-amico 1.png"
                alt="none"
                height={1000}
                width={1000}
                className="nurse_desk_img"
              />
              <div className="plus_txt">Make connections with other nurses</div>
              <div className="ttcont">
                <Link href={"/find"}>
                  <button className="plus_btn">Find Jobs</button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="explore">
          <div className="explore_left">
            <h2>Explore Rn Connected Articles</h2>
            <div>
              Lorem ipsum dolor sit amet consectetur. Sit fermentum amet aliquam
              faucibus diam sit ipsum. Lorem ipsum dolor sit amet consectetur.
              Sit fermentum amet aliquam faucibus diam sit ipsum. Lorem ipsum
              dolor sit amet consectetur.
            </div>
          </div>
          <div className="explore_right">
            {explore_btn.map((item) => {
              return (
                <button key={item} className="expBtn">
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        <div className="youcan">
          <div className="youcan_L">
            <h2>
              You can find the right job or internship role that best suits your
              preference
            </h2>
            <div className="jobs_balls">
              {find_jobs.map((item) => {
                return (
                  <button key={item} className="expBtn balls">
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="youcan_R">
            <div className="uucont">
              <Image
                src="/home_img/Group 67.png"
                height={1000}
                width={1000}
                alt="nothing"
                className="curved_img"
              />
            </div>
          </div>
        </div>

        <div className="resumeSection">
          <Image
            className="resumeImg"
            src={"/home_img/resume.jpg"}
            alt="resume"
            width={500}
            height={500}
          />
          <div className="resumeRight">
            <div className="resumeTxt">
              <h1>Create nice resume with our resume templates</h1>
              <p>
                We will help you create a good resume that fits your job
                description
              </p>
            </div>
            <Link href={"/signup"}>
              <button className="resumeBtn">Get started</button>
            </Link>
          </div>
        </div>
        <div className="startJourney">
          <div className="jcont">
            <h2>Start your journey with us</h2>
            <div className="journeyTxt txt">
              Lorem ipsum dolor sit amet consectetur. Tortor lectus consectetur
              feugiat ornare. Hendrerit eleifend dolor condimentum scelerisque.
              Auctor luctus hendrerit cras pretium nibh nisi. Feugiat volutpat
              euismod purus sodales mi aenean proin sollicitudin.
            </div>
            <Link href={"/signup"}>
              <button className="resumeBtn">Get started</button>
            </Link>
          </div>

          <Image
            src="/home_img/start.png"
            height={1000}
            width={1000}
            alt="journey"
            className="journey_img"
          />
        </div>
      </main>
    </>
  );
};

export default Main;
