import React from 'react';
import styled from 'styled-components';
import './Styles/_globals.scss';

const WelcomeHeader = styled.h1`
	height: 100px;
	padding-top: 40px;
	color: #009688;
`;

const WelcomeIntro = styled.p`
	font-size: large;
	padding-bottom: 10px;
`;


class Welcome extends React.Component {
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

export default Welcome;