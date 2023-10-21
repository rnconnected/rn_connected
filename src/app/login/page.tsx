"use client";
import Link from "next/link";
import Nav from "@/components/login_header/nav";
import "./login.css";
import Image from "next/image";
import SocialSignin from "../googleAuth/google";

const Login = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <form
          className="info_Section"
          action="/auth/sign-in"
          method="post"
        >
          <div className="inputSection">
            <div className=" formSection">
              <small className="label">Email</small>
              <input
                type="text"
                name="email"
                id="LoginEmailInput"
                placeholder="e.g. justincase@gmail.com"
                className="input"
                required
              />
            </div>
            <div className="formSection">
              <small className="label">Password</small>
              <input
                type="password"
                name="password"
                id="LoginPasswordInput"
                placeholder="********"
                className="input"
                required
              />
            </div>
            <small className="fgtPassword">
              <Link href={"#"} className="ftg_psmall">
                Forgot Password?
              </Link>
            </small>
          </div>

          <div>
            <div className="confirmLoginBtn">
              <button>
                Login
              </button>
            </div>
          </div>

          <div className="loginFooter">
            <small className="LFLeft">Are you a new user?</small>
            <Link href={"/signup"} className="LFRight">
              <small>SignUp (User/Recruiter)</small>
            </Link>
          </div>
        </form>
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
      </div>
    </>
  );
};

export default Login;
