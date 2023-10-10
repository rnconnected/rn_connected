import React, { useEffect, useState } from "react";
import Link from "next/link";

const Nav = ({ jobNav }) => {
  const [isActive, setIsActive] = useState([]);

  useEffect(() => {
    const currentPath = window.location.pathname;
    const activeStates = jobNav.map((item) => currentPath === item.href);
    setIsActive(activeStates);
  }, [jobNav]);

  return (
    <div className="job_top_nav">
      {jobNav.map((item, index) => {
        return (
          <Link
            href={item.href}
            className={`job_navItem ${isActive[index] ? "active" : ""}`}
            key={index}
          >
            {item.icon}
            <span>{item.text}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Nav;
