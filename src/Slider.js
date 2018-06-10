import React from 'react';

import SlideSelector from './SlideSelector.js';
import AboutMe from './AboutMe.js';
import Projects from './Projects.js';
import styled from 'styled-components';

//import './Styles/SliderContent.css';

const SlideTitles = ['About Me', 'Projects', 'Resume', 'Connect With Me!'];


const Cont = styled.div`
  text-align: center;
  height: 100%; 
`;

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

	contentSelector() {
		switch(this.state.selectedID) {
			case 0:
				return <AboutMe />
				break;
			case 1:
				return <Projects/>
				break;
			case 2:
				return <h1> Resume </h1>
				break;
			case 3:
				return <h1> Connect </h1>
				break;
		}
	}


  render () {
    return (
    	<Cont>
    		<SlideSelector selectedID={this.state.selectedID} onButtonSelect={this.handleButtonChange} slides={SlideTitles} />
    	  <Cont> {this.contentSelector()} </Cont>
	    </Cont>
    );
  }
}

export default Slider;