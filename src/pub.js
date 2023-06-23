import React from "react";
import pubraw from "./customization/Publication.json";
import "./styles/main.css";


export function Pub() {
    const journal = [];
    pubraw.journal.map((paper) => {
        journal.push(
            <li><span>
                <b>{paper.title}</b><br/>
                {paper.author} <br/>
                {paper.organization}  <br/>
                <a href={paper.link} target="_blank">[Paper]</a>
            </span></li>
        );
    });
    const conference = [];
    pubraw.conference.map((paper) => {
        conference.push(
            <li><span>
                <b>{paper.title}</b><br/>
                {paper.author} <br/>
                {paper.organization}  <br/>
                <a href={paper.link} target="_blank">[Paper]</a>
            </span></li>
        );
    });
    return (
        
        <div class="pub-list">
			<p>Journal papers</p>
			<ul>
				{journal}
			</ul>
			<p>Conference papers</p>
			<ul>
				{conference}
			</ul>

		</div>
    );
}

export default Pub;