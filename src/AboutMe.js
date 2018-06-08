import React from 'react';
import './Styles/AboutMe.css';

class AboutMe extends React.Component {
  render () {
    return (
    	<div className="AboutMe">
			<h1 className="App-header"> About Me</h1>
	        <p className="App-intro"> 
	        	Hi,
	     		I'm Shashank Murching. I'm a rising Junior at the University of Michigan, majoring in Computer Science.
	     		[Add more information here..]
	        </p>
	    </div>
    );
  }
}

export default AboutMe;