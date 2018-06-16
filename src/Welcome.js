import React from 'react';
import styled from 'styled-components';
import { Colors } from './Const.js';


const WelcomeHeader = styled.h1`
	height: 100px;
	padding-top: 40px;
	color: ${Colors.primary};
`;

const WelcomeIntro = styled.h2`
	font-size: large;
	padding-bottom: 10px;
`;


export default class Welcome extends React.Component {
  render () {
    return (
    	<div>
    		<WelcomeHeader> Shashank Murching </WelcomeHeader>
    		<WelcomeIntro>
					I'm a Junior at the University of Michigan - majoring in Computer Science
					and minoring in Mathematics.
    		</WelcomeIntro>
	    </div>
    );
  }
}