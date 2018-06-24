import React from 'react';
import styled from 'styled-components';
import SlideSelector from './SlideSelector';
import { SlideTitles, SlideContent, Colors } from './Const';

const ContentContainer = styled.div`
	margin-top: 10px;
	margin-bottom: 10px;
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	color: black;
`;
const HeaderType = styled.h1`
	color: ${props => props.color};
	align-items: center;
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
					<HeaderType color={Colors.primary}> {SlideTitles[this.state.selectedID]} </HeaderType>
					<ContentContainer> 	
						{SlideContent[this.state.selectedID]} 
					</ContentContainer> </div>;
	}

	render () {
		return (
			<div>
				<SlideSelector selectedID={this.state.selectedID} onButtonSelect={this.handleButtonChange} slides={SlideTitles} />
				{this.contentSelector()}
			</div>
		);
	}
}