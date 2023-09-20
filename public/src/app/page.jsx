import React from "react";
import NavBar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import Main from "@/components/homeMain/main";


const Page = () => {
  return (
    <html lang="en">
      <body style={{ overflowX: "hidden" }}>
        <NavBar />
        <Main />
        <Footer />
      </body>
    </html>
  );
};

export default Page;
