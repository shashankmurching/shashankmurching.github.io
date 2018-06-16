import React from 'react';
import {Button,FontIcon, SVGIcon} from 'react-md';
import styled, {keyframes} from 'styled-components';
import * as vinyl from '../Assets/SVG/vinyl.svg';
import * as Github from '../Assets/SVG/Github.svg';

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

const LinkCont = styled.a`
  text-decoration: none;
  color: black;
`;


export default class ConnectWithMe extends React.Component {
  render () {
    return (
    	<div>
        <h2> 
          <LinkCont href="mailto:smurch@umich.edu" target="_blank"> smurch@umich.edu </LinkCont>
          <br/>
          <LinkCont href="https://www.linkedin.com/in/shashank-murching" target="_blank"> LinkedIn </LinkCont>
        </h2>
        
        <div> [Add Spotify]</div>

         <SpinningVinyl src={vinyl} alt="spinning vinyl"/>

	    </div>
    );
  }
}