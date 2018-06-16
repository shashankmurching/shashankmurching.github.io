import React from 'react';
import styled from 'styled-components';
import { Colors } from './Const.js';


const WelcomeHeader = styled.h1`
	height: 100px;
	padding-top: 40px;
	color: ${Colors.primary};
`;

const WelcomeIntro = styled.p`
	font-size: large;
	padding-bottom: 10px;
`;


export default class Welcome extends React.Component {
  render () {
    return (
    	<div>
    		<WelcomeHeader> Shashank Murching </WelcomeHeader>
			<WelcomeHeader> Hey! Thanks For Stopping By My Site! :)</WelcomeHeader>
	        <WelcomeIntro> 
	        	This is a continuous work in progress.
	         	But keep checking in for cool updates!
	        </WelcomeIntro>
	    </div>
    );
  }
}