import React from 'react';
import styled from 'styled-components';
import { Colors } from './Const';

const WelcomeHeader = styled.h1`
	height: 100px;
	width: 100%;
	color: ${props => props.color};
	display: inline;
`;

export default class Welcome extends React.Component {
	render () {
	return (
			<div>
				<WelcomeHeader color={Colors.primary}> Shashank Murching </WelcomeHeader>
			</div>
		);
	}
}