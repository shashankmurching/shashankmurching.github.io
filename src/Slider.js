import React from 'react';

import SlideSelector from './SlideSelector.js';
import AboutMe from './AboutMe.js';

const SlideTitles = ['About Me', 'Projects', 'Resume', 'Connect With Me!'];

class Slider extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedID: 0
		};
		this.handleButtonChange = this.handleButtonChange.bind(this);
	}

	handleButtonChange(id) {
		this.setState({
			selectedID: id
		});
		console.log(id);
	}

  render () {
    return (
    	<div>
    		<SlideSelector selectedID={this.state.selectedID} onButtonSelect={this.handleButtonChange} slides={SlideTitles} />
    	  <AboutMe />
	    </div>
    );
  }
}

export default Slider;