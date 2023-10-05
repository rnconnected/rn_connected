"use client";

import "src/app/dashboard/notifications/notifications.css"
import LeftNav from "src/app/dashboard/components/leftNav";

const notifications = () => {
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

export default notifications;