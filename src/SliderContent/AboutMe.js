import React from 'react';
import {Card, CardTitle, CardText} from 'react-md';


class AboutMe extends React.Component {
  render () {
    return (
    	<div>
			<h1 className="App-header"> About Me</h1>
	        <div className="App-intro"> 
	        	Hi,
		     		I'm a rising Junior at the University of Michigan, majoring in Computer Science.
		     		[Add more information here..]
	        </div>
	    </div>
    );
  }
}

export default AboutMe;