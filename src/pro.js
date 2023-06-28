import React from "react";
import Proraw from "./customization/Project.json";
import "./styles/main.css";


export function Pro() {
    const result = [];
    Proraw.projects.map((project) => {
        result.push(
            <div class="probox">
                <img src={require(`${project.project_img}`)}  alt={"project"} />
                <div class="pro-content">
                    <div class="pro-title">
                        {project.project_name}
                    </div>
                    <div class="pro-about">
                        {project.project_about}
                    </div>
                    <div class="pro-bottom">
                        <span class="pro-tool">Tools: {project.project_tool}</span>
                        <span class="pro-link"><a target="_blank" href={project.project_link} rel="noreferrer"><i class="fa-brands fa-github"></i></a></span>
                    </div>
                </div>
            </div>
        );
        result.push(<br></br>)
    });
    return (   
        <div class="pro">
            {result}
		</div>
        
    );
}

export default Pro;