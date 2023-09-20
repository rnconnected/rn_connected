import React from "react";
import "./button.css";
import Link from "next/link";

const Signup = () => {
  return (
    <Link href="/signup">
      <button className="signupBtn">Sign up</button>
    </Link>
  );
};

export default Signup;
