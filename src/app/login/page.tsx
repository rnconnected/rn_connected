"use client";
import React, { FormEvent, useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import User from "./user";
import Nav from "@/components/login_header/nav";
import "./login.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import LoadJob from "@/components/load effects/loadjob";
import useAuth from "@/context/useAuth";
import appwriteService from "@/appwrite/appwriteconfig";
import SocialSignin from "../googleAuth/google";

const Login = () => {
  const router = useRouter();
  const { setAuthStatus } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const login = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const session = await appwriteService.login(formData);
      if (session) {
        setAuthStatus(true);
        router.push("/dashboard/feeds");
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  const [acctUser, setAcctUser] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Nav />
      <div className="container">
        <form action="/" method="GET" className="info_Section">
          <User acctUser={acctUser} setAcctUser={setAcctUser} />
          <div className="inputSection">
            {error && (
              <div className="errorMessage">
                <p>{error}</p>
              </div>
            )}
            <div className=" formSection">
              <small className="label">Email</small>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
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
                value={formData.password}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, password: e.target.value }))
                }
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
              <button
                type="submit"
                onClick={(e) =>
                  login(e as unknown as FormEvent<HTMLFormElement>)
                }
              >
                Login
              </button>
            </div>

            {acctUser ? <SocialSignin /> : null}
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
      {isLoading && (
        <div className="loadOverlay active">
          <LoadJob />
        </div>
      )}
    </>
  );
};

export default Login;
