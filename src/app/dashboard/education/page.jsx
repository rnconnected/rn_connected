"use client";

import "src/app/dashboard/education/education.css"
import LeftNav from "src/app/dashboard/components/leftNav";
import EducationSearchBar from "../education/eduSearch/eduSearch"
import EduText from "../education/eduText/eduText"
import SuggestedCourses from "../education/suggestedEdu/suggestedEdu"

const education = () => {
    return (
        <>
            <div className="EduMainPage">
                <div className="leftbar">
                    <LeftNav />
                </div>
                <div className="EducationPage">
                    <div className="EduSearchInput">
                        <EducationSearchBar />
                    </div>
                    <div>
                        <EduText />
                    </div>
                    <div>
                        <SuggestedCourses />
                    </div>
                </div>
            </div>
        </>
    );
}

export default education;