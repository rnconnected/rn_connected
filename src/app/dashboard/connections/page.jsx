"use client";

import "src/app/dashboard/connections/connections.css"
import LeftNav from "src/app/dashboard/components/leftNav";

const connection = () => {
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

export default connection;