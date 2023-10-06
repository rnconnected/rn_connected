"use client";

import "src/app/dashboard/connections/connections.css"
import LeftNav from "src/app/dashboard/components/leftNav";
import NavBar from "../connections/top_nav/top_nav";
// import UserInviteContainer from "./new_invite/newInvite";
import MainComponent from "./top_nav/top_nav";

const connection = () => {
    return (
        <>
            <div className="connectionPage">
                <div className="connectleftbar">
                    <LeftNav />
                </div>
                <div className="connectDetials">
                    <div className="connectTop_nav">
                        <NavBar />
                    </div>
                </div>
            </div>
        </>
    );
}

export default connection;