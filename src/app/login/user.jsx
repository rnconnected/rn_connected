"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "src/app/login/login.css";

const User = ({ acctUser, setAcctUser }) => {
  return (
    <>
      <div className="acctManager">
        <div
          className={`acctUser ${acctUser === true ? "active" : ""}`}
          onClick={() => setAcctUser(true)}
        >
          <Icon icon="fa6-regular:user" />
          <small>User</small>
        </div>
        <div
          className={`recruiter ${acctUser === false ? "active" : ""}`}
          onClick={() => setAcctUser(false)}
        >
          <Icon icon="fa6-regular:user" />
          <small>Recruiter</small>
        </div>
      </div>
    </>
  );
};

export default User;
