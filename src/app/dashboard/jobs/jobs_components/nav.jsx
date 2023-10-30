import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import "src/app/dashboard/jobs/jobs.css"
const jobNav = [
  {
    href: "/dashboard/jobs",
    icon: <Icon icon="solar:suitcase-tag-line-duotone" />,
    text: "Available Jobs",
  },
  {
    href: "/dashboard/jobs/myjobs",
    icon: <Icon icon="icon-park-outline:tag" />,
    text: "My Jobs",
  },
  {
    href: "/dashboard/jobs/another",
    icon: <Icon icon="akar-icons:bell" />,
    text: "Jobs alert",
  },
  {
    href: "/dashboard/jobs/another",
    icon: <Icon icon="ph:gear-bold" />,
    text: "Application Settings",
  },
];

const Nav = () => {
  const [isActive, setIsActive] = useState([]);

  useEffect(() => {
    const currentPath = window.location.pathname;
    const activeStates = jobNav.map((item) => currentPath === item.href);
    setIsActive(activeStates);
  }, []);

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
