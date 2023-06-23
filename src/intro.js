import React from "react";
import head from "./img/me5.png";
import "./styles/main.css";
import introraw from './customization/Introduction.json'
import eduraw from './customization/Education.json'


export function Read_Intro() {
    return (
        <span class="text blcok-long">
            {introraw.intro}
            <p>
                {/* <!-- replace to tour social accounts --> */}
                <a target="_blank" href="https://github.com/chi-0828" rel="noreferrer"><i class="fa-brands fa-github"></i></a>
                <a target="_blank" href="https://www.linkedin.com/in/liang-chi-chen-882a531b9" rel="noreferrer"><i class="fa-brands fa-linkedin"></i></a>
                <a target="_blank" href="https://scholar.google.com.tw/citations?user=SoyMWUsAAAAJ" rel="noreferrer"><i class="ai ai-google-scholar"></i></a>
                <a target="_blank" href="https://orcid.org/0000-0003-2579-4305" rel="noreferrer"><i class="fa-brands fa-orcid"></i></a>
            </p>
        </span>
    );
}

export function Intro() {
    return (
        <div class="intro">
            <span id="blcok">
                <img src={head}/>
            </span>
            <Read_Intro />
        </div>
    );
}

export function Edu() {
    const result = [];
    eduraw.schools.map((school) => {
        result.push(
            <div class="edu">
                <span id="logo-block">
                <img src={require(`${school.logo}`)}  alt={"school"} />
                </span>
                <span class="text">
                    <p class="school">{school.name}  </p>
                    <p class="dep">{school.degree} </p>
                    <p class="time">{school.time}  </p>
                </span>
            </div>
        );
    });

    return (
        result
    );
}