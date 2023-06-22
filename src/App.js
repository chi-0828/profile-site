import React from "react";
import head from "./img/me5.png";
import school1 from "./img/schoollogo1.png";
import school2 from "./img/schoollogo2.png";
import "./styles/main.css";

function App() {
  return (
    <div class="container">
    <div class="menu">
      <div class="buttons-flex">
        <div class="button bg-red"></div>
        <div class="button bg-yellow"></div>
        <div class="button bg-green"></div>
      </div>
      <div class="title">
        <h1>
        	<i class="fa fa-folder fa-lg">
				<style> { "\
					.fa-github {\
						color: #6094ee;\
					}\
				"}</style>
			</i> 
          user@your-name-Home-Page:~/Home
        </h1>
      </div>
	  <div class="buttons-flex2">
        &#8997;&#8984;1
      </div>
    </div>
	<div class="nav">
		<a class="active" href="/#">
			<span>~/Home</span>
			<span class="left-command">
				&#8984;1
			</span>
		</a>
		<a href="./pub.html">
			<span>~/Publication</span>
			 {/* if your are an engineer, just replcae to "Project"  */}
			<span class="left-command">
				&#8984;2
			</span>
		</a> 
		<a href="./exp.html">
			<span>~/Experience</span>
			<span class="left-command">
				&#8984;3
			</span>
		</a>
		<a href="./awd.html">
			<span>~/Honor-&-Award</span>
			<span class="left-command">
				&#8984;4
			</span>
		</a>
	  </div>
    <div id="app">
		 {/* this is ascii art for text "Liang-Chi Chen"
			Just go google "text to ascii art generator" and show your name or commpany name  */}
		<h2>
		{/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;) &nbsp;)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;)&nbsp;)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
		&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(&nbsp;)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;___&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;__&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;___&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;__&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(&nbsp;)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;__&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;___&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;__&nbsp;&nbsp;&nbsp;&nbsp;<br/>
		&nbsp;&nbsp;&nbsp;/&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;)&nbsp;)&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;)&nbsp;)&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;)&nbsp;)&nbsp;____&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;)&nbsp;)&nbsp;&nbsp;&nbsp;/&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;)&nbsp;)&nbsp;&nbsp;&nbsp;//___)&nbsp;)&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;)&nbsp;)&nbsp;<br/>
		&nbsp;&nbsp;/&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;/&nbsp;/&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;/&nbsp;/&nbsp;&nbsp;((___/&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;/&nbsp;/&nbsp;&nbsp;&nbsp;/&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;/&nbsp;/&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;/&nbsp;/&nbsp;&nbsp;<br/>
		&nbsp;/&nbsp;/____/&nbsp;/&nbsp;/&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;((___(&nbsp;(&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;/&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;//__&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;((____/&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;/&nbsp;/&nbsp;&nbsp;&nbsp;/&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;((____/&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;/&nbsp;/&nbsp;&nbsp;&nbsp;((____&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;/&nbsp;/&nbsp;&nbsp;&nbsp;<br/>	  */}
		</h2>
		{/* block 1  */}
		<p id="path"> 
			&nbsp;<i class="fa-brands fa-apple ico">&nbsp;&nbsp;</i>
			<span>&nbsp;&nbsp;<i class="fa fa-folder-open">&nbsp;</i>~/Home&nbsp;&nbsp;</span>
		</p>
		<p id="code">
			&nbsp;&gt; About Me <br/>
		</p>
		<div class="intro">
			<span id="blcok">
				<img src={head}  alt="me"/>
			</span>
			<span class="text blcok-long">
				Introduction to yourself. Example:<br/>
				I am currently a M.S. student at the Department of <a>Computer Science (?), XXX XXXX XXXX University (OO)</a>, XXXX, US. <br/>
				I received the B.S. degree from the Department of <a>Computer Science and Information Engineering (?),  University of XXXXX (OO)</a>, XXXX, Taiwan, in 1999. <br/>
				My research interests include XXXXX. (or "I am leraning full-stack development"). 
				<p>
					{/* replace to tour social accounts  */}
					<a target="_blank" href="https://github.com/chi-0828" rel="noreferrer noopener">
						<i class="fa-brands fa-github" >
							<style> { "\
								.fa-github {\
									color: white;\
								}\
							"}</style>
						</i>
					</a>
					<a target="_blank" href="https://www.linkedin.com/in/liang-chi-chen-882a531b9" rel="noreferrer noopener">
						<i class="fa-brands fa-linkedin">
							<style> { "\
								.fa-github {\
									color: #6094ee;\
								}\
							"}</style>
						</i>
					</a>
					<a target="_blank" href="https://scholar.google.com.tw/citations?user=SoyMWUsAAAAJ" rel="noreferrer noopener">
						<i class="ai ai-google-scholar" >
							<style> { "\
								.fa-github {\
									color: #6094ee;\
								}\
							"}</style>
						</i>
					</a>
					<a target="_blank" href="https://orcid.org/0000-0003-2579-4305" rel="noreferrer noopener">
						<i class="fa-brands fa-orcid">
							<style> { "\
								.fa-github {\
									color: rgb(206, 255, 127);\
								}\
							"}</style>
						</i>
					</a>
				</p>
			</span>
		</div>

		{/* block 2  */}
		<p id="path"> 
			&nbsp;<i class="fa-brands fa-apple ico">&nbsp;&nbsp;</i>
			<span>&nbsp;&nbsp;<i class="fa fa-folder-open">&nbsp;</i>~/Home&nbsp;&nbsp;</span>
		</p>
		<p id="code">
			&nbsp;&gt; Education <br/>
		</p>
		<div class="edu">
			<span id="logo-block">
				<img src={school1}  alt="school1"/>
			</span>
			<span class="text">
				<p class="school">XXX XXXX XXXX University (OO)</p>
				<p class="dep">MS, Computer Science (CS)</p>
				<p class="time">Sept. 2022 - present</p>
			</span>
		</div>
		<div class="edu">
			<span id="logo-block">
				<img src={school2} alt="school2"/>
			</span>
			<span class="text">
				<p class="school">University of XXXXX (OO)</p>
				<p class="dep">BS, Computer Science and Information Engineering (CSIE)</p>
				<p class="time">Sept. 2018 - jun. 2022</p>
			</span>
		</div>

		{/* bock 3 */}
		<p id="path"> 
			&nbsp;<i class="fa-brands fa-apple ico">&nbsp;&nbsp;</i>
			<span>&nbsp;&nbsp;<i class="fa fa-folder-open">&nbsp;</i>~/Home&nbsp;&nbsp;</span>
		</p>
		<p id="code">
			&nbsp;&gt; Contact Information <br/>
		</p>
		<div class="contact">
			<span class="text">
				<p><i class="fa-solid fa-envelope"></i> Email: your-email@gmail.com</p>
				<p><i class="fa-solid fa-phone"></i> Phone: +886 0000666888</p>
			</span>
		</div>
	</div>
</div>
  );
}

export default App;