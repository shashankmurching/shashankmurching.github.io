import React from 'react';

import SlideSelector from './SlideSelector.js';
import AboutMe from './SliderContent/AboutMe.js';
import Projects from './SliderContent/Projects.js';
import Resume from './SliderContent/Resume.js';
import ConnectWithMe from './SliderContent/ConnectWithMe.js';
import styled from 'styled-components';

//import './Styles/SliderContent.css';

const SlideTitles = ['About Me', 'Projects', 'Resume', 'Connect With Me!'];


const SliderContainer = styled.div`
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
				return <AboutMe/>
				break;
			case 1:
				return <Projects/>
				break;
			case 2:
				return <Resume/>
				break;
			case 3:
				return <ConnectWithMe/>
				break;
			default:
				return <AboutMe/>
		}
	}


  render () {
    return (
    	<SliderContainer>
    		<SlideSelector selectedID={this.state.selectedID} onButtonSelect={this.handleButtonChange} slides={SlideTitles} />
    	    {this.contentSelector()}
	    </SliderContainer>
    );
  }
}

export default Slider;