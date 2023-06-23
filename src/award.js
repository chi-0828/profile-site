import React from "react";
import awdraw from "./customization/Award.json";
import "./styles/main.css";

export function Awd() {
    const result = [];
    awdraw.awards.map((award) => {
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