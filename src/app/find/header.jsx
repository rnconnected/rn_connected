"use client";
import React, { useEffect, useRef, useState } from "react";
import Search_job from "@/components/homeMain/search_job";
import "src/app/find/find.css";
import { Icon } from "@iconify/react";

const Find_header = () => {
  return (
    <>
      <div className="headerCont">
        <div className="search_cont">
          <Search_job />
        </div>
        <div className="selectCont">
          <div className="ol">
            <select name="Date Posted" id="jt">
              <option style={{ color: "white" }}>Job Type</option>
              <option>Last 24 hours</option>
              <option>Last 3 days</option>
              <option>Last 7 days</option>
              <option>Last visit</option>
            </select>
            <Icon icon="mingcute:down-line" className="downIcon" />
          </div>

          {/*xxxxxxxx this is the second dropdown xxxxxxxxxxx */}
          <div className="ol">
            <select name="job type" id="jt">
              <option style={{ color: "white" }}>Job Type</option>
              <option>PRN/ECB</option>
              <option>Part-time</option>
              <option>Full-time</option>
              <option>Contract/Temporary</option>
            </select>
            <Icon icon="mingcute:down-line" className="downIcon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Find_header;
