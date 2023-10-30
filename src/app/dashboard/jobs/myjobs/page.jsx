/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import LeftNav from "../../components/leftNav";
import Nav from "../jobs_components/nav";
import "src/app/dashboard/jobs/myjobs/myjobs.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import jobInfo from "@/app/find/findJob.json";
import Jobcard from "../jobs_components/jobcard";

const myjobCategory = [
  { category: "Saved" },
  { category: "In progress" },
  { category: "Applied" },
];

const filtered = [
  {
    dp: "dp",
    position: "job position",
    hospital: "Riverside Hospital",
    location: "Los Angeles",
    status: "Not available anymore",
  },
  {
    dp: "dp",
    position: "job position",
    hospital: "Riverside Hospital",
    location: "San francisco",
    status: "Not available anymore",
  },
  {
    dp: "dp",
    position: "job position",
    hospital: "Merseyside Hospital",
    location: "Liverpool",
    status: "Currently accepting applications",
  },
];

const filtered_card = (filtered) => {
  return (
    <div className="filtered_card">
      <div className="f_pics">{filtered.dp}</div>
      <div className="f_details">
        <div className="position_name">{filtered.position}</div>
        <div className="hospital_name">{filtered.hospital}</div>
        <div className="location">{filtered.location}</div>
        <div className="status">{filtered.status}</div>
      </div>
      <div className="menu">
        <Icon icon="ic:round-menu" />
      </div>
    </div>
  );
};

const employer = [
  {
    dp: "dp",
    name: "Harry Potter",
    postion: "Nurse Educator",
    hospital: "Riverside Hospital",
    rating: 0,
  },
  {
    dp: "dp",
    name: "Carlo Ancelloti",
    postion: "job position",
    hospital: "Merseyside Hospital",
    rating: 0,
  },
  {
    dp: "dp",
    name: "Pep Guadiola",
    postion: "Nurse Educator",
    hospital: "Riverside Hospital",
    rating: 0,
  },
  {
    dp: "dp",
    name: "Carlo Ancelloti",
    postion: "job position",
    hospital: "Merseyside Hospital",
    rating: 0,
  },
];

const employer_card = () => {
  return (
    <div className="employer_card">
      <div className="e_pics">{employer.dp}</div>
      <div className="e_details">
        <div className="name">{employer.name}</div>
        <div className="postion">{employer.postion}</div>
        <div className="hospital">{employer.hospital}</div>
        <div className="rating">{employer.rating}</div>
      </div>
    </div>
  );
}

const Myjob = () => {
  return (
    <>
      <div className="job_pageCont" id="myjob_pageCont">
        <div className="leftbar">
          <LeftNav />
        </div>
        <div className="job_otherHalf">
          <Nav />
          <div className="myJobs_main">
            <div className="myjobs_Section">
              {/* this is the filter section */}
              <div className="filterCont">
                {/* this is the filter header section */}
                <div className="filters_header">
                  {myjobCategory.map((item, index) => {
                    return (
                      <div className="filter" key={index}>
                        {item.category}
                      </div>
                    );
                  })}
                </div>

                {/* this is the filter result section */}
                <div className="filtered_result">
                  {filtered.map((item, index) => {
                    return <div key={index}>{filtered_card(item)}</div>;
                  })}
                </div>
              </div>

              {/* this is the recommended job section */}
              <div className="recommended_jobCont">
                <h2>Recommended Jobs for you</h2>
                <small>
                  Jobs are recommended for you based on your profile and
                  searches
                </small>

                <div className="recommended_jobs">
                  {jobInfo.map((job, index) => {
                    return <Jobcard key={index} jobInfo={job} />;
                  })}
                </div>
              </div>
            </div>
            <div className="myJobs_aside">
              <h3>Employer's Review</h3>
              <div className="employers_review"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Myjob;
