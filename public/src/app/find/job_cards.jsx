/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import "src/app/find/find.css";

const JobCard = ({
  jobAge,
  jobPosition,
  jobDescription,
  jobDetails,
  jobLocation,
  HospitalName,
  howLong_ago,
  requirementList,
  dutyList,
  startDate,
  deadline,
  viewJob_specs,
  setViewJob_specs,
  certifications,
  salary,
  showViewJob,
  setShowViewJob,
  containsClassName,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [isJobcardActive, setIsJobcardActive] = useState(false);

  const handleViewJob = () => {
    if (showViewJob) {
      document.querySelector(".jobCard_section").classList.add("flex5050");
    } else {
      document.querySelector(".jobCard_section").classList.remove("flex5050");
    }
  };

  useEffect(() => {
    handleViewJob();
  }, [showViewJob]);

  // const toggleActiveClass = () => {
  //   setIsActive(!isActive);
  // };

  // const hasActiveClassName = () => {
  //   const elements = document.querySelectorAll(".jobCard");

  //   elements.forEach((element) => {
  //     element.classList.contains("active")
  //       ? element.classList.remove("active")
  //       : null;
  //   });
  // };

  const handleClick = (e) => {
    setViewJob_specs({
      jobAge: jobAge,
      jobPosition: jobPosition,
      jobDescription: jobDescription,
      jobDetails: jobDetails,
      jobLocation: jobLocation,
      HospitalName: HospitalName,
      howLong_ago: howLong_ago,
      requirementList: requirementList,
      dutyList: dutyList,
      certifications: certifications,
      startDate: startDate,
      deadline: deadline,
      salary: salary,
    });
    setShowViewJob(true);
  };

  return (
    <>
      <div
        className="jobCard"
        onClick={(e) => {
          handleClick(e);
          containsClassName(document.querySelectorAll(".jobCard"), "active");
          if (e.target.className === "howLong_ago") {
            e.target.parentNode.parentNode.className += " active";
          } else if (e.target.className !== "jobCard") {
            e.target.parentNode.className += " active";
          } else if (e.target.className === "jobCard") {
            e.target.className += " active";
          }
        }}
      >
        <div className="new">{jobAge}</div>
        <div className="job_description">{jobDescription}</div>
        <div className="hos_name">{HospitalName}</div>
        <div className="hos_location">{jobLocation}</div>
        <div className="jobPosition">{jobPosition}</div>
        <div className="job_details">{jobDetails}</div>
        <div className="flex">
          <div className="howLong_ago">{howLong_ago}</div>
          {showViewJob ? (
            <div
              className="deselect"
              onClick={(event) => {
                event.stopPropagation();
                setShowViewJob(false);
                containsClassName(
                  document.querySelectorAll(".jobCard"),
                  "active"
                );
              }}
            >
              <b>
                <Icon icon="bi:dash-circle" />
              </b>
              <span>Deselect</span>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default JobCard;
