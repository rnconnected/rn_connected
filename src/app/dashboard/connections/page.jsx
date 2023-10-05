"use client";

import "src/app/dashboard/connections/connections.css"
import LeftNav from "src/app/dashboard/components/leftNav";
import NavBar from "../connections/top_nav/top_nav";
import UserInviteContainer from "../connections/connection_card/connection_card";

const connection = () => {
    return (
        <>
            <div className="pageCont">
                <div className="leftbar">
                    <LeftNav />
                </div>
                <div className="otherHalf">
                    <div className="top_nav">
                        <NavBar />
                    </div>
                    <div className="bottomHalf">
                        <div className="posts">
                            <UserInviteContainer />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default connection;