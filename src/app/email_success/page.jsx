"use client";

import React, { useEffect } from "react";
import "../email_success/success.css";
import Image from "next/image";
import Mark from "@/components/checkmark/mark";
import Link from "next/link";
import { account } from "@/appwrite/appwriteconfig";




const Success = () => {
  useEffect(() => {
    // Code that depends on window object
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("userId");
    const secret = urlParams.get("secret");

    account
      .updateVerification(userId, secret)
      .then(() => {
        console.log("Verification updated");
        history.push("/dashboard/feeds"); // You should define 'history' or use React Router for navigation.
      })
      .catch((error) => {
        console.log('Error updating verification: ', error);
      });
  }, []);

  return (
    <>
      <div className="success_body">
        <div className="success_cont">
          <Image
            src={"/RNlogo/logo1.png"}
            height={1000}
            width={1000}
            alt="success"
            className="success_img"
          />
          <h2 className="hurray">Hurray!</h2>
          <Mark />
          <div className="success_msg">
            Your email has been verified successfully. Kindly proceed to
            continue your registration.
          </div>

          <Link href={"/signup_details"} className="proceed_btn">
            Proceed
          </Link>
        </div>
      </div>
    </>
  );
};

export default Success;
