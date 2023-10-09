import React from "react";

const Nav = ({ jobNav }) => {
  return (
    <div className="job_top_nav">
      {jobNav.map((item, index) => {
        return (
          <div className="job_navItem active" key={index}>
            {item.icon}
            <span>{item.text}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Nav;
