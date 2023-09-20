import React from "react";
import "src/components/homeMain/main.css";
import { Icon } from "@iconify/react";
 
const Search_job = () => {
  return (
    <>
      <div className="job">
        <input
          id="job"
          type="search"
          placeholder="Job description e.g Nurse Educator "
        />
      </div>
      <div className="location">
        <input
          id="location"
          type="search"
          placeholder="Location e.g San francisco"
        />
      </div>
      <button className="searchJobBtn">
        <span className="searchIcon">
          <Icon icon="ic:baseline-search" />
        </span>
      </button>
    </>
  );
};

export default Search_job;
