"use client";
import React, { FormEvent, useState } from "react";
import { Icon } from "@iconify/react";
import User from "./user";
import Nav from "../../components/login_header/nav";
import "./signup.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import LoadJob from "../../components/load effects/loadjob";
import SocialSignin from "../googleAuth/google";
import appwriteService, { account } from "@/appwrite/appwriteconfig";
import useAuth from "@/context/useAuth";

const Signup = () => {
  const [acctUser, setAcctUser] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showEye, setShowEye] = useState(false);
  const [showEyeConfirm, setShowEyeConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const { setAuthStatus } = useAuth();

  const create = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userData = await appwriteService.createUserAccount(formData);
      await account.createVerification(
        "https://rn-connected.vercel.app/email_success"
      );
      if (userData) {
        setAuthStatus(true);
        router.push("/verifyEmail");
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  return (
    <>
      <Nav />
      <div className="signup_cont ">
        <div className="signup_form">
          <div className="header_mgt">
            <User acctUser={acctUser} setAcctUser={setAcctUser} />
          </div>
          <div className="stageCont">
            <div className="stages">
              <span className="stage s1">
                <span>SignUp</span>
                <Icon icon="ph:arrow-right" />
              </span>
              <span className="stage s2">
                <span>Verify</span>
                <Icon icon="ph:arrow-right" />
              </span>
              <span className="stage s3">Complete</span>
            </div>
          </div>
          <div id="h2">
            <h2>Create RN free Account</h2>
          </div>
          <div className="errorMessage">{error}</div>
          <div id="signupform">
            <div className="formSection">
              <small className="label">Email</small>
              <input
                placeholder="email e.g justincase@gmail.com"
                type="text"
                name="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, email: e.target.value }));
                }}
                id="email"
                className="input"
                required
              />
            </div>
            <div className="formSection">
              <small className="label">Create Password</small>
              <input
                placeholder="password"
                type={showPassword ? "text" : "password"}
                id="password"
                value={formData.password}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }));
                  const rps = document.querySelector("#enterPassword");
                  e.target.value !== "" ? setShowEye(true) : setShowEye(false);
                }}
                name="password"
                className="input"
                required
              />
              {showEye ? (
                <div
                  className="seePassword"
                  onClick={() => togglePasswordVisibility()}
                >
                  {showPassword ? (
                    <Icon icon="mdi:eye-off-outline" />
                  ) : (
                    <Icon icon="tabler:eye" id="eye" />
                  )}
                </div>
              ) : null}
            </div>
            <div className="formSection">
              <small className="label">Re-enter Password</small>
              <input
                placeholder="confirm password"
                type={showConfirmPassword ? "text" : "password"}
                id="re_enterPassword"
                // value={formData.Confirmpassword}
                onChange={(e) => {
                  const rps = document.querySelector("#re_enterPassword");
                  e.target.value !== ""
                    ? setShowEyeConfirm(true)
                    : setShowEyeConfirm(false);
                }}
                name="re_enterPassword"
                className="input"
                required
              />
              {showEyeConfirm ? (
                <div
                  className="seePassword"
                  onClick={() => toggleConfirmPasswordVisibility()}
                >
                  {showConfirmPassword ? (
                    <Icon icon="mdi:eye-off-outline" />
                  ) : (
                    <Icon icon="tabler:eye" id="eye" />
                  )}
                </div>
              ) : null}
            </div>
            <div>
              <div className="fit">
                <div className="confirmLoginBtn">
                  <button
                    type="submit"
                    onClick={(e) => {
                      create(e as unknown as FormEvent<HTMLFormElement>);
                      setIsLoading(true);
                    }}
                  >
                    Create account
                  </button>
                </div>
              </div>

              {acctUser ? (
                <>
                  <div className="or">
                    <small>Or</small>
                  </div>
                  <SocialSignin />
                </>
              ) : null}
            </div>
          </div>
          <div className="loginFooter">
            <small className="LFLeft">Already have an account?</small>
            <Link href={"/login"} className="className=">
              <small>Login (User/Recruiter)</small>
            </Link>
          </div>
        </div>
      </div>
      <Image
        src={"/login_icons/login_icon.png"}
        height={1000}
        width={1000}
        alt="null"
        className="login_iconl"
      />
      <Image
        src={"/login_icons/login_iconr.png"}
        height={1000}
        width={1000}
        alt="null"
        className="login_iconr"
      />
      {isLoading && (
        <div className="loadOverlay active">
          <LoadJob />
        </div>
      )}
    </>
  );
};

export default Signup;
