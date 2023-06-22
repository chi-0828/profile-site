import React from "react";
import "./styles/main.css";

// intro
const your_intro =  process.env.REACT_APP_INTRO;
// school logo
const schools = [school1, school2, school3] 
// school name
const school_name = [process.env.REACT_APP_BS_SCHOOL_NAME, process.env.REACT_APP_MS_SCHOOL_NAME, process.env.REACT_APP_PHD_SCHOOL_NAME] 
const school_dep = [process.env.REACT_APP_BS_SCHOOL_DEP, process.env.REACT_APP_MS_SCHOOL_DEP, process.env.REACT_APP_PHD_SCHOOL_DEP] 
const school_time = [process.env.REACT_APP_BS_SCHOOL_TIME, process.env.REACT_APP_MS_SCHOOL_TIME, process.env.REACT_APP_PHD_SCHOOL_TIME]


export function Pub(props) {
    return (
        <div class="pub-list">
			<p>Journal papers</p>
			<ul>
				<li><span>
					<b>LongPhase: an ultra-fast chromosome-scale phasing algorithm for small and large variants</b><br/>
					Jyun-Hong Lin, <span id="me">Liang-Chi Chen</span>, Shu-Qi Yu, Yao-Ting Huang <br/>
					Bioinformatics, Volume 38, Issue 7, March 2022, Pages 1816-1822. <br/>
					<a href="https://doi.org/10.1093/bioinformatics/btac058" target="_blank">[Paper]</a>
				</span></li>
			</ul>
			<p>Conference papers</p>
			<ul>
				<li><span>
					<b>UpPipe: A Novel Pipeline Management on In-Memory Processors for RNA-seq Quantification</b><br/>
					<span id="me">Liang-Chi Chen</span>, Chien-Chung Ho, Yuan-Hao Chang<br/>
					The 60th ACM/IEEE Design Automation Conference (DAC), San Francisco, CA, USA, July 9-13, 2023.<br/>
					Paper and slide are to apear.
				</span></li>
				<br/>
				<li><span>
					<b>Efficient Sanitization Design for LSM-based Key-Value Store over 3D MLC NAND Flash</b><br/>
					<span id="me">Liang-Chi Chen</span>, Shu-Qi Yu, Chien-Chung Ho, Wei-Chen Wang, Yung-Chun Li<br/>
					The 38th ACM/SIGAPP Symposium on Applied Computing (SAC), March 27-31, 2023. <br/>
					<a href="https://dl.acm.org/doi/10.1145/3555776.3577780" target="_blank">[Paper]</a>
					<a href="https://drive.google.com/file/d/19bH_Trm85HtkHarAajefpxZoKSd5CQV3/view?usp=drive_link" target="_blank">[Slide]</a>
					<a href="https://drive.google.com/file/d/1rnKlQvyG6Q5AiBKUgZVQMs12DnCjlJQO/view?usp=drive_link" target="_blank">[Poster]</a>
				</span></li>
			</ul>

		</div>
    );
}