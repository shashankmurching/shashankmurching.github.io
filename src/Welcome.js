import React from 'react';
import styled from 'styled-components';

const Headerboi = styled.h1`
	height: 100px;
	padding-top: 40px;
	color: #009688;
`;

const Introboi = styled.p`
	font-size: large;
	padding-bottom: 10px;

`;

class Welcome extends React.Component {
  render () {
    return (
    	<div>
			<Headerboi> Hey! Thanks For Stopping By My Site! :)</Headerboi>
	        <Introboi> 
	        	This is a continuous work in progress.
	         	But keep checking in for cool updates!
	        </Introboi>
	    </div>
    );
  }
}

export default Welcome;