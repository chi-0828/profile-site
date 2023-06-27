import React from "react";
import {Intro, Edu} from "./intro";
import Pub from "./pub";
import Exp from "./exp";
import Awd from "./award";
import Pro from "./pro";
import { ASCII } from "./tool";
import {Path, Code, Contact} from "./tool";
import "./styles/main.css";

const paths = ['~\Home', '~\Project', '~\Publication', '~\Experience', '~\Award', '~\Project'];

function Intro_content(props) {
	return (
		<div id='app'> 
			<ASCII />
			<Path path={paths[props.index-1]}/>
			<Code command='About Me'/>
			<Intro />
			<Path path={paths[props.index-1]}/>
			<Code command='Education'/>
			<Edu />
			<Path path={paths[props.index-1]}/>
			<Code command='Contact Information'/>
			<Contact />
		</div>
	);
}

function Pro_content(props) {
	return (
		<div id='app'> 
			<ASCII />
			<Path path={paths[props.index-1]}/>
			<Code command='Project'/>
			<Pro />
			<Path path={paths[props.index-1]}/>
			<Code command='Contact Information'/>
			<Contact />
		</div>
	);
}

function Pub_content(props) {
	return (
		<div id='app'> 
			<ASCII />
			<Path path={paths[props.index-1]}/>
			<Code command='Publication list'/>
			<Pub />
			<Path path={paths[props.index-1]}/>
			<Code command='Contact Information'/>
			<Contact />
		</div>
	);
}

function Exp_content(props) {
	return (
		<div id='app'> 
			<ASCII />
			<Path path={paths[props.index-1]}/>
			<Code command='Experience'/>
			<Exp />
			<Path path={paths[props.index-1]}/>
			<Code command='Contact Information'/>
			<Contact />
		</div>
	);
}

function Awd_content(props) {
	return (
		<div id='app'> 
			<ASCII />
			<Path path={paths[props.index-1]}/>
			<Code command='Honors'/>
			<Awd />
			<Path path={paths[props.index-1]}/>
			<Code command='Contact Information'/>
			<Contact />
		</div>
	);
}

function App(props) {
	if (props.index == 1) {
	  return <Intro_content  index={props.index}/>;
	}
	else if (props.index == 2) {
		return <Pro_content index={props.index}/>;
	}
	else if (props.index == 3) {
		return <Pub_content index={props.index}/>;
	}
	else if (props.index == 4) {
		return <Exp_content  index={props.index}/>;
	}
	else if (props.index == 5) {
		return <Awd_content  index={props.index}/>;
	}
	// TODO : Project
	else if (props.index == 6) {
		return <Intro_content  index={props.index}/>;
	}	
}

export default App;