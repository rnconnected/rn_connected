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
        "https://rn-connected.vercel.app/login",
      );
    } catch (e) {
      console.error(`${e.message}`);
    }
  };

  return (

    // <><div className="container-xl my-3">
    //   <button
    //     className="btn btn-outline-danger my-1 mx-2 "
    //     onClick={(e) => googleAuth(e)}
    //   >
    //     Google
    //   </button>

    // </div>
    <>
      <div className="or">
        <small>Or</small>
      </div>
      <div className="fit">
        <div className="googleLogin">
          <div className="loginGoggle">
            <Icon icon="devicon:google" />
            <small
              onClick={(e) => googleAuth(e)}
            >
              Continue with Google
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialSignin;