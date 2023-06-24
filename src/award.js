import React from "react";
import Awdraw from "./customization/Award.json";
import "./styles/main.css";

export function Awd() {
    const result = [];
    Awdraw.awards.map((award) => {
        result.push(
            <p>{award.entry}</p>
        );
    });

    return (
        <div class="pub-list">
        {result}
        </div>
    );
}

export default Awd;