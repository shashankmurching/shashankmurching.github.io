import React from 'react';
import styled from 'styled-components';
import {Button} from 'react-md';
import { SlideTitles, ButtonLinks } from './Const';
import AboutMe from './SliderContent/AboutMe';

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

const SelectorCont = styled.div`
	padding-bottom: 20px;
	padding-top: 10px;
`;

export default class Slider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedID: 0
		};
	}
	render () {
		return (
			<div>
				<SelectorCont>
					{SlideTitles.map((name, id) => ( <span key={id}>&nbsp;&nbsp;
						<Button secondary flat target="_" href={ButtonLinks[id]}> 
							{name} 
						</Button>&nbsp;&nbsp; </span>))}
				</SelectorCont>
				<ContentContainer> <AboutMe /> </ContentContainer>
			</div>
		);
	}
}