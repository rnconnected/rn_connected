import React from "react";
import "./button.css";
import Link from "next/link";

const Login = () => {
  return (
    <Link href="/login">
      <button className="loginBtn">Login</button>
    </Link>
  );
};

export default Login;
