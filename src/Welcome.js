import React from 'react';
import styled from 'styled-components';
import { Colors } from './Const';


const WelcomeHeader = styled.h1`
	height: 100px;
	color: ${props => props.color};
	display: inline;
`;


export default class Welcome extends React.Component {
  render () {
    return (
    		<WelcomeHeader color={Colors.primary}> Shashank Murching </WelcomeHeader>
    );
  }
}