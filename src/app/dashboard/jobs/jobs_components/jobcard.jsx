import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import "./jobcard.css";

const Jobcard = ({ jobInfo }) => {
  return (
    <div className="theCard">
      <div className="age">{jobInfo.jobAge}</div>
      <div className="cate">
        <span>{jobInfo.jobPosition}</span>
        <span>
          <Icon icon="icon-park-outline:tag" />
        </span>
      </div>
      <div className="company">{jobInfo.HospitalName}</div>
      <div className="company_location">{jobInfo.jobLocation}</div>

      <button className="applyBtn">Apply</button>
      <div className="shortmsg">
        {jobInfo.jobDetails} Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Consectetur, hic explicabo, excepturi repellat omnis inventore
        voluptates aspernatur tempora quasi, exercitationem quae nam? Aliquam
        earum necessitatibus pariatur velit, porro inventore impedit!
      </div>
      <div className="longAgo">Posted {jobInfo.howLongAgo}</div>
    </div>
  );
};

export default Jobcard;
