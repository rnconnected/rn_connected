"use client";

import "src/app/dashboard/jobs/jobs.css"
import LeftNav from "src/app/dashboard/components/leftNav";

const jobs = () => {
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

export default jobs;