import React from 'react';
import styled from 'styled-components';
import { Colors } from './Const';

const WelcomeHeader = styled.h1`
	height: 100px;
	width: 100%;
	color: ${props => props.color};
	display: inline;
`;
// const ContactLinks = styled.a`
// 	margin-right: 10px;
// 	margin-left: 10px;
// 	align: left;
// `;
/*
    		<div> 
    			<Button primary flat> <ContactLinks> smurch@umich.edu </ContactLinks> </Button>
    			<Button primary flat> <ContactLinks> LinkedIn </ContactLinks> </Button>
    		</div>
*/

export default class Welcome extends React.Component {
	render () {
	return (
			<div>
				<WelcomeHeader color={Colors.primary}> Shashank Murching </WelcomeHeader>
			</div>
		);
	}
}