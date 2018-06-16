import React from 'react';
import styled, {keyframes} from 'styled-components';
import vinyl from '../vinyl.svg';
import {Card, CardTitle, CardText} from 'react-md';


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

const CardCont = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;


class ConnectWithMe extends React.Component {
  render () {
    return (
    	<div>
    		<h1> Connect With Me! </h1>

        <h2> smurch@umich.edu </h2>
        <div> [Add LinkedIn and Spotify]</div>
        <CardCont>
          <Card>
            <img src="https://www.amnh.org/var/ezflow_site/storage/images/media/amnh/images/frog/311113-1-eng-US/frog_dynamic_lead_slide.jpg" />
            <CardTitle title="LinkedIn" /> 

          </Card>
        </CardCont>


         <SpinningVinyl src={vinyl} alt="spinning vinyl"/>

	    </div>
    );
  }
}

export default ConnectWithMe;