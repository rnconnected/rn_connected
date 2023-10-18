import React from "react";
import { Icon } from "@iconify/react";
import { account } from "@/appwrite/appwriteconfig";
// import toast from "react-toastify";

const SocialSignin = () => {
  const googleAuth = (e) => {
    e.preventDefault();

    try {
      account.createOAuth2Session(
        "google",
        "https://rn-connected.vercel.app/dashboard/feeds",
        "https://rn-connected.vercel.app/login"
      );
    } catch (e) {
      console.error(`${e.message}`);
    }
  };

  return (
    <>
      <div className="fit">
        <div className="googleLogin">
          <div className="loginGoggle" onClick={(e) => googleAuth(e)}>
            <Icon icon="devicon:google" />
            <small>Continue with Google</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialSignin;
