import React from "react";
// import Pubraw from "./customization/Publication.json";
import "./styles/main.css";


export function Pro() {
    return (   
        <div class="pro">
            <div class="probox">
                <img src={require("./img/demo.png")} alt="pro"/>
            </div>
            <br/>
            <br/>
            <div class="probox">
                <img src={require("./img/demo.png")} alt="pro"/>
            </div>
		</div>
        
    );
}

export default Pro;