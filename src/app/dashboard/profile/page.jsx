"use client";

import "src/app/dashboard/profile/profile.css"
import LeftNav from "src/app/dashboard/components/leftNav";

const profile = () => {
    return (
        <>
            <div className="pageCont">
                <div className="leftbar">
                    <LeftNav />
                </div>
            </div>
        </>
    );
}

export default profile;