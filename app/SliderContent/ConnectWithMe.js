import React from 'react';
import {Button} from 'react-md';
import styled, {keyframes} from 'styled-components';
import * as vinyl from '../Assets/SVG/vinyl.svg';

import { Colors } from '../Const';


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
  color: ${props => props.color};
`;


export default class ConnectWithMe extends React.Component {
	render () {
		return (
			<div>
				<Button flat secondary> Flat secondary </Button>
				<Button flat primary> Flat Primary </Button>
				<Button secondary flat style={{margin: '10px'}}>
					<h2>
						<LinkCont color={Colors.secondary} href="mailto:smurch@umich.edu" target='_blank'> smurch@umich.edu </LinkCont>
					</h2>
				</Button>
				<br/>
				<Button secondary flat style={{margin: '10px'}}>
					<h2>
						<LinkCont color={Colors.secondary}href="https://www.linkedin.com/in/shashank-murching" target='_blank'> LinkedIn </LinkCont>
					</h2>
				</Button>
					<div> [Add Spotify]</div>
					<SpinningVinyl src={vinyl} alt='spinning vinyl'/>
			</div>
		);
	}
}