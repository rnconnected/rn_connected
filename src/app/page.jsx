"use client";
import React from "react";
import NavBar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import Main from "@/components/homeMain/main";
import Slidemenu from "@/components/slideMenu/slidemenu";

const Page = () => {
  return (
    <html lang="en">
      <body style={{ overflowX: "hidden" }}>
        <NavBar />
        <Slidemenu />
        <Main />
        <Footer />
      </body>
    </html>
  );
};

export default Page;
