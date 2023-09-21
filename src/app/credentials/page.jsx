"use client";
import React from "react";
import Nav from "@/components/login_header/nav";
import "./page.css";
import { Icon } from "@iconify/react/dist/iconify.js";

const Page = () => {
  return (
    <>
      <Nav />
      <div className="credential_cont">
        <div className="form_card">
          <div className="stageCont">
            <span className="stage s1">
              <span>SignUp</span>
              <Icon icon="ph:arrow-right" />
            </span>
            <span className="stage s2">
              <span>Details</span>
              <Icon icon="ph:arrow-right" />
            </span>
            <span className="stage s3">
              <span>Verify</span>
              <Icon icon="ph:arrow-right" />
            </span>
            <span className="stage s4">Complete</span>
          </div>
          <div className="cred_lower">
            <div className="h2">Verify your nursing credentials</div>
            <div className="nurse_type">
                          <label htmlFor="nurse_type">Nursing Type</label>
                          <select name="nurse_type" id="nurse_type">
                              <option value=""></option>
                              <option value="registered"></option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
