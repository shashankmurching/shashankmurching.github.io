import React from 'react';
import styled from 'styled-components';
import SlideSelector from './SlideSelector.js';
import { SlideTitles, SlideContent, Colors } from './Const.js';

const ContentContainer = styled.div`
	padding-top: 10px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
`;
const HeaderType = styled.h1`
	color: ${Colors.primary};
`;

export default class Slider extends React.Component {
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
		//console.log(id);
	}

	contentSelector() {
		return <div> 	
						<HeaderType> {SlideTitles[this.state.selectedID]} </HeaderType>
						{SlideContent[this.state.selectedID]} 
					</div>;
	}

  render () {
    return (
    	<div>
    		<SlideSelector selectedID={this.state.selectedID} onButtonSelect={this.handleButtonChange} slides={SlideTitles} />
    	  <ContentContainer> {this.contentSelector()} </ContentContainer>
	    </div>
    );
  }
}