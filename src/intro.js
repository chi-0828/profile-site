import React from "react";
import head from "./img/me5.png";
import "./styles/main.css";
import Introraw from './customization/Introduction.json'
import Eduraw from './customization/Education.json'


export function Read_Intro() {
    return (
        <span class="text blcok-long">
            {Introraw.intro}
            <p>
                <a target="_blank" href={Introraw.github} rel="noreferrer"><i class="fa-brands fa-github"></i></a>
                <a target="_blank" href={Introraw.linkedin} rel="noreferrer"><i class="fa-brands fa-linkedin"></i></a>
                <a target="_blank" href={Introraw.googlescholar} rel="noreferrer"><i class="ai ai-google-scholar"></i></a>
                <a target="_blank" href={Introraw.orcid} rel="noreferrer"><i class="fa-brands fa-orcid"></i></a>
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
    Eduraw.schools.map((school) => {
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