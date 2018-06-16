import React from 'react';
import styled, {keyframes} from 'styled-components';
import vinyl from '../vinyl.svg';


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


export default class ConnectWithMe extends React.Component {
  render () {
    return (
    	<div>
        <h2> smurch@umich.edu </h2>
        <div> [Add LinkedIn and Spotify]</div>
        &nbsp;

         <SpinningVinyl src={vinyl} alt="spinning vinyl"/>

	    </div>
    );
  }
}