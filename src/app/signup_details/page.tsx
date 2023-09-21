"use client";
import Nav from "@/components/login_header/nav";
import { Icon } from "@iconify/react/dist/iconify.js";
import "src/app/signup_details/details.css";
import React, { useState, useEffect, FormEvent } from 'react';

import { useRouter } from "next/navigation";

import LoadJob from "@/components/load effects/loadjob";
import useAuth from "@/context/useAuth";
import appwriteService from "@/appwrite/appwriteconfig";


const UpdateUser = () => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const [formData, setFormData] = useState({
    fullname: "", // Combine first name and last name here
    phone: "",
    firstname: "", // Add these properties
    lastname: "", // Add these properties
  });
  const [error, setError] = useState("");

  const { setAuthStatus } = useAuth();

  const create = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Combine first name and last name into formData.fullname
      const fullName = `${formData.firstname} ${formData.lastname}`;
      const updatedFormData = { ...formData, fullname: fullName };

      await appwriteService.updatefullname(updatedFormData);
      await appwriteService.updatephonenumber(updatedFormData);
      setAuthStatus(true);
      router.push("/dashboard/feeds");
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };



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

          <div className="detail_lower">
            <div className="h2">Enter your personal details</div>

            {/* these are the input area and their labels respectively */}
            {/* this is the firstname input section */}
            <div className="formSection">
              <small className="label">Firstname</small>
              <input
                placeholder="e.g Samson"
                type="text"
                value={formData.firstname}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    firstname: e.target.value,
                  }));
                }}
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
                value={formData.lastname}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    lastname: e.target.value,
                  }));
                }}
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
                value={formData.phone}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    phone: e.target.value,
                  }));
                }}
                name="phone"
                id="phone"
                className="input"
                required
              />
            </div>
            {/* this is the end of the phone number section */}

            <div className="confirm_section">
              <button className="confirm_btn" type="submit"

                onClick={(e) => {
                  create(e as unknown as FormEvent<HTMLFormElement>);
                  setIsLoading(true);
                }}
              >Confirm</button>
            </div>
          </div>
        </div>
      </div>
      {isLoading && (
        <div className="loadOverlay active">
          <LoadJob />
        </div>
      )}
    </>
  );
};

export default UpdateUser;


