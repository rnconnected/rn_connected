"use client";
import React, { useEffect, useState } from "react";
import NavBar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import Find_header from "./header";
import "src/app/find/find.css";
import LoadJob from "@/components/load effects/loadjob";
import jobs from "./findJob.json";
import ViewJob from "src/app/find/viewjob.jsx";
import { Icon } from "@iconify/react/dist/iconify.js";
import JobCard from "./job_cards";

function displayArrayInPairs(array, pairIndex) {
  const startIndex = pairIndex * 6;
  const pair = array.slice(startIndex, startIndex + 6);
  return pair;
}

const Page = () => {
  let mainPair = 0;
  const numOfPairs = jobs.length / 6;
  if (!Number.isInteger(numOfPairs)) {
    mainPair = Math.floor(numOfPairs) + 1;
  } else {
    mainPair = numOfPairs;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [present, setPresent] = useState(1);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [tenseNum, setTenseNum] = useState([]);

  const tenseFunction = () => {
    const tenses = document.querySelectorAll(".tense");
    tenses.forEach((tense) => {
      if (tense.innerHTML == present) {
        tense.classList.add("active");
      } else {
        tense.classList.remove("active");
      }
    });
  };

  useEffect(() => {
    for (let i = 1; i <= mainPair; i++) {
      setTenseNum((prevTenseNum) => [...prevTenseNum, i]);
    }
  }, [mainPair]);

  const handleLoad = () => {
    const loadOverlay = document.querySelector(".loadOverlay");
    loadOverlay.classList.add("active");
    setTimeout(() => {
      loadOverlay.classList.remove("active");
    }, 500);
  };

  useEffect(() => {
    if (present >= mainPair) {
      setPresent(mainPair);
      document.querySelector(".nextBtn").style.display = "none";
    } else {
      document.querySelector(".nextBtn").style.display = "flex";
    }
    if (present <= 1) {
      setPresent(1);
      document.querySelector(".prevBtn").style.display = "none";
    } else {
      document.querySelector(".prevBtn").style.display = "flex";
    }

    tenseFunction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [present, mainPair]);
  const jobCards = displayArrayInPairs(jobs, present - 1);

  const [viewJob_specs, setViewJob_specs] = useState({});
  const [showViewJob, setShowViewJob] = useState(false);

  const getFirstElementWithClassName = (nodeList, className) => {
    for (let i = 0; i < nodeList.length; i++) {
      if (nodeList[i].classList.contains(className)) {
        nodeList[i].classList.remove(className);
      }
    }
    return null;
  };

  const containsClassName = (nodeList, className) => {
    for (let i = 0; i < nodeList.length; i++) {
      if (nodeList[i].classList.contains(className)) {
        nodeList[i].classList.remove("active");
      }
    }
    return false;
  };

  return (
    <>
      <NavBar />
      <Find_header />
      <div className="jobContainer">
        <div className="jobCard_section">
          <div className="numberOfJobs">
            <div className="number_of_availableJobs">
              <h2>483+ available jobs</h2>
              <Icon icon="ant-design:down-outlined" className="downIcon" />
            </div>
          </div>

          <div className="jobsContainer">
            {jobCards.map((job) => {
              return (
                <JobCard
                  key={job.id}
                  jobAge={job.jobAge}
                  jobPosition={job.jobPosition}
                  jobDescription={job.jobDescription}
                  jobDetails={job.jobDetails}
                  jobLocation={job.jobLocation}
                  HospitalName={job.HospitalName}
                  howLong_ago={job.howLongAgo}
                  requirementList={job.requirementList}
                  dutyList={job.dutyList}
                  certifications={job.certifications}
                  startDate={job.startDate}
                  deadline={job.deadline}
                  salary={job.salary}
                  viewJob_specs={viewJob_specs}
                  setViewJob_specs={setViewJob_specs}
                  showViewJob={showViewJob}
                  setShowViewJob={setShowViewJob}
                  containsClassName={containsClassName}
                />
              );
            })}
          </div>
        </div>
        {showViewJob ? (
          <div className="viewJobSection">
            <ViewJob viewJob_specs={viewJob_specs} />
          </div>
        ) : null}
      </div>
      <div className="nextPage">
        <div className="nextBtn_cont">
          <div
            className="prevBtn"
            onClick={() => {
              handleLoad();
              setPresent(present - 1);
            }}
          >
            <Icon icon="mingcute:left-line" />
          </div>
          <div className="tenseCont">
            {tenseNum.map((tense, index) => {
              return (
                <React.Fragment key={`tense_${tense}_${index}`}>
                  <small className="past tense">{tense}</small>
                </React.Fragment>
              );
            })}
          </div>
          <div
            className="nextBtn"
            onClick={() => {
              handleLoad();
              setPresent(present + 1);
            }}
          >
            <Icon icon="mingcute:right-line" />
          </div>
        </div>
      </div>
      <div className="loadOverlay">
        <LoadJob />
      </div>

      <Footer />
    </>
  );
};

export default Page;
