"use client";

import "src/app/dashboard/education/education.css"
import LeftNav from "src/app/dashboard/components/leftNav";

const education = () => {
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

export default education;