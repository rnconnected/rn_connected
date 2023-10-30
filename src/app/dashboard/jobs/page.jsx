"use client";
import "src/app/dashboard/jobs/jobs.css";
import LeftNav from "src/app/dashboard/components/leftNav";
import "./jobs.css";
import { Icon } from "@iconify/react";
import Nav from "./jobs_components/nav";
import RightNav from "@/app/dashboard/feeds/feeds_components/components/rightNav";
import JobCard from "./jobs_components/jobcard";
import jobInfo from "@/app/find/findJob.json";

const Jobs = () => {
  return (
    <>
      <div className="job_pageCont">
        <div className="leftbar">
          <LeftNav />
        </div>
        <div className="job_otherHalf">
          <Nav/>
          <div className="filterJobs_section">
            <div className="filterJob_cont">
              <div className="select">
                <select name="Occupation" id="Occupation">
                  <option>Occupation</option>
                  <option value="ADSD">ADSD</option>
                </select>
              </div>
              <div className="select">
                <select name="job_type" id="job_type">
                  <option>Job Types</option>
                  <option value="All">All</option>
                </select>
              </div>
              <div className="select">
                <select name="location" id="location">
                  <option value="Tulsa">Location</option>
                  <option value="Tulsa">Tulsa</option>
                </select>
              </div>
              <button>
                <span>Search</span>
                <Icon icon="ic:sharp-search" />
              </button>
            </div>

            <div className="auxi_filter">
              <div className="dateposted">
                <select name="dates" id="dates">
                  <option>Date Posted</option>
                  <option value="January">January</option>
                  <option value="January">January</option>
                </select>
              </div>
              <div className="radius">
                <select name="radius" id="radius">
                  <option>Location Radius</option>
                  <option value="All">All</option>
                </select>
              </div>
            </div>
          </div>
          <div className="job_list_section">
            <div className="job_list">
              {jobInfo.map((job, index) => {
                return <JobCard key={index} jobInfo={job} />;
              })}
            </div>
            <div className="right_nav">
              <RightNav />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
