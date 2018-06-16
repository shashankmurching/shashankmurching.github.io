import React from 'react';
import {Card, CardTitle, CardText} from 'react-md';
import styled from 'styled-components';

const CardCont = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;


class AboutMe extends React.Component {
  render () {
    return (
    	<CardCont >
	        <Card>
	        	<CardTitle title="About Me" subtitle="Overview"/>
	        	<CardText>
	        		<p>
			        	Hi,
				     		I'm a rising Junior at the University of Michigan, majoring in Computer Science.
				     		[Add more information here..]
	        		</p>
	        	</CardText>
	        </Card>
	      </CardCont>
    );
  }
}

export default AboutMe;