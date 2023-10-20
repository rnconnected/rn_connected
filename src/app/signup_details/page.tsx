"use client";
import Nav from "@/components/login_header/nav";
import { Icon } from "@iconify/react/dist/iconify.js";
import "src/app/signup_details/details.css";
import React from 'react';



const UpdateUser = () => {
  return (
    <>
      <Nav />
      <div className="details_cont">
        <div className="form_card">
          {/* this is the stage cont */}
          <div className="stageCont">
            <div className="stages">
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
          </div>
          {/* end of the stage cont */}

          <form
            className="info_Section"
            action="/auth/SignupDetails"
            method="post"
          >

            <div className="h2">Enter your personal details</div>

            {/* these are the input area and their labels respectively */}
            {/* this is the firstname input section */}
            <div className="formSection">
              <small className="label">Firstname</small>
              <input
                placeholder="e.g Samson"
                type="text"
                name="Firstname"
                id="fname"
                className="input"
                required
              />
            </div>
            {/* this is the end of the firstname input section */}

            {/* this is the lastname input section */}
            <div className="formSection">
              <small className="label">Lastname</small>
              <input
                placeholder="e.g Samson"
                type="text"
                name="lastname"
                id="lname"
                className="input"
                required
              />
            </div>
            {/* this is the end of the lastname input section */}

            {/* this is the phone number section */}
            <div className="formSection">
              <small className="label">Phone No.</small>
              <input
                placeholder="e.g +1234567890"
                type="phone"
                name="phone"
                id="phone"
                className="input"
                required
              />
            </div>
            {/* this is the end of the phone number section */}

            <div className="confirm_section">
              <button className="confirm_btn" type="submit"
              >Confirm</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateUser;


