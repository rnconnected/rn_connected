import React from "react";
import { Icon } from "@iconify/react";
import "src/app/find/viewjob.css";

const ViewJob = ({ viewJob_specs }) => {
  const isValidDutyList = Array.isArray(viewJob_specs.dutyList);
  const isValidRequirementList = Array.isArray(viewJob_specs.requirementList);
  const isValidCertList = Array.isArray(viewJob_specs.certifications);
  return (
    <>
      {/* the head section xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/}
      <div className="containerViewjob">
        <div className="headSection">
          <div className="jobName">{viewJob_specs.jobDescription}</div>
          <div className="hospitalName margin_5rem">
            {viewJob_specs.HospitalName}
          </div>
          <div className="job_location margin_5rem">
            {viewJob_specs.jobLocation}
          </div>
          <button className="applyBtn">Apply now</button>
        </div>
        {/*end of the head section xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/}

        {/* this is the salary section and the job dsecription xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
        <div className="Compensation">
          <b>Compensation</b>
          <div className="salary">
            <div className="salary_icon">
              <Icon icon="ri:money-euro-circle-line" />
              <span>Salary</span>
            </div>
            <div className="money">${viewJob_specs.salary}</div>
          </div>
          <div className="salary">
            <div className="salary_icon">
              <Icon icon="uil:building" />
              <span>Description</span>
            </div>
            <div className="money">{viewJob_specs.jobPosition}</div>
          </div>
        </div>
        {/* end of the salary section xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}

        {/* this is the duty list sectionxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
        <div className="dutyList">
          <b>Job Description</b>
          <div className="dutyList_cont">
            {isValidDutyList
              ? viewJob_specs.dutyList.map((duty, index) => (
                  <li key={index}>{duty}</li>
                ))
              : "No duties available"}
          </div>
        </div>
        {/* end of the duty list sectionxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}

        {/* this is the skill requirement list sectionxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
        <div className="requirements_skills">
          <b>Requirements and Skills</b>
          <div className="skillS_list">
            {isValidRequirementList
              ? viewJob_specs.requirementList.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))
              : "No requirements available"}
          </div>
        </div>
        {/* end of the skill requirement list sectionxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}

        {/* this is the education and the qualification section xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
        <div className="education">
          <b>Education </b>
          <div className="certList">
            {isValidCertList
              ? viewJob_specs.certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))
              : "No certificates available"}
          </div>
        </div>
        {/* this is the end of the education and the qualification section xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}

        {/* the start date and deadline section xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
        <div className="dateSection">
          <div className="deadline">
            <b>Application Deadline:</b>
            <span>{viewJob_specs.startDate}</span>
          </div>
          <div className="startDate">
            <b> Start Date :</b>
            <span>{viewJob_specs.startDate}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewJob;
