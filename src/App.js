import React from "react";
import {Intro, Edu} from "./intro";
import {Path, Code, Contact} from "./tool";
import "./styles/main.css";

const paths = ['~\Home', '~\Publication', '~\Experience', '~\Award', '~\Project'];
const school_n = process.env.REACT_APP_SCHOOL;
const conference_n = process.env.REACT_APP_PAPER;
const journal_n = process.env.REACT_APP_PAPER;

function Intro_content(props) {
	const result = [];
    for (let i = 0; i < school_n; i++) {
    	result.push(<Edu school={i}/>);
    }
	return (
		  <div id='app'> 
				<Path path={paths[props.index-1]}/>
				<Code command='About Me'/>
				<Intro />
				<Path path={paths[props.index-1]}/>
				<Code command='Education'/>
				{result}
				{/* bock 3 */}
				<Path path={paths[props.index-1]}/>
				<Code command='Contact Information'/>
				<Contact />
		  </div>
	);
}

function Pub_content(props) {
	const result = [];
    for (let i = 0; i < school_n; i++) {
    	result.push(<Pub school={i}/>);
    }
	return (
		  <div id='app'> 
				<Path path={paths[props.index-1]}/>
				<Code command='Publication list'/>
				{result}
				{/* bock 3 */}
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
		return <Pub_content  index={props.index}/>;
	}
	else if (props.index == 3) {
		return <Intro_content  index={props.index}/>;
	}
	else if (props.index == 4) {
		return <Intro_content  index={props.index}/>;
	}
	else if (props.index == 5) {
		return <Intro_content  index={props.index}/>;
	}	
}

export default App;