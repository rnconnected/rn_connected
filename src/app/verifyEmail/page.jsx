"use client";
import React, { useState, useEffect } from "react";
import "./verify.css";
import Image from "next/image";

const Verify = () => {
  const [totalSeconds, setTotalSeconds] = useState(5 * 60);
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateTimer = () => {
    if (totalSeconds > 0) {
      const remainingMinutes = Math.floor(totalSeconds / 60);
      const remainingSeconds = totalSeconds % 60;
      setMinutes(remainingMinutes);
      setSeconds(remainingSeconds);
      setTotalSeconds(totalSeconds - 1);
    }
  };

  useEffect(() => {
    if (totalSeconds === 0) {
      return;
    }

    const intervalId = setInterval(updateTimer, 1000);

    return () => clearInterval(intervalId);
  }, [totalSeconds, updateTimer]);

  return (
    <>
      <div className="verify_cont">
        <div className="rnlogo">
          <Image
            src={"/RNlogo/logo1.png"}
            height={100}
            width={100}
            alt="rnlogo"
            className="logoimg"
          />
        </div>
        <h3 className="verifytxt">Verify your email</h3>
        <div className="verify_msg">
          Please click on the link that has just been sent to your email account
          to verify your email and continue with the registration process.
        </div>
        <div className={`resendbtn ${totalSeconds === 0 ? "active" : ""}`}>
          Resend email
        </div>
        {totalSeconds > 0 && (
          <div className="timer">
            0{minutes}: {seconds < 10 ? "0" : ""}
            {seconds} {minutes === 0 ? "secs" : "mins"}
          </div>
        )}
      </div>
    </>
  );
};

export default Verify;
