import React from "react";
import head from "./img/me5.png";
import school1 from "./img/schoollogo1.png";
import school2 from "./img/schoollogo2.png";
import school3 from "./img/schoollogo3.png";
import "./styles/main.css";

// intro
const your_intro =  process.env.REACT_APP_INTRO;
// school logo
const schools = [school1, school2, school3] 
// school name
const school_name = [process.env.REACT_APP_BS_SCHOOL_NAME, process.env.REACT_APP_MS_SCHOOL_NAME, process.env.REACT_APP_PHD_SCHOOL_NAME] 
const school_dep = [process.env.REACT_APP_BS_SCHOOL_DEP, process.env.REACT_APP_MS_SCHOOL_DEP, process.env.REACT_APP_PHD_SCHOOL_DEP] 
const school_time = [process.env.REACT_APP_BS_SCHOOL_TIME, process.env.REACT_APP_MS_SCHOOL_TIME, process.env.REACT_APP_PHD_SCHOOL_TIME]

export function Intro() {
    return (
        <div class="intro">
            <span id="blcok">
                <img src={head}/>
            </span>
            <span class="text blcok-long">
                {your_intro} 
                <p>
                    {/* <!-- replace to tour social accounts --> */}
                    <a target="_blank" href="https://github.com/chi-0828" rel="noopener"><i class="fa-brands fa-github"></i></a>
                    <a target="_blank" href="https://www.linkedin.com/in/liang-chi-chen-882a531b9" rel="noopener"><i class="fa-brands fa-linkedin"></i></a>
                    <a target="_blank" href="https://scholar.google.com.tw/citations?user=SoyMWUsAAAAJ" rel="noopener"><i class="ai ai-google-scholar"></i></a>
                    <a target="_blank" href="https://orcid.org/0000-0003-2579-4305" rel="noopener"><i class="fa-brands fa-orcid"></i></a>
                </p>
            </span>
        </div>
    );
}

export function Edu(props) {
    return (
        <div class="edu">
            <span id="logo-block">
                <img src={schools[props.school]}  alt="school1"/>
            </span>
            <span class="text">
                <p class="school">{school_name[props.school]} </p>
                <p class="dep">{school_dep[props.school]} </p>
                <p class="time">{school_time[props.school]} </p>
            </span>
        </div>
    );
}