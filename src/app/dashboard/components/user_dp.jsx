import React from "react";
import "./user_dp.css";
import Image from "next/image";

const User_dp = () => {
  return (
    <div className="dp">
      <Image
        src="/RNlogo/logo1.png"
        alt="uers image"
        width={500}
        height={500}
        className="dpImg"
      />
    </div>
  );
};

export default User_dp;
