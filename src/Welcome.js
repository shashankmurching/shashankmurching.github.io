import React from 'react';
import styled, {keyframes} from 'styled-components';
import vinyl from './vinyl.svg';

const WelcomeHeader = styled.h1`
	height: 100px;
	padding-top: 40px;
	color: #009688;
`;

const WelcomeIntro = styled.p`
	font-size: large;
	padding-bottom: 10px;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`; 

const SpinningVinyl = styled.img`
	animation: ${rotate360} 2s linear infinite;
	height: 80px;
`;


class Welcome extends React.Component {
  render () {
    return (
    	<div>
			<WelcomeHeader> Hey! Thanks For Stopping By My Site! :)</WelcomeHeader>
	        <WelcomeIntro> 
	        	This is a continuous work in progress.
	         	But keep checking in for cool updates!
	        </WelcomeIntro>
	       	<SpinningVinyl src={vinyl} alt="spinning vinyl"/>
	    </div>
    );
  }
}

export default Welcome;